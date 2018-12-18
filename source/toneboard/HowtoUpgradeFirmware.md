title: How To Upgrade Firmware
---

# Upgrade On Windows:

**Preparation:**

* Download the [USB Upgrade Tool](https://bit.ly/2LnQZhD) and extract it.
* Download the firmware `.img` files from [this directory](https://dl.khadas.com/Firmware/ToneBoard/) and extract them. Recommend upgrading using `Khadas_Tone_Board_dfu-2018-1206-Upgrade-Firmware.zip`, followed by using `Khadas_Tone_Board_dfu_1207-Default maximum volume.zip`.
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

# Notes:

* Upgrading your Tone Board's DFU firmware is only possible using Windows 10.
* The upgrade tool is not available for Mac OS X and Linux OSes.
* The upgrade tool does not work on Windows 7, due to an "unsigned-driver" issue.
* If you’re on a Mac or Linux machine, you can use a Virtual Machine to run Windows 10 and upgrade from there.
* If you’re running older versions of Windows, you may have to borrow your friend’s Windows 10 computer.

# See Also:

* [Tone Board Beginners FAQ](https://docs.khadas.com/toneboard/index.html)
* [Tone Board User Manual](https://docs.khadas.com/toneboard/UserManual.html)
* [Tone Board Firmware Images](https://dl.khadas.com/Firmware/ToneBoard/)
