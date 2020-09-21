---
excerpt: Your common questions about CARC services and systems.
path: frequently-asked-questions
author: Yaseen A
thumbnail: /images/Question.png
featuredImage: ../../static/images/Question.png
date: 2020-04-22T18:19:38.387Z
parentEle: none
parentPath: user-information
cat: userSupport
uniqId: FAQ
backToTopBtnFlag: true
title: Frequently Asked Questions
id: 4
---

## Accounts

### How can I apply for a CARC account?

You can log in to CARC systems using your USC NetID and password, so there is no additional requirement for CARC-specific account creation. However, in order to access CARC systems, you must either be the Principal Investigator (PI) of a research project or an authorized member of a PI's research project. For more information on CARC accounts, please see the [Accounts and Allocations page](/user-information/accounts).

### I forgot my password. How can I reset it?

Because your CARC account is accessed using your USC NetID, the CARC does not have access to passwords and cannot reset them. You can reset your USC NetID password [here](https://netid.usc.edu/account_services/forgot_password) or [contact the ITS Customer Support Center](https://itservices.usc.edu/contact/) for assistance with resetting your account password.

### What is a quota?

A quota can refer to any one of the following:

 - **Disk quota**: The maximum allowed disk space available to you in your home or project directories.
 - **File quota**: The maximum number of files you can store in your home or project directory.
 - **Computing (core hours) quota**: The maximum number of core hours available to you for running jobs.

Every project is configured with default quotas. Disk and file quotas for user home directories are permanent. Project Principal Investigators (PIs) may submit a request to increase their project, file, and computing quotas through the [Research Computing User Portal](/user-information/user-guides/high-performance-computing/research-computing-user-portal).

You can check the quota on your home directory by running the `myquota` command while logged in to a head node.

To check your compute (core) hours, run the `mybalance -h` command.

### How do I request more compute time and/or disk space for my project?

If you run out of compute time or project disk space, a PI can request an increase in the [Research Computing User Portal](/user-information/user-guides/high-performance-computing/research-computing-user-portal).

### How do I add someone to my project?

A PI can add users in the [Research Computing User Portal](/user-information/user-guides/high-performance-computing/research-computing-user-portal).

### How long will I be able to use my CARC account? Will my account access need to be renewed?

If you are a member of a CARC project, the PI for that project can remove you at any time.

Before the end of each fiscal year, a PI must renew their project to keep it active. If a project is not renewed, compute hours will expire mid-July and login access will expire around August. All members of non-renewed projects will be removed in approximately mid-October.

### Will my account remain active if I leave USC?

If you are no longer working on a CARC project, your account will be closed near the beginning of the semester following your departure from the university. If you are a member of a project that uses sensitive/secure data, your account will be closed once you are no longer active with the university. Your data will not be deleted until your project’s PI requests that it be deleted.

If you wish to continue working with someone on a project at USC after you leave, it’s possible to keep your account active. You will need to register for a USC guest account through [iVIP](https://itservices.usc.edu/iam/ivip/) with the support of the PI. Your department’s [iVIP administrator](https://itservices.usc.edu/iam/ivip/administrators/) can help with this.

### My project collaborator is not at USC. Can they apply for an account?

A PI may request a USC guest account for a collaborator outside of the university through the [iVIP](https://itservices.usc.edu/iam/ivip/) system. Once an iVIP account has been created, the PI may then add the collaborator’s iVIP account to their CARC project.

## Cluster Resources: General Questions

### How do I log into the CARC cluster?

To log in to the Linux-based cluster resource, you will need to use `ssh` to access one of the CARC's login/head nodes, discovery.usc.edu or discovery2.usc.edu.

These head nodes should only be used for editing and compiling programs; any computing should be done on the compute nodes. Computing jobs submitted to the head nodes may be terminated before they complete. To submit jobs to the compute nodes, use the Slurm resource manager.

For more information on logging in to the cluster, see the [Getting Started with Discovery user guide](/user-information/user-guides/high-performance-computing/discovery/getting-started).

### How do I avoid getting logged out of the CARC systems due to a bad Wi-Fi connection?

The CARC systems will log you off of a head node after 20 minutes of inactivity, but sometimes you can be logged off due to an unstable Wi-Fi connection. Adding the two lines below to your ~/.ssh/config file may help with an unstable connection.

> Note: You will need to create a config file if one doesn’t exist.

```sh
Host *
  ServerAliveInterval 60
  ServerAliveCountMax 2
```

The lines tell your computer to send two “alive” signals every 60 seconds before allowing the connection to be terminated. This change must be done on your laptop or client computer. If you are connecting from a Windows computer, you will have to check the documentation of your `ssh` client to set the ‘KeepAlive’ interval.

### What shell am I using? Can I use a different shell?

The default shell for new accounts is bash. You can check what your current shell is by typing the following command, where `<username>` is your USC NetID:

```sh
<username>@discovery ~]$ echo $0
```

If you’d like to change the shell you are using, you can type `bash` or `csh` after the `echo $0` command to temporarily use a new shell. If you’d like to permanently change your default shell, you can contact the CARC team by [submitting a ticket](/user-information/ticket-submission).

## Cluster Resources: Running Jobs

### How do I run jobs on the cluster?

Jobs can be run on the cluster in batch mode or in interactive mode. Batch mode processing is performed remotely and without manual intervention. Interactive mode enables you to test your program and environment setup interactively using the `salloc` command.

Once your job is running interactively as expected, you should then submit it for batch processing. This is done by creating a simple text file, called a *Slurm script*, that specifies the cluster resources you need and the commands necessary to run your program.

For details and examples on how to run jobs, see the [Running Jobs user guide](/user-information/user-guides/high-performance-computing/discovery/running-jobs).

### How can I tell when my job will run?

After submitting a job to the queue, you can use the command `squeue -j <job_id> –start`, where `<job_id>` is the reference number the Slurm job scheduler uses to keep track of your job. The `squeue` command will give you an estimate based on historical usage and availability of resources. Please note that there is no way to know in advance what the exact wait time will be, and the expected start time may change over time.

### How can I tell if my job is running?

You can check the status of your job using the `myqueue` command or the `squeue -u <username>` command, where `<username>` is your username/USC NetID. If your job is running but you are still unsure if your program is working, you can `ssh` into your compute nodes and use the command `top` to see what is running.

In general, it is recommended that users first request an interactive session to test out their jobs. This will give you immediate feedback if there are errors in your program or syntax. Once you are confident that your job can complete without your intervention, you are ready to submit a batch job using a Slurm script.

### How do I tell if my job is running on multiple cores?

You can check the resources your program is consuming using the `top` process manager:

1. Request an interactive compute node using the `salloc` command.
2. Run your job.
  ```sh
   salloc --ntasks=8
   salloc: Pending job allocation 24210
   salloc: job 24210 queued and waiting for resources
   salloc: job 24210 has been allocated resources
   salloc: Granted job allocation 24210
   salloc: Waiting for resource configuration
   salloc: Nodes d3264 are ready for job
     
   [ttrojan@d3264 ~]$mpirun find
  ```

3. Open a second terminal window, `ssh` to your compute node, and run the `top` command. This will display the processes running on that node.

  ```sh
  [ttrojan@discovery ~]$ ssh d3264
  [ttrojan@d3264]$ top
    
  top - 15:37:36 up 21:50,  1 user,  load average: 0.00, 0.01, 0.05
  Tasks: 285 total,   1 running, 284 sleeping,   0 stopped,   0 zombie
  %Cpu(s):  0.0 us,  0.0 sy,  0.0 ni,100.0 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st
  KiB Mem : 65766384 total, 64225800 free,   970788 used,   569796 buff/cache
  KiB Swap:  8388604 total,  8388604 free,        0 used. 64535076 avail Mem
  PID USER         PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND
  15191 ttrojan     20   0    139m   5684   1500 R   2.7  0.0   0:00.04 mpirun
  15195 ttrojan     20   0   15344    996    768 S   1.3  0.0   0:00.08 find
  15196 ttrojan     20   0   15344    996    768 S   1.3  0.0   0:00.08 find
  15199 ttrojan     20   0   15344    996    768 S   1.3  0.0   0:00.08 find
  15203 ttrojan     20   0   15344    996    768 S   1.3  0.0   0:00.08 find
  15204 ttrojan     20   0   15344    996    768 S   1.3  0.0   0:00.08 find
  15205 ttrojan     20   0   15344    996    768 S   1.3  0.0   0:00.08 find
  15206 ttrojan     20   0   15344    996    768 S   1.3  0.0   0:00.08 find
  15207 ttrojan     20   0   15344    996    768 S   1.3  0.0   0:00.08 find
  ```

4. The number of your job processes should match the number of tasks (`ntasks`) requested in your `salloc` command.

If you see only one process, your job is using only one core.

### How do I create a Slurm file?

A Slurm file, or script, is a simple text file that contains your cluster resource requests and the commands necessary to run your program. See the [Running Jobs user guide](/user-information/user-guides/high-performance-computing/discovery/running-jobs) for instructions on creating Slurm job scripts.

### How do I specify which account to submit a job to?

If you only belong to a single project, there is no need to specify which account to use. If you are part of multiple projects, then the Slurm job scheduler will consume the core-hours allocation of your default project group unless you specify a different one. To avoid confusion, it is best to specify which project group's allocation to use in your Slurm script like so:

```sh
#SLURM --account=<account_id>
```

where `<account_id>` is your account name of the form lc_xxx.

### How do I know which allocation I should use to submit a job if I am in multiple CARC allocations? How do I specify a certain allocation?

To see a listing of all of your available accounts and your current core hour allocations in these accounts, use the following command:

```sh
mybalance -h
```

The default CARC allocation is used to run a job when no allocation is specified in the `salloc`, `srun`, and `sbatch` commands.

You can override the default account by using the `-account` command:

```sh
sbatch –account=<account_id> myjob.slurm
```

For further details on `salloc`, `srun`, and `sbatch`, please read the official manual pages available by typing the following on any CARC login/head node:

```sh
man salloc
```

```sh
man srun
```

```sh
man sbatch
```

### How do I report a problem with a job submission?

If a job submission results in an error, please contact the CARC team by [submitting a ticket](/user-information/ticket-submission). Be sure to include the job ID, error message, and any additional information you can provide.

### How do I create/edit a text file?

Text files are created and edited using text editors that are designed for writing code. These text editors differ from common word processors, such as Microsoft Word or Notepad.

The CARC supports the following UNIX editors: Vim (vi), GNU nano, and GNU Emacs. Nano is the editor taught in the CARC's workshops due to its ease of use.

Additional information on UNIX editors can be found in the [UNIX Overview](https://itservices.usc.edu/unix/) section of the ITS website.

### Can I use the local storage on a compute node?

Yes, you can temporarily access the local disk space on a single node using the `$TMPDIR` environment variable in your job scripts. For a multi-node job you can use the /scratch file system as your working directory for all jobs.

## Cluster Resources: Data Files and Disk Space

### I accidentally deleted a file, is it possible to recover it?

Your project and home directories provide 2-week snapshots with daily backups, so if you accidentally delete some of your important data, you can recover the data if the deletion was within the last three weeks. You should always keep extra backups of your important data since snapshots or semi-backups are not real backups.

In order to be a candidate for snapshots, files must be closed and idle for at least 20 minutes. If you know the name and path of the file you deleted, we can search your backup directory and attempt to retrieve it.

### Which file system should I store my project data in?

The CARC has several different file systems, as summarized in the table below.

| Name      | Path                                            | Amount of space                         | Backed up?                | Purpose                                                                                |
|-----------|-------------------------------------------------|-----------------------------------------|---------------------------|----------------------------------------------------------------------------------------|
| Home      | `~`, `/home1/<username>`                          | 100 GB per account                                     | Yes                       | Configuration files, personal scripts                                                 |
| Project   | `/project/<PI_name>_xxx`                      | Default of 5 TB (can be increased in 5 TB increments), shared amongst group members | Yes                       | Medium-term data storage while running CARC jobs                                       |
| Scratch (1 & 2)   | `/scratch/<username>`, `/scratch2/<username>`                           | 10 TB per file system per account                        | No                        | Short-term, high perfomance data storage                                              |

The home, project, and scratch file systems are shared, which means that your usage can impact and be impacted by the activities of other users.

### How do I share my project data with another user?

By default, your directories are set so that only you can read and write to them. This is to protect your data from other users.

When sharing your files, please keep the following in mind:

1. Never set the permissions of your own directories to **777**.
    * This gives anyone on the cluster the ability to delete your files.
1. Read permission is sufficient for most activities.
    * Do not allow others to write to directories that you own.
1. Do not change the permissions of your home directory and its subdirectories.
    * If something goes wrong, your login will be blocked by our SSH checks.

To allow guests to read files, you will need to create an access-control list (ACL) which allows you to specify permissions on a per-user basis.

For example, to allow someone with the username `guest_user` read access to your scratch directory:

```sh
# Allows new files to be shared
setfacl -Rdm u:guest_user:r-x /scratch/guest_user
  
# Allows existing files to be shared
setfacl -Rm u:guest_user:r-x /scratch/guest_user
```

By adding the `-d` option, new files and directories will have the same ACLs as their parent directory applied at creation. The `-R` option will recursively set access.

To remove `guest_user`'s read access:

```sh
setfacl -Rdm u:guest_user:--- /scratch/guest_user
setfacl -Rm u:guest_user:--- /scratch/guest_user
```

*(optional)*
To completely remove `guest_user`'s record in the ACL entry:

```sh
setfacl -Rdx u:guest_user /scratch/user_name   
setfacl -Rx u:guest_user /scratch/user_name
```

If you forget which permissions have been set, you can run `getfacl` to check which ACLs have been set:

```sh
[ttroj@discovery]$ getfacl /scratch2/user_name
  
getfacl: Removing leading '/' from absolute path names
  
# File: scratch2/user_name
# Owner: user_name
# Group: group_name
user::rwx
user:guest_user:r-x
group::---
mask::r-x
other::---
default:user::rwx
default:user:guest_user:r-x
default:group::---
default:mask::r-x
default:other::---
```

If you require further assistance, please [submit a ticket](/user-information/ticket-submission) to explore other options.

### How do I check if I have enough disk space?

Before you submit a large job or install new software, you should check that you have sufficient disk space. Your home directory has limited space, so you should use your project directory for research and software installation.

To check your quota, use the `myquota` command. Under `size`, compare the results of `used` and `hard`. If the value of `used` is close to the value of `hard`, you will need to delete files or request an increase in disk space from the [Research Computing User Portal](/user-information/user-guides/high-performance-computing/research-computing-user-portal).

>Note: The `chunk files` section indicates the way your files and directories are divided up by the parallel file system, not the absolute number of files.

```sh
$ myquota
--------------------------
/home1/ttrojan
      user/group     ||           size          ||    chunk files
     name     |  id  ||    used    |    hard    ||  used   |  hard
--------------|------||------------|------------||---------|---------
      ttrojan|375879||   51.88 MiB|  100.00 GiB||     3461|  2000000
        
--------------------------
/scratch/ttrojan
      user/group     ||           size          ||    chunk files
     name     |  id  ||    used    |    hard    ||  used   |  hard
--------------|------||------------|------------||---------|---------
      ttrojan|375879||   13.20 GiB|   10.00 TiB||   162363|unlimited
        
--------------------------
/scratch2/ttrojan
      user/group     ||           size          ||    chunk files
     name     |  id  ||    used    |    hard    ||  used   |  hard
--------------|------||------------|------------||---------|---------
      ttrojan|375879||   22.87 GiB|   30.00 TiB||    10118|unlimited
```

### I’m running out of space. How do I check the size of my files and directories?

To check your disk usage, use the `du` command.

To list the largest directories from the current directory, use the following command:

```sh
$ du -s * | sort -nr | head -n10
```

 - `du -s *`: Summarizes disk usage of all files

 - `sort -nr`: Sorts numerically, in reverse order

 - `head -n10`: Shows the first ten lines from head

To list the top ten largest files from the current directory, use the following command:

```sh
$ du . | sort -nr | head -n10
```

 - `du .`: Shows disk usage of current directory

 - `sort -nr`: Sorts numerically, in reverse order

 - `head -n10`: Shows the first ten lines from head

To see all other options for `du`, use the following command:

```sh
$ man du
```

## Software

### What software is available on CARC systems?

Most traditional UNIX utilities can be found in `/usr/bin`. All software managed by CARC staff is available using the Lmod module system. See our [Software Module System user guide](/user-information/user-guides/high-performance-computing/discovery/lmod) for in-depth information.

The short version is that we use the Lmod module system to manage your environment. To use a certain software, you must "load" its module, which will then dynamically change your environment settings.

To check if a certain software is available, use the `module avail` command. The following example checks for `samtools`:

```sh
$ module avail samtools
  
---------------- /spack/apps/lmod/linux-centos7-x86_64/gcc/8.3.0 ----------------
   samtools/1.9    samtools/1.10 (D)
     
  Where:
   D:  Default Module
     
Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching any of the "keys".
```

Some software may not be built with the compiler in your current environment and will not show up when you use `module avail`.

### How do I run MATLAB on CARC systems?

See our [MATLAB user guide](/user-information/user-guides/software-and-programming/matlab) for instructions.

### Why am I getting a “command not found” error when I try to run a CARC application?

The shell gives this error when it is unable to find the requested application in your search path (`$PATH`). You will either need to give the full path to the program you want to run or add the program to your `PATH` environment variable.

For example, if your program is saved in `/scratch/ttroj/software/bin`, you can add the parent directory to your `PATH` like so:

```sh
export PATH=/scratch/ttroj/software/bin:${PATH}
```

Make sure you include `:${PATH}` so that your old `PATH` will be included in the new one.


### How do I check if a program or library is installed on CARC systems?

The easiest method is to use Lmod to check. If you know the name of the program, you can use `module avail <program_name>` to see if you can currently load its module.

It may be the case that the desired software is installed but not "available". Lmod sometimes "hides" software if you don't have the necessary prerequisites loaded. If that's the case, you can use `module spider <program_name>`, which will search through the entire software stack. If the software is found, Lmod will tell you what modules need to be loaded first.

### How do I check if a Python package is installed on CARC systems?

The command `pip freeze` will display all the Python packages installed in the current version that you are using.

Example:

```sh
$ module load python
$ pip3 freeze
  
appdirs==1.4.0
cycler==0.10.0
Cython==0.25.2
dask==0.13.0
	:
	:
scikit-image==0.12.3
scikit-learn==0.18.1
scipy==0.18.1
	:
```

### What compilers are available on CARC systems?

For compatibility, CARC has multiple compilers available:

|Compiler Type| Version|
|---|---|
|gcc| 4.9.4|
|gcc| 8.3.0|
|gcc| 9.2.0|
|Intel| 18.0.4|
|Intel| 19.0.4|

Each compiler has its own software tree which is "unlocked" by loading the appropriate module. This ensures compatibility between applications. If you want to switch compilers, Lmod will automatically swap modules you have already loaded. For example, Cmake is installed in both gcc 8.3.0 and 9.2.0:

```sh
module load gcc/8.3.0
module load cmake
  
# Swap compilers
module load gcc/9.2.0
  
The following have been reloaded with a version change:
  1) cmake/3.15.4 => cmake/3.16.2   2) gcc/9.2.0 => gcc/8.3.0
```
