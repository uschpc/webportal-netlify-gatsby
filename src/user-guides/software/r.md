---
author: Derek Strong
id: 2
date: 2020-06-04T12:00:00.387Z
title: Using R on Discovery
alternativeTitle: R
path: r
parentPath: user-information/user-guides/software
cat: software
parentPage: User Guides
backToTopBtnFlag: true
---

[R](https://www.r-project.org) is an open-source programming environment and language designed for statistical computing and graphics.

### Using R on Discovery

Begin by logging in to Discovery. You can find instructions for this in the [Getting Started guide](/user-information/user-guides/high-performance-computing/discovery/getting-started).

To use R on Discovery, first load the corresponding module:

```sh
module load r
```

This loads the default version (currently 3.6.1). If you want a different version, be sure to specify the version of R when loading. For example:

```sh
module load r/3.5.3
```

To see the available versions of R, enter `module spider r`.

Note that this loads base R, so only the base R packages and functions are immediately available. You can install other R packages that you may need into your home directory (see guide below).

### Running R interactively

After loading the module, to run R interactively on the **login node**, simply enter `R`.

To run R interactively on a **compute node**, first use Slurm's `salloc` command to reserve a node. For example:

```sh
salloc --time=1:00:00 --cpus-per-task=8 --mem-per-cpu=2GB
```

Once you are logged in to a compute node, load the module and then simply enter `R`.

### Running R in batch mode

To run R in batch mode, create an R script and use the `Rscript` command to run the script as part of a Slurm job. Create a Slurm job script and submit it using Slurm's `sbatch` command.

For a simple serial job, a Slurm job script would look something like this:

```sh
#!/bin/bash
#SBATCH --export=none
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=1
#SBATCH --mem-per-cpu=2GB
#SBATCH --time=1:00:00
```

Load the modules and run the `Rscript` command:

    module load gcc/8.3.0
    module load openblas/0.3.8
    module load r/4.0.2
    Rscript --vanilla /path/to/script.R

Save this script as `R.job`, for example, and then submit it:

```sh
sbatch R.job
```

### Installing R packages

You can install R packages inside your home directory. By default, R will install packages in an `~/R` directory inside your home directory. The easiest way to install is by opening an interactive session of R and using the `install.packages()` function for registered packages from [CRAN](https://cran.r-project.org/). For example:

```r
install.packages("dplyr")
```

To specify a different location to install to, use the `lib` argument:

```r
install.packages("dplyr", lib = "/path/to/rpkgs")
```

To load an R package, use the `library()` function. For example:

```r
library(dplyr)
```

Or, if installed to an alternative location, use the `lib.loc` argument:

```r
library(dplyr, lib.loc = "/path/to/rpkgs")
```

To install unregistered or development versions of packages, such as from GitHub or GitLab, use the `remotes` package and its functions. For example:

```r
install.packages("remotes")
library(remotes)
install_github("USCbiostats/slurmR")
library(slurmR)
```

### Installing a different version of R

If you want a different version of R that is not currently installed on Discovery, please contact us at `carc-support@usc.edu` and we may be able to install it for you.

Alternatively, you can compile and install R from source inside your home directory, or you can use a Singularity container and install a different version there, either from official binaries or from source.
