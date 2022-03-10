title: Boot From SPI Flash
---

Khadas VIM4 contains a 32 MB SPI-Flash that's used as boot storage; so you can boot from it. This guide is about how to boot from the on-board SPI-Flash.

## Build U-boot For SPI-Flash
The U-Boot for SPI-Flash is the same as eMMC U-Boot. We recommend using [Fenix Script](https://github.com/khadas/fenix) to build U-Boot, as it's easy this way.

**This guide assumes that you have already setup a basic build environment. If not, please refer to [Fenix Usage](FenixScript.html).**

* Setup Environment:

```sh
$ cd fenix
$ source env/setenv.sh
```

Select `VIM4`

* Build U-Boot

```
$ make uboot
```

If successful, you will get a U-Boot for the SPI-Flash `u-boot.bin.spi.bin.signed`, in the directory `fenix/build/u-boot/./fip/_tmp/`.

## Burn U-boot To SPI Flash

Copy `u-boot.bin.signed` to an SD-Card or Thumbdrive (U-Disk) and insert it into your board or load it via TFTP.

[Setup serial debugging tool](SetupSerialTool.html) and boot to the U-Boot Command Line.

### Load U-Boot to DDR

* Load U-Boot from SD-Card:

```sh
kvim4#load mmc 0 1080000 u-boot.bin.spi.bin.signed
```
* Load U-Boot from Thumbdrive (U-Disk):

```sh
kvim4#usb start
kvim4#load usb 0 1080000 u-boot.bin.spi.bin.signed
```

* Load U-boot via TFTP

Please refer [here](SetupTFTPServer.html) about how to setup the TFTP.

```sh
kvim4#tftp 1080000 u-boot.bin.spi.bin.signed
```

### Burning

```sh
kvim4#sf probe
kvim4#sf erase 0 +$filesize
kvim4#sf write 1080000 0 $filesize
```
*Tip: This will take a few seconds, please be patient.*

## Setup bootmode to SPI

If you want to boot from SPI Flash, you have to setup the bootmode to SPI. The default bootmode is boot from eMMC.

* Check current bootmode:

```sh
kvim4#kbi bootmode r
bootmode: emmc
```
Current bootmode is boot from eMMC.

* Setup bootmode to SPI:

```sh
kvim4#kbi bootmode w spi
```

Poweroff the system to make it available:

```sh
kvim4#kbi poweroff
```

Press the `POWER` key to bootup, you will boot from the SPI-Flash.

## Erase the SPI Flash to prevent boot from it

```sh
kvim4#sf probe
kvim4#sf erase 0 1000
kvim4#reset
```

## Troubleshooting
1. Bootmode is boot from SPI, but the u-boot in SPI flash is corrupted, can't enter u-boot command line.
	1) If u-boot in eMMC is correct, you can try [TST mode](BootIntoUpgradeMode.html#TST-Mode-Recommended) or try [SPI MASKROM]() to boot from eMMC, then enter u-boot command line, erase the SPI flash or burn the new u-boot to SPI flash.
    {% note info Note %}
		Don't use your PC to supply the power, or you will enter usb burning mode!
    {% endnote %}

	2) U-boot in eMMC is also corrupted, you have to try [TST mode](BootIntoUpgradeMode.html#TST-Mode-Recommended) to enter usb burning mode, and flash the image to emmc, then follow `step 1)`.
	{% note info Note %}
        You need to connect the board to your host PC!
    {% endnote %}
