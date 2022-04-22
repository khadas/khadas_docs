title: Make a "Fast Package Update Image"
---

This guide is about how to make a "Fast Package Update Image"; This means that you will only change one part of Android. For example, only change the U-Boot, Kernel or System.

## Preparations:

* [Build Android Completely](/android/vim4/BuildAndroid.html).


## Only Change the U-Boot

* Rebuild U-Boot

```sh
$ cd PATH_YOUR_PROJECT
$ cd bootloader/uboot
$ ./mk kvim4 --avb2 --vab
```

* Copy files to output directory

```sh
$ cd PATH_YOUR_PROJECT
$ cp bootloader/uboot/build/u-boot.bin.signed out/target/product/TARGET/bootloader.img
$ cp bootloader/uboot/build/u-boot.bin.sd.bin  out/target/product/TARGET/upgrade/
$ cp bootloader/uboot/build/u-boot.bin.sd.bin.signed  out/target/product/TARGET/upgrade/
$ cp bootloader/uboot/build/u-boot.bin.usb.signed   out/target/product/TARGET/upgrade/
```
* Package Update Image

```sh
$ ./vendor/amlogic/common/tools/aml_upgrade/aml_image_v2_packer  -r out/target/product/TARGET/upgrade/aml_upgrade_package_AB_vendor_boot.conf
  out/target/product/TARGET/upgrade/ out/target/product/TARGET/update.img
```

{% note info Note %}

* Replace `PATH_YOUR_PROJECT` to your project path
* `TARGET` should be kvim4

{% endnote %}


## Only Change the DTB or Kernel

* Rebuild DTB and Kernel

```sh
$ ./mk kvim4 -v 5.4 -jN
```
* Package Update Image

```sh
$ ./vendor/amlogic/common/tools/aml_upgrade/aml_image_v2_packer  -r out/target/product/TARGET/upgrade/aml_upgrade_package_AB_vendor_boot.conf  out/target/product/TARGET/upgrade/ out/target/product/TARGET/update.img
```

* Make your own quick compilation script demo:

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