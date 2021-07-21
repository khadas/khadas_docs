title: 如何访问GPIO
---

这篇文档介绍如何在Ubuntu下访问GPIO。

## 如何获取GPIO数值
你可以通过GPIO banks和pins来获取。不同版本的内核数值不同。

* AOBUS

Banks:

```bash
root@Khadas:/home/khadas# cat /sys/kernel/debug/pinctrl/pinctrl@ff800014/gpio-ranges
GPIO ranges handled:
0: aobus-banks GPIOS [496 - 511] PINS [0 - 15]
```
Pins:

```bash
root@Khadas:/home/khadas# cat /sys/kernel/debug/pinctrl/pinctrl@ff800014/pins
registered pins: 16
pin 0 (GPIOAO_0)  pinctrl@ff800014
pin 1 (GPIOAO_1)  pinctrl@ff800014
pin 2 (GPIOAO_2)  pinctrl@ff800014
pin 3 (GPIOAO_3)  pinctrl@ff800014
pin 4 (GPIOAO_4)  pinctrl@ff800014
pin 5 (GPIOAO_5)  pinctrl@ff800014
pin 6 (GPIOAO_6)  pinctrl@ff800014
pin 7 (GPIOAO_7)  pinctrl@ff800014
pin 8 (GPIOAO_8)  pinctrl@ff800014
pin 9 (GPIOAO_9)  pinctrl@ff800014
pin 10 (GPIOAO_10)  pinctrl@ff800014
pin 11 (GPIOAO_11)  pinctrl@ff800014
pin 12 (GPIOE_0)  pinctrl@ff800014
pin 13 (GPIOE_1)  pinctrl@ff800014
pin 14 (GPIOE_2)  pinctrl@ff800014
pin 15 (GPIO_TEST_N)  pinctrl@ff800014
```

例如：获取`GPIOAO_6`的数值：
Number(GPIOAO_6) = bank + pin = 496 + 6 = 502

* Periphs

Banks:

```bash
root@Khadas:/home/khadas# cat /sys/kernel/debug/pinctrl/pinctrl@ff634480/gpio-ranges
GPIO ranges handled:
0: periphs-banks GPIOS [410 - 495] PINS [0 - 85]
```

Pins:

```bash
root@Khadas:/home/khadas# cat /sys/kernel/debug/pinctrl/pinctrl@ff634480/pins
registered pins: 86
pin 0 (GPIOV_0)  pinctrl@ff634480
pin 1 (GPIOZ_0)  pinctrl@ff634480
pin 2 (GPIOZ_1)  pinctrl@ff634480
pin 3 (GPIOZ_2)  pinctrl@ff634480
pin 4 (GPIOZ_3)  pinctrl@ff634480
pin 5 (GPIOZ_4)  pinctrl@ff634480
...
pin 17 (GPIOH_0)  pinctrl@ff634480
pin 18 (GPIOH_1)  pinctrl@ff634480
pin 19 (GPIOH_2)  pinctrl@ff634480
pin 20 (GPIOH_3)  pinctrl@ff634480
pin 21 (GPIOH_4)  pinctrl@ff634480
pin 22 (GPIOH_5)  pinctrl@ff634480
pin 23 (GPIOH_6)  pinctrl@ff634480
pin 24 (GPIOH_7)  pinctrl@ff634480
...
pin 80 (GPIOX_14)  pinctrl@ff634480
pin 81 (GPIOX_15)  pinctrl@ff634480
pin 82 (GPIOX_16)  pinctrl@ff634480
pin 83 (GPIOX_17)  pinctrl@ff634480
pin 84 (GPIOX_18)  pinctrl@ff634480
pin 85 (GPIOX_19)  pinctrl@ff634480
```
**GPIO 列表**

```bash
PIN         GPIO         Number
PIN37       GPIOH5         432
PIN33       GPIOAO6        502
```

**在终端访问GPIO**

*  申请GPIO(GPIOH5)

```bash
$ echo 432 > /sys/class/gpio/export
```

* 配置GPIO(GPIOH5)为输出

```bash
$ echo out > /sys/class/gpio/gpio432/direction
```

* 配置GPOIO(GPIOH5)输出高电平

```bash
$ echo 1 >  /sys/class/gpio/gpio432/value
```

* 配置GPIO(GPIOH5)输出低电平

```bash
$ echo 0 >  /sys/class/gpio/gpio432/value
```

* 配置GPIO(GPIOH5)为输入

```bash
$ echo in > /sys/class/gpio/gpio432/direction
```

* 读取GPIO(GPIOH5)电平

```bash
$ cat  /sys/class/gpio/gpio432/value
```

* 释放GPIO(GPIOH5)

```bash
$ echo 432 > /sys/class/gpio/unexport
```
