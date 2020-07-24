---
author: Marco Olguin
id: 3
date: 2020-06-19T12:00:00.387Z
title: Using MATLAB on Discovery
alternativeTitle: MATLAB
path: matlab
parentPath: user-information/user-guides/software
cat: software
parentPage: User Guides
backToTopBtnFlag: true
---

[MATLAB](https://www.mathworks.com/products/matlab.html) is a proprietary scientific computing language and environment.

### Using MATLAB on Discovery

To use MATLAB on Discovery, load the corresponding module:

```sh
module load matlab
```

This loads the default version, which is typically the newest version available. To load a specific version,  you can run a command similar to:

```
module load matlab/2019a
```

This command loads version 2019a of MATLAB.

To see all available versions of MATLAB, run the command:

```
module avail matlab
```

### The MATLAB GUI

Use of the MATLAB GUI is possible but **not recommended** as it requires X11 forwarding, which has poor performance. Instead, we recommend that users develop MATLAB scripts on their local computer and transfer them and any other input files to Discovery for command line use.

### Running MATLAB interactively

After loading the module, you can run MATLAB interactively by entering the command `matlab`.

To run MATLAB interactively on a compute node, use Slurm's `salloc` command to request compute resources and `srun` to start an interactive shell like so:

```sh
salloc --time=1:00:00 --cpus-per-task=8 --mem-per-cpu=2GB
srun --pty bash
```

Once you are logged in to a compute node, load the module and then enter `matlab`.

### Running MATLAB in batch mode

After creating a MATLAB script, you will need to create a Slurm job script to launch your MATLAB program. The Slurm script might look like this:

```sh
#!/bin/bash
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=4
#SBATCH --mem-per-cpu=10GB
#SBATCH --time=1:00:00

module load matlab

# Don't include .m extension in your script name
matlab -r 'script_name'


```

Save this script as `matlab.slurm`, for example, and then submit like so:

```sh
sbatch matlab.slurm
```

### Parallel Computing Toolbox

To run a parallel MATLAB script, you will first need to create a **cluster profile** to start a pool of workers. There are two types of clusters, *local* and *remote*. A local cluster will run on a single compute node. A remote cluster is necessary when you want to run MATLAB across multiple compute nodes.

#### Local cluster

By default, MATLAB will create a local cluster. If you would like to explicitly start one, you can do so by adding the following to your script:

```
cluster = parallel.cluster.Local
```

#### Remote cluster

To create a worker pool larger than can fit on a single node, MATLAB will submit a Slurm job on your behalf to allocate resources. To do this, add the following lines to your script:

```
cluster = parallel.cluster.Slurm;
set(cluster,'JobStorageLocation', your_directory_here);
set(cluster,'HasSharedFilesystem', true);
set(cluster,'SubmitArguments','--time=00:20:00 ');
set(cluster,'ResourceTemplate','--ntasks=^N^ -L mdcs@hpc-licenses:^N^');
```

Where `JobStorageLocation`, `SubmitArguments`, and `ResourceTemplate` are defined below:

|Cluster Attribute| Meaning|
|--|--|
|`JobStorageLocation`|Path to directory for temporary job storage, e.g., `/home/rcf-proj/tt1/ttrojan/matlabJobStorage`|
|`SubmitArguments`| Arguments to Slurm job scheduler|
|`ResourceTemplate`|Template for compute resources (recommended to keep as is)|


Update `JobStorageLocation` and `SubmitArguments` as necessary. For example, you may wish to increase the time or memory requriements for your worker pool.

#### Starting a pool of workers

Once a cluster profile has been configured, the process for starting up a pool of workers for both a local and remote cluster is the same.

Assuming you have created a cluster object named `cluster`, you can start up a pool of workers using the parpool command:

```
pool=parpool(cluster,N)
```

`N` is the number of workers to use. If starting a **local cluster**, N must be at least 1 less than the total number of available CPUs, as MATLAB requires 1 CPU to delegate work.

If starting a **remote cluster**, MATLAB will submit a job requesting resources for `N` workers using the `ResourceTemplate` defined in the cluster profile.


Make sure that you close your parallel pool when you are done with it by using the following command:

```
delete(pool)
```

### Requesting newer versions of MATLAB

It may be necessary to run MATLAB using a version that is not currently available. Licensed software such as MATLAB requires license set up by CARC staff. If there is a new version of MATLAB that you want to use, please contact us at hpc-support@usc.edu to request an update.
