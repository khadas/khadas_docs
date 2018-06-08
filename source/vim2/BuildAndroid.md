title: Building Android Source Code
---


### Preperations
- [x] [Establishing a Build Environment](http://source.android.com/source/initializing.html)
- [x] [Downloading the Android Source](/vim2/DownloadAndroidSourceCode.html)
- [x] [Install toolchains for Amlogic platform](/vim2/InstallToolchains.html)


### Building
*Note: Before you start to build, make sure you have done all the `Preperations` listed above.*

**Build U-Boot:**
```sh
$ cd PATH_YOUR_PROJECT
$ cd uboot
$ make CROSS_COMPILE=aarch64-linux-gnu- kvim2_defconfig
$ make CROSS_COMPILE=aarch64-linux-gnu-
```
*Gernerated images in this step:*

* fip/u-boot.bin: for onboard EMMC storage booting
* fip/u-boot.bin.sd.bin: for external TF card booting


**Build Android:**
```sh
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch kvim2-userdebug-64
$ make -jN otapackage
```
*Note:*

* Replace 'N' as the number you want when you run 'make -jN'

*Gernerated images in this step:*

* out/target/product/kvim2/update.img


**Build Linux kernel:**

When you build Android aboved, will build Linux kernel at the same time.

In some case, you might want to build Linux kernel separately, you can run the script below to do that:
```sh
$ source device/khadas/kvim2/mkern.sh
```

### See Also
* [Upgrade Via an USB Cable](/vim2/UpgradeViaUSBCable.html)
* [Upgrade Via a Burnning TF Card](/vim2/UpgradeViaTFBurningCard.html)
