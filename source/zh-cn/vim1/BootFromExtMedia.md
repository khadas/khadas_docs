title: 从外部媒体介质启动系统
---


有很多系统运行在SD卡或U盘上,例如：[LibreELEC](http://forum.khadas.com/t/libreelec-for-khadas-vim-sd-usb-emmc/793),[Armbian images](http://forum.khadas.com/t/armbian-kodi-ubuntu-debian-for-sd-usb-emmc/825)以及[Khadas SD images](/zh-cn/vim1/Firmware.html#SD-USB-Installation)。这篇文档介绍如何运行这些镜像。

为了从外部媒体介质启动系统，需要确保如下两件事：
* eMMC中要运行安卓系统
* 激活多启动

对于不同的镜像需要不同的安卓版本。
* LibreELEC, Ubuntu使用linux 3.14内核的需要Android M或Android N(V180207及更新版本)运行在eMMC。
* Ubuntu使用linux 4.9内核的需要Android O运行在eMMC。

### 1、把固件写入到SD卡或U盘
* 在Ubuntu下使用`dd`命令写入
```
$ sudo dd if=/path/to/image of=/dev/sdX bs=8M
```
* 在Windows下使用工具`Win32DiskImager`写入。可以参考[在Windows下安装LibreELEC](/zh-cn/vim1/InstallLibreELEC.html#通过Windows-PC写入).

### 2、准备DTB文件
VIM1和VIM2使用不同的DTB文件。
* VIM1: 拷贝`kvim.dtb`或者`kvim_linux.dtb`到`/boot`目录并重命名为`dtb.img`。
* VIM2: 拷贝`kvim2.dtb`或者`kvim2_linux.dtb`到`/boot`目录并重命名为`dtb.img`。

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
