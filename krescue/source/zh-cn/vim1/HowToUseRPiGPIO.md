title: 如何使用RPi.GPIO
---

## What is RPi.GPIO

RPi.GPIO 是一个树莓派上用来控制GPIO引脚的Python库。是在wirpingPI的基础上拓展的一个库。他们的底层都是C语言。不同的是RPi.GPIO的上层是使用Python控制的。现在我们已经将这个库移植到了VIMs上。可以通过Python控制板子上的40Pin的引脚。

## 开始使用RPi.GPIO
### 确认RPi.GPIO是否已经正确安装

这里有两个地方需要确认，

* 在默认的Python2上,你需要通过命令 `cat /usr/local/lib/python2.7/dist-packages/RPi.GPIO-0.6.3.post1.egg-info | grep "KHADAS"`确认是否安装上了。如果正常，你会看到下面这句。

```bash
Description: This package provides a class to control the GPIO on a Raspberry Pi or KHADAS.
```

* 在Python3上, 同样通过命令 `cat /usr/local/lib/python3.6/dist-packages/RPi.GPIO-0.6.3.post1.egg-info |  grep "KHADAS"`确认,正常情况下同样会看到这一句。

```bash
Description: This package provides a class to control the GPIO on a Raspberry Pi or KHADAS.
```

### 如何通过编写一个Python程序控制GPIO。

1. 导入相关的库

```python
import RPi.GPIO as GPIO #导入安装Python库
import time #导入系统的时间库，以便使用延时程序
```

如果你需要使用其他的库，同样使用import导入即可。

2. 终止程序时需要清理内存

```python
def shutdown():
	GPIO.cleanup()
```

因为程序会通过库向内存申请内存空间，因此在程序退出时，需要释放这些内存。

### 一个简单的例子simple.py

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

这个例子只是简单的定时拉高拉低引脚的电平。

### 如果运行编写好的Python程序

* 通过python2运行

```bash
root@Khadas:~/test# python simple.py 
Test with RPI GPIO
simple.py:8: RuntimeWarning: This channel is already in use, continuing anyway.  Use GPIO.setwarnings(False) to disable warnings.
GPIO.setup(GpioW,GPIO.OUT)
```

这个例子可以使用`Ctrl+C`结束程序，结束是会在终端看到以下内容。

```python
simple.py:19: RuntimeWarning: No channels have been set up yet - nothing to clean up!  Try cleaning up at the end of your program instead!
GPIO.cleanup()
```

* 通过python3运行

```bash
root@Khadas:~/test# python3 simple.py 
Test with RPI GPIO
simple.py:8: RuntimeWarning: This channel is already in use, continuing anyway.  Use GPIO.setwarnings(False) to disable warnings.
GPIO.setup(GpioW,GPIO.OUT)
```
结束程序时和Python2一样。
## 注意
RPi.GPIO本身包括很多功能，不仅仅只是控制GPIO引脚的输出和读取引脚电平值。这里只是一个简单的介绍和使用，更多的用法需要使用者自己去探索。
