---
author: Ryan Sim / Chris Taylor
date: 2020-06-06T00:00:00.000Z
title: Transferring Files using Globus
path: transferring-files-globus
parentPath: user-information/user-guides/Data-Management
cat: dataManagement
parentPage: User Guides
sideMenuParent: Data Management
backToTopBtnFlag: true

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

### Setting up Collections for file transfers and installing Globus Personal Connect

In Globus terminology, a user sets up a **Collection**, which is simply a place to transfer files. This can be a folder on your laptop, your home directory on a remote data transfer node (like hpc-transfer.usc.edu), or even a remote location you have access to through a scientific computing affiliation.

In the Globus user interface, Collections are managed in terms of <b>Endpoints</b>. From the main Globus File Manager page, click on the <b>ENDPOINTS</b> link on the left panel.

![Globus Software Set Up](/images/globus-gfx/globus-coll1.PNG)

On the upper right of the File Manager page page, click on <b>Create a personal endpoint</b>. You'll be presented with a link to download and install the software.

![Globus Software Set Up](/images/globus-gfx/globus-coll2.PNG)

Now it's time to install the desktop service, Globus Connect Personal, that makes Globus work behind the scenes for you.

![Globus Software Set Up](/images/globus-gfx/globus-dl1.PNG)

Running it will take you through the standard software installation process for your platform. Go ahead and start the Globus service on your computer.

![Globus Software Set Up](/images/globus-gfx/globus-dl2.PNG)

A new window will pop up asking you to log in again.

![Globus Software Set Up](/images/globus-gfx/globus-inst-login1.PNG)

Once logged in, allow the setup to continue.

![Globus Software Set Up](/images/globus-gfx/globus-inst-login2.PNG)

#### Globus Installation Guides

