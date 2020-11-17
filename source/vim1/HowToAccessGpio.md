title: How To Access GPIO
---

This guide is about how to access the GPIO using Android and Ubuntu.

### Preconditions
The ROM must satisfy the following conditions:
```
* Android M     >= V170603
* Android N     >= V170421
* Ubuntu Server >= V180712
* Ubuntu Mate   >= V180531
```
### How to Get the GPIO Number
You can get the GPIO number from GPIO Banks or Pins. Different versions of kernel will be different.

* Linux 3.14 (Android M, N and Ubuntu)

Banks:
```
# cat /sys/kernel/debug/pinctrl/c1109880.pinmux/gpio-ranges

GPIO ranges handled:
0: banks GPIOS   [155 - 255] PINS [10 - 110]
0: ao-bank GPIOS [145 - 154] PINS [ 0 -   9]

Notice: ao-bank means GPIOAO_X gpios
```

Pins:
```
# cat /sys/kernel/debug/pinctrl/c1109880.pinmux/pins
...
pin 5 (GPIOAO_5) 
pin 6 (GPIOAO_6) 
...
pin 28 (GPIOH_2) 
pin 29 (GPIOH_3) 
pin 30 (GPIOH_4) 
pin 31 (GPIOH_5) 
pin 32 (GPIOH_6) 
pin 33 (GPIOH_7) 
pin 34 (GPIOH_8) 
pin 35 (GPIOH_9) 
...
```

For example, get the number of `GPIOH_4`, `GPIOH_5` and `GPIOAO_6`.
```
Number(GPIOH_5)  = bank + pin = 155 - 10 + 31 = 176
Number(GPIOH_4)  = bank + pin = 155 - 10 + 30 = 175
Number(GPIOAO_6) = bank + pin = 145 -  0 +  6 = 151
```

* Linux 4.9 (Android O and Ubuntu)

