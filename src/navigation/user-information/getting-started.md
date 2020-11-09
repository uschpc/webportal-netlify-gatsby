---
title: Getting Started
id: 1
thumbnail: /images/sr-icon-4.png
path: getting-started
parentPath: user-information
cat: navigation
parentEle: User Information
backToTopBtnFlag: true
excerpt: An introduction to the CARC for new users.
---

The information on this page is designed to provide an introductory overview for new CARC users. Links to more detailed information and complete user guides can be found at the end of each section of this page.

### What is the Center for Advanced Research Computing?

USC's Center for Advanced Research Computing (CARC) provides advanced computational research support to USC faculty and students. When the needs of researchers exceed the capabilities of a personal computer, the CARC offers its support. Examples of services offered include high-performance computing, data storage and analysis, cloud computing, secure computing for sensitive data, research computing workshops, and customized research partnerships.

Currently, the CARC supports more than 100 research groups across a variety of disciplines in the USC community.

> For more information, see our [Mission](/about/mission), [People](/about/people), and [Partnerships](/about/partnerships) pages.

### What is high-performance computing?

High-performance computing aggregates the resources from individual computers (known as nodes) into a cluster that works together to perform advanced, specialized computing jobs. Many academic fields, including epigenetics, geophysics, materials science, engineering, natural language translation, and health sciences, utilize high-performance computing to advance their research beyond what would be possible with a personal computer.

As the amount of data used in research continues to grow with the popularity of such technologies as artificial intelligence (AI) and advanced data analysis, high-performance computing is becoming increasingly necessary for technological advancement.

### Introduction to CARC systems

#### Discovery cluster

Discovery is a high-performance computing cluster, which is a collection of computers and disk arrays that are connected via fast networks. Discovery allows USC researchers to perform computing tasks, like data analyses and simulations, on a larger scale than is possible with a laptop or lab computer. The Discovery cluster is the CARC's public cluster; any CARC user can use Discovery.

The following schematic depicts the CARC cyberinfrastructure and how the parts of the cluster connect with one another:

![Cyberinfrastructure overview](/images/discovery_infra.png)

> For detailed information on the Discovery cluster, see our [Getting Started with Discovery user guide](/user-information/user-guides/high-performance-computing/discovery/getting-started-discovery) and our [System Information page](/user-information/system-information).

#### Endeavour condo cluster

Endeavour is a high-performance computing cluster like Discovery, but Endeavour is comprised of  resources that Condo Cluster Program (CCP) users lease or subscribe to, with each research group's resources dedicated for their use only. For more information on the CCP, see the [Condo Cluster Program pages](/user-information/ccp). For detailed information on the Endeavour cluster, see our [Getting Started with Endeavour user guide](/user-information/user-guides/high-performance-computing/discovery/getting-started-endeavour)

#### Storage file systems

All CARC account holders are assigned three directories where they can store files and run programs. Each of these three directories is located in the **home**, **project**, and **scratch** file systems.

Each file system serves a different purpose:

- **/home1** is a network file system for storing configuration files and personal scripts. Each CARC user has a 100 GB home directory quota.

- **/project**: Assignment to a project gives you access to a subdirectory of the /project parallel file system. Managed by a Principal Investigator, this is where you have access to 5 TB (default minimum; 10 TB maximum) of storage space (shared among the project's members), and where you can collaborate and share files with your research group. Use this high-performance file system for most of your research computing work at CARC.

- **/scratch** and **/scratch2** are two parallel file systems that are shared among all CARC users. These file systems can be used for storing data temporarily and running I/O intensive jobs. Each CARC user receives a 10 TB quota for each of /scratch and /scratch2.

> For detailed information on the different storage systems available, see our [Storage File Systems user guide](/user-information/user-guides/data-management/storage-file-systems) and our [System Information page](/user-information/system-information).

### Accessing CARC systems

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
How to log in to Discovery and Endeavour and run jobs.

[Data Management](/user-information/user-guides/data-management)  
An overview of the different storage directories available to you, and instructions on transferring files between your personal computer and CARC systems.

[Software and Programming](/user-information/user-guides/software-and-programming)  
Information on the software available on CARC systems, as well as instructions for installing your own software.

[Research Computing User Portal](/user-information/user-guides/research-computing-user-portal)  
How to create and manage your projects and resource allocations.

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

Every week, the Research Facilitation & Applications team hosts office hours for CARC users to ask questions about anything related to research computing. No appointments are necessary, and all levels of users and questions are welcomed. Currently, all office hours are taking place via Zoom **every Tuesday from 2:30-5:00 pm**. Office hours are drop-in and do not require registration, but you will need a USC NetID to join the Zoom meeting.

>For more information, see our [Office Hours and Consultations page](/education-and-outreach/office-hours).

#### Frequently asked questions

See our extensive [Frequently Asked Questions page](/user-information/frequently-asked-questions) for answers to common questions about CARC accounts, different cluster resources, and using software on CARC systems.

#### Discourse user forum

The CARC uses [Discourse](https://www.discourse.org/), a question-and-answer community forum, to facilitate discussion and knowledge sharing among users. The User Forum is a great resource for discussing CARC-related topics, asking non-urgent technical questions, and sharing ideas. The CARC team monitors the forum for questions, but users are also encouraged to interact with each other.

>You can access the CARC's User Forum [here](https://hpc-discourse.usc.edu/).

#### Ticket submission

If you're experiencing an issue with system resources or your CARC account and you're unable to find a solution to your problem using the above resources, please [submit a help ticket](/user-information/ticket-submission) to the CARC team.
