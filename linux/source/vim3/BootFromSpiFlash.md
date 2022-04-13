title: Boot From SPI-Flash
---

Khadas VIM3/VIM3L and VIM4 contains a 16 MB and 32 MB SPI-Flash that's used as boot storage; so you can boot from it. This guide is about how to boot from the on-board SPI-Flash. Take VIM4 as a example.

{% note warn Warn %}
note warn The U-Boot firmware that VIM3/VIM3L can use to burn to SPI is named `u-boot.bin`, VIM4 is `u-boot.bin.spi.bin.signed`.
{% endnote %}


## Build U-Boot for SPI-Flash
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

## Burn U-Boot to SPI-Flash

Copy `u-boot.bin.signed` to an SD-Card or Thumbdrive (U-Disk) and insert it into your board or load it via TFTP.

[Setup serial debugging tool](SetupSerialTool.html) and boot to the U-Boot Command Line.

### Load U-Boot to DDR

* Load U-Boot from SD-Card:

```
kvim4# load mmc 0 1080000 u-boot.bin.spi.bin.signed
```
* Load U-Boot from Thumbdrive (U-Disk):

```
kvim4# usb start
kvim4# load usb 0 1080000 u-boot.bin.spi.bin.signed
```

* Load U-Boot via TFTP

Please refer [here](SetupTFTPServer.html) about how to setup the TFTP.

```
kvim4# tftp 1080000 u-boot.bin.spi.bin.signed
```

### Burning

```
kvim4# sf probe
kvim4# sf erase 0 +$filesize
kvim4# sf erase 0 +$filesize
SF: 3919872 bytes @ 0x0 Erased: OK
kvim4# sf update 0x1080000 0 0x3bd000
device 0 offset 0x0, size 0x3bd000
3919872 bytes written, 0 bytes skipped in 48.939s, speed 82019 B/s
```

## Setup Bootmode to SPI

If you want to boot from SPI-Flash, you have to setup the bootmode to SPI. The default bootmode is boot from eMMC.

* Check current bootmode:

```
kvim4# kbi bootmode r
bootmode: emmc
```
Current bootmode is boot from eMMC.

* Setup bootmode to SPI:

```
kvim4# kbi bootmode w spi
```

Poweroff the system to make it available:

```
kvim4# kbi poweroff
```

Press the `POWER` key to bootup, you will boot from the SPI-Flash.

## Erase the SPI-Flash to Prevent Boot from It

```
kvim4# sf probe
kvim4# sf erase 0 1000
kvim4# reset
```

## Troubleshooting
Bootmode is boot from SPI, but the u-boot in SPI flash is corrupted, can't enter u-boot command line.
	1. If u-boot in eMMC is correct, you can try [TST mode](BootIntoUpgradeMode.html#TST-Mode-Recommended) or try [SPI MASKROM]() to boot from eMMC, then enter u-boot command line, erase the SPI flash or burn the new u-boot to SPI flash.
    {% note info Note %}
		Don't use your PC to supply the power, or you will enter usb burning mode!
    {% endnote %}
	2. U-Boot in eMMC is also corrupted, you have to try [TST mode](BootIntoUpgradeMode.html#TST-Mode-Recommended) to enter usb burning mode, and flash the image to emmc, then follow `step 1)`.
	{% note info Note %}
        You need to connect the board to your host PC!
    {% endnote %}
