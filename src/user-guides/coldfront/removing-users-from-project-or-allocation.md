---
author: James Hong
id: 6
date: 2020-07-08T00:00:00.000Z
title: Removing Users Project/Allocation
path: removing-users-from-project-or-allocation
parentPath: user-information/user-guides/high-performance-computing/research-computing-user-portal
cat: coldFront
parentPage: User Guides
sideMenuParent: Research Computing User Portal
---

PIs should remove users from their project and allocation(s) once they are done working together.  This is an important step in ensuring your data is secure and accessed only by those you authorize.  

### Deleting a user from a project

Most of the time, a student will graduate and no longer need an ARC account.  In this case, please remove the user from your project.  To do this, log in to user portal, click on your project, and click on the red "Remove Users" button.  

![ColdFront Project Overview](/images/coldfront_project_overview.png)

A list of all users on the project will be displayed and you can check the box next to each user you'd like to be removed:  

![ColdFront Project Remove Users](/images/coldfront_project_removeusers.jpg)

Once you click the "Delete" button, the user will be removed from your project view.  ARC will receive a notification that you'd like the account removed and we will deactivate it.  Don't worry - this action isn't permanent.  We do not delete user accounts until the student is no longer affiliated with USC.

If you decide you'd like to add the user back to the project or that you made a mistake, just [add them back](create-a-new-project) to your project and allocation(s).

### Deleting a user from an allocation only

There are times when a faculty member has granted access to a user on an allocation for a private cluster or server.  If you only want to remove the user from an allocation and not an entire project, click on the folder icon next to the allocation name to be taken to the Allocation Detail page:  

![ColdFront Allocation Edit](/images/coldfront_allocation_edit.png)

Click the red "Remove Users" button:  

![ColdFront Allocation Remove User](/images/coldfront_allocation_removeuser.png)

Check the box next to the user(s) you want removed from the allocation, then click the "Remove Selected Users from Allocation" button.  Remember, this means the user no longer has access to THIS allocation but will still be included your project and have an active account. If you have other allocations that the user has access to, they will still have access to those allocations.

Once you click the Delete button, the user will be removed from your Allocation Detail view.  You will notice they are still listed as a user on your Project Detail page. If you want the user's account removed completely, please remove the account from the entire project (see above).

ARC will receive notification that you'd like the account allocation information updated and we will take care of it.  Sometimes this involves changing access to SLURM associations so a user can no longer run jobs on a cluster, and sometimes it involves changing group access so a user can't log in to a private server anymore.  

> NOTE: Please only remove a user from an allocation **only** (rather than from a project) if you don't want their entire account deactivated.  Students who are no longer affiliated with USC or are no longer collaborating with you should be completely removed from your project(s) as well so that ARC knows to deactivate their account completely.**
