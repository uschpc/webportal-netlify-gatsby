---
title: System Information
id: 3
thumbnail: /images/sr-icon-4.png
path: system-information
parentPath: user-information
cat: navigation
parentEle: User Information
backToTopBtnFlag: true
---

In 2020, the Center for Advanced Research Computing performed a major upgrade to its systems. Its new high-performance computing cluster, Discovery, includes additional compute nodes and a rebuilt software stack, as well as new system configurations to better serve CARC users. A new, high-performing project file system was also deployed, offering more storage space and better performance.

### Computing Resources

The CARC computing resource consists of 2 shared head nodes and a total of 30,000 CPU cores in 1,600 compute nodes. The typical compute node has dual 8 to 16 core processors and resides on a 56 gigabit FDR InfiniBand backbone.

### File Systems

Each user has three file systems for their CARC account: the home directory, the project directory, and the scratch directory.

For more information on the different file systems, see the [Storage File Systems user guide](/user-information/user-guides/data-management/storage-file-systems).

#### Home directory

Every user on Discovery has a 100 GB allocation of home directory space. The home directory should be used for configuration files and personal scripts, but not for the bulk of your research work.

#### Project file system

The new parallel project file system was deployed during the summer of 2020. This file system has a capacity of 10 PB. Each CARC user receives their own subdirectory within the directories of each project they belong to, and the quota for each project directory ranges between 1 and 5 TB.

The project file system should be used for most of your CARC work, and it's also where you can collaborate with your research project group. Each project group member will have their own subdirectory within their group's project directory, where they can store data, scripts, and related files.

#### Scratch file systems

The scratch directories - /scratch and /scratch2 - are high-performance parallel file systems, so you can temporarily store files in and run IO-intensive jobs from them.

/scratch has a capacity of 806 TB, and /scratch2 has a capacity of 709 TB. Each user receives a 10 TB storage allocation for each of /scratch and /scratch2.

### Operating System

The CARC uses a customized distribution of the Community Enterprise Operating System (CentOS), built using the publicly available RPM Package Manager (RPM).  CentOS is a high-quality Linux distribution that gives the CARC complete control of its open-source software packages and is fully customized to suit advanced research computing needs, without the need for license fees.

The CARC’s distribution of CentOS was modified for minor bug fixes and desired localized behavior. Many desktop and clustering-related packages were also added to the CARC's CentOS installation.

A number of white papers, tutorials, FAQs, and other documentation on CentOS can be found on the [official CentOS website](https://www.centos.org/).
