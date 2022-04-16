title: 软件PWM
---

这篇文档主要介绍如何在WiringPi以及WiringPi-Python上使用软件PWM控制舵机。

## 舵机控制原理

舵机的基准信号都是周期为20ms，宽度为1.5ms。对应舵机的中间位置。

<img src="/linux/images/vim3/servo-pwm-signal_orig.png" width="50%" >

不同的宽度对应着舵机的不同角度，脉冲宽度对应的范围是0.5ms到2.5ms。

```
0.5ms --  0度
1ms   -- 45度
1.5ms -- 90度
2ms   -- 135度
2.5ms -- 180度
```

360度模拟舵机工作原理与舵机相同。

```
0.5ms -- 逆时针最大转速
1.5ms -- 暂停转动
2.5ms -- 顺时钟最大转速
```

## 源码编译以及演示

### 说明

1. 通过`gpio readall`可查看可用的引脚：

```sh
$ gpio readall
 +------+-----+----------+------+---+----+-- Model Khadas VIM3/3L --+----+---+------+----------+-----+------+
 | GPIO | wPi |   Name   | Mode | V | DS | PU/PD | Physical | PU/PD | DS | V | Mode |   Name   | wPi | GPIO |
 +------+-----+----------+------+---+----+-------+----++----+-------+----+---+------+----------+-----+------+
 |      |     |       5V |      |   |    |       |  1 || 21 |       |    |   |      | GND      |     |      |
 |      |     |       5V |      |   |    |       |  2 || 22 | P/U   |    | 1 | IN   | PIN.A15  | 6   |  475 |
 |      |     |   USB_DM |      |   |    |       |  3 || 23 | P/U   |    | 1 | IN   | PIN.A14  | 7   |  474 |
 |      |     |   USB_DP |      |   |    |       |  4 || 24 |       |    |   |      | GND      |     |      |
 |      |     |      GND |      |   |    |       |  5 || 25 | P/U   |    | 1 | ALT0 | PIN.AO2  | 8   |  498 |
 |      |     |   MCU3V3 |      |   |    |       |  6 || 26 | P/U   |    | 1 | ALT0 | PIN.AO3  | 9   |  499 |
 |      |     |  MCUNRST |      |   |    |       |  7 || 27 |       |    |   |      | 3V3      |     |      |
 |      |     |  MCUSWIM |      |   |    |       |  8 || 28 |       |    |   |      | GND      |     |      |
 |      |     |      GND |      |   |    |       |  9 || 29 | P/D   |    | 0 | IN   | PIN.A1   | 10  |  461 |
 |      |  18 |     ADC0 |      |   |    |       | 10 || 30 | P/D   |    | 0 | IN   | PIN.A0   | 11  |  460 |
 |      |     |      1V8 |      |   |    |       | 11 || 31 | P/D   |    | 0 | IN   | PIN.A3   | 12  |  463 |
 |      |  19 |     ADC1 |      |   |    |       | 12 || 32 | P/D   |    | 0 | IN   | PIN.A2   | 13  |  462 |
 |  506 |   1 | PIN.AO10 | ALT3 | 0 |    |   P/U | 13 || 33 | P/D   |    | 0 | IN   | PIN.A4   | 14  |  464 |
 |      |     |     GND3 |      |   |    |       | 14 || 34 |       |    |   |      | GND      |     |      |
 |  433 |   2 |   PIN.H6 |   IN | 0 |    |   P/D | 15 || 35 | P/D   |    | 0 | ALT3 | PWM-F    | 15  |  432 |
 |  434 |   3 |   PIN.H7 |   IN | 0 |    |   P/D | 16 || 36 |       |    |   |      | RTC      |     |      |
 |      |     |      GND |      |   |    |       | 17 || 37 | P/D   |    | 0 | OUT  | PIN.H4   | 16  |  431 |
 |  497 |   4 |  PIN.AO1 | ALT0 | 1 |    |   P/U | 18 || 38 |       |    |   |      | MCU-FA1  |     |      |
 |  496 |   5 |  PIN.AO0 | ALT0 | 1 |    |   P/U | 19 || 39 | P/D   |    | 0 | IN   | PIN.Z15  | 17  |  426 |
 |      |     |      3V3 |      |   |    |       | 20 || 40 |       |    |   |      | GND      |     |      |
 +------+-----+----------+------+---+----+-------+----++----+-------+----+---+------+----------+-----+------+
```

2. 引脚配置成普通IO输出。

3. 通过`softPwmCreate()`和`softPwmWrite()`函数模拟PWM并控制。

### WiringPi源码以及编译

1. 舵机在1800度、90度、0度之间来回切换，切换间隔为3s切换一次，周期为9s。
2. 模拟舵机在顺时针转动，暂停转动和逆时针转动来回切换，切换间隔为3s切换一次，周期为9s。

```c
#include <wiringPi.h>
#include <softPwm.h>

int Pin = 16;

int main(){
    wiringPiSetup();
    pinMode(Pin, OUTPUT);
    softPwmCreate(Pin, 0, 200);
    while(1){
        softPwmWrite(Pin, 25);
        delay(3000);
        softPwmWrite(Pin, 15);
        delay(3000);
        softPwmWrite(Pin, 5);
        delay(3000);
    }
    return 0;
}

```

3. 编译命令:

```sh
$ gcc -o SoftPwm SoftPwm.c -lwiringPi -lpthread -lrt -lm -lcrypt
```

### WiringPi-Python源码

1. 舵机先后在180度、90度和0度之间切换，时间间隔为3s。
2. 模拟舵机在顺时针转动，暂停转动和逆时针转动之间切换，时间间隔为3s。

```python
import wiringpi as GPIO

PWM_PIN = 16
PWM_OUTPUT = 1

GPIO.wiringPiSetup()

GPIO.pinMode(PWM_PIN, PWM_OUTPUT)

GPIO.softPwmCreate(PWM_PIN, 0, 200)

GPIO.softPwmWrite(PWM_PIN, 25)
GPIO.delay(3000)
GPIO.softPwmWrite(PWM_PIN, 15)
GPIO.delay(3000)
GPIO.softPwmWrite(PWM_PIN, 5)
GPIO.delay(3000)

```

