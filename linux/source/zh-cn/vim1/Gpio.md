title: GPIO使用文档
---

这篇文档介绍如何在Ubuntu下访问GPIO。

{% note warn 注意 %}
1. 此文档仅支持4.9内核
2. 所有对GPIO的操作都是在root权限下进行的，切换到root:

```sh
khadas@Khadas:~$ su
Password:
root@Khadas:/home/khadas#
```

{% endnote %}


## 获取GPIO数值

### 计算方法

GPIO数组的计算方法为：`Number = Banks + Pins`

1. `Banks`是指GPIO Ranges的基数值
2. `Pins`是指你需要计算的GPIO引脚在对应ranges的排序

### 数值计算示例

Amlogic芯片通常都会包括AOBUS和Periphs两个GPIO Ranges。这里对每个Ranges都有一个计算的示例供参考。

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

1. 获取`Banks`

```sh
root@Khadas:/home/khadas# cat /sys/kernel/debug/pinctrl/pinctrl@14/gpio-ranges
GPIO ranges handled:
0: aobus-banks GPIOS [501 - 511] PINS [0 - 10]
```

AOBUS的`Banks`就为496

2. 获取`Pins`

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

每个GPIO前面的pin代表的就是对应的`Pins`

**Periphs**

1. 获取`Banks`

```sh
root@Khadas:/home/khadas# cat /sys/kernel/debug/pinctrl/pinctrl@4b0/gpio-ranges 
GPIO ranges handled:
0: periphs-banks GPIOS [401 - 500] PINS [0 - 99]
```

Periphs的`Banks`就是410

2. 获取`Pins`

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
3. 计算Number

这里以GPIOX_10为例，

`GPIOX_14 = Banks + Pins = 401 + 89 = 490`

</div>
<div class="tab-pane fade" id="vim2" role="tabpanel" aria-labelledby="vim2-tab">

**AOBUS**

1. 获取`Banks`

```sh
root@Khadas:/home/khadas# cat /sys/kernel/debug/pinctrl/pinctrl@14/gpio-ranges
GPIO ranges handled:
0: aobus-banks GPIOS [501 - 511] PINS [0 - 10]
```

AOBUS的`Banks`就为496

2. 获取`Pins`

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

每个GPIO前面的pin代表的就是对应的`Pins`

**Periphs**

1. 获取`Banks`

```sh
root@Khadas:/home/khadas# cat /sys/kernel/debug/pinctrl/pinctrl@4b0/gpio-ranges 
GPIO ranges handled:
0: periphs-banks GPIOS [401 - 500] PINS [0 - 99]
```

Periphs的`Banks`就是410

2. 获取`Pins`

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
3. 计算Number

这里以GPIOX_10为例，

`GPIOX_14 = Banks + Pins = 401 + 89 = 490`

</div>
<div class="tab-pane fade" id="vim3" role="tabpanel" aria-labelledby="vim3-tab">

**AOBUS**

1. 获取`Banks`

```sh
root@Khadas:/home/khadas# cat /sys/kernel/debug/pinctrl/pinctrl@ff800014/gpio-ranges
GPIO ranges handled:
0: aobus-banks GPIOS [496 - 511] PINS [0 - 15]
```

AOBUS的`Banks`就为496

2. 获取`Pins`

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

每个GPIO前面的pin代表的就是对应的`Pins`

**Periphs**

1. 获取`Banks`

```sh
root@Khadas:/home/khadas# cat /sys/kernel/debug/pinctrl/pinctrl@ff634480/gpio-ranges
GPIO ranges handled:
0: periphs-banks GPIOS [410 - 495] PINS [0 - 85]
```

Periphs的`Banks`就是410

2. 获取`Pins`

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
3. 计算Number

这里以GPIOX_10为例，

`GPIOX_10 = Banks + Pins = 410 + 76 = 486`

</div>
<div class="tab-pane fade" id="vim4" role="tabpanel" aria-labelledby="vim4-tab">

