title: 快速打包安卓升级固件
---

这篇文档介绍在只修改部分内容（如U-boot和Linux）的情况下如何快速打包安卓升级固件而不需要整个完全打包。

## 准备：

* [如何编译安卓](/android/zh-cn/vim4/BuildAndroid.html)。


## 仅仅修改U-boot

* 重新编译U-boot

```sh
$ cd PATH_YOUR_PROJECT
$ cd bootloader/uboot
$ ./mk kvim4 --avb2 --vab
```

* 拷贝生成的文件到`output`目录

```sh
$ cd PATH_YOUR_PROJECT
$ cp bootloader/uboot/build/u-boot.bin.signed out/target/product/TARGET/bootloader.img
$ cp bootloader/uboot/build/u-boot.bin.sd.bin  out/target/product/TARGET/upgrade/
$ cp bootloader/uboot/build/u-boot.bin.sd.bin.signed  out/target/product/TARGET/upgrade/
$ cp bootloader/uboot/build/u-boot.bin.usb.signed   out/target/product/TARGET/upgrade/
```

* 打包固件

```sh
$ ./vendor/amlogic/common/tools/aml_upgrade/aml_image_v2_packer  -r out/target/product/TARGET/upgrade/aml_upgrade_package_AB_vendor_boot.conf
  out/target/product/TARGET/upgrade/ out/target/product/TARGET/update.img
```

## 仅仅修改DTB或kernel

* 重新编译DTB和kernel

```sh
$ ./mk kvim4 -v 5.4 -jN
```

* 打包固件

```sh
$ ./vendor/amlogic/common/tools/aml_upgrade/aml_image_v2_packer  -r out/target/product/TARGET/upgrade/aml_upgrade_package_AB_vendor_boot.conf  out/target/product/TARGET/upgrade/ out/target/product/TARGET/update.img
```

{% note info 注意 %}
* 替换`PATH_YOUR_PROJECT`为你自己的项目路径
* `TARGET` 应该为`kvim4`
{% endnote %}

**构建自己的快速编译脚本demo：**
```sh
$ vim demo.sh
```
```sh
#!/bin/bash

#build uboot
if [ "$1" == 'u' ] || [ "$1" == 'n' ]; then	
	echo "build uboot"
	cd bootloader/uboot
	./mk kvim4 --avb2 --vab 
	cd -
	
if [ "$2" == 'p' ]; then	
	cp bootloader/uboot/build/u-boot.bin.signed out/target/product/kvim4/bootloader.img
	cp bootloader/uboot/build/u-boot.bin.sd.bin  out/target/product/kvim4/upgrade/
	cp bootloader/uboot/build/u-boot.bin.sd.bin.signed  out/target/product/kvim4/upgrade/
	cp bootloader/uboot/build/u-boot.bin.usb.signed   out/target/product/kvim4/upgrade/
	./vendor/amlogic/common/tools/aml_upgrade/aml_image_v2_packer  -r out/target/product/kvim4/upgrade/aml_upgrade_package_AB_vendor_boot.conf out/target/product/kvim4/upgrade out/target/product/kvim4/update.img
fi	
fi

#build kernel
if [ "$1" == 'k' ] || [ "$1" == 'n' ]; then
	echo "build kernel"
if [ "$2" == 'n' ] || [ "$1" == 'n' ]; then
	make distclean
fi	
	./mk kvim4 -v 5.4 -j100
	
if [ "$2" == 'p' ]; then	
	./vendor/amlogic/common/tools/aml_upgrade/aml_image_v2_packer  -r out/target/product/kvim4/upgrade/aml_upgrade_package_AB_vendor_boot.conf out/target/product/kvim4/upgrade out/target/product/kvim4/update.img
fi		
fi

#build android
if [ "$1" == 'a' ] || [ "$1" == 'n' ]; then
	echo "build android"
if [ "$2" == 'n' ] || [ "$1" == 'n' ]; then
	make clean
fi	 
	. build/envsetup.sh 
	lunch kvim4-userdebug 
	make installclean
	#make -j80 otapackage
	make -j80
fi
```

```sh
#build uboot and pack update.img
$ ./demo.sh u p

#build kernel and pack update.img
$ ./demo.sh k p

#build android
$ ./demo.sh a

#build all
$ ./demo.sh n
```