---
author: Derek Strong
id: 1
date: 2020-06-03T12:00:00.387Z
title: Getting Started with Discovery
path: getting-started
parentPath: user-information/user-guides/high-performance-computing/discovery
cat: discoveryGuides
parentPage: User Guides
sideMenuParent: Discovery
backToTopBtnFlag: true
---

This guide will help you get started with the Center for Advanced Research Computing's Discovery computing cluster by instructing you on how to connect, log in, transfer data, and run jobs.

A CARC account is **required** to log in to and use CARC resources. For information on applying for a CARC account, see our [Accounts and Allocations page](/user-information/accounts).

### Overview

#### Discovery cluster

Discovery is a high-performance computing cluster, which is a collection of computers and disk arrays that are connected via fast networks. Discovery allows USC researchers to perform computing tasks, like data analyses and simulations, on a larger scale than is possible with a laptop or lab computer.

The following schematic depicts the CARC cyberinfrastructure and how the parts of the cluster connect with one another:

![Cyberinfrastructure overview](/images/discovery_infra.png)

When using Discovery, you will notice several differences from your desktop or laptop environment:

- The interface is **command-line driven** (no graphical user interface)
- Discovery uses the **CentOS Linux** operating system (not macOS or Windows)
- You submit your programs to a **remote batch processing system**, or job scheduler, to run them

#### Workflow

The workflow for using Discovery typically consists of the following steps:

1. Logging in to the login node
2. Organizing files
3. Transferring files
4. Installing and running software
5. Testing your job interactively on a compute node
6. Submitting your job to the job scheduler to run it remotely on a compute node
7. Monitoring your job and checking the results when it has completed

### Logging in to the login node

To log in to the Discovery login node (also known as the *head node*), you will need to use a secure shell client. This is a small application that enables you to connect to a remote computer via SSH (**S**ecure **SH**ell), a cryptographic network protocol for securely operating network services. You will need your USC NetID to SSH in to the login node.

