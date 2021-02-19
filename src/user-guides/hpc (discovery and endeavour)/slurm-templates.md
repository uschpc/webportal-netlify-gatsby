---
author: Derek Strong
id: 8
date: 2021-02-05T12:00:00.387Z
title: Slurm Job Script Templates
path: slurm-templates
parentPath: user-information/user-guides/high-performance-computing
cat: discoveryGuides
parentPage: User Guides
sideMenuParent: High-Performance Computing
backToTopBtnFlag: true
excerpt: Templates for common Slurm job scripts.
---

The following sections offer Slurm job script templates and descriptions for various use cases on CARC HPC clusters.

If you're not familiar with the Slurm job scheduler or submitting jobs, please see the guide for [Running Jobs](/user-information/user-guides/high-performance-computing/running-jobs).

> Note: The Slurm option `--cpus-per-task` refers to logical CPUs. On CARC compute nodes, there are typically two physical processors (sockets) per node with multiple cores per processor, such that 1 core = 1 thread = 1 logical CPU. These terms may be used interchangeably.

### Single-threaded jobs

A single-threaded (serial) job uses 1 thread on 1 compute node. This is the most basic job that can be submitted, but it does not fully utilize the compute resources available on CARC HPC clusters.

An example job script:

```
#!/bin/bash

#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=1
#SBATCH --mem=8GB
#SBATCH --time=1:00:00
#SBATCH --account=<account_id>

module purge
module load gcc/8.3.0
module load julia/1.5.2

julia script.jl
```

The `--cpus-per-task` option specifies the number of threads to use, which is 1 for a single-threaded job. Be sure to modify the `--mem` and `--time` options as needed, and add a `--partition` option if needed as well.

### Multi-threaded jobs

A multi-threaded job uses multiple threads with shared memory on 1 compute node. This is a common use case as it enables basic parallel computing.

An example job script:

```
#!/bin/bash

#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=16
#SBATCH --mem=32GB
#SBATCH --time=2:00:00
#SBATCH --account=<account_id>

module purge
module load gcc/8.3.0
module load julia/1.5.2

julia script.jl
```

The `--cpus-per-task` option specifies the number of threads to use, which is > 1 for a multi-threaded job. Be sure to modify the `--cpus-per-task`, `--mem`, and `--time` options as needed, and add a `--partition` option if needed as well. The maximum number of threads and amount of memory that can be used varies across compute nodes. For details, see the [Discovery resource overview](/user-information/user-guides/high-performance-computing/discovery-resources) or the [Endeavour resource overview](/user-information/user-guides/high-performance-computing/endeavour-resources).

Please note that you may have to modify your scripts and programs to explicitly use multiple threads, depending on the application or programming language you are using.

