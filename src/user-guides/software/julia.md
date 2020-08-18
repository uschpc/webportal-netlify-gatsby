---
author: Derek Strong
id: 4
date: 2020-08-13T12:00:00.387Z
title: Using Julia on Discovery
alternativeTitle: Julia
path: julia
parentPath: user-information/user-guides/software-and-programming
cat: software
parentPage: User Guides
backToTopBtnFlag: true
---

[Julia](https://www.julialang.org) is an open-source programming language designed for high-performance scientific and numerical computing.

### Using Julia on Discovery

Begin by logging in to Discovery. You can find instructions for this in the [Getting Started guide](/user-information/user-guides/high-performance-computing/discovery/getting-started).

To use Julia on Discovery, first load the corresponding module:

```sh
module load julia
```

This loads the default version (currently 1.4.1). If you want a different version, be sure to specify the version of Julia when loading. For example:

```sh
module load julia/1.0.5
```

To see the available versions of Julia, enter `module spider julia`.

Note that this loads base Julia, so only the base Julia modules and functions are immediately available. You can install other Julia packages that you may need into your home directory (see guide below).

### Running Julia interactively

After loading the module, Julia can be run interactively on the **login node** by simply entering `julia`.

To run Julia interactively on a **compute node**, first use Slurm's `salloc` command to reserve a node. For example:

```sh
salloc --time=1:00:00 --cpus-per-task=8 --mem-per-cpu=2GB --account=<account_id>
```

Once you are logged in to a compute node, load the module and then simply enter `julia`.

### Running Julia in batch mode

To run Julia in batch mode, create a Julia script and use the `julia` command to run the script as part of a Slurm job. Create a Slurm job script and submit it using Slurm's `sbatch` command.

For a simple serial job, a Slurm job script would look something like this:

```sh
#!/bin/bash
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=1
#SBATCH --mem-per-cpu=2GB
#SBATCH --time=1:00:00
#SBATCH --account=<account_id>
  
module load gcc/8.3.0
module load julia/1.4.1
julia /path/to/script.jl
```

Save this script as `jl.job`, for example, and then submit it:

```sh
sbatch jl.job
```

### Installing Julia packages

You can install Julia packages inside your home directory. By default, Julia will install packages in a `~/.julia/packages` directory inside your home directory. The easiest way to install is by opening an interactive session of Julia and using the package mode.

To install a registered package, enter the `]` key to switch to package mode and then use the `add` command together with the package name. For example:

```julia
add DataFrames
```

To install unregistered or development versions of packages, such as from GitHub or GitLab, use the URL path to the Git repository:

```julia
add https://github.com/JuliaData/DataFrames.jl
```

To exit package mode, enter the `Backspace` key on an empty line.

You can also install packages in other locations, such as for use in a shared group or project library. You will need to change the relevant environment variable in the shell before starting Julia:

```sh
export JULIA_DEPOT_PATH="/path/to/dir"
```

This changes the Julia depot location to the specified directory, and then packages will be installed to and loaded from a `/path/to/dir/packages` directory. After exporting this variable, you can simply start Julia and install and load packages like normal. Note that this line needs to be added to Slurm job scripts in order to load packages from that location.

To reset this environment variable, enter `unset JULIA_DEPOT_PATH` in the shell.

### Installing a different version of Julia

If you want a different version of Julia that is not currently installed on Discovery, please [submit a help ticket](/user-information/ticket-submission) and we may be able to install it for you.

Alternatively, you can install a different version of Julia inside your home directory from official binaries. The following steps show how to do this using Julia version 1.4.2 as an example.

Find the binary file for the version of Julia that you want [here](https://www.julialang.org/downloads) (one of the "Generic Linux Binaries for x86" 64-bit files) and copy the link to the file. Then download the file into your home directory using `wget`:

```sh
wget https://julialang-s3.julialang.org/bin/linux/x64/1.4/julia-1.4.2-linux-x86_64.tar.gz
```

After the file is downloaded, unpack it by entering:

```sh
tar -xvzf julia-1.4.2-linux-x86_64.tar.gz
```

You can then start using this version of Julia by entering the path to the binary file:

```sh
~/julia-1.4.2/bin/julia
```

or by exporting the path to your shell environment:

```sh
export PATH="~/julia-1.4.2/bin:$PATH"
```

and then simply entering `julia`.
