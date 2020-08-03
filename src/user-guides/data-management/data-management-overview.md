---
author: Ryan Sim
id: 1
date: 2020-06-06T00:00:00.000Z
title: Data Management Overview
path: data-management-overview
parentPath: user-information/user-guides/data-management
cat: dataManagement
parentPage: User Guides
sideMenuParent: Data Management
backToTopBtnFlag: true
---

Efficient and reliable data transfer can be achieved with a variety of useful tools, the choice of which depends on whether the storage location is a personal workstation or an external site (e.g., cloud providers such as Amazon Web Services). The choice of data transfer method also depends heavily on the requirement of data sensitivity, as well as the familiarity of the user.

> Note: Due to security risks, please be mindful of the type of information being transferred. Where possible, omit all information that may be considered confidential. For examples of confidential information that requires additional consideration, visit http://itservices.usc.edu/security/--sensitive-info.

There are three methods of data transfer that we recommend for use with CARC systems: **command line tools**, **graphical user interfaces (GUIs)**, and the **Globus web interface**.

### Command line tools

Researchers experienced with the command line can use command line tools to transfer data between their computers and CARC storage systems. Tools such as `sftp`, `rsync`, and `scp` can be used to efficiently transfer files.

For more information on transferring data using the command line, see the [Transferring Files using the Command Line user guide](/user-information/user-guides/data-management/transferring-files-command-line).

### Graphical SFTP Clients

Programs such as Filezilla, Cyberduck, and WinSCP provide a graphical user interface (GUI) to transfer data between a personal machine and a storage solution that allows `scp` or `sftp`, including CARC systems. These programs offer drag-and-drop capability and are suitable for those users who might be unfamiliar with the command line.

For more information on transferring data using a GUI, see the [Transferring Files using a Graphical User Interface user guide](/user-information/user-guides/data-management/transferring-files-gui).

### Globus

Globus is a data management service that allows researchers to have unified access to data through a web interface. It can be used to transfer data from a personal workstation to CARC storage systems. Globus also supports data transfers from other universities or supercomputing facilities.

For more information on transferring data using Globus, see the [Transferring Files using Globus user guide](/user-information/user-guides/data-management/transferring-files-globus).

### Which method should I use?

Below are four example scenarios that should provide some insight into which data transfer method you might use for a given situation.

| System 1 | System 2 | Example Scenarios | Method |
|-|-|-|-|
| Personal computer | CARC file system for small data | When transferring files from a personal computer to your CARC project folder that takes a moderate amount of time  | hpc-transfer node (command line, GUI) |
| Personal computer | CARC file system for secure/large data | When transferring files from a personal computer that takes a large amount of time or needs to be encrypted | Globus |
| Amazon Web Services (AWS) | Any CARC file system | When transferring files from an AWS server to CARC systems | hpc-transfer node (command line, GUI) |
| Personal computer | CARC condo cluster | When transferring files from a personal file system to the condo cluster | hpc-transfer node (command line, GUI) |
