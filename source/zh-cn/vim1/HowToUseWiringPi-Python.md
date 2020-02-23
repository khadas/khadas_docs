title: 如何使用WiringPi-Python
---

### 什么是 WiringPi-Python
WiringPi-Python 是wiringPi的Python版本，现在我们同样移植到VIMs上。用于控制板子上的40Pin的GPIO

### WiringPi-Python 函数列表
```
//GPIO:
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

//串口:
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

### wiringPi-Python 使用示例
这是一对引脚读写控制的简单程序
```
import wiringpi as GPIO

INPUT = 0
OUTPUT = 1
OUTPUT_PIN = 1
INPUT_PIN = 2
OUTPUT_HIGH = 1
OUTPUT_LOW = 0
pinstatus_list = ['LOW','HIGH']

GPIO.wiringPiSetup()
GPIO.pinMode(OUTPUT_PIN, OUTPUT)
GPIO.pinMode(INPUT_PIN, INPUT)

print("----GPIO写测试程序-----")
print("设置输出脚的值为低电平")
GPIO.digitalWrite(OUTPUT_PIN, OUTPUT_LOW)
result = GPIO.digitalRead(INPUT_PIN)
print('{}{}'.format('读取到的引脚值为', pinstatus_list[result]))
GPIO.delay(2000)
print("设置输出脚的值为高电平")
GPIO.digitalWrite(OUTPUT_PIN, OUTPUT_HIGH)
result = GPIO.digitalRead(INPUT_PIN)
print('{}{}'.format('读取到的引脚值为', pinstatus_list[result]))
GPIO.delay(2000)
print("程序结束")
```
### 注意
如果需要使用wiringPi-Python的特殊功能引脚，需要先确认dtb里面打开了相应的配置
wiringPi-Python本身包括很多功能，不仅仅只是控制GPIO引脚的输出和读取引脚电平值。这里只是一个简单的介绍和使用，更多的用法需要使用者自己去探索。
