title: How To Access I2C
---


This guide is about how to access i2c on Ubuntu and Android.

### Preconditions
* `Ubuntu V180531` or newer
* `Android V180619` or newer

### Connections
**I2C 3**
`Sensor SCL` <-> `I2C0_SCK (PIN 22)`
`Sensor SDA` <-> `I2C0_SDA (PIN 23)`
`Sensor GND` <-> `GND`
`Sensor VCC` <-> `5V or 3.3V` //depends on your sensor

**I2C 4**
`Sensor SCL` <-> `I2C1_SCK (PIN 25)`
`Sensor SDA` <-> `I2C1_SDA (PIN 26)`
`Sensor GND` <-> `GND`
`Sensor VCC` <-> `5V or 3.3V` //depends on your sensor


### Detect the device
Detect device on `I2C 3`:
```
# i2cdetect -y -r 3
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:          -- -- -- -- -- -- -- -- -- -- -- -- -- 
10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
```
Detect device on `I2C 4`:
```
# i2cdetect -y -r 4
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:          -- -- -- -- -- -- -- -- -- -- -- 0e -- 
10: -- -- -- -- -- -- -- -- UU -- -- -- -- -- -- -- 
20: UU -- 22 -- -- -- -- -- -- -- -- -- -- -- -- -- 
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
50: -- UU -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
70: -- -- -- -- -- -- -- --
```
If you have the right connection you will see the device address, e.g: `0x1d`,`0x18` and `0x51`.

*Note: Root privileges required.*

### Read register from device
Read register `0x0d` of device `0x22` on `I2C4`.
```
# i2cget -f -y 4 0x22 0x0d
0x0f
```
*Note: Root privileges required.* 

For more, please refer to the help messages.
