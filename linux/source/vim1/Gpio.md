title: GPIO
---

**This document describes how to access GPIO under Ubuntu.**

{% note warn Note %}
1. This document **only supports the 4.9 kernel**.
2. All operations on GPIO are performed under **root privileges**, switch to root:

```sh
khadas@Khadas:~$ su
Password:
root@Khadas:/home/khadas#
```

{% endnote %}

## Get GPIO Value

### Calculation Method

**The calculation method of the GPIO array is: `Number = Banks + Pins`.**

1. `Banks` refers to the **base value** of GPIO Ranges.
2. `Pins` refers to the sorting of the **GPIO pins** you need to calculate in the corresponding ranges.

### Numerical Calculation Example

Amlogic chips usually include two GPIO Ranges, AOBUS and Periphs. There is a calculation example for each Ranges here for reference.

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="vim1-tab" data-toggle="tab" href="#vim1" role="tab" aria-controls="vim1" aria-selected="true">VIM1</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim2-tab" data-toggle="tab" href="#vim2" role="tab" aria-controls="vim2" aria-selected="false">VIM2</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim3-tab" data-toggle="tab" href="#vim3" role="tab" aria-controls="vim3" aria-selected="false">VIM3</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim4-tab" data-toggle="tab" href="#vim4" role="tab" aria-controls="vim4" aria-selected="false">VIM4</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="vim1" role="tabpanel" aria-labelledby="vim1-tab">

**AOBUS**

1. **Get `Banks`:**

```sh
root@Khadas:/home/khadas# cat /sys/kernel/debug/pinctrl/pinctrl@14/gpio-ranges
GPIO ranges handled:
0: aobus-banks GPIOS [501 - 511] PINS [0 - 10]
```

AOBUS' `Banks` is `496`.

2. **Get `Pins`:**

```sh
root@Khadas:/home/khadas# cat /sys/kernel/debug/pinctrl/pinctrl@14/pins 
registered pins: 11
pin 0 (GPIOAO_0)  pinctrl@14
pin 1 (GPIOAO_1)  pinctrl@14
pin 2 (GPIOAO_2)  pinctrl@14
pin 3 (GPIOAO_3)  pinctrl@14
pin 4 (GPIOAO_4)  pinctrl@14
pin 5 (GPIOAO_5)  pinctrl@14
pin 6 (GPIOAO_6)  pinctrl@14
pin 7 (GPIOAO_7)  pinctrl@14
pin 8 (GPIOAO_8)  pinctrl@14
pin 9 (GPIOAO_9)  pinctrl@14
pin 10 (GPIO_TEST_N)  pinctrl@14
```

The pin in front of each GPIO represents the corresponding `pins`.

**Periphs**

1. **Get `Banks`:**

```sh
root@Khadas:/home/khadas# cat /sys/kernel/debug/pinctrl/pinctrl@4b0/gpio-ranges 
GPIO ranges handled:
0: periphs-banks GPIOS [401 - 500] PINS [0 - 99]
```

Periphs' `Banks` is 410.

2. **Get `Pins`:**

```sh
root@Khadas:/home/khadas# cat /sys/kernel/debug/pinctrl/pinctrl@4b0/pins
registered pins: 100
pin 0 (GPIOZ_0)  pinctrl@4b0
pin 1 (GPIOZ_1)  pinctrl@4b0
pin 2 (GPIOZ_2)  pinctrl@4b0
pin 3 (GPIOZ_3)  pinctrl@4b0
pin 4 (GPIOZ_4)  pinctrl@4b0
pin 5 (GPIOZ_5)  pinctrl@4b0
pin 6 (GPIOZ_6)  pinctrl@4b0
pin 7 (GPIOZ_7)  pinctrl@4b0
pin 8 (GPIOZ_8)  pinctrl@4b0
pin 9 (GPIOZ_9)  pinctrl@4b0
pin 93 (GPIOX_14)  pinctrl@4b0
pin 94 (GPIOX_15)  pinctrl@4b0
pin 95 (GPIOX_16)  pinctrl@4b0
pin 96 (GPIOX_17)  pinctrl@4b0
pin 97 (GPIOX_18)  pinctrl@4b0
pin 98 (GPIOCLK_0)  pinctrl@4b0
pin 99 (GPIOCLK_1)  pinctrl@4b0
```
3. **Calculate Number**

