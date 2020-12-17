---
author: Ryan Sim
id: 1
date: 2020-12-07T00:00:00.000Z
title: Storage File Systems
path: storage-file-systems
parentPath: user-information/user-guides/data-management
cat: dataManagement
parentPage: User Guides
sideMenuParent: Data Management
backToTopBtnFlag: true
excerpt: A description of the file systems available to CARC users.
---

All CARC account holders are assigned four directories on four file systems where they can store files and run programs: **home1**, **project**, **scratch**, and **scratch2**. These file systems are global in that you can access them from any Discovery, Endeavour, or transfer node. You can list the directories available to you and storage usage for each by entering the command `myquota`.

The following table provides an overview of the file system use recommendations:

|File system|Recommended storage|Recommended activities|
|---|---|---|
|/home1|personal files, configuration files|creating and editing scripts/programs|
|/project|shared files, software installations, job scripts and files, I/O files|creating and editing scripts/programs, compiling, I/O, transferring data|
|/scratch & /scratch2|temporary and I/O files|I/O, testing|

### Home file system

The /home1 file system consists of personal directories for users, running ZFS/BeeGFS and hosted on dedicated storage machines. Your home directory has a quota of 100 GB of disk space and 2 million files. It is intended for storing personal and configuration files. It is not intended for I/O-intensive jobs.

When you log in, you will always start in your home directory, which is located at:

```sh
/home1/<username>
```

Use the `cd` command to quickly change to your home directory from another directory.

We keep two weeks of snapshots for files in your home directory. You can think of these snapshots as semi-backups. If you accidentally delete some data, then we will be able to recover it if it was captured by a snapshot in the past two weeks. If data was created and deleted within a one-day period, between snapshots, then we will not be able to recover it. You should always keep extra backups of your important data and other files because of this.

If you need to recover a deleted file, please contact the CARC team by [submitting a ticket](/user-information/ticket-submission) and we will determine if a snapshot of the file exists.

### Project file system

The /project file system has a total capacity of 8.4 PB of usable space and consists of directories for different research project groups. It offers high-performance, parallel I/O, running ZFS/BeeGFS and hosted on dedicated storage machines. The default quota for each project directory is 5 TB of disk space and 30 million files.

Each PI gets 10 TB of free space across projects. If more than 10 TB is needed, a PI can request additional storage space in 5 TB increments at a cost of $40/TB/year. For more information on storage quotas and pricing, see the [Accounts and Allocations page](/user-information/accounts).

Each project member has access to their group's project directory, where they can store data, scripts, and related files. The project directory should be used for most of your CARC work, and it's also where you can collaborate with your research project group. Users affiliated with multiple CARC projects will have access to multiple project directories so they can easily share their files with the appropriate groups.

Project directories are located at:

```sh
/project/<PI_username>_<id>
```

where `<PI_username>` is the username of the project owner and `<id>` is a 2 or 3 digit project ID number (e.g., ttrojan_123).

You can list your project directories and storage usage by entering the command `myquota`. You can also find the project ID and directory path on the project page in the [User Portal](/user-information/user-guides/research-computing-user-portal).

> Tip: You can create an alias command to quickly change to your project directory. For example, for the user ttrojan, adding the line `alias cdp="cd /project/ttrojan_123"` to their ~/.bashrc file will create the command `cdp` every time they log in, which can be used as a shortcut for quickly switching to their project directory.

To create your own subdirectory within your project's directory, enter a command like the following:

```sh
mkdir /project/<PI_username>_<id>/<username>
```

If needed, you can change the permissions of this subdirectory using a `chmod` or `setfacl` command.

We keep two weeks of snapshots for files in your project directories. You can think of these snapshots as semi-backups. If you accidentally delete some data, then we will be able to recover it if it was captured by a snapshot in the past two weeks. If data was created and deleted within a one-day period, between snapshots, then we will not be able to recover it. You should always keep extra backups of your important data and other files because of this.

If you need to recover a deleted file, please contact the CARC team by [submitting a ticket](/user-information/ticket-submission) and we will determine if a snapshot of the file exists.

### Scratch file systems

The /scratch and /scratch2 file systems offer high-performance, parallel I/O, running ZFS/BeeGFS and hosted on dedicated storage machines. /scratch has a total capacity of 806 TB, and /scratch2 has a total capacity of 709 TB. A 10 TB directory in /scratch and a 30 TB directory in /scratch2 are automatically created for each CARC user.

The scratch file systems are intended for temporary and intermediate files. Files stored in /scratch and /scratch2 are retained and not deleted between jobs, but they are *not* backed up. If needed, files stored here should be periodically backed up to decrease the risk of data loss.

Your /scratch directory is located at:

```sh
/scratch/<username>
```

Use the `cds` command to quickly change to your /scratch directory from another directory.

Your /scratch2 directory is located at:

```sh
/scratch2/<username>
```

Use the `cds2` command to quickly change to your /scratch2 directory from another directory.

### Using /tmp space

For temporary files, we generally recommend using your scratch or project directories instead of local /tmp directories on compute nodes. These /tmp directories are restricted to 1 GB of RAM disk space that is shared among jobs running on the same node. In your own scripts and programs, you can explicitly define temporary directories in your scratch or project directories. To redirect temporary files created in the background by programs, set the TMPDIR environment variable:

```sh
export TMPDIR=/scratch/<username>
```

You can add this line to your ~/.bash_profile to automatically set this variable when logging in.

### Limits on disk space and number of files

CARC clusters are shared resources. As a result, there are quotas on usage to help ensure fair access to all USC researchers. There are quotas on both the amount of disk space used and the number of files stored.

To check your quota, enter the `myquota` command. Under `size`, compare the results of `used` and `hard`. If the value of `used` is close to the value of `hard`, you will need to delete, compress, consolidate, or archive files. For project directories, PIs can also request an increase in disk space from the [User Portal](/user-information/user-guides/research-computing-user-portal). For more information on storage quotas and pricing, see the [Accounts and Allocations page](/user-information/accounts). Please note that the quota for your home directory is fixed and unchangeable.

> Note: The `chunk files` section indicates the way your files and directories are divided up by the parallel file system, not the absolute number of files. Nonetheless, if you exceed the limit, you will need to reduce the number of files or request more space.

```sh
ttrojan@discovery1:~$ myquota
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
       ttrojan|555555||  200.34 MiB|   30.00 TiB||     4002|unlimited

--------------------------
/project/ttrojan_120
      user/group     ||           size          ||    chunk files
     name     |  id  ||    used    |    hard    ||  used   |  hard
--------------|------||------------|------------||---------|---------
   ttrojan_120| 32853||   16.92 GiB|    5.00 TiB||     1134| 30000000
```

If you exceed the limits, you will receive a "disk quota exceeded" or similar error.