Some compiled programming languages like C, C++, and Fortran use [OpenMP](https://www.openmp.org) for multithreading. In these cases, you should compile your programs with an `openmp` flag and explicitly set the environment variable `OMP_NUM_THREADS` (number of threads to parallelize over) in your job scripts.

An example job script using OpenMP:

```
#!/bin/bash

#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=16
#SBATCH --mem=32GB
#SBATCH --time=2:00:00
#SBATCH --account=<account_id>

module purge
module load gcc/8.3.0

ulimit -s unlimited

export OMP_NUM_THREADS=16

./omp_program
```

Keep in mind that your project accounts are charged based on CPU-hours used, so only request as many threads as needed. You may need to experiment with the number and monitor your job to find the optimal amount. Also keep in mind that requesting fewer resources should result in shorter job queue times.

### MPI jobs

The Message Passing Interface (MPI) is a message-passing standard used in parallel programming, primarily when using multiple compute nodes with distributed memory. For more information, see the user guide for [Message Passing Interface (MPI)](/user-information/user-guides/high-performance-computing/mpi).

An example job script:

```
#!/bin/bash

#SBATCH --nodes=6
#SBATCH --ntasks=144
#SBATCH --cpus-per-task=1
#SBATCH --mem-per-cpu=3GB
#SBATCH --time=24:00:00
#SBATCH --exclusive
#SBATCH --account=<account_id>

module purge
module load gcc/8.3.0
module load openmpi/4.0.2

ulimit -s unlimited

export OMP_NUM_THREADS=1

mpirun -bind-to core -map-by numa -np 144 ./mpi_program
```

The `--nodes` option specifies how many nodes to use, and the `--ntasks` option specifies the number of tasks to run (MPI ranks). Be sure to modify the `--cpus-per-task`, `--mem-per-cpu`, and `--time` options as needed, and add `--ntasks-per-node` or `--partition` options if needed as well. The `--exclusive` option specifies to not share nodes with other jobs, which can improve the performance of MPI jobs.

Please note that you will have to compile your programs with an MPI compiler. Depending on the MPI implementation you choose to use, you may also want to use Slurm's `srun` command instead of `mpirun`.

Keep in mind that your project accounts are charged based on CPU-hours used, so only request as many tasks and threads as needed. You may need to experiment with the numbers and monitor your job to find the optimal amounts. Also keep in mind that requesting fewer resources should result in shorter job queue times.

### Multi-threaded MPI jobs

Multi-threaded MPI jobs use multi-threaded tasks on multiple compute nodes, typically hybrid OpenMP/MPI jobs. For optimal performance, there are additional arguments that should be passed to programs. Specifically, the environment variable `OMP_NUM_THREADS` (number of threads to parallelize over) should be explicitly set. Also be sure to link multi-threaded libraries (e.g., OpenBLAS, Intel MKL, FFTW) to multi-threaded MPI programs (and single-threaded libraries to single-threaded MPI programs).

An example job script:

```
#!/bin/bash

#SBATCH --nodes=10
#SBATCH --ntasks=120
#SBATCH --cpus-per-task=2
#SBATCH --mem-per-cpu=2GB
#SBATCH --time=24:00:00
#SBATCH --exclusive
#SBATCH --account=<account_id>

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

mpirun -bind-to core -map-by numa -np 120 ./cp2k.psmp -i input -o output
```

### Job arrays

[Job arrays](https://slurm.schedmd.com/job_array.html) allow you to use a single job script to launch many similar jobs. Common use cases include:

- varying model parameters (e.g., running simulations with different conditions)
- processing different input files (e.g., running data analysis pipelines with different datasets)

An example job script:

```
#!/bin/bash

#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=1
#SBATCH --mem-per-cpu=2GB
#SBATCH --time=1:00:00
#SBATCH --account=<account_id>
#SBATCH --array=1-10

module purge
module load gcc/9.2.0

my_program --input-file=input_${SLURM_ARRAY_JOB_ID} --output-file=output_${SLURM_ARRAY_JOB_ID}
```

This example uses a program `my_program` that takes the options `--input-file` and `--output-file` to specify the paths to the input and output files, assuming the input files are named similar to *input_1*, *input_2*, etc. Job scripts for job arrays typically make use of the environment variables `SLURM_ARRAY_JOB_ID` and/or `SLURM_ARRAY_TASK_ID` to iterate over parameters or input files in some manner. This example job script would launch 10 jobs with the same `sbatch` options but using the different input files and creating different output files, based on the `SLURM_ARRAY_JOB_ID` index (in this example, 1-10). Array job 1 would use *input_1* and create *output_1*, array job 2 would use *input_2* and create *output_2*, etc. This is one possible setup for an array job, but alternative setups are also possible.

Please note that the job array size should match the input size (e.g., number of simulations to run or number of datasets to process). Make sure that the resources you request are sufficient for one individual job (not the entire array as a whole).

### GPU jobs

Some programs can take advantage of the unique hardware architecture in a graphics processing unit (GPU). GPUs can be used for specialized scientific computing work, including 3D modelling and machine learning. For more information, see the user guide for [Using GPUs](/user-information/user-guides/high-performance-computing/using-gpus).

To request a GPU, add one of the following `sbatch` options to your Slurm job script:

```
#SBATCH --gres=gpu:<number>
```

or

```
#SBATCH --gres=gpu:<gpu_type>:<number>
```

where:

`<number>` is the number of GPUs per node requested, and  
`<gpu_type>` is one of the following: k40, p100, or v100.

Use the chart below to determine which `gpu_type` to specify:

|gpu_type | Max number of GPUs per node | GPU model|
|---|---|---|
|k40 	  |2| NVIDIA Tesla K40 |
|p100 	|2| NVIDIA Tesla P100 |
|v100 	|2| NVIDIA Tesla V100 |

An example job script:

```
#!/bin/bash

#SBATCH --gres=gpu:k40:1
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=8
#SBATCH --mem=16GB
#SBATCH --time=1:00:00
#SBATCH --account=<account_id>

module purge
module load gcc/8.3.0
module load cuda/10.1.243

nvcc program.cu -o program

./program
```
