title: 如何自定义 IR CODE 进行系统开机
---

## 获取遥控器按键的IR CODE

* 打开驱动调试信息

```bash
root@Khadas:/home/khadas# echo 1 > /sys/class/remote/amremote/debug_enable
```

按遥控器的按键来获取按键值。

这里以`Khadas`遥控器为例，按下遥控器的`OK`按键，可以从内核信息中得到按键值：

```bash
# dmesg | grep "meson-remote"
[  723.513680@1] meson-remote c8100580.rc: framecode=0xf807ff00
[  723.513820@1] meson-remote c8100580.rc: receive scancode=0x7
[  723.519407@1] meson-remote c8100580.rc: keypressed=0x0
[  723.524531@1] meson-remote c8100580.rc: report key!!
[  723.604587@1] meson-remote c8100580.rc: ir controller busy flag = 0
[  723.605357@1] meson-remote c8100580.rc: keyup!!
```

其中`framecode=0xf807ff00`就是我们需要的按键值。

## 自定义设置IR CODE

`IR CODE`的设置是在uboot设置，这里有两个自定义按键可以使用。

### 写入`IR CODE`

* 自定义customer1

```bash
kvim#kbi ircode customer1 w 0xf807ff00
```

* 自定义customer2

```bash
kvim#kbi ircode customer2 w 0xf807ff00
```

#### 读取设置的`IR CODE`

* 读取customer1

```bash
kvim#kbi ircode customer1 r
ircode1: 0xf807ff00
```

* 读取customer2

```bash
kvim#kbi ircode customer2 r
ircode2: 0xf807ff00
```

## 验证设置是否成功


系统关机：

* 通过u-boot关机

```bash
kvim#kbi poweroff
do_kbi_poweroff
```

* 通过ubuntu命令关机

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

* 长按`power`按键关机

* 使用按键唤醒

设置成功的情况下，按下设置的按键就会唤醒板子。

