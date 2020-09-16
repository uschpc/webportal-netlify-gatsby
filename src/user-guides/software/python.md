---
author: Ryan Sim
id: 1
date: 2020-06-14T00:00:00.000Z
title: Using Python on Discovery
alternativeTitle: Python
path: python
parentPath:  user-information/user-guides/software-and-programming
cat: software
parentPage: User Guides
backToTopBtnFlag: true
excerpt: A user guide for Python, an open-source, general purpose programming language whose strength comes in the tools and libraries that are associated with it.
---

[Python](https://www.python.org/) is an open-source, general purpose programming language whose strength comes in the tools and libraries that are associated with it.

### Using Python on Discovery

Begin by logging in to Discovery. You can find instructions for this in the [Getting Started guide](/user-information/user-guides/high-performance-computing/discovery/getting-started).

To use Python, load the corresponding module:

```sh
module load python
```

This loads the default version, which is currently 3.7.6. To load a specific version, you can run a command similar to:

```sh
module load python/3.7.6
```

where `3.7.6` is the version you want. To see all available versions of Python, enter:

```sh
module spider python
```

#### Installing a different version of Python

If you want to use a different version of Python that is not currently installed on Discovery, please [submit a help ticket](/user-information/ticket-submission) and we will install it for you. Alternatively, you can compile and install a different version of Python from source inside your home directory.

#### Pre-installed packages

Many popular Python packages have already been installed on Discovery. Use the `pip3 list` command to view them. You can install other Python packages that you need into your home directory (see section below).

#### Jupyter notebooks

Please note that we do not currently support the use of Jupyter notebooks on Discovery. We will add support for Jupyter later in 2020 as part of a new hybrid cloud computing system.

### Running Python interactively

Running Python interactively will allow you to test out any installations and compiler settings without submitting and waiting for a Slurm script.

After loading the module, on the **login node** you can run Python 3.x interactively by entering the command `python3`. For versions 2.x, enter the command `python`.

To run Python interactively on a **compute node**, use Slurm's `salloc` command to request compute resources:

```sh
salloc --time=1:00:00 --cpus-per-task=8 --mem-per-cpu=2GB --account=<account_id>
```

Each argument to the `salloc` command is described below:

|Slurm argument|Meaning|
|----|----|
|`--time=1:00:00` | Reserves resources described for 1 hour. Acceptable time formats include "minutes", "minutes:seconds", "hours:minutes:seconds", "days-hours", "days-hours:minutes" and "days-hours:minutes:seconds"|
|`--cpus-per-task=8` | Reserves 8 CPUs for your exclusive use|
|`--mem-per-cpu=2GB` |  Reserves 2 GB per CPU of memory for your exclusive use|
|`--account=<account_id>` | Charge compute time to <account_id>. If not specified, you may use up the wrong PI's compute hours|

A more comprehensive list of `salloc`/`sbatch` options can be found [here](https://slurm.schedmd.com/sbatch.html).

Once you are logged in to a compute node, load the module and enter `python3` or `python` to run Python interactively.

To run Python scripts from within Python, use the command `exec(open('script.py').read())`. Alternatively, to run Python scripts from the shell, use the `python3 script.py` command.

### Running Python in batch mode

In most scenarios, you will want to create a Slurm script to run your code without your input.

After creating your Python script, you will need to create a Slurm job script to launch your Python program. The Slurm script might look like this:

```sh
#!/bin/bash
    
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=4
#SBATCH --mem-per-cpu=10GB
#SBATCH --time=1:00:00
#SBATCH --account=<account_id>
    
module load gcc/8.3.0
module load python/3.7.6
    
python3 /path/to/script.py
```

Each line is described below:

|Command or Slurm argument|Meaning|
|----|----|
|`#!/bin/bash`|Use `/bin/bash` to execute this script |
|`#SBATCH`| Syntax that allows Slurm to read your requests (ignored by bash)|
|`--ntasks=1` |  Ensures all resources stay on a single compute node|
|`--cpus-per-task=4` | Reserves 4 CPUs for your exclusive use|
|`--mem-per-cpu=10GB` |  Reserves 10 GB per CPU of memory for your exclusive use|
|`--time=1:00:00` | Reserves resources described for 1 hour|
|`--account=<account_id>` | Charge compute time to <account_id>. If not specified, you may use up the wrong PI's compute hours|
|`module load gcc/8.3.0` | Load the `gcc` compiler [environment module](/user-information/user-guides/high-performance-computing/discovery/lmod)|
|`module load python/3.7.6` | Load the `python` [environment module](/user-information/user-guides/high-performance-computing/discovery/lmod)|
|`python /path/to/script.py` | Use `python` to run `script.py`|

Save this Slurm script as `python.slurm`, for example, and then submit it to the job scheduler like so:

```sh
sbatch python.slurm
```

You can use the following `script.py` as an example. Make sure to save it in the same directory as `python.slurm`.

```python
import numpy as np
import matplotlib.pyplot as plt
  
Y, X = np.mgrid[-3:3:200j, -3:3:200j]
  
x_pos=np.array((-1,-1,1, 1)) # X positions of point charges
y_pos=np.array((1, -1,1,-1)) # Y positions of point charges
q=np.array((-1,+1,+1,-1))    # Charge of point charges
  
# Calculate x and y components of electric field due to point charge
def Ex(x0,y0,q):
    return -q*(X-x0)/((X-x0)**2+(Y-y0)**2)
def Ey(x0,y0,q):
    return -q*(Y-y0)/((X-x0)**2+(Y-y0)**2)
  
# Calculate electric field due to multiple point charges
Ex_total=Ex(x_pos[0],y_pos[0],q[0])+Ex(x_pos[1],y_pos[1],q[1])+Ex(x_pos[2],y_pos[2],q[2])+Ex(x_pos[3],y_pos[3],q[3])
Ey_total=Ey(x_pos[0],y_pos[0],q[0])+Ey(x_pos[1],y_pos[1],q[1])+Ey(x_pos[2],y_pos[2],q[2])+Ey(x_pos[3],y_pos[3],q[3])
E_total=np.sqrt((Ex_total**2+Ey_total**2))
  
# Clip E_total for aesthetic purposes
clipped=np.clip(E_total,0,np.sqrt(3))
  
# Plot electric field lines, set color based on field strength
fig1, ax1 = plt.subplots(1,1)
strm = ax1.streamplot(X, Y, Ex_total, Ey_total, color=clipped, linewidth=2, density=1,cmap='PiYG')
fig1.colorbar(strm.lines)
  
# Plot position of point charges
ax1.plot(x_pos, y_pos, 'ro')
  
# Display plot, only works if X11 Forwarding is enabled
plt.show()
  
# Save plot to working directory
plt.savefig("plot.png",dpi=300)
print("Plot saved!")
```

### Installing Python packages

After loading the Python module, you can install packages to your home directory with the following command:

    pip3 install <package_name> --user

For example, to upgrade the currently-installed Python package `pytest`, run the following command:

    pip3 install pytest --user --upgrade

By default, Python will install local (i.e., user) packages in your home directory, in the subdirectory named `.local`. Python will create this directory if it does not already exist.

> Note: The dot in front of the subdirectory name is part of the name, indicating a hidden directory, and is required, e.g., `~/.local, /home1/ttrojan/.local`.

To install Python packages in a library other than the default (`~/.local/lib/python3.7/site-packages`), you can use the `--target` option with `pip3`. The following command installs a package in your scratch directory:

    pip3 install <package_name> --target /scratch/<username>/python_packages

To load a package, ensure you have appended your `PYTHONPATH` environment variable like so:

    export PYTHONPATH=/scratch/<username>/python_packages:${PYTHONPATH}

### Additional resources

If you have questions about or need help with Python, please [submit a help ticket](/user-information/ticket-submission) and we will assist you.

[Python](https://www.python.org/)  
[Python documentation](https://www.python.org/doc/)  
[Anaconda user guide](/user-information/user-guides/software-and-programming/anaconda)  