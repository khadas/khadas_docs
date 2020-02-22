title: How To Upgrade The kernel
---

We use [Fenix](/vim1/FenixScript.html) to build Ubuntu/Debian images. You can also use it to build the kernel debian package.

* Set the Fenix environment

```
$ source source env/setenv.sh
```

* Build the kernel debian package

```
$ make kernel
$ make kernel-deb
```

The you will find the kernel debian package in directory `build/images/debs/FENIX-VERSION`.

**FENIX-VERSION:** means the Fenix SDK version, e.g. **0.8.3**

So the package directory maybe: `build/images/debs/0.8.3`, and the debian package maybe: `linux-image-amlogic-mainline_0.8.3_arm64.deb`.

`DTB debian package`: `linux-dtb-*.deb`
`Kernel debian package`: `linux-image-*.deb`
`Header debian package`: `linux-headers-*.deb`

* Upgrade the kernel & dtb

Copy the kernel & dtb debian packages to the board and install it.

```
$ sudo dpkg -i linux-dtb-*.deb 
$ sudo dpkg -i linux-image-*.deb
$ sync
$ sudo reboot
```
