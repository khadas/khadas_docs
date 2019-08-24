title: Building Android Source Code
---


### Preperations
- [x] [Establishing a Build Environment](http://source.android.com/source/initializing.html)
- [x] [Downloading the Android Source](/vim1/DownloadAndroidSourceCode.html)
- [x] [Install toolchains for Amlogic platform](/vim1/InstallToolchains.html)


### Building
*Note: Before you start to build, make sure you have done all the `Preperations` listed above.*

**Build Android 6.0 and 7.1 U-Boot:**
```sh
$ cd PATH_YOUR_PROJECT
$ cd uboot
$ make CROSS_COMPILE=aarch64-linux-gnu- kvim_defconfig
$ make CROSS_COMPILE=aarch64-linux-gnu-
```
*Gernerated images in this step:*

* fip/u-boot.bin: for onboard EMMC storage booting
* fip/u-boot.bin.sd.bin: for external TF card booting

**Build Android 9.0 U-Boot:**
```sh
$ cd PATH_YOUR_PROJECT
$ cd bootloader/uboot
$ ./mk kvim
```
*Gernerated images in this step:*

* build/u-boot.bin: for onboard EMMC storage booting
* build/u-boot.bin.sd.bin: for external TF card booting


**Build Android:**
```sh
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch TARGET_LUNCH
$ make -jN otapackage
```
*Note:*

* Replace 'N' as the number you want when you run 'make -jN'
* Replace 'TARGET_LUNCH' to your lunch select.
  For Android Marshmallow(6.0), it's kvim-userdebug-32.
  For Android Nougat(7.1), it's kvim-userdebug-64.
  For Android Pie(9.0), it's kvim-userdebug.

*Gernerated images in this step:*

* out/target/product/kvim/update.img


**Build Linux kernel:**

When you build Android aboved, will build Linux kernel at the same time.

In some case, you might want to build Linux kernel separately, you can run the script below to do that:

For Android 6.0 and 7.1:
```sh
$ source device/khadas/kvim/mkern.sh
```

For Android 9.0:
```sh
$ make bootimage
```

### See Also
* [Upgrade Via an USB Cable](/vim1/UpgradeViaUSBCable.html)
* [Upgrade Via a Burnning TF Card](/vim1/UpgradeViaTFBurningCard.html)
