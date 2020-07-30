title: 编译Amlogic平台安卓源码
---

### 准备工作
- [x] [搭建编译环境](http://source.android.com/source/initializing.html)
- [x] [下载安卓源码](/zh-cn/vim1/DownloadAndroidSourceCode.html)
- [x] [安装编译工具链](/zh-cn/vim1/InstallToolchains.html)


### 编译
*注意: 开始编译之前，请确保已经按上述链接搭建好环境。*

**编译 Android 6.0 and 7.1 U-Boot:**
```sh
$ cd PATH_YOUR_PROJECT
$ cd uboot
$ make CROSS_COMPILE=aarch64-linux-gnu- kvim_defconfig
$ make CROSS_COMPILE=aarch64-linux-gnu-
```
*编译生成的镜像文件如下*

* fip/u-boot.bin: 板载EMMC烧录uboot
* fip/u-boot.bin.sd.bin: TF卡烧录uboot

**编译 Android 9.0 U-Boot:**
```sh
$ cd PATH_YOUR_PROJECT
$ cd bootloader/uboot
$ ./mk kvim
```
*编译生成的镜像文件如下*

* fip/u-boot.bin: 板载EMMC烧录uboot
* fip/u-boot.bin.sd.bin: TF卡烧录uboot

**编译 Android:**
```sh
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch TARGET_LUNCH
$ make -jN otapackage
```
*注意：*

* 把N换成数字，如你电脑CPU的线程数。
* TARGET_LUNCH定义如下：
  * 编译Android6.0时: kvim-userdebug-32
  * 编译Android7.1时: kvim-userdebug-64
  * 编译Android9.0时: kvim-userdebug



*生成镜像文件如下：*

* out/target/product/kvim/update.img


**编译 Linux kernel:**

当你在编译安卓的同时会编译linux内核。

在某些情况下你可能需要单独编译linux内核，编译命令如下：

编译Android 6.0 和 7.1时:
```sh
$ source device/khadas/kvim/mkern.sh
```

编译Android 9.0时：
```sh
$ make bootimage
```


### 参考
* [通过USB升级](/zh-cn/vim1/UpgradeViaUSBCable.html)
* [通过TF卡升级](/zh-cn/vim1/UpgradeViaTFBurningCard.html)

