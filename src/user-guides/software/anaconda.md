---
author: Derek Strong
id: 3
date: 2020-10-12T12:00:00.387Z
title: Using Anaconda
alternativeTitle: Anaconda
path: anaconda
parentPath: user-information/user-guides/software-and-programming
cat: software
parentPage: User Guides
backToTopBtnFlag: true
excerpt: A user guide for Anaconda, a package and environment manager.
---

[Anaconda](https://www.anaconda.com/) is a package and environment manager primarily used for open-source data science packages for Python and R. Other programming languages like C/C++, FORTRAN, Java, Scala, Ruby, and Lua are also supported.

### Using Anaconda

Begin by logging in. You can find instructions for this in the [Getting Started with Discovery](/user-information/user-guides/high-performance-computing/discovery/getting-started-discovery) or [Getting Started with Endeavour](/user-information/user-guides/high-performance-computing/discovery/getting-started-endeavour) user guides.

To use Anaconda, first load the corresponding module:

```sh
module load anaconda3
```

The Anaconda module depends on the `gcc/8.3.0` module, which is loaded by default when logging in. This module needs to be loaded first because Anaconda was installed with the GCC 8.3.0 compiler, though other compilers can be used within Anaconda environments.

In Slurm job scripts, the `gcc` module should be loaded explicitly before loading Anaconda:

```sh
module load gcc/8.3.0
module load anaconda3
```

Included in all versions of Anaconda, [Conda](https://docs.conda.io/en/latest/) is the package and environment manager that installs, runs, and updates packages and their dependencies. Many Conda packages are pre-installed with Anaconda in the base Conda environment, including the popular data science packages for Python like pandas, NumPy, SciPy, matplotlib, and scikit-learn.

To see the full list of available Conda packages in the base environment, enter:

```sh
conda list
```

To use these packages or create your own Conda environment, first initialize your shell to use Conda:

```sh
conda init bash
```

This modifies your `~/.bashrc` file. Then enter `source ~/.bashrc` and this will activate the base environment, which will be reflected in your shell prompt:

```sh
(base) user@discovery:~$
```

The base environment will now be activated every time you log in to the cluster. To disable this, you can move the Conda initialization lines from your `~/.bashrc` file to a separate file and then source that file when needed to enable activating environments. For example, create a `~/.condainit` file with these lines and then enter `source ~/.condainit`. Alternatively, to change the Conda configuration, enter:

```sh
conda config --set auto_activate_base false
```

which will create a `~/.condarc` file to override the default behavior of automatically activating the base environment when logging in. Read more about Conda configuration [here](https://docs.conda.io/projects/conda/en/latest/user-guide/configuration/use-condarc.html).

### Installing Conda packages

You can install other Conda packages that you may need in a new Conda environment in your home or project directory. Conda environments are isolated project environments designed to manage distinct package requirements and dependencies for different projects.

To create a new Conda environment in your home directory, enter:

```sh
conda create --name <env_name>
```

where `<env_name>` is the name of your environment. Then activate the environment:

```sh
conda activate <env_name>
```

To deactivate an environment, enter:

```sh
conda deactivate <env_name>
```

Next use the `conda install <pkg>` command. For example, to install the `csvkit` package, enter:

```sh
conda install csvkit
```

You can also create a new environment in your project directory instead using the `--prefix` option:

```sh
conda create --prefix /project/<project_id>/<env_name>
```

where `<project_id>` is your project's account ID. Then activate the environment:

```sh
conda activate /project/<project_id>/<env_name>
```

To view a list of all your Conda environments, enter:

```sh
conda info --envs
```

### Running Python with Anaconda interactively

After loading the module, the Python version installed with Anaconda can be run interactively on the **login node** by simply entering `python`:

```sh
(base) user@discovery:~$ module load anaconda3
(base) user@discovery:~$ python
Python 3.7.4 (default, Aug 13 2019, 20:35:49)
[GCC 7.3.0] :: Anaconda, Inc. on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

> Note: Using Python on the login node should be reserved for non-intensive work.

Alternatively, using Python interactively on a **compute node** is useful for more intensive work like exploring data, testing models, and debugging.

To run Python interactively on a compute node, first use Slurm's `salloc` command to reserve resources on a node:

```sh
(base) user@discovery:~$ salloc --time=1:00:00 --ntasks=1 --cpus-per-task=8 --mem=16GB --account=<account_id>
salloc: Pending job allocation 22658
salloc: job 22658 queued and waiting for resources
salloc: job 22658 has been allocated resources
salloc: Granted job allocation 22658
salloc: Waiting for resource configuration
salloc: Nodes d11-35 are ready for job
```

Each argument to the `salloc` command is described below:

|Slurm argument | Meaning|
|----|----|
|`--time=1:00:00` | Reserves resources described for 1 hour. Acceptable time formats include "minutes", "minutes:seconds", "hours:minutes:seconds", "days-hours", "days-hours:minutes" and "days-hours:minutes:seconds"|
|`--ntasks=1` |  Ensures all resources stay on a single compute node|
|`--cpus-per-task=8` | Reserves 8 CPUs for your exclusive use|
|`--mem=16GB` |  Reserves 16 GB of memory for your exclusive use|
|`--account=<account_id>` | Charges compute time to <account_id>. If not specified, you may use up the wrong PI's compute hours|

Be sure to change the resource requests as needed, such as the number of cores and memory required. A more comprehensive list of `salloc`/`sbatch` options can be found [here](https://slurm.schedmd.com/sbatch.html).

Once you are granted the resources and logged in to a compute node, load the `gcc` and `anaconda` modules and then enter `python`:

```sh
(base) user@d11-35:~$ module load gcc/8.3.0 anaconda3
(base) user@d11-35:~$ conda activate env
(env) user@d11-35:~$ python
Python 3.7.4 (default, Aug 13 2019, 20:35:49)
[GCC 7.3.0] :: Anaconda, Inc. on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

Notice that the shell prompt changes from `user@discovery` to `user@d11-35` to indicate that you are now on a compute node (d11-35).

To run Python scripts from within Python, use the `exec(open("script.py").read())` command. Alternatively, to run Python scripts from the shell, use the `python script.py` command, after loading the Anaconda module and activating the correct environment.

To exit the compute node and relinquish the job resources, enter `exit()` to exit Python and then enter `exit` in the shell. This will return you to the login node:

```sh
>>> exit()
(env) user@d11-35:~$ exit
exit
salloc: Relinquishing job allocation 22658
(base) user@discovery:~$
```

Please note that compute nodes do not have access to the public internet, so any data downloads or package installations should first be completed on the login node.

### Running Python with Anaconda in batch mode

In order to submit jobs to the Slurm job scheduler, you will need to use Python with Anaconda in batch mode. There are a few steps to follow:

1. Create a Python script
2. Create a Slurm job script that runs the Python script
3. Submit the job script to the job scheduler

Your Python script should consist of the sequence of Python commands needed for your analysis.

The `python` command, available after the Anaconda module has been loaded, runs Python scripts, and it can be used in the shell and in Slurm job scripts.

A Slurm job script is a special type of Bash shell script that the Slurm job scheduler recognizes as a job. For a Python with Anaconda job, a Slurm job script should look something like the following (with comments describing the resources requested):

```sh
#!/bin/bash

#SBATCH --ntasks=1             # 1 process
#SBATCH --cpus-per-task=8      # 8 cores
#SBATCH --mem=16GB             # 16 GB of memory
#SBATCH --time=1:00:00         # 1 hour run time
#SBATCH --account=<account_id> # Account to charge resources to

module load gcc/8.3.0
module load anaconda3

eval "$(conda shell.bash hook)"

conda activate env

python /path/to/script.py
```

Each line is described below:

| Command or Slurm argument | Meaning|
|---|---|
|`#!/bin/bash` | Use `/bin/bash` to execute this script|
|`#SBATCH` | Syntax that allows Slurm to read your requests (ignored by Bash)|
|`--ntasks=1` |  Ensures all resources stay on a single compute node|
|`--cpus-per-task=8` | Reserves 8 CPUs for your exclusive use|
|`--mem=16GB` |  Reserves 16 GB of memory for your exclusive use|
|`--time=1:00:00` | Reserves resources described for 1 hour|
|`--account=<account_id>` | Charges compute time to <account_id>. If not specified, you may use up the wrong PI's compute hours|
|`module load gcc/8.3.0` | Load the `gcc` compiler [environment module](/user-information/user-guides/high-performance-computing/discovery/lmod)|
|`module load anaconda3` | Load the `anaconda3` [environment module](/user-information/user-guides/high-performance-computing/discovery/lmod)|
|`eval "$(conda shell.bash hook)"` | Initialize the shell to use Conda|
|`conda activate env` | Activate your Conda environment|
|`python /path/to/script.py` | Use `python` to run `script.py`|

You can adjust the resources requested based on your needs, but remember that fewer resources requested leads to less queue time for your job.

You can develop Python scripts and job scripts on your local machine and then transfer them to the cluster, or you can use one of the available text editors on our systems to develop them (`nano`, `vim`, or `emacs`).

Save the job script as `py.job`, for example, and then submit it to the job scheduler:

```sh
user@discovery:~$ sbatch py.job
Submitted batch job 1002
```

The results of the job will be logged and, by default, saved to a file of the form `slurm-<jobid>.out` in the same directory where the job script is located.

### Additional resources

If you have questions about or need help with Anaconda, please [submit a help ticket](/user-information/ticket-submission) and we will assist you.

[Anaconda](https://www.anaconda.com/)  
[Anaconda documentation](https://docs.anaconda.com/anaconda/)  
[Conda documentation](https://conda.io/en/latest/)  
[Python user guide](/user-information/user-guides/software-and-programming/python)  
