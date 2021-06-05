title: 编译安卓
---
## 准备
- [x] [搭建开发环境](http://source.android.com/source/initializing.html)
- [x] [下载安卓源码](/zh-cn/edge/DownloadAndroidSourceCode.html)
- [x] [安装Rockchip平台工具链](/zh-cn/edge/InstallToolchains.html)

## 编译

{% note info 注意 %}
在开始编译前，确保已经搭建好如上`准备`所述的环境。
{% endnote %}

## android 10.0:

**编译 U-boot：**
```sh
$ cd PATH_YOUR_PROJECT
$ cd u-boot
$ make mrproper
$ ./make.sh kedge
```
**编译 kernel：**
```sh
$ cd PATH_YOUR_PROJECT
$ cd kernel
$ make ARCH=arm64 kedge_defconfig android-10.config rk3399.config
$ make ARCH=arm64 rk3399-khadas-edge-android.img -jN
```
**编译 android：**
```sh
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch rk3399_Android10-userdebug
$ make installclean
$ make -jN
$ ./mkimage.sh
```

{% note info 注意 %}
替换`N`为你自己电脑实际的线程数。
{% endnote %}

**执行`./mkimage.sh`后，在 rockdev/Image-xxx/目录生成完整的固件包(xxx 是具体 lunch的产品名)**
```
rockdev/Image-xxx/
├── MiniLoaderAll.bin
├── boot.img
├── dtbo.img
├── kernel.img
├── misc.img
├── odm.img
├── parameter.txt
├── pcba_small_misc.img
├── pcba_whole_misc.img
├── recovery.img
├── resource.img
├── system.img
├── trust.img
├── uboot.img
├── update.img
├── vbmeta.img
├── super.img
└── vendor.img
```
**打包 update.img：**
```sh
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch rk3399_Android10-userdebug
$ ./pack_image.sh
```
## android 9.0:

**编译 U-boot：**
```sh
$ cd PATH_YOUR_PROJECT
$ cd u-boot
$ make mrproper
$ ./make.sh kedge
```
**编译 kernel：**
```sh
$ cd PATH_YOUR_PROJECT
$ cd kernel
$ make ARCH=arm64 kedge_defconfig -jN
$ make ARCH=arm64 rk3399-khadas-edge-android.img -jN
```
**编译 android：**
```sh
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch rk3399-userdebug
$ make installclean
$ make -jN
$ ./mkimage.sh
```

{% note info 注意 %}
替换`N`为你自己电脑实际的线程数。
{% endnote %}

**执行`./mkimage.sh`后，在 rockdev/Image-xxx/目录生成完整的固件包(xxx 是具体 lunch的产品名)**
```
rockdev/Image-xxx/
├── MiniLoaderAll.bin
├── boot.img
├── dtbo.img
├── kernel.img
├── misc.img
├── oem.img
├── parameter.txt
├── pcba_small_misc.img
├── pcba_whole_misc.img
├── recovery.img
├── resource.img
├── system.img
├── trust.img
├── uboot.img
├── update.img
├── vbmeta.img
└── vendor.img
```
**打包 update.img：**
```sh
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch rk3399-userdebug
$ ./pack_image.sh
```
## android 7.1:

**编译 U-boot：**
```sh
$ cd PATH_YOUR_PROJECT
$ cd uboot
$ make kedge_defconfig
$ make ARCHV=aarch64
```
**编译 kernel：**
```sh
$ cd PATH_YOUR_PROJECT
$ cd kernel
$ make ARCH=arm64 kedge_defconfig -jN
$ make ARCH=arm64 rk3399-khadas-edge-android.img -jN
```
**编译 android：**
```sh
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch rk3399_all-userdebug
$ make installclean
$ make -jN
$ ./mkimage.sh
```

{% note info 注意 %}
替换`N`为你自己电脑实际的线程数。
{% endnote %}

**执行`./mkimage.sh`后，在 rockdev/Image-xxx/目录生成完整的固件包(xxx 是具体 lunch的产品名)**
```
rockdev/Image-xxx/
├── boot.img
├── kernel.img
├── misc.img
├── parameter.txt
├── recovery.img
├── resource.img
├── RK3399MiniLoaderAll.bin
├── system.img
├── trust.img
└── uboot.img
```
**打包 update.img：**
```sh
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch rk3399_all-userdebug
$ ./pack_image.sh
```
## 参考
* [通过USB数据线升级](/zh-cn/edge/UpgradeViaUSBCable.html)
* [通过TF卡升级](/zh-cn/edge/UpgradeViaTFBurningCard.html)
