---
author: Cesar Sul
id: 2
date: 2020-06-19T12:00:00.387Z
title: Runnings Jobs on Discovery
path: running-jobs
parentPath: user-information/user-guides/high-performance-computing/discovery
cat: discoveryGuides
parentPage: User Guides
sideMenuParent: Discovery
backToTopBtnFlag: true
---

This guide describes how to reserve compute time on Discovery for your jobs using the Slurm job scheduler.

### What is a job?

A job consists of all the data, commands, scripts, and programs that will be used to obtain results.

Jobs can be either **batch** jobs or **interactive** jobs, but both have two main components:

* A description of requested compute resources
* A set of actions to run on compute resources

### What is a job scheduler?

Discovery is a shared system. To ensure fair access, we use a **job scheduler** to manage all requests for resources. The Slurm (Simple Linux Utility for Resource Management) job scheduler is an open-source job scheduler that allocates compute resources on clusters for queued, user-defined jobs.

### Batch jobs

Batch jobs are the most common types of jobs run on Discovery. They are a list of actions saved as a `bash` shell. The main advantage of batch jobs is that they don't require any human intervention to run properly. This makes them ideal for programs that run for a long time.

Below is an example batch job script that launches a python script:

    #!/bin/bash
    #SBATCH --ntasks=1
    #SBATCH --cpus-per-task=8
    #SBATCH --time=1:00:00
    #SBATCH --mem-per-cpu=2GB

    module load gcc/8.3.0
    module load python

    python3 script.py


The top few lines of the file (that begin with `#SBATCH`) use options to specify the requested resources for your program. Then the next set of lines loads the required software modules (`module load ...`). After that, the remaining lines are commands that run your programs.

To submit a batch job, enter the command:

```
sbatch my.job
```

where the argument to the command is the job script's file name (e.g., `my.job`).

Submitted jobs are processed remotely. The process is recorded and written to an output file in the same directory that your job script is stored in. By default, this output file is named `slurm-<jobid>.out`. This is a plain-text file, so you can view it using the `less` command: `less slurm-<jobid>.out`.

### Interactive jobs

Interactive jobs are similar to batch jobs but all actions are typed manually on the command line, rather than in a script. The main advantage of an interactive job is that you get immediate feedback and the job will not end (and put your compute resources back into the pool) if your program errors out. This makes interactive jobs ideal test environments for people who aren't sure what to put in their job scripts.

### Common Slurm commands

| Command| Action|
|--|--|
| `sbatch`  | Submits job scripts |
| `salloc`  | Requests compute resources (used for interactive jobs)|
| `srun`    | Launches tasks on compute resources (often used with salloc)|
| `scancel` | Cancels a job|
| `sinfo`   | Displays the state of partitions and nodes|
| `squeue`  | Displays the state of jobs|

To learn about all the options available for each command, enter `man <command>` for a specific command while logged in to the Slurm environment.

### Resource requests

Slurm allows you to specify many different types of resources. Below are some of the more common resource requests:

| Resource | Description|
|---|---|
|`--ntasks=<number>`| Number of processes to run|
| `-–mem=<number>` |Total memory (single node) |
|`-–mem-per-cpu=<number>` |	Memory per processor core|
|`-–constraint=<attribute>` |	Node property to request (e.g. avx, IB)|
|`-–partition=<partition_name>`| 	Request specified partition/queue|
|`-–time=<HH:MM:SS>`| Max run time|

For a complete listing of resource request syntax, run the command `man sbatch`.

### GPUs

Some programs can take advantage of the unique hardware architecture in a graphics processing unit (GPU).

To request a GPU, add one of the following lines to your script:

    --gres=gpu:<number>
or

    --gres=gpu:<gpu_type>:<number>

where:

- `<number>` is the number of GPUs per node requested.
- `<gpu_type>` is one of the following: k20, k40, k80, or p100.

Use the chart below to determine which gpu_type to specify:

| GPU_type |	Max Number of GPUs Per Node |	GPU Model|
| ---|---|---|
|k20 	|2| NVIDIA Tesla K20|
|k40 	|2|	NVIDIA Tesla K40|
|k80 	|4| NVIDIA Tesla K80 (condo nodes)|
|p100   |2| NVIDIA Tesla P100|

### Queue times

As Discovery is a shared system, you should expect to wait some amount of time after requesting resources. Generally, if you request a lot of resources or very specific resources you can expect to wait longer for Slurm to assign resources to you.
