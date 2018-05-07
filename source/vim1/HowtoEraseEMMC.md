title: Howto Erase the eMMC Storage
---

There are many different ways to wipe out all the data on the onboard eMMC storage, and list as following:
* Keys Mode
* Serial Mode
* Breaking Mode
* CLI Mode

### Keys Mode(U-Boot is running)
All the ROM we released support eMMC erasing, please follow the steps below to erase the data on eMMC:

1. Power on VIMs.
2. Long press `Power` and `Function` buttons simultaneously without release
3. Short press ‘Reset’ key and release
4. After the operations above, the system will begin to earse automately, and it will take around 10 seconds to done that.
5. The display/monitor will display as a black screen when the wiping process is done.


### Serial Mode(For developers)
1. Refer this [guidance](/vim1/SetupSerialTool.html) to setup serial tool for VIMs.
2. Make sure again you've done the right connections and setup.
3. Hit any keys at the moment of booting to stop autoboot. This step will let VIMs boot into u-boot mode.
4. Type `store init 3` on the terminal of u-boot, and wait the wiping process to complete.
5. Type `reboot` or press the `Reset` button
6. References as following:
```
Vim# store init 3
emmc/sd response timeout, cmd8, status=0x1ff2800
emmc/sd response timeout, cmd55, status=0x1ff2800
[mmc_startup] mmc refix success
[mmc_init] mmc init success
switch to partitions #0, OK
mmc1(part 0) is current device
Device: SDIO Port C
Manufacturer ID: 15
OEM: 100
Name: 8WPD3 
Tran Speed: 52000000
Rd Block Len: 512
MMC version 5.0
High Capacity: Yes
Capacity: 7.3 GiB
mmc clock: 40000000
Bus Width: 8-bit DDR
[store]amlmmc erase 1emmckey_is_protected : protect
start = 0,end = 57343


Caution! Your devices Erase group is 0x400
The erase range would be change to 0x36000~0xe8ffff

start = 221184,end = 15269886
Vim# reboot
```
**Tips:**
If the erase process complete, the printing should be like when you power on your device:
```
GXL:BL1:9ac50e:a1974b;FEAT:ADFC318C;POC:3;RCY:0;EMMC:0;READ:0;CHK:AA;SD:800;USB:8;
```


### Breaking Mode
This approach suits for all Amlogic SoCs based products:

1. Do normal upgrading via [USB-C cable mode](/vim1/UpgradeViaUSBCable.html) or [TF card burning card mode](/vim1/UpgradeViaTFBurningCard.html).
2. Break out during the upgrade process(break after 15% process is recommended), for example, plug-out the USB-C cable or the TF card.
3. Power on VIMs again, and you'll find all the data on eMMC have been wiped out.


### CLI Mode
This approach suits for a Linux Distro preinstalled device:

1. Power on and boot up.
2. Open a terminal, run `dd` to fulfilled bootloader partition with zero:
```
root@Khadas:~# dd if=/dev/zero of=/dev/bootloader
dd: writing to '/dev/bootloader': No space left on device
8193+0 records in
8192+0 records out
4194304 bytes (4.2 MB, 4.0 MiB) copied, 1.1226 s, 3.7 MB/s
root@Khadas:~# reboot
```
