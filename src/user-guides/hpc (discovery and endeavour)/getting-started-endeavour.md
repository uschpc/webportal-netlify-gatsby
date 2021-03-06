---
author: Andrea Renney
id: 2
date: 2020-10-21T00:00:00.000Z
title: Getting Started with Endeavour (Condo Cluster Program)
excerpt: A getting started guide for Endeavour, the CARC's condo cluster.
path: getting-started-endeavour
parentPath: user-information/user-guides/high-performance-computing
cat: discoveryGuides
sideMenuParent: High-Performance Computing
backToTopBtnFlag: true
parentPage: User Guides
---

The information on this page is designed to provide an introductory overview for new Condo Cluster Program (CCP) users. Links to more detailed information and complete user guides can be found at the end of each section of this page.

For a general overview of the Center for Advanced Research Computing, see our main [Getting Started page](/user-information/getting-started).

### What is the Condo Cluster Program?

The CARC's Condo Cluster Program (CCP) is a service available to USC researchers that require dedicated computing resources for their work. The CCP gives researchers the convenience of having their own dedicated compute nodes, without the responsibility of purchasing and maintaining the nodes themselves. The CCP operates on both an annual subscription-based model, with research groups subscribing to their selected number of compute and storage resources on a yearly basis, as well as a traditional purchase model, with research groups purchasing compute or storage resources from the CARC for a fixed term (e.g., five years). All hardware is maintained by the CARC throughout the course of the subscription or lease term.

> For more information on CCP policies, see our main [Condo Cluster Program pages](/user-information/ccp).

### What is the difference between the subscription model and the traditional purchase model?

Our subscription-based model allows researchers to subscribe to computing and storage resources on a yearly basis. The subscription model is ideal for researchers who anticipate changes to their resource requirements or for researchers who only require CCP resources for a shorter period of time (minimum of one year). The CARC purchases and maintains the resources and all related hardware throughout the course of the subscription term.

Our traditional purchase model is the classic pricing model that we've used for condo purchases in previous years. Researchers choose the resources they need and the CARC purchases and maintains them for the lease term (e.g., five years). The leasing researchers effectively own their resources, and at the end of their lease period, the resources are retired. The CARC maintains the resources and all related hardware throughout the course of the lease term.

For pricing and policies, see the [Program Information page](/user-information/ccp/program-information).

### What is the difference between the CCP's Endeavour cluster and the Discovery cluster?

The Discovery cluster is a "public" cluster in the sense that it is open to all CARC users to run their jobs and store their data. The Endeavour cluster is comprised of the condo resources that CCP users lease or subscribe to, but each research group's own resources are for their dedicated use only. 

Endeavour's application stack and module system are identical to those of the Discovery cluster; users won’t see any difference between Endeavour and Discovery when using applications. 

One key difference between Endeavour and Discovery is configuration of the Slurm job scheduler. The Slurm configurations on Discovery are geared for use on a shared cluster system, but on Endeavour, each research group can have customized Slurm configurations on their condo nodes. For more information about custom Slurm configurations on Endeavour, please contact us at <carc-condo@usc.edu>. 

### Introduction to CCP systems

#### Endeavour cluster

Endeavour is a high-performance computing cluster, which is a collection of computers and disk arrays that are connected via fast networks. High-performance computing allows USC researchers to perform computing tasks, like data analyses and simulations, on a larger scale than is possible with a laptop or lab computer.

The difference between the Endeavour cluster and the Discovery cluster is that the Endeavour cluster is comprised of the condo resources that CCP users lease or subscribe to, but each research group's own resources are for their dedicated use only. The Discovery cluster is the CARC's public cluster; any CARC user, including CCP users, can use Discovery.

On Endeavour, each research group can have customized Slurm configurations on their condo nodes. For more information about custom Slurm configurations on Endeavour, please contact us at <carc-condo@usc.edu>. 

#### Storage file systems

All CARC account holders are assigned three directories where they can store files and run programs. Each of these three directories is located in the **home**, **project**, and **scratch** file systems.

Each file system serves a different purpose:

- **/home1** is a network file system for storing configuration files and personal scripts. Each CARC user has a 100 GB home directory quota.

