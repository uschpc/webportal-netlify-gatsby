---
author: James Hong
id: 7
date: 2020-07-08T00:00:00.000Z
title: Managing Allocations
path: managing-allocations
parentPath: user-information/user-guides/high-performance-computing/research-computing-user-portal
cat: coldFront
parentPage: User Guides
sideMenuParent: Research Computing User Portal
excerpt: Policies on your project's allocations in the Research Computing User Portal.
backToTopBtnFlag: true
---

### Expiration policies

Each type of resource offered by the CARC has a different expiration policy.

For example:
* Allocations to the Discovery cluster expire annually
* Allocations to private condo clusters expire every 5 years (or when the hardware warranty expires)
* Allocations to cloud computing resources expire when the compute time is used up

PIs and any users they authorize as "managers" on their projects are the only people that can renew an allocation.  

### Yearly project renewal

Though faculty are not required to review their project with every allocation that requires renewal, they will not be allowed to renew an allocation unless the project has been reviewed at least once in the previous 365 days.

If you try to renew an allocation without having completed a current project renewal, you will receive this error:

![ColdFront Project Review](/images/coldfront_projectreviewnotification.png)

For more details about the yearly project renewal, please see the [Yearly Project Renewal](yearly-project-renewal) user guide.

### Allocation renewal

An allocation gives you access to a resource and, possibly, limitations for that access. All CARC resources (clusters, servers, storage, cloud, licenses, etc.) require an allocation.  All allocations expire at some point, either on a date or when a limit is reached. For example, an allocation to a cloud resource has a limit of the total number of core hours allowed by that user. Once the user has reached that number, the allocation expires.  

Renewals can be done beginning 60 days before the allocation expires to provide you with plenty of time to complete the process. For cluster allocations, users will receive email reminders that their cluster allocation is expiring at 30 days, 2 weeks, and 1 week before the date of expiration. PIs can click on the link in the email to go directly to the renewal page in the user portal, or they can click on the yellow button displaying "expires in X days" on the user portal's Project Detail page.

![ColdFront Allocations](/images/coldfront_allocation_overview2.png)
For more details on how to renew your allocations, please see the [Renewing Allocations](renew-allocation) user guide.

#### Policies for the Discovery cluster

Allocations for the academic (USC-HPC) cluster expire yearly.  Faculty must renew their allocation each year or access to the resource will be blocked for all group members. The CARC requires faculty to review and update their project(s) annually. If your project has not been reviewed in a year and an allocation for the project is expiring, you will be forced to complete the project review before renewing the allocation.  More details on the project review can be [found here](yearly-project-renewal).

#### Policies for storage

The CARC provides each research group with up to 10 TB of storage for free, and 5 TB is the default allocation per project. This is included in the USC-HPC cluster allocation and not listed separately in the user portal.

If you purchase additional storage, your allocation expires when the warranty on the storage expires. Before this date, the CARC will purchase a new storage solution and you will have an opportunity to purchase storage on that system. If you decide not to do that, you will need to remove your data off the CARC's network before the old system is retired.  We will provide plenty of notice before this occurs.

At this time, all CARC storage allocations expire in December 2020.

#### Policies for a departmental server or cluster

The allocations for departmental research servers or clusters are set to expire when their warranties expire.  Please discuss renewal with the CARC prior to the expiration of these warranties. Once a warranty expires, the CARC cannot fix or replace broken or problematic equipment, so it is imperative to discuss upgrades or replacements before the warranty on your equipment expires.

The CARC's current policy is to retire anything that is more than 7 years old.

### What happens if the allocation expires?

If a PI does not renew cluster allocations by the due date, all users in the group will be blocked from running jobs on the cluster that allocation is linked to. If you have an extenuating circumstance making it impossible to renew on time, please contact the CARC to request an extension.

[More information on allocation expirations](allocation-expiration)
