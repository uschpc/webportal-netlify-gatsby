---
title: Frequently Asked Questions
id: 4
author: Andrea Renney
date: 2020-10-13T18:19:38.387Z
path: frequently-asked-questions
thumbnail: /images/Question.png
featuredImage: ../../static/images/Question.png
parentEle: none
parentPath: user-information
cat: userSupport
uniqId: FAQ
backToTopBtnFlag: true
excerpt: Your common questions about CARC services and systems.
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
 - **Compute time quota**: The maximum number of core hours available to you for running jobs.

Every project is configured with default quotas. Disk and file quotas for user home directories are permanent. Project Principal Investigators (PIs) may submit a request to increase their project, file, and compute time quotas through the [Research Computing User Portal](/user-information/user-guides/high-performance-computing/research-computing-user-portal).

You can check the quota on your directories by running the `myquota` command while logged in to a head node.

### How do I request more compute time and/or disk space for my project?

If you run out of compute time or project disk space, a PI can request an increase in the [Research Computing User Portal](/user-information/user-guides/high-performance-computing/research-computing-user-portal).

If you're requesting a **new storage allocation** and require more than 10 TB, you can request your allocation in the [User Portal](http://hpcaccount.usc.edu) and indicate the amount of storage you need (in 5 TB increments). See the [Request New Allocation user guide](/user-information/user-guides/high-performance-computing/research-computing-user-portal/request-new-allocation) for more information.

If you have an **existing storage allocation** but would like to increase the amount of storage, please [submit a help ticket](/user-information/ticket-submission) under the "Accounts/Access" category. Please include your project ID, desired allocation size, and reason for this increase. The CARC team will consult with you to determine your needs and the total cost.

### How do I add someone to my project?

A PI can add users in the [Research Computing User Portal](/user-information/user-guides/high-performance-computing/research-computing-user-portal/adding-users-to-project-or-allocation).

### How long will I be able to use my CARC account? Will my account access need to be renewed?

If you are a member of a CARC project, the PI for that project can remove you at any time.

Before the end of each fiscal year, a PI must renew their project to keep it active. If a project is not renewed, compute hours will expire mid-July and login access will expire around August. All members of non-renewed projects will be removed in approximately mid-October. For more information, see the [Yearly Project Renewal user guide](/user-information/user-guides/high-performance-computing/research-computing-user-portal/yearly-project-renewal).

### Will my account remain active if I leave USC?

If you are no longer working on a CARC project, your account will be closed near the beginning of the semester following your departure from the university. If you are a member of a project that uses sensitive/secure data, your account will be closed once you are no longer active with the university. Your data will not be deleted until your project’s PI requests that it be deleted.

