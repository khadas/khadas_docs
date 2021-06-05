title: How To Set a custom IR CODE To Boot The System
---

## Get the IR CODE

* Enable IR Driver Debug Information

```bash
root@Khadas:/home/khadas# echo 1 > /sys/class/remote/amremote/debug_enable
```

Press the button on the remote controller and check the kerenl log to get the remote controller IR code.

Here is an example of the `Khadas` remote controller, press the `OK` button of the remote controller, you can check the kernel log:

```bash
# dmesg | grep "meson-remote"
[  723.513680@1] meson-remote c8100580.rc: framecode=0xf807ff00
[  723.513820@1] meson-remote c8100580.rc: receive scancode=0x7
[  723.519407@1] meson-remote c8100580.rc: keypressed=0x0
[  723.524531@1] meson-remote c8100580.rc: report key!!
[  723.604587@1] meson-remote c8100580.rc: ir controller busy flag = 0
[  723.605357@1] meson-remote c8100580.rc: keyup!!
```

You can find `framecode=0xf807ff00` is the key value we need.

## Set Custom IR CODE

You can set the `IR CODE` in uboot command line, there are two custom buttons that can be used.

### Write IR CODE

* Custom customer1

```bash
kvim#kbi ircode customer1 w 0xf807ff00
```

* Custom customer2

```bash
kvim#kbi ircode customer2 w 0xf807ff00
```

### Read IR CODE

* Read customer1

```bash
kvim#kbi ircode customer1 r
ircode1: 0xf807ff00
```

* Read customer2

```bash
kvim#kbi ircode customer2 r
ircode2: 0xf807ff00
```

## Verify

* Power off the system

* In u-boot

```bash
kvim#kbi poweroff
do_kbi_poweroff
```

* In Ubuntu

```bash
khadas@Khadas:~$ sudo poweroff
[sudo] password for khadas:
[  127.078301@0] reboot: Power down
bl31 reboot reason: 0x108
bl31 reboot reason: 0x108
system cmd  0.
bl30 get wakeup sources!
process command 00000006
bl30 enter suspend!
cpu clk suspend rate 1416000000
suspend_counter: 1
Enter ddr suspend
dmc sec unlock
first time suspend
ddr suspend time: 3353us
store restore gp0 pll
process command 00000001
CEC cfg:0x002f
set vddee to 0x035cmv
08915d0000000000cec reset
```

* Long press the `power` button to power off

* Power on with remote control

If everything work well, you can use `OK` button to wakeup the board.

