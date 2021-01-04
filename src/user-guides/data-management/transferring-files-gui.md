---
author: Ryan Sim
id: 5
date: 2020-10-12T00:00:00.000Z
title: Transferring Files using a Graphical User Interface
path: transferring-files-gui
parentPath: user-information/user-guides/data-management
cat: dataManagement
parentPage: User Guides
sideMenuParent: Data Management
backToTopBtnFlag: true
excerpt: Instructions for transferring your files to CARC systems using graphical tools.
---

For many CARC users, the most convenient way to transfer files between their computer and CARC systems is to use a GUI (graphical user interface)-based SFTP client. The SFTP client is installed and run on your computer. It works by connecting to the SFTP server running on CARC systems, enabling you to transfer files back and forth. You can connect to either the main Discovery or Endeavour login nodes (discovery.usc.edu or endeavour.usc.edu) or, for better performance, the hpc-transfer1 or hpc-transfer2 nodes, which are dedicated, high-speed data transfer nodes.

Along with USC login credentials, Duo two-factor authentication (2FA) is required for CARC access. Most third-party SSH clients can be configured to use 2FA, and to maintain an open connection so as to minimize the number of authentication requests during a transfer session. Refer to your preferred client's documentation for how to do this.

You are welcome to use any SFTP client you wish. Cyberduck, FileZilla, and WinSCP are popular choices.

> Note: Due to security risks, please be mindful of the type of information being transferred. Where possible, omit all information that may be considered confidential. For examples of confidential information that requires additional consideration, visit http://itservices.usc.edu/security/sensitive-info.

### Cyberduck

You can download Cyberduck from the vendor website at https://cyberduck.io/.

Go to the Bookmark menu and choose New Bookmark. Save these settings:

- Server: discovery.usc.edu (or endeavour.usc.edu for condo nodes)  
- Username: Your USC NetID/username  
- (Optional) SSH Private Key: The path to your private key (usually ~/.ssh/id_rsa)

![Cyberduck access set up](/images/hpc-file-transfer-gfx/cb-snip1.png)

To configure Duo compatibility, expand More Options and set the Transfer Files field to "Use browser connection".

![Cyberduck access set up 2](/images/hpc-file-transfer-gfx/cb-snip2.png)

Clicking the red X in the upper right saves your settings. Highlighting the bookmark and pressing Enter on your keyboard will open the connection.

Click Allow to accept the unknown fingerprint, and you will get the login popup.

![Cyberduck login](/images/hpc-file-transfer-gfx/cb-snip3.png)

![Cyberduck login 2](/images/hpc-file-transfer-gfx/cb-snip4.png)

It won't log you in right away - you need one more step.

![Cyberduck Duo push](/images/hpc-file-transfer-gfx/cb-snip5.png)

This last screen is where you enter "1" to have the Duo push sent to your phone. Once that succeeds, you are logged in to your Linux home directory on the CARC systems.

### FileZilla

You can download FileZilla from the vendor website at https://filezilla-project.org.

Make sure to download the FileZilla client, *not* the FileZilla server. Once the installation is complete, you will need to create a CARC profile on the client. You can do so by going to the Site Manager and clicking on "New site":

![Filezilla access set up](/images/hpc-file-transfer-gfx/fz-snip1.png)

For convenience, you can click the Rename button to name the site something memorable. Apply these settings:

- Protocol: SFTP – SSH File Transfer Protocol
- Host: discovery.usc.edu (or endeavour.usc.edu for condo nodes)
- Logon Type: Interactive
- User: Your USC NetID/username

![Filezilla access set up](/images/hpc-file-transfer-gfx/fz-snip2.png)

After the General tab settings have been filled out, select the Transfer Settings tab:

- Check "Limit number of simultaneous connections"
- Maximum number of connections: 1

These settings will keep a single connection open so you will not have to re-authenticate.

> Note: If you encounter connection timeout errors, you can increase the timeout window: Edit > Settings > Connection > Timeout. Change the 'Timeout in seconds' value to 9999, for example.

Click Connect and the password prompt will pop up. Enter your USC NetID password:

![Filezilla connect](/images/hpc-file-transfer-gfx/fz-snip3.png)

You will be prompted for a password again, but what the program really wants is the Duo push method. Choose the number corresponding to your preference, such as a "1" to have a push sent to your phone:

![Filezilla Duo push](/images/hpc-file-transfer-gfx/fz-snip4.png)

Once the authentication goes through, you will be logged in to your home directory on Discovery (or Endeavour, if applicable), with your local laptop or PC folders on the left, and your Linux home directory structure on the right.

> Note: Upon connecting for the first time, you may receive a pop-up asking you to accept a server key. Accept the server key if you encounter this.

### WinSCP

WinSCP is available at https://winscp.net.

After installing, click on New Session and enter your relevant details. Click Login to continue.

![WinSCP login](/images/hpc-file-transfer-gfx/wscp-snip1.png)

Next you will be asked to select your Duo authentication method. Enter the number of your choice.

![WinSCP Duo authentication](/images/hpc-file-transfer-gfx/wscp-snip2.png)

After you are logged in, you will see a drag-and-drop layout with your local system on one side and your Linux directory structure on the other. The tool offers extensive additional functionality for multiple transfers, file synchronizing, and more. Experiment to find your most productive workflow.
