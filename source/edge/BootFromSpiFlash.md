title: Boot From SPI Flash
---

Khadas Edge contains a 16 MiB SPI flash on board used as boot storage, so you can image from it. This tutorial is about how to boot from the on board SPI falsh.

### Build U-boot for SPI Flash
The u-boot for SPI flash is different from eMMC/SD one. It's recommend you to use [Fenix script](https://github.com/khadas/fenix) to build u-boot, it's easy to build.

**Assume that you have setup basic build environment, if not please refer to [Fenix Usage](/edge/FenixScript.html).**

* Setup environment:

```
$ cd fenix
$ source env/setenv.sh
```
Select `Edge` board.

* Build U-boot

```
$ make uboot
```
If successfully, you will get u-boot for SPI flash `u-boot-spi.bin` under folder `fenix/u-boot`.

### Burn U-boot to SPI Flash
Copy `u-boot-spi.bin` to TF card or u-disk and insert to Edge.

[Setup serial debugging tool](/edge/SetupSerialTool.html) and boot to u-boot command line.

#### Load U-boot to DDR

* Load u-boot from TF card:

```
kedge# load mmc 0 $kernel_addr_r u-boot-spi.bin
```
* Load u-boot from u-disk:

```
kedge# usb start
kedge# load usb 0 $kernel_addr_r u-boot-spi.bin
```

#### Burning

```
kedge# sf probe
kedge# sf erase 0 +$filesize
kedge# sf write $kernel_addr_r 0 $filesize
kedge# reset
```
*Note: This will take about 3 minutes, please keep patient.*

After reboot, you will boot from SPI flash.

### See also
[RK3399 boot options](http://opensource.rock-chips.com/wiki_Boot_option)
