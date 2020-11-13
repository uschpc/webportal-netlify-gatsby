---
author: Cesar Sul
id: 7
date: 2020-11-13T12:00:00.387Z
title: Running Jobs on the Cluster
path: running-jobs
parentPath: user-information/user-guides/high-performance-computing
cat: discoveryGuides
parentPage: User Guides
sideMenuParent: Discovery
backToTopBtnFlag: true
excerpt: How to run your jobs on Discovery using the Slurm job scheduler.
---

This guide describes how to reserve compute time on CARC high-performance computing clusters (both Discovery and the Endeavour condo cluster) for your jobs using the Slurm job scheduler.

### What is a job?

A job consists of all the data, commands, scripts, and programs that will be used to obtain results.

Jobs can be either **batch** jobs or **interactive** jobs, but both have two main components:

* A description of requested compute resources
* A set of actions to run on compute resources

A common mistake for new users is to run heavy workloads directly on the login node (discovery.usc.edu or endeavour.usc.edu). Unless you are doing a quick test, **please make sure to run your program as a job**. Processes left running on login nodes may be terminated without warning.

### What is a job scheduler?

CARC HPC clusters consist of shared resources. To ensure fair access, we use a **job scheduler** to manage all requests for resources. The Slurm (Simple Linux Utility for Resource Management) job scheduler is an open-source job scheduler that allocates compute resources on clusters for queued, user-defined jobs. When a user submits a job with Slurm, resources are divided using a using a fair share algorithm.


Jobs also depend on your project account allocations, and each job will subtract from your project's allocated core-hours. You can use the `myaccount` command to see your available and default accounts and usage for each:

```
ttrojan@discovery:~$ myaccount

      User              Account             Def Acct                  QOS
---------- -------------------- -------------------- --------------------
   ttrojan                acct1                acct1               normal
----------

----
account usage: acct1
--------------------------------------------------------------------------------
Top 10 Users 2019-08-13T00:00:00 - 2020-08-12T23:59:59 (31622400 secs)
Usage reported in Percentage of Total
--------------------------------------------------------------------------------
  Cluster     Login     Proper Name         Account     Used   Energy
--------- --------- --------------- --------------- -------- --------
discovery   ttrojan         ttrojan           acct1   10.03%    0.00%
```

### Batch jobs

Batch jobs are the most common types of jobs. They are a list of actions saved as a `bash` script. The main advantage of batch jobs is that they don't require any human intervention to run properly. This makes them ideal for programs that run for a long time.

Below is an example batch job script that launches a Python script:

```
#!/bin/bash

#SBATCH --ntasks=1
#SBATCH --cpus-per-task=8
#SBATCH --time=1:00:00
#SBATCH --mem-per-cpu=2GB
#SBATCH --account=<account_id>

module load gcc/8.3.0
module load python

python3 script.py
```
The top line:

```
#!/bin/bash
```

specifies which interpreter to use when running your script. The `bash` interpreter is specified, so everything in the script should be in `bash` syntax.

The next few lines:

```
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=8
#SBATCH --time=1:00:00
#SBATCH --mem-per-cpu=2GB
#SBATCH --account=<account_id>
```

use options to specify the requested resources for your program. Be sure to use the correct account ID for your jobs (`<account_id>`). Without the `--account` option, your default account will be used. This is fine if you only have one project account. Your account ID can be found in the [User Portal](/user-information/user-guides/research-computing-user-portal), on the Allocation Detail page for the computing resource (e.g., Discovery) you'd like to use. It is of the form username_XXX, where username is your USC NetID and XXX is your three-digit project ID.

The next set of lines:

```
module load gcc/8.3.0
module load python
```

loads the required software modules (`module load ...`).

The final line:

```
python3 script.py
```

is the command that runs your programs.

To submit a batch job, enter the command:

```
sbatch my.job
```

where the argument to the command is the job script's file name (e.g., `my.job`).

Submitted jobs are processed remotely. The process is recorded and written to an output file in the same directory that your job script is stored in. By default, this output file is named `slurm-<jobid>.out`. This is a plain-text file, so you can view it using the `less` command:

```
less slurm-<jobid>.out
```

### Interactive jobs

Interactive jobs are similar to batch jobs but all actions are typed manually on the command line, rather than in a script. The main advantage of an interactive job is that you get immediate feedback and the job will not end (and put your compute resources back into the pool) if your program errors out. This makes interactive jobs ideal test environments for people who aren't sure what to put in their job scripts.

### Endeavour condo cluster jobs

Researchers submitting jobs from the [Endeavour cluster](/user-information/user-guides/high-performance-computing/getting-started-endeavour) (endeavour.usc.edu) will need to specify the name of their partition along with the appropriate account ID. This can be done using the `--account` and `--partition` options in your job script like so:

```
#!/bin/bash
  
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=8
#SBATCH --time=1:00:00
#SBATCH --mem-per-cpu=2GB
#SBATCH --account=<account_id>
#SBATCH --partition=<partition_name>
  
module load gcc/8.3.0
module load python
  
python3 script.py
```

Be sure to use the correct account ID for your jobs (`<account_id>`). Your account ID can be found in the [User Portal](/user-information/user-guides/research-computing-user-portal), on the Allocation Detail page for your Endeavour condo allocation. It is of the form username_XXX, where username is your USC NetID and XXX is your three-digit project ID.

If you encounter an error similar to:

```
Job submit/allocate failed: Invalid account or account/partition combination specified
```

Please contact us at <carc-condo@usc.edu> to obtain the correct account ID/partition combination.

### Common Slurm commands

| Command | Action |
|---|---|
| `sbatch`  | Submits job scripts |
| `salloc`  | Requests compute resources (used for interactive jobs) |
| `srun`    | Launches tasks on compute resources (often used with salloc) |
| `scancel` | Cancels a job |
| `sinfo`   | Displays the state of partitions and nodes |
| `squeue`  | Displays the state of jobs |

