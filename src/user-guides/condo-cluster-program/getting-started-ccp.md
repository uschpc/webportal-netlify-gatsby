---
author: Andrea Renney
id: 1
date: 2020-10-16T00:00:00.000Z
title: Getting Started with the Condo Cluster Program
excerpt: An overview for CARC users in the Condo Cluster Program (CCP).
path: getting-started-condo
route: User Guides
routePath: user-information/user-guides/condo-cluster-program
parentPath: user-information/user-guides/condo-cluster-program
cat: condoCluster
parentPage: User Guides
---

The information on this page is designed to provide an introductory overview for new Condo Cluster Program (CCP) users. Links to more detailed information and complete user guides can be found at the end of each section of this page.

For a general overview of the Center for Advanced Research Computing, see our main [Getting Started page](/user-information/getting-started).

### What is the Condo Cluster Program?

The CARC's Condo Cluster Program (CCP) is a service available to USC researchers that require dedicated computing and/or storage resources for their work. The CCP gives researchers the convenience of having their own dedicated compute nodes, without the responsibility of purchasing and maintaining the nodes themselves. The CCP operates on both an annual subscription-based model, with research groups subscribing to their selected number of compute and storage resources on a yearly basis, as well as an outright purchase basis, with research groups "leasing" compute or storage resources from the CARC for a fixed term (e.g., five years). All hardware is maintained by the CARC throughout the course of the subscription or lease term.

The resources that a researcher leases or subscribes to will be dedicated for use by their condo queue. Researchers also have the option to participate in a shared "Community Queue" of nodes. The Community Queue grants them access to idle nodes in other researchers' condo queues, giving them the flexibility to run larger jobs without having to invest in more dedicated resources.

> For more information on CCP policies, see our main [Condo Cluster Program page](/user-information/ccp).

### What is the difference between leasing resources and subscribing to resources?

Our subscription-based model allows researchers to subscribe to computing and storage resources on a yearly basis. The subscription model is ideal for researchers who anticipate changes to their resource requirements or for researchers who only require CCP resources for a shorter period of time (minimum of one year). The CARC purchases and maintains the resources and all related hardware throughout the course of the subscription term.

Our outright purchase model is the classic pricing model that we've used for condo purchases in previous years. Researchers choose the resources they need and the CARC purchases and maintains them for the lease term (e.g., five years). The leasing researchers effectively own their resources, and at the end of their lease period, the resources are retired. The CARC maintains the resources and all related hardware throughout the course of the lease term.

For pricing and policies, see our [Pricing page](/user-information/ccp/pricing).

### What's the difference between the CCP's Endeavour cluster and the Discovery cluster?

The Discovery cluster is a "public" cluster in the sense that it is open to all CARC users to run their jobs and store their data. The Endeavour cluster is comprised of the condo resources that CCP users lease or subscribe to, but each research group's own resources are for their dedicated use only. 

### Introduction to CCP systems

#### Endeavour cluster

Endeavour is a high-performance computing cluster, which is a collection of computers and disk arrays that are connected via fast networks. High-performance computing allows USC researchers to perform computing tasks, like data analyses and simulations, on a larger scale than is possible with a laptop or lab computer.



#### Storage file systems

All CARC account holders are assigned three directories where they can store files and run programs. Each of these three directories is located in the **home**, **project**, and **scratch** file systems.

Each file system serves a different purpose:

- **/home1** is a network file system for storing configuration files and personal scripts. Each CARC user has a 100 GB home directory quota.

