title: How To Use RPi.GPIO
---

## What is RPi.GPIO
RPi.GPIO is a Python Library which use to control GPIO on Raspberry Pi.This is a control library developed on the basis of wiringPi. The bottom layer also uses The C Program, the difference is that the upper control uses The Python Program.Now we transplant RPi.GPIO to VIMs.You can control the 40 pin headler on VIMs by writing a Python program. 

## Begin to Use RPi.GPIO
### Verify that RPI is installed correctly

There are two locations to confirm.

* In python2,you can check with this command `cat /usr/local/lib/python2.7/dist-packages/RPi.GPIO-0.6.3.post1.egg-info | grep "KHADAS"`,you will look this.

```bash
Description: This package provides a class to control the GPIO on a Raspberry Pi or KHADAS.
```

* In Python3, you can check with this command `cat /usr/local/lib/python3.6/dist-packages/RPi.GPIO-0.6.3.post1.egg-info |  grep "KHADAS"`,you will look this again.

```bash
Description: This package provides a class to control the GPIO on a Raspberry Pi or KHADAS.
```

### How to Programing The Python Program to control GPIO

1. Import Lib.

```python
import RPi.GPIO as GPIO #import RPi.GPIO Library
import time #import time to realize delay function
```

If you need other Lib.import it at the beginning of the program.

2. cleanup when you shut dowm the program.

```python
def shutdown():
GPIO.cleanup()
```

Because the program will apply for memory space, it must release the memory space when it exits.

### A Simple Example

```python
import RPi.GPIO as GPIO
import time

GpioW  = 15

def setup():
	GPIO.setmode(GPIO.BCM)
	GPIO.setup(GpioW,GPIO.OUT)
	GPIO.output(GpioW,GPIO.HIGH)

def blink():
	while True:
		GPIO.output(GpioW, GPIO.HIGH)
		time.sleep(5)
		GPIO.output(GpioW, GPIO.LOW)
		time.sleep(5)

def shutdown():
	GPIO.cleanup()


if __name__ == '__main__':
	print("Test with RPI GPIO")
	setup()
	try:
		blink()
	except:
		shutdown()
```

This program simply changes the pin level of GPIO.BCM15.

### How to Run you Program

* Run with python2

```bash
root@Khadas:~/test# python simple.py 
Test with RPI GPIO
simple.py:8: RuntimeWarning: This channel is already in use, continuing anyway.  Use GPIO.setwarnings(False) to disable warnings.
GPIO.setup(GpioW,GPIO.OUT)
```

You can use `Ctrl + C` to shut down it,and you will look this in you terminal

```python
simple.py:19: RuntimeWarning: No channels have been set up yet - nothing to clean up!  Try cleaning up at the end of your program instead!
GPIO.cleanup()
```

* Run with python3

```bash
root@Khadas:~/test# python3 simple.py 
Test with RPI GPIO
simple.py:8: RuntimeWarning: This channel is already in use, continuing anyway.  Use GPIO.setwarnings(False) to disable warnings.
GPIO.setup(GpioW,GPIO.OUT)
```

Shutdown is same with python2.

## Note
RPi.GPIO itself includes many functions, not just controlling the output of GPIO pins and reading pin levels. Here is only a simple introduction and use, more use needs to be explored by users themselves.
