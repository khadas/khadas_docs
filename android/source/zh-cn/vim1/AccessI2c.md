title: I2C连接使用说明
---


这篇文档介绍如何在Android下使用I2C。

## 连线

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="vim1-tab" data-toggle="tab" href="#vim1-pins" role="tab" aria-controls="vim1" aria-selected="true">VIM1</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim2-tab" data-toggle="tab" href="#vim2-pins" role="tab" aria-controls="vim2" aria-selected="false">VIM2</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim3-tab" data-toggle="tab" href="#vim3-pins" role="tab" aria-controls="vim3" aria-selected="false">VIM3/VIM3L</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim4-tab" data-toggle="tab" href="#vim4-pins" role="tab" aria-controls="vim4" aria-selected="false">VIM4</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="vim1-pins" role="tabpanel" aria-labelledby="vim1-tab">

**I2C A**
`Sensor SCL` <-> `I2C_SCK_A (PIN 22)`
`Sensor SDA` <-> `I2C_SDA_A (PIN 23)`
`Sensor GND` <-> `GND`
`Sensor VCC` <-> `5V or 3.3V` //取决于传感器供电
**I2C B**
`Sensor SCL` <-> `I2C_SCK_B (PIN 25)`
`Sensor SDA` <-> `I2C_SDA_B (PIN 26)`
`Sensor GND` <-> `GND`
`Sensor VCC` <-> `5V or 3.3V` //取决于传感器供电
</div>
<div class="tab-pane fade" id="vim2-pins" role="tabpanel" aria-labelledby="vim2-tab">

**I2C A**
`Sensor SCL` <-> `I2C_SCK_A (PIN 22)`
`Sensor SDA` <-> `I2C_SDA_A (PIN 23)`
`Sensor GND` <-> `GND`
`Sensor VCC` <-> `5V or 3.3V` //取决于传感器供电
**I2C B**
`Sensor SCL` <-> `I2C_SCK_B (PIN 25)`
`Sensor SDA` <-> `I2C_SDA_B (PIN 26)`
`Sensor GND` <-> `GND`
`Sensor VCC` <-> `5V or 3.3V` //取决于传感器供电
</div>
<div class="tab-pane fade" id="vim3-pins" role="tabpanel" aria-labelledby="vim3-tab">

**I2C 3**
`Sensor SCL` <-> `I2C0_SCK (PIN 22)`
`Sensor SDA` <-> `I2C0_SDA (PIN 23)`
`Sensor GND` <-> `GND`
`Sensor VCC` <-> `5V or 3.3V` //取决于传感器供电
**I2C 4**
`Sensor SCL` <-> `I2C1_SCK (PIN 25)`
`Sensor SDA` <-> `I2C1_SDA (PIN 26)`
`Sensor GND` <-> `GND`
`Sensor VCC` <-> `5V or 3.3V` //取决于传感器供电
</div>
<div class="tab-pane fade" id="vim4-pins" role="tabpanel" aria-labelledby="vim4-tab">

**I2C F**
`Sensor SCL` <-> `I2C0_SCK (PIN 22)`
`Sensor SDA` <-> `I2C0_SDA (PIN 23)`
`Sensor GND` <-> `GND`
`Sensor VCC` <-> `5V or 3.3V` //取决于传感器供电
**I2C A**
`Sensor SCL` <-> `I2C1_SCK (PIN 25)`
`Sensor SDA` <-> `I2C1_SDA (PIN 26)`
`Sensor GND` <-> `GND`
`Sensor VCC` <-> `5V or 3.3V` //取决于传感器供电
</div>
</div>

## 检测设备

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#vim1" role="tab" aria-controls="vim1" aria-selected="true">VIM1</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#vim2" role="tab" aria-controls="vim2" aria-selected="false">VIM2</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#vim3" role="tab" aria-controls="vim3" aria-selected="false">VIM3/VIM3L</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#vim4" role="tab" aria-controls="vim4" aria-selected="false">VIM4</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="vim1" role="tabpanel" aria-labelledby="vim1-tab">

Detect device on `I2C A`:

```bash
# i2cdetect -y -r 1
    0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:          -- -- -- -- -- -- -- -- -- -- -- -- --
10: -- -- -- -- -- -- -- -- -- -- -- -- -- 1d -- --
20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
70: -- -- -- -- -- -- -- --
```
Detect device on `I2C B`:

```bash
# i2cdetect -y -r 2
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:          -- -- -- -- -- -- -- -- -- -- -- -- --
10: -- -- -- -- -- -- -- -- UU -- -- -- -- -- -- --
20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
50: -- 51 -- -- -- -- -- -- -- -- -- -- -- -- -- --
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
70: -- -- -- -- -- -- -- --

```
如果连线正确并且所接传感器是正常的那么你会看到所接设备的地址，如：`0x1d`,`0x18` and `0x51`。
</div>
<div class="tab-pane fade" id="vim2" role="tabpanel" aria-labelledby="vim2-tab">

