This guide describes how to reserve compute time on Discovery using the Slurm job scheduler.

# What is a job?

Discovery is a shared system. To ensure fair access we use a **job scheduler** to manage all requests for resources. Jobs can be either **batch** or **interactive** but both have two main components

* Description of requested compute resources
* Set of actions to run on compute resources

## Batch jobs

Batch jobs are the most common types of jobs run on Discovery. They are a list of actions saved as a `bash` shell. The main advantage of batch jobs is that they don't require any human intervention to run properly. This makes them ideal for programs that run for a long time.

Below is an example job script that launches a python script.

    #!/bin/bash
    #SBATCH --ntasks=1
    #SBATCH --cpus-per-task=8
    #SBATCH --time=1:00:00
    #SBATCH --mem-per-cpu=2GB

    module load gcc/8.3.0
    module load python

    python3 script.py

## Interactive jobs

Interactive jobs are similar to batch jobs but all actions are typed manually on the command line. The main advantage of an interactive job is that you get immediate feedback and the job will not end (and put your compute resources back into the pool) if your program errors out. This makes interactive jobs ideal test environments for people who aren't sure about what to put in their job scripts.


## Common Slurm commands

| Command| Action|
|--|--|
| `sbatch`  | Submits job scripts |
| `salloc`  | Requests compute resources (used for interactive jobs)|
| `srun`    | Launch tasks on compute resources (often used with salloc)|
| `scancel` | Cancels a job|
| `sinfo`   | Display state of partitions and nodes|
| `squeue`  | Display state of jobs|



## Resource requests

Slurm allows you to specify many different types of resources. Below are some of the more common requests.

| Resource | Description|
|---|---|
|`--ntasks=<number>`| Number of processes to run|
| `-–mem=<number>` |Total memory (single node) |
|`-–mem-per-cpu=<number>` |	Memory per processor core|
|`-–constraint=<attribute>` |	Node property to request (e.g. avx, IB)|
|`-–partition=<partition_name>`| 	Request specified partition/queue|
|`-–time=<HH:MM:SS>`| Max run time|

### GPUS

    --gres=gpu:<number>
or

    --gres=gpu:<gpu_type>:<number>

Use the chart below to determine which gpu_type to specify

| GPU_type |	Max Number of GPUs Per Node |	GPU Model|
| ---|---|---|
|k20 	|2| NVIDIA Tesla K20|
|k40 	|2|	NVIDIA Tesla K40|
|k80 	|4| NVIDIA Tesla K80 (condo nodes)|
|p100   |2| NVIDIA Tesla P100|

## Queue times

As Discovery is a shared system you should expect to wait some amount of time after requesting resources. Generally if you request a lot of resources or very specific resources you can expect to wait longer for Slurm to assign resources to you. 
