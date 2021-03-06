---
title: System Information
id: 3
thumbnail: /images/sr-icon-4.png
path: system-information
parentPath: user-information
cat: navigation
parentEle: User Information
backToTopBtnFlag: true
excerpt: Information on system specifications. 
---

In 2020, the Center for Advanced Research Computing performed a major upgrade to its systems. Its new high-performance computing cluster, Discovery, includes additional compute nodes and a rebuilt software stack, as well as new system configurations to better serve CARC users. A new, high-performing project file system was also deployed, offering more storage space and better performance. A new condo cluster, Endeavour, was launched in December 2020 as part of the new [Condo Cluster Program](/user-information/ccp).

The following graphic depicts the CARC cyberinfrastructure and how different systems interact with one another:

![Cyberinfrastructure overview](/images/CARC-cyberinfrastructure.png)

### Computing resources

The CARC's Discovery computing cluster consists of 2 shared head nodes and a total of 10,000 CPU cores in 600 compute nodes. The typical compute node has dual 8 to 16 core processors and resides on a 56 gigabit FDR InfiniBand backbone.

For detailed information on Discovery's computing resources, see the [Discovery Resource Overview](/user-information/user-guides/high-performance-computing/discovery-resources).

For detailed information on the [Endeavour condo cluster](/user-information/user-guides/high-performance-computing/getting-started-endeavour)'s computing resources (as part of the [Condo Cluster Program](/user-information/ccp)), see the [Endeavour Resource Overview](/user-information/user-guides/high-performance-computing/endeavour-resources).

### File systems

Each user has three file systems for their CARC account: the home directory, the project directory, and the scratch directory.

For more information on the different file systems, see the [Storage File Systems user guide](/user-information/user-guides/data-management/storage-file-systems).

#### Home directory

Every user on Discovery has a 100 GB allocation of home directory space. The home directory should be used for configuration files and personal scripts, but not for the bulk of your research work.

#### Project file system

The project file system has a capacity of 8.4 PB of usable space and consists of directories for different research project groups. The default quota for each project directory is 5 TB, which can be increased to 10 TB at no cost. If more than 10 TB is needed, a project's Principal Investigator can request additional storage space in 5 TB increments at a cost of $40/TB/year. For more information on storage quotas and pricing, see the [Accounts and Allocations page](/user-information/accounts).

The project file system should be used for most of your CARC work, and it's also where you can collaborate with your research project group. Each project group member will have their own subdirectory within their group's project directory, where they can store data, scripts, and related files.

#### Scratch file systems

The scratch directories - /scratch and /scratch2 - are high-performance parallel file systems, so you can temporarily store files in and run IO-intensive jobs from them.

/scratch has a capacity of 806 TB, and /scratch2 has a capacity of 709 TB. Each user receives a 10 TB storage allocation for /scratch and a 30 TB allocation for /scratch2.

### Operating system

The CARC uses a customized distribution of the Community Enterprise Operating System (CentOS), built using the publicly available RPM Package Manager (RPM).  CentOS is a high-quality Linux distribution that gives the CARC complete control of its open-source software packages and is fully customized to suit advanced research computing needs, without the need for license fees.

The CARC’s distribution of CentOS was modified for minor bug fixes and desired localized behavior. Many desktop and clustering-related packages were also added to the CARC's CentOS installation.

A number of white papers, tutorials, FAQs, and other documentation on CentOS can be found on the [official CentOS website](https://www.centos.org/).
