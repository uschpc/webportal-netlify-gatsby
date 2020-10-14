---
author: Derek Strong
id: 6
date: 2020-08-13T12:00:00.387Z
title: Using Julia on Discovery
alternativeTitle: Julia
path: julia
parentPath: user-information/user-guides/software-and-programming
cat: software
parentPage: User Guides
backToTopBtnFlag: true
excerpt: A user guide for Julia, an open-source programming language designed for high-performance scientific and numerical computing.
---

[Julia](https://www.julialang.org) is an open-source programming language designed for high-performance scientific and numerical computing.

### Using Julia on Discovery

Begin by logging in to Discovery. You can find instructions for this in the [Getting Started guide](/user-information/user-guides/high-performance-computing/discovery/getting-started).

You can use Julia in either interactive or batch modes. Ultimately, you will submit your Julia jobs using batch mode with Julia scripts as part of Slurm job scripts. You can use interactive mode to install packages and explore data, for example.

To use Julia on Discovery, either interactively or in batch mode, first load the corresponding software module:

```sh
module load julia
```

This loads the default version, currently 1.4.1, and is equivalent to `module load julia/1.4.1`. If you require a different version, specify the version of Julia when loading. For example:

```sh
module load julia/1.3.1
```

To see all available versions of Julia, enter:

```sh
module spider julia
```

The Julia modules depend on the `gcc/8.3.0` module, which is loaded by default when logging in to Discovery. This module needs to be loaded first because Julia was built with the GCC 8.3.0 compiler.

In Slurm job scripts, the `gcc` module should be loaded explicitly before loading Julia:

```sh
module load gcc/8.3.0
module load julia/1.4.1
```

When loading the Julia module, note that this only loads base Julia, so only the base Julia packages and functions are immediately available. You can install other Julia packages that you need into your home directory (see guide below).

#### Installing a different version of Julia

If you require a different version of Julia that is not currently installed on Discovery, please [submit a help ticket](/user-information/ticket-submission) and we will install it for you.

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

and then simply entering `julia`. You can add this export line to your `~/.bash_profile` to automatically set it every time you log in to Discovery.

### Running Julia interactively

After loading the module, to run Julia interactively on the **login node**, simply enter `julia` and this will start a new Julia session:

```sh
user@discovery:~$ module load julia
user@discovery:~$ julia
              _
   _       _ _(_)_     |  Documentation: https://docs.julialang.org
  (_)     | (_) (_)    |
   _ _   _| |_  __ _   |  Type "?" for help, "]?" for Pkg help.
  | | | | | | |/ _` |  |
  | | |_| | | | (_| |  |  Version 1.4.1 (2020-04-14)
 _/ |\__'_|_|_|\__'_|  |
|__/                   |
  
julia>
```

Using Julia on the login node should be reserved for installing packages and non-intensive work.

Alternatively, using Julia interactively on a **compute node** is useful for more intensive work like exploring data, testing models, and debugging, for example.

To run Julia interactively on a compute node, first use Slurm's `salloc` command to reserve resources on a node. Once you are granted the resources and logged in to a compute node, load the modules and then enter `julia`:

```sh
user@discovery:~$ salloc --time=1:00:00 --ntasks=1 --cpus-per-task=8 --mem=16GB --account=<account_id>
salloc: Granted job allocation 24737
salloc: Waiting for resource configuration
salloc: Nodes d05-04 are ready for job
  
user@d05-04:~$ module load gcc/8.3.0 julia/1.4.1
user@d05-04:~$ julia

   _       _ _(_)_     |  Documentation: https://docs.julialang.org
  (_)     | (_) (_)    |
   _ _   _| |_  __ _   |  Type "?" for help, "]?" for Pkg help.
  | | | | | | |/ _` |  |
  | | |_| | | | (_| |  |  Version 1.4.1 (2020-04-14)
 _/ |\__'_|_|_|\__'_|  |
|__/                   |
  
julia>
```

Notice that the shell prompt changes from `user@discovery` to `user@d05-04` to indicate that you are now on a compute node (d05-04).

Be sure to change the resource requests (the `--time=1:00:00 --ntasks=1 --cpus-per-task=8 --mem=16GB --account=<account_id>` part after your `salloc` command) as needed, such as the number of cores and memory required.

To run Julia scripts from within Julia, use the `include()` function. Alternatively, to run Julia scripts from the shell, use the `julia` command, after loading the Julia module.

To exit the node and relinquish the job resources, enter `exit()` in Julia and then enter `exit` in the shell. This will return you to the login node:

```sh
julia> exit()
  
user@d05-04:~$ exit
exit
salloc: Relinquishing job allocation 24737
  
user@discovery:~$
```

> Note: Compute nodes do not have access to the public internet, so any data downloads or package installations should first be completed on the login node.

### Installing Julia packages

To install Julia packages, open an interactive session of Julia on the login node and use the package mode, which by default will install packages in a `~/.julia/packages` directory inside your home directory.

To install a registered package, enter the `]` key to switch to package mode and then use the `add` command together with the package name:

```julia
(@v1.4) pkg> add DataFrames
```

To install unregistered or development versions of packages, such as from GitHub or GitLab, use the URL path to the Git repository:

```julia
(@v1.4) pkg> add https://github.com/JuliaData/DataFrames.jl
```

To exit package mode, enter the `Backspace` key on an empty line.

You can also install packages to other locations, such as for use in a shared group or project library. You will need to change the relevant environment variable in the shell before starting Julia:

```sh
export JULIA_DEPOT_PATH="</path/to/dir>"
```

This changes the Julia depot location to the specified directory, and then packages will be installed to and loaded from a `</path/to/dir>/packages` directory. After exporting this variable, you can simply start Julia and install and load packages like normal. Note that this line needs to be added to Slurm job scripts in order to load packages from that location.

To clear this environment variable and return to the default depot location in your home directory, enter `unset JULIA_DEPOT_PATH` in the shell.

### Running Julia in batch mode

In order to submit jobs to the Slurm job scheduler, you will need to use Julia in batch mode. There are a few steps to follow:

1. Create a Julia script
2. Create a Slurm job script that runs the Julia script
3. Submit the job script to the job scheduler

Your Julia script should consist of the sequence of Julia commands needed for your analysis. For example:

```julia
# Julia script to filter and summarize data
  
using DataFrames
using CSV
  
dataset = DataFrame(CSV.File("/home1/user/data/dataset.csv"))
  
data = dataset[1:1000, :]
  
print(describe(data))
```

The `julia` command, available after the Julia module has been loaded, runs Julia scripts, and it can be used in the shell and in Slurm job scripts.

A Slurm job script is a special type of Bash shell script that the Slurm job scheduler recognizes as a job. For a job running Julia, a Slurm job script should look something like the following (with comments describing the resources requested):

```sh
#!/bin/bash
  
#SBATCH --ntasks=1             # 1 process
#SBATCH --cpus-per-task=8      # 8 cores
#SBATCH --mem=16GB             # 16 GB of memory
#SBATCH --time=1:00:00         # 1 hour run time
#SBATCH --account=<account_id> # Account to charge resources to
  
module load gcc/8.3.0
module load julia/1.4.1
  
julia /path/to/script.jl
```

Each line is described below:

|Slurm argument | Meaning|
|---|---|
|`#!/bin/bash`| Use `/bin/bash` to execute this script|
|`#SBATCH` | Syntax that allows Slurm to read your requests (ignored by Bash)|
|`--ntasks=1` |  Ensures all resources stay on a single compute node|
|`--cpus-per-task=8` | Reserves 8 CPUs for your exclusive use|
|`--mem=16GB` |  Reserves 16 GB of memory for your exclusive use|
|`--time=1:00:00` | Reserves resources described for 1 hour|
|`--account=<account_id>` | Charge compute time to <account_id>. If not specified, you may use up the wrong PI's compute hours|
|`module load gcc/8.3.0` | Load the `gcc` compiler [environment module](/user-information/user-guides/high-performance-computing/discovery/lmod)|
|`module load julia/1.4.1` | Load the `julia` [environment module](/user-information/user-guides/high-performance-computing/discovery/lmod)|
|`julia /path/to/script.jl` | Use `julia` to run `script.jl`|

You can adjust the resources requested based on your needs, but remember that fewer resources requested leads to less queue time for your job.

You can develop Julia scripts and job scripts on your local machine and then transfer them to Discovery, or you can use one of the available text editors on Discovery to develop them (`nano`, `vim`, or `emacs`).

Save this Slurm script as `jl.job`, for example, and then submit it to the job scheduler:

```sh
user@discovery:~$ sbatch jl.job
Submitted batch job 13587
```

The results of the job will be logged and, by default, saved to a file of the form `slurm-<jobid>.out` in the same directory where the job script is located. To view the contents of this file, enter `less slurm-<jobid>.out`.

To check the status of your job, enter `squeue -u <username>`. For example:

```sh
user@discovery:~$ squeue -u user
         JOBID PARTITION     NAME     USER ST       TIME  NODES NODELIST(REASON)
        170552      main   jl.job     user  R       1:01      1 d05-04
```

If there is no job status listed, then this means the job has completed.

For more information on job status and running jobs, see the [Running Jobs guide](/user-information/user-guides/high-performance-computing/discovery/running-jobs).

### Additional resources

If you have questions about or need help with Julia, please [submit a help ticket](/user-information/ticket-submission) and we will assist you.

[Julia language](https://www.julialang.org)  
[Julia documentation](https://docs.julialang.org/en/v1/)  
[Julia cheat sheet](https://juliadocs.github.io/Julia-Cheat-Sheet/)  
[JuliaHub](https://juliahub.com/ui/Home)  
[JuliaStats](https://juliastats.org/)  
[JuliaGPU](https://juliagpu.org/)  
[Flux](https://fluxml.ai/)  
[JuMP](https://jump.dev/)  
[JuliaGeo](https://juliageo.org/)  
[Think Julia](https://benlauwens.github.io/ThinkJulia.jl/latest/book.html)  
