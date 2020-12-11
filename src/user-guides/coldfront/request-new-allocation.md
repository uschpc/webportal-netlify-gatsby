---
author: James Hong
id: 3
date: 2020-10-13T00:00:00.000Z
title: Request New Allocation
path: request-new-allocation
route: User Guides
parentPath: user-information/user-guides/research-computing-user-portal
cat: coldFront
parentPage: User Guides
sideMenuParent: Research Computing User Portal
excerpt: How to request a new allocation for your project in the Research Computing User Portal.
backToTopBtnFlag: true
---

Once a project has been created, an allocation to a computing and/or storage resource must also be requested. Allocations indicate what resources each project has access to and any limits associated with that access. Allocations expire either by date or when a limit is reached.

### Types of allocations

The CARC has three types of allocations that can be requested in the User Portal: computing resources on Discovery, computing resources on Endeavour (subscription-based), and storage space.

#### Discovery computing resources

The CARC's main computing resource available to all USC faculty/staff and their students/collaborators. Discovery is a shared resource and free to use under most circumstances, although larger allocations can be requested for a fee. There are five allocation sizes available; see "Requesting an allocation" below for details.

#### Endeavour computing resources (subscription-based)

The CARC's condo cluster, part of the Condo Cluster Program (CCP). The CCP allows research groups to subscribe to their selected number of compute and storage resources on a yearly basis. The resources that a research group subscribes to will be dedicated for use by their condo job queue. See the CARC's [Condo Cluster Program Information page](/user-information/ccp/program-information) for details.  

The CARC also offers a traditional, five-year purchase model for condo resources. See the [Request New Condo Purchase user guide](/user-information/user-guides/research-computing-user-portal/request-new-purchase) for more information.

#### Storage space

Storage space in the /project file system. CARC provides PIs up to 10 TB of space across projects for free, but more can be purchased if needed.

### Requesting an allocation

First, click on the name of the project that you are requesting an allocation for to be taken to that project's Project Detail page.

![ColdFront Project page](/images/coldfront_project_detail.gif)

To request a new allocation for a resource, click on the green Request Resource Allocation button on the Project Detail page.

You will then be taken to the Request New Allocation page:

![ColdFront New Allocation](/images/coldfront_allocationnew.png)

The Resource drop-down list contains the following resource options (only resources for your project's cluster type, Discovery or Endeavour, are selectable):

* **Discovery (Cluster Partition)**: The CARC's main computing resource. Shared and typically free to use.  
  * **Compute size**:
      * **Small**: 200,000 CPU/service unit hours (default and free)
      * **Medium**: 500,000 CPU/service unit hours (annual charges may apply)
      * **Large**: 1,000,000 CPU/service unit hours (annual charges may apply)
      * **Class**: 10,000 CPU/service unit hours per semester (free, for faculty teaching classes)
      * **Graduate research**: 100,000 CPU/service unit hours (free, for students conducting research work that is separate from a PI's main research project)
* **Endeavour (Cluster Partition) - Condo Subscription**: Paid service, part of the [Condo Cluster Program](/user-information/ccp). PIs will receive an email once resources are available (typically 24-48 hours after the request). 
  * **Nodetype**:
      * Lenovo NX360 with 16 CPU cores and 64 GB memory: $800 per year 
      * Lenovo NX360 with 20 CPU cores and 64 GB memory: $1,000 per year
* **Project Storage (Storage)**: Storage space in the /project file system. CARC provides PIs up to 10 TB of space across projects for free, but more can be purchased if needed.
  * **Entered in increments of 5 TB**.

Select the resource you'd like access to and provide a justification for access to that resource. Your justification should include information on how you'll be using the resource and how many CPU/service unit hours you anticipate needing to use.

If required, select the users on your project to which you'd like to grant access to this allocation.

If you're requesting a condo subscription resource, you'll have to read the Terms and Conditions before completing your request. If you have any questions about these Terms and Conditions, please contact us at <carc-condo@usc.edu> before submitting your request.

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
