title: 编译Amlogic平台安卓源码
---


## 准备

- [x] [搭建开发环境](http://source.android.com/source/initializing.html)
- [x] [下载安卓源码](/zh-cn/vim3/DownloadAndroidSourceCode.html)
- [x] [安装Amlogic平台工具链](/zh-cn/vim3/InstallToolchains.html)


## 编译

{% note info 注意 %}
在开始编译前，确保已经搭建好如上`准备`所述的环境。
{% endnote %}

**编译U-boot：**

```sh
$ cd PATH_YOUR_PROJECT
$ cd bootloader/uboot
$ ./mk TARGET
```

*生成文件描述如下：*

* build/u-boot.bin: 板载EMMC烧录uboot
* build/u-boot.bin.sd.bin: TF卡烧录uboot


**编译安卓：**

```sh
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch TARGET_LUNCH
$ make -jN otapackage
```

*生成镜像文件如下：*

* out/target/product/TARGET/update.img

{% note info 注意 %}
	* 替换`N`为你自己电脑实际的线程数。
	* `TARGET` 为 kvim3 或者 kvim3l
	* `TARGET_LUNCH` 定义如下：
      * 编译VIM3时: kvim3-userdebug
	  * 编译VIM3L时: kvim3l-userdebug
{% endnote %}

**编译linux内核：**

当你按上面步骤编译安卓时会同时编译linux内核。

在某些情况下你可能需要单独编译linux内核，按如下步骤单独编译linux内核。

```sh
$ make bootimage
```

## 参考
* [通过USB数据线升级](/zh-cn/vim3/UpgradeViaUSBCable.html)
* [通过TF卡升级](/zh-cn/vim3/UpgradeViaTFBurningCard.html)
