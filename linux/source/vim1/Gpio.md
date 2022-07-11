title: GPIO
---

Access GPIO pins from the Ubuntu Terminal.

{% note warn Note %}
1. This document **only for Amlogic 4.9 kernel on VIM1/VIM2/VIM3 and Amlogic 5.4 kernel on VIM4**.

{% endnote %}

## Get GPIO Number

### Calculation Method

**The calculation method of the GPIO array is: `Number = Range Base + Pin Index`.**

1. `Range Base` refers to the **base value** of GPIO ranges.
2. `Pin Index` refers to the sorting of the **GPIO pins** you need to calculate in the corresponding ranges.

### Numerical Calculation Example

Amlogic chips usually include two GPIO ranges, AOBUS and Periphs. Examples for each range is provided here for reference.

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

1. **Get `Range Base`:**

```
$ cat /sys/kernel/debug/pinctrl/pinctrl@14/gpio-ranges
GPIO ranges handled:
0: aobus-banks GPIOS [501 - 511] PINS [0 - 10]
```

AOBUS' `Range Base` is `501`.

2. **Get `Pin Index`:**

```
$ cat /sys/kernel/debug/pinctrl/pinctrl@14/pins
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

The pin in front of each GPIO represents the corresponding `Pin Index`.

**Periphs**

1. **Get `Range Base`:**

```
$ cat /sys/kernel/debug/pinctrl/pinctrl@4b0/gpio-ranges 
GPIO ranges handled:
0: periphs-banks GPIOS [401 - 500] PINS [0 - 99]
```

Periphs' `Range Base` is `401`.

2. **Get `Pin Index`:**

```
$ cat /sys/kernel/debug/pinctrl/pinctrl@4b0/pins
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

`GPIOX_14` = `Range Base` + `Pin Index` = `401` + `93` = `494`.

</div>
<div class="tab-pane fade" id="vim2" role="tabpanel" aria-labelledby="vim2-tab">

**AOBUS**

1. **Get `Range Base`:**

```
$ cat /sys/kernel/debug/pinctrl/pinctrl@14/gpio-ranges
GPIO ranges handled:
0: aobus-banks GPIOS [501 - 511] PINS [0 - 10]
```

AOBUS' `Range Base` is `501`.

2. **Get `Pin Index`:**

```
$ cat /sys/kernel/debug/pinctrl/pinctrl@14/pins
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

The pin in front of each GPIO represents the corresponding `Pin Index`.

**Periphs**

1. **Get `Range Base`:**

```
$ cat /sys/kernel/debug/pinctrl/pinctrl@4b0/gpio-ranges 
GPIO ranges handled:
0: periphs-banks GPIOS [401 - 500] PINS [0 - 99]
```

Periphs的`Range Base` is `401`.

2. **Get `Pin Index`:**

```
$ cat /sys/kernel/debug/pinctrl/pinctrl@4b0/pins
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

`GPIOX_14` = `Range Base` + `Pin Index` = `401` + `93` = `494`

</div>
<div class="tab-pane fade" id="vim3" role="tabpanel" aria-labelledby="vim3-tab">

**AOBUS**

1. **Get `Range Base`:**

```
$ cat /sys/kernel/debug/pinctrl/pinctrl@ff800014/gpio-ranges
GPIO ranges handled:
0: aobus-banks GPIOS [496 - 511] PINS [0 - 15]
```

AOBUS' `Range Base` is `496`.

2. **Get `Pin Index`:**

```
$ cat /sys/kernel/debug/pinctrl/pinctrl@ff800014/pins
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

The pin in front of each GPIO represents the corresponding `Pin Index`.

**Periphs**

1. **Get `Range Base`:**

```
$ cat /sys/kernel/debug/pinctrl/pinctrl@ff634480/gpio-ranges
GPIO ranges handled:
0: periphs-banks GPIOS [410 - 495] PINS [0 - 85]
```

Periphs' `Range Base` is `410`.

2. **Get `Pin Index`:**

```
$ cat /sys/kernel/debug/pinctrl/pinctrl@ff634480/pins
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

`GPIOX_10` = `Range Base` + `Pin Index` = `410` + `76` = `486`.

</div>
<div class="tab-pane fade" id="vim4" role="tabpanel" aria-labelledby="vim4-tab">

1. **Get `Range Base`:**

```
$ cat /sys/kernel/debug/pinctrl/fe000000.apb4\:pinctrl\@4000-pinctrl-meson/gpio-ranges
GPIO ranges handled:
0: periphs-banks GPIOS [355 - 511] PINS [0 - 156]
```

2. **Get `Pin Index`:**

```
$ cat /sys/kernel/debug/pinctrl/fe000000.apb4\:pinctrl\@4000-pinctrl-meson/pins
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

`GPIOT_19` = `Range Base` + `Pin Index` = `355` + `110` = `465`.

</div>
</div>

## GPIO Usage

When you get the GPIO number, you can follow the steps below to control it. Here will take GPIO number `465` as a example.

* Export GPIO

```bash
$ echo 465 | sudo tee /sys/class/gpio/export
```

* Set GPIO direction

You can set the direction `input` or `output`.

```bash
$ echo out | sudo tee /sys/class/gpio/gpio465/direction # Set GPIO output
$ echo in | sudo tee /sys/class/gpio/gpio465/direction # Set GPIO input
```

* Set or get GPIO value

```bash
$ echo 1 | sudo tee /sys/class/gpio/gpio465/value # Set GPIO output high
$ echo 0 | sudo tee /sys/class/gpio/gpio465/value # Set GPIO output low
$ cat /sys/class/gpio/gpio465/value # Get GPIO input value
```

* Unexport GPIO

```bash
$ echo 465 | sudo tee /sys/class/gpio/unexport
```

Unexport to release the GPIO.

