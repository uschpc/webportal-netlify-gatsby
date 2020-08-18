---
author: Derek Strong
id: 1
date: 2020-08-13T12:00:00.387Z
title: Getting Started with Discovery
path: getting-started
parentPath: user-information/user-guides/high-performance-computing/discovery
cat: discoveryGuides
parentPage: User Guides
sideMenuParent: Discovery
backToTopBtnFlag: true
---

This guide will help you get started with the Center for Advanced Research Computing's Discovery computing cluster by instructing you on how to connect, log in, transfer data, and run jobs.

A CARC account is **required** to log in to and use CARC resources. For information on applying for a CARC account, see the [Accounts and Allocations page](/user-information/accounts).

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

##### On macOS and Linux

macOS users can connect to Discovery using the Terminal application that is natively installed. Linux users can similarly use the natively installed terminal application that comes with their distribution of Linux (e.g., Terminal on Ubuntu).

To connect, open a new terminal window and enter:

```
ssh <username>@discovery.usc.edu
```

Be sure to substitute your USC NetID as the username. This is the same username for your USC email account (e.g., ttrojan@usc.edu's NetID is ttrojan). After entering the command, you will then be prompted to enter your USC NetID password. This is the same password for your USC email account.

>Note: There will be no visual feedback as you enter your password. This is a security feature designed to obscure your password and is expected.

After entering your password, you will then see a Duo two-factor authentication prompt.

##### On Windows

Windows users may need to download and install a third-party SSH client to connect to Discovery. The most popular client is PuTTY, which is available through the [developer’s website](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html). On Windows 10, there is also a natively available Windows Terminal that has a built-in SSH client.

To connect using Windows Terminal, open a new terminal window and enter:

```
ssh <username>@discovery.usc.edu
```

Be sure to substitute your USC NetID as the username. You will then be prompted to enter your USC NetID password.

To connect using Putty, start in the Configuration window under the Session category and enter `discovery.usc.edu` as the hostname with port `22` and select Connection type: SSH. Then select Open to open a connection window, enter your USC NetID as the username, and finally enter your USC NetID password.

Your USC NetID is the same username for your USC email account (e.g., ttrojan@usc.edu's NetID is ttrojan). Your USC NetID password is the same password for your USC email account. 

>Note: There will be no visual feedback as you enter your password. This is a security feature designed to obscure your password and is expected.

After entering your password, you will then see a Duo two-factor authentication prompt.

#### Duo two-factor authentication (2FA)

Duo 2FA is required to access Discovery. If you have not already signed up for Duo on your USC NetID account, please visit [this page](https://itservices.usc.edu/duo/enroll) to enroll.

> Note: The login node is a shared resource that is used by many users simultaneously. Be careful not to do tasks on the login node that will negatively impact other users, or we may terminate your process without warning. You may run small tests on the login node, but beyond that you should use the compute nodes.

### Organizing files

#### File system

All CARC account holders are assigned three directories where they can store files and run programs: **home**, **project**, and **scratch**.

##### Home directory

Your home directory has a quota of 100 GB of disk space and 2 million files, and it is intended for personal configurations and settings as well as software installations. It is not intended for IO-intensive jobs to be run directly from /home.

When you log in to Discovery, you will always start in your home directory. It will be of the form:

```
/home1/<username>
```

To easily switch to your home directory, enter the command `cd` from the directory you're in.

We keep two weeks of snapshots for /home1. You can think of these snapshots as semi-backups, meaning that if you accidentally deleted some data we would be able to recover it within three weeks. If the file was created and deleted within a one-day period, then the snapshot cannot recover it. You should always keep extra backups of your important data and other files because of this.

##### Project directory

The new parallel project file system was deployed during the summer of 2020. This file system has a capacity of ~10 PB and consists of directories for different research project groups. The quota for each project directory ranges between 1 and 5 TB.

Each project member has their own subdirectory within their group's project directory, where they can store data, scripts, and related files. The project file system should be used for most of your CARC work, and it's also where you can collaborate with your research project group. Users affiliated with multiple CARC projects will have multiple project directories so they can easily share their files with the appropriate groups.

The project directory can be located by typing:

```sh
/home/project/<user_name>
```

where `<user_name>` is your USC NetID (your email address without "@usc.edu").

##### Scratch directories

The /scratch and /scratch2 file systems are high-performing, parallel file systems running ZFS/BeeGFS that are hosted on dedicated storage machines. They are shared resources for use by all CARC researchers. Data stored in /scratch and /scratch2 are retained and not deleted between jobs, but they are *not* backed up. Data should be periodically copied to a permanent project file system to decrease the risk of data loss.

Directories are automatically created for each CARC user under /scratch and /scratch2 so that data can be stored there temporarily. These directories are accessible only to you, and each user account is limited to a 10 TB quota for each of /scratch and /scratch2.

Your scratch directory is located at:

```sh
/scratch/<user_name>
```

/scratch has a capacity of 806 TB. Use the `cds` command to quickly change to your scratch directory.

Your scratch2 directory is located at:

```sh
/scratch2/<user_name>
```

/scratch2 has a capacity of 709 TB. Use the `cds2` command to quickly change to your scratch2 directory.

#### Limits on disk space and number of files

The Discovery cluster is a shared resource. As a result, there are quotas on usage to help ensure fair access to all USC researchers. There are quotas on the number of files stored and the amount of disk space used.

To check your quota, use the `myquota` command. Under `size`, compare the results of `used` and `hard`. If the value of `used` is close to the value of `hard`, you will need to delete files or request an increase in disk space from the [Research Computing User Portal](/user-information/user-guides/high-performance-computing/research-computing-user-portal).

>Note: The `chunk files` section indicates the way your files and directories are divided up by the parallel file system, not the absolute number of files.

```
ttrojan@discovery:~$ myquota
  
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
         
--------------------------
/scratch2/ttrojan
      user/group     ||           size          ||    chunk files    
     name     |  id  ||    used    |    hard    ||  used   |  hard   
--------------|------||------------|------------||---------|---------
       ttrojan|555555||  200.34 MiB|   10.00 TiB||     4002|unlimited
```

If you exceed the limits, you may receive a "disk quota exceeded" or similar error. Please note that the CARC is unable to increase the quota for your home directory.

The `myquota` command is also useful if you forget where your directories are located.

For more information on data management, see the [Data Management user guides](/user-information/user-guides/data-management).

### Transferring files

The CARC has a dedicated data transfer node at `hpc-transfer.usc.edu` that is configured for fast file transfers. hpc-transfer is also a Globus endpoint. To access it, use `@hpc-transfer.usc.edu` instead of the normal login node (`@discovery.usc.edu`) when logging in:

```
ssh <username>@hpc-transfer.usc.edu
```

Remember to always transfer files into your home or scratch directories where you have sufficient disk space.

#### Between your local machine and Discovery

There are a number of ways to transfer files between your local machine and Discovery. These include the commands `sftp`, `scp`, or `rsync` as well as GUI apps like Cyberduck or FileZilla.

For more information on transferring files between your local machine and the Discovery cluster, see the [Data Management user guides](/user-information/user-guides/data-management).

#### From the web to Discovery

You can transfer a file from the public internet directly to one of your directories on Discovery by using the commands `wget` or `curl` or, for Git repositories, `git clone`.

Helpful links:

 - [GNU Wget](https://www.gnu.org/software/wget/)  
 - [curl](https://curl.haxx.se/docs/manpage.html)  
 - [git clone](https://git-scm.com/docs/git-clone)

### Creating and editing files

You can always create files on your personal computer and transfer them to Discovery, but sometimes it is easier to create them directly on Discovery. For plain-text files, you can use the `nano`, `vim`, or `emacs` text editors. Nano is the easiest editor to learn; Vim and Emacs both have steeper learning curves, but you may eventually find them more useful and productive.

Links to text editors' webpages:

 - [Nano](https://www.nano-editor.org/)  
 - [Vim](https://www.vim.org/)  
 - [Emacs](https://www.gnu.org/software/emacs/)

To create a new file, simply enter the editor name as the command (e.g., `nano`).

To edit an existing file, enter the editor name as the command and then the path to the file as the argument:

```
nano script.R
```

For detailed instructions on transferring files, see the [Data Management user guides](/user-information/user-guides/data-management).

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

For more information on the software module system, see our [Software Module System user guide](/user-information/user-guides/high-performance-computing/discovery/lmod).

#### Installing your own software

Researchers are encouraged to install any software, libraries, and packages necessary for their work. Consult the software's documentation on how to install from source or with pre-built binaries. Additionally, for a more controlled and portable computing environment, consider using a [Singularity container](https://singularity.lbl.gov/) for your software builds.

For more information on installing software, see the [Software and Programming user guides](/user-information/user-guides/software-and-programming).

### Running jobs

A job consists of all the data, commands, scripts, and programs that will be used to obtain results.

Because the Discovery computing cluster is a shared system, we use a **job scheduler** to manage all requests for resources. The Slurm (Simple Linux Utility for Resource Management) job scheduler is an open-source job scheduler that allocates compute resources on clusters for queued, user-defined jobs. It performs the following functions:

- Schedules user-submitted jobs
- Allocates user-requested computing resources
- Processes user-submitted jobs

A listing of common Slurm commands can be found [here](https://slurm.schedmd.com/pdfs/summary.pdf).

The compute resources on Discovery are shared across many projects and users. When a user submits a job with Slurm, resources are divided using a using a fair share algorithm. This table summarizes the most important resource limits for jobs on the Discovery cluster:

```
Queue          Default Run Time  Max Run Time  Max Cores Available   Maximum Number of Jobs or Job Steps
(Partition)                                                          (Running or Pending)
-----------    ----------------  ------------  -------------------   -----------------------------------
Main           1 Hour            48 Hours      800                   5000
```

Jobs also depend on your project account allocations, and each job will subtract from your project's allocated core-hours. You can use the `myaccount` command to see your available and default accounts and usage for each account:

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

### Testing your job

We recommend that you first test your job interactively on a compute node before submitting it remotely to the Slurm job scheduler, ensuring that you will have quality results after the job completes. You can do this by requesting an interactive session with a compute node using the `salloc` command.

For example, to request four processors for one hour, enter:

```
salloc --ntasks=4 --time=1:00:00 --account=<account_id>
```

Be sure to use the correct account for your jobs. Without the `--account` option, your default account will be used. This is fine if you only have one project account.

After running the command, the job scheduler will add your job to the wait queue.

Once your job starts, you can then test out your scripts and programs to make sure they work properly. Once you are confident that you know how your program will behave, you are ready to submit a job through Slurm.

### Submitting your job

After you have tested your job interactively and achieved the results you want, you can now submit your job to Slurm.

To submit a job, first create a Slurm job script using one of the previously mentioned text editors.

Your job script should look something like this:

```
#!/bin/bash
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=2
#SBATCH --mem-per-cpu=1GB
#SBATCH --time=1:00:00
#SBATCH --account=<account_id>
  
module load gcc
module load python
python3 script.py
```

The top few lines of the file (that begin with `#SBATCH`) use options to specify the requested resources for your program. Be sure to use the correct account in your job scripts. Without the `--account` option, your default account will be used. This is fine if you only have one project account.

The next set of lines loads the required software modules (`module load ...`). After that, the remaining lines are commands that run your programs.

To submit a job, enter the command:

```
sbatch my.job
```

where the argument to the command is the job script's file name (e.g., `my.job`).

Submitted jobs are processed remotely. The process is recorded and written to an output file in the same directory that your job script is stored in. By default, this output file is named `slurm-<jobid>.out`. This is a plain-text file, so you can view it using the `less` command:

```
less slurm-<jobid>.out`.
```

For more information on creating and submitting Slurm job scripts, see the [Running Jobs user guide](/user-information/user-guides/high-performance-computing/discovery/running-jobs).

### Monitoring your job

There are several commands you can use to monitor a job after it has been submitted.

The first thing you will want to check is if your job request was queued. Use the `squeue` command to view the status of your jobs, replacing `<username>` with your USC NetID:

```
squeue -u <username>
```

Each job is assigned a unique job identifier. It is sufficient to use only the numeric portion of the job ID when referencing a job or submitting a ticket.

In the example below, the job 3271 has been placed in the "main" partition (PARTITION) based on its requested time of 1 hour:

```
squeue -u ttrojan
JOBID PARTITION     NAME     USER ST       TIME  NODES NODELIST(REASON)
 3271      main   my.job  ttrojan  R      35:58      1 d05-09
```

The job has been running for 35 minutes and 58 seconds (TIME). It has requested 4 tasks and was allocated 1 node (NODES), which is d05-09 (NODELIST). The status of the job is "R" (running) (ST).

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

If you need additional assistance getting started with the CARC and Discovery, please see the [User Support page](/user-support) for more information.
