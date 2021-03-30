title: Make a "Fast Package Update Image"
---

This guide is about how to make a "Fast Package Update Image"; This means that you will only change one part of Android. For example, only change the U-Boot, Kernel or System.

## Preparations:

* [Build Android Completely](/vim3/BuildAndroid.html).


## Only Change the U-Boot

* Rebuild U-Boot

```sh
$ cd PATH_YOUR_PROJECT
$ cd bootload/uboot
$ ./mk TARGET
```

* Copy files to output directory

```sh
$ cd PATH_YOUR_PROJECT
$ cp bootloader/uboot/build/u-boot.bin out/target/product/TARGET/bootloader.img
$ cp bootloader/uboot/build/u-boot.bin.usb.bl2  out/target/product/TARGET/upgrade/
$ cp bootloader/uboot/build/u-boot.bin.usb.tpl  out/target/product/TARGET/upgrade/
$ cp bootloader/uboot/build/u-boot.bin.sd.bin   out/target/product/TARGET/upgrade/
```
* Package Update Image

```sh
$ ./vendor/amlogic/common/tools/aml_upgrade/aml_image_v2_packer  -r out/target/product/TARGET/upgrade/aml_upgrade_package_avb.conf
out/target/product/TARGET/upgrade/ out/target/product/TARGET/update.img
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
$ ./vendor/amlogic/common/tools/aml_upgrade/aml_image_v2_packer  -r out/target/product/TARGET/upgrade/aml_upgrade_package_avb.conf out/target/product/TARGET/upgrade/ out/target/product/TARGET/update.img
```

## Only Change the DTB or Kernel

* Rebuild DTB and Kernel

```sh
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch TARGET_LUNCH
$ make bootimage
```
* Package Update Image

```sh
$ ./vendor/amlogic/common/tools/aml_upgrade/aml_image_v2_packer  -r out/target/product/TARGET/upgrade/aml_upgrade_package_avb.conf  out/target/product/TARGET/upgrade/ out/target/product/TARGET/update.img
```

## Only Change the System

* Rebuild System Image

```sh
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch TARGET_LUNCH
$ make systemimage
```
* Package Update Image

```sh
$ ./vendor/amlogic/common/tools/aml_upgrade/aml_image_v2_packer  -r out/target/product/TARGET/upgrade/aml_upgrade_package_avb.conf out/target/product/TARGET/upgrade/ out/target/product/TARGET/update.img
```

{% note info Note %}

* Replace `PATH_YOUR_PROJECT` to your project path
* Replace `TARGET_LUNCH` to your lunch select.
  * For VIM3, it's kvim3-userdebug.
  * For VIM3L, it's kvim3l-userdebug.
* `TARGET` should be kvim3 or kvim3l

{% endnote %}
