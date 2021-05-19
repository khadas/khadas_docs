title: Building Android Source Code
---


## Preparations
- [x] [Establishing a Build Environment](http://source.android.com/source/initializing.html)
- [x] [Downloading the Android Source](/vim2/DownloadAndroidSourceCode.html)
- [x] [Install Toolchains for the Amlogic Platform](/vim2/InstallToolchains.html)


## Building
*Note: Before you start to build, make sure you have done all the `Preparations` listed above.*

**Build Android 7.1 U-Boot:**
```sh
$ cd PATH_YOUR_PROJECT
$ cd uboot
$ make CROSS_COMPILE=aarch64-linux-gnu- kvim2_defconfig
$ make CROSS_COMPILE=aarch64-linux-gnu-
```
*Gernerate images in this step:*

* fip/u-boot.bin: for onboard EMMC storage booting
* fip/u-boot.bin.sd.bin: for external TF card booting

**Build Android 9.0 U-Boot:**
```sh
$ cd PATH_YOUR_PROJECT
$ cd bootloader/uboot
$ ./mk kvim2
```
*Gernerate images in this step:*

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
  * For Android Nougat(7.1), it's kvim2-userdebug-64.
  * For Android Pie(9.0), it's kvim2-userdebug.

*Gernerate images in this step:*

* out/target/product/kvim2/update.img


**Build Linux kernel:**

When you build the Android Kernel (above), the Linux Kernel will also be built simultaneously.

In some cases, you might want to build the Linux Kernel separately. You can run this script below to do that:

For Android 7.1:
```sh
$ source device/khadas/kvim2/mkern.sh
```

For Android 9.0:
```sh
$ make bootimage
```

## See Also
* [Upgrade Via an USB Cable](/vim2/UpgradeViaUSBCable.html)
* [Upgrade Via a Burnning TF Card](/vim2/UpgradeViaTFBurningCard.html)
