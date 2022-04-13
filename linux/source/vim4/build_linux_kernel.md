title: Build the Linux Kernel
---

Build the Linux kernel from source.

[Fenix](https://github.com/khadas/fenix) can build Linux with just a few commands. Refer to [Build Ubuntu/Debian Images](fenix_script.html) to setup the development environment.


## Environment Setup

Choose your `board` (e.g. `VIM4`), U-Boot version, Linux version, system version, etc.

```bash
$ source setenv.sh
```

{% note info Note %}
Two versions of the Linux kernel are supported:
* 1. SoC Vendor: `5.4` (old but has the best support)
* 2. Mainline Linux (latest version, with missing functionality)
{% endnote %}

Choose the correct version for your requirements.

### Change the Kernel Config [Optional]

Follow these steps to change the default kernel configuration.

```
make kernel-config
make kernel-saveconfig
```

## Build

Build the Linux Debian package.

```bash
$ make kernel
$ make kernel-deb
```

Debian packages are in folder `build/images/debs/{VERSION}/{BOARD}`.

**VERSION** : refers to the Fenix version, e.g. `1.0.7`
**BOARD** : refers to the Khadas SBC, e.g. `VIM4`

The folder location is `build/images/debs/1.0.7/VIM4`, and you'll need 3 packages: `dtb package`, `image package` and `header package`.

* 5.4
  * .dtb - linux-dtb-amlogic-5.4_1.0.7_arm64.deb
  * Image - linux-image-amlogic-5.4_1.0.7_arm64.deb
  * Header - linux-headers-amlogic-5.4_1.0.7_arm64.deb
* Mainline
  * .dtb - linux-dtb-amlogic-mainline_1.0.7_arm64.deb
  * Image - linux-image-amlogic-mainline_1.0.7_arm64.deb
  * Header - linux-headers-amlogic-mainline_1.0.7_arm64.deb

## See Also
[Upgrade Linux](upgrade_system.html)
