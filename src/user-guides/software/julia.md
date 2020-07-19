---
author: Derek Strong
id: 4
date: 2020-06-04T12:00:00.387Z
title: Using Julia on Discovery
alternativeTitle: Julia
path: julia
parentPath: user-information/user-guides/software
cat: software
parentPage: User Guides
---

[Julia](https://www.julialang.org) is an open-source programming language designed for high-performance scientific and numerical computing.

### Using Julia on Discovery

To use Julia on Discovery, first load the corresponding module:

```sh
module load julia
```

This loads the default version, which is typically the newest version available. If you want a different version, be sure to specify the version of Julia when loading. For example:

```sh
module load julia/1.0.5
```

To see the available versions of Julia, enter `module spider julia`.

### Running Julia interactively

After loading the module, to run Julia interactively on the login node, simply enter `julia`.

To run Julia interactively on a compute node, first use Slurm's `salloc` command to reserve a node. For example:

```sh
salloc --time=1:00:00 --cpus-per-task=8 --mem-per-cpu=2GB
```

Once you are logged in to a compute node, load the module and then simply enter `julia`.

### Running Julia in batch mode

To run Julia in batch mode, first create a Julia script. Then the `julia` command can be used to run the script as part of a Slurm job. Create a Slurm job script and submit it using Slurm's `sbatch` command.

For a serial job, a Slurm job script would look something like this:

```sh
#!/bin/bash
#SBATCH --export=none
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=1
#SBATCH --mem-per-cpu=10GB
#SBATCH --time=1:00:00

module load gcc
module load julia

julia /path/to/script.jl
```

Save this script as `jl.job`, for example, and then submit it by entering:

```sh
sbatch jl.job
```

### Installing Julia packages

You can install Julia packages inside your home directory. The easiest way to do this is by opening an interactive session of Julia and using the `Pkg.add()` function for registered Julia packages. By default, Julia will install packages in a `~/.julia/packages` directory inside your home directory:

```julia
using Pkg
Pkg.add("DataFrames")
```

> Note: We recommend keeping installed packages separated by Julia version (Major.Minor) to avoid compatibility issues.


### Installing a different version of Julia

If you want a different version of Julia that is not currently installed on the cluster, please contact us at `hpc@usc.edu` and we may be able to install it for you.

Alternatively, you can install a different version of Julia from official binaries inside your home directory. The following steps show how to do this using Julia version 1.4.2 as an example.

Find the binary file for the version of Julia that you want at https://www.julialang.org/downloads (one of the ‘Generic Linux Binaries for x86’ 64-bit files) and copy the link to the file. Then download the file into your home directory using `wget`:

```sh
wget https://julialang-s3.julialang.org/bin/linux/x64/1.4/julia-1.4.2-linux-x86_64.tar.gz
```

After the file is downloaded, unpack it by entering:

```sh
tar -xvzf julia-1.4.2-linux-x86_64.tar.gz
```

You can then start using this version of Julia by specifying the path to the binary file:

```sh
~/julia-1.4.2/bin/julia
```

or by exporting the path to your shell environment:

```sh
export PATH="~/julia-1.4.2/bin:$PATH"
```

and then simply entering `julia`.