> Note: The CARC does not manage your USC NetID password. If you are having difficulty using your USC NetID and/or password, please contact [USC IT Services](https://itservices.usc.edu/self-help/).

#### SSH login

##### On macOS or Linux

macOS users can connect to Discovery using the Terminal application that is natively installed. Linux users can similarly use the natively installed terminal application that comes with their distribution of Linux (e.g., Terminal on Ubuntu).

To connect, open a new terminal window and enter:

```
ssh <username>@discovery.usc.edu
```

Be sure to substitute your USC NetID as the username. This is the same username for your USC email account (e.g., ttrojan@usc.edu's NetID is ttrojan). After entering the command, you will then be prompted to enter your USC NetID password. Again, this is the same password for your USC email account.

##### On Windows

Windows users may need to download a third-party SSH client to connect to the CARC. You may use the client that works best for you. Here are a few of the most popular clients:

- Windows Terminal, which is natively available on Windows 10
- PuTTY, which is available through the [developer’s website](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)
- X-Win32, which is available through the [USC software website](https://software.usc.edu/x-win32/)

To connect to Discovery using any of these, download and install the client and then launch a connection window. You will be asked to provide your USC NetID and password. Your NetID is the first part of your USC email address (e.g., ttrojan@usc.edu's NetID is ttrojan), and your password is the same as your email password. You will also need to enter the following hostname in order to connect: `discovery.usc.edu`.

#### Duo two-factor authentication (2FA)

Duo 2FA is required to access Discovery. If you have not already signed up for Duo on your USC NetID account, please visit [this page](https://itservices.usc.edu/duo/enroll) to enroll. For more information on using Duo with your CARC account, see [____]().

### Organizing files

#### File system

All CARC account holders are assigned three directories where they can store files and run programs: home, project, and scratch.

##### Home directory

Your home directory contains 100 GB of disk space and is intended for personal configurations and settings as well as software installations. When you log in to Discovery, you will always start in your home directory. It will be of the form:

```
/home1/<username>
```

/home1 is a high-performance parallel file system, so you can run IO-intensive jobs directly from it. However, the quota for each user on /home1 is 100 GB and 2 million files. To easily switch to your home directory, enter the command `cd` from the directory you're in.

We keep 14 days of snapshots for /home1. You can think of these snapshots as semi-backups, meaning that if you accidentally deleted some data we would be able to recover it within 14 days. If the file was created and deleted within a one-day period, then the snapshot cannot recover it. You should always keep extra backups of your important data and other files because of this.

##### Project directory

Your project directory has much more disk space and will be the directory you use for most CARC work. This is also where you will collaborate with your research group. It will be of the form:

```
/____
```

Each project member will have their own subdirectory within their group's project directory, where they can store data, scripts, and related files. Users affiliated with multiple CARC projects will have multiple project directories so they can easily share their files with the appropriate groups.


<!-- Is this true? No backups, and only one /scratch? -->

##### Scratch directory

Your scratch directory is also large, with 10 TB of disk space. It will be of the form:

```
/scratch/<username>
```

/scratch is a high-performance parallel file system, so you can run IO-intensive jobs directly from it. To easily switch to your scratch directory, enter the command `cds` from the directory you're currently in.

> Note: Scratch directories are not backed up.

#### Limits on disk space and number of files

The Discovery cluster is a shared resource. As a result, there are quotas on usage to help ensure fair access to all USC researchers. There are quotas on the number of files stored and the amount of disk space used.

To check your quotas, enter the command `myquota`. You can be in any of your directories when you enter this command. It will return results similar to the following:

```
myquota
--------------------------
/home1/ttrojan
      user/group     ||           size          ||    chunk files    
     name     |  id  ||    used    |    hard    ||  used   |  hard   
--------------|------||------------|------------||---------|---------
       ttrojan|555555||  127.23 MiB|  100.00 GiB||     4530|  2000000

--------------------------
/scratch/ttrojan
      user/group     ||           size          ||    chunk files    
     name     |  id  ||    used    |    hard    ||  used   |  hard   
--------------|------||------------|------------||---------|---------
       ttrojan|555555||  446.78 MiB|   10.00 TiB||     5797|unlimited
```

If you exceed the limits, you may receive a "disk quota exceeded" or similar error. Please note that the CARC is unable to increase the quota for your home directory.

The `myquota` command is also useful if you forget where your directories are located.

For more information on data management, see our [Data Management user guides](user-information/user-guides/data-management).

### Transferring files

The CARC has a dedicated data transfer node at `hpc-transfer.usc.edu` that is configured for fast file transfers. hpc-transfer is also a Globus endpoint. To access it, use hpc-transfer instead of the normal login node (@discovery.usc.edu) when logging in:

```
ssh <username>@hpc-transfer.usc.edu
```

Remember to always transfer files into your home or scratch directories where you have sufficient disk space.

If you need to frequently transfer files, plan to move large amounts of data, or need assistance transferring data from a private location, feel free to contact us at `hpc-support@usc.edu` for advice on how to do this efficiently.

#### Between your local machine and Discovery

There are a number of ways to transfer files between your local machine and the Discovery cluster. These include the commands `sftp`, `scp`, or `rsync` as well as GUI apps like Cyberduck or FileZilla.

#### From the web to Discovery

You can transfer a file from the public internet directly to one of your directories on Discovery by using the commands `wget` or `curl` or, for Git repositories, `git clone`.

#### Creating and editing files

You can always create files on your personal computer and transfer them to Discovery, but sometimes it is easier to create them directly on Discovery. For plain-text files, you can use the `nano`, `vim`, or `emacs` text editors. Nano is the easiest editor to learn; Vim and Emacs both have steeper learning curves, but you may eventually find them more useful and productive.

To create a new file, simply enter the editor name as the command (e.g., `nano`).

To edit an existing file, enter the editor name as the command and then the path to the file as the argument:

```
nano script.R
```

For detailed instructions on transferring files, see our [Data Management user guides](user-information/user-guides/data-management).

### Installing and running software

Once you are logged in, you can use software, work with files, run brief tests, or submit Slurm job scripts to the job queue.

> Note: The login node is a shared resource that is used by many users simultaneously. Be careful not to do tasks on the login node that will negatively impact other users, or we may terminate your process without warning. You may run small tests on the login node, but beyond that you should use the compute nodes.

#### Using CARC-installed software

On Discovery, the CARC maintains software, compilers, and libraries using the `module` system. These may satisfy your computing requirements without any further installations.

To see the list of available software, enter the command:

```
module avail
```

To load software based on this list, such as Python, enter the command:

```
module load python
```

This loads the default version of Python. Then, for example, enter `python` to begin an interactive Python session.

#### Installing your own software

Researchers are encouraged to install any software, libraries, and packages necessary for their work. Consult the software's documentation on how to install from source or with pre-built binaries. Additionally, for a more controlled and portable computing environment, consider using a Singularity container for your software builds.

For more information on installing software, see our [Software user guides](user-information/user-guides/software).

### Testing your job

We recommend that you first test your job interactively on a compute node before submitting it remotely to the Slurm job scheduler, ensuring that you will have quality results after the job completes. You can do this by requesting an interactive session with a compute node using the `salloc` command. For example, to request four processors for one hour, enter:

```
salloc --ntasks=4 --time=1:00:00
```

After running the command, the job scheduler will add your job to the wait queue.

Once your job starts, you can then test out your scripts and programs to make sure they work properly. Once you are confident that you know how your program will behave, you are ready to submit a job through the batch job scheduler.

### Submitting your job

A job consists of all the data, commands, scripts, and programs that will be used to obtain results. Jobs are submitted to the job scheduler, Slurm, which performs the following functions:

- Schedules user-submitted jobs
- Allocates user-requested computing resources
- Processes user-submitted jobs

To submit a job, first create a Slurm job script using one of the previously mentioned text editors.

Your job script should look something like this:

```
#!/bin/bash
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=2
#SBATCH --mem-per-cpu=1GB
#SBATCH --time=1:00:00

module load gcc
module load python

python3 script.py
```

The top few lines of the file (that begin with `#SBATCH`) use options to specify the requested resources for your program. Then the next set of lines loads the required software modules (`module load ...`). After that, the remaining lines are commands that run your programs.

To submit a job, enter the command:

```
sbatch my.job
```

where the argument to the command is the job script's file name (e.g., `my.job`).

Submitted jobs are processed remotely. The process is recorded and written to an output file in the same directory that your job script is stored in. By default, this output file is named `slurm-<jobid>.out`. This is a plain-text file, so you can view it using the `less` command: `less slurm-<jobid>.out`.

For more information on creating and submitting Slurm job scripts, see our [Running Jobs user guide](user-information/user-guides/discovery/running-jobs).

### Monitoring your job

There are several commands you can use to monitor a job after it has been submitted.

The first thing you will want to check is if your job request was queued. Use the `squeue` command to view the status of your jobs, replacing `<username>` with your USC NetID:

```
squeue -u <username>
```

Each job is assigned a unique job identifier. It is sufficient to use only the numeric portion of the job ID when referencing a job or submitting a ticket.

In the example below, the job 3271 has been placed in the "quick" partition (PARTITION) based on its requested time of 1 hour:

```
squeue -u ttrojan
JOBID PARTITION     NAME     USER ST       TIME  NODES NODELIST(REASON)
 3271     quick   my.job  ttrojan  R      35:58      1 hpc1407
```

The job has been running for 35 minutes and 58 seconds (TIME). It has requested 4 tasks and was allocated 1 node (NODES), which is hpc1407 (NODELIST). The status of the job is "R" (running) (ST).

You can also use the `squeue` command to estimate when your job will start:

```
squeue --start -j <jobid>
```

If you wish to cancel and remove your job from the queue, you can use the `scancel` command:

```
scancel <jobid>
```

Your job may remain in the queue for a short time, but its status will change to "CG" (completing) or "CA" (canceled).

### Getting help

If you need additional assistance getting started with the CARC and Discovery, please see our [User Support page](/user-information/user-support) for more information.
