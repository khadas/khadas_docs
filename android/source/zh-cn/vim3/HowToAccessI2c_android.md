title: 如何操作I2C 
---


This guide is about how to access i2c on Android.
这篇主要描述如何在安卓上操作I2C

### 准备
* `Android V210128` or newer

### 连接

**I2C 3**
`Sensor SCL` <-> `I2C0_SCK (PIN 22)`
`Sensor SDA` <-> `I2C0_SDA (PIN 23)`
`Sensor GND` <-> `GND`
`Sensor VCC` <-> `5V or 3.3V` //取决与传感器供电

**I2C 4**
`Sensor SCL` <-> `I2C1_SCK (PIN 25)`
`Sensor SDA` <-> `I2C1_SDA (PIN 26)`
`Sensor GND` <-> `GND`
`Sensor VCC` <-> `5V or 3.3V` //取决与传感器供电


### 检测设备

检测挂在`I2C 3`的设备:
```
# i2cdetect -y -r 3
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:                         -- -- -- -- -- -- -- -- 
10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
70: -- -- -- -- -- -- -- -- 
```
检测挂在`I2C 3`的设备:
```
# i2cdetect -y -r 4
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:                         -- -- -- -- -- -- UU -- 
10: -- -- -- -- -- -- -- -- UU -- -- -- -- -- -- -- 
20: UU -- 22 -- -- -- -- -- -- -- -- -- -- -- -- -- 
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
50: -- UU -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
60: -- -- -- -- -- -- -- -- -- -- -- -- UU -- -- -- 
70: -- -- -- -- -- -- -- --
```
如果连接正确你将看到设备地址，比如：`0x1e`,`0x18` and `0x51`.

{% note info 注意 %}
执行这些命令需要root权限。
{% endnote %}

### 从设备读寄存器值

读挂载在I2C4总线上0x22设备寄存器地址0x0d的值
```
# i2cget -f -y 4 0x22 0x0d
0x0f
```
### 列出设备寄存器的值 

列出I2C4总线上0x22的寄存器值
```
# i2cdump -f -y 4 0x22 
No size specified (using byte-data access)
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f    0123456789abcdef
00: 00 91 07 45 31 60 08 00 22 07 74 0f 00 0f a2 fe    .??E1`?."?t?.???
10: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00    ................
20: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00    ................
30: 00 00 00 00 00 00 00 00 00 00 00 00 0c 00 00 00    ............?...
40: 81 28 00 00 00 00 00 00 00 00 00 00 00 00 00 00    ?(..............
50: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00    ................
60: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00    ................
70: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00    ................
80: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00    ................
90: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00    ................
a0: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00    ................
b0: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00    ................
c0: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00    ................
d0: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00    ................
e0: 00 00 00 00 00 00 00 00 00 90 39 0c 00 00 00 00    .........?9?....
f0: 00 00 08 00 00 00 00 00 00 00 00 00 00 00 01 00    ..?...........?.
```
### 写设备的寄存器值

向总线I2C4上的0x18设备寄存器0x20写入0，使用命令i2cdump去查询
```
# i2cset -f -y 4 0x18 0x20 0

#  i2cdump -f -y 4 0x18
No size specified (using byte-data access)
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f    0123456789abcdef
00: ff ff ff ff ff ff 00 00 00 00 00 00 00 00 00 00    ................
10: 00 00 00 01 00 03 00 00 00 00 00 00 00 00 00 00    ...?.?..........
20: 00 00 01 01 01 01 01 00 00 01 00 00 01 00 00 00    ..?????..?..?...
30: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00    ................
40: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff    ................
50: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff    ................
60: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff    ................
70: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff    ................
80: ff ff ff ff ff ff 00 ff ff ff ff ff ff ff ff ff    ................
90: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff    ................
a0: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff    ................
b0: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff    ................
c0: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff    ................
d0: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff    ................
e0: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff    ................
f0: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff    ................
```

### 通过khadas api 操作i2c 

除了用命令访问I2C外，还可以通过APK访问，例如，我们封装了一个jar包，其中包含I2C读写接口

**I2C read**
Function：public int i2c_read_byte_data(int bus, int addr, int reg)
Parameter：bus: Device mounted I2C bus addr: Device I2C address reg: Device register
Return：Returns the read register value
example：

int Value = getKhadasApi().i2c_read_byte_data(4, 0x0e, 0x60);

**I2C write**
Function：public int i2c_write_byte_data(int bus, int addr, int reg, int value)
Parameter：bus: Device mounted I2C bus addr: Device I2C address reg: Device register value: Value to set
Return：-1: NG 0: OK
example：

int propertiesValue = getKhadasApi().i2c_write_byte_data(4,0x0e, 0x60, 96);

**khadas_api_demo 源码下载**
* `git clone https://github.com/khadas/khadas_api_demo -b vim3` 


