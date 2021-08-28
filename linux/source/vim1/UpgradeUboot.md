title: Upgrade U-Boot
---

## Build U-Boot

Please refer [Build U-Boot](BuildUboot.html).

## Upgrade U-Boot in Kernel Space

Copy the U-Boot Debian package to the board and install it.

```
$ sudo dpkg -i linux-u-boot-vim3-vendor_1.0.7-2015.01_arm64.deb
$ sync
$ sudo reboot
```

## Upgrade U-Boot in U-Boot Command Line

{% note warn %}
Only for SoC vendor eMMC U-Boot.
{% endnote %}

We can also upgrade the U-Boot in U-Boot command line mode. You need to setup the [Serial Tool](SetupSerialTool.html).

The built U-Boot is `build/u-boot/fip/_tmp/u-boot.bin`.

* Power on the board and enter u-boot command line
* Copy `u-boot.bin` to a U-Disk
* Insert the U-Disk to the board
* Execute the command to upgrade the u-boot

```
kvim3#usb_update bootloader u-boot.bin
kvim3#reboot
```

## See Also
[Build U-Boot](BuildUboot.html)
