title: Boot From SPI Flash
---

Khadas Edge contains a 16 MB SPI-Flash that's used as boot storage; so you can image from it. This guide is about how to boot from the on-board SPI-Flash.

## Build U-boot For SPI-Flash
The U-Boot for SPI-Flash is different from the eMMC/SD's U-Boot. We recommend using [Fenix Script](https://github.com/khadas/fenix) to build U-Boot, as it's easy this way.

**This guide assumes that you have already setup a basic build environment. If not, please refer to [Fenix Usage](/edge/FenixScript.html).**

* Setup Environment:

```sh
$ cd fenix
$ source env/setenv.sh
```
Select `Edge` board.

* Build U-boot

```sh
$ make uboot
```
If successful, you will get a U-Boot for the SPI-Flash `u-boot-spi.bin`, in the directory `fenix/u-boot`.

## Burn U-boot To SPI Flash
Copy `u-boot-spi.bin` to an SD-Card or Thumbdrive (U-Disk) and insert it into your Edge.

[Setup serial debugging tool](/edge/SetupSerialTool.html) and boot to the U-Boot Command Line.

### Load U-boot to DDR

* Load U-Boot from SD-Card:

```sh
kedge# load mmc 1 $kernel_addr_r u-boot-spi.bin
```
* Load U-Boot from Thumbdrive (U-Disk):

```sh
kedge# usb start
kedge# load usb 0 $kernel_addr_r u-boot-spi.bin
```

### Burning

```sh
kedge# sf probe
kedge# sf erase 0 +$filesize
kedge# sf write $kernel_addr_r 0 $filesize
kedge# reset
```
{% note info Tip %}
This will take about 3 minutes, please be patient.
{% endnote %}

After reboot, you will boot from the SPI-Flash.

## See Also
[RK3399 Boot Options](http://opensource.rock-chips.com/wiki_Boot_option)
