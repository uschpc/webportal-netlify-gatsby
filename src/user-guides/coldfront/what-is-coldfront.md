---
author: James Hong
date: 2020-06-01T00:00:00.000Z
title: What is ColdFront?
path: what-is-coldfront
route: User Guides
parentPath: user-information/user-guides/high-performance-computing/research-computing-user-portal
cat: coldFront
parentPage: User Guides
---

ColdFront is an open source resource allocation management tool built for high performance computing centers that allows the management of Center resources and User allocations to those resources.  This tool was developed to allow our users the opportunity to request and manage the access they and their students or collaborators have to the many resources in USC HPC's data center.  

ColdFront consists of 3 parts: Projects, Allocations and Resources
![ColdFront parts](/images/coldfront_overview.png)


### Resources:
- HPC has multiple distinct resources to track
- Resources include: clusters, department/lab servers, software licenses, storage, and clouds
- Some resources have limits (i.e. storage has a limit of GB/TB, licenses have a limit of seats available)  
&nbsp;  
&nbsp;  
### Allocations:
- Allocations indicate what resources you have access to and any limits associated with that access
- All HPC resources require an allocation
- Allocations expire either by date or when a limit is reached (this information varies and is available when you login to ColdFront)  
&nbsp;  
&nbsp;  
### Projects:
- All USC faculty & staff members can have at least one project
- Projects have a description, field of research, grants, publications, and allocations to resources
&nbsp;  
&nbsp;  

ColdFront was designed to be useful in varied HPC environments.  The architecture is extensible and supports various back-ends, job schedulers, ticketing system, and is database agnostic.  HPC's implementation of this open source product interfaces with XDMoD (job metrics), SLURM (job scheduler), OpenLDAP, BeeGFS storage, and JIRA (ticketing system).

Login to ColdFront through Shibboleth using your USC username and password: [ColdFront Login](https://hpcaccount.usc.edu/)  
**NOTE:  You must be on a USC network (either on campus or connected to the USC VPN) to access this site.  Additionally you have to be a current USC member to log in.**
&nbsp;  
&nbsp;  
&nbsp;  
Additional information about the parts of your project record can be found here:
* [Create a new project](create-a-new-project)  
* [Requesting new allocations](request-new-allocation)
* [Adding users to your project and/or allocation](adding-users-to-project-or-pllocation)
* [Removing users from your project and/or allocation](removing-users-from-project-or-allocation)
* [Annual project review](yearly-project-renewal)
* [Renewing allocations to resources](renew-allocation)
