title: Make a "Fast Package Update Image"
---

This guide is about how to make a "Fast Package Update Image" on Android 6.0 and Android 7.1; This means that you will only change one part of Android. For example, only change the U-Boot, Kernel or System. In addition, if you want to fast package update image on Android 9.0, You can refer to [Fast Package Update Image on Android 9.0](vim3/FastPackageUpdateImage.md)

## Preparations:

* [Build Android Completely](/vim1/BuildAndroid.html).


## Only Change the U-Boot

* Rebuild U-Boot
```sh
$ cd PATH_YOUR_PROJECT
$ cd uboot
$ make CROSS_COMPILE=aarch64-linux-gnu- TARGET_DECONFIG
$ make CROSS_COMPILE=aarch64-linux-gnu-
```
* Copy files to output directory
```sh
$ cd PATH_YOUR_PROJECT
$ cp uboot/fip/u-boot.bin out/target/product/TARGET/
$ cp uboot/fip/u-boot.bin.usb.bl2  out/target/product/TARGET/upgrade/
$ cp uboot/fip/u-boot.bin.usb.tpl  out/target/product/TARGET/upgrade/
$ cp uboot/fip/u-boot.bin.sd.bin   out/target/product/TARGET/upgrade/
```
* Package Update Image
```sh
$ ./vendor/amlogic/tools/aml_upgrade/aml_image_v2_packer  -r out/target/product/TARGET/upgrade/aml_upgrade_package.conf  out/target/product/TARGET/upgrade/ out/target/product/TARGET/update.img
```
## Only Change the Bootup Logo

* Rebuild Logo Image.(About more informations,You can refer to [Build Bootup Logo For U-boot](/vim1/BuildBootLogoForUboot.html))
```sh
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch TARGET_LUNCH
$ make logoimg
```
* Package Update Image
```sh
$ ./vendor/amlogic/tools/aml_upgrade/aml_image_v2_packer  -r out/target/product/TARGET/upgrade/aml_upgrade_package.conf  out/target/product/TARGET/upgrade/ out/target/product/TARGET/update.img
```
## Only Change the DTB or Kernel

* Rebuild DTB and Kernel
```sh
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch TARGET_LUNCH
$ source device/khadas/TARGET/mkern.sh
```
* Package Update Image
```sh
$ ./vendor/amlogic/tools/aml_upgrade/aml_image_v2_packer  -r out/target/product/TARGET/upgrade/aml_upgrade_package.conf  out/target/product/TARGET/upgrade/ out/target/product/TARGET/update.img
```

## Only Change the System

* Rebuild System Image
```sh
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch TARGET_LUNCH
$ make snod
```
* Package Update Image
```sh
$ ./vendor/amlogic/tools/aml_upgrade/aml_image_v2_packer  -r out/target/product/TARGET/upgrade/aml_upgrade_package.conf  out/target/product/TARGET/upgrade/ out/target/product/TARGET/update.img
```

**Note**: 
* Replace `PATH_YOUR_PROJECT` to your project path
* Replace `TARGET_LUNCH` to your lunch select
* `TARGET` should be kvim or kvim2
