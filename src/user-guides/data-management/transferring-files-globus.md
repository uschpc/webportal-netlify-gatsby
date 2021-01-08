---
author: Ryan Sim / Chris Taylor
id: 6
date: 2021-01-07T00:00:00.000Z
title: Transferring Files using Globus
path: transferring-files-globus
parentPath: user-information/user-guides/data-management
cat: dataManagement
parentPage: User Guides
sideMenuParent: Data Management
backToTopBtnFlag: true
excerpt: A user guide for Globus, a fast and reliable data transfer service.
---

Globus provides a relatively simple and reliable way to access and move research data between systems with faster transfer speeds than tools such as SCP/SFTP and Rsync. Globus requires some setup ahead of time, but it is robust and appropriate when your data transfer will take a long time or your connection will be periodically interrupted. It also allows you to share your data with colleagues, move data back and forth between CARC storage systems and personal workstations, and restart or resume a failed or paused file transfer - even a very large one.

> Note: Due to security risks, please be mindful of the type of information being transferred. Where possible, omit all information that may be considered confidential. For examples of confidential information that requires additional consideration, visit http://itservices.usc.edu/security/sensitive-info.

### Getting started with Globus

To start using Globus, go to <https://www.globus.org> in your browser and click <b>Log In</b>. Type <b>University of Southern California</b> in the box that says "Use your existing organizational login".

![Globus Software Set Up](/images/globus-gfx/globus-login1.PNG)

Next you should get the Shibboleth page to enter your USC NetID.

![Globus Software Set Up](/images/globus-gfx/globus-login2.PNG)

After authenticating you'll land on the File Manager page.

![Globus Software Set Up](/images/globus-gfx/globus-filemgr1.PNG)

You can toggle the number and configuration of the two panes using the Panels menu in the top right of the File Manager page.

### Setting up Collections for file transfers

