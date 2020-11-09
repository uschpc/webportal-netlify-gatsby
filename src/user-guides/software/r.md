---
author: Derek Strong
id: 4
date: 2020-06-04T12:00:00.387Z
title: Using R
path: r
parentPath: user-information/user-guides/software-and-programming
cat: software
parentPage: User Guides
backToTopBtnFlag: true
excerpt: A user guide for R, an open-source programming environment and language designed for statistical computing and graphics.
---

[R](https://www.r-project.org) is an open-source programming environment and language designed for statistical computing and graphics.

### Using R

Begin by logging in. You can find instructions for this in the [Getting Started with Discovery](/user-information/user-guides/high-performance-computing/getting-started-discovery) or [Getting Started with Endeavour](/user-information/user-guides/high-performance-computing/getting-started-endeavour) user guides.

You can use R in either interactive or batch modes. Ultimately, you will submit your R jobs using batch mode with R scripts as part of Slurm job scripts. You can use interactive mode to install packages and explore data, for example.

To use R, either interactively or in batch mode, first load the corresponding software module:

```sh
module load r
```

This loads the default version of R, currently 4.0.0, and is equivalent to `module load r/4.0.0`. If you require a different version, specify the version of R when loading. For example:

```sh
module load r/3.6.3
```

To see all available versions of R, enter:

```sh
module spider r
```

The R modules depend on the `gcc/8.3.0` and `openblas/0.3.8` modules, which are loaded by default when logging in. These modules need to be loaded first because R was built with the GCC 8.3.0 compiler and linked to the OpenBLAS 0.3.8 linear algebra library for improved performance. Loading the modules also ensures that any R packages installed from source are built with these versions of GCC and OpenBLAS.

In Slurm job scripts, the `gcc` and `openblas` modules should be loaded explicitly before loading R:

```sh
module load gcc/8.3.0
module load openblas/0.3.8
module load r/4.0.0
```

#### Installing a different version of R

If you require a different version of R that is not currently installed on CARC systems, please [submit a help ticket](/user-information/ticket-submission) and we will install it for you. Alternatively, you can compile and install a different version of R from source inside your home directory.

#### Pre-installed packages

Many popular R packages have already been installed on CARC systems. Use the `names(installed.packages()[ , 1])` command to view them. You can install other R packages that you need into your home directory (see section below).

#### RStudio

Please note that we do not currently support the use of the RStudio IDE on our systems. We will add support for RStudio later in 2020 as part of a new hybrid cloud computing system.

### Running R interactively

After loading the module, to run R interactively on the **login node**, simply enter `R` and this will start a new R session:

```sh
user@discovery:~$ module load r
user@discovery:~$ R
  
R version 4.0.0 (2020-04-24) -- "Arbor Day"
Copyright (C) 2020 The R Foundation for Statistical Computing
Platform: x86_64-pc-linux-gnu (64-bit)
  
R is free software and comes with ABSOLUTELY NO WARRANTY.
You are welcome to redistribute it under certain conditions.
Type 'license()' or 'licence()' for distribution details.
  
  Natural language support but running in an English locale
  
R is a collaborative project with many contributors.
Type 'contributors()' for more information and
'citation()' on how to cite R or R packages in publications.
  
Type 'demo()' for some demos, 'help()' for on-line help, or
'help.start()' for an HTML browser interface to help.
Type 'q()' to quit R.
  
>
```

Using R on the login node should be reserved for installing packages and non-intensive work.

Alternatively, using R interactively on a **compute node** is useful for more intensive work like exploring data, testing models, and debugging.

To run R interactively on a compute node, first use Slurm's `salloc` command to reserve resources on a node: 

```sh
user@discovery:~$ salloc --time=1:00:00 --ntasks=1 --cpus-per-task=8 --mem=16GB --account=<account_id>
salloc: Pending job allocation 24316
salloc: job 24316 queued and waiting for resources
salloc: job 24316 has been allocated resources
salloc: Granted job allocation 24316
salloc: Waiting for resource configuration
salloc: Nodes d0035 are ready for job
```

Once you are granted the resources and logged in to a compute node, load the modules and then enter `R`:

```sh
user@d0035:~$ module load gcc/8.3.0 openblas/0.3.8 r/4.0.0
user@d0035:~$ R
  
R version 4.0.0 (2020-04-24) -- "Arbor Day"
Copyright (C) 2020 The R Foundation for Statistical Computing
Platform: x86_64-pc-linux-gnu (64-bit)
  
R is free software and comes with ABSOLUTELY NO WARRANTY.
You are welcome to redistribute it under certain conditions.
Type 'license()' or 'licence()' for distribution details.
  
  Natural language support but running in an English locale
  
R is a collaborative project with many contributors.
Type 'contributors()' for more information and
'citation()' on how to cite R or R packages in publications.
  
Type 'demo()' for some demos, 'help()' for on-line help, or
'help.start()' for an HTML browser interface to help.
Type 'q()' to quit R.
  
>
```

Notice that the shell prompt changes from `user@discovery` to `user@d0035` to indicate that you are now on a compute node (d0035).

Be sure to change the resource requests (the `--time=1:00:00 --ntasks=1 --cpus-per-task=8 --mem=16GB --account=<account_id>` part after your `salloc` command) as needed, such as the number of cores and memory required.

To run R scripts from within R, use the `source()` function. Alternatively, to run R scripts from the shell, use the `Rscript` command, after loading the R module.

To exit the node and relinquish the job resources, enter `q()` to exit R and then enter `exit` in the shell. This will return you to the login node:

```sh
> q()
  
user@d0035:~$ exit
exit
salloc: Relinquishing job allocation 24316
  
user@discovery:~$
```

>Note: Compute nodes do not have access to the public internet, so any data downloads or package installations should first be completed on the login node.

### Installing R packages

To install R packages, open an interactive session of R on the login node and use the `install.packages()` function for registered packages from [CRAN](https://cran.r-project.org/). For example, to install the `skimr` package, enter:

```r
install.packages("skimr")
```

R may prompt you to use a personal library; enter `yes`. R will then prompt you to create a personal library in your home directory (for example, `~/R/x86_64-pc-linux-gnu-library/4.0`); enter `yes` again. R may also prompt you to select a CRAN mirror; enter `1` for simplicity (the 0-Cloud mirror) or select a US-based mirror.

To specify a different library location to install the package to, use the `lib` argument:

```r
install.packages("skimr", lib = "/path/to/rpkgs")
```

Choosing a different location may be useful for shared project libraries among your research team. To view or add libraries to your R session, use the `.libPaths()` function.

To load an R package, use the `library()` function. For example:

```r
library(skimr)
```

Or, if installed to an alternative library location, use the `lib.loc` argument:

```r
library(skimr, lib.loc = "/path/to/rpkgs")
```

To install unregistered or development versions of packages, such as from GitHub or GitLab, use the `remotes` package and its functions. For example:

```r
install.packages("remotes")
remotes::install_github("USCbiostats/slurmR")
```

Some R packages have system dependencies, and the modules for these dependencies should be loaded before starting R and installing the packages. For example, the `XML` package requires the `libxml2` system library, so load the associated module and then start R:

```sh
module load libxml2
```

To search for available modules for dependencies, use the `module spider <keyword>` command, with the keyword being the dependency name. If you do not find a needed module, please [submit a help ticket](/user-information/ticket-submission) and we will install it for you.

#### Installing packages from Bioconductor

You can install packages from [Bioconductor](https://www.bioconductor.org/) using the `BiocManager` package, which is pre-installed on CARC clusters, and the `BiocManager::install()` function.

For example, to install the `GenomicFeatures` package, use:

```r
BiocManager::install("GenomicFeatures")
```

Find more information about `BiocManager` [here](https://www.bioconductor.org/install/).

### Running R in batch mode

In order to submit jobs to the Slurm job scheduler, you will need to use R in batch mode. There are a few steps to follow:

1. Create an R script
2. Create a Slurm job script that runs the R script
3. Submit the job script to the job scheduler

Your R script should consist of the sequence of R commands needed for your analysis. For example:

```r
# R script to filter and summarize data
library(readr)
library(dplyr)
  
dataset <- read_csv("/home1/user/R/data/dataset.csv")
  
data <-
  dataset %>%
  select(var1, var3, var5) %>%
  filter(var3 == TRUE)
  
summary(data)
```

The `Rscript` command, available after the R module has been loaded, runs R scripts, and it can be used in the shell and in Slurm job scripts.

A Slurm job script is a special type of Bash shell script that the Slurm job scheduler recognizes as a job. For an R job, a Slurm job script should look something like the following (with comments describing the resources requested):

```sh
#!/bin/bash
  
#SBATCH --ntasks=1             # 1 process
#SBATCH --cpus-per-task=8      # 8 cores
#SBATCH --mem=16GB             # 16 GB of memory
#SBATCH --time=1:00:00         # 1 hour run time
#SBATCH --account=<account_id> # Account to charge resources to
  
module load gcc/8.3.0
module load openblas/0.3.8
module load r/4.0.0
  
cd /home1/user/R/scripts
  
Rscript --vanilla script.R
```

Each line is described below:

|Command or Slurm argument| Meaning|
|---|---|
|`#!/bin/bash`| Use `/bin/bash` to execute this script |
|`#SBATCH`| Syntax that allows Slurm to read your requests (ignored by bash)|
|`--ntasks=1` |  Ensures all resources stay on a single compute node|
|`--cpus-per-task=8` | Reserves 8 CPUs for your exclusive use|
|`--mem=10GB` |  Reserves 16 GB of memory for your exclusive use|
|`--time=1:00:00` | Reserves resources described for 1 hour|
|`--account=<account_id>` | Charge compute time to <account_id>. If not specified, you may use up the wrong PI's compute hours|
|`module load gcc/8.3.0` | Load the `gcc` compiler [environment module](/user-information/user-guides/high-performance-computing/lmod)|
|`module load openblas/0.3.8` | Load the `openblas` [environment module](/user-information/user-guides/high-performance-computing/lmod)|
|`module load r/4.0.0` | Load the `r` [environment module](/user-information/user-guides/high-performance-computing/lmod). Note that R requires both `gcc` and `openblas`|
|`cd /home1/user/R/scripts` | Change to the directory where your R script is|
|`Rscript --vanilla script.R` | Use `Rscript` to run `script.R`. The `--vanilla` option will ensure a clean R session that helps with the reproducibility of jobs|

You can adjust the resources requested based on your needs, but remember that fewer resources requested leads to less queue time for your job. 

You can develop R scripts and job scripts on your local machine and then transfer them to the cluster, or you can use one of the available text editors on our systems to develop them (`nano`, `vim`, or `emacs`).

Save the job script as `R.job`, for example, and then submit it to the job scheduler:

```sh
user@discovery:~$ sbatch R.job
Submitted batch job 275
```

The results of the job will be logged and, by default, saved to a file of the form `slurm-<jobid>.out` in the same directory where the job script is located.

### Parallel programming with R

R supports both implicit and explicit parallel programming. Some packages and their functions utilize implicit parallelism, where the user does not need to explicitly call for parallel computation by modifying their code. These packages will automatically use the cores available. Linear algebra computations, for example, will use the OpenBLAS library that automatically runs in parallel if more than one core is used. In addition, there are a number of R packages that support explicit parallelism, including the base `parallel` package as well as the `foreach`, `future`, and `BiocParallel` packages among others.

The easiest approach to parallel programming with R on CARC systems is to use one compute node with multiple cores, which at least takes advantage of implicit parallelism. You can also use multiple nodes through an MPI job, though this requires a more advanced setup and may not be worth the cost.

A common task in R is applying the same function to multiple data inputs, either different samples or chunks from the same dataset, for example. Typically, this task will be accomplished through the use of the `*apply()` family of functions, which loop through the data inputs, apply the function in sequence, and then return the results (typically as a list object). The `parallel` package contains parallel versions of these functions, which will perform a certain number of these iterations simultaneously based on the number of cores available and thus speed up the time to completion.

The following example uses the base `parallel` package with a single node and multiple cores. For simplicity, this example will create multiple dummy datasets and run the same linear model on them. In the serial version, this task can be accomplished by using the `lapply()` function that applies the user-defined `model()` function to each dataset in sequence and then returns the results in a list. The parallel version simply uses the `mclapply()` function with similar syntax.

The following is an example R script:

```r
# Parallel computing with R on CARC clusters
library(parallel)
  
# Define number of cores based on Slurm job script
cores <- as.integer(Sys.getenv("SLURM_CPUS_PER_TASK")) - 1
  
# Create large datasets in parallel with same number of variables and store in list
datasets <- mclapply(1:100, function(x) data.frame(matrix(rnorm(1000000), ncol = 1000)), mc.cores = cores)
  
# The serial analog is: lapply(1:100, function(x) data.frame(matrix(rnorm(1000000), ncol = 1000)))
# Create model with same formula but accepting different data inputs
  
model <- function(x) {
  xnames <- paste0("X", 2:1000)
  formula <- as.formula(paste("X1 ~ ", paste(xnames, collapse = "+")))
  lm(formula, x)
}
  
# Run models in parallel and store results in list
results <- mclapply(datasets, model, mc.cores = cores)
  
# The serial analog is: lapply(datasets, model)
```

A key step here is to match the requested resources in your Slurm job script to the number of cores used in your code, although you will typically want to reserve one core for overhead. This can be accomplished automatically using the Slurm environment variable `SLURM_CPUS_PER_TASK`, which equals the `--cpus-per-task` requested in the Slurm job script.

The line `cores <-as.integer(Sys.getenv("SLURM_CPUS_PER_TASK")) - 1` defines the number of cores dynamically, so that you do not need to update the code if you change the resources requested in the Slurm job script.

The setup for this kind of parallel task is relatively easy to implement. The `mc.cores` argument for the `mclapply()` function simply instructs R to use that number of cores for parallel computation, but the user does not need to do anything more than that. The functions in the `foreach` package have a similar setup. More advanced parallel programming requires a more complicated setup, so you must also consider the costs of enabling it.

A Slurm job script for this example could look similar to the previous example with more resources requested:

```sh
#!/bin/bash
  
#SBATCH --ntasks=1             # 1 process
#SBATCH --cpus-per-task=12     # 12 cores
#SBATCH --mem=24GB             # 24 GB of memory
#SBATCH --time=1:00:00         # 1 hour run time
#SBATCH --account=<account_id> # Account to charge resources to
  
module load gcc/8.3.0
module load openblas/0.3.8
module load r/4.0.0
  
cd /home1/user/R/scripts
  
Rscript --vanilla /path/to/script.R
```

Note that maximizing the number of cores does not necessarily speed up your analysis in a proportional manner; the speedup depends on the scale and kinds of computations that are involved. There is an optimal number of cores that you may need to experiment with to find.

If you have questions about or need help with developing parallel code for R, please [submit a help ticket](/user-information/ticket-submission) and we will assist you.

### Additional resources

If you have questions about or need help with R, please [submit a help ticket](/user-information/ticket-submission) and we will assist you.

[R Project](https://www.r-project.org)  
[R Manuals](https://cran.r-project.org/manuals.html)  
[CRAN Task View on High-Performance and Parallel Computing with R](https://cran.r-project.org/web/views/HighPerformanceComputing.html)  
[Programming with Big Data in R](https://pbdr.org/)  
[rOpenSci](https://ropensci.org/)  
