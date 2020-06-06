---
author: James Hong
date: 2020-06-01T00:00:00.000Z
title: Removing users from your project or allocation
path: removing-users-from-project-or-allocation
parentPath: user-information/user-guides/high-performance-computing/research-computing-user-portal
cat: coldFront
parentPage: User Guides
---

&nbsp;  
&nbsp;  
[Log into ColdFront](https://hpcaccount.usc.edu/)  

Faculty members should remove users from their project and allocation(s) once they are done working together.  This is an important step in ensuring your data is secure and accessed only by those you authorize.  
&nbsp;  
&nbsp;  
### Deleting a User from a Project

Most of the time, a student will graduate and no longer need a HPC account.  In this case, please remove the user from your project.  To do this, login to ColdFront, click on your project, and click on the red "Remove Users" button.  

![ColdFront Project Overview](/images/coldfront_project_overview.png)


The list of all users on the project will be displayed and you can check the box next to each user you'd like to be removed:  

![ColdFront Project Remove Users](/images/coldfront_project_removeusers.jpg)


Once you click the Delete button, the user will be removed from your project view.  HPC will receive notification that you'd like the account removed and we will deactivate it.  Don't worry - this action isn't permanent.  We do not delete user accounts until the student is gone from USC.  If you decide you'd like to add the user back in the project or that you made a mistake, just add them back to your ColdFront project and allocation(s).
&nbsp;  
&nbsp;  
&nbsp;  
### Deleting a User from an Allocation Only

There are times when a faculty member has granted access to a user on an allocation for a private cluster or server.  If you only want to remove the user from an allocation and not an entire project, click on the folder icon next to the allocation name.  

![ColdFront Allocation Edit](/images/coldfront_allocation_edit.png)

Click the red "Remove Users" button:  

![ColdFront Allocation Remove User](/images/coldfront_allocation_removeuser.png)

Check the box next to the user(s) you want removed from the allocation, then click the blue "Remove Selected Users from Allocation" button.  Remember, this means the user no longer has access to THIS resource but will still be in your project and have an active account.  If you have other allocations that the user has access to, they will have access to login to those resources.  If you want the user account removed completely, please remove the account from the project detail page.

Once you click the Delete button, the user will be removed from your allocation detail view.  You will notice they are still listed under your project view.  HPC will receive notification that you'd like the account allocation information updated and we will take care of it.  Sometimes this involves changing access to SLURM associations so a user can no longer run on a cluster and sometimes it involves changing group access so a user can't login to a private server anymore.  Don't worry - this action isn't permanent.  If you decide you'd like to add the user back to the allocation or that you made a mistake, just add them back to your project

NOTE: Please only remove a user from an allocation if you don't want their account deactivated.  Students who are no longer at USC or collaborating with you, should be completely removed from your project(s) so that HPC knows to deactivate their account completely.


