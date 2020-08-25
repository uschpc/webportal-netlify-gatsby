---
author: Ryan Sim
id: 3
date: 2020-06-06T00:00:00.000Z
title: Transferring Files using the Command Line
path: transferring-files-command-line
parentPath: user-information/user-guides/data-management
cat: dataManagement
parentPage: User Guides
sideMenuParent: Data Management
backToTopBtnFlag: true
excerpt: A user guide about transferring your files using command line utilities. 
---

Command line-based data transfer utilities (clients) are available natively on macOS and Linux systems and on Windows through an application like [PuTTY](https://www.putty.org/). The common utilities `sftp`, `scp`, and `rsync` are described on this page.

> Note: Due to security risks, please be mindful of the type of information being transferred. Where possible, omit all information that may be considered confidential. For examples of confidential information that requires additional consideration, visit [http://itservices.usc.edu/security/sensitive-info](http://itservices.usc.edu/security/sensitive-info).

The following examples show the login processes for the USC NetID `ttrojan`. You should log in with your own USC NetID, which is the first part of your USC email address (e.g., ttrojan@usc.edu's NetID is ttrojan). You can use either the main Discovery login nodes or, for better performance, the hpc-transfer1 or hpc-transfer2 nodes, which are dedicated, high-speed data transfer nodes.

### SFTP: Secure File Transfer Protocol

SFTP is a command line-based transfer tool that is the equivalent of a GUI-based SFTP client. Like SSH, SFTP requires an initial login and authentication, and your session will remain open until you exit or are disconnected. You will remain connected to CARC systems with the ability to upload (`put`) and download (`get`) files without further login or authentication.

From your computer, log in to hpc-transfer1 and authenticate via Duo:

```
sftp ttrojan@hpc-transfer1.usc.edu
```

If it is your first time logging in, you will be asked "Are you sure you want to continue connecting (yes/no)?". Type "yes". You will see the following once you are connected:

```
Connected to hpc-transfer1.usc.edu.
sftp>
```

The `help` command will display the available SFTP commands.

```
sftp> help
Available commands:
<lots of options>
```

Use commands like `pwd`, `ls`, and `cd`, and their local equivalents `lpwd`, `lls`, and `lcd`, to navigate to the source and destination directories for file transfer.

#### Navigate locally

```
sftp> lpwd
Local working directory: /home/tommy
sftp> lcd myimages
sftp> lls
myplot1.jpg myplot2.jpg
```

#### Navigate remotely

```
sftp> pwd
Remote working directory: /home1/ttrojan
sftp> cd /scratch/tt/ttrojan/images
```

#### Upload file from local to remote computer

```
sftp> put myplot1.jpg myplot.jpg
Uploading myplot1.jpg to /scratch/tt/ttrojan/myplot.jpg
myplot1.jpg                                 100%   10KB   2.4MB/s   00:00    
```

### Download file from remote to local computer

```
sftp> get myplot3.jpg myplot3.jpg
Fetching /scratch/tt/trojan/myplot3.jpg to myplot3.jpg
/scratch/tt/trojan/myplot3.jpg              100%   10KB   2.4MB/s   00:00    
```

### SCP: Secure Copy Protocol

SCP is another convenient way to transfer a single file or directory. The following description assumes that `scp` is being used to transfer files between your local computer and CARC systems.

> Note: Unlike SFTP, login and authentication are requested for each use of the `scp` command. If you plan to do multiple transfers, it is recommended that you use SFTP — either the command-line version or a GUI-based client, which will keep your session open so that multiple authentications are not required.

You can copy a file(s) from a local directory (`/source/path`) to a remote directory (`/destination/path`), and vice-versa:

```
scp </source/path> <hostname:/destination/path>
scp <hostname:/source/path> </destination/path>
```

For example:

```
scp myplot1.jpg ttrojan@hpc-transfer1.usc.edu:/scratch/ttrojan
scp myplot1.jpg myplot2.jpg ttrojan@hpc-transfer1.usc.edu:/scratch/ttrojan
scp *.jpg ttrojan@hpc-transfer1.usc.edu:/scratch/ttrojan
```

Similar to the copy (`cp`) command, you can copy whole directories using the `-r` option. The source directory will be copied (created) too:

```
scp -r ./myplots ttrojan@hpc-transfer1.usc.edu:/scratch/ttrojan
scp -r ttrojan@hpc-transfer1.usc.edu:/scratch/ttrojan/myplots .
```

### Rsync: Remote Synchronization

Rsync is a fast and versatile transfer utility for synchronizing files and directories. It is a good choice for manually transferring large amounts of data on or to CARC systems because only new or updated files are copied.

The command synchronizes the directory on the local computer, `/source/path`, with the directory on the remote computer, `/destination/path`. If `/destination/path` does not exist, it will be created. Of course, standard Linux file and directory permissions apply.

> Note: Unlike SFTP, login and authentication are requested for each use of the `rsync` command.

A generic `rsync` command is:

```
rsync </source/path> <hostname:/destination/path>
```

The following example copies a file from a local computer to a CARC directory:

```
rsync -av --progress myplot1.jpg ttrojan@hpc-transfer1.usc.edu:/scratch/ttrojan/
```

The `-a` option specifies that it will be an archive (and thus preserves permissions and modification times, and recursively transfers directories). The `-v` option turns on verbose mode. The `--progress` option tracks the progress of the transfer.

If you experience issues with disconnections from the server during an `rsync` transfer, try adding the option `--timeout=60` to keep the connection alive for 60 seconds in case the transfer idles. Sometimes network latency can cause disconnects.

Log in and authenticate, and the file(s) should begin transferring:

```
building file list ...
1 file to consider
myplot1.jpg
       10079 100%    0.00kB/s    0:00:00 (xfer#1, to-check=0/1)
sent 10208 bytes  received 42 bytes  1205.88 bytes/sec
total size is 10079  speedup is 0.98
```

Rsync provides many other options; see the manual page (`man rsync`) or online documentation [here](https://download.samba.org/pub/rsync/rsync.1) for details.
