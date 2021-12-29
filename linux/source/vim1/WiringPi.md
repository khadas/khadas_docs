title: WiringPi
---

## What is WiringPi
WiringPi is a GPIO Controller basic on C Program.Originally a library for Raspberry Pie.Now we have migrated to VIMs.You can control the 40 pin header by it.

## Begin to Use WiringPi
### Control command

* run `gpio -h`, you can see all the control command with WiringPi.
```
gpio: Usage: gpio -v
gpio -h
gpio [-g|-1] ...
gpio [-d] ...
[-x extension:params] [[ -x ...]] ...
gpio [-p] <read/write/wb> ...
gpio <mode/read/write/aread/awritewb/pwm/pwmTone/clock> ...
gpio <toggle/blink> <pin>
gpio readall
gpio unexportall/exports
gpio export/edge/unexport ...
gpio wfi <pin> <mode>
gpio drive <group> <value>
gpio pwm-bal/pwm-ms 
gpio pwmr <range> 
gpio pwmc <divider> 
gpio load spi/i2c
gpio unload spi/i2c
gpio i2cd/i2cdetect
gpio rbx/rbd
gpio wb <value>
gpio usbp high/low
gpio gbr <channel>
gpio gbw <channel> <value>
```

* run `gpio readall`, It prints a table showing the status of all pins.
You will see a table with many columns.
```
GPIO  --> GPIO native number
wPi   --> WiringPi number
Mode  --> GPIO Mode ,`ALT` mean that this  pin defined as a special function
v     --> 1:HIGH 0:low 
PU/PD --> PU:pull up PD:pull down DSBLD:disabled PU/PD
```
### Control by command
Here's an example of controlling wpi number 1.
* run `gpio mode 1 out`
Now, The wpi number 1 mode is out.
* run `gpio read 1`
```
root@Khadas:~# gpio read 1 
1
```
* run `gpio write 1 0` to change the pinout level
* run `gpio read 1` again
```
root@Khadas:~# gpio read 1   
0
```
you can see the wpi number 1 Output changed from high to low.

### Control by Linux C program
* Here is a simple control program.
```
#include <stdio.h>
#include <wiringPi.h>

const int gpio_pin = 1;

int main()
{
	if(-1 == wiringPiSetup()){
		printf("set up error");
		exit(1);
	}

	pinMode(gpio_pin,OUTPUT);

	while(1){
		digitalWrite(gpio_pin,HIGH);
		printf("wPi Pin %d now is GIGH\n",gpio_pin);
		delay(5000);
		digitalWrite(gpio_pin,LOW);
		printf("wPi Pin %d now is LOW\n",gpio_pin);
		delay(5000);
	}

	exit(0);
}
```
* And you can use gcc to compile it .here is the compile command `gcc -o test test.c -lwiringPi -lpthread -lrt -lm -lcrypt`.
* run `./test` to control wpi number 1
```
wPi Pin 1 now is GIGH
wPi Pin 1 now is LOW
wPi Pin 1 now is GIGH
wPi Pin 1 now is LOW
```
you can use `gpio read 1` to observing pin level changes.

## Special pin functions of wiringpi
Special pin functions of wiringpi include`SPI,i2C,ADC,SoftPWM`
 
### SPI 

`VIM1`and`vim2` don't export `SPI` to pin40 of GPIO。

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

Please confirm the node name for Serial before using

```
PIN15 <---> RX
PIN16 <---> TX
```

## WiringPi Function List

```
int  wiringPiSetup       (void) ;
int  wiringPiSetupSys    (void) ;
int  wiringPiSetupGpio   (void) ;
int  wiringPiSetupPhys   (void) ;
void pinModeAlt          (int pin, int mode) ;
void pinMode             (int pin, int mode) ;
void pullUpDnControl     (int pin, int pud) ;
int  digitalRead         (int pin) ;
void digitalWrite        (int pin, int value) ;
void pwmWrite            (int pin, int value) ;
int  analogRead          (int pin) ;
void analogWrite         (int pin, int value) ;
int  piGpioLayout        (void) ;
int  piBoardRev          (void) ;   // Deprecated
void piBoardId           (int *model, int *rev, int *mem, int *maker, int *overVolted) ;
int  wpiPinToGpio        (int wpiPin) ;
int  physPinToGpio       (int physPin) ;
void setPadDrive         (int group, int value) ;
int  getAlt              (int pin) ;
void pwmToneWrite        (int pin, int freq) ;
void pwmSetMode          (int mode) ;
void pwmSetRange         (unsigned int range) ;
void pwmSetClock         (int divisor) ;
void gpioClockSet        (int pin, int freq) ;
void delay               (unsigned int howLong) ;
void delayMicroseconds   (unsigned int howLong) ;
 
I2C:
int wiringPiI2CRead           (int fd) ;
int wiringPiI2CReadReg8       (int fd, int reg) ;
int wiringPiI2CReadReg16      (int fd, int reg) ;
int wiringPiI2CWrite          (int fd, int data) ;
int wiringPiI2CWriteReg8      (int fd, int reg, int data) ;
int wiringPiI2CWriteReg16     (int fd, int reg, int data) ;
int wiringPiI2CSetupInterface (const char *device, int devId) ;
int wiringPiI2CSetup          (const int devId) ;
 
SPI:
int wiringPiSPIGetFd     (int channel) ;
int wiringPiSPIDataRW    (int channel, unsigned char *data, int len) ;
int wiringPiSPISetupMode (int channel, int speed, int mode) ;
int wiringPiSPISetup     (int channel, int speed) ;

Serial:
int   serialOpen      (const char *device, const int baud) ;
void  serialClose     (const int fd) ;
void  serialFlush     (const int fd) ;
void  serialPutchar   (const int fd, const unsigned char c) ;
void  serialPuts      (const int fd, const char *s) ;
void  serialPrintf    (const int fd, const char *message, ...) ;
int   serialDataAvail (const int fd) ;
int   serialGetchar   (const int fd) ;

softPwm:
int  softPwmCreate (int pin, int value, int range) ;
void softPwmWrite  (int pin, int value) ;
void softPwmStop   (int pin) ;

```

## notes

If you need to use the special function pin of wiringPi-Python, you need to confirm that the corresponding configuration is opened in DTB.

WiringPi itself includes many functions, not just controlling the output of GPIO pins and reading pin levels. Here is only a simple introduction and use, more use needs to be explored by users themselves.
