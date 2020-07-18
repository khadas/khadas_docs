title: How To Upgrade The u-boot
---

### Upgrade u-boot in kernel space

We use [Fenix](/vim1/FenixScript.html) to build Ubuntu/Debian images. You can also use it to build the u-boot debian package.

* Set the Fenix environment

```
$ source source env/setenv.sh
```

* Build the u-boot debian package

```
$ make uboot
$ make uboot-deb
```

The you will find the u-boot debian package in directory `build/images/debs/FENIX-VERSION/BOARD`.

**FENIX-VERSION:** means the Fenix SDK version, e.g. **0.8.3**
**BOARD:** means the khadas board you choosed, e.e. **VIM3**

So the package directory maybe: `build/images/debs/0.8.3/VIM3`, and the debian package maybe: `linux-u-boot-vim3-vendor_0.8.3-2015.01_arm64.deb`.

* Upgrade the u-boot

Copy the u-boot debian package to the board and install it.

```
$ sudo dpkg -i linux-u-boot-vim3-vendor_0.8.3-2015.01_arm64.deb
$ sync
$ sudo reboot
```

### Upgrade u-boot in u-boot command line

We can also upgrade the u-boot in u-boot command line mode. You need to setup the [Serial Tool](/vim1/SetupSerialTool.html).

Use [Fenix](/vim1/FenixScript.html) to build the uboot:

```
$ make uboot
```

The built u-boot is `u-boot/fip/_tmp/u-boot.bin`.

* Power on the board and enter u-boot command line
* Copy `u-boot.bin` to a U-Disk
* Insert the U-Disk to the board
* Execute the command to upgrade the u-boot

```
kvim3#usb_update bootloader u-boot.bin
kvim3#reboot
```
