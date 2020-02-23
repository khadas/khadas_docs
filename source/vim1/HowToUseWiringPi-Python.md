title: How To Use WiringPi-Python
---

### What is WiringPi-Python 
WiringPi-Python is the python version of wiringPi. Now we also migrate it to VIMs Board GPIO for control GPIO Headlers.

### WiringPi-Python Function List
```
//GPIO
class GPIO(object):
  def __init__(self,pinmode=0):
    self.MODE=pinmode
    if pinmode==self.WPI_MODE_PINS:
      wiringPiSetup()
    if pinmode==self.WPI_MODE_GPIO:
      wiringPiSetupGpio()
    if pinmode==self.WPI_MODE_GPIO_SYS:
      wiringPiSetupSys()
    if pinmode==self.WPI_MODE_PHYS:
      wiringPiSetupPhys()
	if pinmode==self.WPI_MODE_PIFACE:
      wiringPiSetupPiFace()

  def delay(self,*args):
    delay(*args)
  def delayMicroseconds(self,*args):
    delayMicroseconds(*args)

  def piBoardRev(self):
    return piBoardRev()
  def wpiPinToGpio(self,*args):
    return wpiPinToGpio(*args)
  def setPadDrive(self,*args):
    return setPadDrive(*args)
  def getAlt(self,*args):
    return getAlt(*args)
  def digitalWriteByte(self,*args):
    return digitalWriteByte(*args)

  def pinMode(self,*args):
    pinMode(*args)

  def digitalWrite(self,*args):
    digitalWrite(*args)
  def digitalRead(self,*args):
    return digitalRead(*args)

  def analogWrite(self,*args):
    analogWrite(*args)
  def analogRead(self,*args):
    return analogRead(*args)

  def pullUpDnControl(self,*args):
    return pullUpDnControl(*args)

  def softPwmCreate(self,*args):
    return softPwmCreate(*args)
  def softPwmWrite(self,*args):
    return softPwmWrite(*args)

//I2C:
class I2C(object):
  def setupInterface(self,*args):
  	return wiringPiI2CSetupInterface(*args)
  def setup(self,*args):
    return wiringPiI2CSetup(*args)
  def read(self,*args):
    return wiringPiI2CRead(*args)
  def readReg8(self,*args):
    return wiringPiI2CReadReg8(*args)
  def readReg16(self,*args):
    return wiringPiI2CReadReg16(*args)
  def write(self,*args):
    return wiringPiI2CWrite(*args)
  def writeReg8(self,*args):
    return wiringPiI2CWriteReg8(*args)
  def writeReg16(self,*args):
    return wiringPiI2CWriteReg16(*args)

//Serial:
class Serial(object):
  device = '/dev/ttyAMA0'
  baud = 9600
  serial_id = 0
  def printf(self,*args):
    return serialPrintf(self.serial_id,*args)
  def dataAvail(self,*args):
    return serialDataAvail(self.serial_id,*args)
  def getchar(self,*args):
    return serialGetchar(self.serial_id,*args)
  def putchar(self,*args):
    return serialPutchar(self.serial_id,*args)
  def puts(self,*args):
    return serialPuts(self.serial_id,*args)
  def __init__(self,device,baud):
    self.device = device
    self.baud = baud
    self.serial_id = serialOpen(self.device,self.baud)
  def __del__(self):
    serialClose(self.serial_id)

```

### WieingPi-Python sample demo 
This is a simple program of pin read-write control
```
  1 import wiringpi as GPIO
  2
  3 INPUT = 0
  4 OUTPUT = 1
  5 OUTPUT_PIN = 1
  6 INPUT_PIN = 2
  7 OUTPUT_HIGH = 1
  8 OUTPUT_LOW = 0
  9 pinstatus_list = ['LOW','HIGH']
 10
 11 GPIO.wiringPiSetup()
 12 GPIO.pinMode(OUTPUT_PIN, OUTPUT)
 13 GPIO.pinMode(INPUT_PIN, INPUT)
 14
 15 print("----GPIO W&R test demo-----")
 16 print("set output pin is LOW level")
 17 GPIO.digitalWrite(OUTPUT_PIN, OUTPUT_LOW)
 18 result = GPIO.digitalRead(INPUT_PIN)
 19 print('{}{}'.format('The read Pin value is', pinstatus_list[result]))
 20 GPIO.delay(2000)
 21 print("set output pin is High level")
 22 GPIO.digitalWrite(OUTPUT_PIN, OUTPUT_HIGH)
 23 result = GPIO.digitalRead(INPUT_PIN)
 24 print('{}{}'.format('The read Pin value is', pinstatus_list[result]))
 25 GPIO.delay(2000)
 26 print("End")

```

### notes
If you need to use the special function pin of wiringPi-Python, you need to confirm that the corresponding configuration is opened in DTB
WiringPi-Python itself includes many functions, not just controlling the output of GPIO pins and reading pin levels. Here is only a simple introduction and use, more use needs to be explored by users themselves.
