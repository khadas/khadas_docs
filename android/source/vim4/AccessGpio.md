title: Access GPIO Usage
---

This guide is about how to access the GPIO using Android.

{% note warn Note %}
All operations on GPIO are performed under root privileges, switch to root:

```sh
$ su
#
```

{% endnote %}



## Get GPIO Value

### Calculation Method

The calculation method of the GPIO array is: `Number = Banks + Pins`.

1. `Banks` refers to the base value of GPIO ranges.
2. `Pins` refers to the sorting of the GPIO pins you need to calculate in the corresponding ranges.

### Numerical Calculation Example

Amlogic chips usually include two GPIO Ranges, AOBUS and Periphs. There is a calculation example for each Ranges here for reference.


1. Get `Banks`:

```sh
# cat /sys/kernel/debug/pinctrl/fe000000.apb4\:pinctrl\@4000-pinctrl-meson/gpio-ranges
GPIO ranges handled:
0: periphs-banks GPIOS [355 - 511] PINS [0 - 156]
```

2. Get `Pins`:

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

3. Calculate Number:

Take `GPIOT_18` and `GPIOT_19` as an examples here.

`GPIOT_18 = Banks + Pins = 355 + 109 = 464`
`GPIOT_19 = Banks + Pins = 355 + 110 = 465`


## GPIO Usage Examples

* Request the gpio(`GPIOT_19`)
```bash
# echo 465  > /sys/class/gpio/export
```

* Config the gpio(`GPIOT_19`) as  output
```bash
# echo out > /sys/class/gpio/gpio465/direction
```

* Config the gpio(`GPIOT_19`) as high level output
```bash
# echo 1 >  /sys/class/gpio/gpio465/value
```

* Config  the gpio(`GPIOT_19`) as low level output
```bash
# echo 0 >  /sys/class/gpio/gpio465/value
```

* Config the gpio(`GPIOT_19`) as input
```bash
# echo in > /sys/class/gpio/gpio465/direction
```

* Get the gpio(`GPIOT_19`) level
```bash
# cat /sys/class/gpio/gpio465/value
```

* Release the gpio(`GPIOT_19`)
```bash
# echo 465 > /sys/class/gpio/unexport
```

## Third-Party Applications Examples

* Get root permision
```java
Process mProcess = Runtime.getRuntime().exec("su");
```

* Request the gpio(`GPIOT_19`)
```java
DataOutputStream os = new DataOutputStream(mProcess.getOutputStream());
os.writeBytes("echo " + 465 + " > /sys/class/gpio/export\n");
```

* Config the gpio(`GPIOT_19`) as high level output
```java
os.writeBytes("echo out > /sys/class/gpio/gpio" + 465 + "/direction\n");
os.writeBytes("echo 1 > /sys/class/gpio/gpio" + 465 + "/value\n");
```

* Config the gpio(`GPIOT_19`) as input
```java
os.writeBytes("echo in > /sys/class/gpio/gpio" + 465 + "/direction\n");
```

* Get the gpio(`GPIOT_19`) level
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

* Release the gpio(`GPIOT_19`)
```java
 os.writeBytes("echo " + 465 + " > /sys/class/gpio/unexport\n");
```

