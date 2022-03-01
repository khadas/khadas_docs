title: 使用ADB工具
---

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


## 安装ADB

首先你要更新你的源，之后可以通过命令行直接安装。

```shell
$ sudo apt-get update
$ sudo apt-get install android-tools-adb
```

### 添加权限&编写配置文件

现在ADB工具已经安装在你的计算机中，但在使用之前还要做一些准备。

#### 添加权限

```shell
$ sudo  useradd -G plugdev $USER
```

#### 编写配置文件

创建一个rules文件。

```shell
$ sudo vim /etc/udev/rules.d/51-android.rules
```

将以下内容写入文件中。

```shell
SUBSYSTEM=="usb", ENV{DEVTYPE}=="usb_device", MODE="0666"
```

这是一个通用配置。

#### 重启你的udev

```shell
$ sudo /etc/init.d/udev restart
```
</div>
<div class="tab-pane fade" id="Windows-pins" role="tabpanel" aria-labelledby="Windows-tab">

## 安装ADB

首先参照安装 USB 驱动一节安装好驱动。
然后下载 [adb.zip](https://dl.khadas.com/products/edge/tool/ADB.zip)，解压到打开`cmd`命令行窗口的根目录以方便调用，如下图所示：
![mac](/android/images/vim4/adb.png)

</div>
</div>

## 使用ADB

### 网络ADB 

* 确保连上局域网Wi-Fi或有线网络

* 确保开启调试模式: `Settings-->Developer options--->USB debugging`

* 查看设备IP地址: `Settings-->About device--->Status--->IP`

* 执行 `adb connect` 命令,如下:
```shell
$ adb connect 192.168.1.120
$ adb shell
```

### USB ADB

* 确保设备通过USB-C数据线连接到PC

* 确保调试模式打开: `Settings-->Developer options--->USB debugging`

* 打开终端执行如下命令: 
```shell
$ adb shell
```


# 参考
* [Android Debug Brige](https://developer.android.com/studio/command-line/adb.html)


**注意:**
1. 如果你使用的是安卓手机，请确认你的手机打开了*开发者模式*。
2. 当你尝试开始通过`adb devices`命令调试你的手机时,你的手机会弹出一条提醒，请确认连接。
3. 如果你使用的安卓设备是khadas的开发板，那么直接连接即可。


