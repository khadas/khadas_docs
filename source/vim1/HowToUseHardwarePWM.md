title: How To Use Hardware PWM
---

# Check HardwarePWM Pin

Hardware PWM had open at default dtb configuration.So you need to check which Physical pin is connect to it .

1. `PWM_F` on [VIM1 GPIO-Out](/vim1/index.html#GPIO-Pin-Out)
2. `PWM_D` on [VIM2 GPIO-Out](/vim2/index.html#GPIO-Pinout)
3. `PWM_F` on [VIM3 GPIO-Out](/vim3/index.html#GPIO-Pinout)

# Switch to root user

Ordinary users cannot control GPIO, so they need to switch to the root user.

```shell
khadas@Khadas:~$ sudo -i
[sudo] password for khadas:
root@Khadas:~#
```

# Set Hardware PWM

## Setup and enable PWM

VIM1/3:

```shell
root@Khadas:~# echo 1 > /sys/class/pwm/pwmchip4/export
root@Khadas:~# echo 1000000 > /sys/class/pwm/pwmchip4/pwm1/period
root@Khadas:~# echo 500000 > /sys/class/pwm/pwmchip4/pwm1/duty_cycle
root@Khadas:~# echo 1 > /sys/class/pwm/pwmchip4/pwm1/enable
```

VIM2:

```shell
root@Khadas:~# echo 1 > /sys/class/pwm/pwmchip1/export
root@Khadas:~# echo 1000000 > /sys/class/pwm/pwmchip1/pwm1/period
root@Khadas:~# echo 500000 > /sys/class/pwm/pwmchip1/pwm1/duty_cycle
root@Khadas:~# echo 1 > /sys/class/pwm/pwmchip1/pwm1/enable
```

If you sueccess to enable it , you can see it with oscilloscope.

![pwm-Oscilloscope](/images/vim1/pwm-Oscilloscope.jpg)

**Note**: If you use an oscilloscope to view the waveform, remember that the board and the oscilloscope need to share the GND

## Disable PWM

```shell
root@Khadas:~# echo 0 > /sys/class/pwm/pwmchip4/pwm1/enable

```



