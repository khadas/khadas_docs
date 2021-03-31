title: U-Boot Usage Guide
---

## Burning boot.img Using A Thumbdrive (U-Disk)
Copy the `boot.img` into a thumbdrive, then plug it into your target device:
```
kvim# usb_update boot boot.img
```

## Burning boot.img Using An SD-Card
Copy the `boot.img` to an SD-card, then plug into your target device:
```
kvim# sdc_update boot boot.img
```

##  Erase Partition
```
kvim# store erase partition boot
kvim# amlmmc erase rootfs
```

## Help
You can get help for U-Boot commands by using the U-Boot `help` command.

Typing help followed by a command name gives help regarding that particular command:
```
kvim# help store
store - STORE sub-system

Usage:
store store init flag
store read name addr off|partition size
    read 'size' bytes starting at offset 'off'
    to/from memory address 'addr', skipping bad blocks.
store write name addr off|partition size
    write 'size' bytes starting at offset 'off'
    to/from memory address 'addr', skipping bad blocks.
store rom_write add off size.
	write uboot to the boot device
store erase boot/data: 
	erase the area which is uboot or data 
store erase partition <partition_name>: 
	erase the area which partition in u-boot 
store erase dtb 
store erase key 
store disprotect key 
store rom_protect on/off 
store scrub off|partition size
	scrub the area from offset and size 
store dtb iread/read/write addr <size>
	read/write dtb, size is optional 
store key read/write addr <size>
	read/write key, size is optional 

kvim#
```

Typing help at the U-Boot command prompt gives a list of supported commands:
```
kvim# help
?       - alias for 'help'
aml_sysrecovery- Burning with amlogic format package from partition sysrecovery
amlmmc  - AMLMMC sub system
amlnf   - aml nand sub-system
amlnf_test- AMLPHYNAND sub-system
autoscr - run script from memory
base    - print or set address offset
bmp     - manipulate BMP image data
booti   - boot arm64 Linux Image image from memory
bootm   - boot application image from memory
bootp   - boot image via network using BOOTP/TFTP protocol
cbusreg - cbus register read/write
clkmsr  - measure PLL clock
cmp     - memory compare
cp      - memory copy
crc32   - checksum calculation
dcache  - enable or disable data cache
defenv_reserv- reserve some specified envs after defaulting env
dhcp    - boot image via network using DHCP/TFTP protocol
echo    - echo args to console
efuse   - efuse read/write data commands
efuse_user- efuse user space read write ops
emmc    - EMMC sub system
env     - environment handling commands
exit    - exit script
ext2load- load binary file from a Ext2 filesystem
ext2ls  - list files in a directory (default /)
ext4load- load binary file from a Ext4 filesystem
ext4ls  - list files in a directory (default /)
ext4size- determine a file's size
false   - do nothing, unsuccessfully
fatinfo - print information about filesystem
fatload - load binary file from a dos filesystem
fatls   - list files in a directory (default /)
fatsize - determine a file's size
fdt     - flattened device tree utility commands
get_rebootmode- get reboot mode
go      - start application at address 'addr'
gpio    - query and control gpio pins
hdmitx  - HDMITX sub-system
help    - print command description/usage
i2c     - I2C sub-system
icache  - enable or disable instruction cache
imgread - Read the image from internal flash with actual size
itest   - return true/false on integer compare
jtagoff - disable jtag
jtagon  - enable jtag
keyman  - Unify key ops interfaces based dts cfg
keyunify- key unify sub-system
loop    - infinite loop on address range
macreg  - ethernet mac register read/write/dump
md      - memory display
mm      - memory modify (auto-incrementing address)
mmc     - MMC sub system
mmcinfo - display MMC info
mw      - memory write (fill)
mwm     - mw mask function
nm      - memory modify (constant address)
open_scp_log- print SCP messgage
osd     - osd sub-system
phyreg  - ethernet phy register read/write/dump
ping    - send ICMP ECHO_REQUEST to network host
printenv- print environment variables
rarpboot- boot image via network using RARP/TFTP protocol
read_temp- cpu temp-system
reboot  - set reboot mode and reboot system
reset   - Perform RESET of the CPU
rsvmem  - reserve memory
run     - run commands in an environment variable
saveenv - save environment variables to persistent storage
sdc_burn- Burning with amlogic format package in sdmmc 
sdc_update- Burning a partition with image file in sdmmc card
set_trim_base- cpu temp-system
set_usb_boot- set usb boot mode
setenv  - set environment variables
showvar - print local hushshell variables
silent  - silent
sleep   - delay execution for some time
store   - STORE sub-system
systemoff- system off 
temp_triming- cpu temp-system
test    - minimal test like /bin/sh
tftpboot- boot image via network using TFTP protocol
true    - do nothing, successfully
unpackimg- un pack logo image into pictures
update  - Enter v2 usbburning mode
usb     - USB sub-system
usb_burn- Burning with amlogic format package in usb 
usb_update- Burning a partition with image file in usb host
usbboot - boot from USB device
version - print monitor, compiler and linker version
vout    - VOUT sub-system
vpu     - vpu sub-system
write_trim- cpu temp-system
write_version- cpu temp-system
kvim#
```


## Resources:
* [U-Boot Offical Guide](http://www.denx.de/wiki/view/DULG/UBoot)
