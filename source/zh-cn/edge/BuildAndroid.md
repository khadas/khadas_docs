title: 编译安卓
---
准备
[x] 搭建开发环境
[x] 下载安卓源码
[x] 安装Rockchip平台工具链
编译
注意：在开始编译前，确保已经搭建好如上准备所述的环境。

编译U-boot：

$ cd PATH_YOUR_PROJECT
$ cd uboot
$ make kedge_defconfig
$ make ARCHV=aarch64

编译安卓：

$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch rk3399_all-userdebug
$ make -jN
$ ./mkimage.sh
注意：
替换N为你自己电脑实际的线程数。

固件生成步骤:
执行./mkimage.sh 后，在 rockdev/Image-xxx/目录生成完整的固件包(xxx 是具体 lunch的产品名)

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

打包成 update.img 编译如下：

$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch rk3399_all-userdebug
$ ./pack_image.sh

编译linux内核：

当你按上面步骤编译安卓时会同时编译linux内核。

在某些情况下你可能需要单独编译linux内核，按如下步骤单独编译linux内核。

$ cd PATH_YOUR_PROJECT
$ cd kernel
$ make ARCH=arm64 kedge_defconfig -jN
$ make ARCH=arm64 rk3399-khadas-edge-android.img -jN

参考
通过USB数据线升级
通过TF卡升级
