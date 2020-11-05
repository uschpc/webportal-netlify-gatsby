---
author: Derek Strong
id: 8
date: 2020-08-31T12:00:00.387Z
title: Slurm Job Script Templates
path: slurm-templates
parentPath: user-information/user-guides/high-performance-computing/discovery
cat: discoveryGuides
parentPage: User Guides
sideMenuParent: Discovery
backToTopBtnFlag: true
excerpt: Templates for common Slurm job scripts.
---

The following sections offer Slurm job script templates and descriptions for various use cases on CARC HPC clusters.

If you're not familiar with the Slurm job scheduler or submitting jobs, please see the [Getting Started with Discovery](/user-information/user-guides/high-performance-computing/discovery/getting-started-discovery) and [Running Jobs](/user-information/user-guides/high-performance-computing/discovery/running-jobs) user guides.

> Note: We use CPU, core, and thread interchangeably here, because they are equivalent on CARC systems:  
1 CPU = 1 core = 1 thread.

### Single-threaded jobs

A single-threaded job, as the name implies, only uses 1 core on 1 compute node. This is the most basic job that can be submitted, but it does not fully utilize the compute resources available on Discovery.

An example job script:

```sh
#!/bin/bash

#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=1
#SBATCH --mem=16GB
#SBATCH --time=1:00:00
#SBATCH --account=<account_id>

module load gcc/8.3.0
module load julia/1.4.1

julia /path/to/script.jl
```

The `--cpus-per-task` option specifies the number of threads to use, which is 1 in this case. Be sure to modify the `--mem` and `--time` options as needed.

### Multi-threaded jobs

A multi-threaded job, as the name implies, uses more than 1 core but still only uses 1 compute node. This is a common use case as it enables basic parallel computing.

An example job script:

```sh
#!/bin/bash

#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=8
#SBATCH --mem=32GB
#SBATCH --time=1:00:00
#SBATCH --account=<account_id>

module load gcc/8.3.0
module load julia/1.4.1

julia /path/to/script.jl
```

The `--cpus-per-task` option specifies the number of threads to use, which is 8 in this case. The number of threads and memory that can be used depends on the available compute nodes that can be used. In the main partition on Discovery, the compute nodes have a maximum of 24 threads and ~92 GB of memory each. In the epyc-64 partition, the compute nodes have a maximum of 64 threads and ~248 GB of memory each. Be sure to modify the `--cpus-per-task`, `--mem`, and `--time` options as needed, and be sure to modify your programs or scripts if needed to use the resources requested. Keep in mind that requesting a lot of resources may result in longer queue times.

Some programs use OpenMP for multithreading, in which case you should explicitly set the environment variable `OMP_NUM_THREADS` (number of threads to parallelize over) in your job script.

An example job script using OpenMP:

```sh
#!/bin/bash

#SBATCH -J openmp
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=24
#SBATCH --mem-per-cpu=3GB
#SBATCH --time=24:00:00
#SBATCH --account=<account_id>
#SBATCH --exclusive
#SBATCH --partition=main
#SBATCH --constraint="xeon-4116"

module purge
module load usc

ulimit -s unlimited

export OMP_NUM_THREADS=24

cd ${SLURM_SUBMIT_DIR}
/path/to/NPB3.4-MZ/NPB3.4-MZ-OMP/bin/bt-mz.D.x > output.log
```

### MPI jobs

The Message Passing Interface (MPI) is a message-passing standard used in parallel programming, primarily when using multiple compute nodes. For more information, see the [Message Passing Interface (MPI) user guide](/user-information/user-guides/high-performance-computing/discovery/mpi).

An example job script:

```sh
#!/bin/bash

#SBATCH -J pure_mpi
#SBATCH --nodes=6
#SBATCH --ntasks=144
#SBATCH --cpus-per-task=1
#SBATCH --mem-per-cpu=3GB
#SBATCH --time=24:00:00
#SBATCH --account=<account_id>
#SBATCH --exclusive
#SBATCH --partition=main
#SBATCH --constraint="xeon-4116"

module purge
module load usc

ulimit -s unlimited

export OMP_NUM_THREADS=1

cd ${SLURM_SUBMIT_DIR}
mpirun -bind-to core -map-by numa -np 144 /path/to/NPB3.4.1/NPB3.4-MPI/bin/bt.D.x.mpi_io_full > output.log
```

