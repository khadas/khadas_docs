title: 如何控制LED
---

# 切换root用户

只有root用户有权限控制修改LED灯的节点状态

```shell
khadas@Khadas:~$ su
Password:
root@Khadas:/home/khadas#
```

# 确认led节点

```shell
root@Khadas:/home/khadas# cd /sys/class/leds/
root@Khadas:/sys/class/leds# ls
mmc1::  read_led  sys_led
```

# 使用LED

这里以`sys_led`为例

```shell
root@Khadas:/sys/class/leds# cd sys_led
root@Khadas:/sys/class/leds/sys_led# ls
brightness  device  invert  max_brightness  power  subsystem  trigger  uevent
```

查看所有可设置的参数

```shell
root@Khadas:/sys/class/leds/sys_led# cat trigger
none rc-feedback kbd-scrolllock kbd-numlock kbd-capslock kbd-kanalock kbd-shiftlock kbd-altgrlock kbd-ctrllock kbd-altlock kbd-shiftllock kbd-shiftrlock kbd-ctrlllock kbd-ctrlrlock mmc0 mmc1 timer oneshot [heartbeat] backlight gpio cpu0 cpu1 cpu2 cpu3 cpu4 cpu5 default-on transient flash torch rfkill0 mmc2 rfkill1 rfkill2 
```

## 关闭LED

输入`none`参数关闭LED

```shell
root@Khadas:/sys/class/leds/sys_led# echo none > trigger
```
## 打开LED

输入参数`default-on`打开LED

```shell
root@Khadas:/sys/class/leds/sys_led# echo default-on >trigger
```

设置`heartbeat`可以让LED闪烁

```shell
root@Khadas:/sys/class/leds/sys_led# echo heartbeat > trigger
```

你也可以尝试其他参数