`aobus-banks`:
Banks:
```
root@Khadas:/home/khadas# cat /sys/kernel/debug/pinctrl/pinctrl@ff800014/gpio-ranges
GPIO ranges handled:
0: aobus-banks GPIOS [496 - 511] PINS [0 - 15]
```
Pins:
```
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

For example, get the number of `GPIOAO_6`:
Number(GPIOAO_6) = bank + pin = 496 + 6 = 502

`periphs-banks`:
Banks:
```
root@Khadas:/home/khadas# cat /sys/kernel/debug/pinctrl/pinctrl@ff634480/gpio-ranges
GPIO ranges handled:
0: periphs-banks GPIOS [410 - 495] PINS [0 - 85]
```
Pins:
```shell
root@Khadas:/home/khadas# cat /sys/kernel/debug/pinctrl/pinctrl@ff634480/pins
registered pins: 86
pin 0 (GPIOV_0)  pinctrl@ff634480
pin 1 (GPIOZ_0)  pinctrl@ff634480
pin 2 (GPIOZ_1)  pinctrl@ff634480
pin 3 (GPIOZ_2)  pinctrl@ff634480
pin 4 (GPIOZ_3)  pinctrl@ff634480
pin 5 (GPIOZ_4)  pinctrl@ff634480
...
pin 17 (GPIOH_0)  pinctrl@ff634480
pin 18 (GPIOH_1)  pinctrl@ff634480
pin 19 (GPIOH_2)  pinctrl@ff634480
pin 20 (GPIOH_3)  pinctrl@ff634480
pin 21 (GPIOH_4)  pinctrl@ff634480
pin 22 (GPIOH_5)  pinctrl@ff634480
pin 23 (GPIOH_6)  pinctrl@ff634480
pin 24 (GPIOH_7)  pinctrl@ff634480
...
pin 80 (GPIOX_14)  pinctrl@ff634480
pin 81 (GPIOX_15)  pinctrl@ff634480
pin 82 (GPIOX_16)  pinctrl@ff634480
pin 83 (GPIOX_17)  pinctrl@ff634480
pin 84 (GPIOX_18)  pinctrl@ff634480
pin 85 (GPIOX_19)  pinctrl@ff634480
```

For example, get the number of `GPIOH_5`:
Number(GPIOH_5) = bank + pin = 410 + 22 = 432

### On Android

** GPIO List **

```
PIN         GPIO         Number
PIN37       GPIOH5       432
PIN33       GPIOAO6      502
```

There are two ways to access the GPIO:

* ADB Command
* Third-Party Applications 

** ADB command **

> Connect the VIMs with a wifi adb:
```
$ adb connect IP_ADDR 
```
> Login to the VIMs:
```
$ adb shell
```
> Get root permision
```
$ su
```
> Request the gpio(GPIOH5)
```
$ echo 432  > /sys/class/gpio/export
```
> Config the gpio(GPIOH5) as  output
```
$ echo out > /sys/class/gpio/gpio432/direction
```
> Config the gpio(GPIOH5) as high level output
```
$ echo 1 >  /sys/class/gpio/gpio432/value
```
> Config  the gpio(GPIOH5) as low level output
```
$ echo 0 >  /sys/class/gpio/gpio432/value
```
> Config the gpio(GPIOH5) as input
```
$ echo in > /sys/class/gpio/gpio432/direction
```
> Get the gpio(GPIOH5) level
```
$ cat /sys/class/gpio/gpio432/value
```
> Release the gpio(GPIOH5)
```
$ echo 432 > /sys/class/gpio/unexport
```

** Third-Party Applications **

> Get root permision
```
Process mProcess = Runtime.getRuntime().exec("su");
```
> Request the gpio(GPIOH5)
```
DataOutputStream os = new DataOutputStream(mProcess.getOutputStream());
os.writeBytes("echo " + 432 + " > /sys/class/gpio/export\n");
```
> Config the gpio(GPIOH5) as high level output
```
os.writeBytes("echo out > /sys/class/gpio/gpio" + 432 + "/direction\n");
os.writeBytes("echo 1 > /sys/class/gpio/gpio" + 432 + "/value\n");
```
> Config the gpio(GPIOH5) as input
```
os.writeBytes("echo in > /sys/class/gpio/gpio" + 432 + "/direction\n");
```
> Get the gpio(GPIOH5) level
```
Runtime runtime = Runtime.getRuntime(); 
Process process = runtime.exec("cat " + "/sys/class/gpio/gpio" + 432 + "/value");  
InputStream is = process.getInputStream(); 
InputStreamReader isr = new InputStreamReader(is); 
BufferedReader br = new BufferedReader(isr); 
String line ; 
while (null != (line = br.readLine())) { 
 return Integer.parseInt(line.trim()); 
} 
```
> Release the gpio(GPIOH5)
```
 os.writeBytes("echo " + 432 + " > /sys/class/gpio/unexport\n");
```

### On Ubuntu

** GPIO List **

* Linux-3.14
```
PIN         GPIO         Number
PIN37       GPIOH5         176
PIN33       GPIOAO6        151
```
* Linux-4.9.40
```
PIN         GPIO         Number
PIN37       GPIOH5         432
PIN33       GPIOAO6        502
```

** How to access GPIO on Terminal **

> [Example on linux-4.9]
>  Request the gpio(GPIOH5)
```
$ echo 432 > /sys/class/gpio/export
```
> Config the gpio(GPIOH5) as  output
```
$ echo out > /sys/class/gpio/gpio432/direction
```
> Config the gpio(GPIOH5) as high level output
```
$ echo 1 >  /sys/class/gpio/gpio432/value
```
> Config  the gpio(GPIOH5) as low level output
```
$ echo 0 >  /sys/class/gpio/gpio432/value
```
> Config the gpio(GPIOH5) as input
```
$ echo in > /sys/class/gpio/gpio432/direction
```
> Get the level of gpio(GPIOH5)
```
$ cat  /sys/class/gpio/gpio432/value
```
> Release the gpio(GPIOH5)
```
$ echo 432 > /sys/class/gpio/unexport
```
