title: How To Set a custom `IR CODE` To Boot The System
---

# Get the `IR CODE` of the remote control button

## Turn on the kernel debugging switch

* Switch to `root` user

```shell
khadas@Khadas:~$ su
Password:
root@Khadas:/home/khadas#
```

* Set the kernel print information level

```shell
root@Khadas:/home/khadas# echo 7 7 1 7 > /proc/sys/kernel/printk
```

* Turn on debugging information printing switch

```shell
root@Khadas:/home/khadas# echo 1 > /sys/class/remote/amremote/debug_enable
```

## Print the `IR CODE` of the remote control buttons

Here is an example of the `Khadas` remote control, press the `OK` button of the remote control, you can see the button information is printed out to terminal

```shell
[  723.513680@1] meson-remote c8100580.rc: framecode=0xf807ff00
[  723.513820@1] meson-remote c8100580.rc: receive scancode=0x7
[  723.519407@1] meson-remote c8100580.rc: keypressed=0x0
[  723.524531@1] meson-remote c8100580.rc: report key!!
[  723.604587@1] meson-remote c8100580.rc: ir controller busy flag = 0
[  723.605357@1] meson-remote c8100580.rc: keyup!!
```

Among them, `framecode=0xf807ff00` is the key value we need

# Custom setting `IR CODE`

The setting of `IR CODE` is set in uboot, there are two custom buttons that can be used,

## Write`IR CODE`

* Custom customer1

```shell
kvim#kbi ircode customer1 w 0xf807ff00
```

* Custom customer2

```shell
kvim#kbi ircode customer2 w 0xf807ff00
```

## Read `IR CODE`

* read customer1

```shell
kvim#kbi ircode customer1 r
ircode1: 0xf807ff00
```

* read customer2

```shell
kvim#kbi ircode customer2 r
ircode2: 0xf807ff00
```


# Verify that the setup is successful


* Powerdown system

1. uboot:

```shell
kvim#kbi poweroff
do_kbi_poweroff
```

2. ubuntu:

```shell
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

3. Long press the `power` button to shut down.


* Power on with remote control

If the setting is successful, press the set button to start the board.

