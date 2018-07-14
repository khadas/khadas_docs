title: How To Access GPIO
---

Here is about how to access GPIO on Android and Ubuntu.

### Preconditions
The Rom must satisfy the following conditions:

* Android M >= V170603
* Android N >= V170421
* Ubuntu Server >= V170515
* Ubuntu Mate  >= V170605

### On Android

** GPIO List **

```
PIN         GPIO         Number
PIN37       GPIOH5         176
PIN33       GPIOAO6        151
```
There are two ways to access GPIO:

* ADB Command
* Third-Party Applications 

** ADB command **

> Connect the VIMs with wifi adb:
```
$ adb connect IP_ADDR 
```
> Login the VIMs:
```
$ adb shell
```
> Get root permision
```
$ su
```
> Request the gpio(GPIOH5)
```
$ echo 176  > /sys/class/gpio/export
```
> Config the gpio(GPIOH5) as  output
```
$ echo out > /sys/class/gpio/gpio176/direction
```
> Config the gpio(GPIOH5) as high level output
```
$ echo 1 >  /sys/class/gpio/gpio176/value
```
> Config  the gpio(GPIOH5) as low level output
```
$ echo 0 >  /sys/class/gpio/gpio176/value
```
> Config the gpio(GPIOH5) as input
```
$ echo in > /sys/class/gpio/gpio176/direction
```
> Get the gpio(GPIOH5) level
```
$ cat /sys/class/gpio/gpio176/value
```
> Release the gpio(GPIOH5)
```
$ echo 176 > /sys/class/gpio/unexport
```

** Third-Party Applications **

> Get root permision
```
Process mProcess = Runtime.getRuntime().exec("su");
```
> Request the gpio(GPIOH5)
```
DataOutputStream os = new DataOutputStream(mProcess.getOutputStream());
os.writeBytes("echo " + 176 + " > /sys/class/gpio/export\n");
```
> Config the gpio(GPIOH5) as high level output
```
os.writeBytes("echo out > /sys/class/gpio/gpio" + 176 + "/direction\n");
os.writeBytes("echo 1 > /sys/class/gpio/gpio" + 176 + "/value\n");
```
> Config the gpio(GPIOH5) as input
```
os.writeBytes("echo in > /sys/class/gpio/gpio" + 176 + "/direction\n");
```
> Get the gpio(GPIOH5) level
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
> Release the gpio(GPIOH5)
```
 os.writeBytes("echo " + 176 + " > /sys/class/gpio/unexport\n");
```

### On Ubuntu

** GPIO List **

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


** How to access GPIO on Terminal **

> [Example on linux-3.14]
>  Request the gpio(GPIOH5)
```
$ echo 176 > /sys/class/gpio/export
```
> Config the gpio(GPIOH5) as  output
```
$ echo out > /sys/class/gpio/gpio176/direction
```
> Config the gpio(GPIOH5) as high level output
```
$ echo 1 >  /sys/class/gpio/gpio176/value
```
> Config  the gpio(GPIOH5) as low level output
```
$ echo 0 >  /sys/class/gpio/gpio176/value
```
> Config the gpio(GPIOH5) as input
```
$ echo in > /sys/class/gpio/gpio176/direction
```
> Get the level of gpio(GPIOH5)
```
$ cat  /sys/class/gpio/gpio176/value
```
> Release the gpio(GPIOH5)
```
$ echo 176 > /sys/class/gpio/unexport
```
