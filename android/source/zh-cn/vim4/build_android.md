title: 编译安卓源码
---


## 准备

- [x] [搭建开发环境](http://source.android.com/source/initializing.html)
- [x] [下载安卓源码](/android/zh-cn/vim4/download_android_sourcecode.html)
- [x] [安装Amlogic平台工具链](/android/zh-cn/vim4/install_toolchains.html)


## 编译

{% note info 注意 %}
在开始编译前，确保已经搭建好如上`准备`所述的环境。
{% endnote %}

**编译U-Boot：**

```sh
$ cd PATH_YOUR_PROJECT
$ cd bootloader/uboot
$ ./mk kvim4 --avb2 --vab
```

生成文件描述如下：

* `build/u-boot.bin.signed`：板载EMMC烧录uboot
* `build/u-boot.bin.sd.bin.signed`：TF卡烧录uboot

**编译Linux内核：**

```sh
$ ./mk kvim4 -v 5.4 -jN
```
{% note info 注意 %}
	* 替换`N`为你自己电脑实际的线程数。
{% endnote %}

**编译安卓：**

```sh
$ cd PATH_YOUR_PROJECT
$ . build/envsetup.sh
$ lunch TARGET_LUNCH
$ make -jN otapackage
```

生成镜像文件如下：

* `out/target/product/TARGET/update.img`

{% note info 注意 %}
	* VIM4编译安卓不会像VIM3那样同时也编译Linux Kernel
	* 替换`N`为你自己电脑实际的线程数。
	* `TARGET_LUNCH` 定义如下：
      * 编译VIM4时：`kvim4-userdebug`

{% endnote %}


**构建自己的编译脚本demo：**
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
## 参考
* [通过USB数据线升级](/android/zh-cn/vim4/upgrade_via_usbcable.html)