Take `GPIOX_14` as an example here,

`GPIOX_14` = `Banks` + `Pins` = `401` + `93` = `494`.

</div>
<div class="tab-pane fade" id="vim2" role="tabpanel" aria-labelledby="vim2-tab">

**AOBUS**

1. **Get `Banks`:**

```sh
root@Khadas:/home/khadas# cat /sys/kernel/debug/pinctrl/pinctrl@14/gpio-ranges
GPIO ranges handled:
0: aobus-banks GPIOS [501 - 511] PINS [0 - 10]
```

AOBUS' `Banks` is `496`.

2. **Get `Pins`:**

```sh
root@Khadas:/home/khadas# cat /sys/kernel/debug/pinctrl/pinctrl@14/pins 
registered pins: 11
pin 0 (GPIOAO_0)  pinctrl@14
pin 1 (GPIOAO_1)  pinctrl@14
pin 2 (GPIOAO_2)  pinctrl@14
pin 3 (GPIOAO_3)  pinctrl@14
pin 4 (GPIOAO_4)  pinctrl@14
pin 5 (GPIOAO_5)  pinctrl@14
pin 6 (GPIOAO_6)  pinctrl@14
pin 7 (GPIOAO_7)  pinctrl@14
pin 8 (GPIOAO_8)  pinctrl@14
pin 9 (GPIOAO_9)  pinctrl@14
pin 10 (GPIO_TEST_N)  pinctrl@14
```

The pin in front of each GPIO represents the corresponding `pins`.

**Periphs**

1. **Get `Banks`:**

```sh
root@Khadas:/home/khadas# cat /sys/kernel/debug/pinctrl/pinctrl@4b0/gpio-ranges 
GPIO ranges handled:
0: periphs-banks GPIOS [401 - 500] PINS [0 - 99]
```

Periphs的' `Banks` is `410`.

2. **Get `Pins`:**

```sh
root@Khadas:/home/khadas# cat /sys/kernel/debug/pinctrl/pinctrl@4b0/pins
registered pins: 100
pin 0 (GPIOZ_0)  pinctrl@4b0
pin 1 (GPIOZ_1)  pinctrl@4b0
pin 2 (GPIOZ_2)  pinctrl@4b0
pin 3 (GPIOZ_3)  pinctrl@4b0
pin 4 (GPIOZ_4)  pinctrl@4b0
pin 5 (GPIOZ_5)  pinctrl@4b0
pin 6 (GPIOZ_6)  pinctrl@4b0
pin 7 (GPIOZ_7)  pinctrl@4b0
pin 8 (GPIOZ_8)  pinctrl@4b0
pin 9 (GPIOZ_9)  pinctrl@4b0
pin 93 (GPIOX_14)  pinctrl@4b0
pin 94 (GPIOX_15)  pinctrl@4b0
pin 95 (GPIOX_16)  pinctrl@4b0
pin 96 (GPIOX_17)  pinctrl@4b0
pin 97 (GPIOX_18)  pinctrl@4b0
pin 98 (GPIOCLK_0)  pinctrl@4b0
pin 99 (GPIOCLK_1)  pinctrl@4b0
```
3. **Calculate Number**

Take `GPIOX_14` as an example here,

`GPIOX_14` = `Banks` + `Pins` = `401` + `93` = `494`

</div>
<div class="tab-pane fade" id="vim3" role="tabpanel" aria-labelledby="vim3-tab">

**AOBUS**

1. **Get `Banks`:**

```sh
root@Khadas:/home/khadas# cat /sys/kernel/debug/pinctrl/pinctrl@ff800014/gpio-ranges
GPIO ranges handled:
0: aobus-banks GPIOS [496 - 511] PINS [0 - 15]
```

