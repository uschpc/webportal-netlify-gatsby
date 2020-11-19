---
author: Yaseen A.
id: 1
date: 2020-06-04T00:00:00.00Z
title: Program Information
routeCat: route
routePath: user-information/ccp
path: program-information
parentPath: user-information/ccp
cat: condoClusterProgram
#Uncomment this to have this page as a landing page with subpages (like user guide landing pages)
#Current subpages set up are pricing.md and program-overview.md
#uniqID: enrollment
parentPage: User Information
parentEle: User Information
excerpt: Information on the Condo Cluster Program, its purchase models, and pricing.
backToTopBtnFlag: true
---

In an effort to provide the most comprehensive support to the USC research community, the Center for Advanced Research Computing offers researchers a way to customize their experience with advanced computing systems through the Condo Cluster Program. 

The Condo Cluster Program (CCP) is a service available to USC researchers that require dedicated resources for their work. The CCP gives researchers the convenience of having their own dedicated compute nodes on an HPC cluster system, without the responsibility of purchasing and maintaining the nodes themselves.

The compute nodes dedicated to CCP researchers form the Endeavour condo cluster, a high-performance computing cluster similar to the CARC's general use cluster, Discovery. All existing condo nodes from CARC projects were migrated to Endeavour and the new cluster was officially launched in November 2020.

The CCP operates on two different models - an annual subscription model and a traditional system purchase model - to provide researchers with flexible and efficient options for their resources.

### Annual subscription model

The annual subscription-based model allows research groups to subscribe to their selected number of compute and storage resources on a yearly basis. The resources that a research group subscribes to will be dedicated for use by their condo job queue. All of the hardware is purchased and maintained by the CARC throughout the course of the subscription term.

At the end of the annual subscription period (typically at the end of the fiscal year, June 30), researchers can choose to renew or discontinue use of their resources. In the case of renewal, researchers will have the option to increase or decrease the size of their compute pool or storage space. 

Currently, the CARC offers two different compute node configurations to choose from. The table below summarizes the technical specifications and pricing of available nodes.

| Model | # of cores per node | GHz | Memory (GB) | Price per year |
|-|-|-|-|-|
| Lenovo NX360 | 16 | 2.6 | 64 GB | $400 |
| Lenovo NX360 | 20 | 2.6 | 64 GB | $500 |

> We recognize that these are not the latest and greatest compute nodes currently on the market, and the low subscription price reflects this. We are currently in the process of purchasing a new batch of compute nodes for the Condo Cluster Program. The COVID-19 situation has delayed this process, but the new compute nodes will be available for subscription on the Endeavour cluster in early 2021. 

Subscriptions to condo compute nodes can be requested via the CARC's User Portal. See the [Request New Allocation](/user-information/user-guides/research-computing-user-portal/request-new-allocation) user guide for details on how to request a condo subscription for your research project.

### Traditional purchase model

The second option for CCP resources is the traditional system purchase model. This is a useful option when research groups need to make a bulk purchase using a research grant or departmental budget, and it is also useful for grant proposal budget planning purposes.

Like the annual subscription model, research groups will have exclusive access to the resources they purchase. Prinicpal Investigators (PIs) only need to purchase compute nodes (CPUs and/or GPUs), cables, and a 5-year manufacturer’s warranty service. Other equipment and services, including racks, network switches, power and cooling, system support, and machine room operation in our data center, is paid for by the university. 

A condo purchase request is possible during the CARC's annual condo purchase request period, which will occur during the fall semester. The whole process of purchase request, system configuration, vendor selection, purchasing, system installation, and deployment typically takes six months. The purchased resources will be in service for 5 years, and after this service period, the CARC will decommission these condo nodes. 

The following table summarizes the CPU and GPU nodes that will be available for purchase using the traditional purchase model:

#### CPU nodes

| CPU | CPU quantity | Memory (GB) | GPU | GPU quantity |
|-|-|-|-|-|
| AMD EPYC 7542 2.90GHz, 32C/64T, 128M Cache | 2 | 256 GB | N/A | N/A |
| AMD EPYC 7542 2.90GHz, 32C/64T, 128M Cache | 2 | 512 GB | N/A | N/A |
| --- |  |  |  |  |
| Intel Xeon Gold 6248R Processor 24-Core 3.0GHz 35.75MB Cache (205W) | 2 | 192 GB | N/A | N/A |
| Intel Xeon Gold 6248R Processor 24-Core 3.0GHz 35.75MB Cache (205W) | 2 | 384 GB | N/A | N/A |

