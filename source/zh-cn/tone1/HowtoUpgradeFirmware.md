title: 如何升级固件
---

# 在Windows下

**准备:**

* 下载升级工具 [USB Upgrade Tool](https://dl.khadas.com/Firmware/ToneBoard/Driver/%5bOnly%20for%20some%20OS%20Upgrade%20XMOS%5d-XMOS-TUSBAudio-EVAL-V4.11.0-Setup.zip) 并解压。
* 从 [目录](https://dl.khadas.com/Firmware/ToneBoard/) 下载 `.bin` 固件并解压。 
* 用USB-C数据线将TONE1连接到PC。

![TONE1 With USB-C Cable](/images/tone1/tb_fw_01.jpg)

**安装:**

* 运行 `setup_eval.exe` 程序安装工具，用来升级TONE1的固件。

![TONE1 USB Upgrade Tool Installation](/images/tone1/tb_fw_02.jpg)

* 点击 `Yes`，然后断开并重新连接TONE1。

![Disconnect and Reconnect TONE1](/images/tone1/tb_fw_03.jpg)

**升级:**

* 从开始菜单中打开 `TUSBAudio Firmware Upgrade` 。

![TUSBAudio Firmware Upgrade Tool](/images/tone1/tb_fw_04.jpg)

* 当出现 `Device Opened` 时, 表示TONE1连接成功并且可以开始升级(如果没有，断开并重新连接TONE1)。

![TONE1 Ready For Upgrade](/images/tone1/tb_fw_05.jpg)

* 点击 `Browse`， 将解压的 `.bin` 文件加载到工具中。

![TONE1 USB Upgrade Tool Browse For .img](/images/tone1/tb_fw_07.jpg)

* 点击 `Start`， 开始升级。

![TONE1 USB Upgrade Tool Click Start](/images/tone1/tb_fw_08.jpg)

* 升级完成后，点击 `Exit` 退出。

![TONE1 USB Upgrade Tool Finished And Exit](/images/tone1/tb_fw_09.jpg)

* 卸载用于升级固件的[EVAL driver](https://dl.khadas.com/Firmware/ToneBoard/Driver/%5bOnly%20for%20some%20OS%20Upgrade%20XMOS%5d-XMOS-TUSBAudio-EVAL-V4.11.0-Setup.zip) ，安装[v224 driver](https://dl.khadas.com/Firmware/ToneBoard/Driver/Thesycon-Stereo-USB-Audio-Driver-V224.rar)。

* 如果你使用的是Windows 10, 卸载所有的 Khadas-supplied 驱动程序，使用系统自带的 [Win10 UAC2 driver](https://docs.microsoft.com/en-us/windows-hardware/drivers/audio/usb-2-0-audio-drivers) 。

# 在Ubuntu下

**准备:**

```
$ sudo apt-get update
$ sudo apt-get install git libusb-1.0-0 libusb-1.0-0-dev
```

**下载烧录工具:**

TONE1 DFU 烧录工具在仓库[utils](https://github.com/khadas/utils)中。

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

*注意：安装过程中需要root权限。*

**升级:**

* 从 [目录](https://dl.khadas.com/Firmware/ToneBoard/) 中下载固件并解压到本地路径，如`/home/*`。

* 打开终端进入`/home/*`

```
$ cd /home/*
```

* 用USB-C数据线将TONE1连接到PC，并检查是否识别成功。

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
*注意：升级会停留在 `Waiting for device to restart and enter DFU mode` 20s，请耐心等待。*


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

# 在Mac OS下

**准备:**

* 访问我们的Github并下载 [Mac OS X - USB Upgrade Tool](https://github.com/numbqq/USB-Audio-2.0-Software-v6.1)。
     * 首先，点击绿色的 `Clone or download` 按钮。
     * 然后，点击选项`Download ZIP`。
     * 最后，解压 `.zip` 文件到你选择的目录。

**安装:**

* 打开终端，通过键盘上的 `Command-Space`，在Spotlight中输入 `terminal`。
* 在终端中输入 `cd your_directory/sc_usb_audio/module_dfu/host/xmos_dfu_osx`。
     * 将 `your_directory` 替换为解压USB升级工具的目录。
* 或者，从Finder中导航到 `/sc_usb_audio/module_dfu/host/`：
     * 首先输入 `cd`, 后跟 `space`，进入终端。
     * 然后将 `xmos_dfu_osx` 文件夹拖入终端，按下 `Enter`键。 
* 通过在终端中输入: `make -f Makefile.OSX all` 来构建工具，原始说明在[这里](https://www.xmos.com/developer/published/dfu-user-guide?page=4#usb-audiosec-building-xmos-dfu)。
* 如果构建成功，你会看到如下信息:
```
make -f Makefile.OSX all
g++ -g -o xmosdfu xmosdfu.cpp -I. -IOSX libusb-1.0.0-x86_64.dylib -m64
xmosdfu.cpp:96:1: warning: control reaches end of non-void function [-Wreturn-type]
}
^
xmosdfu.cpp:100:1: warning: control reaches end of non-void function [-Wreturn-type]
}
^
xmosdfu.cpp:104:1: warning: control reaches end of non-void function [-Wreturn-type]
}
^
xmosdfu.cpp:108:1: warning: control reaches end of non-void function [-Wreturn-type]
}
^
xmosdfu.cpp:256:1: warning: control may reach end of non-void function [-Wreturn-type]
}
^
xmosdfu.cpp:417:3: warning: bool literal returned from 'main' [-Wmain]
  return true;
  ^      ~~~~
6 warnings generated.
```
* 最后, 在终端中输入 `source setup.sh`，原始说明在[这里](https://www.xmos.com/developer/published/dfu-user-guide?version=&page=3)。
     * 如果成功，终端将保持沉默。

**升级:**
* 从 [https://dl.khadas.com/Firmware/ToneBoard/](https://dl.khadas.com/Firmware/ToneBoard/)下载固件，然后解压`.zip`文件。
* 用USB-C数据线将TONE1连接到你的Macbook / iMac 。
* 回到终端然后输入 `./xmosdfu --download`，后跟 `space`，将刚刚下载的 `firmware.bin` 从 Finder 拖到 Terminal，然后按下 `Enter` 键。
     * 如果成功, 你会看到终端输出如下信息:
```
./xmosdfu --download /Users/ossyx/Documents/Wesion/TONEBOARD\ FIRMWARE\ UPGRADE\ TOOL/Khadas_Tone_Board_dfu-2018-1226-Upgrade-Firmware/Khadas_Tone_Board_dfu_1226.bin 
VID = 0x20b1, PID = 0x8
XMOS DFU application started - Interface 2 claimed
Detaching device from application mode.
Waiting for device to restart and enter DFU mode...
VID = 0x20b1, PID = 0x8
... DFU firmware upgrade device opened
... Downloading image (/Users/ossyx/Documents/Wesion/TONEBOARD FIRMWARE UPGRADE TOOL/Khadas_Tone_Board_dfu-2018-1226-Upgrade-Firmware/Khadas_Tone_Board_dfu_1226.bin) to device
... Download complete
... Returning device to application mode
```


**注意:**

* 如果在Mac OS X尝试升级固件时输出如下信息：
```
./xmosdfu --download /Users/ossyx/Downloads/USB-Audio-2.0-Software-v6.1-master/sc_usb_audio/module_dfu/host/xmos_dfu_osx/Khadas_Tone_Board_dfu_1226.bin 
dyld: Library not loaded: /usr/local/lib/libusb-1.0.0.dylib
  Referenced from: /Users/ossyx/Downloads/USB-Audio-2.0-Software-v6.1-master/sc_usb_audio/module_dfu/host/xmos_dfu_osx/./xmosdfu
  Reason: image not found
Abort trap: 6
```
* 表示你需要升级 `libusb`, 你可以通过输入 `brew install libusb`来完成。
* 如果输入 `brew install libusb` 没有反应， 表示你需要升级 [HomeBrew](https://brew.sh/)。
* 如果 HomeBrew 升级失败， 你需要安装 Xcode 命令行工具, 在终端中输入 `xcode-select --install` 。

# 其他:

* [Tone1 概述](/zh-cn/tone1/index.html)
* [Tone1 用户手册](/zh-cn/tone1/UserManual.html)
* [Tone1 固件下载](https://dl.khadas.com/Firmware/ToneBoard/)
