---
author: Marco Olguin
id: 1
date: 2020-08-04T12:00:00
title: Message Passing Interface (MPI)
route: User Guides
routePath: user-information/user-guides/high-performance-computing/parallel-programming
path: mpi
parentPath: user-information/user-guides/high-performance-computing/parallel-programming
cat: parallelProgramming
parentPage: User Guides
sideMenuParent: parallelProgramming
backToTopBtnFlag: true
---

Message Passing Interface (MPI) is a **message-passing standard** using in parallel programming. The MPI standard exists in numerous implementations, four of which the CARC provides support for:

 - MPICH
 - OpenMPI
 - MVAPICH2
 - Intel MPI

These four MPI distributions are stable with multi-threaded programs and, prior to the advent of the Unified Communication X (UCX) framework, the four MPI libraries exhibited fairly similar performance. The UCX framework is a collaboration between industry, laboratories, and academia formed to create an open-source, production grade communication framework for data-centric and high-performance applications. UCX is performance-oriented, enabling a low overhead in communication paths, allowing a near native-level performance while establishing a cross-platform unified API supporting various network Host Card Adapters and processor technologies.

### Setting up MPI

Before performing any work with MPI, users need to source the MPI distribution appropriate for their parallel computing needs.

| MPI Distribution | Advantages                                                                                                                                                                                             | Disadvantages                                                                                                          |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| MPICH            | Considered a reference platform with InfiniBand support through a relatively recent LibFabrics interface, feature set is the same as that of Intel MPI and MVAPICH2 (both of which are based on MPICH) |                                                                                                                       |
| OpenMPI          | Flexible                                                                                                                                                                                              | Performance is slightly below that of Intel MPI and MVAPICH2, not ABI-compatible with other MPI libraries provided by the CARC |
| MVAPICH2         | Optimized for InfiniBand                                                                                                                                                                              | Provides a less flexible process/core affinity in a multi-threaded environment                                        |
| Intel MPI        | Good performance, flexible usage                                                                                                                                                                      | Commercial product that requires a license                                                                            |

Intel MPI, MVAPICH2 and MPICH can also be freely interchanged due to their common Application Binary Interface (ABI).

MPI-UCX libraries are available only under the GNU GCC programming environment because the Intel compilers cannot build the UCX framework. Both MPICH and OpenMPI were built with UCX support under the gcc compiler modules. We have found the MPICH-UCX and OpenMPI-UCX libraries to exhibit the fastest performance out of the four different MPI libraries available on Discovery.

To set up an MPI package, use the following module commands:

```
module purge
module load <compiler> <MPI distribution>
```

where:

`<compiler>` is one of the compilers: `gcc` (GNU) or `intel` (Intel)) and  
`<MPI distribution>` is one of the MPI libraries: `mvapich2`, `openmpi`, `mpich-ucx`, or `intel-mpi`.

*Example 1*: If you're running a program that was compiled with the Intel compilers and uses Intel MPI:

```
module purge
module load intel/19.0.4 intel-mpi
```

*Example 2*: If you're running a program that was compiled with the GCC compilers and uses MPICH-UCX:

```
module purge
module load gcc/9.2.0 mpich-ucx
```

### Compiling MPI

Compiling with MPI is quite straightforward. Below is a list of MPI-specific compiler commands with their equivalent standard command versions:

| Language | MPI Command | Standard Command (Intel, GCC) |
|---|---|---|
| C | `mpicc` | `icc, gcc` |
| C++ | `mpicxx` | `icpc, g++` |
| Fortran 77/90 | `mpif90, mpif77` | `ifort, gfortran` |

When you compile a parallel program, make sure that you record the version/module of MPI used and add the corresponding `module load <mpi-library>` to your SLURM job script.

>Note: Intel MPI supplies separate compiler commands (wrappers) for the Intel compilers, in the form of `mpiicc`, `mpiicpc` and `mpiifort`. Using `mpicc`, `mpicxx` and `mpif90` will call the GNU compilers.


### Running MPI

The `mpirun` command launches the parallel job. For help with `mpirun`, please consult the man pages (`man mpirun`) or run `mpirun --help`.

To run on the Discovery cluster:

```
mpirun -np $SLURM_NTASKS ./mpi_program.x
```

