---
author: Cesar Sul
id: 9
date: 2020-09-08T12:00:00.387Z
title: Using GPUs
path: using-gpus
parentPath: user-information/user-guides/high-performance-computing/discovery
cat: discoveryGuides
parentPage: User Guides
sideMenuParent: High-Performance Computing
backToTopBtnFlag: true
excerpt: How to utilize the graphics processing units (GPUs) on Discovery or Endeavour.
---

Some programs can take advantage of the unique hardware architecture in a graphics processing unit (GPU). GPUs can be used for specialized scientific computing work, including 3D modelling and machine learning. The CARC's Discovery cluster offers five different models of GPUs for use with your jobs. [Condo Cluster Program](/user-information/ccp) users participating in the traditional purchase model have the option to include GPU nodes in their dedicated resources.

### Requesting GPU resources

To request a GPU, add one of the following `sbatch` options to your Slurm job script:

```sh
#SBATCH --gres=gpu:<number>
```

or

```sh
#SBATCH --gres=gpu:<gpu_type>:<number>
```

where:

`<number>` is the number of GPUs per node requested, and  
`<gpu_type>` is one of the following: k20, k40, k80, p100, or v100.

Use the chart below to determine which `gpu_type` to specify:

|`gpu_type` | Max number of GPUs per node | GPU model|
|---|---|---|
|k20 	|2| NVIDIA Tesla K20 |
|k40 	|2| NVIDIA Tesla K40 |
|k80 	|4| NVIDIA Tesla K80 (condo nodes) |
|p100 	|2| NVIDIA Tesla P100 |
|v100 	|2| NVIDIA Tesla V100 |

The maximum number of GPUs that a user can use at one time, in one job or across multiple jobs, is 36.

#### System Unit (SU) charges

Each job will subtract from your project's allocated System Units (SUs) depending on the types of resources you request. For GPUs, the SU charge varies depending on the GPU model. The following table shows the SU charge for different GPU models for one hour:

| GPU Model | System Unit (SU) Charge |
|-----------|-------------------------|
| K20, K40  | 2                       |
| K80       | 4                       |
| P100      | 6                       |
| V100      | 8                       |

### Loading corresponding modules

GPU-enabled software often requires the [CUDA toolkit](https://developer.nvidia.com/cuda-toolkit) or the [cuDNN](https://developer.nvidia.com/cudnn) library. These are available as modules can be found by running:

```sh
module avail cuda
module avail cudnn
```

or

```sh
# Look for modules that contain 'cud' in the name
module avail cud
```

To load the modules, you can run, for example:

```sh
module load cuda/10.1.243
module load cudnn/8.0.2-10.1
```

### Example Slurm job script

The following is an example Slurm job script for GPU jobs:

```sh
#!/bin/bash
#SBATCH --gres=gpu:k40:1        # 1 node with 1 K40 GPU
#SBATCH --ntasks=1              # 1 process
#SBATCH --cpus-per-task=8       # 8 CPUs
#SBATCH --mem=16GB              # 16 GB of memory
#SBATCH --time=1:00:00          # 1 hour run time
#SBATCH --account=<account_id>  # Account to charge resources to
  
module load gcc/8.3.0
module load cuda/10.1.243
  
nvcc program.cu -o program
./program
```
