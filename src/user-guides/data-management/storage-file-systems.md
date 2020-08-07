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
---

All CARC account holders are assigned three directories where they can store files and run programs: **home**, **project**, and **scratch**.

### Home directory

/home1 is a network file system for storing configuration files and personal scripts. Each CARC user has a 100 GB home directory quota.

The home directory provides 3-week snapshots with daily backups, so if you accidentally delete some of your important data, you can recover the data if the deletion was within the last three weeks. You should always keep extra backups of your important data since snapshots or semi-backups are *not* real backups.

Your home directory is located at:

```sh
/home1/<user_name>
```

### Project file system

Each project member has their own subdirectory within their group's project directory, where they can store data, scripts, and related files. Users affiliated with multiple CARC projects will have multiple project directories so they can easily share their files with the appropriate groups.

The new parallel project file system was deployed during the summer of 2020. This file system has a capacity of ~10PB. Each CARC user receives their own subdirectory within the directories of each project they belong to, and the quota for each project directory ranges between 1 and 5 TB. If more than 5 TB is needed, a project's Principal Investigator can request additional storage space at a cost of $40/TB/year. For more information on storage quotas and pricing, see the [Accounts and Allocations page](/user-information/accounts).

The project file system should be used for most of your CARC work, and it's also where you can collaborate with your research project group. Each project group member will have their own subdirectory within their group's project directory, where they can store data, scripts, and related files.

The project directory can be located by typing:

```sh
/home/project/<user_name>
```

where `<user_name>` is your USC NetID (your email address without "@usc.edu").

### Scratch file systems

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