The important parameter to include is the number of MPI processes specification (`-np`).

The `$SLURM_NTASKS` variable corresponds to the SLURM task count (i.e., the number of MPI ranks) requested with the `#SBATCH --ntasks` option.

### Multi-threaded MPI

For optimal performance, especially in the case of multi-threaded parallel programs, there are additional arguments that must be passed to the program. Specifically, the variable `OMP_NUM_THREADS` (number of threads to parallelize over) needs to be set.

When running multi-threaded jobs, make sure to also link multi-threaded libraries (e.g., MKL, FFTW), and vice versa, link single threaded libraries to single threaded MPI programs.

The `OMP_NUM_THREADS` count can be calculated automatically by utilizing SLURM-provided variables, assuming that all nodes have the same CPU core count. This can prevent accidental over or under-subscription when node or task count in the SLURM script changes:

```
// Find number of threads for OpenMP
// Find number of MPI tasks per node
set TPN=`echo $SLURM_TASKS_PER_NODE | cut -f 1 -d \(`

// Find number of CPU cores per node
set PPN=`echo $SLURM_JOB_CPUS_PER_NODE | cut -f 1 -d \(`
@ THREADS = ( $PPN / $TPN )
setenv OMP_NUM_THREADS $THREADS (if using sh or csh)
export OMP_NUM_THREADS=$THREADS (if using bash)

mpirun -genv $OMP_NUM_THREADS -genv MV2_ENABLE_AFFINITY 0 -np $SLURM_NTASKS ./mpi_plus_openmp_program.x
```

### Task/thread affinity

In the NUMA (Non Uniform Memory Access) architecture, which is present on the Discovery cluster, it is often advantageous to pin MPI tasks and/or OpenMP threads to the CPU sockets and cores. We have seen up to a 60% performance degradation in high memory bandwidth codes when process/thread affinity is not enforced. The pinning prevents the processes and threads from migrating to CPUs that have a more distant path to the data in the memory. Most commonly, we would set the MPI task to be pinned to a CPU socket, with OpenMP threads allowed to migrate over this socket's cores.

All MPI libraries except for MPICH automatically bind MPI tasks to CPUs, but the behavior and adjustment options depend on the MPI distribution. MPI task pinning is described in each of the MPI sections below.

### Running MPICH Programs

MPICH (formerly referred to as MPICH2) is an open source implementation developed at Argonne National Laboratories. The newer versions support both InfiniBand and UCX.

You can run MPICH with the following command:

```
mpirun -np $SLURM_NTASKS ./mpi_program.x
```

Since by default MPICH does not bind tasks to CPUs, use the `-bind-to core` option to bind tasks to cores (equivalent to `MV2_ENABLE_AFFINITY=1`) in case of a single-threaded program. For multi-threaded programs, you can use `-bind-to numa -map-by numa`, with details on the `-bind-to` option obtained by running `mpirun -bind-to -help`, or consulting the [Hydra process manager help page](https://wiki.mpich.org/mpich/index.php/Hydra_Process_Management_Framework).

The multi-threaded process/thread affinity works quite well with MPICH, for example, on a 24-core compute node with core-memory mapping:

*Example 1*:
```
mpirun -bind-to numa -map-by numa -genv OMP_NUM_THREADS 2 -np 12 ./mpi_plus_openmp_program.x
```

*Example 2*:
```
mpirun -bind-to core -map-by numa -genv OMP_NUM_THREADS 4 -np 6 ./mpi_plus_openmp_program.x
```

The binding will be correctly assigned to a subset of CPU socket cores when we use 6 tasks on 2 sockets. Intel MPI is also capable of this. MVAPICH2 (unless using MPICH's flags) and OpenMPI do not seem to have an easy way to do this.

### Running OpenMPI Programs

OpenMPI has a number of appealing features.

Running OpenMPI programs is straightforward on Discovery:

```
mpirun -np $SLURM_NTASKS ./mpi_program.x
```

The `mpirun` flags for multi-threaded process distribution and binding to the CPU sockets are:

 - `-map-by socket` and
 - `-bind-to socket`

To run a multi-threaded OpenMPI program:

```
mpirun -np $SLURM_NTASKS -map-by socket -bind-to socket ./mpi_plus_openmp_program.x
```

OpenMPI will automatically select the optimal network interface.

### Running MVAPICH2 Programs

MVAPICH2 by default binds MPI tasks to cores, so the optimal binding configuration of a single threaded MPI program is one MPI task to one CPU core. This is achieved by running:

```
mpirun -np $SLURM_NTASKS ./mpi_program.x
```

For multi-threaded parallel programs, we need to disable the task-to-core affinity by setting `MV2_ENABLE_AFFINITY=0`. This also means that we need to pin the tasks manually, which can be accomplished using Intel compilers with `KMP_AFFINITY=verbose,granularity=core,compact,1,0`.

To run multi-threaded MVAPICH2 code compiled with Intel compilers:

```
module load intel mvapich2

// Find number of threads for OpenMP
// Find number of MPI tasks per node
set TPN=`echo $SLURM_TASKS_PER_NODE | cut -f 1 -d \(`

// Find number of CPU cores per node
set PPN=`echo $SLURM_JOB_CPUS_PER_NODE | cut -f 1 -d \(`
@ THREADS = ( $PPN / $TPN )
setenv OMP_NUM_THREADS $THREADS (if using sh or csh)
export OMP_NUM_THREADS=$THREADS (if using bash)

mpirun -genv OMP_NUM_THREADS $OMP_NUM_THREADS -genv MV2_ENABLE_AFFINITY 0 -genv KMP_AFFINITY verbose,granularity=core,compact,1,0 -np $SLURM_NTASKS ./mpi_program.x
```

For multi-threaded MVAPICH2 code compiled with other compilers, these suggestions don't seem to be appropriate. However, we have found that using MPICH's process affinity options will do the trick (as MVAPICH2 is derived from MPICH).

For example, on a 12-core, 2-socket HPC compute node running 12 tasks with each MPI-rank spawning 2 threads each, you can run the following:

```
mpirun -genv MV2_ENABLE_AFFINITY 0 -bind-to numa -map-by numa -genv OMP_NUM_THREADS 2 -np 12 ./mpi_plus_openmp_program.x
```

### Running Intel MPI Programs

Intel MPI is a high performance MPI library which runs on many different network interfaces. Apart from its runtime flexibility, it also integrates with other Intel tools (e.g., compilers, performance tools such as VTune).

>For a quick introduction to Intel MPI, see Intel's [Getting Started guide](https://software.intel.com/en-us/get-started-with-mpi-for-linux).

Intel MPI by default works with whatever interface it finds on the machine at runtime. To use it, run:

```
module load intel-mpi
```

For best performance, we recommend using Intel compilers along with the Intel MPI. Therefore, use the Intel compiler wrapper calls `mpiicc`, `mpiicpc`, and `mpiifort` to build.

For example:
```
mpiifort code.f90 -o code.x
```

#### Network Selection with Intel MPI

Intel MPI provides two different MPI fabrics for InfiniBand: one based on Open Fabrics Enterprise Distribution (OFED) and the other on Direct Access Programming Library (DAPL), denoted by `ofa` and `dapl`, respectively. Moreover, one can also specify intra-node communication, out of which the fastest should be shared memory (`shm`). According to our observations, the default fabrics is `shm:ofa`, which can be confirmed by using an environment variable `I_MPI_DEBUG` larger than 2.

#### Single and multi-threaded process/thread affinity

Intel MPI pins processes and threads to sockets by default, so no additional runtime options should be needed unless the process/thread mapping needs to be different. If that is the case, consult the OpenMP interoperability guide. For the common default pinning:

```
mpirun -genv OMP_NUM_THREADS 2 -np 12 ./mpi_plus_openmp_program.x
```

Intel MPI does the best job in pinning MPI tasks and OpenMP threads, but, in case of more exotic MPI-tasks/OpenMP thread combinations, a task/thread pinning script may be required.

#### Common MPI ABI

From Intel MPI 5.0 and MPICH 3.1 (and MVAPICH2 1.9 and higher, which is based on MPICH 3.1), the libraries are interchangeable at the binary level, using common Application Binary Interface (ABI). This means that one can build the application with MPICH, but run it using the Intel MPI libraries, thus taking advantage of the Intel MPI functionality. See details about this at https://software.intel.com/en-us/articles/using-intelr-mpi-library-50-with-mpich3-based-applications.
