---
author: Marco Olguin
id: 10
date: 2021-02-23T12:00:00
title: Message Passing Interface (MPI)
path: mpi
parentPath: user-information/user-guides/high-performance-computing
cat: discoveryGuides
parentPage: User Guides
sideMenuParent: Discovery
backToTopBtnFlag: true
excerpt: A user guide on the Message Passing Interface (MPI) used in parallel programming.
---

The Message Passing Interface (MPI) is a **message-passing standard** used in parallel programming. The MPI standard exists in numerous implementations, four of which the CARC provides support for:

 - MPICH
 - OpenMPI
 - MVAPICH2
 - Intel MPI

These four MPI implementations are stable with multi-threaded programs and, prior to the advent of the Unified Communication X (UCX) framework, the four MPI libraries exhibited fairly similar performance. The UCX framework is a collaboration between industry, laboratories, and academia formed to create an open-source, production grade communication framework for data-centric and high-performance applications. UCX is performance-oriented, enabling a low overhead in communication paths, allowing a near native-level performance while establishing a cross-platform unified API supporting various network Host Card Adapters and processor technologies. Please note that CARC clusters use InfiniBand networks.

### Setting up MPI

Before performing any work with MPI, it is necessary to load the appropriate MPI implementation for your program.

| MPI Implementation | Advantages | Disadvantages |
|---|---|---|
| MPICH     | Considered a reference platform with InfiniBand support through a relatively recent LibFabrics interface, feature set is the same as that of MVAPICH2 and Intel MPI (both of which are based on MPICH) |   |
| OpenMPI   | Flexible usage | Not ABI-compatible with other MPI libraries |
| MVAPICH2  | Optimized for InfiniBand | Provides less flexible task affinity for multi-threaded programs |
| Intel MPI | Flexible usage | Commercial product that requires a license |

MPICH, MVAPICH2, and Intel MPI can also be freely interchanged because of their common Application Binary Interface (ABI).

MPI-UCX libraries are available only under the GNU GCC programming environment because the Intel compilers cannot build the UCX framework. Both the MPICH and OpenMPI modules have been built with UCX support under the `gcc` compiler module trees. We have found the MPICH-UCX and OpenMPI-UCX libraries to exhibit the fastest performance out of the four different MPI libraries available on CARC systems.

To load an MPI implementation, use the following module commands:

```sh
module purge
module load <compiler> <MPI implementation>
```

where:

`<compiler>` is one of the compilers: `gcc` (GNU) or `intel` (Intel), and  
`<MPI implementation>` is one of the MPI implementations: `mpich`, `openmpi`, `mvapich2`, or `intel-mpi`.

*Example 1*: If you are running a program that is compiled with a GCC compiler and uses MPICH:

```sh
module purge
module load gcc/9.2.0 mpich
```

*Example 2*: If you are running a program that is compiled with an Intel compiler and uses Intel MPI:

```sh
module purge
module load intel/19.0.4 intel-mpi
```

### Compiling MPI programs

Below is a list of MPI-specific compiler commands with their equivalent standard command versions:

| Language | MPI Command (GCC, Intel) | Standard Command (GCC, Intel) |
|---|---|---|
| C | `mpicc, mpiicc` | `gcc, icc` |
| C++ | `mpicxx, mpiicpc` | `g++, icpc` |
| Fortran 77/90 | `mpif77/mpif90, mpiifort` | `gfortran, ifort` |

When you compile an MPI program, make sure that you record the module and version of MPI used and add the corresponding `module load <compiler> <MPI implementation>` to your Slurm job script.

> Note: Intel MPI supplies separate compiler commands (wrappers) for the Intel compilers, in the form of `mpiicc`, `mpiicpc`, and `mpiifort`. Using `mpicc`, `mpicxx`, and `mpif90` with Intel will call the GNU compilers.

### Running MPI programs

On CARC systems, you can run MPI jobs with Slurm's `srun` command, which launches the parallel tasks. For help with `srun`, please consult the manual page by entering `man srun` or view the available options by entering `srun --help`.

To run MPI tasks on CARC clusters, use a command like the following within a job script:

```sh
srun --mpi=pmix_v2 -n $SLURM_NTASKS ./mpi_program.x
```

The important parameter to include is the number of MPI processes (`-n`). The Slurm-provided environment variable `SLURM_NTASKS` corresponds to the Slurm task count (i.e., the number of MPI ranks) requested with the `#SBATCH --ntasks` option in the job script.

The default MPI process management interface for `srun` is pmix\_v2, so `srun ...` is equivalent to `srun --mpi=pmix_v2 ...`. pmix\_v2 is only used for the OpenMPI implementation, however, and the pmix module should also be loaded in this case. For other MPI implementations, use pmi2 instead: `srun --mpi=pmi2 ...`.

