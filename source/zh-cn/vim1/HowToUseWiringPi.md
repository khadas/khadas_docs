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

### 注意
wiringPi本身包括很多功能，不仅仅只是控制GPIO引脚的输出和读取引脚电平值。这里只是一个简单的介绍和使用，更多的用法需要使用者自己去探索。
