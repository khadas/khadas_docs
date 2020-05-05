title: Boot From SPI Flash
---

Khadas VIM3/VIM3L contains a 16 MB SPI-Flash that's used as boot storage; so you can boot from it. This guide is about how to boot from the on-board SPI-Flash.

### Build U-boot For SPI-Flash
The U-Boot for SPI-Flash is the same as eMMC U-Boot. We recommend using [Fenix Script](https://github.com/khadas/fenix) to build U-Boot, as it's easy this way.

**This guide assumes that you have already setup a basic build environment. If not, please refer to [Fenix Usage](/vim3/FenixScript.html).**

* Setup Environment:

```
$ cd fenix
$ source env/setenv.sh
```
Select `VIM3` or `VIM3L` board(This is according to your board).

* Build U-boot

```
$ make uboot
```
If successful, you will get a U-Boot for the SPI-Flash `u-boot.bin`, in the directory `fenix/u-boot/build`.

### Burn U-boot To SPI Flash
Copy `u-boot.bin` to an SD-Card or Thumbdrive (U-Disk) and insert it into your board or load it via TFTP.

[Setup serial debugging tool](/vim3/SetupSerialTool.html) and boot to the U-Boot Command Line.

#### Load U-boot to DDR

* Load U-Boot from SD-Card:

```
kvim3#load mmc 0 1080000 u-boot.bin
```
* Load U-Boot from Thumbdrive (U-Disk):

```
kvim3#usb start
kvim3#load usb 0 1080000 u-boot.bin
```

* Load U-boot via TFTP

Please refer [here](/vim3/SetupTFTPServer.html) about how to setup the TFTP.

```
kvim3#tftp 1080000 u-boot.bin
```

#### Burning

```
kvim3#sf probe
kvim3#sf erase 0 +$filesize
kvim3#sf write 1080000 0 $filesize
```
*Tip: This will take a few seconds, please be patient.*

### Setup bootmode to SPI
If you want to boot from SPI Flash, you have to setup the bootmode to SPI. The default bootmode is boot from eMMC.

* Check current bootmode:

```
kvim3#kbi bootmode r
bootmode: emmc
```
Current bootmode is boot from eMMC.

* Setup bootmode to SPI:

```
kvim3#kbi bootmode w spi
```

Poweroff the system to make it available:
```
kvim3#kbi poweroff
```

Press the `POWER` key to bootup, you will boot from the SPI-Flash.

### Erase the SPI Flash to prevent boot from it
```
kvim3#sf probe
kvim3#sf erase 0 1000
kvim3#reset
```

### Troubleshooting
1. Bootmode is boot from SPI, but the u-boot in SPI flash is corrupted, can't enter u-boot command line.
	1) If u-boot in eMMC is correct, you can try [TST mode](/vim3/HowtoBootIntoUpgradeMode.html#TST-Mode-Recommended) or try [SPI MASKROM]() to boot from eMMC, then enter u-boot command line, erase the SPI flash or burn the new u-boot to SPI flash.
	**Note: Don't use your PC to supply the power, or you will enter usb burning mode!**

	2) U-boot in eMMC is also corrupted, you have to try [TST mode](/vim3/HowtoBootIntoUpgradeMode.html#TST-Mode-Recommended) to enter usb burning mode, and flash the image to emmc, then follow `step 1)`.
	**Note: You need to connect the board to your host PC!**
