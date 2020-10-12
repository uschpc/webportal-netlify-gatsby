---
author: Cesar Sul
id: 2
date: 2020-10-12T12:00:00.387Z
title: Discovery Resource Overview
path: discovery-resources
parentPath: user-information/user-guides/high-performance-computing/discovery
cat: discoveryGuides
parentPage: User Guides
sideMenuParent: Discovery
backToTopBtnFlag: true
excerpt: Information on Discovery's compute nodes and job limits.
---

The Center for Advanced Research Computing's high-performance computing cluster, Discovery, has over 400 compute nodes available for users to run their jobs on.

For general CARC system specifications, see our [System Information page](/user-information/system-information).

### Compute nodes

The chart below describes the various Linux computing partitions available on Discovery, their names, and information on the partitions’ computing power. These are general use nodes available to all HPC researchers.

|Partition|Nodes|CPUs|Memory (GB)|CPU type|GPUs|Nodelist |
|---|---|---|---|---|---|---|
|debug|1|24|94|xeon-4116|None|d10-02 |
|epyc-64|32|64|256|epyc-7542|None|b22-[01-32] |
|main|18|16|64|xeon-2640v3|k40|e07-[01-16,18],e09-18 |
|main|1|32|191|xeon-6130|v100|d13-09 |
|main|28|32|191|xeon-6130|v100|d11-[02-04],d13-[02-08,10-11],d14-[03-18] |
|main|41|20|128|xeon-2640v4|p100|d23-[10-16],e21-[01-16],e22-[01-16],e23-[01-02] |
|main|45|20|64|xeon-2640v4|k40|e16-[01-24],e17-[01-02,04,06-07,09-24] |
|main|60|16|64|xeon-2640v3|None|e06-[01-22,24],e10-12,e11-[26-27,29,45,47],e13-[11,26,28-48],e15-[10,12,14,16,18,20,22,24] |
|main|82|20|64|xeon-2640v4|None|d17-[03-44],d18-[01-38],d22-[51-52] |
|main|84|24|94|xeon-4116|None|d05-[03-15,26-42],d06-[15-29],d11-[09-47] |
|oneweek|20|16|64|xeon-2640v2|None|e01-[46,48,52,62,64,76,78],e02-[40-41,43,45,47,49,51,53,55],e05-[42,76,78,80] |

> Note: This information is current as of September 9, 2020.

### Job limits

Discovery is a shared resource, so we put limits on the size and duration of jobs to ensure everyone has a chance to run jobs:

|Queue (or partition)| Default run time| Maximum run time|  Maximum concurrent cores|   Maximum number of jobs or job steps (running or pending)|
|---|---|---|---|---|
|main   | 1 hour    |  48 hours  | 1,200 | 5,000 |
|oneweek| 1 hour    | 168 hours  | 1,200 | 50   |
|debug  | 30 minutes| 30  minutes| 24   | 5    |

Jobs also depend on your project account allocations, and each job will subtract from your project's allocated System Units (SUs) depending on the types of resources you request:

| Resource reserved for 1 hour| SUs Charged |
|---|---|
| 1 CPU/core  | 1    |
| 1 GB memory | 0.25 |

For GPUs, the SU charge varies depending on the GPU model. The table below shows the SU charge for different GPU models for one hour:

| GPU Model | System Unit (SU) Charge |
|-----------|-------------------------|
| K20, K40  | 2                       |
| K80       | 4                       |
| P100      | 6                       |
| V100      | 8                       |

> Note: SUs are charged based on resources that you *request*, not what is actually used. Be sure not to request more resources than your program requires.

You can use the `myaccount` command to see your available and default account allocations and usage for each:

```
ttrojan@discovery:~$ myaccount
  
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