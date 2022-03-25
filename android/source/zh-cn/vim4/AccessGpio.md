title: GPIO使用说明
---

这篇文章主要介绍`adb`命令和Java应用两种方法使用GPIO。

{% note warn 注意 %}
所有对GPIO的操作都是在root权限下进行的，切换到root:

```sh
$ su
#
```

{% endnote %}


## 获取GPIO PIN Number

想要使用某一个GPIO PIN，你需要知道其对应的PIN number。

### 计算方法

GPIO PIN number的计算方法为：`PIN number = BANK number + PIN number in BANK`。

1. `BANK number`：不同组别的GPIO对应不同的BANK，Amlogic SOC通常包含AO BANK和Periphs BANK。
　　举例GPIOAO对应的是AO BANK，而GPIOT对应的是Periphs BANK，然而AO BANK与Periphs BANK对应的number是不一样的。
2. `Pin number in BANK`：GPIO PIN所在BANK的位置，比如GPIOT_18在Periphs BANK的第109个位置。

### 数值计算示例

1. 获取`BANK number`：

```sh
# cat /sys/kernel/debug/pinctrl/fe000000.apb4\:pinctrl\@4000-pinctrl-meson/gpio-ranges
GPIO ranges handled:
0: periphs-banks GPIOS [355 - 511] PINS [0 - 156]
```

2. 获取`PIN number in BANK`：

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

3. 计算`PIN Number`：

这里以`GPIOT_18`和`GPIOT_19`为例，

`GPIOT_18 = BANK number + PIN number in BANK = 355 + 109 = 464`
`GPIOT_19 = BANK number + PIN number in BANK = 355 + 110 = 465`

## GPIO adb命令使用示例


* 申请GPIO(`GPIOT_19`)
```bash
# echo 465  > /sys/class/gpio/export
```

* 配置GPIO(`GPIOT_19`)为输出模式
```bash
# echo out > /sys/class/gpio/gpio465/direction
```

* 设置GPIO(`GPIOT_19`)输出为高电平
```bash
# echo 1 >  /sys/class/gpio/gpio465/value
```

* 设置GPIO(`GPIOT_19`)输出为低电平
```bash
# echo 0 >  /sys/class/gpio/gpio465/value
```

* 配置GPIO(`GPIOT_19`)为输入模式
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


## JAVA应用使用示例

* 获取root权限
```java
Process mProcess = Runtime.getRuntime().exec("su");
```

* 申请GPIO(`GPIOT_19`)
```java
DataOutputStream os = new DataOutputStream(mProcess.getOutputStream());
os.writeBytes("echo " + 465 + " > /sys/class/gpio/export\n");
```

* 配置GPIO(`GPIOT_19`)为输出模式
```java
os.writeBytes("echo out > /sys/class/gpio/gpio" + 465 + "/direction\n");
```

* 设置GPIO(`GPIOT_19`)输出为高电平
```java
os.writeBytes("echo 1 > /sys/class/gpio/gpio" + 465 + "/value\n");
```

* 配置GPIO(`GPIOT_19`)为输入模式
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