In Globus terminology, a user sets up a **Collection**, which is simply a place to transfer files. This can be a folder on your laptop, your home directory on a remote data transfer node (like the CARC's hpc-transfer1.usc.edu or hpc-transfer2.usc.edu), or even a remote location you have access to through a scientific computing affiliation.

In the Globus user interface, Collections are managed in terms of <b>Endpoints</b>. From the main Globus File Manager page, click on the <b>ENDPOINTS</b> link on the left panel.

![Globus Software Set Up](/images/globus-gfx/globus-coll1.PNG)

On the upper right of the File Manager page page, click on <b>Create a personal endpoint</b>. 

![Globus Software Set Up](/images/globus-gfx/globus-coll2.PNG)

#### Installing Globus Connect Personal

You'll be presented with a link to download and install the desktop service, Globus Connect Personal, that makes Globus work behind the scenes for you.

![Globus Software Set Up](/images/globus-gfx/globus-dl1.PNG)

Running it will take you through the standard software installation process for your platform. Go ahead and start the Globus service on your computer.

![Globus Software Set Up](/images/globus-gfx/globus-dl2.PNG)

A new window will pop up asking you to log in again.

![Globus Software Set Up](/images/globus-gfx/globus-inst-login1.PNG)

Once logged in, allow the setup to continue.

![Globus Software Set Up](/images/globus-gfx/globus-inst-login2.PNG)

#### Globus Installation Guides

* [How to Install: Mac OS](https://docs.globus.org/how-to/globus-connect-personal-mac/)

* [How to Install: Windows](https://docs.globus.org/how-to/globus-connect-personal-windows/)

* [How to Install: Linux](https://docs.globus.org/how-to/globus-connect-personal-linux/)

#### Establishing an endpoint

You can now establish an Endpoint on your PC - Globus wants to call it a Collection. Under <b>Collection Name</b>, choose a descriptive name. <B>Do not choose the High Assurance option</b> - that feature is beyond the scope of this document.

![Globus Software Set Up](/images/globus-gfx/globus-inst-login3.PNG)

Depending on whether Globus knows your account ID from a previous login or existing affiliation, you may be asked to generate a setup key for your collection. Copy it to the clipboard of your computer. Keep this key if you are asked for it during the next one or two steps.

![Globus Software Set Up](/images/globus-gfx/globus-inst-key1.PNG)

In the setup window, clicking <b>Save</b> will open yet another Globus front end interface. Click on <b>ENDPOINTS</b> and then on <b>Administered by You</b> on the right side of the middle menu. You should see the Endpoint you entered previously.

![Globus Software Set Up](/images/globus-gfx/globus-endpoints-administered.PNG)

Click on the Endpoint and in the next screen, choose the <b>Open in File Manager</b> button on the right hand side of the page.

![Globus Software Set Up](/images/globus-gfx/globus-inst-login4.PNG)

Ensure that this takes you to a listing of the files in the selected directory on your computer, including subfolders into which you can navigate.

![Globus Software Set Up](/images/globus-gfx/globus-manager-endpoint.png)

#### Allowing access to your local files

For security, Globus requires you to specifically allow files and folders on your computer to be shared or transferred.

On Windows, to allow a folder's contents to be transferred,  right click on the small <b>g</b> (the Globus icon) in your running task icons in the task bar.

Select the <b>Options...</b> menu item.

![Globus Software Set Up](/images/globus-gfx/globus-svcopt1.PNG)

You will be presented with a box to add a folder containing the files you want to transfer. If you click on the <b>+</b> sign on the lower right (highlighted in blue) you will have a standard file explorer that gives you the ability to add a folder on your local hard drive. For now, only keep the <b>Writable</b> option checked and the **Shareable** option unchecked.

![Globus Software Set Up](/images/globus-gfx/globus-svcopt2.PNG)

Click the <b>Save</b> button to continue.

On a Mac, the process is similar. You access the small Globus <b>g</b> icon in the top menu bar and choose <b>Preferences...</b> and then the <b>Access</b> tab.

![Globus Software Set Up](/images/globus-gfx/globus-macadd.PNG)

### Setting up access to your CARC directories

To set up access to your CARC /home1, /project, and /scratch directories on Discovery/Endeavour, go to <b>ENDPOINTS</b> and click on <b>Shared with You</b> in the middle menu bar. Right above that, enter <b>USC CARC User Directories</b> in the search box and click the magnifying glass. The USC data transfer node endpoint should appear in the main window.

![Globus Software Set Up](/images/globus-gfx/globus-endpoint-search.png)

After selecting the USC CARC User Directories endpoint, you will be taken to the Endpoint's main page.

![Globus Software Set Up](/images/globus-gfx/globus-remote1.PNG)

Navigate to the Credentials tab and you will see that authentication and consent are required for Globus to manage collections on the Endpoint. Click "continue".

![Globus Software Set Up](/images/globus-gfx/globus-remote2.PNG)

You will be asked to select your identity to continue. If you've already authenticated via Shibboleth, you should see your USC NetID listed. Otherwise, you will be prompted to log in with your NetID.

![Globus Software Set Up](/images/globus-gfx/globus-endpoint-identity.png)

You will then need to grant Globus a list of permissions by clicking "Allow".

![Globus Software Set Up](/images/globus-gfx/globus-endpoint-permissions.png)

After allowing Globus these permissions, you will be taken back to the Endpoint's main page. Under the Credentials tab, you will now see your NetID listed with an "active" status.

![Globus Software Set Up](/images/globus-gfx/globus-endpoint-credentials.png)

There is one final step for authenticating the Endpoint for file transfers. On the Endpoint's main page under the Overview tab, click "Open in File Manager".

![Globus Software Set Up](/images/globus-gfx/globus-endpoint-file-manager.png)

You will be taken to the File Manager page, but Globus requires one more authentication/consent. Click "Continue" to complete the final step.

![Globus Software Set Up](/images/globus-gfx/globus-endpoint-file-manager-authenticate.png)

Click "Allow" to grant Globus the permissions.

![Globus Software Set Up](/images/globus-gfx/globus-endpoint-file-manager-permissions.png)

You will be taken back to the File Manager page, where you should see your /home1 directory, which looks something like the following:

![Globus Software Set Up](/images/globus-gfx/globus-endpoint-file-manager-success.png)

### Transferring files

The File Manager page is the page you'll use for your file transfers, and it has a two-pane bi-directional layout.

![Globus Software Set Up](/images/globus-gfx/globus-fm1.PNG)

> Tip: You can toggle the number and configuration of the two panes using the Panels menu in the top right of the File Manager page.

In the **Collection** field at the top of either column, you can search for USC CARC User Directories to access your CARC directories. By default, you will be in your /home1 directory. You can navigate to other directories (/project, /scratch, /scratch2) by typing their paths in the **Path** field, or you can enter `/` to view all directories.

>Tip: Your project directory path is of the form `/project/<PI_username>_<id>`.

In the other column, you can click the Collection field and navigate to the "Your Collections" tab, where you'll find your personal computer's Collection you set up.

![Globus Software Set Up](/images/globus-gfx/globus-columns.PNG)

After selecting the two Collections and navigating to the desired directories, your File Manager page will look something like this:

![Globus Software Set Up](/images/globus-gfx/globus-file-manager-transfer.PNG)

> This user wants to transfer files from the "test" folder on their computer to their CARC /scratch directory, which is currently empty.

To begin the transfer, highlight one or more of the files in your local folder. Starting the transfer is as simple as clicking the blue <b>Start</b> button.

![Globus Software Set Up](/images/globus-gfx/globus-start-transfer.PNG)

A popup window will appear in the upper right notifying you that the transfer was submitted and giving you the option to <b>View details</b>. That will take you to a screen where you can watch the progress, as well as view other information about your transfer job. If your files are large, Globus takes a few seconds or minutes to index them and get ready to transfer.

![Globus Software Set Up](/images/globus-gfx/globus-transfer-details.PNG)

You'll also receive an email notifying you of the file transfer success (or failure). Make a note of the Task ID in case your transfer fails and you need to restart it.

When your transfer completes, go back to the File Manager window. In the CARC directory column, click the refresh button in the middle menu (right under the <b>Path</b> field). The refresh button is the right-curling arrow, which will pull an updated listing of the files in your CARC directory (in this case, the /scratch directory). If needed, scroll through the list and you will see your files there.

![Globus Software Set Up](/images/globus-gfx/globus-transfer-refresh.PNG)

>Tip: You don't have to transfer files one-by-one. By highlighting a folder and clicking the <b>Start</b> button, you can move the folder and all its contents to CARC directories.

The two-column bi-directional layout of the file manager should suggest to you that to download files from the data transfer node, you merely need to highlight them in the CARC column (rather than the column for your personal computer)and then click the <b>Start</b> button.

#### Syncing directories

Globus offers settings that can be applied to your transfer to synchronize your two directories. Syncing directories prevents the same files from being transferred repeatedly, saving you transfer time. 

To synchronize your local directory and your CARC directory, access the Transfer & Sync Options menu located in between the two transfer columns. Select the "sync - only transfer new or changed files where the checksum is different" and "verify file integrity after transfer" checkboxes, and click the blue "Start" button to start your transfer.

![Globus Software Set Up](/images/globus-gfx/globus-transfer-sync-options.PNG)

There is also an option to delete files in the destination directory if they aren't in the source directory, as well as options to preserve source file modification times and encrypt the file transfer.

### Restarting file transfers

If your transfer fails, you should first look at the last few events in the event log to identify any problems needing human intervention (quota exceeded, out-of-disk space, etc.). You can view event logs for transfers by navigating to the Activity tab on the lefthand menu, selecting the transfer in question, and navigating to the transfer's Event Log tab.

![Globus Software Set Up](/images/globus-gfx/globus-activity-log.PNG)

> Note: This transfer was successful, but a failed transfer is accessed in the same way.

After fixing the issue that caused the transfer to fail, you can resubmit the transfer in the same way as you did originally, making sure to synchronize the two directories to avoid re-transferring other files (see the "Syncing directories" section above).

### Using bookmarks

The Globus File Manager offers a bookmark feature to access your most-used directories easily. You can add a bookmark to a directory by clicking the bookmark ribbon next to the Path field in either column.

![Globus Software Set Up](/images/globus-gfx/globus-bookmark1.png)

You can view and manage your Bookmarks when searching for a Collection, under the Bookmarks tab.

![Globus Software Set Up](/images/globus-gfx/globus-bookmark2.png)

### Helpful tips

- The CARC data transfer node is Linux-based. That means file and folder names are case-sensitive and spaces and strange characters are awkward. Don't use things like slashes and dollar signs in your file names if you're planning to upload them, and replacing spaces in file and folder names with an underscore or dash could make your life easier.

- Globus is capable of transferring a lot of small files, but in many cases you'll get faster transfers and better results by creating a TAR, GZIP, or ZIP file before trying to transfer data to/from the data transfer node.