title: GPIO
---

This guide is about how to access the GPIO in Ubuntu.

## Preconditions

The ROM must satisfy the following conditions:

## How to Get the GPIO Number
You can get the GPIO number from GPIO Banks or Pins. Different versions of kernel will be different.

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

For example, get the number of `GPIOAO_6`:
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

For example, get the number of `GPIOH_5`:
Number(GPIOH_5) = bank + pin = 410 + 22 = 432

**GPIO List**

```
PIN         GPIO         Number
PIN37       GPIOH5         432
PIN33       GPIOAO6        502
```

**Access GPIO on Terminal**

*  Request the gpio(GPIOH5)

```bash
$ echo 432 > /sys/class/gpio/export
```

* Config the gpio(GPIOH5) as  output

```bash
$ echo out > /sys/class/gpio/gpio432/direction
```

* Config the gpio(GPIOH5) as high level output

```bash
$ echo 1 >  /sys/class/gpio/gpio432/value
```

* Config  the gpio(GPIOH5) as low level output

```bash
$ echo 0 >  /sys/class/gpio/gpio432/value
```

* Config the gpio(GPIOH5) as input

```bash
$ echo in > /sys/class/gpio/gpio432/direction
```

* Get the level of gpio(GPIOH5)

```bash
$ cat  /sys/class/gpio/gpio432/value
```

* Release the gpio(GPIOH5)

```bash
$ echo 432 > /sys/class/gpio/unexport
```
