---
author: Derek Strong
id: 5
date: 2020-09-09T12:00:00.387Z
title: Using Singularity on Discovery
alternativeTitle: Singularity
path: singularity
parentPath: user-information/user-guides/software-and-programming
cat: software
parentPage: User Guides
backToTopBtnFlag: true
excerpt: A user guide for Singularity, an open-source application for creating and running software containers.
---

[Singularity](https://sylabs.io/singularity/) is an open-source application for creating and running software containers, designed primarily for scientific computing and Linux-based computing clusters like Discovery. Singularity containers enable self-contained, stable, portable, and reproducible computing environments and software stacks that can be shared and used across different machines and computing clusters, such as for research collaborations spanning multiple institutions.

### Using Singularity on Discovery

Begin by logging in to Discovery. You can find instructions for this in the [Getting Started guide](/user-information/user-guides/high-performance-computing/discovery/getting-started).

Singularity is installed on Discovery outside of the module system, so there is no need to load a software module in order to use it. Instead, you can directly use the `singularity` commands. Please note that the commands that require `sudo` will not be available to you on Discovery. The current version installed is 3.6.1.

To view manual pages, enter `singularity help`.

### Getting Singularity container images

A **container image** is a single executable file that defines the software environment for a container and runs the container. A single container image can be used to run multiple instances of the same container concurrently for different jobs. The containers are isolated, as the name implies, so you can install any software within a container as if you are the root user. Additionally, there is a separate root file system within a container to store installed software, but containers can still access and interact with file systems on the host system, Discovery.

To get a container for use on Discovery, you can either pull (i.e., download) pre-built container images or externally build a custom container image from a definition file and then transfer it to Discovery.

> Note: When getting containers, by default, Singularity will create a `~/.singularity/cache` directory inside your home directory to store cache files, which can quickly use a lot of storage space. You can change this location to a directory with more storage space (e.g., your /scratch directory) by setting the environment variable SINGULARITY_CACHEDIR. For example:
> 
> ```sh
> export SINGULARITY_CACHEDIR=/scratch/<user>/.singularity
> ```
> 
> This line can also be added to your `~/.bash_profile` found in your home directory, so that this variable is automatically set every time you log in to Discovery.

#### Pulling pre-built images

If you have already identified a pre-built container image that contains all the software you need, such as from the cloud-based sources [Singularity Library](https://cloud.sylabs.io/library) (`library://`), [Singularity Hub](https://singularity-hub.org/) (`shub://`), or [Docker Hub](https://hub.docker.com/) (`docker://`), then you can simply pull this image into Discovery.

For example, to get a basic Ubuntu image from the Singularity Library, enter:

```sh
singularity pull library://ubuntu
```

This will pull an image with the latest Ubuntu version into the current directory and name it `ubuntu_latest.sif`. You can give the image a custom name by specifying it before the registry location. For example:

```sh
singularity pull ubuntu.sif library://ubuntu
```

This will name the image `ubuntu.sif`.

Most Docker container images will easily convert to the Singularity image format. To get an image from Docker Hub (e.g., one containing base R), enter:

```sh
singularity pull docker://rocker/r-base
```

This will pull an image from the Rocker project that contains the latest version of base R into the current directory and name it `r-base_latest.sif`.

Once the image is downloaded, it is then ready to be used.

#### Building images from a definition file

You can also build a custom container image by using a definition file that instructs the build process. For security reasons we do not allow users to build directly on Discovery; you must build externally and then transfer the image to Discovery.

The easiest way to build containers for use on Discovery is to use the cloud-based Singularity [remote builder](https://cloud.sylabs.io/), which is integrated with the Singularity Library. To use this service, you can sign in with your GitHub, GitLab, Google, or Microsoft account. Currently, you are limited to 11 GB of free storage for your container builds. Once signed in, you simply submit a definition file and it builds the image. With a token, you can then pull the container image directly into Discovery.

Alternatively, on your local machine you can install a virtual machine application like [Multipass](https://multipass.run/) and then create a Linux-based virtual machine and install Singularity inside of it in order to then build a container image from a definition file. Once built, you can transfer the container image to Discovery.

#### Example

In the following example we will use the remote builder to build a container image.

First, create a definition file. The following is an example definition file that uses Ubuntu as the base operating system and then installs Julia from an official binary file:

```sh
Bootstrap: library
From: ubuntu:20.04
  
%post
    # Install required software packages
    apt-get update
    apt-get install -y wget
  
    # Download and link Julia binary
    cd /usr/local/
    wget -q https://julialang-s3.julialang.org/bin/linux/x64/1.5/julia-1.5.1-linux-x86_64.tar.gz
    tar -zxf julia-1.5.1-linux-x86_64.tar.gz
    ln -s /usr/local/julia-1.5.1/bin/julia /usr/bin/julia
  
    # Store date and time container was created
    NOW=`date`
    echo "export NOW=\"${NOW}\"" >> $SINGULARITY_ENVIRONMENT
  
%environment
    export LC_ALL=C
  
%runscript
    # Start an interactive Julia session
    julia
  
%test
    echo "Container was created $NOW"
    julia --version
  
%help
    This container has base Julia 1.5.1 running on Ubuntu 20.04.
```

This can be saved in a file with the name `julia.def`, for example. For more details on creating definition files, see the official Singularity [documentation](https://sylabs.io/guides/3.6/user-guide/definition_files.html).

Next, sign in to the Singularity remote builder, navigate to the Remote Builder page, either upload your definition file or copy and paste the contents, and then select "Build". It will then display a build log.

Assuming the build is successful, you can then pull the container image into Discovery using the provided library path. You will first need to create and enter an access token in order to access your remote builder account from Discovery. Navigate to the Access Tokens page and select "Create a New Access Token". Copy the created token and then on Discovery run the `singularity remote login` command to enter the token.

> Note: The access token expires every 30 days, so this step will need to be repeated every 30 days to continue using the remote builder with Discovery.

You can pull the image from your personal library with a generic command like the following:

```sh
singularity pull <container> library://<user>/<path>
```

where `<container>` is the name for the container image, `<user>` is your username for your Singularity remote builder account (not your Discovery account), and `<path>` is the provided path to the image. For example:

```sh
singularity pull julia.sif library://ttrojan/remote-builds/rb-5f591c829a193de1c6102f6c
```

Alternatively, you can use the `singularity build --remote` command to submit a definition file to the remote builder that will then build the image in the cloud and automatically download it to Discovery. This also requires an access token. For example:

```sh
singularity build --remote julia.sif julia.def
```

This command submits the `julia.def` definition file and then downloads the built image into the current directory with the name `julia.sif`.

Once the image is downloaded, it is ready to be used.

### Running Singularity container images

You can interact with Singularity containers using one of the following commands:

- `singularity shell` --- for an interactive shell within the container
- `singularity exec` --- for executing commands within the container
- `singularity run` --- for executing a pre-defined runscript within the containter

To execute custom commands within a container, enter:

```sh
singularity exec <container> <commands to execute>
```

This will run the given commands using the software stack within the container. For example, to run a Julia script using the version of Julia installed within the container, enter:

```sh
singularity exec julia.sif julia script.jl
```

If the container image has a pre-defined runscript, enter:

```sh
singularity run <container>
```

This will execute the defined sequence of commands.

Singularity will automatically mount the `/tmp` and `$PWD` directories from the host system, Discovery, in the container when it is run. To mount other directories, such as your `/scratch` or `/scratch2` directories, use the `--bind` option. For example:

```sh
singularity exec --bind /scratch/ttrojan julia.sif julia /scratch/ttrojan/script.jl
```

You can also set the environment variable `SINGULARITY_BIND` to include any directory paths that you want mounted in your containers.

To use Singularity in Slurm jobs, simply include the `singularity` commands to be run in your job scripts. For example:

```sh
#!/bin/bash
  
#SBATCH --ntasks=1             # 1 process
#SBATCH --cpus-per-task=8      # 8 cores
#SBATCH --mem=16GB             # 16 GB of memory
#SBATCH --time=1:00:00         # 1 hour run time
#SBATCH --account=<account_id> # Account to charge resources to
  
cd /home1/ttrojan/singularity
  
singularity exec julia.sif julia script.jl
```

The container will automatically use the requested resources.

### Additional resources

If you have questions about or need help with Singularity, please [submit a help ticket](/user-information/ticket-submission) and we will assist you.

[Singularity](https://sylabs.io/singularity/)  
[Singularity documentation](https://sylabs.io/guides/3.6/user-guide/)  
[Singularity remote builder](https://cloud.sylabs.io/home)  