- **/project**: Assignment to a project gives you access to a subdirectory of the /project parallel file system. Managed by a Principal Investigator, this is where you have access to a maximum of 10 TB of storage space (shared among the project's members), and where you can collaborate and share files with your research group. Use this high-performance file system for most of your research computing work at CARC. If more than 10 TB of storage is needed, it can be purchased in 5 TB increments for $40/TB/year. See the [Accounts and Allocations page](/user-information/accounts) for more information.

- **/scratch** and **/scratch2** are two parallel file systems that are shared among all CARC users. These file systems can be used for storing data temporarily and running I/O intensive jobs. Each user receives a 10 TB storage allocation for /scratch and a 30 TB allocation for /scratch2.

For detailed information on the different storage systems available, see our [Storage File Systems user guide](/user-information/user-guides/data-management/storage-file-systems) and our [System Information page](/user-information/system-information).

### Accessing your CCP resources

All CARC systems, including the Endeavour condo cluster and the Discovery cluster, are accessed using your USC NetID and password, so there is no additional requirement for CARC-specific account creation. To log in to your CCP nodes, you'll need to be included in a research project that uses CCP nodes. Only the project's Principal Investigator (PI) can add you to their project.

>Note: Your USC NetID is the first part of your USC email address (e.g., ttrojan@usc.edu's NetID is ttrojan).

Duo Two-Factor Authentication is also required. If you have not already signed up for Duo on your USC NetID account, please visit [this page](https://itservices.usc.edu/duo/enroll) to enroll.

> For more information on accounts, see our [Accounts and Allocations page](/user-information/accounts).

### Logging in to the Endeavour login node

Endeavour uses a different login node than the Discovery cluster. You must use **endeavour.usc.edu** to access your condo nodes on the Endeavour cluster. Otherwise, Endeavour is very similar to the Discovery cluster. You will have access to the same file systems (home1, project, and scratch 1&2) and the same software stack. 

To log in to the Endeavour login node, you will need to use a secure shell client. This is a small application that enables you to connect to a remote computer via SSH (**S**ecure **SH**ell), a cryptographic network protocol for securely operating network services. You will need your USC NetID to SSH in to the login node.

You can find instructions for setting up SSH keys for faster login [here](https://hpc-discourse.usc.edu/t/how-to-set-up-ssh-keys-for-faster-login-login-w-o-password/128) on our User Forum.

> Note: The CARC does not manage your USC NetID password. If you are having difficulty using your USC NetID and/or password, please contact [USC IT Services](https://itservices.usc.edu/self-help/).

#### On macOS and Linux

macOS users can connect to Endeavour using the Terminal application that is natively installed. Linux users can similarly use the natively installed terminal application that comes with their distribution of Linux (e.g., Terminal on Ubuntu).

To connect, open a new terminal window and enter:

```sh
ssh <username>@endeavour.usc.edu
```

Be sure to substitute your USC NetID as the username. After entering the command, you will then be prompted to enter your USC NetID password. This is the same password for your USC email account.

> Note: There will be no visual feedback as you enter your password. This is a security feature designed to obscure your password and is expected.

After entering your password, you will then see a Duo two-factor authentication prompt.

#### On Windows

Windows users may need to download and install a third-party SSH client to connect to Discovery. The most popular client is PuTTY, which is available through the [developer’s website](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html). On Windows 10, there is also a natively available Windows Terminal that has a built-in SSH client.

To connect using Windows Terminal, open a new terminal window and enter:

```sh
ssh <username>@endeavour.usc.edu
```

Be sure to substitute your USC NetID as the username. You will then be prompted to enter your USC NetID password. This is the same password for your USC email account.

To connect using Putty, start in the Configuration window under the Session category and enter `endeavour.usc.edu` as the hostname with port `22` and select Connection type: SSH. Then select Open to open a connection window, enter your USC NetID as the username, and finally enter your USC NetID password.

> Note: There will be no visual feedback as you enter your password. This is a security feature designed to obscure your password and is expected.

After entering your password, you will then see a Duo two-factor authentication prompt.

### How to use the systems

When using CCP resources, you will notice several differences from your desktop or laptop environment:

- The interface is **command-line driven** (no graphical user interface)
- The systems use the **CentOS Linux** operating system (not macOS or Windows)
- You submit your programs to a **remote batch processing system**, or job scheduler, to run them

The CCP's Endeavour cluster is very similar to the main Discovery cluster. As such, the majority of our user guides are applicable to both Discovery and Endeavour. 

The following are user guides that can be applied to Endeavour:

[High-Performance Computing](/user-information/user-guides/high-performance-computing)  
How to log in to Discovery and Endeavour and run jobs.

[Data Management and File Transfers](/user-information/user-guides/data-management)  
An overview of the different storage directories available to you, and instructions on transferring files between your personal computer and CARC systems.

[Software and Programming](/user-information/user-guides/software-and-programming)  
Information on the software available on Endeavour, as well as instructions for installing your own software.

The [Research Computing User Portal user guides](/user-information/user-guides/research-computing-user-portal) provide instructions for using the CARC user portal to create and manage research projects, add or remove project users, and submit your annual project renewal. 

>Our main user guides page can be accessed [here](/user-information/user-guides).

### More information

* [Main CCP landing page](/user-information/ccp)
* [CCP Program Information page](/user-information/ccp/program-information/ccp)
* [Subscription model information](/user-information/ccp/program-information/ccp-subscription)
* [Purchase model information](/user-information/ccp/program-information/ccp-purchase)
* [Request New Condo Subscription user guide](/user-information/user-guides/research-computing-user-portal/request-new-subscription)
* [Request New Condo Purchase user guide](/user-information/user-guides/research-computing-user-portal/request-new-purchase)