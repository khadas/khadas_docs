title: Upgrade U-Boot
---

## Upgrading U-Boot from Kernel Space

Copy the Debian U-Boot package to your board and install it.

```
$ sudo dpkg -i linux-u-boot-vim4-vendor_1.0.7-2019.01_arm64.deb
$ sync
$ sudo reboot
```

## Upgrade U-Boot from U-Boot Console

{% note warn %}
Only for SoC Vendor eMMC U-Boot.
{% endnote %}

Using a [Serial Tool](setup_serial_tool.html), you can directly upgrade U-Boot from the U-Boot console.

The installed U-Boot is located at `build/u-boot/fip/_tmp/u-boot.bin.signed`.

* Power on the board and enter the U-Boot console
* Copy `u-boot.bin.signed` into an SD card or thumbdrive
* Insert the SD card or thumbdrive into the board
* Execute the following commands to upgrade U-Boot

```
kvim4#usb_update bootloader u-boot.bin.signed
kvim4#reboot
```

## See Also
[Build U-Boot](build_uboot.html)
