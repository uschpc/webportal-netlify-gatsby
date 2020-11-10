---
author: Andrea Renney
id: 2
date: 2020-06-04T00:00:00.00Z
title: Data Management and File Transfers
excerpt: Information on CARC file systems and transferring files between your personal computer and CARC systems.
thumbnail: /images/Graph.png
featuredImage: ../../static/images/Graph.png
path: data-management
route: User Guides
parentPath: user-information/user-guides
cat: userGuides
parentPage: User Guides
backToTopBtnFlag: true
---

Efficient and reliable data transfer can be achieved with a variety of useful tools, the choice of which depends on whether the storage location is a personal workstation or an external site (e.g., cloud providers such as Amazon Web Services). The choice of data transfer method also depends heavily on the requirement of data sensitivity, as well as the familiarity of the user.

> Note: Due to security risks, please be mindful of the type of information being transferred. Where possible, omit all information that may be considered confidential. For examples of confidential information that requires additional consideration, visit http://itservices.usc.edu/security/--sensitive-info.

There are three methods of data transfer that we recommend for use with CARC systems: **command-line tools**, **graphical tools**, and the **Globus web interface**. For command-line and graphical tool transfers, users have access to two dedicated, high-speed, 100 Gbps data transfer nodes at hpc-transfer1.usc.edu and hpc-transfer2.usc.edu.

### Command-line tools

Researchers experienced with the command line can use command-line interface (CLI) tools to transfer data between their computers and CARC storage systems. Tools such as `sftp`, `scp`, and `rsync` can be used to efficiently and securely transfer files. To transfer data between CARC storage systems and cloud storage, the best tool is `rclone`.

For more information on transferring data using the command line, see the guide for [Transferring Files using the Command Line](/user-information/user-guides/data-management/transferring-files-command-line).

### Graphical tools

Applications such as Cyberduck, FileZilla, and WinSCP provide a graphical user interface (GUI) to transfer data between a personal machine and a storage solution that allows `scp` or `sftp`, including CARC systems. These applications offer drag-and-drop capability and are suitable for those users who might be unfamiliar with the command line, but transfer speeds may be slower.

For more information on transferring data using a GUI, see the guide for [Transferring Files using a Graphical User Interface](/user-information/user-guides/data-management/transferring-files-gui).

### Globus

Globus is a data management service that allows researchers to have unified access to data through a web interface. It can be used to transfer data from a personal workstation or from another HPC center to CARC storage systems.

For more information on transferring data using Globus, see the guide for [Transferring Files using Globus](/user-information/user-guides/data-management/transferring-files-globus).

### Which method should I use?

Below are four example scenarios that provide some insight into which data transfer method you might use for a given situation:

| System 1 | System 2 | Example Scenarios | Method |
|-|-|-|-|
| Personal computer | CARC file system for small data | When transferring files from a personal computer to your CARC project folder that takes a moderate amount of time  | hpc-transfer1/2 nodes (CLI, GUI) |
| Personal computer | CARC file system for secure/large data | When transferring files from a personal computer to your CARC project folder that takes a large amount of time or needs to be encrypted | Globus |
| Amazon Web Services (AWS) | Any CARC file system | When transferring files from an AWS server to CARC systems | hpc-transfer1/2 nodes (CLI, GUI) |
| Other HPC center | Any CARC file system | When transferring files from another university to CARC systems | Globus |

The following user guides provide information on the different storage file systems available to you as well as instructions for transferring your data to the Discovery or Endeavour cluster.
