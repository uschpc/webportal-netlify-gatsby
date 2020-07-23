---
author: Ryan Sim
id: 5
date: 2020-06-14T00:00:00.000Z
title: Software Module System 
path: lmod
parentPath: user-information/user-guides/high-performance-computing/discovery
cat: discoveryGuides
parentPage: User Guides
sideMenuParent: Discovery
---

One of the biggest user-facing changes to the test cluster is trading the setup.sh method of using software for the **module system**. Lmod has the ability to track software dependencies to ensure you have better control of your environment - *no more logging out and then back in to reset your environment!*

The official documentation for Lmod can be found here: https://lmod.readthedocs.io/en/latest/010_user.html

Lmod can be used to access software packages and versions that you need to conduct your research. Here are some of the basics.

### Checking available software

To see what modules you can load into your environment, run the command `module avail`. You should see something similar to:


```sh
--------/spack/apps/lmod/linux-centos7-x86_64/Core --------
gcc/4.9.4     gcc/9.2.0    (D)    intel/19.0.4 (D)
gcc/8.3.0    intel/18.0.4        usc

Where:
D:  Default Module

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules
matching any of the "keys".
```

If you have a fresh environment, only `Core` modules are available. These are usually compilers but can also be applications like MATLAB that are prebuilt and have no dependencies.

###  Loading/unloading software

Typically, loading modules is as simple as typing `module load <software_name>`. `<software_name>` must be visible when you run module avail.

By running:

    module load <software_name>

Lmod will set your environment such that the software specified in `<software_name>` will be placed in your path. To see what environment variables have been set, you can run:

    module show <software_name>

If there are multiple versions of `<software_name>` you can specify a version like so:

    module load <software_name>/<version>

For example, to load `gcc` version 8.3.0:
```
   $ module load gcc/8.3.0
```
If no version is specified:
```
   $ module load gcc
```
the default version will be loaded. The default version is indicated with a (D) next to it.

To unload a specific module you can run:

```
    module unload <software>
```

To see modules that you currently have loaded:

```
    module list
```

To see all modules that are available for loading AND compatible with currently loaded modules:

```
    module avail
```

To totally clear your environment:

```
    module purge
```

###  Finding software
The first time you log in and run `module avail`, it may not seem like much software is available. This is actually a safety feature that prevents you from loading incompatible modules. If you would like to explore the software tree, you can start loading modules and new ones will unlock. To see all applications built with a certain compiler, you can load that compiler module. Everything built with that compiler will become visible in module avail.

The current naming scheme for modules is `<software_name>/<version>-xxxx`.

Where `xxxx` is a 4 character hash (random looking characters).

#### Module spider
If you know the name of a software package, you can use the `module spider` command to find out if it's available and how to load it.

For example, to load SAMtools:
```
  $ module spider samtools

    ------------------------------------------------------
    samtools: samtools/1.9-rq3g
    ------------------------------------------------------

        You will need to load all module(s) on any one of the lines below before the "samtools/1.9-rq3g" module is available to load.

        gcc/8.3.0

        Help:
        SAM Tools provide various utilities for manipulating alignments in the
        SAM format, including sorting, merging, indexing and generating
        alignments in a per-position format
```

### Environment management

One of the nicest features of Lmod is that it can track software dependencies automatically. For example, let's say you want to use the `jellyfish` package compiled with `gcc/8.3.0`. You would load it like so:

```
module load gcc/8.3.0
module load jellyfish
```

If for some reason you need to use the `intel` compiler set, you can use the `module swap` command to swap out the `gcc` compiler:

```
module swap gcc intel

The following have been reloaded with a version change:
  1) jellyfish/2.2.7-oauz => jellyfish/2.3.0-2hxl
```

Lmod automatically changes the `jellyfish` module to one that was compiled with `intel`.

The module system can also automatically replace or deactivate modules to ensure the packages that are loaded are compatible with each other. In the example below, the module system automatically unloads one compiler (`intel`) when you load another (`gcc`), and replaces Intel-compatible versions of IMPI and PETSc with versions compatible with `gcc`:
```
$ module load intel  # load default version of Intel compiler
$ module load petsc  # load default version of PETSc
$ module load gcc    # change compiler

Lmod is automatically replacing "intel/17.0.4" with "gcc/7.1.0".

Due to MODULEPATH changes, the following have been reloaded:
1) impi/17.0.3     2) petsc/3.7

```

### Module settings

Loading the desired module will make some changes to your environment. Some common settings include:

|Environment Variable|Description|
|-|-|
|`{NAME}_ROOT`|Creates environment variable {NAME}_ROOT which points to the root directory of installation|
|`PATH`|Adds `{NAME}_ROOT/bin` to PATH|
|`MANPATH`| Adds `{NAME}_ROOT/share/man` to search manual path|
|`LD_LIBRARY_PATH`| Adds appropriate library directory to library search path|
|`PKG_CONFIG_PATH`| Enables package to be found by `pkg-config`; useful for building other software|
|`CMAKE_PREFIX_PATH`| Enables package build settings to be found by `cmake`; useful for building other software|

Every package is different; some will have extra environment variables, while others will have fewer. For example, Intel compilers will have a `INTEL_LICENSE_FILE` setting while Boost has a directory to add to `PATH`.
