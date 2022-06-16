title: Building Android Source Code
---


## Preparations

- [x] [Establishing a Build Environment](http://source.android.com/source/initializing.html)
- [x] [Downloading the Android Source](/android/vim4/download_android_sourcecode.html)
- [x] [Install Toolchains for the Amlogic Platform](/android/vim4/install_toolchains.html)


## Building

{% note info Note %}
	Before you start to build, make sure you have done all the `Preparations` listed above.
{% endnote %}

**Build U-Boot:**

```sh
$ cd PATH_YOUR_PROJECT
$ cd bootloader/uboot
$ ./mk kvim4 --avb2 --vab
```
Gernerate images in this step:

* `build/u-boot.bin`: for onboard EMMC storage booting
* `build/u-boot.bin.sd.bin`: for external TF card booting

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

Gernerate images in this step:

* `out/target/product/TARGET/update.img`

{% note info Note %}
	* VIM4 compiling Android will not compile the Linux Kernel at the same time as VIM3.
	* Replace `N` with the actual number of threads on your own computer
	* Replace `TARGET_LUNCH` to your lunch select.
	  * For VIM4, it's `kvim4-userdebug`.

{% endnote %}


**Made your own compiled script demo:**
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
## See Also
* [Upgrade Via an USB Cable](/android/vim4/upgrade_via_usbcable.html)
