title: 快速打包安卓升级固件
---

这篇文档介绍在只修改部分内容（如uboot和linux）的情况下如何快速打包安卓升级固件而不需要整个完全打包。

## 准备:

* [如何编译安卓](/zh-cn/vim1/BuildAndroid.html)。


## 仅仅修改U-boot

* 重新编译U-boot
```sh
$ cd PATH_YOUR_PROJECT
$ cd uboot
$ make CROSS_COMPILE=aarch64-linux-gnu- TARGET_DECONFIG
$ make CROSS_COMPILE=aarch64-linux-gnu-
```
* 拷贝生成的文件到`output`目录
```sh
$ cd PATH_YOUR_PROJECT
$ cp uboot/fip/u-boot.bin out/target/product/TARGET/
$ cp uboot/fip/u-boot.bin.usb.bl2  out/target/product/TARGET/upgrade/
$ cp uboot/fip/u-boot.bin.usb.tpl  out/target/product/TARGET/upgrade/
$ cp uboot/fip/u-boot.bin.sd.bin   out/target/product/TARGET/upgrade/
```
* 打包固件
```sh
$ ./vendor/amlogic/tools/aml_upgrade/aml_image_v2_packer  -r out/target/product/TARGET/upgrade/aml_upgrade_package.conf  out/target/product/TARGET/upgrade/ out/target/product/TARGET/update.img
```
## 仅仅修改开机logo

* 重新编译Logo。参考[如何编译U-boot Logo](/zh-cn/vim1/BuildBootLogoForUboot.html)。
```sh
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch TARGET_LUNCH
$ make logoimg
```
* 打包固件
```sh
$ ./vendor/amlogic/tools/aml_upgrade/aml_image_v2_packer  -r out/target/product/TARGET/upgrade/aml_upgrade_package.conf  out/target/product/TARGET/upgrade/ out/target/product/TARGET/update.img
```
## 仅仅修改DTB或kernel

* 重新编译DTB和kernel
```sh
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch TARGET_LUNCH
$ source device/khadas/TARGET/mkern.sh
```
* 打包固件
```sh
$ ./vendor/amlogic/tools/aml_upgrade/aml_image_v2_packer  -r out/target/product/TARGET/upgrade/aml_upgrade_package.conf  out/target/product/TARGET/upgrade/ out/target/product/TARGET/update.img
```

## 仅仅修改System

* 重新编译System
```sh
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch TARGET_LUNCH
$ make snod
```
* 打包固件
```sh
$ ./vendor/amlogic/tools/aml_upgrade/aml_image_v2_packer  -r out/target/product/TARGET/upgrade/aml_upgrade_package.conf  out/target/product/TARGET/upgrade/ out/target/product/TARGET/update.img
```

**注意**:
* 替换'PATH_YOUR_PROJECT'为你自己的项目路径
* 替换'TARGET_LUNCH'为你自己选择的lunch
* 'TARGET' 应该为`kvim`或`kvim2`
* 'TARGET_DECONFIG'应还为`kvim_defconfig`或`kvim2_defconfig`
