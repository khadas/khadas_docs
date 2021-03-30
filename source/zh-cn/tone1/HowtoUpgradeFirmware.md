title: 升级固件
---

# Tone2 Pro - 升级固件 (Windows, Linux, Mac OS)

<a href="http://www.youtube.com/watch?feature=player_embedded&v=qRswdL1HPZU
" target="_blank"><img src="http://img.youtube.com/vi/qRswdL1HPZU/0.jpg" 
alt="Tone2 Pro - Firmware Upgrade (Windows, Linux, Mac OS)" width="480" height="360" border="10" /></a>

链接: [YouTube](http://www.youtube.com/watch?v=qRswdL1HPZU)

{% note info 注意 %}
对于苹果用户,需要为升级固件的工具提供可执行权限`chmod +x ./tone_dfu_tool_macos`
{% endnote %}

# Tone1 - 升级到khadas官方v2.00版本

<a href="https://www.khadas.com/post/tone1-upgrade-to-official-v2-firmware
" target="_blank"><img src="https://static.wixstatic.com/media/04a2a6_604f21aa83504b44a64b48471c6a7d1a~mv2.jpg/v1/fill/w_740,h_416,al_c,q_90,usm_0.66_1.00_0.01/04a2a6_604f21aa83504b44a64b48471c6a7d1a~mv2.webp" 
alt="Tone1 - Upgrade to Official Khadas Firmware v2.00" width="480" height="267" border="10" /></a>

链接: [Khadas 博客](https://www.khadas.com/post/tone1-upgrade-to-official-v2-firmware)


# Tone1 - 旧版升级固件的方法


<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="win-tab" data-toggle="tab" href="#win" role="tab" aria-controls="win" aria-selected="true">Windows</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="ubu-tab" data-toggle="tab" href="#ubu" role="tab" aria-controls="ubu" aria-selected="false">Ubuntu</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="mac-tab" data-toggle="tab" href="#mac" role="tab" aria-controls="mac" aria-selected="false">Mac OS</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="win" role="tabpanel" aria-labelledby="win-tab">

* 下载升级工具 [USB Upgrade Tool](https://dl.khadas.com/Firmware/ToneBoard/Driver/%5bOnly%20for%20some%20OS%20Upgrade%20XMOS%5d-XMOS-TUSBAudio-EVAL-V4.11.0-Setup.zip) 并解压。
* 从 [目录](https://dl.khadas.com/Firmware/ToneBoard/) 下载 `.bin` 固件并解压。
* 用USB-C数据线将Tone连接到PC。

![Tone With USB-C Cable](/images/tone1/tb_fw_01.jpg)

**安装:**

* 运行 `setup_eval.exe` 程序安装工具，用来升级Tone的固件。

![Tone USB Upgrade Tool Installation](/images/tone1/tb_fw_02.jpg)

* 点击 `Yes`，然后断开并重新连接Tone。

![Disconnect and Reconnect Tone](/images/tone1/tb_fw_03.jpg)

**升级:**

* 从开始菜单中打开 `TUSBAudio Firmware Upgrade` 。

![TUSBAudio Firmware Upgrade Tool](/images/tone1/tb_fw_04.jpg)

* 当出现 `Device Opened` 时, 表示Tone连接成功并且可以开始升级(如果没有，断开并重新连接Tone)。

![Tone Ready For Upgrade](/images/tone1/tb_fw_05.jpg)

* 点击 `Browse`， 将解压的 `.bin` 文件加载到工具中。

![Tone USB Upgrade Tool Browse For .img](/images/tone1/tb_fw_07.jpg)

* 点击 `Start`， 开始升级。

![Tone USB Upgrade Tool Click Start](/images/tone1/tb_fw_08.jpg)

* 升级完成后，点击 `Exit` 退出。

![Tone USB Upgrade Tool Finished And Exit](/images/tone1/tb_fw_09.jpg)

* 卸载用于升级固件的[EVAL driver](https://dl.khadas.com/Firmware/ToneBoard/Driver/%5bOnly%20for%20some%20OS%20Upgrade%20XMOS%5d-XMOS-TUSBAudio-EVAL-V4.11.0-Setup.zip) ，安装[v224 driver](https://dl.khadas.com/Firmware/ToneBoard/Driver/Thesycon-Stereo-USB-Audio-Driver-V224.rar)。

* 如果你使用的是Windows 10, 卸载所有的 Khadas-supplied 驱动程序，使用系统自带的 [Win10 UAC2 driver](https://docs.microsoft.com/en-us/windows-hardware/drivers/audio/usb-2-0-audio-drivers) 。

</div>
<div class="tab-pane fade" id="ubu" role="tabpanel" aria-labelledby="ubu-tab">

**准备:**

```
$ sudo apt-get update
$ sudo apt-get install git libusb-1.0-0 libusb-1.0-0-dev
```

**下载烧录工具:**

Tone DFU 烧录工具在仓库[utils](https://github.com/khadas/utils)中。

```
$ git clone https://github.com/khadas/utils
```

如果你之前已经下载过`utils`仓库，那么你只需要更新到最新版本即可。
```
$ cd /path/to/utils
$ git pull
```

**安装烧录工具:**
需要安装usb规则以及创建链接文件。

```
$ cd /path/to/utils/tone-dfu-tool
$ sudo ./INSTALL
```

如果成功安装你会看到如下信息：
```
[sudo] password for nick: 

===============================================

Host PC: Ubuntu 20.04

===============================================

Installing USB rules...
Installing tone-burn-tool...
Done!
```

{% note info 注意 %}
安装过程中需要root权限。
{% endnote %}

**升级:**

* 从 [目录](https://dl.khadas.com/Firmware/ToneBoard/) 中下载固件并解压到本地路径，如`/home/*`。

* 打开终端进入`/home/*`

```
$ cd /home/*
```

* 用USB-C数据线将Tone连接到PC，并检查是否识别成功。

```
$ lsusb
```

* 如果识别成功，你可以看到如下信息(如果没有，重启Ubuntu)：

```
Bus 001 Device 005: ID 20b1:0008 XMOS Ltd
```

* 最后，通过命令进行烧录 (将你的 `.bin` 文件替代 `/path/to/firmware.bin`)。

```
$ sudo toneboard-burn-tool -i /path/to/firmware.bin
```

{% note info 注意 %}
升级会停留在 `Waiting for device to restart and enter DFU mode` 20s，请耐心等待。
{% endnote %}

* 如果升级成功，你会看到如下信息：

```
Upgrading Tone firmware...
Khadas Tone1 detected!
Tone DFU application started - Interface 2 claimed
Detaching device from application mode.
Waiting for device to restart and enter DFU mode...
... DFU firmware upgrade device opened
... Downloading image (Tone1_Firmware_V2.00_201016.bin) to device
... Download complete
... Returning device to application mode
```

**卸载烧录工具:**
```
$ cd /path/to/utils/tone-dfu-tool
$ sudo ./UNINSTALL
```

</div>
<div class="tab-pane fade" id="mac" role="tabpanel" aria-labelledby="mac-tab">

**准备:**

下载DFU工具到某处，如：`~/Desktop`：

```
$ cd ~/Desktop
$ wget https://github.com/khadas/utils/raw/master/tone-dfu-tool/tools/macos/tone_dfu_tool
$ chmod +x tone_dfu_tool
```

**升级:**
* 从 [https://dl.khadas.com/Firmware/ToneBoard/](https://dl.khadas.com/Firmware/ToneBoard/)下载固件，然后解压`.zip`文件。
* 用USB-C数据线将Tone连接到你的Macbook / iMac 。
* 回到终端然后输入 `./tone_dfu_tool --download`，后跟 `space`，将刚刚下载的 `firmware.bin` 从 Finder 拖到 Terminal，然后按下 `Enter` 键。
     * 如果成功, 你会看到终端输出如下信息:
```
$ ./tone_dfu_tool --download /path/to/Tone2_Pro_DFU_TEST201228_nothing.bin
VID = 0x3353, PID = 0xa002
Khadas Tone2 Pro detected!
Tone DFU application started - Interface 2 claimed
Detaching device from application mode.
Waiting for device to restart and enter DFU mode...
VID = 0x3353, PID = 0xa002
... DFU firmware upgrade device opened
... Downloading image (/path/to/Tone2_Pro_DFU_TEST201228_nothing.bin) to device
... Download complete
... Returning device to application mode
```

{% note info 注意 %}

* 如果在Mac OS尝试升级固件时输出如下信息：
```
./tone_dfu_tool --download /path/to/Tone2_Pro_DFU_TEST201228_nothing.bin
dyld: Library not loaded: /usr/local/lib/libusb-1.0.0.dylib
  Referenced from: /Users/ossyx/Downloads/USB-Audio-2.0-Software-v6.1-master/sc_usb_audio/module_dfu/host/xmos_dfu_osx/./xmosdfu
  Reason: image not found
Abort trap: 6
```
* 表示你需要升级 `libusb`, 你可以通过输入 `brew install libusb`来完成。
* 如果输入 `brew install libusb` 没有反应， 表示你需要升级 [HomeBrew](https://brew.sh/)。
* 如果 HomeBrew 升级失败， 你需要安装 Xcode 命令行工具, 在终端中输入 `xcode-select --install` 。

{% endnote %}

</div>
</div>


# 其他:

* [Tone1 概述](/zh-cn/tone1/index.html)
* [Tone1 用户手册](/zh-cn/tone1/UserManual.html)
* [Tone1 固件下载](https://dl.khadas.com/Firmware/ToneBoard/)
