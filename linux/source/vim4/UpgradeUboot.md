title: Upgrade U-boot
---

## Upgrading U-boot from kernel space

Copy the Debian U-boot package to your board and install it.

```
$ sudo dpkg -i linux-u-boot-vim4-vendor_1.0.7-2019.01_arm64.deb
$ sync
$ sudo reboot
```

## Upgrade U-boot from U-boot console

{% note warn %}
Only for SoC Vendor eMMC U-Boot.
{% endnote %}

Using a [Serial Tool](SetupSerialTool.html), you can directly upgrade U-boot from the U-boot console.

The installed U-boot is located at `build/u-boot/fip/_tmp/u-boot.bin.signed`.

* Power on the board and enter the U-boot console
* Copy `u-boot.bin.signed` into an SD card or thumbdrive
* Insert the SD card or thumbdrive into the board
* Execute the following commands to upgrade U-boot

```
kvim4#usb_update bootloader u-boot.bin.signed
kvim4#reboot
```

## See Also
[Build U-Boot](BuildUboot.html)
