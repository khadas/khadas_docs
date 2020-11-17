title: 如何访问GPIO
---

这篇文档介绍如何在Android和Ubuntu下访问GPIO。

### 准备工作
固件版本必须满足以下条件：

* Android M >= V170603
* Android N >= V170421
* Ubuntu Server >= V180712
* Ubuntu Mate  >= V180531

### 如何获取GPIO数值
你可以通过GPIO banks和pins来获取。不同版本的内核数值不同。


* Linux 3.14 (Android M,N and Ubuntu)

Banks:
```
# cat /sys/kernel/debug/pinctrl/c1109880.pinmux/gpio-ranges

GPIO ranges handled:
0: banks GPIOS [155 - 255] PINS [10 - 110]
0: ao-bank GPIOS [145 - 154] PINS [0 - 9]

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

例如：获取`GPIOH_4`, `GPIOH_5` and `GPIOAO_6`的数值：
Number(GPIOH_5) = bank + pin = 155 - 10 + 31= 176
Number(GPIOH_4) = bank + pin = 155 - 10 + 30= 175
Number(GPIOAO_6) = bank + pin = 145 - 0 + 6 = 151

* Linux 4.9 (Android O and Ubuntu)

`aobus-banks`:
Banks:
```
root@Khadas:/home/khadas# cat /sys/kernel/debug/pinctrl/pinctrl@ff800014/gpio-ranges 
GPIO ranges handled:
0: aobus-banks GPIOS [496 - 511] PINS [0 - 15]
```
Pins:
```shell
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

例如：获取`GPIOAO_6`的数值：
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

例如：获取`GPIOH_5`的数值：
Number(GPIOH_5) = bank + pin = 410 + 22 = 432

### 在Android下

** GPIO 列表 **

```
PIN         GPIO         Number
PIN37       GPIOH5         432
PIN33       GPIOAO6        502
```
有两种方式访问GPIO：

* 通过ADB命令
* 第三方应用

** ADB命令 **

> 通过Wi-Fi ADB连接到VIMs
```
$ adb connect IP_ADDR 
```
> 登录VIMs:
```
$ adb shell
```
> 获取root权限
```
$ su
```
> 请求GPIO(GPIOH5)
```
$ echo 432  > /sys/class/gpio/export
```
> 配置GPIO(GPIOH5)为输出
```
$ echo out > /sys/class/gpio/gpio432/direction
```
> 配置GPIO(GPIOH5)输出高电平
```
$ echo 1 >  /sys/class/gpio/gpio432/value
```
> 配置GPIO(GPIOH5)输出低电平
```
$ echo 0 >  /sys/class/gpio/gpio432/value
```
> 配置GPIO(GPIOH5)为输入
```
$ echo in > /sys/class/gpio/gpio432/direction
```
> 读取GPIO(GPIOH5)电平
```
$ cat /sys/class/gpio/gpio432/value
```
> 释放GPIO(GPIOH5)
```
$ echo 432 > /sys/class/gpio/unexport
```

** 第三方应用 **

> 获取root权限
```
Process mProcess = Runtime.getRuntime().exec("su");
```
> 请求GPIO(GPIOH5)
```
DataOutputStream os = new DataOutputStream(mProcess.getOutputStream());
os.writeBytes("echo " + 432 + " > /sys/class/gpio/export\n");
```
> 配置GPIO(GPIOH5)为输出
```
os.writeBytes("echo out > /sys/class/gpio/gpio" + 432 + "/direction\n");
os.writeBytes("echo 1 > /sys/class/gpio/gpio" + 432 + "/value\n");
```
> 配置GPIO(GPIOH5)为输入
```
os.writeBytes("echo in > /sys/class/gpio/gpio" + 432 + "/direction\n");
```
> 读取GPIO(GPIOH5)电平
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
> 释放GPIO(GPIOH5)
```
 os.writeBytes("echo " + 432 + " > /sys/class/gpio/unexport\n");
```

### 在Ubuntu下

** GPIO 列表 **

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

** 在终端访问GPIO **

> [以linux 4.9为例]
>  请求GPIO(GPIOH5)
```
$ echo 432 > /sys/class/gpio/export
```
> 配置GPIO(GPIOH5)为输出
```
$ echo out > /sys/class/gpio/gpio432/direction
```
> 配置GPOIO(GPIOH5)输出高电平
```
$ echo 1 >  /sys/class/gpio/gpio432/value
```
> 配置GPIO(GPIOH5)输出低电平
```
$ echo 0 >  /sys/class/gpio/gpio432/value
```
> 配置GPIO(GPIOH5)为输入
```
$ echo in > /sys/class/gpio/gpio432/direction
```
> 读取GPIO(GPIOH5)电平
```
$ cat  /sys/class/gpio/gpio432/value
```
> 释放GPIO(GPIOH5)
```
$ echo 432 > /sys/class/gpio/unexport
```
