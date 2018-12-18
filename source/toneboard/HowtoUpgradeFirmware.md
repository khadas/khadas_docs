title: How To Upgrade Firmware
---

# Upgrade On Windows:

**Preparation:**

* Download the [USB Upgrade Tool](https://bit.ly/2LnQZhD) and extract it.
* Download the firmware `.img` files from [this directory](https://dl.khadas.com/Firmware/ToneBoard/) and extract them. 
  * Recommend upgrading using `Khadas_Tone_Board_dfu-2018-1206-Upgrade-Firmware.zip` first.
  * Followed by using `Khadas_Tone_Board_dfu_1207-Default maximum volume.zip`.
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

* Click `Browse` and load the firmware `.img` file you extracted, into the tool.

![Tone Board USB Upgrade Tool Browse For .img](/images/toneboard/tb_fw_07.jpg)

* Click `Start` to begin the upgrade process.

![Tone Board USB Upgrade Tool Click Start](/images/toneboard/tb_fw_08.jpg)

* Once firmware has upgraded, click `Exit`.

![Tone Board USB Upgrade Tool Finished And Exit](/images/toneboard/tb_fw_09.jpg)

# Upgrade On Ubuntu:

**Preparation:**

* Download the [USB Upgrade Tool](https://dl.khadas.com/Firmware/ToneBoard/UpgradeTool/toneboard_dfu_tool), and save it to your `Home` folder.
* Download the firmware `.img` files from [this directory](https://dl.khadas.com/Firmware/ToneBoard/) and extract them to your `Home` folder.
  * Recommend upgrading using `Khadas_Tone_Board_dfu-2018-1206-Upgrade-Firmware.zip` first.
  * Followed by using `Khadas_Tone_Board_dfu_1207-Default maximum volume.zip`.

**Upgrading:**

* Open a `Terminal` window, and `cd` into your `Home` folder.

```$ cd /home/*```

* Connect your Tone Board using a USB-C data cable to your PC. Check that it is recognised by Ubuntu.

```$ lsusb```

* If your Tone Board is recognised, you should see this (else, restart Ubuntu).

```Bus 001 Device 005: ID 20b1:0008 XMOS Ltd```

* Then change the permissions for `toneboard_dfu_tool` with `chmod`.

```$ chmod +x toneboard_dfu_tool```

* Finally, run the tool with your firmware `.img` file of choice (drag and drop your `.img` file to replace `/path/to/firmware.img`).

```$ sudo ./toneboard_dfu_tool --download /path/to/firmware.img```

* If upgrading was done successfully, you should see:

```
VID = 0xbda, PID = 0x411
VID = 0x1d6b, PID = 0x3
VID = 0x1a86, PID = 0x7523
VID = 0x4ca, PID = 0xa8
VID = 0x20b1, PID = 0x8
ToneBoard DFU application started - Interface 2 claimed
Detaching device from application mode.
Waiting for device to restart and enter DFU mode...
VID = 0x20b1, PID = 0x8
... DFU firmware upgrade device opened
... Downloading image (/home/nick/work/share/ToneBoard/linux-upgrade-tool/firmware.bin) to device
... Download complete
... Returning device to application mode
```

# See Also:

* [Tone Board Beginners FAQ](https://docs.khadas.com/toneboard/index.html)
* [Tone Board User Manual](https://docs.khadas.com/toneboard/UserManual.html)
* [Tone Board Firmware Images](https://dl.khadas.com/Firmware/ToneBoard/)