1. 获取`Banks`

```sh
root@Khadas:/home/khadas# cat /sys/kernel/debug/pinctrl/fe000000.apb4\:pinctrl\@4000-pinctrl-meson/gpio-ranges
GPIO ranges handled:
0: periphs-banks GPIOS [355 - 511] PINS [0 - 156]
```

2. 获取`Pins`

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

3. 计算Number

这里以GPIOT_19为例，

`GPIOT_19 = Banks + Pins = 355 + 110 = 465`

</div>
</div>

## GPIO使用示例

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

这里使用GPIODV24读取GPIODV25的引脚输出值,使用杜邦线将物理引脚的22和23连接在一起。

1. 将GPIODV24和GPIODV25设置为普通引脚(默认复用为i2c)

修改`/boot/env.txt`,

```sh
root@Khadas:/home/khadas# vim /boot/env.txt
```

从overlays中移除i2c3，

```
overlays=uart4 pwm_ao_a pwm_f i2c0 i2s watchdog --> overlays=uart4 pwm_ao_a pwm_f i2s watchdog
```

重启，让配置生效。

2. 计算GPIO数值：

`GPIODV_24 = 401 + 72 = 473`
`GPIODV_25 = 401 + 73 = 474`

3. 设置`GPIODV_24`为读模式

* 申请GPIO

```sh
root@Khadas:/home/khadas# echo 473 > /sys/class/gpio/export
```

* 设置成读模式

```sh
root@Khadas:/home/khadas# echo in > /sys/class/gpio/gpio473/direction
```

4. 设置`GPIODV_25`为写模式

* 申请GPIO

```sh
root@Khadas:/home/khadas# echo 474 > /sys/class/gpio/export
```

* 设置成写模式

```sh
root@Khadas:/home/khadas# echo out > /sys/class/gpio/gpio474/direction
```

5. 测试

* 设置`GPIODV_25`输出高电平并用`GPIODV_24`读取

```sh
root@Khadas:/home/khadas# echo 1 > /sys/class/gpio/gpio474/value
root@Khadas:/home/khadas# cat /sys/class/gpio/gpio473/value
1
```

* 设置`GPIODV_25`为低电平并用`GPIODV_24`读取

```sh
root@Khadas:/home/khadas# echo 0 > /sys/class/gpio/gpio474/value
root@Khadas:/home/khadas# cat /sys/class/gpio/gpio473/value
0
```
</div>
<div class="tab-pane fade" id="vim2demo" role="tabpanel" aria-labelledby="vim2-tab">

这里使用GPIODV24读取GPIODV25的引脚输出值,使用杜邦线将物理引脚的22和23连接在一起。

1. 将GPIODV24和GPIODV25设置为普通引脚(默认复用为i2c)

修改`/boot/env.txt`,

```sh
root@Khadas:/home/khadas# vim /boot/env.txt
```

从overlays中移除i2c3，

```
overlays=uart4 pwm_ao_a pwm_f i2c0 i2s watchdog --> overlays=uart4 pwm_ao_a pwm_f i2s watchdog
```

重启，让配置生效。

2. 计算GPIO数值：

`GPIODV_24 = 401 + 72 = 473`
`GPIODV_25 = 401 + 73 = 474`

3. 设置`GPIODV_24`为读模式

* 申请GPIO

```sh
root@Khadas:/home/khadas# echo 473 > /sys/class/gpio/export
```

* 设置成读模式

```sh
root@Khadas:/home/khadas# echo in > /sys/class/gpio/gpio473/direction
```

4. 设置`GPIODV_25`为写模式

* 申请GPIO

```sh
root@Khadas:/home/khadas# echo 474 > /sys/class/gpio/export
```

* 设置成写模式

```sh
root@Khadas:/home/khadas# echo out > /sys/class/gpio/gpio474/direction
```

5. 测试

* 设置`GPIODV_25`输出高电平并用`GPIODV_24`读取

