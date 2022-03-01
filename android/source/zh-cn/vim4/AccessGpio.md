title: GPIO访问使用说明
---

这篇文档介绍如何在Android下访问GPIO。

{% note warn 注意 %}
所有对GPIO的操作都是在root权限下进行的，切换到root:

```sh
$ su
#
```

{% endnote %}


## 获取GPIO数值

### 计算方法

GPIO数组的计算方法为：`Number = Banks + Pins`。

1. `Banks`是指GPIO Ranges的基数值。
2. `Pins`是指你需要计算的GPIO引脚在对应ranges的排序。

### 数值计算示例

Amlogic芯片通常都会包括AOBUS和Periphs两个GPIO Ranges。这里对每个Ranges都有一个计算的示例供参考。


1. 获取`Banks`：

```sh
# cat /sys/kernel/debug/pinctrl/fe000000.apb4\:pinctrl\@4000-pinctrl-meson/gpio-ranges
GPIO ranges handled:
0: periphs-banks GPIOS [355 - 511] PINS [0 - 156]
```

2. 获取`Pins`：

```sh
# cat /sys/kernel/debug/pinctrl/fe000000.apb4\:pinctrl\@4000-pinctrl-meson/pins
registered pins: 157
pin 0 (GPIOB_0)  fe000000.apb4:pinctrl@4000
pin 1 (GPIOB_1)  fe000000.apb4:pinctrl@4000
pin 2 (GPIOB_2)  fe000000.apb4:pinctrl@4000
pin 3 (GPIOB_3)  fe000000.apb4:pinctrl@4000
pin 4 (GPIOB_4)  fe000000.apb4:pinctrl@4000
pin 5 (GPIOB_5)  fe000000.apb4:pinctrl@4000
pin 6 (GPIOB_6)  fe000000.apb4:pinctrl@4000
pin 7 (GPIOB_7)  fe000000.apb4:pinctrl@4000
pin 8 (GPIOB_8)  fe000000.apb4:pinctrl@4000
pin 9 (GPIOB_9)  fe000000.apb4:pinctrl@4000
...
pin 109 (GPIOT_18)  fe000000.apb4:pinctrl@4000
pin 110 (GPIOT_19)  fe000000.apb4:pinctrl@4000
...
```

3. 计算Number：

这里以`GPIOT_18`和`GPIOT_19`为例，

`GPIOT_18 = Banks + Pins = 355 + 109 = 464`
`GPIOT_19 = Banks + Pins = 355 + 110 = 465`

## GPIO使用示例


* 申请GPIO(`GPIOT_19`)

```bash
# echo 465  > /sys/class/gpio/export
```

* 配置GPIO(`GPIOT_19`)为输出

```bash
# echo out > /sys/class/gpio/gpio465/direction
```

* 配置GPIO(`GPIOT_19`)输出高电平

```bash
# echo 1 >  /sys/class/gpio/gpio465/value
```
* 配置GPIO(`GPIOT_19`)输出低电平

```bash
# echo 0 >  /sys/class/gpio/gpio465/value
```

* 配置GPIO(`GPIOT_19`)为输入

```bash
# echo in > /sys/class/gpio/gpio465/direction
```

* 读取GPIO(`GPIOT_19`)电平

```bash
# cat /sys/class/gpio/gpio465/value
```

* 释放GPIO(`GPIOT_19`)

```bash
# echo 465 > /sys/class/gpio/unexport
```


## 第三方应用示例

* 获取root权限

```java
Process mProcess = Runtime.getRuntime().exec("su");
```

* 申请GPIO(`GPIOT_19`)

```java
DataOutputStream os = new DataOutputStream(mProcess.getOutputStream());
os.writeBytes("echo " + 465 + " > /sys/class/gpio/export\n");
```

* 配置GPIO(`GPIOT_19`)为输出

```java
os.writeBytes("echo out > /sys/class/gpio/gpio" + 465 + "/direction\n");
os.writeBytes("echo 1 > /sys/class/gpio/gpio" + 465 + "/value\n");
```

* 配置GPIO(`GPIOT_19`)为输入

```java
os.writeBytes("echo in > /sys/class/gpio/gpio" + 465 + "/direction\n");
```

* 读取GPIO(`GPIOT_19`)电平

```java
Runtime runtime = Runtime.getRuntime(); 
Process process = runtime.exec("cat " + "/sys/class/gpio/gpio" + 465 + "/value");  
InputStream is = process.getInputStream(); 
InputStreamReader isr = new InputStreamReader(is); 
BufferedReader br = new BufferedReader(isr); 
String line ; 
while (null != (line = br.readLine())) { 
 return Integer.parseInt(line.trim()); 
} 
```

* 释放GPIO(`GPIOT_19`)

```java
 os.writeBytes("echo " + 465 + " > /sys/class/gpio/unexport\n");
```

