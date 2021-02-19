---
author: Cesar Sul
id: 3
date: 2021-02-18T12:00:00.387Z
title: Discovery Resource Overview
path: discovery-resources
parentPath: user-information/user-guides/high-performance-computing
cat: discoveryGuides
parentPage: User Guides
sideMenuParent: High-Performance Computing
backToTopBtnFlag: true
excerpt: Information on Discovery's compute nodes and job limits.
---

The Center for Advanced Research Computing's general use high-performance computing cluster, Discovery, has over 400 compute nodes available for users to run their jobs on.

For general CARC system specifications, see our [System Information page](/user-information/system-information).

### Partitions and compute nodes

There are a few Slurm partitions available on Discovery, each with a separate job queue. These are general-use partitions available to all researchers. The table below describes the intended purpose for each partition.

| Partition | Purpose |
|---|---|
| main    | Serial and small-to-medium parallel jobs (single node or multiple nodes) |
| epyc-64 | Medium-to-large parallel jobs (single node or multiple nodes) |
| oneweek | Long-running jobs (up to 7 days) |
| debug   | Short-running jobs for debugging purposes |

Each partition has a different mix of compute nodes. The table below describes the available nodes on each of the partitions. Typically, each node has two sockets with one processor each and an equal number of cores per processor; in the table below, the CPUs column refers to logical CPUs such that 1 logical CPU = 1 core = 1 thread. In addition, please note that the maximum available memory per node for jobs is actually a few GB less than listed in the Memory column because some memory is reserved for system overhead.

|Partition|Nodes|CPUs|Memory (GB)|CPU type|CPU freq|GPUs|Nodelist|
|---|---|---|---|---|---|---|--|
|debug|1|16|64|xeon-2665|2.40 GHz|k20|a02-26|
|debug|5|16|64|xeon-2650v2|2.60 GHz|None|e01-60,e05-[42,76,78,80]|
|epyc-64|32|64|256|epyc-7542|2.90 GHz|None|b22-[01-32]|
|main|18|16|64|xeon-2640v3|2.60 GHz|k40|e07-[01-16,18],e09-18|
|main|29|32|191|xeon-6130|2.10 GHz|v100|d11-[02-04],d13-[02-11],d14-[03-18]|
|main|41|20|128|xeon-2640v4|2.40 GHz|p100|d23-[10-16],e21-[01-16],e22-[01-16],e23-[01-02]|
|main|45|20|64|xeon-2640v4|2.40 GHz|k40|e16-[01-24],e17-[01-02,04,06-07,09-24]|
|main|60|16|64|xeon-2640v3|2.60 GHz|None|e06-[01-22,24],e10-12,e11-[26-27,29,45,47],e13-[11,26,28-48],e15-[10,12,14,16,18,20,22,24]|
|main|82|20|64|xeon-2640v4|2.40 GHz|None|d17-[03-44],d18-[01-38],d22-[51-52]|
|main|81|24|94|xeon-4116|2.10 GHz|None|d05-[03-15,26-42],d06-[15-29],d11-[09-47]|
|oneweek|38|16|64|xeon-2650v2|2.60 GHz|None|e01-[46,48,52,62,64],e02-[40-72]|
|oneweek|1|16|256|xeon-2650v2|2.60 GHz|None|e01-76|

> Note: This information is current as of February 18, 2021. Use the `sinfo2` command for similar information.

### Job limits

Discovery is a shared resource, so we put limits on the size and duration of jobs to ensure everyone has a chance to run jobs:

| Queue (or partition) | Default run time | Maximum run time | Maximum concurrent cores | Maximum number of jobs or job steps (running or pending) |
|---|---|---|---|---|
| main    | 1 hour     |  48 hours   | 1,200 | 5,000 |
| epyc-64 | 1 hour     |  48 hours   | 1,200 | 5,000 |
| oneweek | 1 hour     | 168 hours   | 208   | 50    |
| debug   | 30 minutes | 30  minutes | 48    | 5     |

Jobs also depend on your project account allocations, and each job will subtract from your project's allocated System Units (SUs) depending on the types of resources you request:

| Resource reserved for 1 hour | SUs Charged |
|---|---|
| 1 CPU/core/thread  | 1    |
| 1 GB memory        | 0.25 |

For GPUs, the SU charge varies depending on the GPU model. The table below shows the SU charge for different GPU models for one hour:

| GPU Model | System Unit (SU) Charge |
|-----------|-------------------------|
| K40       | 2                       |
| P100      | 6                       |
| V100      | 8                       |

> Note: SUs are charged based on resources that you *request*, not what is actually used. Be sure not to request more resources than your program requires.

You can use the `myaccount` command to see your available and default account allocations and usage for each:

```
ttrojan@discovery2:~$ myaccount
  
      User              Account             Def Acct                  QOS
---------- -------------------- -------------------- --------------------
   ttrojan                acct1                acct1               normal
----------
  
----
account usage: acct1
--------------------------------------------------------------------------------
Top 10 Users 2019-08-13T00:00:00 - 2020-08-12T23:59:59 (31622400 secs)
Usage reported in Percentage of Total
--------------------------------------------------------------------------------
  Cluster     Login     Proper Name         Account     Used   Energy
--------- --------- --------------- --------------- -------- --------
discovery   ttrojan         ttrojan           acct1   10.03%    0.00%
```

The user ttrojan has used 10.03% of their allocation on their default account `acct1`.
