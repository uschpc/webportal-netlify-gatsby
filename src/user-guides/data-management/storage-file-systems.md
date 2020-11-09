---
author: Ryan Sim
id: 2
date: 2020-06-06T00:00:00.000Z
title: Storage File Systems
path: storage-file-systems
parentPath: user-information/user-guides/data-management
cat: dataManagement
parentPage: User Guides
sideMenuParent: Data Management
backToTopBtnFlag: true
excerpt: A description of the file systems available to CARC users.
---

All CARC account holders are assigned three directories where they can store files and run programs: **home**, **project**, and **scratch**.

You can list the directories available to you and storage use for each by entering the command `myquota`.

### Home file system

The /home1 file system consists of personal directories for users, running ZFS/BeeGFS and hosted on dedicated storage machines. Your home directory has a quota of 100 GB of disk space and 2 million files. It is intended for storing personal files, configuration files, and software installations. It is not intended for I/O-intensive jobs.

When you log in, you will always start in your home directory, which is located at:

```sh
/home1/<username>
```

Use the `cd` command to quickly change to your home directory from another directory.

We keep two weeks of snapshots for files in your home directory. You can think of these snapshots as semi-backups. If you accidentally delete some data, then we will be able to recover it if it was captured by a snapshot in the past two weeks. If data was created and deleted within a one-day period, between snapshots, then we will not be able to recover it. You should always keep extra backups of your important data and other files because of this.

If you need to recover a deleted file, please contact the CARC team by [submitting a ticket](/user-information/ticket-submission) and we will determine if a snapshot of the file exists.

### Project file system

The project file system has a total capacity of 8.4 PB of usable space and consists of directories for different research project groups, running ZFS/BeeGFS and hosted on dedicated storage machines. The default quota for each project directory is 5 TB of disk space and 30 million files.

Each PI gets 10 TB of free space across projects. If more than 10 TB is needed, a PI can request additional storage space in 5 TB increments at a cost of $200/5 TB/year. For more information on storage quotas and pricing, see the [Accounts and Allocations page](/user-information/accounts).

Each project member has access to their group's project directory, where they can store data, scripts, and related files. The project directory should be used for most of your CARC work, and it's also where you can collaborate with your research project group. Users affiliated with multiple CARC projects will have access to multiple project directories so they can easily share their files with the appropriate groups.

Project directories are located at:

```sh
/project/<PI_name>_<id>
```

where `<PI_name>` is the username of the project owner, and `<id>` is a 2 or 3 digit project ID number.

You can list your project directories and storage use by entering the command `myquota`. You can also find the project ID and directory path on the project page in the [User Portal](/user-information/user-guides/research-computing-user-portal).

To create your own subdirectory within your project's directory, enter a command like:

```sh
mkdir /project/<PI_name>_<id>/<username>
```

where `<username>` is your USC NetID (your email address without "@usc.edu"). If needed, you can change the permissions of this folder using a `chmod` or `setfacl` command.

We keep two weeks of snapshots for files in your project directories. You can think of these snapshots as semi-backups. If you accidentally delete some data, then we will be able to recover it if it was captured by a snapshot in the past two weeks. If data was created and deleted within a one-day period, between snapshots, then we will not be able to recover it. You should always keep extra backups of your important data and other files because of this.

If you need to recover a deleted file, please contact the CARC team by [submitting a ticket](/user-information/ticket-submission) and we will determine if a snapshot of the file exists.

### Scratch file systems

The /scratch and /scratch2 file systems offer high-performance, parallel I/O, running ZFS/BeeGFS and hosted on dedicated storage machines. /scratch has a total capacity of 806 TB, and /scratch2 has a total capacity of 709 TB. A 10 TB directory in each of /scratch and /scratch2 is automatically created for each CARC user.

The scratch file systems are intended for temporary and intermediate data. Data stored in /scratch and /scratch2 are retained and not deleted between jobs, but they are *not* backed up. If needed, data stored here should be periodically backed up to decrease the risk of data loss.

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

### Limits on disk space and number of files

CARC clusters are shared resources. As a result, there are quotas on usage to help ensure fair access to all USC researchers. There are quotas on both the number of files stored and the amount of disk space used.

To check your quota, use the `myquota` command. Under `size`, compare the results of `used` and `hard`. If the value of `used` is close to the value of `hard`, you will need to delete files or request an increase in disk space from the [User Portal](/user-information/user-guides/research-computing-user-portal).

> Note: The `chunk files` section indicates the way your files and directories are divided up by the parallel file system, not the absolute number of files.

```sh
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

--------------------------
/project/ttrojan_120
      user/group     ||           size          ||    chunk files
     name     |  id  ||    used    |    hard    ||  used   |  hard
--------------|------||------------|------------||---------|---------
   ttrojan_120| 32853||   16.92 GiB|    5.00 TiB||     1134| 30000000
```

If you exceed the limits, you may receive a "disk quota exceeded" or similar error. CARC researchers can have up to 10 TB of storage per PI free, and any storage in excess of this 10 TB can be purchased. See the [Accounts and Allocations](/user-information/accounts) for information on how to purchase additional storage. Please note that we are unable to increase the quota for your home directory. 

The `myquota` command is also useful if you forget where your directories are located.

For more information on data management, see the [Data Management user guides](/user-information/user-guides/data-management).
