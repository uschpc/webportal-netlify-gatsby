---
author: Marco Olguin
id: 4
date: 2020-08-13T12:00:00.387Z
title: Using MATLAB on Discovery
alternativeTitle: MATLAB
path: matlab
parentPath: user-information/user-guides/software-and-programming
cat: software
parentPage: User Guides
backToTopBtnFlag: true
excerpt: A user guide for MATLAB, a proprietary scientific computing language and environment.
---

[MATLAB](https://www.mathworks.com/products/matlab.html) is a proprietary scientific computing language and environment.

### Using MATLAB on Discovery

Begin by logging in to Discovery. You can find instructions for this in the [Getting Started guide](/user-information/user-guides/high-performance-computing/discovery/getting-started).

To use MATLAB on Discovery, load the corresponding module:

```sh
module load matlab
```

This loads the default version, which is typically the newest version available. To load a specific version, you can run a command similar to:

```sh
module load matlab/2019a
```

This command loads version 2019a of MATLAB.

To see all available versions of MATLAB, run the command:

```sh
module avail matlab
```

#### Requesting newer versions of MATLAB

It may be necessary to run MATLAB using a version that is not currently available. Licensed software such as MATLAB requires license setup by CARC staff. If there is a new version of MATLAB that you want to use, please [submit a help ticket](/user-information/ticket-submission) and we may be able to install it for you.

#### MATLAB GUI

Use of the MATLAB GUI is possible but **not recommended**, as it requires X11 forwarding, which has poor performance. Instead, we recommend that users develop MATLAB scripts on their local computer and transfer them and any other input files to Discovery for command line use.

### Running MATLAB interactively

After loading the module, you can run MATLAB interactively by entering the command `matlab`.

To run MATLAB interactively on a compute node, use Slurm's `salloc` command to request compute resources like so:

```sh
salloc --time=1:00:00 --cpus-per-task=8 --mem-per-cpu=2GB --account=<account_id>
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
#SBATCH --account=<account_id>
  
module load matlab
  
# Do not include the .m extension in your script name (simple_plot.m)
matlab -r 'simple_plot'
```

Each line is described below:

|Command or Slurm argument| Meaning|
|---|---|
|`#!/bin/bash`|Use `/bin/bash` to execute this script |
|`#SBATCH`| Syntax that allows Slurm to read your requests (ignored by bash)|
|`--ntasks=1` |  Ensures all resources stay on a single compute node|
|`--cpus-per-task=4` | Reserves 4 CPUs for your exclusive use|
|`--mem-per-cpu=10GB` |  Reserves 10 GB per CPU of memory for your exclusive use|
|`--time=1:00:00` | Reserves resources described for 1 hour|
|`--account=<account_id>` | Charge compute time to <account_id>. If not specified, you may use up the wrong PI's compute hours|
|`module load matlab` | Load the `matlab` [environment module](/user-information/user-guides/high-performance-computing/discovery/lmod)|
|`matlab -r 'simple_plot'` | Use `matlab` to run `simple_plot.m`|

You can use the folloiwng `simple_plot.m` as an example:

```matlab
x=[-pi:0.05:pi];
y=sin(x);
  
fig=figure();
plot(x,y);
print(fig,'plot','-dpng')
```

Save this Slurm script as `matlab.slurm`, for example, and then submit like so:

```sh
sbatch matlab.slurm
```

### Parallel computing toolbox

To run a parallel MATLAB script, you will first need to create a **cluster profile** to start a pool of workers. There are two types of clusters: *local* and *remote*. A local cluster will run on a single compute node. A remote cluster is necessary when you want to run MATLAB across multiple compute nodes.

#### Local cluster

By default, MATLAB will create a local cluster. If you would like to explicitly start one, you can do so by adding the following to your script:

```matlab
cluster = parallel.cluster.Local
```

#### Remote cluster

To create a worker pool larger than can fit on a single node, MATLAB will submit a Slurm job on your behalf to allocate resources. To do this, add the following lines to your script:

```matlab
cluster = parallel.cluster.Slurm;
  
set(cluster,'JobStorageLocation', your_directory_here);
set(cluster,'HasSharedFilesystem', true);
set(cluster,'SubmitArguments','--time=00:20:00');
set(cluster,'ResourceTemplate','--ntasks=^N^');
```

Where `JobStorageLocation`, `SubmitArguments`, and `ResourceTemplate` are defined below:

|Cluster Attribute| Meaning|
|--|--|
|`JobStorageLocation`|Path to directory for temporary job storage, e.g., `/home/project/tt1/ttrojan/matlabJobStorage`|
|`SubmitArguments`| Arguments to Slurm job scheduler|
|`ResourceTemplate`|Template for compute resources (recommended to keep as-is)|


Update `JobStorageLocation` and `SubmitArguments` as necessary. For example, you may wish to increase the time or memory requirements for your worker pool.

#### Starting a pool of workers

Once a cluster profile has been configured, the process for starting up a pool of workers for both a local and remote cluster is the same.

Assuming you have created a cluster object named `cluster`, you can start up a pool of workers using the `parpool` command:

```matlab
pool=parpool(cluster,N)
```

`N` is the number of workers to use. If starting a **local cluster**, N must be at least 1 less than the total number of available CPUs, as MATLAB requires 1 CPU to delegate work.

If starting a **remote cluster**, MATLAB will submit a job requesting resources for `N` workers using the `ResourceTemplate` defined in the cluster profile.

Make sure that you close your parallel pool when you are done with it by using the following command:

```matlab
delete(pool)
```

### Additional resources

If you have questions about or need help with MATLAB, please [submit a help ticket](/user-information/ticket-submission) and we will assist you.

[MATLAB](https://www.mathworks.com/products/matlab.html)  
[MATLAB documentation](https://www.mathworks.com/help/matlab/)  
[MATLAB parallel computing documentation](https://www.mathworks.com/help/parallel-computing/)
