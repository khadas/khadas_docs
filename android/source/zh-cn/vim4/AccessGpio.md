title: GPIO使用说明
---

这篇文章主要介绍如何在Android系统下控制GPIO。

## 获取GPIO数值

想要控制GPIO，必须知道其对应的GPIO数值。

### 计算方法

GPIO数值计算方法为：`Number = Range Base + Pin Index`。

1. `Range Base`表示Range基数。
2. `Pin Index`表示GPIO管脚相对于Range的偏移。

### GPIO数值计算举例

1. 获取`Range Base`：

```sh
# cat /sys/kernel/debug/pinctrl/fe000000.apb4\:pinctrl\@4000-pinctrl-meson/gpio-ranges
GPIO ranges handled:
0: periphs-banks GPIOS [355 - 511] PINS [0 - 156]
```

2. 获取`Pin Index`：

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

3. 获取GPIO数值：

以`GPIOT_19`为例

`GPIOT_19` = `Range Base` + `Pin Index` = 355 + 110 = 465


## GPIO用法

在获取到GPIO数值后就可以通过如下的步骤来控制GPIO，以GPIOT_19（Number 465）为例：

### ADB命令使用方法

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


### JAVA应用使用方法

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

