title: 如何访问GPIO
---

这篇文档介绍如何在Android和Ubuntu下访问GPIO。

### 准备工作
固件版本必须满足以下条件：

* Android M >= V170603
* Android N >= V170421
* Ubuntu Server >= V170515
* Ubuntu Mate  >= V170605

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
* Linux-4.9.26
```
PIN         GPIO         Number
PIN37       GPIOH5         31
PIN33       GPIOAO6        6
```
* Linux-4.9.40
```
PIN         GPIO         Number
PIN37       GPIOH5         32
PIN33       GPIOAO6        7
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
