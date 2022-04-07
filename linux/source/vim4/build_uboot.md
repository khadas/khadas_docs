title: Build U-Boot
---

Build U-Boot from source.

[Fenix](https://github.com/khadas/fenix) can build U-Boot with just a few commands. Refer to [Build Ubuntu/Debian Images](fenix_script.html) to setup the development environment.


## Environment Setup

Choose your `board` (e.g. `VIM4`), U-Boot version, Linux version, system version, etc.

```bash
$ source setenv.sh
```

{% note info Note %}
Two versions of U-Boot are supported:
* 1. SoC Vendor: `2019.01` (old but has the best support)
* 2. Mainline U-Boot (latest version, with missing functionality)
{% endnote %}

Choose the correct version for your requirements.

## Building

### Build U-Boot binaries

Build U-Boot with a single command:

```
$ make uboot
```

The binaries are located in `build/u-boot/fip/_tmp`. You'll need `u-boot.bin.sd.bin.signed`, ` u-boot.bin.signed`, and `u-boot.bin.spi.bin.signed`.

* `u-boot.bin.sd.bin.signed` - for burning to the **SD card**
* `u-boot.bin.signed` - for burning to the **eMMC**
* `u-boot.bin.spi.bin.signed` - for burning to the **SPI Flash**

### Build U-Boot Debian package

You can also choose the Debian U-Boot package:

```bash
$ make uboot-deb
```

Debian packages are located in `build/images/debs/{VERSION}/{BOARD}`.

**VERSION** : refers to the Fenix version, e.g. `1.0.7`
**BOARD** : refers to the Khadas SBC, e.g. `VIM4`

The folder location is `build/images/debs/1.0.7/VIM4`, and the Debian U-Boot package is `linux-u-boot-xxx-xxx_xxx-xxx_arm64.deb`.

* SoC Vendor Debian U-Boot package: `linux-u-boot-vim4-vendor_1.0.7-2019.01_arm64.deb`
* Mainline Debian U-Boot package: `linux-u-boot-vim4-mainline_1.0.7-v2021.04_arm64.deb`

## See Also
[Upgrading U-Boot](upgrade_uboot.html)
