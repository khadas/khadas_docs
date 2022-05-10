title: ADB工具使用
---

## ADB介绍
ADB是Android Debug Bridge的简称，其由客户端、守护进程、服务器三部分组成。

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="Linux-tab" data-toggle="tab" href="#Linux-pins" role="tab" aria-controls="Linux" aria-selected="true">Linux</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="Windows-tab" data-toggle="tab" href="#Windows-pins" role="tab" aria-controls="Windows" aria-selected="false">Windows</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="Linux-pins" role="tabpanel" aria-labelledby="Linux-tab">


## ADB工具安装

PC主机运行命令直接安装ADB工具：

```shell
$ sudo apt-get update
$ sudo apt-get install android-tools-adb
```

### 权限添加&文件配置

ADB工具安装完成后，在使用之前还要做一些准备。

#### 权限添加

```shell
$ sudo  useradd -G plugdev $USER
```

#### 文件配置

创建一个rules文件：

```shell
$ sudo vim /etc/udev/rules.d/51-android.rules
```

将以下内容写入文件中：

```shell
SUBSYSTEM=="usb", ENV{DEVTYPE}=="usb_device", MODE="0666"
```

#### 重启udev服务

```shell
$ sudo /etc/init.d/udev restart
```
</div>
<div class="tab-pane fade" id="Windows-pins" role="tabpanel" aria-labelledby="Windows-tab">

## ADB工具安装

* 安装USB驱动，请参考[通过USB升级固件](UpgradeViaUSBCable.html)
* 下载[Android SDK平台工具](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
* 解压平台工具到一个容易访问的文件夹，比如`C:\platform-tools`

{% note warn Note %}
* 在cmd终端执行adb命令时，需要进入`C:\platform-tools`目录，否则会提示找不到adb命令
{% endnote %}

</div>
</div>

## ADB使用

### 网络ADB

* 确保连上局域网Wi-Fi或有线网络

* 确保开启调试模式: `Settings-->Developer options-->USB debugging`

* 查看设备IP地址: `Settings-->About device-->Status-->IP`

* 执行 `adb connect` 命令，如下：
```shell
$ adb connect 192.168.1.120
$ adb shell
```

### USB ADB

* 确保设备通过USB-C数据线连接到PC

* 确保调试模式打开: `Settings-->Developer options-->USB debugging`

* 打开终端执行如下命令：
```shell
$ adb shell
```


## 参考
* [Android Debug Brige](https://developer.android.com/studio/command-line/adb.html)


{% note info Note %}
* 如果你使用的是安卓手机，请确认你的手机打开了*开发者模式*
* 当你尝试开始通过`adb devices`命令调试你的手机时,你的手机会弹出一条提醒，请确认连接
* 如果你使用的安卓设备是khadas的开发板，那么直接连接即可
{% endnote %}