AOBUS' `Banks` is `496`.

2. **Get `Pins`:**

```sh
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

The pin in front of each GPIO represents the corresponding `Pins`.

**Periphs**

1. **Get `Banks`:**

```sh
root@Khadas:/home/khadas# cat /sys/kernel/debug/pinctrl/pinctrl@ff634480/gpio-ranges
GPIO ranges handled:
0: periphs-banks GPIOS [410 - 495] PINS [0 - 85]
```

Periphs' `Banks` is `410`.

2. **Get `Pins`:**

```sh
root@Khadas:/home/khadas# cat /sys/kernel/debug/pinctrl/pinctrl@ff634480/pins
registered pins: 86
pin 0 (GPIOV_0)  pinctrl@ff634480
pin 1 (GPIOZ_0)  pinctrl@ff634480
pin 2 (GPIOZ_1)  pinctrl@ff634480
pin 3 (GPIOZ_2)  pinctrl@ff634480
pin 4 (GPIOZ_3)  pinctrl@ff634480
pin 5 (GPIOZ_4)  pinctrl@ff634480
pin 6 (GPIOZ_5)  pinctrl@ff634480
pin 7 (GPIOZ_6)  pinctrl@ff634480
pin 8 (GPIOZ_7)  pinctrl@ff634480
pin 9 (GPIOZ_8)  pinctrl@ff634480
...
pin 76 (GPIOX_10)  pinctrl@ff634480
pin 77 (GPIOX_11)  pinctrl@ff634480dd
pin 78 (GPIOX_12)  pinctrl@ff634480
pin 79 (GPIOX_13)  pinctrl@ff634480
pin 80 (GPIOX_14)  pinctrl@ff634480
pin 81 (GPIOX_15)  pinctrl@ff634480
pin 82 (GPIOX_16)  pinctrl@ff634480
pin 83 (GPIOX_17)  pinctrl@ff634480
pin 84 (GPIOX_18)  pinctrl@ff634480
pin 85 (GPIOX_19)  pinctrl@ff634480
```
3. **Calculate Number**

Take `GPIOX_10` as an example here,

`GPIOX_10` = `Banks` + `Pins` = `410` + `76` = `486`.

</div>
<div class="tab-pane fade" id="vim4" role="tabpanel" aria-labelledby="vim4-tab">

1. **Get `Banks`:**

```sh
root@Khadas:/home/khadas# cat /sys/kernel/debug/pinctrl/fe000000.apb4\:pinctrl\@4000-pinctrl-meson/gpio-ranges
GPIO ranges handled:
0: periphs-banks GPIOS [355 - 511] PINS [0 - 156]
```

2. **Get `Pins`:**

```sh
root@Khadas:/home/khadas# cat /sys/kernel/debug/pinctrl/fe000000.apb4\:pinctrl\@4000-pinctrl-meson/pins
registered pins: 157
pin 0 (GPIOB_0)  fe000000.apb4:pinctrl@4000
pin 1 (GPIOB_1)  fe000000.apb4:pinctrl@4000
pin 2 (GPIOB_2)  fe000000.apb4:pinctrl@4000
pin 3 (GPIOB_3)  fe000000.apb4:pinctrl@4000
pin 4 (GPIOB_4)  fe000000.apb4:pinctrl@4000
pin 5 (GPIOB_5)  fe000000.apb4:pinctrl@4000
pin 6 (GPIOB_6)  fe000000.apb4:pinctrl@4000
pin 7 (GPIOB_7)  fe000000.apb4:pinctrl@4000
pin 8 (GPIOB_8)  fe000000.apb4:pinctrl@4000
pin 9 (GPIOB_9)  fe000000.apb4:pinctrl@4000
```

3. **Calculate Number**

Take `GPIOT_19` as an examples here.

`GPIOT_19` = `Banks` + `Pins` = `355` + `110` = `465`.

</div>
</div>

## GPIO usage examples

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="vim1demo-tab" data-toggle="tab" href="#vim1demo" role="tab" aria-controls="vim1" aria-selected="true">VIM1</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim2demo-tab" data-toggle="tab" href="#vim2demo" role="tab" aria-controls="vim2" aria-selected="false">VIM2</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim3demo-tab" data-toggle="tab" href="#vim3demo" role="tab" aria-controls="vim3" aria-selected="false">VIM3</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim4demo-tab" data-toggle="tab" href="#vim4demo" role="tab" aria-controls="vim4" aria-selected="false">VIM4</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="vim1demo" role="tabpanel" aria-labelledby="vim1-tab">

**Here use `GPIODV24` to read the pin output value of `GPIODV25`, and use Dupont line to connect the physical pins 22 and 23 together.**

1. **Set `GPIODV24` and `GPIODV25` as ordinary pins** (multiplexed as i2c by default).

  * edit `/boot/env.txt`,
```sh
root@Khadas:/home/khadas# vim /boot/env.txt
```
  * Remove i2c3 from overlays,
```
overlays=uart4 pwm_ao_a pwm_f i2c0 i2s watchdog --> overlays=uart4 pwm_ao_a pwm_f i2s watchdog
```

**Reboot** to take effect.

2. **Calculate the GPIO value:**

`GPIODV_24` = `401` + `72` = `473`.
`GPIODV_25` = `401` + `73` = `474`.

3. **Set `GPIODV_24` to read mode.**

  * Export GPIO
```sh
root@Khadas:/home/khadas# echo 473 > /sys/class/gpio/export
```
  * Set to read mode
```sh
root@Khadas:/home/khadas# echo in > /sys/class/gpio/gpio473/direction
```

4. **Set `GPIODV_25` to write mode**

  * Export GPIO
```sh
root@Khadas:/home/khadas# echo 474 > /sys/class/gpio/export
```
  * Set to write mode
```sh
root@Khadas:/home/khadas# echo out > /sys/class/gpio/gpio474/direction
```

5. **Test**

  * Set `GPIODV_25` to output high level and read it with `GPIODV_24`
```sh
root@Khadas:/home/khadas# echo 1 > /sys/class/gpio/gpio474/value
root@Khadas:/home/khadas# cat /sys/class/gpio/gpio473/value
1
```
  * Set `GPIODV_25` to low level and read with `GPIODV_24`
```sh
root@Khadas:/home/khadas# echo 0 > /sys/class/gpio/gpio474/value
root@Khadas:/home/khadas# cat /sys/class/gpio/gpio473/value
0
```
</div>
<div class="tab-pane fade" id="vim2demo" role="tabpanel" aria-labelledby="vim2-tab">

**Here use GPIODV24 to read the pin output value of GPIODV25, and use Dupont line to connect the physical pins 22 and 23 together.**

1. **Set GPIODV24 and GPIODV25 as ordinary pins** (multiplexed as i2c by default).

*  edit `/boot/env.txt`,
```sh
root@Khadas:/home/khadas# vim /boot/env.txt
```
* Remove i2c3 from overlays,
```
overlays=uart4 pwm_ao_a pwm_f i2c0 i2s watchdog --> overlays=uart4 pwm_ao_a pwm_f i2s watchdog
```
  * Reboot to take effect.

2. **Calculate the GPIO value:**

`GPIODV_24` = `401` + `72` = `473`.
`GPIODV_25` = `401` + `73` = `474`.

3. Set `GPIODV_24` to read mode:

  * Export GPIO
```sh
root@Khadas:/home/khadas# echo 473 > /sys/class/gpio/export
```
  * Set to read mode
```sh
root@Khadas:/home/khadas# echo in > /sys/class/gpio/gpio473/direction
```

4. **Set `GPIODV_25` to write mode**

  * Export GPIO
```sh
root@Khadas:/home/khadas# echo 474 > /sys/class/gpio/export
```
  * Set to write mode
```sh
root@Khadas:/home/khadas# echo out > /sys/class/gpio/gpio474/direction
```

5. **Test**

  * Set `GPIODV_25` to output high level and read it with `GPIODV_24`
```sh
root@Khadas:/home/khadas# echo 1 > /sys/class/gpio/gpio474/value
root@Khadas:/home/khadas# cat /sys/class/gpio/gpio473/value
1
```
  * Set `GPIODV_25` to low level and read with `GPIODV_24`
```sh
root@Khadas:/home/khadas# echo 0 > /sys/class/gpio/gpio474/value
root@Khadas:/home/khadas# cat /sys/class/gpio/gpio473/value
0
```

</div>
<div class="tab-pane fade" id="vim3demo" role="tabpanel" aria-labelledby="vim3-tab">

**Here use GPIODV24 to read the pin output value of GPIODV25, and use Dupont line to connect the physical pins 22 and 23 together.**

1. **Set GPIODV24 and GPIODV25 as ordinary pins** (multiplexed as i2c by default)
  * edit `/boot/env.txt`,
```sh
root@Khadas:/home/khadas# vim /boot/env.txt
```
* Remove i2c3 from overlays,
```
overlays=uart3 pwm_f i2c3 i2s os08a10 watchdog --> overlays=uart3 pwm_f i2s os08a10 watchdog
```
Reboot to take effect.

2. **Calculate the GPIO value:**

`GPIOA_14` = `410` + `65` = `474`.
`GPIOA_15` = `410` + `65` = `475`.

3. **Set `GPIOA_14` to read mode**

  * Export GPIO
```sh
root@Khadas:/home/khadas# echo 474 > /sys/class/gpio/export
```
  * Set to read mode
```sh
root@Khadas:/home/khadas# echo in > /sys/class/gpio/gpio474/direction
```

4. **Set `GPIOA_15` to write mode**

  * Export GPIO
```sh
root@Khadas:/home/khadas# echo 475 > /sys/class/gpio/export
```
  * Set to write mode
```sh
root@Khadas:/home/khadas# echo out > /sys/class/gpio/gpio475/direction
```

5. **Test**

  * Set `GPIOA_15` to output high level and read it with `GPIOA_14`
```sh
root@Khadas:/home/khadas# echo 1 >  /sys/class/gpio/gpio475/value
root@Khadas:/home/khadas# cat /sys/class/gpio/gpio474/value
1
```
  * Set `GPIOA_15` to output low level and read it with `GPIOA_14`
```sh
root@Khadas:/home/khadas# echo 0 >  /sys/class/gpio/gpio475/value
root@Khadas:/home/khadas# cat /sys/class/gpio/gpio474/value
0
```
</div>
<div class="tab-pane fade" id="vim4demo" role="tabpanel" aria-labelledby="vim4-tab">

**Here use GPIOT_18 to read the pin output value of GPIOT_19, and use Dupont line to connect the physical pins 36 and 37 together.**

1. **Calculate the GPIO value:**

`GPIOT_18` = `355` + `109` = `464`.
`GPIOT_19` = `355` + `110` = `465`.

2. **Set `GPIOT_18` to read mode**

  * Export GPIO
```sh
root@Khadas:/home/khadas# echo 464 > /sys/class/gpio/export
```
  * Set to read mode
```sh
root@Khadas:/home/khadas# echo in > /sys/class/gpio/gpio464/direction
```

3. **Set `GPIOT_19` to read mode**

  * Export GPIO
```sh
root@Khadas:/home/khadas# echo 465 > /sys/class/gpio/export
```
  * Set to write mode
```sh
root@Khadas:/home/khadas# echo out > /sys/class/gpio/gpio465/direction
```

4. **Test**

  * Set `GPIOT_19` to output high level and read it with `GPIOT_18`
```sh
root@Khadas:/home/khadas# echo 1 >  /sys/class/gpio/gpio465/value
root@Khadas:/home/khadas# cat /sys/class/gpio/gpio464/value 
1
```
  * Set `GPIOT_19` to output low level and read it with `GPIOT_18`
```sh
root@Khadas:/home/khadas# echo 0 >  /sys/class/gpio/gpio465/value
root@Khadas:/home/khadas# cat /sys/class/gpio/gpio464/value
0
```
</div>
</div>