### Multi-threaded MPI jobs

For optimal performance, especially in the case of multi-threaded parallel programs, there are additional arguments that must be passed to the program. Specifically, the variable `OMP_NUM_THREADS` (number of threads to parallelize over) needs to be set.

When running multi-threaded jobs, make sure to also link multi-threaded libraries (e.g., MKL, FFTW), and vice versa, link single-threaded libraries to single-threaded MPI programs.

An example job script:

```sh
#!/bin/bash

#SBATCH -J hybrid_mpi_openmp
#SBATCH --nodes=10
#SBATCH --ntasks=120
#SBATCH --cpus-per-task=2
#SBATCH --mem=0
#SBATCH --time=24:00:00
#SBATCH --account=<account_id>
#SBATCH --exclusive
#SBATCH --partition=main
#SBATCH --constraint="xeon-4116"

module purge
module load gcc/9.2.0
module load openmpi/4.0.2
module load pmix/3.1.3
module load openblas/0.3.7
module load netlib-scalapack/2.1.0-openblas-openmpi
module load fftw/3.3.8-openmpi

ulimit -s unlimited

export OMP_NUM_THREADS=2
export OPENBLAS_NUM_THREADS=2

cd ${SLURM_SUBMIT_DIR}
mpirun -bind-to core -map-by numa -np 120 /path/to/cp2k-7.1/exe/gcc9_openmpi/cp2k.psmp -i input -o output
```

### Array jobs

[Array jobs](https://slurm.schedmd.com/job_array.html) allow you to use a single job script to launch multiple jobs that do something similar. For example, you can use an array job if you want to run the same program but have it read in different input files. It makes use of the `$SLURM_ARRAY_ID` environment variable.

Assumming you have a program named `myprogram` that takes the options `--input_file` and `--output_file` to specify the path to the input file and outfiles, you can use a job script like so to launch 10 array jobs:

```sh
#!/bin/bash

#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=1
#SBATCH --mem-per-cpu=2GB
#SBATCH --time=1:00:00
#SBATCH --account=<account_id>
#SBATCH --array=1-10

module load usc

# Assume input files are named similar to
# input_1, input_2, ..., input_10

myprogram --input_file=input_${SLURM_ARRAY_ID} --output_file=output_${SLURM_ARRAY_ID}
```

`$SLURM_ARRAY_ID` will take on the values specified in the `--array` option. Make sure that the resources you request are sufficient for one individual job, not the entire array as a whole.

In this case, `myprogram` only needs 1 CPU with 2 GB of memory.

### GPU jobs

Some programs can take advantage of the unique hardware architecture in a graphics processing unit (GPU). GPUs can be used for specialized scientific computing work, including 3D modelling and machine learning. For more information, see the user guide for [Using GPUs](/user-information/user-guides/high-performance-computing/discovery/using-gpus).

To request a GPU, add one of the following lines to your Slurm job script:

```
--gres=gpu:<number>
```

or

```
--gres=gpu:<gpu_type>:<number>
```

where:

`<number>` is the number of GPUs per node requested, and  
`<gpu_type>` is one of the following: k20, k40, k80, p100, or v100.

Use the chart below to determine which `gpu_type` to specify:

|`gpu_type` | Max number of GPUs per node | GPU model|
|---|---|---|
|k20 	|2| NVIDIA Tesla K20 |
|k40 	|2| NVIDIA Tesla K40 |
|k80 	|4| NVIDIA Tesla K80 (condo nodes) |
|p100 	|2| NVIDIA Tesla P100 |
|v100 	|2| NVIDIA Tesla V100 |

An example job script:

```sh
#!/bin/bash

#SBATCH --gres=gpu:k40:1
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=8
#SBATCH --mem=16GB
#SBATCH --time=1:00:00
#SBATCH --account=<account_id>

module load gcc/8.3.0
module load cuda/10.1.243

nvcc program.cu -o program
./program
```
