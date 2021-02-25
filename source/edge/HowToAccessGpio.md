title: How To Access GPIO
---

This guide will teach you how to access the GPIO using Android and Ubuntu.

### GPIO Number List
```
PIN         GPIO        Number
PIN15       GPIO1_C2     50
PIN16       GPIO1_C1     49
PIN22       GPIO1_C0     48
PIN23       GPIO1_B7     47
```

*Tip: Some GPIOs may be set to other functions by default, e.g. I2C. If you want to use them as GPIO you need to modify the DTS.*

### How To Get GPIO Number
You can use the following formula to get GPIO number:
```
n = (block_number * 32) + (sub_block_number * 8) + index
```

Where:

* block_number: index of the block number
* sub_block_number: the alphabetical index of the block name, minus 1
* index: the pin number within the block

Example: PIN15(GPIO1_C2)

```
GPIO1_C2 -> (1 * 32) + (2 * 8) + 2 = 50
```

**How To Access GPIO Via Terminal**

> Request the gpio(GPIO1_C2)
```
$ echo 50 > /sys/class/gpio/export
```
> Config the gpio(GPIO1_C2) as output
```
$ echo out > /sys/class/gpio/gpio50/direction
```
> Config the gpio(GPIO1_C2) as high level output
```
$ echo 1 >  /sys/class/gpio/gpio50/value
```
> Config the gpio(GPIO1_C2) as low level output
```
$ echo 0 >  /sys/class/gpio/gpio50/value
```
> Config the gpio(GPIO1_C2) as input
```
$ echo in > /sys/class/gpio/gpio50/direction
```
> Get the level of gpio(GPIO1_C2)
```
$ cat  /sys/class/gpio/gpio50/value
```
> Release the gpio(GPIO1_C2)
```
$ echo 50 > /sys/class/gpio/unexport
```
