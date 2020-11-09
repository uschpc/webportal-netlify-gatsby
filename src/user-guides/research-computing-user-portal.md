---
excerpt: Instructions for using the CARC's user portal for project and resource management.
path: research-computing-user-portal
parentPath: user-information/user-guides/high-performance-computing
route: High-Performance Computing
author: Yaseen A.
routePath: user-information/user-guides/high-performance-computing
featuredImage: ../../static/images/Door.png
date: 2020-06-04T00:00:00.000Z
cat: userGuides
title: Research Computing User Portal
uniqID: user_portal
parentPage: User Guides
id: 6
---

The Center for Advanced Research Computing's User Portal is how users manage their projects and allocations on CARC systems.

>Note: If you're a condo node owner, you will still manage your resources and users at https://hpc-web.usc.edu/projects/. Support for condo nodes in the User Portal will be added once the CARC's [new Condo Cluster Program (CCP)](/services/condo-cluster-program) is developed. 

The Research Computing User Portal uses ColdFront, an open source resource allocation management tool developed by the [University at Buffalo's Center for Computational Research](http://www.buffalo.edu/ccr.html). ColdFront supports the management of resources and user allocations to those resources.  The tool allows users to request and manage the access they and their students or collaborators have to the resources in the CARC's data center.  

ColdFront was designed to be useful in varied high-performance computing environments. The architecture is extensible and supports various back-ends, job schedulers, and ticketing systems, and it is database agnostic.  The CARC's implementation of this open source product interfaces with XDMoD (job metrics), Slurm (job scheduler), OpenLDAP, BeeGFS (storage), and JIRA (ticketing system).

The User Portal handles the management of 3 components: **Projects**, **Allocations** and **Resources**.

![ColdFront parts](/images/coldfront_overview.png)

### Resources:
- The CARC has multiple distinct resources to track
- Resources include: clusters, department/lab servers, software licenses, storage, and clouds
- Some resources have limits (e.g., storage has a limit of GB/TB, licenses have a limit of seats available)  

### Allocations:
- Allocations indicate what resources you have access to and any limits associated with that access
- All CARC resources require an allocation
- Allocations expire either by date or when a limit is reached - this information varies per allocation and is available when you log in to the User Portal  

### Projects:
- All USC faculty & staff members can have at least one project
- Each project has a description, field of research, grants, publications, and allocations to resources

For more detailed information and step-by-step instructions, see the Research Computing User Portal User Guides below.