- **/project**: Assignment to a project gives you access to a subdirectory of the /project parallel file system. Managed by a Principal Investigator, this is where you have access to 5 TB (default minimum; 10 TB maximum) of storage space (shared among the project's members), and where you can collaborate and share files with your research group. Use this high-performance file system for most of your research computing work at CARC.

- **/scratch** and **/scratch2** are two parallel file systems that are shared among all CARC users. These file systems can be used for storing data temporarily and running I/O intensive jobs. Each CARC user receives a 10 TB quota for each of /scratch and /scratch2.

> For detailed information on the different storage systems available, see our [Storage File Systems user guide](/user-information/user-guides/data-management/storage-file-systems) and our [System Information page](/user-information/system-information).

### Accessing CCP systems

All USC students, staff, and faculty have access to the CARC's systems for their research projects. In order to access the CARC's systems, you must either be the Principal Investigator (PI) of a research project or an authorized member of a PI's research project.

CARC systems are accessed using your USC NetID and password, so there is no additional requirement for CARC-specific account creation.

>Note: Your USC NetID is the first part of your USC email address (e.g., ttrojan@usc.edu's NetID is ttrojan).

Duo Two-Factor Authentication is also required. If you have not already signed up for Duo on your USC NetID account, please visit [this page](https://itservices.usc.edu/duo/enroll) to enroll.

Access to and use of resources is based on participation in projects. Project setup and resource allocation requests must be made by a project's PI using the [Research Computing User Portal](https://hpcaccount.usc.edu/).

> For more information on accounts, see our [Accounts and Allocations page](/user-information/accounts).

### How to use the systems

When using CARC systems, you will notice several differences from your desktop or laptop environment:

- The interface is **command-line driven** (no graphical user interface)
- The systems use the **CentOS Linux** operating system (not macOS or Windows)
- You submit your programs to a **remote batch processing system**, or job scheduler, to run them

The CARC has prepared user guides specific to its systems in the following categories:

[High-Performance Computing](/user-information/user-guides/high-performance-computing)  
How to log in to Discovery, run jobs, and manage your projects and allocations.

[Data Management](/user-information/user-guides/data-management)  
An overview of the different storage directories available to you, and instructions on transferring files between your personal computer and Discovery.

[Software and Programming](/user-information/user-guides/software-and-programming)  
Information on the software available on Discovery, as well as instructions for installing your own software.

>Our main user guides page can be accessed [here](/user-information/user-guides).

### Resources for deeper learning

#### Workshop classes

Each month, the CARC's Research Facilitation & Applications team offers a number of free workshops designed to introduce users to the computing cluster and its features. The team is frequently developing new workshops, including workshops on useful software and programming languages.

All workshops are approximately two hours in length and are offered several times a year.

>For information on the different workshops that the CARC's Research Facilitation & Applications team offers on a rotating basis, see our [Seminars and Workshops page](/education-and-outreach/seminars-and-workshops). For a schedule of upcoming workshops, see our [Events page](/news-and-events/events).

#### External resources

If you want to improve your overall understanding of research computing, the CARC has compiled a list of external resources that may be helpful for learning about research computing, programming languages, and software used by CARC systems.

>You can view our Other Resources page [here](/education-and-outreach/other-resources).

### How to get help

#### Weekly office hours

Every week, the Research Facilitation & Applications team hosts an office hour for CARC users to ask questions about anything related to research computing. No appointments are necessary, and all levels of users and questions are welcomed. Currently, all office hours are taking place via Zoom **every Tuesday from 2:30-5:00 pm**. Office hours are drop-in and do not require registration, but you will need a USC NetID to join the Zoom meeting.

>For more information, see our [Office Hours and Consultations page](/education-and-outreach/office-hours).

#### Frequently asked questions

See our extensive [Frequently Asked Questions page](/user-information/frequently-asked-questions) for answers to common questions about CARC accounts, different cluster resources, and using software on CARC systems.

#### Discourse user forum

The CARC uses [Discourse](https://www.discourse.org/), a question-and-answer community forum, to facilitate discussion and knowledge sharing among users. The User Forum is a great resource for discussing CARC-related topics, asking non-urgent technical questions, and sharing ideas. The CARC team monitors the forum for questions, but users are also encouraged to interact with each other.

>You can access the CARC's User Forum [here](https://hpc-discourse.usc.edu/).

#### Ticket submission

If you're experiencing an issue with system resources or your CARC account and you're unable to find a solution to your problem using the above resources, please [submit a help ticket](/user-information/ticket-submission) to the CARC team.
