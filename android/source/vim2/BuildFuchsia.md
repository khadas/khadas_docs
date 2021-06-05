title: Build Fuchsia
---
Google's new operating system [Fuchsia](https://en.wikipedia.org/wiki/Google_Fuchsia) has added support for our Khadas VIM2. However, its still under development. In this guide, I will give instructions on how to build Fuchsia and get it running on your VIM2. Let's go!

## Prepare your Build Environment (needs to be done once per build environment)
Install Essential Packages:
```
$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get install texinfo libglib2.0-dev liblz4-tool autoconf libtool libsdl-dev build-essential golang git curl unzip
```
## Build U-boot for Fuchsia
In order to boot Fuchsia, a special U-Boot is needed.
```
$ mkdir ~/project
$ cd ~/project
$ git clone https://github.com/mikevoydanoff/u-boot -b vim
$ cd u-boot
$ make kvim2_defconfig
$ make -j8 CROSS_COMPILE=aarch64-linux-gnu-
```
After building, you will see a `fip/u-boot.bin`.

## Get Fuchsia Source Code
```
$ cd ~/project
$ curl -s "https://fuchsia.googlesource.com/scripts/+/master/bootstrap?format=TEXT" | base64 --decode | bash -s garnet
```
This will download all the source code of Fuchsia into the directory `~/project/fuchsia`.

## Build Fuchsia
```
$ cd ~/project/fuchsia
$ source scripts/fx-env.sh
$ fx set arm64
$ fx full-build
```
If you did the above steps correctly, Fuchsia will now begin to build. This will take some time, be patient.

## Boot Fuchsia

### Update your U-Boot to the Fuchsia Version
Copy the U-Boot for Fuchsia that you've built above, to a TF card or Thumbdrive (U-Disk) and insert it into your VIM2. Power on your VIM2 and boot into U-Boot's command line. Then execute the following commands to update VIM2's U-Boot.

* If your U-Boot is stored on a Thumbdrive (U-Disk)
```
kvim2#usb start
kvim2#fatload usb 0 1080000 u-boot.bin
```
* If your U-Boot stored on a TF-Card
```
kvim2#mmc info
kvim2#fatload mmc 0 1080000 u-boot.bin
```
Update U-Boot
```
kvim2#store rom_write 1080000 0 1000000
kvim2#reset
```
You will now boot the U-Boot for Fuchsia. 

### Flash Fuchsia
Enter the U-Boot command-line again and enter the `fastboot` mode to flash Fuchsia.

```
kvim2#fastboot 
```
Switch to your Build Host and enter your Fuchsia folder. Make sure that your VIM2 and host PC are on the same local area network (LAN).
```
$ cd ~/project/fuchsia
$ sudo ./scripts/fx flash vim2 --pave
```
After this you will boot into Fuchsia. Connect your VIM2 to a HDMI screen to see the shell.

## Conclusions
If you don't want to build Fuchsia from scratch, you can use this ready-to-use [U-Boot](http://www.mediafire.com/file/ilpx433krhzit6j/u-boot.bin) and [Zircon Kernel](http://www.mediafire.com/file/d63ffa2fdyg6uts/vim2-boot.img), which I built myself.

* Update U-Boot
Please follow the instructions in `Build U-boot for Fuchsia`, to burn the U-Boot.

* Flash Zircon
  * Enter `fastboot` mode by (1) holding-down the `POWER KEY`, (2) then tap the `RESET KEY` quickly WITHOUT releasing the `POWER KEY`, and (3) keep holding-down the `POWER KEY` for a few more seconds (10-seconds to be safe).
  * Burn
    `sudo fastboot flash boot vim2-boot.img`

Reboot your VIM2 to enter `zedboot`.

## See Also
[Google Fuchsia Docs](https://fuchsia.googlesource.com/docs/+/master/getting_started.md#Prerequisites)
[Zircon on Khadas VIM2 Board](https://github.com/fuchsia-mirror/zircon/blob/master/docs/targets/khadas-vim.md)
