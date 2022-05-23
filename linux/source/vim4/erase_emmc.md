title: Erase eMMC
---

There are 3 ways to erase the eMMC:
* Serial Mode (Developers)
* Interrupt Mode
* CLI Mode

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="serial-tab" data-toggle="tab" href="#serial" role="tab" aria-controls="serial" aria-selected="true">Serial Mode (For developers)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="interupt-tab" data-toggle="tab" href="#interupt" role="tab" aria-controls="interupt" aria-selected="false">Interupt Mode</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="cli-tab" data-toggle="tab" href="#cli" role="tab" aria-controls="cli" aria-selected="false">CLI Mode</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="serial" role="tabpanel" aria-labelledby="serial-tab">

1. Connect your PC to your SBC using a [Serial to USB tool](setup_serial_tool.html).
2. Just as your SBC is booting-up, hit `SPACE` on your keyboard to enter U-Boot mode.
3. Type `store boot_erase bootloader` into the U-Boot console, and wait for the erasure process to complete.
4. After erasure is complete, type `reboot` or press the `RESET` button on your SBC.

Use the following serial Terminal print-out as a reference:

```
kvim4# store boot_erase bootloader
GUID Partition Table Header signature is wrong: 0x0 != 0x5452415020494645
GUID Partition Table Header signature is wrong: 0x0 != 0x5452415020494645
gpt is invalid


Caution! Your devices Erase group is 0x400
The erase range would be change to 0x0~0x23ff

8191 blocks erased: OK


Caution! Your devices Erase group is 0x400
The erase range would be change to 0x0~0x23ff

8191 blocks erased: OK


Caution! Your devices Erase group is 0x400
The erase range would be change to 0x0~0x23ff

8191 blocks erased: OK
kvim4# reboot
```
{% note info Tips %}

If the eMMC has been erased, the serial Terminal should show this print-out when your SBC powers-on:

```
T7:BL:055c20;ID:7CFDCF5E6052BDEC;FEAT:30F:1FFF0000:B002F:1;POC:CF;RCY:0;OVD:0;DFU:0;SD:2002;eMMC:0;RD-0:0;CHK:1;RD-1:0;CHK:1;RD-2:0;CHK:1;SPINOR:0;RD-0:0;CHK:1;RD-1:0;CHK:1;USB:ADFU�T7:BL:055c20;ID:7CFDCF5E6052BDEC;FEAT:30F:1FFF0000:B002F:1;POC:CF;RCY:0;OVD:0;DFU:1;USB:0;RD-00:0;
```
{% endnote %}

</div>

<div class="tab-pane fade show" id="interupt" role="tabpanel" aria-labelledby="interupt-tab">

This erasure method is suitable for all products that use the Amlogic SoC:

1. Carry out eMMC flashing via a [USB-C cable](install_os_into_emmc.html) or [SD card](install_os_into_sdusb.html).
2. Manually interrupt the upgrading process (forcefully disconnect after 15% is recommended). For example, unplug the USB-C cable or eject the SD card.
3. Power on your SBC again, and you'll find that all the data on the eMMC has been erased.

</div>
<div class="tab-pane fade show" id="cli" role="tabpanel" aria-labelledby="cli-tab">

This erasure method is suitable for an SBC with Linux installed:

1. Power on and boot up.
2. Open a Terminal, and run `dd` to fill your bootloader partition with zeros:

```
root@Khadas:~# dd if=/dev/zero of=/dev/bootloader
dd: writing to '/dev/bootloader': No space left on device
8193+0 records in
8192+0 records out
4194304 bytes (4.2 MB, 4.0 MiB) copied, 1.1226 s, 3.7 MB/s
root@Khadas:~# reboot
```

</div>
</div>