```sh
root@Khadas:/home/khadas# echo 1 > /sys/class/gpio/gpio474/value
root@Khadas:/home/khadas# cat /sys/class/gpio/gpio473/value
1
```

* 设置`GPIODV_25`为低电平并用`GPIODV_24`读取

```sh
root@Khadas:/home/khadas# echo 0 > /sys/class/gpio/gpio474/value
root@Khadas:/home/khadas# cat /sys/class/gpio/gpio473/value
0
```

</div>
<div class="tab-pane fade" id="vim3demo" role="tabpanel" aria-labelledby="vim3-tab">

这里使用GPIOA14读取GPIOA15的引脚输出值,使用杜邦线将物理引脚的22和23连接在一起。

1. 将GPIOA14和GPIOA15设置为普通引脚(默认复用为i2c)

修改`/boot/env.txt`,

```sh
root@Khadas:/home/khadas# vim /boot/env.txt
```

从overlays中移除i2c3，

```
overlays=uart3 pwm_f i2c3 i2s os08a10 watchdog --> overlays=uart3 pwm_f i2s os08a10 watchdog
```

重启，让配置生效。

2. 计算GPIO数值：

`GPIOA_14 = 410 + 65 = 474`
`GPIOA_15 = 410 + 65 = 475`

3. 设置`GPIOA_14`为读模式

* 申请GPIO

```sh
root@Khadas:/home/khadas# echo 474 > /sys/class/gpio/export
```

* 设置成读模式

```sh
root@Khadas:/home/khadas# echo in > /sys/class/gpio/gpio474/direction
```

4. 设置`GPIOA_15`为写模式

* 申请GPIO

```sh
root@Khadas:/home/khadas# echo 475 > /sys/class/gpio/export
```

* 设置成写模式

```sh
root@Khadas:/home/khadas# echo out > /sys/class/gpio/gpio475/direction
```

5. 测试

* 设置`GPIOA_15`输出高电平并用`GPIOA_14`读取

```sh
root@Khadas:/home/khadas# echo 1 >  /sys/class/gpio/gpio475/value
root@Khadas:/home/khadas# cat /sys/class/gpio/gpio474/value
1
```

* 设置`GPIOA_15`为低电平并用`GPIOA_14`读取

```sh
root@Khadas:/home/khadas# echo 0 >  /sys/class/gpio/gpio475/value
root@Khadas:/home/khadas# cat /sys/class/gpio/gpio474/value
0
```
</div>
<div class="tab-pane fade" id="vim4demo" role="tabpanel" aria-labelledby="vim4-tab">

这里使用GPIOT_18读取GPIOT_19的引脚输出值,使用杜邦线将物理引脚的36和37连接在一起。


1. 计算引脚值:

`GPIOT_18 = 355 + 109 = 464`
`GPIOT_19 = 355 + 110 = 465`

2. 设置`GPIOT_18`为读模式

* 申请GPIO

```sh
root@Khadas:/home/khadas# echo 464 > /sys/class/gpio/export
```

* 设置为读模式

```sh
root@Khadas:/home/khadas# echo in > /sys/class/gpio/gpio464/direction
```

3. 设置`GPIOT_19`为写模式

* 申请GPIO

```sh
root@Khadas:/home/khadas# echo 465 > /sys/class/gpio/export
```

* 设置为写模式

```sh
root@Khadas:/home/khadas# echo out > /sys/class/gpio/gpio465/direction
```

4. 测试哦

* 设置`GPIOT_19`为高电平并通过`GPIOT_18`读取

```sh
root@Khadas:/home/khadas# echo 1 >  /sys/class/gpio/gpio465/value
root@Khadas:/home/khadas# cat /sys/class/gpio/gpio464/value
1
```

* 设置`GPIOT_19`为低电平并通过`GPIOT_18`读取

```sh
root@Khadas:/home/khadas# echo 0 >  /sys/class/gpio/gpio465/value
root@Khadas:/home/khadas# cat /sys/class/gpio/gpio464/value
0
```
</div>
</div>

