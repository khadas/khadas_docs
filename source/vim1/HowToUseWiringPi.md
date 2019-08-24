title: How To Use WiringPi
---

### What is WiringPi
WiringPi is a GPIO Controller basic on C Program.Originally a library for Raspberry Pie.Now we have migrated to VIMs.You can control the 40 pin header by it.

### Begin to Use WiringPi
#### Control command

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
#### Control by command
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

#### Control by Linux C program
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

### notes
WiringPi itself includes many functions, not just controlling the output of GPIO pins and reading pin levels. Here is only a simple introduction and use, more use needs to be explored by users themselves.
