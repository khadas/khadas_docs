title: Build U-Boot
---

This documentation will introduce how to build U-Boot from source code.

We suggest to use [Fenix](https://github.com/khadas/fenix) to build U-Boot, just a few simple commands needed. Please refer to [Build Ubuntu/Debian Images](FenixScript.html) to setup the development environment.


## Setup Environment

You need to choose the `BOARD`, e.g. `VIM3`, U-Boot version, Linux version, system version, etc.

```bash
$ source setenv.sh
```

{% note info Note %}
At current stage, two version of U-Boot supported:
* SoC vendor U-Boot version `2015.01`, version is old but has best support
* Mainline U-Boot version, latest version but some functions may not work
{% endnote %}

You need to choose the correct version due to your requirement.

## Build

### Build U-Boot Binaries

Just a simple command to build.

```
$ make uboot
```

You can find the binaries in folder `build/u-boot/fip/_tmp`, what we need are `u-boot.bin.sd.bin` and ` u-boot.bin`.

* `u-boot.bin.sd.bin` - Used to burn to **SD card**
* `u-boot.bin` - Used to burn to **eMMC**

### Build U-Boot Debian Package

You can also choose to U-Boot as Debian package which can be installed in Ubuntu system.

```bash
$ make uboot-deb
```

You can find the Debian packages in folder `build/images/debs/{VERSION}/{BOARD}`.

**VERSION** : Means to Fenix version, e.g. `1.0.7`
**BOARD** : Means to Khadas board, e.g. `VIM3`

So the folder may be `build/images/debs/1.0.7/VIM3`, and the U-Boot Debian packages will be `linux-u-boot-xxx-xxx_xxx-xxx_arm64.deb`.

* SoC vendor U-Boot Debian package : `linux-u-boot-vim3-vendor_1.0.7-2015.01_arm64.deb`
* Mainline U-Boot Debian package : `linux-u-boot-vim3-mainline_1.0.7-v2021.04_arm64.deb`

## See Also
[Upgrade U-Boot](UpgradeUboot.html)
