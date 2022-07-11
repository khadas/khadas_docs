title: GPIO
---

这篇文档会介绍如何在Ubuntu下控制GPIO。

{% note warn 注意 %}
1. 这篇文档**仅仅适用于VIM1/VIM2/VIM3 4.9内核和VIM4 5.4 内核**。

{% endnote %}

## 获取GPIO数值

### 计算方法

GPIO数值计算方法为：`Number = Range Base + Pin Index`。

1. `Range Base` 表示Range基数。
2. `Pin Index` 表示GPIO管脚相对于Range的偏移。

### GPIO数值计算举例

Amlogic有些平台通常有两个GPIO Range， 如：AOBUS和Periphs。下面会分别对这些Range做一下介绍。

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

1. **获取`Range Base`：**

```
$ cat /sys/kernel/debug/pinctrl/pinctrl@14/gpio-ranges
GPIO ranges handled:
0: aobus-banks GPIOS [501 - 511] PINS [0 - 10]
```

AOBUS的`Range Base`为`501`。

2. **获取`Pin Index`：**

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

管脚对应的`Pin Index`如上。

**Periphs**

1. **获取`Range Base`：**

```
$ cat /sys/kernel/debug/pinctrl/pinctrl@4b0/gpio-ranges 
GPIO ranges handled:
0: periphs-banks GPIOS [401 - 500] PINS [0 - 99]
```

Periphs' `Range Base` is `401`.

2. **获取`Pin Index`：**

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
3. **计算GPIO数值：**

以`GPIOX_14`为例。

`GPIOX_14` = `Range Base` + `Pin Index` = `401` + `93` = `494`.

</div>
<div class="tab-pane fade" id="vim2" role="tabpanel" aria-labelledby="vim2-tab">

**AOBUS**

1. **获取`Range Base`：**

```
$ cat /sys/kernel/debug/pinctrl/pinctrl@14/gpio-ranges
GPIO ranges handled:
0: aobus-banks GPIOS [501 - 511] PINS [0 - 10]
```

AOBUS的`Range Base`为`501`。

2. **获取`Pin Index`：**

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

管脚对应的`Pin Index`如上。

**Periphs**

1. **获取`Range Base`：**

```
$ cat /sys/kernel/debug/pinctrl/pinctrl@4b0/gpio-ranges 
GPIO ranges handled:
0: periphs-banks GPIOS [401 - 500] PINS [0 - 99]
```

Periphs的`Range Base`为`401`。

2. **获取`Pin Index`：**

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
3. **计算GPIO数值：**

以`GPIOX_14`为例。

`GPIOX_14` = `Range Base` + `Pin Index` = `401` + `93` = `494`

</div>
<div class="tab-pane fade" id="vim3" role="tabpanel" aria-labelledby="vim3-tab">

**AOBUS**

1. **获取`Range Base`：**

```
$ cat /sys/kernel/debug/pinctrl/pinctrl@ff800014/gpio-ranges
GPIO ranges handled:
0: aobus-banks GPIOS [496 - 511] PINS [0 - 15]
```

AOBUS的`Range Base`为`496`。

2. **获取`Pin Index`：**

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

管脚对应的`Pin Index`如上。

**Periphs**

1. **获取`Range Base`：**

```
$ cat /sys/kernel/debug/pinctrl/pinctrl@ff634480/gpio-ranges
GPIO ranges handled:
0: periphs-banks GPIOS [410 - 495] PINS [0 - 85]
```

Periphs的`Range Base`为`410`。

2. **获取`Pin Index`：**

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
3. **计算GPIO数值：**

以`GPIOX_10`为例。

`GPIOX_10` = `Range Base` + `Pin Index` = `410` + `76` = `486`.

</div>
<div class="tab-pane fade" id="vim4" role="tabpanel" aria-labelledby="vim4-tab">

1. **获取`Range Base`：**

```
$ cat /sys/kernel/debug/pinctrl/fe000000.apb4\:pinctrl\@4000-pinctrl-meson/gpio-ranges
GPIO ranges handled:
0: periphs-banks GPIOS [355 - 511] PINS [0 - 156]
```

2. **获取`Pin Index`：**

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

3. **获取GPIO数值：**

以`GPIOT_19`为例。

`GPIOT_19` = `Range Base` + `Pin Index` = `355` + `110` = `465`.

</div>
</div>

## GPIO用法

在获取到GPIO数值后就可以通过如下的步骤来控制GPIO了。以GPIO数值`465`为例进行说明如下。

* 导出GPIO

```bash
$ echo 465 | sudo tee /sys/class/gpio/export
```

* 设置GPIO输入或输出

可以设置GPIO输入或者输出。

```bash
$ echo out | sudo tee /sys/class/gpio/gpio465/direction # 设置GPIO输出
$ echo in | sudo tee /sys/class/gpio/gpio465/direction # 设置GPIO输入
```

* 设置GPIO数值或获取GPIO数值

```bash
$ echo 1 | sudo tee /sys/class/gpio/gpio465/value # 设置GPIO输出高电平
$ echo 0 | sudo tee /sys/class/gpio/gpio465/value # 设置GPIO输出低电平
$ cat /sys/class/gpio/gpio465/value # 获取GPIO数值
```

* 释放GPIO

```bash
$ echo 465 | sudo tee /sys/class/gpio/unexport
```

释放GPIO。