MPI programs typically perform better with homogeneous compute node types, so it is useful to add the `--constraint` option to the job script specifying a node type. Enter the `sinfo2` command to see node types by partition (the ACTIVE_FEATURES column). In addition, your job's performance can be protected by adding the `--exclusive` option to the job script, which will group your MPI tasks to a certain set of nodes and ensure that other jobs do not run on these nodes. These two options help ensure consistency of communications for tasks and reduce latency as well as possible interference from other jobs. It is also a good idea to match the number of tasks (in a single-threaded program) or the number of tasks X the CPUs per task (in a multi-threaded program) to the total CPUs (cores) available on the compute nodes requested so that the nodes are fully utilized.

An example job script for a single-threaded program:

```
#!/bin/bash

#SBATCH --nodes=6
#SBATCH --ntasks=144
#SBATCH --cpus-per-task=1
#SBATCH --mem-per-cpu=3GB
#SBATCH --time=24:00:00
#SBATCH --constraint="xeon-4116"
#SBATCH --exclusive
#SBATCH --account=<account_id>

module purge
module load gcc/8.3.0
module load openmpi/4.0.2
module load pmix/3.1.3

ulimit -s unlimited

srun --mpi=pmix_v2 -n $SLURM_NTASKS ./mpi_program.x
```

### Running  multi-threaded MPI programs

For optimal performance of multi-threaded MPI programs, there are additional arguments that should be passed to the program. If using OpenMP for threading, for example, the environment variable `OMP_NUM_THREADS` should be set, which specifies the number of threads to parallelize over. The `OMP_NUM_THREADS` count should equal the requested `--cpus-per-task` option in the job script. You can use the Slurm-provided environment variable `SLURM_CPUS_PER_TASK` to set `OMP_NUM_THREADS`:

```sh
export OMP_NUM_THREADS=$SLURM_CPUS_PER_TASK
```

If needed, make sure to also link multi-threaded libraries (e.g., OpenBLAS, Intel MKL, FFTW) to multi-threaded MPI programs.

An example job script for a multi-threaded program:

```
#!/bin/bash

#SBATCH --nodes=10
#SBATCH --ntasks=120
#SBATCH --cpus-per-task=2
#SBATCH --mem-per-cpu=2GB
#SBATCH --time=24:00:00
#SBATCH --constraint="xeon-4116"
#SBATCH --exclusive
#SBATCH --account=<account_id>

module purge
module load gcc/8.3.0
module load openmpi/4.0.2
module load pmix/3.1.3

ulimit -s unlimited

export OMP_NUM_THREADS=$SLURM_CPUS_PER_TASK

srun --mpi=pmix_v2 --cpu-bind=ldoms -n $SLURM_NTASKS ./mpi_plus_openmp_program.x
```

### Task affinity

On CARC clusters, compute nodes have a NUMA (Non-Uniform Memory Access) shared-memory architecture, so the performance of MPI programs can be improved by pinning MPI tasks and/or OpenMP threads to processor sockets and CPUs/cores. The pinning prevents the MPI tasks and threads from migrating to CPUs that have a more distant path to data in memory.

All MPI implementations except for MPICH automatically bind MPI tasks to CPUs (cores), but the behavior and adjustment options depend on the specific MPI implementation. MPI task pinning is described in each of the specific MPI implementation sections below.

For details on the binding options available with `srun`, enter `srun --cpu-bind=help`.

### Running MPICH programs

