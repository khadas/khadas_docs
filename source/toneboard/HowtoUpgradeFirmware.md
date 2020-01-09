title: How To Upgrade Firmware
---

# Upgrade On Windows

**Preparation:**

* Download the [USB Upgrade Tool](https://dl.khadas.com/Firmware/ToneBoard/Driver/%5bOnly%20for%20some%20OS%20Upgrade%20XMOS%5d-XMOS-TUSBAudio-EVAL-V4.11.0-Setup.zip) and extract it.
* Download the firmware `.bin` files from [this directory](https://dl.khadas.com/Firmware/ToneBoard/) and extract them. 
* Connect your Tone Board to your PC using a USB-C data cable.

![Tone Board With USB-C Cable](/images/toneboard/tb_fw_01.jpg)

**Installation:**

* Run `setup_eval.exe` to install the tool to upgrade your Tone Board's firmware.

![Tone Board USB Upgrade Tool Installation](/images/toneboard/tb_fw_02.jpg)

* Press `Yes`, then disconnect and reconnect your Tone Board.

![Disconnect and Reconnect Tone Board](/images/toneboard/tb_fw_03.jpg)

**Upgrading:**

* Open the `TUSBAudio Firmware Upgrade` tool, from your Start Menu.

![TUSBAudio Firmware Upgrade Tool](/images/toneboard/tb_fw_04.jpg)

* It should show `Device Opened`, which means your Tone Board is connected and ready for upgrading. (If not, disconnect and reconnect your Tone Board)

![Tone Board Ready For Upgrade](/images/toneboard/tb_fw_05.jpg)

* Click `Browse` and load the firmware `.bin` file you extracted, into the tool.

![Tone Board USB Upgrade Tool Browse For .img](/images/toneboard/tb_fw_07.jpg)

* Click `Start` to begin the upgrade process.

![Tone Board USB Upgrade Tool Click Start](/images/toneboard/tb_fw_08.jpg)

* Once firmware has upgraded, click `Exit`.

![Tone Board USB Upgrade Tool Finished And Exit](/images/toneboard/tb_fw_09.jpg)

* Uninstall the [EVAL driver](https://dl.khadas.com/Firmware/ToneBoard/Driver/%5bOnly%20for%20some%20OS%20Upgrade%20XMOS%5d-XMOS-TUSBAudio-EVAL-V4.11.0-Setup.zip) that you used for upgrading firmware, and re-install the [v224 driver](https://dl.khadas.com/Firmware/ToneBoard/Driver/Thesycon-Stereo-USB-Audio-Driver-V224.rar).

* Alternatively, if you're on Windows 10, uninstall all Khadas-supplied drivers and use the native [Win10 UAC2 driver](https://docs.microsoft.com/en-us/windows-hardware/drivers/audio/usb-2-0-audio-drivers) supplied with the OS.

# Upgrade On Ubuntu

**Preparation:**

```
$ sudo apt-get update
$ sudo apt-get install git libusb-1.0-0 libusb-1.0-0-dev
```

**Download Burning Tool:**

ToneBoard DFU burning tool on Ubuntu is in [utils](https://github.com/khadas/utils) repository.

```
$ git clone https://github.com/khadas/utils
```

Or just pull it (if you have already cloned this repository).
```
$ cd /path/to/utils
$ git pull
```

**Install Burning Tool:**
You need to install USB rules and create some links.

```
$ cd /path/to/utils/toneboard-dfu-tool
$ sudo ./INSTALL
```

You will see this print-out if it was successful.
```
[sudo] password for nick: 

===============================================

Host PC: Ubuntu 16.04

===============================================

Installing USB rules...
Installing toneboard-burn-tool...
Done!
```

*Note: Root privilege required.*

** Upgrading: **

* Download the firmware files from [this directory](https://dl.khadas.com/Firmware/ToneBoard/) and extract them to somewhere like your `Home` folder.

* Open a `Terminal` window, and `cd` into your `Home` folder.

```
$ cd /home/*
```

* Connect your Tone Board using a USB-C data cable to your PC. Check that it is recognised by Ubuntu.

```
$ lsusb
```

* If your Tone Board is recognised, you should see this (else, restart Ubuntu).

```
Bus 001 Device 005: ID 20b1:0008 XMOS Ltd
```

* Finally, run the tool with your firmware file of choice (drag and drop your `.bin` file to replace `/path/to/firmware.bin`).

```
$ sudo toneboard-burn-tool -i /path/to/firmware.bin
```
*Note: Upgrading will stuck at `Waiting for device to restart and enter DFU mode` for about 20 seconds, please wait patiently.*


* If upgrading was done successfully, you should see:

```
Upgrading ToneBoard firmware...
VID = 0xbda, PID = 0x411
VID = 0x1d6b, PID = 0x3
VID = 0x1a86, PID = 0x7523
VID = 0x2207, PID = 0x330c
VID = 0x4ca, PID = 0xa8
VID = 0x20b1, PID = 0x8
ToneBoard DFU application started - Interface 2 claimed
Detaching device from application mode.
Waiting for device to restart and enter DFU mode...
VID = 0x20b1, PID = 0x8
... DFU firmware upgrade device opened
... Downloading image (firmware.bin) to device
... Download complete
... Returning device to application mode
```

**Uninstall Burning Tool:**
```
$ cd /path/to/utils/toneboard-dfu-tool 
$ sudo ./UNINSTALL
```

# Upgrade On Mac OS

**Preparation:**

* Visit our Github and download the [Mac OS X - USB Upgrade Tool](https://github.com/numbqq/USB-Audio-2.0-Software-v6.1).
     * Click the green `Clone or download` button.
     * Then press the `Download ZIP` option.
     * Afterwards, extract the `.zip` file to a directory of your choosing.

**Installation:**

* Open a Terminal window, by pressing `Command-Space` on your keyboard, then type `terminal` into Spotlight. 
* From within Terminal type `cd your_directory/sc_usb_audio/module_dfu/host/xmos_dfu_osx`.
     * Replace `your_directory` with the directory that you've unzipped the USB Upgrade Tool to.
* Alternatively, navigate to `/sc_usb_audio/module_dfu/host/` from within the Finder.
     * Then type `cd`, followed by `space`, into Terminal.
     * And drag the `xmos_dfu_osx` folder into Terminal, and hit your `Enter` key.
* Build the tool by typing: `make -f Makefile.OSX all` into your Terminal window, original instructions are [here](https://www.xmos.com/developer/published/dfu-user-guide?page=4#usb-audiosec-building-xmos-dfu).
* If build was successful, you should see the following:
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
* Finally, type `source setup.sh` into Terminal, original instructions are [here](https://www.xmos.com/developer/published/dfu-user-guide?version=&page=3).
     * If successful, Terminal will be silent.

**Upgrading:**
* Download a firmware file from [https://dl.khadas.com/Firmware/ToneBoard/](https://dl.khadas.com/Firmware/ToneBoard/), then extract the `.zip` file.
* Connect your Tone Board to your Macbook / iMac via a USB-C data cable.
* Return to Terminal and type `./xmosdfu --download`, followed by `space`, and drag the `firmware.bin` you just downloaded, from the Finder into Terminal. Then hit `Enter`.
* If successful, you should see the following Terminal output:
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

**Notes:**
* If you get the following output when attempting to upgrade the firmware on Mac OS X:
```
./xmosdfu --download /Users/ossyx/Downloads/USB-Audio-2.0-Software-v6.1-master/sc_usb_audio/module_dfu/host/xmos_dfu_osx/Khadas_Tone_Board_dfu_1226.bin 
dyld: Library not loaded: /usr/local/lib/libusb-1.0.0.dylib
  Referenced from: /Users/ossyx/Downloads/USB-Audio-2.0-Software-v6.1-master/sc_usb_audio/module_dfu/host/xmos_dfu_osx/./xmosdfu
  Reason: image not found
Abort trap: 6
```
* It means you need to upgrade `libusb`. You can do this by typing `brew install libusb`.
* If typing `brew install libusb` didn't work, it means that you need to install [HomeBrew](https://brew.sh/).
* If HomeBrew fails, you need to install Xcode Command Line Tools, type `xcode-select --install` into Terminal.

# See Also:

* [Tone Board Beginners FAQ](https://docs.khadas.com/toneboard/index.html)
* [Tone Board User Manual](https://docs.khadas.com/toneboard/UserManual.html)
* [Tone Board Firmware Images](https://dl.khadas.com/Firmware/ToneBoard/)
