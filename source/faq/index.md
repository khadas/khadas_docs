title: Frequently Asked Questions
---

# Where can I find "getting started" guides?

These guides will be helpful for anyone learning how to use a Khadas SBC for the first-time.

**Guides:**

* [VIM1](/vim1/index.html)
* [VIM2](/vim2/index.html)
* [VIM3](/vim3/index.html)
* [Edge](/index.html)
* [Toneboard](/toneboard/UserManual.html)

**Tip:** In addition to reading our documentation, you'll find many helpful people on our [Khadas Forum](https://forum.khadas.com).

# How to use an SD-card to expand eMMC storage?

Using Android OS, you can use SD-cards to augment the limited amount of storage on the eMMC. Make sure that you're using a modern "high-speed" SD-card; something like a *microSDXC UHS-I* card will be suitable for this application.

**Instructions:**
1. Insert your SD-card into your VIM or Edge SBC.
2. Open the "Android-Settings" App (Gear Icon).
3. Select "Storage & Reset".
4. Select your SD-card under "Removable Storage".
5. Select "Set up as device storage".

**Tip:** If you've done the above steps correctly, your SD-card will become a seamless part of your SBC's eMMC storage. Exercise caution when unplugging your SD-card as some files and photos will become inaccessible! Make sure that you use the OS to "eject" the card first, before removing it physically.

# How to change/upgrade the Operating System?
Depending on your use-case, you may want to change/upgrade your Android OS to Ubuntu 18.04, or even run a custom dual-OS ROM. We refer to "operating system" files as "[Firmware Images](https://dl.khadas.com/Firmware/)", .img files, or ROMs. On our server, they are compressed into [.7z containers](https://www.howtogeek.com/357846/what-is-a-7z-file-and-how-do-i-open-one/), and will require [WinRAR](https://www.rarlab.com/) to unpack on Windows OS.

**Tip:** Changing operating systems will erase ALL the data on your eMMC. Unless the OS is meant to run from a Bootable SD-card (Booting Card), be sure to back-up all your data before following the instructions below.

**VIM1/VIM2/VIM3 Upgrading Instructions:**

1. Place VIM into [Upgrade Mode](/vim1/HowtoBootIntoUpgradeMode.html).
2. Two ways to upgrade:
  * [Upgrade Using A USB Cable](/vim1/UpgradeViaUSBCable.html) - Burn an .img file to the eMMC, directly from a Ubuntu or Windows Host.
  * [Upgrade Android Using An SD-Card](/vim1/UpgradeViaTFBurningCard.html) - Burn an .img file to the MMC, directly from an SD-Card.

**Edge Upgrading Instructions:**

1. Place Edge into [Upgrade Mode](/edge/HowtoBootIntoUpgradeMode.html).
2. Two ways to upgrade:
  * [Upgrade Using USB cable](/edge/UpgradeViaUSBCable.html) - Burn an .img file to the eMMC, from a Ubuntu or Windows Host.
  * [Upgrade Android Using An SD-Card](/edge/UpgradeViaTFBurningCard.html) - Burn an .img file to the eMMC, from an SD-Card.

# eMMC image versus a SD/USB image?

**eMMC image:** An eMMC image should be burned directly to the eMMC using a USB-C data cable, from a Ubuntu or Windows Host. It must not be burned into an SD-Card. For Example: Android and Ubuntu distributions containing the `EMMC` mark.

**SD/USB image:** An SD/USB image should be copied into an SD-Card, before that card is then used to reformat the eMMC storage with a new OS. For Example: Armbian, Ubuntu distributions containing the `SD_USB` mark, as well as LibreELEC and CoreELEC.

# How to bootup SD/USB images?

In order to bootup from `SD/USB` images, you need Android (V180209 or newer) or Ubuntu (V180531 or newer) running on your eMMC with Multi-Boot activated. Please refer to [Boot From External Media](/vim1/BootFromExtMedia.html) for more information.

# Help! My SBC won't power-on!

**Recommended VIM Power Supply**

Although your VIM SBC is compatible with various types of power supplies, these are the recommended specs for the best performance-output and stability.

1. 5V, 2A Power Adapter (USB 10W Adapter)
2. USB-A to USB-C Cable

The VIM3 will require the USB-C 24W Adapter, and USB-C male-to-male cable, if you attach power hungry devices like the M2X Extension Board, or an NVMe SSD.

3. USB-C 24W Adapter (5-20V USB Power Delivery)
4. USB-C Cable (Male-to-Male)

**Learn More:**
* [Extra Power Input For Khadas VIMs](/vim2/ExtraPowerInput.html)
* [Khadas VIM Specifications](https://www.khadas.com/vim)
* [Khadas Shop - USB 10W Adapter](https://www.khadas.com/product-page/power-adapter)
* [Khadas Shop - USB-A to USB-C Cable](https://www.khadas.com/product-page/usb-c-cable)
* [Khadas Shop - USB-C 24W Adapter](https://www.khadas.com/product-page/usb-c-24w-adapter)
* [Khadas Shop - USB-C Cable (Male-to-Male)](https://www.khadas.com/product-page/usb-c-cable-male-to-male)

**Recommended Edge Power Supply**

Although your Edge SBC is compatible with various types of power supplies, these are the recommended specs for the best performance-output and stability.

1. USB-C 24W Adapter (5-20V USB Power Delivery)
2. USB-C Cable (Male-to-Male)

**Learn More:**
* [Khadas Shop - USB-C 24W Adapter](https://www.khadas.com/product-page/usb-c-24w-adapter)
* [Khadas Shop - USB-C Cable (Male-to-Male)](https://www.khadas.com/product-page/usb-c-cable-male-to-male)
* [Edge+Captain Power Priority](/edge/EdgeCaptainPowerPriority.html)
* [Khadas Edge Specifications](https://khadas.com/edge)

**My Bootloader is Damaged**

Your SBC may also fail to power-on if the bootloader is damaged. In such cases, you'll need to place your SBC into Upgrade Mode using the MRegister, and then re-install the Operating System.

**Learn More:**
* [Upgrade Mode](/vim1/HowtoBootIntoUpgradeMode.html)
* [Upgrade Using USB-C Cable](/vim2/UpgradeViaUSBCable.html)

# Help! I turned on WOL, and now there's this blue light?

![vim2 blue light](/images/vim2/wol_status.jpg)

If you've turned on Wake-On-LAN (WOL) in your VIM, it will no longer power-on automatically when you connect a USB-C cable to it. Instead, you'll merely see a blue light activate indicating that there is electrical power being supplied to your SBC.

**Furthermore, your VIM will only power-on under these conditions:**
1. You physically press the ```power``` button, after seeing the blue light.
2. You send a magic packet to turn it on via LAN (Ethernet cable must be connected, and sending device must be on the same LAN as your VIM)

**Learn More:**
* [Turn On WOL](/vim2/HowtoUseWol.html)

# How to build my own Ubuntu/Debian images?

Please refer to: [Build Ubuntu/Debian Images](/vim1/FenixScript.html).

# How to connect to Wi-Fi from the Linux Command Line?

Please refer to: [Connecting to Wi-Fi from CLI](/edge/HowToConnectWifi.html)

# How to setup Bluetooth from the Linux Command Line?

Please refer to: [Setup Bluetooth from CLI](/edge/HowToSetupBluetooth.html)

# How can I check my MAC address?

Please refer to: [How to Use WOL](/edge/HowtoUseWol.html).

