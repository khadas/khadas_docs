title: 如何安装ADB调试工具
---

这里将会介绍如何安装以及如何使用ADB工具
### 如何安装ADB
首先你要更新你的源，之后可以通过命令行直接安装。
>$ sudo apt-get update
>$ sudo apt-get install android-tools-adb

### 添加权限&编写配置文件
现在ADB工具已经安装在你的计算机中，但在使用之前还要做一些准备。
#### 添加权限
> $ sudo  useradd -G plugdev $USER

#### 编写配置文件
创建一个rules文件
>$ sudo vim /etc/udev/rules.d/51-android.rules
 
将以下内容写入文件中
>SUBSYSTEM=="usb", ENV{DEVTYPE}=="usb_device", MODE="0666"

这是一个通用配置。
#### 重启你的udev
>$ sudo /etc/init.d/udev restart

### 如何使用ADB工具
在使用之前需要先连接你的安卓设备。
>$ adb devices

你将会在终端上看到类似的内容：
> List of devices attached
87e3c28f        device

打开调试shell
>adb shell

**注意:** 
1.如果你使用的是安卓手机，请确认你的手机打开了 *开发者模式*.
2.当你尝试开始通过  `adb devices` 命令调试你的手机时,你的手机会弹出一条提醒，请确认连接。
3.如果你使用的安卓设备是khadas的开发板，那么直接连接即可。
