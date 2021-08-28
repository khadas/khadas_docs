title: Build Linux Kernel
---

This documentation will introduce how to build Linux kernel from source code.

We suggest to use [Fenix](https://github.com/khadas/fenix) to build Linux, just a few simple commands needed. Please refer to [Build Ubuntu/Debian Images](FenixScript.html) to setup the development environment.


## Setup Environment

You need to choose the `BOARD`, e.g. `VIM3`, U-Boot version, Linux version, system version, etc.

```bash
$ source setenv.sh
```

{% note info Note %}
At current stage, two version of Linux kernel supported:
* SoC vendor Linux version `4.9`, version is old but has best support
* Mainline Linux version, latest version but some functions may not work
{% endnote %}

You need to choose the correct version due to your requirement.

### Change the kernel config [Optional]

If you want to change the default kernel configuration you can follow these steps.

```
make kernel-config
make kernel-saveconfig
```

## Build

Simple commands to build Linux Debian package.

```bash
$ make kernel
$ make kernel-deb
```

You can find the Debian packages in folder `build/images/debs/{VERSION}/{BOARD}`.

**VERSION** : Means to Fenix version, e.g. `1.0.7`
**BOARD** : Means to Khadas board, e.g. `VIM3`

So the folder may be `build/images/debs/1.0.7/VIM3`, there are three packages we need: dtb package, image package and header package.

* 4.9
  * DTB - linux-dtb-amlogic-4.9_1.0.7_arm64.deb
  * IMAGE - linux-image-amlogic-4.9_1.0.7_arm64.deb
  * Header - linux-headers-amlogic-4.9_1.0.7_arm64.deb
* Mainline
  * DTB - linux-dtb-amlogic-mainline_1.0.7_arm64.deb
  * IMAGE - linux-image-amlogic-mainline_1.0.7_arm64.deb
  * Header - linux-headers-amlogic-mainline_1.0.7_arm64.deb

## See Also
[Upgrade Linux](UpgradeLinuxKernel.html)
