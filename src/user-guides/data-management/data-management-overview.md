---
author: Ryan Sim
date: 2020-06-06T00:00:00.000Z
title: Data Management Overview
path: data-management-overview
parentPath: user-information/user-guides/data-management
cat: dataManagment
parentPage: User Guides
sideMenuParent: Data Management
backToTopBtnFlag: true
---

Efficient and reliable data transfer can be achieved with a variety of useful tools, depending on whether the storage location is a personal workstation or an external site. The choice of data transfer method depends heavily on the requirement of data sensitivity as well as the familiarity of the user.

> Note: Due to security risks, please be mindful of the type of information being transferred. Where possible, omit all information that may be considered confidential. For examples of confidential information that requires additional consideration, visit http://itservices.usc.edu/security/sensitive-info.

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
