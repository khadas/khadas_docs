title: Build Fuchsia
---
As some of you may know that Google's new operating system [Fuchsia](https://en.wikipedia.org/wiki/Google_Fuchsia) has added support for Khadas VIM2, but still under developing. Now I will give some instructions about how to build Fuchsia and get it running on VIM2. Let's go!

## Prepare your build environment (Once per build environment)
Install some essential packages:
```
$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get install texinfo libglib2.0-dev liblz4-tool autoconf libtool libsdl-dev build-essential golang git curl unzip
```
## Build U-boot for Fuchsia
In order to boot Fuchsia, a special u-boot is needed.
```
$ mkdir ~/project
$ cd ~/project
$ git clone https://github.com/mikevoydanoff/u-boot -b vim
$ cd u-boot
$ make kvim2_defconfig
$ make -j8 CROSS_COMPILE=aarch64-linux-gnu-
```
After build you wii find `fip/u-boot.bin`.

## Get Fuchsia source code
```
$ cd ~/project
$ curl -s "https://fuchsia.googlesource.com/scripts/+/master/bootstrap?format=TEXT" | base64 --decode | bash -s garnet
```
This will download all the source code of Fuchsia under `~/project/fuchsia`.

## Build Fuchsia
```
$ cd ~/project/fuchsia
$ source scripts/fx-env.sh
$ fx set arm64
$ fx full-build
```
If successfully will start to build Fuchsia, this will take some time.

## Boot Fuchsia

### Update u-boot to Fuchsia version
Copy the u-boot for Fuchsia you build above to TF card or U-disk, and insert it to VIM2, power on VIM2 and boot into u-boot command line. And execute the following commands to update u-boot.

* If your u-boot stored in U-disk
```
kvim2#usb start
kvim2#fatload usb 0 1080000 u-boot.bin
```
* If your u-boot stored in TF card
```
kvim2#mmc info
kvim2#fatload mmc 0 1080000 u-boot.bin
```
Update u-boot
```
kvim2#store rom_write 1080000 0 1000000
kvim2#reset
```
You will boot the u-boot for Fuchsia. 

### Flash Fuchsia
Enter u-boot command line again and enter `fastboot` mode to flash Fuchsia.

```
kvim2#fastboot 
```
Switch to your build host and enter your fuchsia folder. And make sure thst your VIM2  and host PC are in  the same local area network.
```
$ cd ~/project/fuchsia
$ sudo ./scripts/fx flash vim2 --pave
```
After this you will boot into Fuchsia, and you can connect VIM2 to the HDMI screen you will find the shell.

## In the end
If you don't want to build the Fuchsia from scratch you can use the ready to use [u-boot](http://www.mediafire.com/file/ilpx433krhzit6j/u-boot.bin) and [zircon kernel](http://www.mediafire.com/file/d63ffa2fdyg6uts/vim2-boot.img) I build.

* Update u-boot
Please follow the instructions in `Build U-boot for Fuchsia` about how to burn u-boot.

* Flash Zircon
  * Enter `fastboot` mode by holding down `POWER KEY`, pressing `RESET KEY` quickly and keeping pressing `POWER KEY` for a few seconds.
  * Burn
    `sudo fastboot flash boot vim2-boot.img`

Reboot the board you will enter `zedboot`.

## See also
[Google Fuchsia Docs](https://fuchsia.googlesource.com/docs/+/master/getting_started.md#Prerequisites)
[Zircon on Khadas VIM2 Board](https://github.com/fuchsia-mirror/zircon/blob/master/docs/targets/khadas-vim.md)
