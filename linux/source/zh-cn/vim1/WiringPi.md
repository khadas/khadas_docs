title: WiringPi
---

这篇文档主要介绍如何使用WiringPi。

## 什么是 WiringPi

WiringPi 是一个基于C语言的GPIO引脚控制库。原本是开发被运用于树莓派上，现在我们移植到了VIMs上。你可以通过WiringPi来控制板子上`40-PIN`排针管脚。

## 开始使用WiringPi

### 控制命令

* 获取管脚信息

运行 `gpio readall`, 可以看到所有引脚相关的状态和信息。


`GPIO`  --> GPIO的实际引脚
`wPi`   --> WiringPi引脚值
`Mode`  --> 引脚的模式，`ALT`说明引脚已经被配置成特殊的功能
`V`     --> 1表示引脚是高电平，0表示引脚是低电平
`PU/PD` --> PU：上拉 PD：下拉 DSBLD：已关闭上下拉

### 通过命令行控制

这里的简单例子是通过wpi的1号引脚实现的。

* 设置管脚为输出模式

```bash
$ sudo gpio mode 1 out
```

* 设置管脚输出值

```bash
$ gpio write 1 0
```

设置管脚输出低电平。

```bash
$ gpio write 1 1
```

设置管脚输出高电平。

### 通过编写Linux C程序控制GPIO

* 获取测试源码

```shell
$ wget https://dl.khadas.com/development/code/docs_source/wiringpi.c
```

* 编译

```bash
$ gcc -o wiringpi wiringpi.c -lwiringPi -lpthread -lrt -lm -lcrypt
```

* 测试

```bash
$ sudo ./wiringpi
wPi Pin 1 now is GIGH
wPi Pin 1 now is LOW
wPi Pin 1 now is GIGH
wPi Pin 1 now is LOW
```

你可以通过命令`gpio read 1`观察引脚的电平变化是否正确。

## WiringPi特殊功能引脚

WiringPi的特殊引脚功能包括`SPI`，`i2C`，`ADC`，`SoftPWM`。

### SPI

`VIM1`,`VIM2`没有将`SPI`引出到`40-PIN HEADERS`。

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="vim3-tab" data-toggle="tab" href="#vim3" role="tab" aria-controls="vim3" aria-selected="true">VIM3</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim4-tab" data-toggle="tab" href="#vim4" role="tab" aria-controls="vim4" aria-selected="false">VIM4</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="vim3" role="tabpanel" aria-labelledby="vim3-tab">

```shell
PIN37 <---> MOSI
PIN35 <---> MISO
PIN15 <---> SS
PIN16 <---> SCLK
```

</div>
<div class="tab-pane fade" id="vim4" role="tabpanel" aria-labelledby="vim4-tab">

```shell
PIN37 <---> MOSI
PIN35 <---> MISO
PIN26 <---> SS
PIN25 <---> SCLK
```

</div>
</div>

### I2C

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="vim1-tab" data-toggle="tab" href="#vim1-i2c" role="tab" aria-controls="vim1" aria-selected="true">VIM1</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim2-tab" data-toggle="tab" href="#vim2-i2c" role="tab" aria-controls="vim2" aria-selected="false">VIM2</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim3-tab" data-toggle="tab" href="#vim3-i2c" role="tab" aria-controls="vim3" aria-selected="false">VIM3</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim4-tab" data-toggle="tab" href="#vim4-i2c" role="tab" aria-controls="vim4" aria-selected="false">VIM4</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="vim1-i2c" role="tabpanel" aria-labelledby="vim1-tab">

**I2C0**
```shell
PIN22 <---> SCK
PIN23 <---> SDA
```

</div>
<div class="tab-pane fade" id="vim2-i2c" role="tabpanel" aria-labelledby="vim2-tab">

**I2C0**
```shell
PIN22 <---> SCK
PIN23 <---> SDA
```

</div>
<div class="tab-pane fade" id="vim3-i2c" role="tabpanel" aria-labelledby="vim3-tab">

**I2C3**
```shell
PIN22 <---> SCK
PIN23 <---> SDA
```

</div>
<div class="tab-pane fade" id="vim4-i2c" role="tabpanel" aria-labelledby="vim4-tab">

**I2C0**
```shell
PIN25 <---> SCK
PIN26 <---> SDA
```

</div>
</div>

### ADC

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="vim1-tab" data-toggle="tab" href="#vim1-adc" role="tab" aria-controls="vim1" aria-selected="true">VIM1</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim2-tab" data-toggle="tab" href="#vim2-adc" role="tab" aria-controls="vim2" aria-selected="false">VIM2</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim3-tab" data-toggle="tab" href="#vim3-adc" role="tab" aria-controls="vim3" aria-selected="false">VIM3</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim4-tab" data-toggle="tab" href="#vim4-adc" role="tab" aria-controls="vim4" aria-selected="false">VIM4</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="vim1-adc" role="tabpanel" aria-labelledby="vim1-tab">

```shell
PIN10 <---> ADC_CH0
PIN12 <---> ADC_CH2
```

</div>
<div class="tab-pane fade" id="vim2-adc" role="tabpanel" aria-labelledby="vim2-tab">

```shell
PIN10 <---> ADC_CH0
PIN12 <---> ADC_CH2
```

</div>
<div class="tab-pane fade" id="vim3-adc" role="tabpanel" aria-labelledby="vim3-tab">

```shell
PIN10 <---> ADC_CH0
PIN12 <---> ADC_CH3
```

</div>
<div class="tab-pane fade" id="vim4-adc" role="tabpanel" aria-labelledby="vim4-tab">

```shell
PIN10 <---> ADC_CH6
PIN12 <---> ADC_CH3
```

</div>
</div>

### Serial

使用之前请先确认串口节点名称：

```shell
PIN15 <---> RX
PIN16 <---> TX
```

## 注意
* 如果需要使用WiringPi的特殊功能引脚，需要先确认dts里面打开了相应的配置。
* WiringPi本身包括很多功能，不仅仅只是控制GPIO引脚的输出和读取引脚电平值。这里只是一个简单的介绍和使用，更多的用法需要使用者自己去探索。