[How to Install: Mac OS](https://docs.globus.org/how-to/globus-connect-personal-mac/)

[How to Install: Windows](https://docs.globus.org/how-to/globus-connect-personal-windows/)

[How to Install: Linux](https://docs.globus.org/how-to/globus-connect-personal-linux/)

#### Establishing an endpoint

You can now establish an Endpoint on your PC - Globus wants to call it a Collection. Under <b>Collection Name</b>, choose a descriptive name. <B>Do not choose the High Assurance option</b> - that feature is beyond the scope of this document.

![Globus Software Set Up](/images/globus-gfx/globus-inst-login3.PNG)

Depending on whether Globus knows your account ID from a previous login or existing affiliation, you may be asked to generate a setup key for your collection. Copy it to the clipboard of your computer. Keep this key if you are asked for it during the next one or two steps.

![Globus Software Set Up](/images/globus-gfx/globus-inst-key1.PNG)

In the setup window, clicking <b>Save</b> will open yet another Globus front end interface. Click on <b>ENDPOINTS</b> and then on <b>Administered by You</b> on the right side of the middle menu. You should see the Endpoint you entered previously.

![Globus Software Set Up](/images/globus-gfx/globus-inst-login4.PNG)

Click on the Endpoint and in the next screen, choose the <b>Open in File Manager</b> button, which is the middle button on the right hand side. Ensure that this takes you to a listing of the files in your home directory, including subfolders into which you can navigate.

![Globus Software Set Up](/images/globus-gfx/globus-local-ep1.PNG)

### Setting up access to hpc-transfer.usc.edu

To set up access to the hpc-transfer node, go to <b>ENDPOINTS</b> and click on <b>Shared with You</b> in the middle menu bar. Right above that, enter <b>hpc-transfer.usc.edu</b> in the search box and click the magnifying glass. The USC data transfer node endpoint should appear in the main window.

![Globus Software Set Up](/images/globus-gfx/globus-remote1.PNG)

Click on the endpoint link and then click the <b>Activate</b> button on the right hand side.

![Globus Software Set Up](/images/globus-gfx/globus-remote2.PNG)

You will be asked to log in.

>Note: Globus wants your username, which is your USC NetID <b>without</b> the <b>.usc.edu</b> part. This is as if you are logging into hpc-transfer.usc.edu with something like SCP or SSH. Enter your username and the password you use to log in to USC networks and servers.

If you succesfully authenticate you will be granted an access certificate. You are connected to the USC data transfer node Endpoint.

![Globus Software Set Up](/images/globus-gfx/globus-remote3.PNG)

Click on <b>Open in File Manager</b> and ensure you can see the files and directories in your home directory on the CARC cluster.

### Getting ready to transfer files

At this point you can navigate to the File Manager, where you will be presented with the Globus transfer tool, which has a two-pane bi-directional paradigm.

![Globus Software Set Up](/images/globus-gfx/globus-fm1.PNG)

For security, Globus requires you to specifically allow files and folders on your PC to be shared or transferred.

On Windows, to allow a folder contents to be transferred,  right click on the small <b>g</b> (the Globus icon) in your running task icons in the task bar.

Select the <b>Options...</b> menu item.

![Globus Software Set Up](/images/globus-gfx/globus-svcopt1.PNG)

You will be presented with a box to add a folder containing the files you want to transfer. If you click on the <b>+</b> sign on the lower right (highligted in blue) you will have a standard file explorer that gives you the ability to add a folder on your local hard drive. For now, only keep the <b>Writable</b> option checked and the **Shareable** option unchecked.

![Globus Software Set Up](/images/globus-gfx/globus-svcopt2.PNG)

Click the <b>Save</b> button to continue.

On a Mac, the process is similar. You access the the small Globus <b>g</b> icon in the top menu bar and choose <b>Preferences...</b> and then the <b>Access</b> tab.

![Globus Software Set Up](/images/globus-gfx/globus-macadd.PNG)

Return to the main Globus window. In the File Manager page, you should see the USC hpc-transfer Endpoint on the left column, and your local Endpoint in the right column. In the search field at the top of that column (designated by a blue magnifying glass), you can click once and be presented with the local Collection you specified earlier. Clicking on it fills the right column, and clicking on the blue right-angle arrow on the right allows you to navigate to the folder you designated. You'll see any files you placed in there.

![Globus Software Set Up](/images/globus-gfx/globus-fm2.PNG)

Now in the right column highlight one, two, or all of the files in your local folder. Starting the transfer is as simple as clicking on the blue <b>Start</b> button. A popup window will appear in the upper right giving you the option to <b>View details</b>. That will take you to a screen where you can watch the progress, as well as view other information about your transfer job.

![Globus Software Set Up](/images/globus-gfx/globus-xfer1.PNG)

If your files are large, Globus takes a few seconds or minutes to index them and get ready to transfer.

When yout transfer completes, go back to the File Manager window. In the left pane, under the USC hpc-transfer Endpoint, click the refresh button in the middle menu (right under the <b>Path</b> field). The refresh button is the right-curling arrow, which will pull an updated listing of the files in your home directory on the USC data transfer node. If needed, scroll through the list and you will see your files there.

![Globus Software Set Up](/images/globus-gfx/globus-xfer2.PNG)

Notice that in the <b>Path</b> window Globus designates your home directory as a ```/~/``` symbol. Experiment with clicking on the file system navigation buttons to the right of folders as well as the up arrow in the Collection middle menu. You'll get an idea of where on the data transfer node and where on your PC you can upload and download files from.

You don't have to transfer files one-by-one. By highlighting a folder and clicking the <b>Start</b> button, you can move the folder and all its contents to the USC data transfer node. The two-column bi-directional layout of the file manager should suggest to you that to download files from the data transfer node, you merely need to highlight them on the left and then click the <b>Start</b> button in the file transfer column.

### Helpful tips

- The CARC data transfer node is Linux-based. That means file and folder names are case-sensitive and spaces and strange characters are awkward. Don't use things like slashes and dollar signs in your file names if you're planning to upload them, and replacing spaces in file and folder names with an underscore or dash could make your life easier.

- Globus is capable of transferring a lot of small files, but in many cases you'll get faster transfers and better results by creating a TAR, GZIP, or ZIP file before trying to transfer data to/from the data transfer node.

- Globus can restart a failed or paused transfer. Make a note of the task ID when you initiate a transfer or watch your email for a status update. Logging back into Globus will let you find your transfer job and restart it.
