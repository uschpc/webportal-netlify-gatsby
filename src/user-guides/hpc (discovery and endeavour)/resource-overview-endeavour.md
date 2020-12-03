---
author: Cesar Sul
id: 4
date: 2020-11-04T12:00:00.387Z
title: Endeavour Resource Overview
path: endeavour-resources
parentPath: user-information/user-guides/high-performance-computing
cat: discoveryGuides
parentPage: User Guides
sideMenuParent: Discovery
backToTopBtnFlag: true
excerpt: Information on compute nodes and job limits for the Endeavour condo cluster.
---

The Center for Advanced Research Computing's high-performance computing condo cluster, Endeavour, is comprised of compute nodes that are dedicated for use by researchers that lease/subscribe to them. For information on the CARC's Condo Cluster Program (CCP), see the [Condo Cluster Program pages](/user-information/ccp).

For general CARC system specifications, including information on our file systems and operating system, see our [System Information page](/user-information/system-information).

### Compute nodes

The CCP offers both an annual subscription-based pricing model and a traditional system purchase pricing model, and the Endeavour cluster includes nodes for both pricing models. Below are the specifications for each model. 

#### Subscription model:

| Model | # of cores per node | GHz | Memory (GB) | Price per year |
|-|-|-|-|-|
| Lenovo NX360 | 16 | 2.6 | 64 GB | $800 |
| Lenovo NX360 | 20 | 2.6 | 64 GB | $1,000 |

> We recognize that these are not the latest and greatest compute nodes currently on the market, and the low subscription price reflects this. We are currently in the process of purchasing a new batch of compute nodes for the Condo Cluster Program. The COVID-19 situation has delayed this process, but the new compute nodes will be available for subscription on the Endeavour cluster in early 2021. 

[More information here](/user-information/ccp/program-information/ccp-subscription).

#### Purchase model:

#### CPU nodes

| CPU | CPU quantity | Memory (GB) | Estimated price |
|-|-|-|-|-|
| Dual AMD EPYC 7542 32-core 2.90GHz | 2 | 256 GB | $12K |
| Dual AMD EPYC 7542 32-core 2.90GHz | 2 | 512 GB | $16K |
| --- |  |  |  |  |
| Dual Intel Xeon Gold 6248R Processor 24-core 3.0GHz | 2 | 192 GB | $11K |
| Dual Intel Xeon Gold 6248R Processor 24-core 3.0GHz | 2 | 384 GB | $14K |

#### GPU nodes

| CPU | CPU quantity | Memory (GB) | GPU | GPU quantity | Estimated price |
|-|-|-|-|-|-|
| Dual AMD EPYC 7282 Processor 16-core 2.80GHz | 2 | 256 GB | RTX 5000 | 2 | $12.5K |
| --- |  |  |  |  |  |
| Dual AMD EPYC 7532 Processor 32-core 2.90GHz | 2 | 256 GB | V100s | 2 | $33K |
| Dual AMD EPYC 7532 Processor 32-core 2.90GHz | 2 | 256 GB | A100 | 2 | $40K |
| --- |  |  |  |  |  |
| Dual Intel Xeon Gold 4216 Processor 16-core 2.1GHz | 2 | 192 GB | RTX 5000 | 2 | $11K |
| Quad Intel Xeon Gold 4216 Processor 16-core 2.1GHz | 2 | 192 GB | RTX 5000 | 4 | $13K |
| --- |  |  |  |  |  |
| Dual Intel Xeon Gold 6248R Processor 24-core 3.0GHz | 2 | 192 GB | V100s | 2 | $31K |

> Example system specifications (Dell and HPE/Exxact) for each model of node can be downloaded from GitHub [here](https://github.com/uschpc/documentation-public/blob/master/20-21%20Example%20Condo%20Node%20Configs.xlsx). Final configurations of system specs will depend on system availability from the vendor.

[More information here](/user-information/ccp/program-information/ccp-purchase).

### Job limits

Job limits on Endeavour are more flexible than on Discovery and can be configured on a partition basis, but we still must enforce time limits for maintainence.

**Default run time**: 30 minutes  
**Maximum run time**: 30 minutes  
**Maximum concurrent cores**: 24  
**Maximum number of jobs or job steps (running or pending)**: 5  

More information on Endeavour jobs can be found in the [Running Jobs user guide](/user-information/user-guides/high-performance-computing/running-jobs).