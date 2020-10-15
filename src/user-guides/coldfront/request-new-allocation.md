---
author: James Hong
id: 4
date: 2020-10-13T00:00:00.000Z
title: Request New Allocation
path: request-new-allocation
route: User Guides
parentPath: user-information/user-guides/high-performance-computing/research-computing-user-portal
cat: coldFront
parentPage: User Guides
sideMenuParent: Research Computing User Portal
excerpt: How to request a new allocation for your project in the Research Computing User Portal.
backToTopBtnFlag: true
---

Once a project has been created, an allocation to a computing and/or storage resource must also be requested. Allocations indicate what resources each project has access to and any limits associated with that access. Allocations expire either by date or when a limit is reached.

### Requesting an allocation

First, click on the name of the project that you are requesting an allocation for to be taken to that project's Project Detail page.

![ColdFront Project page](/images/coldfront_project_detail.gif)

To request a new allocation for a resource, click on the green Request Resource Allocation button on the Project Detail page.

You will then be taken to the Request New Allocation page:

![ColdFront New Allocation](/images/coldfront_allocationnew.png)

The Resource drop-down list contains the following resource options (only resources for your project's cluster type are selectable):

* **Discovery (Cluster Partition)**: The CARC's main computing resource available to all USC faculty/staff and their students/collaborators. Once your allocation is approved, users will be provisioned in the Discovery cluster. Users can access CARC systems via SSH 1-2 hours after the allocation has been approved.
* **size:**
  * **small**: 200,000 CPU/service unit hours (default and free)
  * **medium**: 500,000 CPU/service unit hours (annual charges may apply)
  * **large**: 1,000,000 CPU/service unit hours (annual charges may apply)
  * **class**: 10,000 CPU/service unit hours per semester (free, for faculty teaching classes)
  * **graduate research**: 100,000 CPU/service unit hours (free, for students conducting research work that is separate from a PI's main research project)
* **Project Storage (Storage)**: Additional storage you can purchase if you require more than the initial 10 TB that the CARC provides to each PI for free.

Select the resource you'd like access to and provide a justification for access to that resource. Your justification should include information on how you'll be using the resource and how many CPU/service unit hours you anticipate needing to use.

If required, select the users on your project that you'd like to grant access to this allocation.

Click the Submit button when done.

> Note: If there is a resource you think you should have access to but it's not in the drop-down list on the Request New Allocation page, please [submit a help ticket](/user-information/ticket-submission). If you would like access to a departmental server or a colleague's cluster, the PI responsible for that resource may need to request the allocation for you.  

#### Allocation Status: New
Your allocation will now display on your Project Detail page with a status of "New".

![ColdFront Allocation Status Pending/New](/images/coldfront_allocationstatusnew.png)

#### Allocation Status: Active
Once verified and approved by the CARC, the status will be changed to "Active" and you will have access to that resource for your project:

![ColdFront Allocation Status Active](/images/coldfront_allocationstatusactive.png)

### Project Review
If you have not completed a project review in the last 365 days, you will be required to do this before requesting any allocations.  You will see this error:   

![ColdFront Project Review](/images/coldfront_projectreviewnotification.png)

More information about the project review process can be found [here](yearly-project-renewal).

### Increasing an existing storage allocation

If you have an **existing storage allocation** but would like to increase the amount of storage, please [submit a help ticket](/user-information/ticket-submission) under the "Accounts/Access" category. Please include your project ID, desired allocation size, and reason for this increase. The CARC team will consult with you to determine your needs and the total cost.

### PIs with departmental clusters

If you would like a colleague to have access to your resource, please [submit a help ticket](/user-information/ticket-submission) to request this. It's important that you let the CARC know if that colleague is allowed to add users from their research group to your cluster. You will not be able to see any allocations or users that are added if this access is given.
