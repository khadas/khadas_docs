title: GPIO中断
---

这里主要介绍如何在Ubuntu下使用GPIO中断。


* 获取GPIO数值

可以通过`gpio read`命令来获取对应管脚的GPIO数值。

```bash
$ sudo gpio readall
 +------+-----+----------+------+---+----+---- Model  Khadas VIM3 --+----+---+------+----------+-----+------+
 | GPIO | wPi |   Name   | Mode | V | DS | PU/PD | Physical | PU/PD | DS | V | Mode |   Name   | wPi | GPIO |
 +------+-----+----------+------+---+----+-------+----++----+-------+----+---+------+----------+-----+------+
 |      |     |       5V |      |   |    |       |  1 || 21 |       |    |   |      | GND      |     |      |
 |      |     |       5V |      |   |    |       |  2 || 22 | P/U   |    | 1 | ALT1 | PIN.A15  | 6   |  475 |
 |      |     |   USB_DM |      |   |    |       |  3 || 23 | P/U   |    | 1 | ALT1 | PIN.A14  | 7   |  474 |
 |      |     |   USB_DP |      |   |    |       |  4 || 24 |       |    |   |      | GND      |     |      |
 |      |     |      GND |      |   |    |       |  5 || 25 | P/U   |    | 1 | ALT0 | PIN.AO2  | 8   |  498 |
 |      |     |   MCU3V3 |      |   |    |       |  6 || 26 | P/U   |    | 1 | ALT0 | PIN.AO3  | 9   |  499 |
 |      |     |  MCUNRST |      |   |    |       |  7 || 27 |       |    |   |      | 3V3      |     |      |
 |      |     |  MCUSWIM |      |   |    |       |  8 || 28 |       |    |   |      | GND      |     |      |
 |      |     |      GND |      |   |    |       |  9 || 29 | P/D   |    | 0 | ALT0 | PIN.A1   | 10  |  461 |
 |      |     |     ADC0 |      |   |    |       | 10 || 30 | P/D   |    | 0 | ALT0 | PIN.A0   | 11  |  460 |
 |      |     |      1V8 |      |   |    |       | 11 || 31 | P/D   |    | 0 | ALT0 | PIN.A3   | 12  |  463 |
 |      |     |     ADC1 |      |   |    |       | 12 || 32 | P/D   |    | 0 | ALT0 | PIN.A2   | 13  |  462 |
 |  506 |   1 |   PIN.H5 | ALT3 | 0 |    |   P/U | 13 || 33 | P/D   |    | 0 | ALT1 | PIN.A4   | 14  |  464 |
 |      |     |     GND3 |      |   |    |       | 14 || 34 |       |    |   |      | GND      |     |      |
 |  433 |   2 |   PIN.H6 |   IN | 0 |    |   P/D | 15 || 35 | P/D   |    | 0 | ALT3 | PWM-F    | 15  |  432 |
 |  434 |   3 |   PIN.H7 |   IN | 0 |    |   P/D | 16 || 36 |       |    |   |      | RTC      |     |      |
 |      |     |      GND |      |   |    |       | 17 || 37 | P/D   |    | 0 | IN   | PIN.H4   | 16  |  431 |
 |  497 |   4 |  PIN.AO1 | ALT0 | 1 |    |   P/U | 18 || 38 |       |    |   |      | MCU-FA1  |     |      |
 |  496 |   5 |  PIN.AO0 | ALT0 | 1 |    |   P/U | 19 || 39 | P/D   |    | 0 | IN   | PIN.Z15  | 17  |  426 |
 |      |     |      3V3 |      |   |    |       | 20 || 40 |       |    |   |      | GND      |     |      |
 +------+-----+----------+------+---+----+-------+----++----+-------+----+---+------+----------+-----+------+
```

选择你需要使用的GPIO，确认对应的物理引脚和GPIO值。这里以`GPIOH6`为例，则对应的GPIO值为`433`，物理引脚为第15脚。

* Export GPIO

```bash
$ echo 433 | sudo tee /sys/class/gpio/export
```

{% note info 注意 %}

请确保`gpio readall`查看到的`GPIOH_6`状态为普通GPIO，如果不是，你需要先把这个管脚配置为普通GPIO，方法为编辑文件`/boot/env.txt`，移除`overlays`节点里面的`uart3`，然后保存重启系统。

详细信息请查看 [Device Tree Overlays](device_tree_overlay.html) 。

{% endnote %}


* 获取测试源码

```sh
$ wget https://dl.khadas.com/development/code/docs_source/gpio_interrupts.c
```

* 编译源码

```bash
$ gcc -o gpio_interrupts gpio_interrupts.c
```

* 运行程序

```bash
$ sudo ./gpio_interrupts 433 rising down
.
GPIO 433 interrupt occurred!
..........
```

通过杜邦线连接物理引脚的`PIN20`和`PIN15`，触发中断。现象如下：

```bash
$ sudo ./gpio_interrupts 433 rising down
.
GPIO 433 interrupt occurred!
..
GPIO 433 interrupt occurred!
.
GPIO 433 interrupt occurred!
.
GPIO 433 interrupt occurred!
```

* 测试程序说明

运行格式如下：

```bash
$ sudo ./gpio_interrupts <edge> [pull]
```

`<edge>`可设置为`rising`或者`failing`, `[pull]`为可选参数，设置为`up`或者`down`。