If you wish to continue working with someone on a project at USC after you leave, it is possible to keep your account active. You will need to register for a USC guest account through [iVIP](https://itservices.usc.edu/iam/ivip/) with the support of the PI. Your department’s [iVIP administrator](https://itservices.usc.edu/iam/ivip/administrators/) can help with this.

### My project collaborator is not at USC. Can they apply for an account?

A PI may request a USC guest account for a collaborator outside of the university through the [iVIP](https://itservices.usc.edu/iam/ivip/) system. Once an iVIP account has been created, the PI may then add the collaborator’s iVIP account to their CARC project.

## Cluster Resources: General Questions

### How do I log in to the Discovery cluster?

To log in to the Linux-based cluster, you will need to use `ssh` to access one of Discovery's head nodes, where `<username>` is your USC NetID:

```sh
ssh <username>@discovery.usc.edu
```

The head nodes should only be used for non-intensive work like editing and compiling programs; any computing should be done on the compute nodes. Computing jobs run on the head nodes may be terminated before they complete. To [submit jobs](/user-information/user-guides/high-performance-computing/discovery/running-jobs) to the compute nodes, use the Slurm resource manager.

For more information on logging in to the cluster, see the [Getting Started with Discovery user guide](/user-information/user-guides/high-performance-computing/discovery/getting-started).

### How do I avoid getting logged out of the CARC systems due to a bad Wi-Fi connection?

The CARC systems will log you off of a head node after 20 minutes of inactivity, but sometimes you can be logged off due to an unstable Wi-Fi connection. Adding the two lines below to the ~/.ssh/ssh_config file on your local machine may help with an unstable connection.

> Note: You will need to create a config file if one does not exist.

```sh
Host *
  ServerAliveInterval 60
  ServerAliveCountMax 2
```

The lines tell your computer to send two “alive” signals every 60 seconds before allowing the connection to be terminated. This change must be done on your laptop or client computer. If you are connecting from a Windows computer, you will have to check the documentation of your `ssh` client to set the "KeepAlive" interval.

### What shell am I using? Can I use a different shell?

The default shell for new accounts is [Bash](https://www.gnu.org/software/bash/). You can check what your current shell is by entering the following command:

```sh
[user@discovery ~]$ echo $0
```

If you would like to change the shell you are using, you can enter `bash` or `csh` to temporarily use a new shell. If you would like to permanently change your default shell, add the following lines to your ~/.bash_profile, for example:

```sh
export SHELL=/usr/bin/csh
exec /usr/bin/csh -l
```

## Cluster Resources: Running Jobs

### How do I run jobs on the cluster?

Jobs can be run on the cluster in batch mode or in interactive mode. Batch mode processing is performed remotely and without manual intervention. Interactive mode enables you to test your program and environment setup interactively using the `salloc` command.

Once your job is running interactively as expected, you should then submit it for batch processing. This is done by creating a simple text file, called a *Slurm job script*, that specifies the cluster resources you need and the commands necessary to run your program.

For details and examples on how to run jobs, see the [Running Jobs user guide](/user-information/user-guides/high-performance-computing/discovery/running-jobs).

### How can I tell when my job will run?

After submitting a job to the queue, you can use the command:

```sh
squeue -j <job_id> --start
```
where `<job_id>` is the reference number the Slurm job scheduler uses to keep track of your job. The `squeue` command will give you an estimate based on historical usage and availability of resources. Please note that there is no way to know in advance what the exact wait time will be, and the expected start time may change over time.

### How can I tell if my job is running?

You can check the status of your job using the `squeue -u <username>` command, where `<username>` is your USC NetID. If your job is running but you are still unsure if your program is working, you can `ssh` into your compute nodes and use the command `top` to see what is running.

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
   salloc: Nodes d11-30 are ready for job
     
   [ttrojan@d11-30 ~]$ mpirun find
  ```

3. Open a second terminal window, `ssh` to your compute node, and run the `top` command. This will display the processes running on that node.

  ```sh
  [ttrojan@discovery ~]$ ssh d11-30
  [ttrojan@d11-30]$ top
    
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

4. Enter `u` and then enter your username to see only your processes.

If you see only one process, then your job is using only one core.

### How do I create a Slurm file?

A Slurm file, or job script, is a text file that contains your cluster resource requests and the commands necessary to run your program. See the [Running Jobs user guide](/user-information/user-guides/high-performance-computing/discovery/running-jobs) for instructions on creating Slurm job scripts.

### How do I specify which account to submit a job to?

If you belong to only a single project, there is no need to specify which account to use. If you are part of multiple projects, then the Slurm job scheduler will consume the core-hours allocation of your default project group unless you specify a different one. To avoid confusion, it is best to specify which project group's allocation to use in your Slurm script like so:

```sh
#SBATCH --account=<account_id>
```

where `<account_id>` is your project account ID of the form `<PI_username>_<id>`. Enter the command `myaccount` to see your available accounts.

### How do I know which allocation I should use to submit a job if I am in multiple CARC allocations? How do I specify a certain allocation?

To see a listing of all of your available accounts and your current core hour allocations in these accounts, use the `myaccount` command.

The default CARC allocation is used to run a job when no allocation is specified in the `salloc`, `srun`, and `sbatch` commands.

You can override the default account by using the `--account` option:

```sh
sbatch –-account=<account_id> myjob.slurm
```
where `<account_id>` is your project account ID of the form `<PI_username>_<id>`.

### How do I report a problem with a job submission?

If a job submission results in an error, please contact the CARC team by [submitting a ticket](/user-information/ticket-submission). Be sure to include the job ID, error message, job script, and any additional information you can provide.

### How do I create or edit a text file?

Text files are created and edited using text editors that are designed for writing code. These text editors differ from common word processors, like Microsoft Word, in that they only work with plain text files.

You can use the `nano`, `vim`, or `emacs` text editors. Nano is the easiest editor to learn; Vim and Emacs both have steeper learning curves, but you may eventually find them more useful and productive.

To create a new file, simply enter the editor name as the command (e.g., `nano`). You can specify the filename when saving the file.

To edit an existing file, enter the editor name as the command and then the path to the file as the argument (e.g., `nano script.R`).

### Can I use the local storage on a compute node?

The /tmp directory on compute nodes is limited, so we recommend that you use the /scratch or /scratch2 file systems for temporary files. To change the temporary directory location, modify the `$TMPDIR` environment variable. For example:

```sh
export TMPDIR=/scratch/<username>
```

You can also include this line in your ~/.bash_profile to automatically set this variable every time you log in.

## Cluster Resources: Data Files and Disk Space

### I accidentally deleted a file. Is it possible to recover it?

We keep two weeks of snapshots for files in your home and project directories. You can think of these snapshots as semi-backups. If you accidentally delete some data, then we will be able to recover it if it was captured by a snapshot in the past two weeks. If data was created and deleted within a one-day period, between snapshots, then we will not be able to recover it. You should always keep extra backups of your important data and other files because of this.

If you need to recover a deleted file, please contact the CARC team by [submitting a ticket](/user-information/ticket-submission) and we will determine if a snapshot of the file exists.

### Which file system should I store my project data in?

The CARC has several different file systems, as summarized in the table below.

| Name      | Path                                            | Amount of space                         | File recovery                | Purpose                                                                                |
|-----------|-------------------------------------------------|-----------------------------------------|---------------------------|----------------------------------------------------------------------------------------|
| Home      | `~`, `/home1/<username>`                          | 100 GB per account                                     | Yes                       | Personal configuration files, software, and scripts                                                 |
| Project   | `/project/<PI_username>_<id>`                      | Default of 5 TB per project (can be increased in 5 TB increments), shared among group members | Yes                       | Shared software and files, medium-term data storage, and high-performance I/O                                       |
| Scratch (1 & 2)   | `/scratch/<username>`, `/scratch2/<username>`                           | 10 TB per file system per account                        | No                        | Temporary files and high-perfomance I/O                                              |

### How do I share my project data with another user?

By default, your home and scratch directories are set so that only you can read and write to them. This is to protect your data from other users. In contrast, your project directories are set, by default, so that all group members can read and write to them.

When sharing your files, especially outside your project directories, please keep the following in mind:

1. Do not change the permissions of your home directory and its subdirectories
    - If something goes wrong, your login will be blocked by our SSH checks
2. Never set the permissions of your own directories to **777**
    - This gives anyone on the cluster the ability to read, modify, and delete your files
3. Read permission is sufficient for most activities
    - In general, do not allow others to write to directories that you own
    - Providing read access to a directory also requires execute permission (r-x)

To allow guests to read files, you will need to create an access-control list (ACL) which allows you to specify permissions on a per-user basis. For example, to allow someone with the username `guest_user` read access to your scratch directory:

```sh
# Allows new files to be shared
setfacl -Rdm u:guest_user:r-x /scratch/ttrojan
  
# Allows existing files to be shared
setfacl -Rm u:guest_user:r-x /scratch/ttrojan
```

By adding the `-d` option, new files and directories will have the same ACLs as their parent directory applied at creation. The `-R` option will recursively set access.

To remove `guest_user`'s read access, enter:

```sh
setfacl -Rdm u:guest_user:--- /scratch/ttrojan
setfacl -Rm u:guest_user:--- /scratch/ttrojan
```

*(optional)*
To completely remove `guest_user`'s record in the ACL entry:

```sh
setfacl -Rdx u:guest_user /scratch/ttrojan   
setfacl -Rx u:guest_user /scratch/ttrojan
```

If you forget which permissions have been set, you can run `getfacl` to check:

```sh
[ttrojan@discovery]$ getfacl /scratch2/ttrojan
  
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

Before you submit a large job or install new software, you should check that you have sufficient disk space.

To check your quota, use the `myquota` command. Under `size`, compare the results of `used` and `hard`. If the value of `used` is close to the value of `hard`, you will need to delete files or, for project directories, request an increase in disk space from the [Research Computing User Portal](/user-information/user-guides/high-performance-computing/research-computing-user-portal/request-new-allocation).

> Note: The `chunk files` section indicates the way your files and directories are divided up by the parallel file system, not the absolute number of files.

```sh
ttrojan@discovery:~$ myquota
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

--------------------------
/project/ttrojan_120
      user/group     ||           size          ||    chunk files
     name     |  id  ||    used    |    hard    ||  used   |  hard
--------------|------||------------|------------||---------|---------
   ttrojan_120| 32855||   16.92 GiB|    5.00 TiB||     1134| 30000000
```

### I’m running out of space. How do I check the size of my files and directories?

To check your disk usage, use the `du` command.

To list the largest directories in the current directory, enter:

```sh
du -s * | sort -nr | head -n 10
```

- `du -s *`: Summarizes disk usage of all files
- `sort -nr`: Sorts numerically, in reverse order
- `head -n 10`: Shows the first ten lines from head

To list the top ten largest files from the current directory, enter:

```sh
du . | sort -nr | head -n 10
```

- `du .`: Shows disk usage of current directory
- `sort -nr`: Sorts numerically, in reverse order
- `head -n 10`: Shows the first ten lines from head

To see other options, view the manual page by entering `man du`.

## Cluster Resources: Endeavour/Condo Cluster Program

### What is the Condo Cluster Program?

The CARC's Condo Cluster Program (CCP) is a service available to USC researchers that require dedicated computing and/or storage resources for their work. The CCP gives researchers the convenience of having their own dedicated compute nodes, without the responsibility of purchasing and maintaining the nodes themselves. The CCP operates on both an annual subscription-based model, with research groups subscribing to their selected number of compute and storage resources on a yearly basis, as well as an outright purchase basis, with research groups purchasing compute or storage resources from the CARC for a fixed term (e.g., five years). All hardware is maintained by the CARC throughout the course of the subscription or lease term.

> For more information on CCP policies, see our main [Condo Cluster Program pages](/user-information/ccp).

### What is the difference between leasing resources and subscribing to resources?

Our subscription-based model allows researchers to subscribe to computing and storage resources on a yearly basis. The subscription model is ideal for researchers who anticipate changes to their resource requirements or for researchers who only require CCP resources for a shorter period of time (minimum of one year). The CARC purchases and maintains the resources and all related hardware throughout the course of the subscription term.

Our outright purchase model is the classic pricing model that we've used for condo purchases in previous years. Researchers choose the resources they need and the CARC purchases and maintains them for the lease term (e.g., five years). The leasing researchers effectively own their resources, and at the end of their lease period, the resources are retired. The CARC maintains the resources and all related hardware throughout the course of the lease term.

For pricing and policies, see the [Program Information page](/user-information/ccp/program-information).

### What is the difference between the Endeavour cluster and the Discovery cluster?

The Discovery cluster is a "public" cluster in the sense that it is open to all CARC users to run their jobs and store their data. The Endeavour cluster is comprised of the condo resources that CCP users lease or subscribe to, but each research group's own resources are for their dedicated use only.

## Software

### What software is available on CARC systems?

Many traditional utilities can be found in `/usr/bin`. The majority of software, however, is installed and mangaged with [Spack](https://spack.io/), a software package manager, and installed in a `/spack` directory. All software managed by CARC staff is accessed using the Lmod module system. See our [Software Module System user guide](/user-information/user-guides/high-performance-computing/discovery/lmod) for in-depth information.

In short, we use the Lmod module system to manage your shell environment. To use a certain software, you must "load" its module, which will then dynamically change your environment settings.

To check if a certain software or library is available, use the `module spider` command. The following example checks for `samtools`:

```sh
user@discovery:~$ module spider samtools
----------------------------------------------------------------------------------------------
  samtools:
----------------------------------------------------------------------------------------------
     Versions:
        samtools/1.10
        samtools/18.0.4

----------------------------------------------------------------------------------------------
  For detailed information about a specific "samtools" package (including how to load the modules)
  use the module's full name. Note that names that have a trailing (E) are extensions provided by
  other modules.
  For example:

     $ module spider samtools/18.0.4
----------------------------------------------------------------------------------------------
```

### How do I run [software] on CARC systems?

See our user guides for [Software and Programming](/user-information/user-guides/software-and-programming) for detailed instructions on how to use specific software, such as Python, R, Julia, etc.

If you do not see a page for the software you want to use, please [submit a ticket](/user-information/ticket-submission).

### Why am I getting a “command not found” error when I try to run a CARC application?

The shell gives this error when it is unable to find the requested application in your search path (`$PATH`). You will either need to give the full path to the program you want to run or add the program to your `PATH` environment variable.

For example, if your program is saved in `/scratch/ttroj/software/bin`, you can add the parent directory to your `PATH` like so:

```sh
export PATH=/scratch/ttroj/software/bin:${PATH}
```

Make sure you include the ending `:${PATH}` so that your old `PATH` will be included in the new one.

### What compilers are available on CARC systems?

CARC has multiple compilers available:

|Compiler Type| Version|
|---|---|
|gcc|8.3.0|
|gcc|9.2.0|
|Intel|18.0.4|
|Intel|19.0.4|

Each compiler has its own software tree which is "unlocked" by loading the appropriate module. This ensures compatibility between applications. If you want to switch compilers, Lmod will automatically swap modules you have already loaded. For example, CMake is installed in both GCC 8.3.0 and 9.2.0:

```sh
module load gcc/8.3.0
module load cmake
  
# Swap compilers
module load gcc/9.2.0
  
The following have been reloaded with a version change:
  1) cmake/3.15.4 => cmake/3.16.2   2) gcc/9.2.0 => gcc/8.3.0
```

LLVM is also available as a module after loading one of the GCC modules.
