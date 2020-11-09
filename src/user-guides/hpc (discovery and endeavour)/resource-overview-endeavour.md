---
author: Cesar Sul
id: 4
date: 2020-11-04T12:00:00.387Z
title: Endeavour Resource Overview
path: endeavour-resources
parentPath: user-information/user-guides/high-performance-computing
cat: discoveryGuides
parentPage: User Guides
sideMenuParent: High-Performance Computing
backToTopBtnFlag: true
excerpt: Information on compute nodes and job limits for the Endeavour condo cluster.
---

The Center for Advanced Research Computing's high-performance computing condo cluster, Endeavour, has over XX compute nodes available for users to run their jobs on. These nodes are only available to the researchers that lease/subscribe to them. For information on the CARC's Condo Cluster Program (CCP), see the [Condo Cluster Program pages](/user-information/ccp).

For general CARC system specifications, see our [System Information page](/user-information/system-information).

### Compute nodes

The chart below describes the various Linux computing partitions available on Endeavour, their names, and information on the partitions’ computing power. These nodes are restricted to researchers with subscriptions to the relevant partition.

|Partition|Nodes|CPUs|Memory (GB)|CPU type|GPUs|Nodelist |
|---|---|---|---|---|---|---|
|albash|3 |20|64|xeon-2640v4||d15-[42-44]|         
|albash|14|20|128|xeon-2640v4|gpu:p100:2(S:0-1)|e23-[03-16]|
|nmlhpcc|2|24|94|xeon-4116||d11-[48-49]|
|nmlhpcc|2|20|64|xeon-2640v4||d15-[09-10]|
|nmlhpcc|5|16|64|xeon-2640v3||e06-[40,42,44,46,48]|
|shared |1|16|64|xeon-2640  |gpu:k20:1(S:0)|b11-45 |             
|shared |3|16|64|xeon-2640  |gpu:k20:2(S:0-1)|b11-[46-48]|
> Note: This information is current as of October 30, 2020.

### Job limits

Job limits on Endeavour are more flexible than on Discovery and can be configured on a partition basis, but we still must enforce time limits for maintainence.

|Queue (or partition)| Default run time| Maximum run time|  Maximum concurrent cores|   Maximum number of jobs or job steps (running or pending)|
|---|---|---|---|---|
|TBD  | 30 minutes| 30  minutes| 24    | 5     |
