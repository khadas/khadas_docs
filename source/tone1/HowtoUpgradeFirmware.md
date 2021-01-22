title: How To Upgrade Firmware
---

# Tone2 Pro - Firmware Upgrade (Windows, Linux, Mac OS)

<a href="http://www.youtube.com/watch?feature=player_embedded&v=qRswdL1HPZU
" target="_blank"><img src="http://img.youtube.com/vi/qRswdL1HPZU/0.jpg" 
alt="Tone2 Pro - Firmware Upgrade (Windows, Linux, Mac OS)" width="480" height="360" border="10" /></a>

Link: [YouTube](http://www.youtube.com/watch?v=qRswdL1HPZU)

# Tone1 - Upgrade to Official Khadas Firmware v2.00

<a href="https://www.khadas.com/post/tone1-upgrade-to-official-v2-firmware
" target="_blank"><img src="https://static.wixstatic.com/media/04a2a6_604f21aa83504b44a64b48471c6a7d1a~mv2.jpg/v1/fill/w_740,h_416,al_c,q_90,usm_0.66_1.00_0.01/04a2a6_604f21aa83504b44a64b48471c6a7d1a~mv2.webp" 
alt="Tone1 - Upgrade to Official Khadas Firmware v2.00" width="480" height="267" border="10" /></a>

Link: [Khadas Blog](https://www.khadas.com/post/tone1-upgrade-to-official-v2-firmware)

***

# Tone1 - Upgrade On Windows (Legacy)

**Preparation:**

* Download the [USB Upgrade Tool](https://dl.khadas.com/Firmware/ToneBoard/Driver/%5bOnly%20for%20some%20OS%20Upgrade%20XMOS%5d-XMOS-TUSBAudio-EVAL-V4.11.0-Setup.zip) and extract it.
* Download the firmware `.bin` files from [this directory](https://dl.khadas.com/Firmware/ToneBoard/) and extract them. 
* Connect your Tone to your PC using a USB-C data cable.

![Tone With USB-C Cable](/images/tone1/tb_fw_01.jpg)

**Installation:**

* Run `setup_eval.exe` to install the tool to upgrade your Tone's firmware.

![Tone USB Upgrade Tool Installation](/images/tone1/tb_fw_02.jpg)

* Press `Yes`, then disconnect and reconnect your Tone.

![Disconnect and Reconnect Tone](/images/tone1/tb_fw_03.jpg)

**Upgrading:**

* Open the `TUSBAudio Firmware Upgrade` tool, from your Start Menu.

![TUSBAudio Firmware Upgrade Tool](/images/tone1/tb_fw_04.jpg)

* It should show `Device Opened`, which means your Tone is connected and ready for upgrading. (If not, disconnect and reconnect your Tone)

![Tone Ready For Upgrade](/images/tone1/tb_fw_05.jpg)

* Click `Browse` and load the firmware `.bin` file you extracted, into the tool.

![Tone USB Upgrade Tool Browse For .img](/images/tone1/tb_fw_07.jpg)

* Click `Start` to begin the upgrade process.

![Tone USB Upgrade Tool Click Start](/images/tone1/tb_fw_08.jpg)

* Once firmware has upgraded, click `Exit`.

![Tone USB Upgrade Tool Finished And Exit](/images/tone1/tb_fw_09.jpg)

* Uninstall the [EVAL driver](https://dl.khadas.com/Firmware/ToneBoard/Driver/%5bOnly%20for%20some%20OS%20Upgrade%20XMOS%5d-XMOS-TUSBAudio-EVAL-V4.11.0-Setup.zip) that you used for upgrading firmware, and re-install the [v224 driver](https://dl.khadas.com/Firmware/ToneBoard/Driver/Thesycon-Stereo-USB-Audio-Driver-V224.rar).

* Alternatively, if you're on Windows 10, uninstall all Khadas-supplied drivers and use the native [Win10 UAC2 driver](https://docs.microsoft.com/en-us/windows-hardware/drivers/audio/usb-2-0-audio-drivers) supplied with the OS.

# Tone1 - Upgrade On Ubuntu (Legacy)

**Preparation:**

```
$ sudo apt-get update
$ sudo apt-get install git libusb-1.0-0 libusb-1.0-0-dev
```

**Download Burning Tool:**

Tone DFU burning tool on Ubuntu is in [utils](https://github.com/khadas/utils) repository.

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
$ cd /path/to/utils/tone-dfu-tool
$ sudo ./INSTALL
```

You will see this print-out if it was successful.
```
[sudo] password for nick: 

===============================================

Host PC: Ubuntu 20.04

===============================================

Installing USB rules...
Installing tone-burn-tool...
Done!
```

*Note: Root privilege required.*

**Upgrading:**

* Download the firmware files from [this directory](https://dl.khadas.com/Firmware/ToneBoard/) and extract them to somewhere like your `Home` folder.

* Open a `Terminal` window, and `cd` into your `Home` folder.

```
$ cd /home/*
```

* Run the tool with your firmware file of choice (drag and drop your `.bin` file to replace `/path/to/firmware.bin`).

```
$ sudo tone-burn-tool -i /path/to/firmware.bin
```
*Note: Upgrading will stuck at `Waiting for device to restart and enter DFU mode` for about 20 seconds, please wait patiently.*


* If upgrading was done successfully, you should see:

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

**Uninstall Burning Tool:**
```
$ cd /path/to/utils/tone-dfu-tool
$ sudo ./UNINSTALL
```

# Tone1 - Upgrade On Mac OS (Legacy)

**Preparation:**

Download the ready to use dfu tool to somewhere like:`~/Desktop`

```
$ wget https://github.com/khadas/utils/raw/master/tone-dfu-tool/tools/macos/tone_dfu_tool
$ chmod +x tone_dfu_tool
```

**Upgrading:**
* Download a firmware file from [https://dl.khadas.com/Firmware/ToneBoard/](https://dl.khadas.com/Firmware/ToneBoard/), then extract the `.zip` file.
* Connect your Tone to your Macbook / iMac via a USB-C data cable.
* Return to Terminal and type `./tone_dfu_tool --download`, followed by `space`, and drag the `firmware.bin` you just downloaded, from the Finder into Terminal. Then hit `Enter`.
* If successful, you should see the following Terminal output:
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

**Notes:**

* If you get the following output when attempting to upgrade the firmware on Mac OS:
```
./tone_dfu_tool --download /path/to/Tone2_Pro_DFU_TEST201228_nothing.bin
dyld: Library not loaded: /usr/local/lib/libusb-1.0.0.dylib
  Referenced from: /Users/ossyx/Downloads/USB-Audio-2.0-Software-v6.1-master/sc_usb_audio/module_dfu/host/xmos_dfu_osx/./xmosdfu
  Reason: image not found
Abort trap: 6
```
* It means you need to upgrade `libusb`. You can do this by typing `brew install libusb`.
* If typing `brew install libusb` didn't work, it means that you need to install [HomeBrew](https://brew.sh/).
* If HomeBrew fails, you need to install Xcode Command Line Tools, type `xcode-select --install` into Terminal.

# See Also:

* [Tone1 Beginners FAQ](/tone1/index.html)
* [Tone1 User Manual](/tone1/UserManual.html)
* [Tone1 Firmware Images](https://dl.khadas.com/Firmware/ToneBoard/)
