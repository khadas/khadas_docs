title: How To Upgrade The u-boot
---

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
