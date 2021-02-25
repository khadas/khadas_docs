title: How to Erase the eMMC Storage
---

There are 4 different ways to erase all data on the onboard eMMC storage:
1. Serial Mode
2. Interrupt Mode
3. CLI Mode

**Note: The operation of VIM1, VIM2 and VIM3 is almost the same, so this document will take VIM1 as an example.**

### Serial Mode(For developers)
1. Refer to this guide ([VIM1](/vim1/SetupSerialTool.html)/[VIM2](/vim2/SetupSerialTool.html)/[VIM3](/vim3/SetupSerialTool.html)) to setup the Serial Tool for your VIM.
2. Once again, ensure you've done the correct connections and setup.
3. Hit any keys at the moment of bootup to stop autoboot. This step will make your VIM enter into u-boot mode.
4. Type `store init 3` on the terminal of u-boot, and wait for the erasure process to complete.
5. Type `reboot` or press the `Reset` button
6. Use the following as a reference:
```
kvim# store init 3
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
**Tip:**
If the erasure process completed successfully, the terminal should look like this when you power on your device:
```
GXL:BL1:9ac50e:a1974b;FEAT:ADFC318C;POC:3;RCY:0;EMMC:0;READ:0;CHK:AA;SD:800;USB:8;
```

### Interrupt Mode
This approach is suitable for all products that use the Amlogic SoC:

1. Carry out normal upgrading via USB-C Cable([VIM1](/vim1/UpgradeViaUSBCable.html)/[VIM2](/vim2/UpgradeViaUSBCable.html)/[VIM3](/vim3/UpgradeViaUSBCable.html)) or TF Card([VIM1](/vim1/UpgradeViaTFBurningCard.html)/[VIM2](/vim2/UpgradeViaTFBurningCard.html)/[VIM3](/vim3/UpgradeViaTFBurningCard.html)).
2. Manually interrupt the upgrading process (forcefully disconnect after 15% is recommended). For example, unplug the USB-C cable or the TF card.
3. Power on your VIM again, and you'll find that all the data on the eMMC has been erased.


### CLI Mode
This approach is suitable for a VIM that has Linux installed:

1. Power on and boot up.
2. Open a terminal, and run `dd` to fill your bootloader partition with zeros:
```
root@Khadas:~# dd if=/dev/zero of=/dev/bootloader
dd: writing to '/dev/bootloader': No space left on device
8193+0 records in
8192+0 records out
4194304 bytes (4.2 MB, 4.0 MiB) copied, 1.1226 s, 3.7 MB/s
root@Khadas:~# reboot
```
