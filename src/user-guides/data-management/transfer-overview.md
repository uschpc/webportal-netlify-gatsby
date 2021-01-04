---
author: Andrea Renney
id: 2
date: 2020-12-17T00:00:00.000Z
title: File Transfer Overview
path: transfer-overview
parentPath: user-information/user-guides/data-management
cat: dataManagement
parentPage: User Guides
sideMenuParent: Data Management
backToTopBtnFlag: true
excerpt: An overview of the different methods for file transfers.
---

Secure and efficient data transfer to and from CARC systems can be achieved with a variety of useful tools, the choice of which depends on whether the storage location is a personal computer or an external site (e.g., cloud storage). The choice also depends heavily on the requirement of data sensitivity as well as the familiarity of the user. There are three methods of data transfer that we recommend for use with CARC systems: **command-line tools**, **graphical tools**, and the **Globus service**.

> Note: Due to security risks, please be mindful of the type of information being transferred. Where possible, omit all information that may be considered confidential. For examples of confidential information that requires additional consideration, visit http://itservices.usc.edu/security/--sensitive-info.

### Dedicated data transfer nodes

CARC has two dedicated, high-speed, 100 Gbps data transfer nodes at hpc-transfer1.usc.edu and hpc-transfer2.usc.edu. These nodes are especially useful for larger transfers. If needed, you can log in to them using, for example, `ssh <username>@hpc-transfer1.usc.edu`. The Discovery and Endeavour login nodes have a 40 Gbps connection speed and are adequate for most transfers.

> Note: Your transfer speeds are determined by a number of factors, such as the network speed at your location, router and firewall settings, etc. If you experience slower than expected transfers, try to troubleshoot these issues first.

### Command-line tools

There are a number of command-line interface (CLI) tools to transfer data to and from CARC storage systems, such as `sftp`, `rsync`, and `rclone`. Each is targeted to specific use cases.

For more information, see the guide for [Transferring Files using the Command Line](/user-information/user-guides/data-management/transferring-files-command-line).

### Graphical tools

Applications such as Cyberduck, FileZilla, and WinSCP provide a graphical user interface (GUI) to transfer data between a personal computer and a storage solution that allows SFTP connections, including CARC storage systems. These applications offer drag-and-drop capability, but transfer speeds may be slower compared to using a command-line tool.

For more information, see the guide for [Transferring Files using a Graphical User Interface](/user-information/user-guides/data-management/transferring-files-gui).

### Globus service

Globus is a data management and transfer service that gives researchers unified access to their data across systems through a web-based GUI. It can be used for data transfers from a personal computer or another HPC center to CARC storage systems. Relative to other tools, it is useful for large transfers and will provide the best transfer speeds. A CLI for Globus can also be used if desired.

For more information, see the guide for [Transferring Files using Globus](/user-information/user-guides/data-management/transferring-files-globus).

### Which method should I use?

Below are four example scenarios that provide some insight into which data transfer method you might use for a given situation:

| **System 1** | **System 2** | **Example Scenarios** | **Method** |
|-|-|-|-|
| Personal computer | CARC file system for small-medium transfers | When transferring files from a personal computer to your CARC project folder that takes a moderate amount of time  | GUI, CLI |
| Personal computer | CARC file system for large or secure transfers | When transferring files from a personal computer to your CARC project directory that takes a large amount of time or needs to be encrypted | Globus |
| Amazon Web Services (AWS) | Any CARC file system | When transferring files from an AWS server to your CARC project directory | CLI |
| Other HPC center | Any CARC file system | When transferring files from another university or research institution to your CARC project directory | Globus |