Detect device on `I2C A`:

```bash
# i2cdetect -y -r 1
    0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:          -- -- -- -- -- -- -- -- -- -- -- -- --
10: -- -- -- -- -- -- -- -- -- -- -- -- -- 1d -- --
20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
70: -- -- -- -- -- -- -- --
```
Detect device on `I2C B`:

```bash
# i2cdetect -y -r 2
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:          -- -- -- -- -- -- -- -- -- -- -- -- --
10: -- -- -- -- -- -- -- -- UU -- -- -- -- -- -- --
20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
50: -- 51 -- -- -- -- -- -- -- -- -- -- -- -- -- --
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
70: -- -- -- -- -- -- -- --

```
如果连线正确并且所接传感器是正常的那么你会看到所接设备的地址，如：`0x1d`,`0x18` and `0x51`。
</div>
<div class="tab-pane fade" id="vim3" role="tabpanel" aria-labelledby="vim3-tab">

Detect device on `I2C 3`:

```bash
# i2cdetect -y -r 3
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:          -- -- -- -- -- -- -- -- -- -- -- -- --
10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
70: -- -- -- -- -- -- -- --
```
Detect device on `I2C 4`:

```bash
# i2cdetect -y -r 4
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:          -- -- -- -- -- -- -- -- -- -- -- 0e --
10: -- -- -- -- -- -- -- -- UU -- -- -- -- -- -- --
20: UU -- 22 -- -- -- -- -- -- -- -- -- -- -- -- --
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
50: -- UU -- -- -- -- -- -- -- -- -- -- -- -- -- --
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
70: -- -- -- -- -- -- -- --
```
如果连线正确并且所接传感器是正常的那么你会看到所接设备的地址，如：`0x0e` and `0x22`。
</div>
<div class="tab-pane fade" id="vim4" role="tabpanel" aria-labelledby="vim4-tab">

Detect device on `I2C A`:

```bash
# i2cdetect -y 0
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:          -- -- -- -- -- -- -- -- -- -- -- -- --
10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
70: -- -- -- -- -- -- -- --
```
Detect device on `I2C F`:

```bash
# i2cdetect -y 5
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:          -- -- -- -- -- -- -- -- -- -- -- -- --
10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
60: -- -- UU -- -- -- -- -- -- -- -- -- -- -- -- --
70: -- -- -- -- -- -- -- --
```
</div>
</div>

{% note warn 注意 %}
	
执行这些命令需要root权限。

{% endnote %}

## 从设备读取寄存器值

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="vim1-i2cget-tab" data-toggle="tab" href="#vim1-i2cget" role="tab" aria-controls="vim1" aria-selected="true">VIM1</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim2-i2cget-tab" data-toggle="tab" href="#vim2-i2cget" role="tab" aria-controls="vim2" aria-selected="false">VIM2</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim3-i2cget-tab" data-toggle="tab" href="#vim3-i2cget" role="tab" aria-controls="vim3" aria-selected="false">VIM3/VIM3L</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim4-i2cget-tab" data-toggle="tab" href="#vim4-i2cget" role="tab" aria-controls="vim4" aria-selected="false">VIM4</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="vim1-i2cget" role="tabpanel" aria-labelledby="vim1-tab">

从挂载在`I2C A`上设备地址为`0x1d`的设备读取寄存器`0x0d`的值。

```bash
# i2cget -f -y 1 0x1d 0x0d
```
</div>
<div class="tab-pane fade" id="vim2-i2cget" role="tabpanel" aria-labelledby="vim2-tab">

从挂载在`I2C A`上设备地址为`0x1d`的设备读取寄存器`0x0d`的值。

```bash
# i2cget -f -y 1 0x1d 0x0d
```
</div>
<div class="tab-pane fade" id="vim3-i2cget" role="tabpanel" aria-labelledby="vim3-tab">

从挂载在`I2C 3`上设备地址为`0x1d`的设备读取寄存器`0x0d`的值。

```bash
# i2cget -f -y 3 0x1d 0x0d
```
</div>
<div class="tab-pane fade" id="vim4-i2cget" role="tabpanel" aria-labelledby="vim4-tab">

从挂载在`I2C A`上设备地址为`0x1d`的设备读取寄存器`0x0d`的值。
```bash
# i2cget -y 0 0x1d 0x0d
```
</div>
</div>

{% note warn 注意 %}

注意: 执行命令需要root权限。

{% endnote %}

更多用法请参考i2c工具帮助信息。
