title: Building Android Source Code
---

### Preperations
- [x] [Establishing a Build Environment](http://source.android.com/source/initializing.html)
- [x] [Downloading the Android Source](/zh-cn/edge/DownloadAndroidSourceCode.html)
- [x] [Install Toolchains for Rockchip Platform](/zh-cn/edge/InstallToolchains.html)

### Building
*Note: Before you start to build, make sure you have done all the `Preperations` listed above.*

**Build U-boot：**
```sh
$ cd PATH_YOUR_PROJECT
$ cd uboot
$ make kedge_defconfig
$ make ARCHV=aarch64
```
**Build kernel：**
```sh
$ cd PATH_YOUR_PROJECT
$ cd kernel
$ make ARCH=arm64 kedge_defconfig -jN
$ make ARCH=arm64 rk3399-khadas-edge-android.img -jN
```
**Build android：**
```sh
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch rk3399_all-userdebug
$ make -jN
$ ./mkimage.sh
```
*Note: Replace 'N' as the number you want when you run 'make -jN*

**After executing`./mkimage.sh`, generate a complete firmware package in the rockdev/Image-xxx/directory (xxx is the product name of the specific lunch)**
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
**Packing update.img：**
```sh
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch rk3399_all-userdebug
$ ./pack_image.sh
```

### See Also
* [Upgrade Via an USB Cable](/zh-cn/edge/UpgradeViaUSBCable.html)
* [Upgrade Via a Burnning TF Card](/zh-cn/edge/UpgradeViaTFBurningCard.html)