#### GPU nodes

| CPU | CPU quantity | Memory (GB) | GPU | GPU quantity |
|-|-|-|-|-|
| AMD EPYC 7282 Processor 16-core 2.80GHz 64MB Cache (120W) | 1 | 128 GB | RTX 4000 | 2 |
| AMD EPYC 7282 Processor 16-core 2.80GHz 64MB Cache (120W) | 1 | 128 GB | RTX 5000 | 2 |
| AMD EPYC 7282 Processor 16-core 2.80GHz 64MB Cache (120W) | 2 | 256 GB | RTX 5000 | 4 |
| --- |  |  |  |  |
| AMD EPYC 7532 Processor 32-core 2.40GHz 256MB Cache (200W) | 2 | 256 GB | V100s | 2 |
| AMD EPYC 7532 Processor 32-core 2.40GHz 256MB Cache (200W) | 2 | 256 GB | V100s | 4 |
| AMD EPYC 7532 Processor 32-core 2.40GHz 256MB Cache (200W) | 2 | 256 GB | A100 | 2 |
| --- |  |  |  |  |
| Intel Xeon Silver 4216 Processor 16-Core 2.1GHz 22MB Cache (100W) | 1 | 192 GB | RTX 4000 | 2 |
| Intel Xeon Silver 4216 Processor 16-Core 2.1GHz 22MB Cache (100W) | 1 | 192 GB | RTX 5000 | 2 |
| Intel Xeon Silver 4216 Processor 16-Core 2.1GHz 22MB Cache (100W) | 2 | 192 GB | RTX 5000 | 4 |
| --- |  |  |  |  |
| Intel Xeon Gold 6248R Processor 24-Core 3.0GHz 35.75MB Cache (205W) | 2 | 192 GB | V100s | 2 |

> The CARC is still in the process of preparing for the annual condo purchase request period for 2020. Once the request period opens, PIs will use the [User Portal](/user-information/user-guides/research-computing-user-portal) to select and purchase their desired condo resources. See the [Request New Condo Purchase](/user-information/user-guides/research-computing-user-portal/request-new-condo-purchase) user guide for detailed instructions.

### Storage resources

While the Endeavour condo cluster is a separate system from the general use Discovery cluster, all of the CARC’s [storage file systems](/user-information/user-guides/data-management/storage-file-systems) are mounted on Endeavour and are accessible from its login (endeavour.usc.edu) and compute nodes.

Each file system serves a different purpose:

- **/home1** is a network file system for storing configuration files and personal scripts. Each CARC user has a 100 GB home directory quota.

- **/project**: Each member of a research project has access to 5 TB (default minimum; 10 TB maximum) of storage space (shared among the project's members) for most of their research computing work at the CARC. This 10 TB maximum can be increased in 5 TB increments at a cost of $40/TB/year.

- **/scratch** and **/scratch2** are two parallel file systems that are shared among all CARC users. These file systems can be used for storing data temporarily and running I/O intensive jobs. Each CARC user receives a 10 TB quota for each of /scratch and /scratch2.

### Endeavour condo cluster

The Endeavour condo cluster is a dedicated HPC system for Condo Cluster Program users. Users log in to the cluster at **endeavour.usc.edu** to access their condo nodes. Endeavour's application stack and module system are identical to those of the Discovery cluster; users won’t see any difference between Endeavour and Discovery when using applications. 

One key difference between Endeavour and Discovery is configuration of the Slurm job scheduler. The Slurm configurations on Discovery are geared for use on a shared cluster system, but on Endeavour, each research group can have customized Slurm configurations on their condo nodes. For more information about custom Slurm configurations on Endeavour, please contact us at <carc-condo@usc.edu>. 

Detailed information on the Endeavour condo cluster, including how to log in and access the cluster, can be found in the [Getting Started with Endeavour user guide](/user-information/user-guides/high-performance-computing/getting-started-endeavour). User guides applicable to both Endeavour and Discovery can be found in the [High-Performance Computing](/user-information/user-guides/high-performance-computing) user guides section.

### What's next?

This is just a starting point for the new Condo Cluster Program. The CARC is currently developing more detailed policies. More information will be available in the next 6 months as we upgrade the Endeavour cluster and add more features for CCP users. If you have any questions about the CCP, please contact us at <carc-condo@usc.edu>. 