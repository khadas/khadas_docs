title: How To Access I2C
---


This guide is about how to access i2c on Ubuntu and Android.

### Preconditions
* `Ubuntu V180531` or newer
* `Android V180619` or newer

### Connections
**I2C A**
`Sensor SCL` <-> `I2C_SCK_A (PIN 22)`
`Sensor SDA` <-> `I2C_SDA_A (PIN 23)`
`Sensor GND` <-> `GND`
`Sensor VCC` <-> `5V or 3.3V` //depends on your sensor

**I2C B**
`Sensor SCL` <-> `I2C_SCK_B (PIN 25)`
`Sensor SDA` <-> `I2C_SDA_B (PIN 26)`
`Sensor GND` <-> `GND`
`Sensor VCC` <-> `5V or 3.3V` //depends on your sensor


### Detect the device
Detect device on `I2C A`:
```
# i2cdetect -y -r 1
    0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:          -- -- -- -- -- -- -- -- -- -- -- -- -- 
10: -- -- -- -- -- -- -- -- -- -- -- -- -- 1d -- -- 
20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
70: -- -- -- -- -- -- -- --                         
```
Detect device on `I2C B`:
```
# i2cdetect -y -r 2
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:          -- -- -- -- -- -- -- -- -- -- -- -- -- 
10: -- -- -- -- -- -- -- -- UU -- -- -- -- -- -- -- 
20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
50: -- 51 -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
70: -- -- -- -- -- -- -- --                         

```
If you have the right connection you will see the device address, e.g: `0x1d`,`0x18` and `0x51`.

*Note: Root privileges required.*

### Read register from device
Read register `0x0d` of device `0x1d` on `I2C A`.
```
# i2cget -f -y 1 0x1d 0x0d
0x2a
```
*Note: Root privileges required.* 

For more, please refer to the help messages.
