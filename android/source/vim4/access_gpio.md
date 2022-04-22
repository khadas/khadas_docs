title: GPIO Access Usage
---

You can access the GPIO pins in two ways:
* ADB shell
* Java application


## Get GPIO Number

To use a GPIO pin, you need to know its PIN number.

### Calculation

GPIO PIN number calculation method: `Number = Range Base + Pin Index`

1. `Range Base` refers to the base value of GPIO ranges.

2. `Pin Index` refers to the sorting of the GPIO pins you need to calculate in the corresponding ranges.

### Example

1. Get `Range Base`:

```sh
# cat /sys/kernel/debug/pinctrl/fe000000.apb4\:pinctrl\@4000-pinctrl-meson/gpio-ranges
GPIO ranges handled:
0: periphs-banks GPIOS [355 - 511] PINS [0 - 156]
```

2. Get `Pin Index`:

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

3. Calculate `Number`:

Here is an example for `GPIOT_19`:

`GPIOT_19 = Range Base + Pin Index = 355 + 110 = 465`


## GPIO Usage
When you get the GPIO number, you can follow the steps below to control it.
Here will take GPIO number 465 as a example.

### ADB Shell Commands


* Request GPIO(`GPIOT_19`)
```bash
# echo 465  > /sys/class/gpio/export
```

* Configure GPIO(`GPIOT_19`) as output mode
```bash
# echo out > /sys/class/gpio/gpio465/direction
```

* Set GPIO(`GPIOT_19`) to high level output
```bash
# echo 1 >  /sys/class/gpio/gpio465/value
```

* Set GPIO(`GPIOT_19`) to low level output
```bash
# echo 0 >  /sys/class/gpio/gpio465/value
```

* Configure GPIO(`GPIOT_19`) as input mode
```bash
# echo in > /sys/class/gpio/gpio465/direction
```

* Read the level of GPIO(`GPIOT_19`)
```bash
# cat /sys/class/gpio/gpio465/value
```

* Release GPIO(`GPIOT_19`)
```bash
# echo 465 > /sys/class/gpio/unexport
```


### JAVA Application

* Get root privileges
```java
Process mProcess = Runtime.getRuntime().exec("su");
```

* Request GPIO(`GPIOT_19`)
```java
DataOutputStream os = new DataOutputStream(mProcess.getOutputStream());
os.writeBytes("echo " + 465 + " > /sys/class/gpio/export\n");
```

* Configure GPIO(`GPIOT_19`) as output mode
```java
os.writeBytes("echo out > /sys/class/gpio/gpio" + 465 + "/direction\n");
```

* Set GPIO(`GPIOT_19`) to high level output
```java
os.writeBytes("echo 1 > /sys/class/gpio/gpio" + 465 + "/value\n");
```

* Configure GPIO(`GPIOT_19`) as input mode
```java
os.writeBytes("echo in > /sys/class/gpio/gpio" + 465 + "/direction\n");
```

* Read the level of GPIO(`GPIOT_19`)
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

* Release GPIO(`GPIOT_19`)
```java
 os.writeBytes("echo " + 465 + " > /sys/class/gpio/unexport\n");
```

