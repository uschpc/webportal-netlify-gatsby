---
title: "Upcoming Changes for USC Research Computing: Summer and Fall 2020"
author: Andrea Renney
path: upcoming-changes-summer-fall-2020
parentEle: News and Events
date: 2020-06-18T18:19:38.387Z
parentPath: news-and-events/news-and-announcements
cat: news
excerpt: Technical upgrades, increased user support, and exciting new services
  are planned for the next few months
thumbnail: /images/cromwellfield.jpg
---
For the first half of 2020, USC Research Computing has been working on many different projects to improve its service quality and the experience for our users. While some of our legacy systems have been experiencing issues recently, the Research Computing team has been working relentlessly to deliver improved high-performance computing systems and services that will change the computing environment, user support and education, and overall business model of USC Research Computing. There are many changes scheduled to be announced during the summer and the fall 2020 semester. Below is a summary of the many exciting changes in the works.

1. **A few improvements that have already been completed:**

•	 /rcf-proj2 & /rcf-proj3: Our old project file system had a stability issue with NSF version 4 and its old Solaris platform, and this was causing frequent system downtime. In order to keep users’ data safe, we had to make the file system read-only in April.

•	/scratch (800TB): This is a new parallel file system running ZFS/BeeGFS. It was originally planned to be a temporary scratch file system with a data purging policy, but it is now serving as a semi-permanent data storage space until the new /project file system is available.

•	/staging (230TB): The old staging file system (230TB) was retired in early June, as the storage space wasn’t large enough to keep up with users’ needs. We have since upgraded /staging to another parallel file system called /scratch2.

•	/scratch2 (700TB): This is another ZFS/BeeGFS parallel file system available as a scratch space. At the moment, the system is available for long-term data storage without a data purging policy. The purging will resume once the new project file system is available and data migration is completed.

•	hpc-transfer upgrade: The old hpc-transfer was decommissioned. A new system is now connected to a faster uplink switch with higher bandwidth (100GE) and low latency. We plan to add a few more data transfer tools, such as GlobusConnect and IBM Aspera.

2. **New cluster: Discovery**

Our new Research Computing cluster, Discovery, will debut in July to serve the USC research community. The new system comes with many changes that will provide better usability and a more sophisticated application layer. Noticeable improvements include:

•	/home directory: Every user on Discovery will get a 100GB allocation of home directory space. The home directory provides 3-week snapshots with daily backups, so if you accidentally delete some of your important data, you can recover the data if the deletion was within the last three weeks.

•	Rebuilt software stack: We have rebuilt a couple hundred new applications on the cluster, and the new application stack was built with the Lmod/Spack module build system. Users can use available software via module loading, and necessary environment variables and other dependencies associated with libraries, compilers, and MPI stacks are automatically managed. More details and instructions will be available in our new user guides.

•	Multi-jobs on a single node: The new Slurm policy is now supporting multiple jobs running on a single node. So far, we have used a “single-job on a single-node” policy in order to avoid unexpected system crashes. With a new Slurm configuration, multiple jobs can share one compute node, increasing system efficiency and reducing waiting time in the queue significantly.

3. **New Project file system**

A new, high-performing parallel file system will be deployed this summer. This new storage system will provide 10PB of disk space and will replace the current /rcf-proj file systems. We expect this new file system will out-perform the current project file system with much more room for data. The pricing for this file system has not been finalized, but it will be within a very reasonable range and much more affordable than any of the public cloud storage services.

4. **New Condo Cluster Program (CCP)**

We will continue to support the condo cluster system, but it will have some changes in its operation model. Rather than operating based on hardware ownership, we will utilize an annual subscription model. Researchers will be able to purchase computing resources (in the number of compute nodes or cores) for their annual needs, and they will be able to adjust the scale of their resources when renewing. The new model provides much more flexibility for users in terms of resource choices, and a much faster setup process without waiting through the entire system purchasing and installation process. The new business model and its new policies have been developed, and the new Condo Cluster Program will be launched in the fall semester of 2020.

5. **New process for resource allocation management**

We are introducing a new allocation and project management process. It is similar to what we currently use, but with a few major differences:

•	Users must be PhD-level researchers (faculty, postdoc, research scientists) to be eligible to be a PI.

•	Each PI will need to set up a project (or multiple projects) via an online user portal (more details in the next section), and PIs will be able to add/remove users for themselves.

•	Once the project is set up, PIs can request resources (either compute nodes or storage space), and each resource should be associated with a PI’s project.

•	Allocations will have four tiers: small (up to 200K SUs**),* medium (up to 500K SUs), large (up to 1M SUs), and special (more than 1M SUs). Each tier will have a different review & approval process.

\*SU (System Unit): An hour of a CPU core time on a cluster system.

6. **New website & user portal**

A brand-new website for USC Research Computing will be launched in the summer of 2020. It comes with exciting services including all-new User Guides, an integrated Q&A platform for FAQs and discussions, and online user training and workshop materials. One of the most exciting features of the new website is the built-in user portal that will allows users to see their project information, allocation balance, and the system usage of their projects via a user dashboard. The project and allocation request and management process described in the previous section will be available as self-service features. Detailed information on system utilization and users’ job status will also be available based on each user’s project and allocation status on the system.

7. **Data archiving service**

For those users who need an extra copy of their data, or even mirrored data archiving at another location (e.g., at Clemson University) for disaster recovery, we will offer a data archiving service for an extra fee. This data archiving service is jointly offered with the USC library and the Shoah Foundation, who is the world-leading expert in digital restoration and data archiving services. The data archiving service will be available from the fall semester of 2020.
