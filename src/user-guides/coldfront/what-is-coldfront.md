---
author: James Hong
date: 2020-06-15T00:00:00.000Z
title: What is ColdFront?
path: what-is-coldfront
parentPath: user-information/user-guides/coldfront
cat: coldFront
parentPage: User Guides
---

USC Research Computing's User Portal is how users manage their projects and allocations on Discovery. Each user is granted access to the Research Computing User Portal when they create their USC Research Computing account.

The Research Computing User Portal uses ColdFront, an open source resource allocation management tool developed by the [University at Buffalo's Center for Computational Research](http://www.buffalo.edu/ccr.html). ColdFront supports the management of resources and user allocations to those resources.  The tool allows users to request and manage the access they and their students or collaborators have to the resources in USC Research Computing's data center.  

ColdFront was designed to be useful in varied high-performance computing environments.  The architecture is extensible and supports various back-ends, job schedulers, and ticketing systems, and it's database agnostic.  USC Research Computing's implementation of this open source product interfaces with XDMoD (job metrics), SLURM (job scheduler), OpenLDAP, BeeGFS (storage), and JIRA (ticketing system).

The User Portal consists of 3 parts: **Projects**, **Allocations** and **Resources**.

![ColdFront parts](/images/coldfront_overview.png)

### Resources:
- USC Research Computing has multiple distinct resources to track
- Resources include: clusters, department/lab servers, software licenses, storage, and clouds
- Some resources have limits (e.g., storage has a limit of GB/TB, licenses have a limit of seats available)  


### Allocations:
- Allocations indicate what resources you have access to and any limits associated with that access
- All USC Research Computing resources require an allocation
- Allocations expire either by date or when a limit is reached - this information varies per allocation and is available when you log in to the User Portal  


### Projects:
- All USC faculty & staff members can have at least one project
- Each project has a description, field of research, grants, publications, and allocations to resources
&nbsp;  

For more detailed information and step-by-step instructions, see our Research Computing User Portal User Guides below.

<!--
Log in to the Research Computing User Portal through Shibboleth using your USC username and password:

[Log in to User Portal](https://hpcaccount.usc.edu/)  

**NOTE:  You must be on a USC network (either on campus or connected to the [USC VPN](https://itservices.usc.edu/vpn/)) to access the User Portal.  Additionally, you must be a current USC student, faculty, or staff to log in.**
&nbsp;  
&nbsp;  
Additional information about the parts of your project record can be found here:
* [Create a New Project](create-a-new-project)  
* [Requesting New Allocations](request-new-allocation)
* [Adding Users to your Project and/or Allocation](adding-users-to-project-or-allocation)
* [Removing Users from your Project and/or Allocation](removing-users-from-project-or-allocation)
* [Annual Project Review](yearly-project-renewal)
* [Renewing Allocations to Resources](renew-allocation)
-->
