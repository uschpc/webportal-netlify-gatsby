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
---

[R](https://www.r-project.org) is an open-source programming environment and language designed for statistical computing and graphics.

### Using R on Discovery

On the Discovery cluster, R has been installed using the OpenBLAS library for improved performance.

To use R, first load the corresponding module:

```sh
module load r
```

This loads the default version, which is typically the newest version available. If you want to load a different version, be sure to specify the version of R when loading. For example:

```sh
module load r/3.5.3
```

To see the available versions of R, enter `module spider r`.


### Running R interactively

After loading the module, to run R interactively on the **login node**, simply enter `R`.

To run R interactively on a **compute node**, first use Slurm's `salloc` command to reserve a node. For example:

```sh
salloc --time=1:00:00 --cpus-per-task=8 --mem-per-cpu=2GB
```

Once you are logged in to a compute node, load the module and then simply enter `R`.


### Running R in batch mode

To run R in batch mode, first create an R script and then the `Rscript` command can be used to run the script as part of a Slurm job. Create a Slurm job script and submit it using Slurm's `sbatch` command.

For a serial job, a Slurm job script would look something like this:

```sh
#!/bin/bash
#SBATCH --export=none
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=1
#SBATCH --mem-per-cpu=10GB
#SBATCH --time=1:00:00

module load gcc
module load openblas
module load r

Rscript --vanilla /path/to/script.R
```

Save this script as `R.job`, for example, and then submit it by entering:

```sh
sbatch R.job
```

### Installing R packages

You can install R packages inside your home directory. The easiest way to do this is by opening an interactive session of R and using the `install.packages()` function for packages from [CRAN](https://cran.r-project.org/).

By default, R will install packages in an `~/R` directory inside your home directory. To specify a different location, use the `lib` argument:

```r
install.packages("package", lib = "/path/to/rpkgs")
```

> Note: For R version 3.6.0, if the install fails because of `ERROR: moving to final location failed`, enter the command `Sys.setenv(R_INSTALL_STAGED = FALSE)` and try installing again.

For packages not on CRAN, install the `remotes` package and use its functions to install packages from other sources like GitHub or GitLab repos:

```r
install.packages("remotes")
library("remotes")
install_github("USCbiostats/slurmR")
```

Alternatively, if using the command-line function `R CMD INSTALL` to install packages from source, enter:

```sh
R CMD INSTALL --no-staged-install --library=/path/to/rpkgs package_file.tar.gz
```

where the `--library` option specifies the absolute path to where you want your R packages to be installed and the `--no-staged-install` flag instructs to directly install the package in the library directory, avoiding pre-installation in a temporary folder. Using the `--no-staged-install` flag potentially reduces issues if Discovery is experiencing I/O problems.

> Note: We recommend keeping installed packages separated by R version (Major.Minor) to avoid compatibility issues.

To load an R package, enter:

```r
library(package_name)
```

or, if installed to an alternative location, enter:

```r
library(package_name, lib.loc = "/path/to/rpkgs")
```

### Installing a different version of R

If you want a different version of R that is not currently installed on the cluster, please contact us at `hpc@usc.edu` and we may be able to install it for you.

Alternatively, you can compile and install a different version of R from source inside your home directory. The following steps show how to do this using R version 4.0.0 as an example.

Find the source code file for the version of R that you want on [CRAN](https://cran.r-project.org/) and copy the link to the file. Then download the file into your home directory using `wget`:

```sh
wget https://cran.r-project.org/src/base/R-4/R-4.0.0.tar.gz
```

After the file is downloaded, unpack it by entering:

```sh
tar -xvzf R-4.0.0.tar.gz
```

Now navigate into the unpacked directory:

```sh
cd R-4.0.0
```

Then configure the install while specifying an install directory inside your home directory, build, and install:

```sh
./configure --prefix=/home1/ttrojan/R-4.0.0
make
make install
```

After installation, you can then start using this version of R by specifying the path to the binary file:

```sh
~/R-4.0.0/bin/R
```

or by exporting the path to your shell environment:

```sh
export PATH="~/R-4.0.0/bin:$PATH"
```

and then simply entering `R`.
