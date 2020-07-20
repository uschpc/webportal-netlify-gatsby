---
excerpt: Your common questions about the CARC and our services.
path: frequently-asked-questions
author: Yaseen A
thumbnail: /images/Question.png
date: 2020-04-22T18:19:38.387Z
parentEle: none
parentPath: user-information
cat: userSupport
uniqId: FAQ
title: Frequently Asked Questions
id: 4
---
## Accounts

### I forgot my password. How can I reset it?

Because your CARC account is accessed using your USC NetID, the CARC does not have access to passwords and cannot reset them. You can reset your USC NetID password [here](https://netid.usc.edu/account_services/forgot_password) or [contact the ITS Customer Support Center](https://itservices.usc.edu/contact/)for assistance with resetting your account password.

### What is a quota?

A quota can refer to any one of the following:

 - **Disk quota**: The maximum allowed disk space available to you in your home or project directories.
 - **File quota**: The maximum number of files you can store in your home or project directory.
 - **Computing (core hours) quota**: The maximum number of core hours available to you for running jobs.

Every project is configured with default quotas. Disk and file quotas for user home directories are permanent. Project Principal Investigators (PIs) may submit a request to increase their project, file, and computing quotas through the [Research Computing User Portal](/user-information/user-guides/high-performance-computing/research-computing-user-portal).

You can check the quota on your RCF home directory by running the `myquota` command while logged in to a head node.

To check your compute (core) hours, run the `mybalance -h` command.

### How do I request more compute time and/or disk space for my project?

If you run out of compute time or project disk space, a PI can request an increase in the [Research Computing User Portal](/user-information/user-guides/high-performance-computing/research-computing-user-portal).

### How do I add someone to my project?

A PI can add users in the [Research Computing User Portal](/user-information/user-guides/high-performance-computing/research-computing-user-portal).

### How long will I be able to use my CARC account? Will my account access need to be renewed?

If you are a member of a CARC project, the PI for that project can remove you at any time. Before the end of each fiscal year, the PI must renew the account to keep it active. Compute hours will expire mid-July and login access will expire around August. All members of non-renewed accounts will be removed in approximately mid-October.

### Will my account remain active if I leave USC?

If you are no longer working on a CARC project, your account will be closed near the beginning of the semester following your departure from the university. If you are a member of a project that uses sensitive/secure data, your account will be disabled once you are no longer active with the university. Your data will not be deleted until your project’s PI requests that it be deleted.

If you wish to continue working with someone on a project at USC after you leave, it’s possible to keep your account active. You will need to register for a USC guest account through [iVIP](https://itservices.usc.edu/iam/ivip/) with the support of the PI. Your department’s [iVIP administrator](https://itservices.usc.edu/iam/ivip/administrators/) can help with this.

### My project collaborator is not at USC. Can they apply for an account?

A PI may request a USC guest account for a collaborator outside of the university through the [iVIP](https://itservices.usc.edu/iam/ivip/) system. Once an iVIP account has been created, the PI may then add the collaborator’s iVIP account to their CARC project.

## Cluster Resources: General Questions

### How do I log into the CARC cluster?

To log in to the Linux-based cluster resource, you will need to use `ssh` to access either hpc-login2 or hpc-login3.

These head nodes should only be used for editing and compiling programs; any computing should be done on the compute nodes. Computing jobs submitted to the head nodes may be terminated before they complete. To submit jobs to the compute nodes, use the Slurm resource manager.

### How do I avoid getting logged out of the CARC systems due to a bad Wi-Fi connection?

The CARC systems will log you off of a head node after 20 minutes of inactivity, but sometimes you can be logged off due to an unstable Wi-Fi connection. Adding the two lines below to your ~/.ssh/config file may help with an unstable connection.

> Note: You will need to create a config file if one doesn’t exist.

```
Host *
  ServerAliveInterval 60
  ServerAliveCountMax 2
```

The lines tell your computer to send two “alive” signals every 60 seconds before allowing the connection to be terminated. This change must be done on your laptop or client computer. If you are connecting from a Windows computer, you will have to check the documentation of your `ssh` client to set the ‘KeepAlive’ interval.

### What shell am I using? Can I use a different shell?

The default shell for new accounts is bash. You can check what your current shell is by typing the command:

`user@hpc-login3 ~]$ echo $0`

If you’d like to change the shell you are using, you can type `bash` or `csh` after the `echo $0` command to temporarily use a new shell. If you’d like to permanently change your default shell, you can contact the CARC team by [submitting a ticket](/user-information/ticket-submission).

## Cluster Resources: Running Jobs

### How do I run jobs on the cluster?

Jobs can be run on the cluster in batch mode or in interactive mode. Batch processing is performed remotely and without manual intervention. Interactive mode enables you to test your program and environment setup interactively using the `salloc` command.

Once your job is running interactively as expected, you should then submit it for batch processing. This is done by creating a simple text file, called a *Slurm script*, that specifies the cluster resources you need and the commands necessary to run your program.

For details and examples on how to run jobs, see our [Running Jobs user guide](/user-information/user-guides/high-performance-computing/discovery/running-jobs).

### How can I tell when my job will run?

After submitting a job to the queue, you can use the command `squeue -j <job_id> –start`, where `<job_id>` is the reference number the Slurm job scheduler uses to keep track of your job. The `squeue` command will give you an estimate based on historical usage and availability of resources. Please note that there is no way to know in advance what the exact wait time will be, and the expected start time may change over time.

### How can I tell if my job is running?

You can check the status of your job using the `myqueue` command or the `squeue -u <username>` command, where `<username>` is your username. If your job is running but you are still unsure if your program is working, you can `ssh` into your compute nodes and use the command `top` to see what is running.

In general, we recommend that users first request an interactive session to test out their jobs. This will give you immediate feedback if there are errors in your program or syntax. Once you are confident that your job can complete without your intervention, you are ready to submit a batch job using a Slurm script.

### How do I tell if my job is running on multiple cores?

You can check the resources your program is consuming using the `top` process manager:

 1. Request an interactive compute node using the `salloc` command.
 2. Run your job.
  ```
   >
  [ttrojan@hpc-login3 ~]$ salloc --ntasks=8  
  ----------------------------------------
  Begin SLURM Prolog Wed 21 Feb 2018 02:34:35 PM PST
  Job ID:        767
  Username:      ttrojan
  Accountname:   lc_usc1
  Name:          bash
  Partition:     quick
  Nodes:         hpc3264
  TasksPerNode:  15(x2)
  CPUSPerTask:   Default[1]
  TMPDIR:        /tmp/767.quick
  Cluster:       uschpc
  HSDA Account:  false
  End SLURM Prolog
  ----------------------------------------
  [ttrojan@hpc3264 ~]$mpirun find
  ```
  3. Open a second terminal window, `ssh` to your compute node, and run the `top` command. This will display the processes running on that node.

  ```
  [ttrojan@hpc-login3 ~]$ ssh hpc3264
  [ttrojan@hpc3264]$ top
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

A Slurm file, or script, is a simple text file that contains your cluster resource requests and the commands necessary to run your program. See our [Running Jobs user guide](/user-information/user-guides/high-performance-computing/discovery/running-jobs) for instructions on creating Slurm job scripts.

### How do I specify which account to submit a job to?

If you only belong to a single project, there is no need to specify which account to use. If you are part of multiple projects, then the Slurm job scheduler will consume the core-hours allocation of your default project group unless you specify a different one. To avoid confusion, it is best to specify which project group's allocation to use in your Slurm script like so:

```
#SLURM --account=<account_id>

```

where `<account_id>` is your account name of the form lc_xxx.

### How do I know which allocation I should use to submit a job if I am in multiple CARC allocations? How do I specify a certain allocation?

To see a listing of all of your available accounts and your current core hour allocations in these accounts, use the following command:

`mybalance -h`

The default CARC allocation is used to run a job when no allocation is specified in the `salloc`, `srun`, and `sbatch` commands.

You can override the default account by using the `-A` command:

`sbatch –account=<account_id> myjob.slurm`

For further details on `salloc`, `srun`, and `sbatch`, please read the official manual pages available by typing the following on any CARC login node:

`man salloc`

`man srun`

`man sbatch`

### How do I report a problem with a job submission?

If a job submission results in an error, please contact the CARC team by [submitting a ticket](/user-information/ticket-submission). Be sure to include the job ID, error message, and any additional information you can provide.

### How do I create/edit a text file?

The CARC supports the following UNIX editors: Vim (vi), GNU nano, and GNU Emacs. Nano is the editor we teach in our workshops due to its ease of use.

Additional information on UNIX editors can be found in the [UNIX Overview](https://itservices.usc.edu/unix/) section of the ITS website.

### Can I use the local storage on a compute node?

Yes, you can temporarily access the local disk space on a single node using the $TMPDIR environment variable in your job scripts. For a multi-node job you can use the /scratch file system as your working directory for all jobs.

## Cluster Resources: Data Files and Disk Space

### I accidentally deleted a file, is it possible to recover it?

Your project and home directories are backed up every day, as well as once a week. Daily backups are saved for up to a week while weekly backups are saved for up to a month.

In order to be a candidate for data archiving, files must be closed and idle for at least 20 minutes. If you know the name and path of the file you deleted, we can search your backup directory and attempt to retrieve it.

> Note: We’re more likely to recover your file from a daily backup than a weekly one, so contact us as soon as possible at hpc@usc.edu.

### Which filesystem should I store my project data in?

The CARC has several different filesystems, as summarized in the table below.

| Name      | Path                                            | Amount of space                         | Backed up?                | Purpose                                                                                |
|-----------|-------------------------------------------------|-----------------------------------------|---------------------------|----------------------------------------------------------------------------------------|
| Home      | ~, /home/rcf-40/<user>                          | 1GB                                     | Yes                       | Configuration files, personal scripts.                                                 |
| Project   | /home/rcf-proj/<proj_name>                      | Up to 5TB, shared amongst group members | Yes                       | Medium-term data storage while running CARC jobs.                                       |
| Staging   | /staging/<proj_name>                            | 10TB per account                        | No                        | Short-term, high perfomance data storage.                                              |
| Temporary | $TMPDIR (single node), $SCRATCHDIR (multi-node) | Varies, depends on resources requested  | No, deleted at end of job | Short-term (per job) high performance data storage. Not shared with other researchers. |

The home, project, and scratch file systems are shared, which means that your usage can impact and be impacted by the activities of other users.

### How do I share my project data with another user?

If the user is already a member of your project, the project PI can create a shared folder in the top level directory of the project and set its permissions to be writable by the group by using the commands below.

> Note: Only the project PI can create a directory.

```
$ mkdir shared
$ chmod g+wxs shared
```

If you would like to consistently share data with a user who is not in your group, it is best to either have the PI add them to your project group or apply for a second account together. If this is not possible and you still need to share data, contact the CARC team at hpc@usc.edu to explore other options.

### How do I check if I have enough disk space?

Before you submit a large job or install new software, you should check that you have sufficient disk space. Your home directory has limited space, so you should use your project directory for research and software installation.

To check your quota, use the `myquota` command. Compare the results of both the *Files Used* and *Files Soft* sections and the *Bytes Used* and *Bytes Soft* sections for each directory. If the value of *Used* is close to the value of *Soft* in either case, you will need to delete files or request an increase in disk space from the [Research Computing User Portal](/user-information/user-guides/high-performance-computing/research-computing-user-portal).

```
$ myquota
---------------------------------------------
Disk Quota for /home/rcf-40/ttrojan
            Used     Soft    Hard
     Files  1897     100000  101000
     Bytes  651.15M  1.00G   1.00G
---------------------------------------------
Disk Quota for /home/rcf-proj2/tt1
            Used    Soft     Hard
     Files  273680  1000000  1001000
     Bytes  55.98G  1.00T    1.02T
---------------------------------------------
```

### I’m running out of space. How do I check the size of my files and directories?

To check your disk usage, use the `du` command.

To list the largest directories from the current directory, use the following command:

`$ du -s * | sort -nr | head -n10`

 - `du -s *`: Summarizes disk usage of all files

 - `sort -nr`: Sorts numerically, in reverse order

 - `head -n10`: Shows the first ten lines from head

To list the top ten largest files from the current directory, use the following command:

`$ du . | sort -nr | head -n10`

 - `du .`: Shows disk usage of current directory

 - `sort -nr`: Sorts numerically, in reverse order

 - `head -n10`: Shows the first ten lines from head

To see all other options for `du`, use the following command:

`$ man du`

## Software

### What software is available on CARC systems?

A comprehensive list of all software installed in the CARC environment can be found in the `/usr/usc` directory. Most traditional UNIX utilities can be found in `/usr/bin`.

### How do I run MATLAB on CARC systems?

See our [MATLAB user guide](/user-information/user-guides/software/matlab) for instructions.

### Why am I getting a “command not found” error when I try to run a CARC application?

The shell gives this error when it is unable to find the requested application in your search path ($PATH). It usually means that you forgot to set up your environment before you tried to use the application.

On CARC systems, you must run (or “source”) a setup script to enable you to use CARC software. These scripts are named setup.sh (bash) and setup.tcsh (t shell) and are located in the directory of the version of the software you want to use.

For example, if you want to run SAS in the bash shell, try the following commands:

```
$ sas
bash: sas: command not found
$ source /usr/usc/sas/default/setup.sh
$ sas
```

### How do I check if a program or library is installed on CARC systems?

There are three ways to do this:

 - **Use the `which` or `whereis` command to locate binary (executable) programs in your path.**

 The default CARC path only searches a few directories, so the program that you are seeking may not be discoverable. For example, programs under `/usr/usc` are not initially discoverable, which is why you have to source setup files to use them.

 Example:
 ```
 $ which gcc
 /usr/bin/gcc

 $ whereis gcc
 gcc: /usr/bin/gcc /usr/lib/gcc /usr/libexec/gcc /usr/share/man/man1/gcc.1.gz

 $ source /usr/usc/gnu/gcc/5.3.0/setup.sh
 $ which gcc
 /usr/usc/gnu/gcc/5.3.0/bin/gcc
 ```

 - **Use the RPM package manager to locate programs or libraries that have been installed on a node.**

 The command `rpm` will not find programs and libraries installed under `/usr/usc`.

 >Note: Packages available on head nodes might not be available on compute nodes.

 Example:

  ```
  $ rpm -qa | fgrep atlas
  atlas-3.8.4-2.el6.x86_64
  atlas-devel-3.8.4-2.el6.x86_64

  $ rpm -q --info atlas
  Name        : atlas                        
  Version     : 3.8.4                             
  Release     : 2.el6                         
  Build Date: Tue 20 Mar 2012 07:03:13 PM PDT
  :
  URL         : http://math-atlas.sourceforge.net/
  Summary     : Automatically Tuned Linear Algebra Software
  Description :
  The ATLAS (Automatically Tuned Linear Algebra Software) project is an
  :

  $ rpm -q --filesbypkg atlas
  atlas                     /etc/ld.so.conf.d/atlas-x86_64.conf
  atlas                     /usr/lib64/atlas
  atlas                     /usr/lib64/atlas/libatlas.so.3
  :

  $ rpm -q --filesbypkg atlas | fgrep blas
  atlas                     /usr/lib64/atlas/libcblas.so.3
  atlas                     /usr/lib64/atlas/libcblas.so.3.0
  atlas                     /usr/lib64/atlas/libf77blas.so.3
  :
  ```

 - **Check the /usr/usc directory.**

### How do I check if a Python package is installed on CARC systems?

The command `pip freeze` will display all the Python packages installed in the current version that you are using.

Example:

```
$ source /usr/usc/python/3.6.0/setup.sh
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

If you are using Python 2, you should use the following commands:

```
$ source /usr/usc/python/2.7.8/setup.sh
$ pip freeze
```

### How do I compile a program on CARC systems?

The CARC has the GNU, Portland Group, and Intel compilers, and MPI compiler wrappers installed in the `/usr/usc` directory.

To use one of these compilers, you must source the appropriate setup.csh or setup.sh file each time you log in.

For example, the following command sets up the Portland Group compiler:

```
source /usr/usc/pgi/default/setup.csh
```

### Where are the compilers located on CARC systems?

GNU compilers come installed on the operating system and are, by default, in your path.

Examples:
```
$ which gfortran
/usr/bin/gfortran
$ gfortran --version
GNU Fortran (GCC) 4.8.5 20150623 (Red Hat 4.8.5-4)
```
```
$ which f95
/usr/bin/f95
$ f95 --version
GNU Fortran (GCC) 4.8.5 20150623 (Red Hat 4.8.5-4)
```
```
$ which gcc
/usr/bin/gcc
$ gcc --version
gcc (GCC) 4.8.5 20150623 (Red Hat 4.8.5-4)
```
```
$ which g++
/usr/bin/g++
$ g++ --version
g++ (GCC) 4.8.5 20150623 (Red Hat 4.8.5-4)
```

For compatibility, we also have additional versions of GNU compilers which can be found under `/usr/usc/gnu/gcc`.

Intel compilers are available under `/usr/usc/intel`. Choose the version of the compiler you want to use and source its setup file to access it.

```
$ source /usr/usc/intel/16.0/setup.sh
$ which ifort
/usr/usc/intel/16.0/compilers_and_libraries_2016.0.109/linux/bin/intel64/ifort
```

Java is available under `/usr/usc/java` and `/usr/usc/jdk`.
