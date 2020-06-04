---
author: James Hong
date: 2020-06-01T12:00:00.387Z
title: What is ColdFront?
path: what-is-coldfront
parentPath: user-guides/coldfront
cat: coldFront
parentPage: User Support
---

ColdFront is an open source resource allocation management tool built for high performance computing centers that allows the management of Center resources and User allocations to those resources.  This tool was developed to allow our users the opportunity to request and manage the access they and their students or collaborators have to the many resources in USC HPC's data center.  

ColdFront consists of 3 parts: Projects, Allocations and Resources
![ColdFront parts](/images/coldfront_overview.png)


### Resources:
- HPC has multiple distinct resources to track
- Resources include: clusters, department/lab servers, software licenses, storage, and clouds
- Some resources have limits (i.e. storage has a limit of GB/TB, licenses have a limit of seats available)


### Allocations:
- Allocations indicate what resources you have access to and any limits associated with that access
- All HPC resources require an allocation
- Allocations expire either by date or when a limit is reached (this information varies and is available when you login to ColdFront)


### Projects:
- All USC faculty & staff members can have at least one project
- Projects have a description, field of research, grants, publications, and allocations to resources


ColdFront was designed to be useful in varied HPC environments.  The architecture is extensible and supports various back-ends, job schedulers, ticketing system, and is database agnostic.  HPC's implementation of this open source product interfaces with XDMoD (job metrics), SLURM (job scheduler), OpenLDAP, BeeGFS storage, and JIRA (ticketing system).

Login to ColdFront through Shibboleth using your USC username and password: [ColdFront Login](https://hpcaccount.usc.edu/)  
**NOTE:  You must be on a USC network (either on campus or connected to the USC VPN) to access this site.  Additionally you have to be a current USC member to log in.**

Additional information about the parts of your project record can be found here:
* [Create a new project](Create-a-new-Project.md)  
* [Requesting new allocations](Request-new-Allocation.md)
* [Adding users to your project and/or allocation](Adding-Users-to-Project-or-Allocation.md)
* [Removing users from your project and/or allocation](Removing-Users-from-Project-or-Allocation.md)
* [Annual project review](Yearly-Project-Renewal.md)
* [Renewing allocations to resources](Renew-Allocation.md)
