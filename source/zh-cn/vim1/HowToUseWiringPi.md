title: 如何使用WiringPi
---

### 什么是 WiringPi
WiringPi 是一个基于C语言的GPIO引脚控制库。原本是开发被运用于树莓派上，现在我们移植到了VIMs上。可以通过WiringPi控制板子上40pin的引脚。

### 开始使用wiringPi
#### 控制命令

* 运行 `gpio -h`, 你可以看到所有可以关于WiringPi的相关的命令
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
* 运行 `gpio readall`, 可以看到所有引脚相关的状态和信息
你会看到一个有很多栏目的表格，下面是主要栏目的注解
```
GPIO  --> GPIO的实际引脚
wPi   --> WiringPi引脚值
Mode  --> 引脚的模式 ,`ALT`说明引脚已经被配置成特殊的功能
V     --> 1表示引脚是高电平，0表示引脚是低电平
PU/PD --> PU:上拉 PD:下拉 DSBLD:已关闭上下拉
```
#### 通过命令行控制
这里的简单例子是通过wpi的1号引脚实现的。
* 运行 `gpio mode 1 out`
wpi的1号引脚被设置成了输出模式。
* 运行 `gpio read 1`
```
root@Khadas:~# gpio read 1
1
```
* 运行 `gpio write 1 0` 改变引脚的输出值
* 再次运行 `gpio read 1` 
```
root@Khadas:~# gpio read 1   
0
```
你可看到将引脚设置成输出后，就可以通过写命令改变引脚的电平值了。

#### 通过编写linuxC程序控制GPIO
* 这里同样是一个控制GPIO1的简单程序。
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
* 通过gcc可以编译成可执行的程序。编译的命令是 `gcc -o test test.c -lwiringPi -lpthread -lrt -lm -lcrypt`.
* 运行 `./test` 就可以控制wpi的1号引脚了
```
wPi Pin 1 now is GIGH
wPi Pin 1 now is LOW
wPi Pin 1 now is GIGH
wPi Pin 1 now is LOW
```
你可以通过命令`gpio read 1`观察引脚的电平变化是否正确。

### WiringPi特殊功能引脚
wiringPi的特殊引脚功能包括`SPI,i2C,ADC,SoftPWM`

#### SPI

由于`VIM1`,`VIM2`没有将`SPI`引出到GPIO的Pin40上，所以`SPI`只支持`VIM3`,物理引脚与SPI功能的对应引脚
```
PIN37 <---> MOSI
PIN35 <---> MISO
PIN15 <---> SS
PIN16 <---> SCLK
```

#### I2C
`VIM1`,`VIM2`使用的是`i2c0`,`VIM3`使用`i2c3`,物理引脚连接如下:
```
PIN22 <---> SCK
PIN23 <---> SDA
```
#### ADC
`VIM1`,`VIM2`使用`ADC`的`通道0`和`通道2`,`VIM3`使用`通道0`和`通道3`,物理引脚连接如下:
```
PIN10 <---> ADC_CH0
PIN12 <---> ADC_CH2后者ADC_CH3
```
#### Serial
使用之前请先确认串口节点名称
```
PIN15 <---> RX
PIN16 <---> TX
```


### wiringPi函数列表
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

### 注意
如果需要使用wiringPi的特殊功能引脚，需要先确认dtb里面打开了相应的配置
wiringPi本身包括很多功能，不仅仅只是控制GPIO引脚的输出和读取引脚电平值。这里只是一个简单的介绍和使用，更多的用法需要使用者自己去探索。
