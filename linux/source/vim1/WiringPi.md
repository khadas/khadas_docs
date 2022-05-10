title: WiringPi
---

This documentation will introduce how to use WiringPi.

## What is WiringPi

WiringPi is a C++ library for Raspberry Pi. With this library you can use many of the functionalities provided by the GPIO header: `digital pins`, `SPI`, `I2C`, `UART`, etc.
We have ported this library to also work with Khadas SBCs, and you can use it to control the `40-PIN HEADER`.

## Using WiringPi

### Command Usage

* Get GPIO information

Run `gpio readall` in the Terminal, and it will print a table about the status of all GPIO pins.

`GPIO`  --> GPIO native number
`wPi`   --> WiringPi number
`Mode`  --> GPIO Mode ,`ALT` mean that this  pin defined as a special function
`v`     --> 1:HIGH 0:low 
`PU/PD` --> PU:pull up PD:pull down DSBLD:disabled PU/PD

Here's an example of controlling wpi number 1.

* Set GPIO output

```bash
$ sudo gpio mode 1 out
```

* Set output value

```bash
$ gpio write 1 0
```

Set GPIO output low.

```bash
$ gpio write 1 1
```

Set GPIO output high.

### C Program Usage

* Get demo source code

```sh
$ wget https://dl.khadas.com/development/code/docs_source/wiringpi.c
```

* Compile

```bash
$ gcc -o wiringpi wiringpi.c -lwiringPi -lpthread -lrt -lm -lcrypt
```

* Test

```bash
$ sudo ./wiringpi
wPi Pin 1 now is GIGH
wPi Pin 1 now is LOW
wPi Pin 1 now is GIGH
wPi Pin 1 now is LOW
```
You can use `gpio read 1` to observe the pin level changes.

## Special Pin Functions of WiringPi

Special pin functions of wiringpi include`SPI`,`I2C`,`ADC`,`SoftPWM`.
 
### SPI 

**Note:** `VIM1`and`VIM2` do not provide access to `SPI` on the `40-PIN HEADER`.

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

```
PIN37 <---> MOSI
PIN35 <---> MISO
PIN15 <---> SS
PIN16 <---> SCLK
```

</div>
<div class="tab-pane fade" id="vim4" role="tabpanel" aria-labelledby="vim4-tab">

```
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
```
PIN22 <---> SCK
PIN23 <---> SDA
```

</div>
<div class="tab-pane fade" id="vim2-i2c" role="tabpanel" aria-labelledby="vim2-tab">

**I2C0**
```
PIN22 <---> SCK
PIN23 <---> SDA
```

</div>
<div class="tab-pane fade" id="vim3-i2c" role="tabpanel" aria-labelledby="vim3-tab">

**I2C3**
```
PIN22 <---> SCK
PIN23 <---> SDA
```

</div>
<div class="tab-pane fade" id="vim4-i2c" role="tabpanel" aria-labelledby="vim4-tab">

**I2C0**

```
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

```
PIN10 <---> ADC_CH0
PIN12 <---> ADC_CH2
```

</div>
<div class="tab-pane fade" id="vim2-adc" role="tabpanel" aria-labelledby="vim2-tab">

```
PIN10 <---> ADC_CH0
PIN12 <---> ADC_CH2
```

</div>
<div class="tab-pane fade" id="vim3-adc" role="tabpanel" aria-labelledby="vim3-tab">

```
PIN10 <---> ADC_CH0
PIN12 <---> ADC_CH3
```

</div>
<div class="tab-pane fade" id="vim4-adc" role="tabpanel" aria-labelledby="vim4-tab">

```
PIN10 <---> ADC_CH6
PIN12 <---> ADC_CH3
```

</div>
</div>

### Serial

Check which nodes are used for serial.

```
PIN15 <---> RX
PIN16 <---> TX
```

## Note

* If you need to use the special pin functions of wiringPi-Python, you'll need to confirm that the corresponding configuration is enabled in the dts file.

* WiringPi includes many functions, not limited to just controlling the output of GPIO pins and reading pin levels. This is only a simple introduction, and you can explore more by yourself.
