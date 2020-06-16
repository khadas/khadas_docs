title: Building Android Source Code
---

### Preperations
- [x] [Establishing a Build Environment](http://source.android.com/source/initializing.html)
- [x] [Downloading the Android Source](/zh-cn/edge/DownloadAndroidSourceCode.html)
- [x] [Install Toolchains for Rockchip Platform](/zh-cn/edge/InstallToolchains.html)

### Building
*Note: Before you start to build, make sure you have done all the `Preperations` listed above.*

# android 10.0:

**Build U-boot：**
```sh
$ cd PATH_YOUR_PROJECT
$ cd u-boot
$ make mrproper
$ ./make.sh kedge
```
**Build kernel：**
```sh
$ cd PATH_YOUR_PROJECT
$ cd kernel
$ make ARCH=arm64 kedge_defconfig android-10.config rk3399.config
$ make ARCH=arm64 rk3399-khadas-edge-android.img -jN
```
**Build android：**
```sh
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch rk3399_Android10-userdebug
$ make installclean
$ make -jN
$ ./mkimage.sh
```
*Note: Replace 'N' as the number you want when you run 'make -jN*

**After executing`./mkimage.sh`, generate a complete firmware package in the rockdev/Image-xxx/directory (xxx is the product name of the specific lunch)**
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
├── super.img
└── vendor.img
```
**Packing update.img：**
```sh
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch rk3399_Android10-userdebug
$ ./pack_image.sh
```

# android 9.0:

**Build U-boot：**
```sh
$ cd PATH_YOUR_PROJECT
$ cd u-boot
$ make mrproper
$ ./make.sh kedge
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
$ lunch rk3399-userdebug
$ make installclean
$ make -jN
$ ./mkimage.sh
```
*Note: Replace 'N' as the number you want when you run 'make -jN*

**After executing`./mkimage.sh`, generate a complete firmware package in the rockdev/Image-xxx/directory (xxx is the product name of the specific lunch)**
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
**Packing update.img：**
```sh
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch rk3399-userdebug
$ ./pack_image.sh
```
# android 7.1:

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
$ make installclean
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
