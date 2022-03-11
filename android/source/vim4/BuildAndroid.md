title: Build Android Source Code
---


## Preparations

- [x] [Establish a Build Environment](http://source.android.com/source/initializing.html)
- [x] [Download the Android Source](/android/vim4/DownloadAndroidSourceCode.html)
- [x] [Install Toolchains for the Amlogic Platform](/android/vim4/InstallToolchains.html)


## Building

{% note info Note %}
	Before you start to build, make sure you have done all the `preparations` listed above.
{% endnote %}

**Build U-boot:**

```sh
$ cd PATH_YOUR_PROJECT
$ cd bootloader/uboot
$ ./mk kvim4 --avb2 --vab
```
Generate images:

* `build/u-boot.bin`: for eMMC boot
* `build/u-boot.bin.sd.bin`: for SD card boot

**Build Linux Kernel:**

```sh
$ ./mk kvim4 -v 5.4 -jN
```
{% note info Note %}
	* Replace `N` with the actual number of threads on your own computer

{% endnote %}

**Build Android:**

```sh
$ cd PATH_YOUR_PROJECT
$ . build/envsetup.sh
$ lunch TARGET_LUNCH
$ make -jN otapackage
```

Generate images:

* `out/target/product/TARGET/update.img`

{% note info Note %}
	* The VIM4 kernel needs to be compiled separately from VIM3.
	* Replace `N` with the actual number of threads on your own computer.
	* Replace `TARGET_LUNCH` with your selected lunch.
	  * For VIM4, it's `kvim4-userdebug`.

{% endnote %}

**Compile your own demo script:**
```sh
$ vim demo.sh
```
```sh
#!/bin/bash

#build U-Boot
if [ "$1" == 'u' ] || [ "$1" == 'n' ]; then	
	echo "build U-Boot"
	cd bootloader/uboot
	./mk kvim4 --avb2 --vab 
	cd -
fi

#build Kernel
if [ "$1" == 'k' ] || [ "$1" == 'n' ]; then
	echo "build Kernel"
if [ "$2" == 'n' ] || [ "$1" == 'n' ]; then
	make distclean
fi	
	./mk kvim4 -v 5.4 -j100
fi

#build Android
if [ "$1" == 'a' ] || [ "$1" == 'n' ]; then
	echo "build Android"
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
#build U-Boot
$ ./demo.sh u

#build Kernel
$ ./demo.sh k

#build Android
$ ./demo.sh a

#build all
$ ./demo.sh n
```
## See also
* [USB-C Upgrade](/android/vim4/UpgradeViaUSBCable.html)
* [SD Card Upgrade](/android/vim4/UpgradeViaTFBurningCard.html)
