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
root@Khadas:~# cat /sys/kernel/debug/pinctrl/pinctrl@14/gpio-ranges 
GPIO ranges handled:
0: aobus-banks GPIOS [0 - 10] PINS [0 - 10]
```
Pins:
```
root@Khadas:~# cat /sys/kernel/debug/pinctrl/pinctrl@14/pins 
registered pins: 11
pin 0 (GPIOAO_0)  pinctrl@14
pin 1 (GPIOAO_1)  pinctrl@14
pin 2 (GPIOAO_2)  pinctrl@14
pin 3 (GPIOAO_3)  pinctrl@14
pin 4 (GPIOAO_4)  pinctrl@14
pin 5 (GPIOAO_5)  pinctrl@14
pin 6 (GPIOAO_6)  pinctrl@14
pin 7 (GPIOAO_7)  pinctrl@14
pin 8 (GPIOAO_8)  pinctrl@14
pin 9 (GPIOAO_9)  pinctrl@14
pin 10 (GPIO_TEST_N)  pinctrl@14
```

例如：获取`GPIOAO_6`的数值：
Number(GPIOAO_6) = bank + pin = 0 - 0 + 6 = 6

`periphs-banks`:
Banks:
```
root@Khadas:~# cat /sys/kernel/debug/pinctrl/pinctrl@4b0/gpio-ranges
GPIO ranges handled:
0: periphs-banks GPIOS [11 - 110] PINS [11 - 110]
```
Pins:
```
root@Khadas:~# cat /sys/kernel/debug/pinctrl/pinctrl@4b0/pins 
registered pins: 100
pin 11 (GPIOZ_0)  pinctrl@4b0
pin 12 (GPIOZ_1)  pinctrl@4b0
pin 13 (GPIOZ_2)  pinctrl@4b0
...
pin 27 (GPIOH_0)  pinctrl@4b0
pin 28 (GPIOH_1)  pinctrl@4b0
pin 29 (GPIOH_2)  pinctrl@4b0
pin 30 (GPIOH_3)  pinctrl@4b0
pin 31 (GPIOH_4)  pinctrl@4b0
pin 32 (GPIOH_5)  pinctrl@4b0
pin 33 (GPIOH_6)  pinctrl@4b0
pin 34 (GPIOH_7)  pinctrl@4b0
pin 35 (GPIOH_8)  pinctrl@4b0
pin 36 (GPIOH_9)  pinctrl@4b0
...
pin 81 (GPIODV_21)  pinctrl@4b0
pin 82 (GPIODV_22)  pinctrl@4b0
pin 83 (GPIODV_23)  pinctrl@4b0
pin 84 (GPIODV_24)  pinctrl@4b0
...
```

例如：获取`GPIOH_5`的数值：
Number(GPIOH_5) = bank + pin = 11 - 11 + 32 = 32

### 在Android下

** GPIO 列表 **

```
PIN         GPIO         Number
PIN37       GPIOH5         176
PIN33       GPIOAO6        151
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
$ echo 176  > /sys/class/gpio/export
```
> 配置GPIO(GPIOH5)为输出
```
$ echo out > /sys/class/gpio/gpio176/direction
```
> 配置GPIO(GPIOH5)输出高电平
```
$ echo 1 >  /sys/class/gpio/gpio176/value
```
> 配置GPIO(GPIOH5)输出低电平
```
$ echo 0 >  /sys/class/gpio/gpio176/value
```
> 配置GPIO(GPIOH5)为输入
```
$ echo in > /sys/class/gpio/gpio176/direction
```
> 读取GPIO(GPIOH5)电平
```
$ cat /sys/class/gpio/gpio176/value
```
> 释放GPIO(GPIOH5)
```
$ echo 176 > /sys/class/gpio/unexport
```

** 第三方应用 **

> 获取root权限
```
Process mProcess = Runtime.getRuntime().exec("su");
```
> 请求GPIO(GPIOH5)
```
DataOutputStream os = new DataOutputStream(mProcess.getOutputStream());
os.writeBytes("echo " + 176 + " > /sys/class/gpio/export\n");
```
> 配置GPIO(GPIOH5)为输出
```
os.writeBytes("echo out > /sys/class/gpio/gpio" + 176 + "/direction\n");
os.writeBytes("echo 1 > /sys/class/gpio/gpio" + 176 + "/value\n");
```
> 配置GPIO(GPIOH5)为输入
```
os.writeBytes("echo in > /sys/class/gpio/gpio" + 176 + "/direction\n");
```
> 读取GPIO(GPIOH5)电平
```
Runtime runtime = Runtime.getRuntime(); 
Process process = runtime.exec("cat " + "/sys/class/gpio/gpio" + 176 + "/value");  
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
 os.writeBytes("echo " + 176 + " > /sys/class/gpio/unexport\n");
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
PIN37       GPIOH5         32
PIN33       GPIOAO6        6
```

** 在终端访问GPIO **

> [以linux 3.14为例]
>  请求GPIO(GPIOH5)
```
$ echo 176 > /sys/class/gpio/export
```
> 配置GPIO(GPIOH5)为输出
```
$ echo out > /sys/class/gpio/gpio176/direction
```
> 配置GPOIO(GPIOH5)输出高电平
```
$ echo 1 >  /sys/class/gpio/gpio176/value
```
> 配置GPIO(GPIOH5)输出低电平
```
$ echo 0 >  /sys/class/gpio/gpio176/value
```
> 配置GPIO(GPIOH5)为输入
```
$ echo in > /sys/class/gpio/gpio176/direction
```
> 读取GPIO(GPIOH5)电平
```
$ cat  /sys/class/gpio/gpio176/value
```
> 释放GPIO(GPIOH5)
```
$ echo 176 > /sys/class/gpio/unexport
```
