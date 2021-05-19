title: How To Access I2C
---


This guide is about how to access i2c on Ubuntu and Android.

## Preconditions

* `Ubuntu V180531` or newer
* `Android V180619` or newer

## Connections

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
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="vim1-pins" role="tabpanel" aria-labelledby="vim1-tab">

**I2C A**
`Sensor SCL` <-> `I2C_SCK_A (PIN 22)`
`Sensor SDA` <-> `I2C_SDA_A (PIN 23)`
`Sensor GND` <-> `GND`
`Sensor VCC` <-> `5V or 3.3V` //depends on your sensor
**I2C B**
`Sensor SCL` <-> `I2C_SCK_B (PIN 25)`
`Sensor SDA` <-> `I2C_SDA_B (PIN 26)`
`Sensor GND` <-> `GND`
`Sensor VCC` <-> `5V or 3.3V` //depends on your sensor
</div>
<div class="tab-pane fade" id="vim2-pins" role="tabpanel" aria-labelledby="vim2-tab">

**I2C A**
`Sensor SCL` <-> `I2C_SCK_A (PIN 22)`
`Sensor SDA` <-> `I2C_SDA_A (PIN 23)`
`Sensor GND` <-> `GND`
`Sensor VCC` <-> `5V or 3.3V` //depends on your sensor
**I2C B**
`Sensor SCL` <-> `I2C_SCK_B (PIN 25)`
`Sensor SDA` <-> `I2C_SDA_B (PIN 26)`
`Sensor GND` <-> `GND`
`Sensor VCC` <-> `5V or 3.3V` //depends on your sensor
</div>
<div class="tab-pane fade" id="vim3-pins" role="tabpanel" aria-labelledby="vim3-tab">

**I2C 3**
`Sensor SCL` <-> `I2C0_SCK (PIN 22)`
`Sensor SDA` <-> `I2C0_SDA (PIN 23)`
`Sensor GND` <-> `GND`
`Sensor VCC` <-> `5V or 3.3V` //depends on your sensor
**I2C 4**
`Sensor SCL` <-> `I2C1_SCK (PIN 25)`
`Sensor SDA` <-> `I2C1_SDA (PIN 26)`
`Sensor GND` <-> `GND`
`Sensor VCC` <-> `5V or 3.3V` //depends on your sensor
</div>
</div>

## Detect the device

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
</div>
</div>

If you have the right connection you will see the device address, e.g: `0x1d`,`0x18` and `0x51`.

{% note warn Note %}

Root privileges required.

{% endnote %}

## Read register from device

Read register `0x0d` of device `0x1d` on `I2C A`.

```bash
# i2cget -f -y 1 0x1d 0x0d
0x2a
```

{% note warn Note %}

Note: Root privileges required.

{% endnote %}

For more, please refer to the help messages.
