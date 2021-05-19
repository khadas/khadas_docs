title: 编译Amlogic平台安卓源码
---

## 准备工作

* [搭建编译环境](http://source.android.com/source/initializing.html)
* [下载安卓源码](/zh-cn/vim1/DownloadAndroidSourceCode.html)
* [安装编译工具链](/zh-cn/vim1/InstallToolchains.html)


## 编译

{% note info 注意 %}

开始编译之前，请确保已经按上述链接搭建好环境。

{% endnote %}

### 编译u-boot

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="6-tab" data-toggle="tab" href="#6" role="tab" aria-controls="6" aria-selected="true">Android 6.0 / Android 7.1</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="9-tab" data-toggle="tab" href="#9" role="tab" aria-controls="9" aria-selected="false">Android Pie (9.0)</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="6" role="tabpanel" aria-labelledby="6-tab">

```bash
$ cd PATH_YOUR_PROJECT
$ cd uboot
$ make CROSS_COMPILE=aarch64-linux-gnu- kvim_defconfig
$ make CROSS_COMPILE=aarch64-linux-gnu-
```

{% note info 提示 %} 

编译生成的镜像文件如下：

* fip/u-boot.bin: 板载eMMC烧录uboot
* fip/u-boot.bin.sd.bin: TF卡烧录uboot

{% endnote %}

</div>

<div class="tab-pane fade show" id="9" role="tabpanel" aria-labelledby="9-tab">

```bash
$ cd PATH_YOUR_PROJECT
$ cd bootloader/uboot
$ ./mk kvim
```

{% note info 提示 %}

编译生成的镜像文件如下：

* build/u-boot.bin: 板载eMMC烧录uboot
* build/u-boot.bin.sd.bin: TF卡烧录uboot

{% endnote %}

</div>
</div>


### 编译 Android

```bash
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch TARGET_LUNCH
$ make -jN otapackage
```

{% note info 注意 %}

* 把N换成数字，如你电脑CPU的线程数。
* TARGET_LUNCH定义如下：
  * 编译Android6.0时: kvim-userdebug-32
  * 编译Android7.1时: kvim-userdebug-64
  * 编译Android9.0时: kvim-userdebug

生成镜像文件如下：

* out/target/product/kvim/update.img

{% endnote %}


### 编译 Linux kernel

当你在编译安卓的同时会编译linux内核。

在某些情况下你可能需要单独编译linux内核，编译命令如下：

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="android6-tab" data-toggle="tab" href="#android6" role="tab" aria-controls="android6" aria-selected="true">Android 6.0 / Android 7.1</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="android9-tab" data-toggle="tab" href="#android9" role="tab" aria-controls="android9" aria-selected="false">Android 9.0</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="android6" role="tabpanel" aria-labelledby="android6-tab">

```bash
$ source device/khadas/kvim/mkern.sh
```
</div>

<div class="tab-pane fade show" id="android9" role="tabpanel" aria-labelledby="android9-tab">

```bash
$ make bootimage
```

</div>
</div>

## 参考
* [通过USB升级](/zh-cn/vim1/UpgradeViaUSBCable.html)
* [通过TF卡升级](/zh-cn/vim1/UpgradeViaTFBurningCard.html)

