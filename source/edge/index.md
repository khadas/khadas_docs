title: Edge Beginners Guide
---

# Edge Power Supply
Although your Edge SBC is compatible with various types of power supplies, these are the recommended specs for the best performance-output and stability.

![image](/images/edge/usb-c_adapter_24w_2.jpg)

1. Khadas USB-C 24W Power Adapter (USB Power Delivery)
2. Khadas USB-C Cable (Male-to-Male)

**Tip:** These items are now available at Khadas Shop

**Learn More:**
* [Edge+Captain Power Priority](https://docs.khadas.com/edge/EdgeCaptainPowerPriority.html)
* [Khadas Edge Specifications](https://khadas.com/edge)
* [Khadas Edge Accessories](https://www.khadas.com/edge-add-ons)

# Displays & User Input
These items are useful when you need to connect your Edge SBC to an external display + keyboard mouse + remote control, for use as a desktop computer or media center. *Edge series SBCs have USB-C display-port capability, which allows them to connect directly to Type-C enabled 4K monitors, to exchange power, data, video, and audio over a single cable.*

1. 4K HDMI 2.0 Cable
2. HDMI-Compatible 1080P/4K Monitor w/ USB Type-C
3. Wireless USB Keyboard + Mouse
4. CEC-Compatible Remote Control

**Learn More:**
* [Khadas Shop - HDMI Cable](https://www.khadas.com/product-page/hdmi-cable)
* [Khadas Shop - Remote Control](https://www.khadas.com/product-page/ir-remote)
* [Amazon - LG 4K Monitor w/ USB Type-C](https://www.amazon.com/LG-27UD88-W-LED-Lit-Monitor-Type-C/dp/B01CDYB0QS/ref=sr_1_7?ie=UTF8&qid=1543993886&sr=8-7&keywords=usb-c+compatible+monitor)
* [Amazon - Wireless Keyboard + Mouse](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Delectronics&field-keywords=wireless+keyboard+and+mouse&rh=n%3A172282%2Ck%3Awireless+keyboard+and+mouse)

```Note: Please do not attach multiple cables with large heads that interfere with each other, as that may bend or twist the connectors, and this will cause intermittent connectivity issues after some time.```

# Making Bootable/Burning SD-Cards/Thumbdrives
These items are useful when you want to upgrade your Edge SBC's operating system via SD-Card or Thumbdrive (Burning Cards). Or if you want to run operating systems that can only be run from external media (Booting Cards) like LibreELEC.

1. 8GB or Larger, SD-Card
2. SD-Card Reader
3. Laptop / Desktop PC
4. 8GB or Larger, USB-Thumbdrive (U-Disk)

**Learn More:**
* [Booting Card Vs Burning Card](https://docs.khadas.com/vim1/BootingCardVsBurningCard.html)
* [Upgrade Using SD-Card](https://docs.khadas.com/edge/UpgradeViaTFBurningCard.html)
* [Boot From External Media](https://docs.khadas.com/vim2/BootFromExtMedia.html)
* [Enter Upgrade Mode](https://docs.khadas.com/edge/HowtoBootIntoUpgradeMode.html)

**Tips:**
* **eMMC image** should be burned directly to the eMMC using a USB-C data cable, from a Ubuntu or Windows Host. It must not be burned into an SD-Card. For Example: Android and Ubuntu distributions containing the `EMMC` mark.
* **SD/USB image** should be copied into an SD-Card, before that card is then used to reformat the eMMC storage with a new OS. For Example: Armbian, Ubuntu distributions containing the `SD_USB` mark, as well as LibreELEC and CoreELEC.
* In order to bootup from **SD/USB images**, you need Android (V180209 or newer) or Ubuntu (V180531 or newer) running on your eMMC with Multi-Boot activated.

# Upgrading eMMC Operating System Using USB-C Cable
You'll need these items if you want to use your laptop or desktop PC to upgrade your Edge SBC's operating system stored in its eMMC storage. For example, changing the bootup operating system from Android to Ubuntu, or installing a more exotic 3rd-party OS.

1. USB-A to USB-C Data Cable (Legacy Computers)
2. USB-C to USB-C Data Cable (Modern Computers)
3. Laptop / Desktop PC

**Learn More:**
* [Upgrade Using USB-C Cable](https://docs.khadas.com/edge/UpgradeViaUSBCable.html)
* [Boot Into Upgrade Mode](https://docs.khadas.com/edge/HowtoBootIntoUpgradeMode.html)

**Firmware Images:**
* [Android OS](https://docs.khadas.com/edge/FirmwareAndroid.html)
* [Ubuntu OS](https://docs.khadas.com/edge/FirmwareUbuntu.html)

# Watching Movies, Expanding Internal eMMC Storage
These items are useful if you wish to use your Edge-V or Edge+Captain SBC as a media center, for storing/downloading large movie files. A microSDXC UHS-I card is expensive, but its also fast enough for 4K video playback. An external NVMe M.2 socket SSD will also be large enough to contain your entire media library.

1. NVMe PCIe M.2 2280 SSD
2. *microSDXC UHS-I* SD-Card

**Learn More:**
* [Amazon - Samsung 970 EVO NVMe SSD](https://www.amazon.com/Samsung-970-EVO-500GB-MZ-V7E500BW/dp/B07BN4NJ2J/ref=sr_1_3?ie=UTF8&qid=1543993490&sr=8-3&keywords=samsung+m.2+ssd)
* [Amazon - microSDXC UHS-I SD-Card](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=microSDXC+UHS-I&rh=i%3Aaps%2Ck%3AmicroSDXC+UHS-I)

# Software Development / Advanced Crash Recovery
*Edge series SBCs are equipped with "Terry's Smart Tweezers" for crash recovery without the need for conductive metal tweezers, even when the bootloader is damaged.* Extreme cases of crash-recovery will require you to use the MRegister to reset your Edge SBC. A USB Serial Debug Tool is also useful for developers debugging complex software issues. 

1. Your Fingers (For resetting a dead SBC via Terry's Smart Tweezers)
2. Conductive Metal Tweezers (For resetting a dead SBC via MRegister)
3. USB Serial Debug Tool (For diagnosing software/hardware issues)

**Learn More:**
* [Terry's Smart Tweezers](https://docs.khadas.com/edge/HowtoBootIntoUpgradeMode.html)
* [MRegister Upgrade Mode](https://docs.khadas.com/edge/HowtoBootIntoUpgradeMode.html)
* [Amazon - Metal Tweezers](https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=metal+tweezers)
* [Amazon - USB Serial Debug Tool](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=usb+serial+debug+tool&rh=i%3Aaps%2Ck%3Ausb+serial+debug+tool)

# Edge Website
For more information, please see our website, read more documentation, or visit our forum.
* [Khadas Edge Homepage](https://www.khadas.com/edge)
* [Khadas Edge Forum](https://forum.khadas.com/c/Khadas-Edge)
