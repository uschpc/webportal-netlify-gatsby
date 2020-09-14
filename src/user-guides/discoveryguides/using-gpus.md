---
author: Cesar Sul
id: 6
date: 2020-09-08T12:00:00.387Z
title: Using GPUs on Discovery
path: using-gpus
parentPath: user-information/user-guides/high-performance-computing/discovery
cat: discoveryGuides
parentPage: User Guides
sideMenuParent: Discovery
backToTopBtnFlag: true
excerpt: How to utilize the graphics processing units (GPUs) on Discovery.
---

Some programs can take advantage of the unique hardware architecture in a graphics processing unit (GPU). GPUs can be used for specialized scientific computing work, including 3D modelling and machine learning. The CARC's Discovery cluster offers five different models of GPUs for use with your jobs.

### Requesting GPU resources

To request a GPU, add one of the following lines to your Slurm job script:

```
--gres=gpu:<number>
```
or

```
--gres=gpu:<gpu_type>:<number>
```

where:

`<number>` is the number of GPUs per node requested, and  
`<gpu_type>` is one of the following: k20, k40, k80, p100, or v100.

Use the chart below to determine which `gpu_type` to specify:

|`gpu_type` 	|Max number of GPUs per node 	|GPU model|
|---|---|---|
|k20 	|2| NVIDIA Tesla K20 |
|k40 	|2| NVIDIA Tesla K40 |
|k80 	|4| NVIDIA Tesla K80 (condo nodes) |
|p100 	|2| NVIDIA Tesla P100 |
|v100 	|2| NVIDIA Tesla V100 |

### Loading corresponding modules

GPU-enabled software often requires the [CUDA toolkit](https://developer.nvidia.com/cuda-toolkit) or the [cuDNN](https://developer.nvidia.com/cudnn) library. These are available as modules can be found by running:

```
module avail cuda
module avail cudnn
```

or

```
# Look for modules that contain 'cud' in the name
module avail cud
```

To load the modules, you can run:

```
module load cuda/10.1.243
module load cudnn/8.0.2-10.1
```
