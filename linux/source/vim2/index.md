title: Quick Start
---

This article mainly introduces how to quickly get started after getting the development board to make the system run.

## VIM2 Power Supply
Although your VIM2 SBC is compatible with various types of power supplies, these are the recommended specs for the best performance-output and stability.

1. 5V, 2000mA Power Adapter
2. USB-A to USB-C Cable

**Learn More:**
* [Khadas Shop - Power Adapter](https://www.khadas.com/product-page/power-adapter)
* [Khadas Shop - USB-C Cable](https://www.khadas.com/product-page/usb-c-cable)
* [Extra Power Input For Khadas VIMs](/linux/vim2/ExtraPowerInput.html)
* [Khadas VIM Specifications](https://www.khadas.com/vim)

## Displays & User Input
These items are useful when you need to connect your VIM2 SBC to an external display + keyboard mouse + remote control, for use as a desktop computer or media center.

1. 4K HDMI 2.0 Cable
2. HDMI-Compatible 1080P/4K Monitor
3. Wireless USB Keyboard + Mouse
4. CEC-Compatible Remote Control

```Note: Please do not attach multiple cables with large heads that interfere with each other, as that may bend or twist the connectors, and this will cause intermittent connectivity issues after some time.```

**Learn More:**
* [Khadas Shop - HDMI Cable](https://www.khadas.com/product-page/hdmi-cable)
* [Khadas Shop - Remote Control](https://www.khadas.com/product-page/ir-remote)
* [Amazon - Wireless Keyboard + Mouse](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Delectronics&field-keywords=wireless+keyboard+and+mouse&rh=n%3A172282%2Ck%3Awireless+keyboard+and+mouse)

## Quick connect and boot

1. Type-C: Type-C port is the power connection port

2. HDMI: Standard HDMI socket, connect your display

3. ETH (optional): Ethernet port holder

<img src="/linux/images/vim3/QuickConnect.jpg" width=800px>

After the power is turned on, it starts normally, and you can see the Khadas Logo on the display, and the white light flashes

## Troubleshooting

1. The blue light is always on and the boot screen is not seen: the WoL function is turned on, press the Power button to boot normally, turn off WOL->[How to use WOL](/linux/vim2/Wol)
2. Repeated restarts: insufficient power supply, please use the official recommended external power supply

## Commonly used documents

1. [Install OS into eMMC](/linux/vim2/InstallOsIntoEmmc.html)
2. [Install System into SD/USB Storage](/linux/vim2/InstallOsIntoSdusb.html)
3. [Enter Upgrade Mode](/linux/vim2/BootIntoUpgradeMode.html)
4. [Boot Images from External Media](/linux/vim2/BootFromExtMedia.html)
5. [Ubuntu Firmware](/linux/firmware/Vim1UbuntuFirmware.html)
6. [Wifi](/linux/vim2/Wifi.html)

## VIM2 Website
For more information, please see our website, read more decumentation, or visit our forum.
* [Khadas VIM2 Homepage](https://www.khadas.com/vim)
* [Khadas VIM2 Forum](https://forum.khadas.com/c/Khadas-VIM2)