To learn about all the options available for each command, enter `man <command>` for a specific command while logged in to the Slurm environment.

### Resource requests

Slurm allows you to specify many different types of resources. Below are some of the more common resource requests:

| Resource | Description |
|---|---|
| `--nodes=<number>`             | Number of nodes to use |
| `--ntasks=<number>`            | Number of processes to run |
| `--cpus-per-task=<number>`     | Number of cores per task |
| `--mem=<number>`               | Total memory (single node) |
| `--mem-per-cpu=<number>`       | Memory per processor core |
| `--constraint=<attribute>`     | Node property to request (e.g., avx, IB) |
| `--partition=<partition_name>` | Request specified partition/queue |
| `--time=<HH:MM:SS>`            | Max run time |
| `--account=<account_id>`       | Account to charge resources to |

#### Nodes and tasks

The default value for `--nodes` is 1. This number should be increased if you are running a parallel job using MPI, but otherwise it should be unchanged. The default value for `--ntasks` is also 1, and it should typically be increased if running a multi-node parallel job. The `--cpus-per-task` option is one you will want to explicitly change depending on the nature of your job. Most nodes on the main partition have 24 cores each, so typical values will be 8, 16, or 24 for multi-core parallel jobs. Note that serial jobs only require 1 core.

For more information on MPI jobs, see the [Parallel Programming user guides](/user-information/user-guides/high-performance-computing/parallel-programming).

#### Memory

Since compute node memory is such an important part of running your job, the `#SBATCH --mem=0` slurm directive bears highlighting. It tells Slurm to use all of the available memory on each compute node. Otherwise, the max memory per CPU (`#SBATCH --mem-per-cpu=<value>`) can be calculated by taking the total shared memory per node and subtracting a few GB for system overhead, then dividing that number by the number of CPUs per node.

*Example*: A compute node consisting of 24 CPUs with specs stating 96 GB of shared memory really has ~92 GB of usable memory.

Here is a scenario where you may forget about considering memory overhead:

You may tabulate "96 GB / 24 CPUs = 4 GB" and add `#SBATCH --mem-per-cpu=4GB` to your job specification. Slurm will most likely complain about an incorrect memory request and will not submit the job.

In that case, specify:

```
#SBATCH --mem-per-cpu=3GB
```

Setting `#SBATCH --mem=0` or specifying a value less than 92 GB, in this example, also takes care of this problem.

For a complete listing of resource request syntax, run the command `man sbatch` or see the Slurm documentation for [sbatch](https://slurm.schedmd.com/sbatch.html).

### GPUs

Some programs can take advantage of the unique hardware architecture in a graphics processing unit (GPU).

To request a GPU, add one of the following lines to your script:

    --gres=gpu:<number>
or

    --gres=gpu:<gpu_type>:<number>

where:

- `<number>` is the number of GPUs per node requested, and
- `<gpu_type>` is one of the following: k20, k40, k80, or p100.

Use the chart below to determine which gpu_type to specify:

| GPU_type |	Max Number of GPUs Per Node |	GPU Model|
| ---|---|---|
|k20 	|2| NVIDIA Tesla K20|
|k40 	|2|	NVIDIA Tesla K40|
|k80 	|4| NVIDIA Tesla K80 (condo nodes)|
|p100   |2| NVIDIA Tesla P100|

### Queue times

CARC resources are shared, so you should expect to wait some amount of time after requesting resources. Generally, if you request a lot of resources or very specific resources, you can expect to wait longer for Slurm to assign resources to you.


### Job monitoring

#### Job monitoring from Slurm

After submitting a job, there are a few different ways to monitor its progress. The first is to check the Slurm job scheduler with the `squeue` command like so:

```
squeue -u <user_name>
```

The `-u` option allows you to specify only jobs for a given username.

The output will look like this:

```
JOBID PARTITION 	NAME 	USER ST          START_TIME  NODES SCHEDNODES   NODELIST(REASON)
   384      main    star-lac ttrojan PD 2020-08-12T16:09:31  	 2 (null)       (Resources)
```

It provides the following information:

|Squeue Output |Definition|
|---|---|
|JOBID 	|Unique number assigned to each job.|
|PARTITION| 	Partition ID the job is scheduled to run, or is running, on.|
|NAME| 	Name of the job - typically the job script name.|
|USER| 	User ID of the job.|
|ST| 	Current state of the job (see table below for job state meanings).|
|TIME| 	Amount of time job has been running.|
|NODES| 	Number of nodes job is scheduled to run across.|
|NODELIST(REASON)| 	If running, the list of nodes the job is running on. If pending, the reason the job is waiting.|

The information that `squeue` returns can be customized; refer to the `squeue` manual for more information.

The `ST` column refers to the state of the job. See the table below for the meanings of common states:

#### Valid job states

|Code| 	State| 	Meaning|
|---|---|---|
|PD| 	Pending| 	Job is waiting for requested resources (compute nodes, memory, GPUs).|
|R| 	Running| 	Job is running. |
|CF| 	Configuring| 	Job resources being configured.|
|CG| 	Completing| 	Job is completing.|

#### Job monitoring from output

Most programs will generate some form of output when run. This can be in the form of status messages sent to the terminal or newly generated files. In either case, you can check these in real time. If running a batch job, Slurm will redirect output meant for the terminal to an output file of the form `slurm-<jobid>.out`. The file name can be changed if desired.

#### Job monitoring from compute nodes

When your job is running, `squeue` will report the compute node(s) you've been allocated. You can SSH from the login node to your assigned compute nodes and use a system profiler like `top` or `htop` to check the CPU and memory utilization of your processes.
