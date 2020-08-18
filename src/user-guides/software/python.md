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
---

[Python](https://www.python.org/) is an interpreted, general purpose programming language whose strength comes in the tools and libraries that are associated with it.

### Using Python on Discovery

Begin by logging in to Discovery. You can find instructions for this in the [Getting Started guide](/user-information/user-guides/high-performance-computing/discovery/getting-started).

To use Python, load the corresponding module:

```sh
module load python
```

This loads the default version, which is typically the newest version available. To load a specific version, you can run a command similar to:

```
module load python/3.7.6
```

where 3.7.6 is the version you want.

To see all available versions of Python, run the command:

```
module avail python
```

For example, python 3.7.4 can be loaded, its package listed, and the hello.py script run with the following commands, respectively:

```
module load python/3.7.4
python3 hello.py
pip3 list
```

Alternatively, the program could be run within Python's interpreter:

```
$ python3
Python 3.6.0 (default, Feb 17 2017, 15:36:40)
[GCC 4.8.5 20150623 (Red Hat 4.8.5-4)] on linux
Type "help", "copyright", "credits" or "license" for more information.
```

If the code is in the same directory where Python was invoked:

```
>>> exec(open('./hello.py').read())
Hello Tommy
```

If it's not in the same directory, use an absolute path:

```
>>> exec(open('/home/project/tt1/ttrojan/python/hello.py').read())
Hello Tommy
```

### Running Python interactively

After loading the module, you can run Python 3.x interactively by entering the command `python3`. For versions 2.x, the command `python` will start the interactive mode.

To run Python interactively on a compute node, use Slurm's `salloc` command to request compute resources:

```sh
salloc --time=1:00:00 --cpus-per-task=8 --mem-per-cpu=2GB --account=<account_id>
```

Once you are logged in to a compute node, load the module and enter `python3` or `python` to run Python interactively.

### Running Python in batch mode

After creating a Python script, you will need to create a Slurm job script to launch your Python program. The Slurm script might look like this:

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

Save this script as `python.slurm`, for example, and then submit it to the job scheduler like so:

```sh
sbatch python.slurm
```

Each line is described below:

|Command or Slurm argument|Meaning|
|----|----|
|`#!/bin/bash`|Use `/bin/bash` to execute this script |
|`#SBATCH`| Syntax that allows Slurm to read your requests (ignored by bash)|
|`--ntasks=1` |  Ensures all resources stay on a single compute node|
|`--cpus-per-task=4` | Reserves 4 CPUs for your exclusive use|
|`--mem-per-cpu=10GB` |  Reserves 2 GB per CPU of memory for your exclusive use|
|`--time=1:00:00` | Reserves resources described for 1 hour|
|`--account=<account_id>` | Charge compute time to <account_id>. If not specified, you may use up the wrong PI's compute hours|
|`module load gcc/8.3.0` | Load the `gcc` compiler [environment module](/user-information/user-guides/high-performance-computing/discovery/lmod)|
|`module load python/3.7.6` | Load the `python` [environment module](/user-information/user-guides/high-performance-computing/discovery/lmod)|
|`python /path/to/script.py` | Use `python` to run `script.py`|

You can use the following `script.py` as an example. Make sure to save it in the same directory as python.slurm.

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

#### Discovery

Python packages are not currently tracked in the [software module system](/user-information/user-guides/high-performance-computing/discovery/lmod). To see available packages, you can use the `pip3` and `freeze` commands:

    pip3 freeze
    appdirs==1.4.3
    atomicwrites==1.3.0
    attrs==19.3.0
    backcall==0.1.0
    cffi==1.14.0
    ...
    ...

You can install new packages to your home directory with the following command:

    pip3 install <package name> --user

For example, to upgrade the currently-installed Python package `pytest`, run the following command:

    pip3 install pytest --user --upgrade

To see a list of all installed packages and their current and latest versions, run the following command:

    pip3 list -o --format columns

#### CARC head nodes

The CARC installs a number of distributed-computing-related packages when installing a new version of Python. The packages can vary for each version. Once sourced, you can list the loaded global packages and dependencies by running `pip3 list`.

CARC researchers are also encouraged to install their own Python packages on Discovery (or upgrade those that were pre-installed). By default, Python will install local (i.e., user) packages in your home directory, in the subdirectory named `.local`. Python will create this directory if it does not already exist.

>Note: The dot in front of the subdirectory name is part of the name and is required, e.g., `~/.local, /home/rcf-40/ttrojan/.local`.

To install Python packages in a library other than the default (`~/.local/lib/python3.6/site-packages`), you can use the `--target` option with `pip3`. The following command installs a package in your scratch directory:

    pip3 install <package_name> --target /scratch/<username>/python_packages

To load a package, ensure you have appended your `PYTHONPATH` environment variable like so:

    export PYTHONPATH=/scratch/<username>/python_packages:${PYTHONPATH}

### Installing a different version of Python

If you want to use a different version of Python that is not currently installed on the cluster, please [submit a help ticket](/user-information/ticket-submission) and we may be able to install it for you.

Alternatively, you can compile and install a different version of Python from source inside your home directory. The following steps show how to do this using Python version 3.8.1 as an example.

Find the source code file for the version of Python that you want on the [Python website](https://www.python.org/downloads/) and copy the link to the file. Then download the file into your home directory using `wget`:

```sh
wget https://www.python.org/ftp/python/3.8.1/Python-3.8.1.tgz
```

After the file is downloaded, unpack it by entering:

```sh
tar -xvzf Python-3.8.1.tar.gz
```

Now navigate into the unpacked directory:

```sh
cd Python-3.8.1
```

Then configure the install while specifying an install directory inside your home directory, build using `make`, and install:

```sh
./configure --prefix=/home1/ttrojan/Python-3.8.1
make
make install
```

After installation, you can then start using this version of Python by specifying the path to the binary file:

```sh
~/Python-3.8.1/bin/python3
```

or by exporting the path to your shell environment:

```sh
export PATH="~/Python-3.8.1/bin:$PATH"
```

and then simply entering `python3`.
