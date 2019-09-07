title: 从外部媒体介质启动系统
---


有很多系统运行在SD卡或U盘上,例如：[LibreELEC](https://libreelec.tv/downloads_new/khadas-vim/),[Armbian images](http://forum.khadas.com/t/armbian-kodi-ubuntu-debian-for-sd-usb-emmc/825)以及Khadas SD images([VIM1](https://dl.khadas.com/Firmware/VIM1/Ubuntu/SD_USB/)/[VIM2](https://dl.khadas.com/Firmware/VIM2/Ubuntu/SD_USB/)/[VIM3](https://dl.khadas.com/Firmware/VIM3/Ubuntu/SD_USB/))。这篇文档介绍如何运行这些镜像。


### 1、把固件写入到SD卡或U盘
* 下载烧录工具[Etcher](https://www.balena.io/etcher/), 它会将镜像写入你的SD卡或U盘中。它为初学者提供了一个用户友好的图形用户界面，与Mac、Windows和Linux兼容，解压后是一个可执行文件，直接执行即可。选择固件，它将自动识别您的USB设备，然后烧录就可以了。

![Howto Use Etcher](/images/vim1/HowtoUseEtcher.png)

* 在Ubuntu下使用`dd`命令写入
```
$ sudo dd if=/path/to/image of=/dev/sdX bs=8M
```
* 在Windows下使用工具`Win32DiskImager`写入。可以参考[在Windows下安装LibreELEC](/zh-cn/vim1/InstallLibreELEC.html#通过Windows-PC写入).

### 2、准备DTB文件
VIM1、VIM2和VIM3使用不同的DTB文件。
* VIM1: 拷贝`kvim.dtb`、`kvim_linux.dtb`或者`meson-gxl-s905x-khadas-vim.dtb`到`/boot`目录并重命名为`dtb.img`。
* VIM2: 拷贝`kvim2.dtb`、`kvim2_linux.dtb`或者`meson-gxm-khadas-vim2.dtb`到`/boot`目录并重命名为`dtb.img`。
* VIM3: 拷贝`kvim3_linux.dtb`或者`kvim3l_linux.dtb`到`/boot`目录并重命名为`dtb.img`.
**注意:`VIM3`的板子选择`kvim3_linux.dtb`,`VIM3 Light`的板子请选择`kvim3l_linux.dtb`.**

### 3、激活多启动
两种方式激活多启动：
1)、通过[按键模式](/zh-cn/vim1/HowtoBootIntoUpgradeMode.html)。
2)、通过安卓系统激活。
* 进入`Settings>About Device->System->updates`。
* 点击`select`并选择`aml_autosript.zip`。
* 点击`update`，系统会重启运行外部媒体介质固件。
**注意：不要使用电脑USB供电，要使用适配器供电，否则会导致激活多启动失败！**

### 注意
* 对于之前的Android N存在权限问题，所以不能通过之前版本来启动外部媒体介质镜像，否则或导致外部媒体介质镜像被破坏。

* 对于Android O同样有权限问题。如果你想要通过Android O来启动linux 4.9内核的系统，可以参考[这里](http://forum.khadas.com/t/armbian-kodi-ubuntu-debian-for-sd-usb-emmc/825/109)解决。
