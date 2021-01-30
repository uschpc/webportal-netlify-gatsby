---
author: Cesar Sul
id: 9
date: 2020-11-13T12:00:00.387Z
title: Using GPUs
path: using-gpus
parentPath: user-information/user-guides/high-performance-computing
cat: discoveryGuides
parentPage: User Guides
sideMenuParent: Discovery
backToTopBtnFlag: true
excerpt: How to utilize the graphics processing units (GPUs) on Discovery or Endeavour.
---

Some programs can take advantage of the unique hardware architecture in a graphics processing unit (GPU). GPUs can be used for specialized scientific computing work, including 3D modelling and machine learning. The CARC's Discovery cluster currently offers three different models of GPUs for use with your jobs. [Condo Cluster Program](/user-information/ccp) users participating in the traditional purchase model have the option to include GPU nodes in their dedicated resources.

### Requesting GPU resources

To request a GPU, add one of the following `sbatch` options to your Slurm job script:

```
#SBATCH --gres=gpu:<number>
```

or

```
#SBATCH --gres=gpu:<gpu_type>:<number>
```

where:

`<number>` is the number of GPUs per node requested, and  
`<gpu_type>` is one of the following: k40, p100, or v100.

Use the chart below to determine which `gpu_type` to specify:

|`gpu_type` | Max number of GPUs per node | GPU model|
|---|---|---|
|k40 	|2| NVIDIA Tesla K40 |
|p100 	|2| NVIDIA Tesla P100 |
|v100 	|2| NVIDIA Tesla V100 |

To see an updated list of available GPUs, you can run the `sinfo` command like so:

```
sinfo -o "%20P %5D %3c %m  %G" | grep -v null
```

The maximum number of GPUs that a user can use at one time, in one job or across multiple jobs, is 36.

#### System Unit (SU) charges

Each job will subtract from your project's allocated System Units (SUs) depending on the types of resources you request. For GPUs, the SU charge varies depending on the GPU model. The following table shows the SU charge for different GPU models for one hour:

| `gpu_type` | System Unit (SU) Charge |
|-----------|-------------------------|
| k40       | 2                       |
| p100      | 6                       |
| v100      | 8                       |

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

To load the modules, you can run, for example:

```
module load cuda/10.1.243
module load cudnn/8.0.2-10.1
```

### Example Slurm job script

The following is an example Slurm job script for GPU jobs:

```
#!/bin/bash

#SBATCH --gres=gpu:k40:1
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=8
#SBATCH --mem=16GB
#SBATCH --time=1:00:00
#SBATCH --account=<account_id>

module load gcc/8.3.0
module load cuda/10.1.243

nvcc program.cu -o program

./program
```

Each line is described below:

|Command or Slurm argument| Meaning|
|---|---|
|`#!/bin/bash`| Use `/bin/bash` to execute this script |
|`#SBATCH`| Syntax that allows Slurm to read your requests (ignored by bash)|
|`--gres=gpu:k40:1` |  Reserve 1 node with 1 K40 GPU|
|`--ntasks=1` |  Ensure all resources stay on a single compute node|
|`--cpus-per-task=8` | Reserve 8 CPUs for your exclusive use|
|`--mem=16GB` |  Reserve 16 GB of memory for your exclusive use|
|`--time=1:00:00` | Reserve resources described for 1 hour|
|`--account=<account_id>` | Charge compute time to <account_id>. If not specified, you may use up the wrong PI's compute hours|
|`module load gcc/8.3.0` | Load the `gcc` compiler [environment module](/user-information/user-guides/high-performance-computing/lmod)|
|`module load cuda/10.1.243` | Load the `cuda` [environment module](/user-information/user-guides/high-performance-computing/lmod)|
|`nvcc program.cu -o program` | Compile program using `nvcc`|
|`./program` | Run program|

You can adjust the resources requested based on your needs, but remember that fewer resources requested leads to less queue time for your job.
