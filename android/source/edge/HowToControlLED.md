title: How To Control LEDs
---

## Switch to root user

Only the root user has the authority to control and modify the node status of the LEDs

```shell
khadas@Khadas:~$ su
Password:
root@Khadas:/home/khadas#
```

## Confirm led node

```shell
root@Khadas:/home/khadas# cd /sys/class/leds/
root@Khadas:/sys/class/leds# ls
mmc1::  read_led  sys_led
```

## How To Use

Here takes `sys_led` as an example:

```shell
root@Khadas:/sys/class/leds# cd sys_led
root@Khadas:/sys/class/leds/sys_led# ls
brightness  device  invert  max_brightness  power  subsystem  trigger  uevent
```

View all configurable parameters.

```shell
root@Khadas:/sys/class/leds/sys_led# cat trigger
none rc-feedback kbd-scrolllock kbd-numlock kbd-capslock kbd-kanalock kbd-shiftlock kbd-altgrlock kbd-ctrllock kbd-altlock kbd-shiftllock kbd-shiftrlock kbd-ctrlllock kbd-ctrlrlock mmc0 mmc1 timer oneshot [heartbeat] backlight gpio cpu0 cpu1 cpu2 cpu3 cpu4 cpu5 default-on transient flash torch rfkill0 mmc2 rfkill1 rfkill2 
```

### Turn off

Enter `none` parameter to turn off the LED

```shell
root@Khadas:/sys/class/leds/sys_led# echo none > trigger
```
### Turn on

Enter `default-on` parameter to turn off the LED

```shell
root@Khadas:/sys/class/leds/sys_led# echo default-on >trigger
```

Set `heartbeat` can make the LED flash

```shell
root@Khadas:/sys/class/leds/sys_led# echo heartbeat > trigger
```

You can also try other parameters.
