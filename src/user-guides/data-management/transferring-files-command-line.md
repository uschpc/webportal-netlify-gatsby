---
author: Ryan Sim
id: 4
date: 2020-12-15T00:00:00.000Z
title: Transferring Files using the Command Line
path: transferring-files-command-line
parentPath: user-information/user-guides/data-management
cat: dataManagement
parentPage: User Guides
sideMenuParent: Data Management
backToTopBtnFlag: true
excerpt: Instructions for transferring files to and from CARC systems using command-line tools.
---

There are many command-line tools for transferring data to and from CARC systems, each with intended uses and specific feature sets. The following table lists the available command-line tools based on the transfer scenario:

|**Scenario**|**Options**|
|---|---|
|Local computer &rlarr; CARC|sftp, scp, rsync|
|CARC &rlarr; Internet|*File servers*: sftp, lftp <br> *Downloads*: wget, curl, aria2c <br> *Cloud storage*: rclone <br> *Code*: git|

Below, you will find descriptions, comparisons, and examples of how to use each tool.

If you have questions about transferring data using these tools, please [submit a help ticket](/user-information/ticket-submission) and we will assist you.

> Note: Due to security risks, please be mindful of the type of information being transferred. Where possible, omit all information that may be considered confidential. For examples of confidential information that requires additional consideration, visit [http://itservices.usc.edu/security/sensitive-info](http://itservices.usc.edu/security/sensitive-info).

### General recommendations

- Only transfer data that is necessary
- Compress large files using `xz` to reduce size of transfer (depending on network speed)
- Archive files using `tar` when transferring large numbers of files
- For small-to-medium transfers to/from your local computer, use `sftp` or `rsync`
- For large transfers to/from your local computer or other endpoint, use [Globus](/user-information/user-guides/data-management/transferring-files-globus)
- For backing up and syncing directories, use `rsync`
- For transfers to/from an FTP server, use `lftp`
- For faster internet downloads, use `aria2c`
- For transfers to/from cloud storage, use [`rclone`](/user-information/user-guides/data-management/transferring-files-rclone)

### Archiving and compressing before transferring

Creating and compressing a single archive file can be useful before transferring files to or from CARC systems, especially for directories with a large number of files (e.g., > 1000, regardless of the total size of those files). Each file has associated metadata, and the transfer can be slowed by attending to that metadata. Compressing files will reduce the amount of data that needs to be transferred. However, it takes time to compress and uncompress files, so the total transfer time may not necessarily decrease depending on factors like network speeds. With fast network speeds, relative to total transfer size, it is typically not worth compressing files. For more information, see the section on archiving and compressing files in the guide for [Managing Files using the Command Line](/user-information/user-guides/data-management/managing-files).

### Local computer &rlarr; CARC

To copy files between your local computer and CARC systems, the available options are `sftp`, `scp`, and `rsync`. These are available on macOS and Linux through the native terminal applications and on Windows through applications like Windows Terminal or [PuTTY](https://www.putty.org/).

`sftp` provides an interactive mode that requires authenticating only once and maintains an open connection to transfer files as needed until the session is exited. In contrast, `scp` and `rsync` can only be used in a non-interactive mode that requires authentication for each transfer. In addition, `rsync` has more advanced features than `scp`.

Instructions and commands for these tools are detailed in the collapsible sections below:

<details>
  <summary>sftp</summary>
&nbsp;

#### Using sftp

`sftp` is a client program for transferring files using the Secure File Transfer Protocol (SFTP). It can be used in interactive or non-interactive modes to copy files between two computers over a network, one local and one remote. In interactive mode, it requires an initial login and authentication, but your session will remain open until you exit or are otherwise disconnected. You will remain connected to CARC systems with the ability to upload (`put`) and download (`get`) files without further authentication. This is a benefit of using `sftp` compared to the other command-line transfer tools.

To use `sftp` in interactive mode, from your local computer, first log in to a CARC node like hpc-transfer1 and authenticate via Duo:

```sh
sftp ttrojan@hpc-transfer1.usc.edu
```

If it is your first time logging in, you will be asked "Are you sure you want to continue connecting (yes/no)?". Enter "yes". You will see the following once you are connected:

```sh
Connected to hpc-transfer1.usc.edu.
sftp>
```

Enter the `help` command to view all the available commands. Use commands like `pwd`, `ls`, and `cd`, and their local equivalents `lpwd`, `lls`, and `lcd`, to navigate to the source and destination directories for file transfers.

#### Navigating locally

```sh
sftp> lpwd
Local working directory: /home/tommy
sftp> lcd myimages
sftp> lls
myplot1.jpg myplot2.jpg
```

#### Navigating remotely

```sh
sftp> pwd
Remote working directory: /home1/ttrojan
sftp> cd /scratch/ttrojan/images
```

#### Uploading file/directory from local computer to CARC systems

To upload a file, use the `put` command:

```sh
sftp> put myplot1.jpg myplot.jpg
Uploading myplot1.jpg to /scratch/ttrojan/myplot.jpg
myplot1.jpg                                 100%   10KB   2.4MB/s   00:01    
```

To upload a directory, recursively, add the `-R` option and specify the path to the local directory (e.g., `put -R dir`).

#### Downloading file/directory from CARC systems to local computer

To download a file, use the `get` command:

```sh
sftp> get myplot3.jpg myplot3.jpg
Fetching /scratch/ttrojan/myplot3.jpg to myplot3.jpg
/scratch/ttrojan/myplot3.jpg                100%   10KB   2.4MB/s   00:01    
```

To download a directory, recursively, add the `-R` option and specify the path to the remote directory (e.g., `get -R dir`).

</details>

<details>
  <summary>scp</summary>
&nbsp;

#### Using scp

`scp` is a client program for transferring files using the Secure Copy Protocol (SCP). It copies files between two computers over a network, one local and one remote.

> Note: Unlike `sftp`, login and authentication are requested for each use of the `scp` command.

A generic `scp` command is:

```sh
scp <options> source destination
```

where `source` and `destination` are file or directory paths and one of these is on a remote host where the syntax becomes `host:path`. With CARC systems, the host is a login or transfer node. When the command is submitted, you will first need to enter your password and complete the Duo authentication, and then the transfer will begin.

To **upload** a local file to your project directory, for example, the destination is on a remote host. From your local computer, enter a command like the following:

```sh
scp /home/tommy/data.csv ttrojan@hpc-transfer1.usc.edu:/project/ttrojan_123
```

To upload a directory, recursively, add the `-r` option and specify a local directory as the source.

To **download** a file from your project directory, for example, the source is on a remote host. From your local computer, enter a command like the following:

```sh
scp ttrojan@hpc-transfer1.usc.edu:/project/ttrojan_123/data.csv /home/tommy
```

To download a directory, recursively, add the `-r` option and specify a directory on the host as the source.

#### scp options

For large transfers, consider adding the `-C` option, which will compress the source files before transferring and automatically uncompress them after they are copied to the destination.

Enter `man scp` for more information and to view all available options.

</details>

<details>
  <summary>rsync</summary>
&nbsp;

#### Using rsync

[Rsync](https://rsync.samba.org/) is a fast and versatile transfer tool for synchronizing files and directories. It is typically used to copy, sync, and back up directories between two computers over a network, one local and one remote, but it can also be used for local copying and syncing. It uses a delta-transfer algorithm to minimize the amount of data that needs to be transferred; only new or modified files in a directory will be transferred. By default, Rsync will use SSH to securely transfer files over network.

> Note: Unlike `sftp`, login and authentication are requested for each use of the `rsync` command.

A generic `rsync` command is:

```sh
rsync <options> source destination
```

where `source` and `destination` are file or directory paths and one of these is on a remote host where the syntax becomes `host:path`. With CARC systems, the host is a login or transfer node. When the command is submitted, you will first need to enter your password and complete the Duo authentication, and then the transfer will begin.

To **upload** a local directory to your project directory, for example, the destination is on a remote host. From your local computer, enter a command like the following:

```sh
rsync -avh /home/tommy/data ttrojan@hpc-transfer1.usc.edu:/project/ttrojan_123
```

To **download** a directory from your project directory, for example, the source is on a remote host. From your local computer, enter a command like the following:

```sh
rsync -avh ttrojan@hpc-transfer1.usc.edu:/project/ttrojan_123/data /home/tommy
```

The `-a` option enables archive mode, which recursively transfers directories and preserves permissions and modification times for files. The `-v` option enables verbose mode, which prints a log of the transfer. The `-h` option prints transfer size and related information in a human-readable format.

After making changes to a source directory, simply enter the same `rsync` command again to sync the destination directory. If files deleted from the source should also be deleted from the destination, add the `--del` option.

Please note that the `rsync` command is sensitive to a trailing `/` on the source directory (e.g., data vs data/). If not included, it will copy the directory as well as its contents to the destination directory as a new subdirectory. If included, it will not copy the directory itself but only the contents to the destination directory.

#### rsync options

Rsync provides many other options than those used in the examples above. Here are some other useful options:

|**Option**|**Description**|
|---|---|
|`--del`|Delete files from destination if removed from source|
|`-z` or `--compress`|Compress files during transfer|
|`--append-verify`|Keep, check, and update partially transferred files|
|`--progress`|Display progress of file transfers|
|`--stats`|Print transfer statistics|

For transfers of large files that may take a long time, consider adding the `-z` option to compress files as well as the `--append-verify` option, which will keep partially transferred files. If the transfer is interrupted, re-entering the same command will restart the transfer where it stopped and append data to the partial file.

Enter `man rsync` or `rsync --help` for more more information and to view all available options.

> Note: If you experience issues with disconnections during an `rsync` transfer, try adding the option `--timeout=60` to keep the connection alive for 60 seconds in case the transfer idles. Sometimes network latency can cause disconnects.

</details>
&nbsp;

### CARC &rlarr; Internet

There are many tools available to transfer files to and from CARC systems and endpoints on the public internet, such as FTP file servers or HTTP web servers. Keep in mind that CARC compute nodes do not have access to the internet, so complete these transfers on the login or transfer nodes separately from Slurm jobs.

<details>
  <summary>File servers: sftp and lftp</summary>
&nbsp;

#### Using sftp and lftp

For file servers that use the SFTP protocol, you can use the `sftp` program to transfer files. Examples of how to use `sftp` can be found in the previous section on `sftp` above, with the only difference being the remote server that you interact with.

For file servers that use FTP, SFTP, or other FTP-like protocols, you can use the `lftp` [module](/user-information/user-guides/high-performance-computing/lmod) to transfer files: `module load lftp`. The `lftp` program has a similar interface and commands to `sftp` but has additional features, including multi-connection and parallel downloads. For more information and available options, enter `man lftp` or see the official [lftp documentation](https://lftp.yar.ru/).

The `wget`, `curl`, and `aria2c` programs can also be used to non-interactively *download* files from FTP or SFTP servers. The `sftp`, `lftp`,  and `curl` programs can also be used to non-interactively *upload* files to FTP or SFTP servers.

</details>

<details>
  <summary>Downloads: wget, curl, and aria2c</summary>
&nbsp;

#### Using wget, curl, and aria2c

The main tools focused on downloading files from the web (i.e., from sources using HTTP and HTTPS protocols, like web sites) are `wget`, `curl`, and `aria2c`. They can also be used to non-interactively download files from FTP or SFTP servers.

In general, `wget` is the simplest to use, `curl` offers more advanced features useful in scripting, and `aria2c` offers multi-connection and parallel downloads to improve the speed of large transfers.

#### Using wget

For simple file downloads from the web, the `wget` program is the easiest to use. Just provide the URL to the file:

```sh
wget https://nano-editor.org/dist/v5/nano-5.4.tar.xz
```

Enter `man wget` or `wget --help` for more information and to view all available options.

#### Using curl

The `curl` program supports more protocols and provides more advanced features for downloading (and uploading) files, especially for scripting purposes. For a simple file download, use the `-O` option and provide the URL to the file:

```sh
curl -O https://nano-editor.org/dist/v5/nano-5.4.tar.xz
```

Without the `-O` option, `curl` will simply print the contents to the screen. This is the default behavior and is useful when piping the contents of a file as input into another command.

Enter `man curl` or `curl --help` for more information and to view all available options. For even more information, see the official [curl documentation](https://curl.se/).

#### Using aria2c

For large downloads, the `aria2c` program is a better choice because it offers multi-connection and parallel downloads that can reduce transfer times. For a simple file download, just provide the URL to the file:

```sh
aria2c https://nano-editor.org/dist/v5/nano-5.4.tar.xz
```

For a large file, add the `-x` option to use multiple connections that will reduce the download time. For example, the following command opens 4 connections:

```sh
aria2c -x4 https://nano-editor.org/dist/v5/nano-5.4.tar.xz
```

You can also provide a list of URLs in a file and use the `-j` option to specify the number of files to download in parallel. For example, given a file data.txt that lists a URL to a dataset on each line, the following command will download 4 of these dataset files concurrently:

```sh
aria2c -j4 data.txt
```

Enter `man aria2c` or `aria2c --help` for more information and to view all available options. For even more information, see the official [aria2 documentation](https://aria2.github.io/).

</details>

<details>
  <summary>Cloud storage: rclone</summary>
&nbsp;

#### Using rclone

For cloud storage, you can use the `rclone` [module](/user-information/user-guides/high-performance-computing/lmod) to transfer files: `module load rclone`. This requires some initial setup and configuration. For more information, see the guide for [Transferring Files using Rclone](/user-information/user-guides/data-management/transferring-files-rclone).

</details>

<details>
  <summary>Code: git</summary>
&nbsp;

#### Using git

[Git](https://git-scm.com/) is a source-code management program useful for version control and collaborative development. You can use `git` commands to manage code repositories and push and pull changes to and from CARC systems. We recommend using a central remote repository at services like GitHub, GitLab, or BitBucket. You can develop code directly on CARC systems in a Git repository in one of your directories and use the remote repository to back up and sync changes. You can also develop code on your local computer as part of a Git repository, push changes to a remote repository, log in to CARC systems, and pull the changes to the corresponding repository located in one of your directories.

Enter `man git` or `git --help` for more information. For even more information, see the official [Git documentation](https://git-scm.com/doc).

</details>
&nbsp;

### Verifying integrity of file transfers

Regardless of which command-line transfer tool you use, you may wish to ensure file integrity after file transfers. Some of these tools have built-in options to verify file integrity. Alternatively, you can use MD5 checksums, for example, to verify the files were successfully copied. In your source directory enter a command like:

```sh
find -type f -exec md5sum '{}' \; > md5sum.txt
```

This will generate the file md5sum.txt. Copy this file to the destination directory where files were transferred, and then from that directory enter a command like:

```sh
md5sum -c md5sum.txt
```

This compares the file checksums from the source with the file checksums in the destination and prints the results. The transfer was successful if all of the checksums match, as indicated by an `OK` status. Note that the md5sum.txt file itself will fail because it was not originally present in the source directory.