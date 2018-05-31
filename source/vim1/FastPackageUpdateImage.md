title: Fast Package Update Image
---

Here is about how to package update image quickly while only change one part of android. Such as only change uboot, kernel or system.

### Preperations:

* [Already build android completely](/vim1/BuildAndroid.html).


### Only Change U-Boot

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
### Only Change Bootup Logo

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
### Only Change DTB or Kernel

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

### Only Change System

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
* Replace 'PATH_YOUR_PROJECT' to your project path
* Replace 'TARGET_LUNCH' to your lunch select
* 'TARGET' should be kvim or kvim2
* 'TARGET_DECONFIG' should be kvim_defconfig or kvim2_defconfig
