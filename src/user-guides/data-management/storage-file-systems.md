---
author: Ryan Sim
date: 2020-06-06T00:00:00.000Z
title: Storage File Systems
path: storage-file-systems
parentPath: user-information/user-guides/data-management
cat: dataManagement
parentPage: User Guides
sideMenuParent: Data Management
---

### Storage File Systems

**Home Directory**

/home1 is a high-performance parallel file system, you can run IO intensive jobs directly from /home1. Quota for each user on /home1 is 100GB and 300k files. We keep 14 days of snapshots of /home1 which can be think of as semi-backups, meaning if you accidentally deleted some data we are able to recover it within 14 days. You should always keep extra backups of your important data since snapshots or semi-backups are not real backups.

Your home directory is located at:

```sh
/home1/<user_name>
```

### Project File System

*... Update with new information ...*

The project directory can be located by typing:

```sh
ssh <user_name>@discovery.usc.edu
```

where <user_name> is your USC NetID (your email address without "@usc.edu").

### Scratch

/scratch is a high-performing, parallel file system that is hosted on dedicated storage machines. This is a shared resource for use by all HPC researchers. Data stored in /scratch is retained and not deleted between jobs, but it is not backed up. Data stored in /scratch should be periodically copied to a permanent project file system to decrease the risk of data loss.

A directory is automatically created for each HPC user under /scratch so that data can be stored there temporarily. Your scratch directory is accessible only to you, and each user account is limited to a 10TB quota.

Your scratch directory is located at:

```sh
/scratch/<user_name>
```

800 This is a new parallel file system running ZFS/BeeGFS. It was originally planned to be a temporary scratch file system with a data purging policy, but it is now serving as a semi-permanent data storage space until the new /project file system is available.

700 This is another ZFS/BeeGFS parallel file system available as a scratch space. At the moment, the system is available for long-term data storage without a data purging policy. The purging will resume once the new project file system is available and data migration is completed.