[MPICH](https://www.mpich.org/) (formerly referred to as MPICH2) is an open source implementation developed at Argonne National Laboratories. The newer versions support both InfiniBand and UCX.

By default, MPICH does not bind tasks to CPUs, so in the case of a single-threaded program use the `srun` option `--cpu-bind=cores` to bind tasks to cores. You can run single-threaded programs with the following:

```sh
module load gcc/8.3.0 mpich

srun --mpi=pmi2 --cpu-bind=cores -n $SLURM_NTASKS ./mpi_program.x
```

For multi-threaded programs, use `--cpu-bind=ldoms` instead (to bind to local NUMA domains, typically equivalent to sockets on CARC systems):

```sh
module load gcc/8.3.0 mpich

export OMP_NUM_THREADS=$SLURM_CPUS_PER_TASK

srun --mpi=pmi2 --cpu-bind=ldoms -n $SLURM_NTASKS ./mpi_plus_openmp_program.x
```

### Running OpenMPI programs

[OpenMPI](https://www.open-mpi.org/) is an open source implementation developed by a consortium of academic, research, and industry partners. It supports both InfiniBand and UCX.

By default, OpenMPI binds MPI tasks to cores, so the optimal binding configuration of a single-threaded MPI program is one MPI task to one CPU (core). You can run single-threaded programs with the following:

```sh
module load gcc/8.3.0 openmpi pmix

srun --mpi=pmix_v2 -n $SLURM_NTASKS ./mpi_program.x
```

For multi-threaded programs, use `--cpu-bind=ldoms` instead (to bind to local NUMA domains, typically equivalent to sockets on CARC systems):

```sh
module load gcc/8.3.0 openmpi pmix

export OMP_NUM_THREADS=$SLURM_CPUS_PER_TASK

srun --mpi=pmix_v2 --cpu-bind=ldoms -n $SLURM_NTASKS ./mpi_plus_openmp_program.x
```

### Running MVAPICH2 programs

[MVAPICH2](https://mvapich.cse.ohio-state.edu/), developed at the Ohio State University, is an open source implementation based on MPICH and optimized for InfiniBand networks.

By default, MVAPICH2 binds MPI tasks to cores, so the optimal binding configuration of a single-threaded MPI program is one MPI task to one CPU (core). You can run single-threaded programs with the following:

```sh
module load intel mvapich2

srun --mpi=pmi2 -n $SLURM_NTASKS ./mpi_program.x
```

For multi-threaded programs, you need to disable the task-to-core affinity by setting `MV2_ENABLE_AFFINITY=0`. This also means you need to pin the tasks manually. With Intel compilers, set `KMP_AFFINITY=verbose,granularity=core,compact,1,0`:

```sh
module load intel mvapich2

export OMP_NUM_THREADS=$SLURM_CPUS_PER_TASK
export MV2_ENABLE_AFFINITY=0
export KMP_AFFINITY=verbose,granularity=core,compact,1,0

srun --mpi=pmi2 -n $SLURM_NTASKS ./mpi_plus_openmp_program.x
```

For multi-threaded programs compiled with other compilers, use MPICH's task affinity options instead:

```sh
module load gcc/8.3.0 mvapich2

export OMP_NUM_THREADS=$SLURM_CPUS_PER_TASK
export MV2_ENABLE_AFFINITY=0

srun --mpi=pmi2 --cpu-bind=ldoms -n $SLURM_NTASKS ./mpi_plus_openmp_program.x
```

### Running Intel MPI programs

[Intel MPI](https://software.intel.com/content/www/us/en/develop/tools/oneapi/components/mpi-library.html) is an implementation based on MPICH that runs on many different network interfaces and integrates with other Intel tools (e.g., compilers and performance tools such as VTune). For best performance, we recommend using Intel compilers along with Intel MPI, so use the Intel compiler wrapper calls `mpiicc`, `mpiicpc`, and `mpiifort` to compile MPI programs.

> For a quick introduction to Intel MPI, see Intel's [Getting Started guide](https://software.intel.com/en-us/get-started-with-mpi-for-linux).

By default, Intel MPI binds MPI tasks to cores, so the optimal binding configuration of a single-threaded MPI program is one MPI task to one CPU (core). You can run single-threaded programs with the following:

```sh
module load intel intel-mpi

srun --mpi=pmi2 -n $SLURM_NTASKS ./mpi_program.x
```

For multi-threaded programs, set `KMP_AFFINITY=verbose,granularity=core,compact,1,0`:

```sh
module load intel intel-mpi

export OMP_NUM_THREADS=$SLURM_CPUS_PER_TASK
export KMP_AFFINITY=verbose,granularity=core,compact,1,0

srun --mpi=pmi2 -n $SLURM_NTASKS ./mpi_plus_openmp_program.x
```

### Common MPI ABI

For MPICH 3.1 and higher, MVAPICH 2 1.9 and higher, and Intel MPI 5.0 and higher, the MPI libraries are interchangeable at the binary level using the common Application Binary Interface (ABI). This means, for example, that you can compile a program with MPICH but run it using the Intel MPI libraries, thus taking advantage of the functionality of Intel MPI.

### Additional resources

If you have questions about or need help with MPI, please [submit a help ticket](https://carc.usc.edu/user-information/ticket-submission) and we will assist you.

[Slurm srun guide](https://slurm.schedmd.com/srun.html)  
[Slurm MPI guide](https://slurm.schedmd.com/mpi_guide.html)  
[Slurm multicore support](https://slurm.schedmd.com/mc_support.html)  
[Slurm resource binding](https://slurm.schedmd.com/resource_binding.html)  
[LLNL parallel computing tutorial](https://computing.llnl.gov/tutorials/parallel_comp/)  
[LLNL MPI tutorial](https://computing.llnl.gov/tutorials/mpi/)
