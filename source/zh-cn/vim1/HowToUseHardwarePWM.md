title: 如何使用硬件PWM
---

# 确认PWM引脚

dtb配置文件里默认已经打开了硬件PWM.所以仅需要确认哪一个物理引脚对应了硬件PWM.

1. `PWM_F` on [VIM1 GPIO-Out](/zh-cn/vim1/index.html#GPIO-Pin-Out)
2. `PWM_D` on [VIM2 GPIO-Out](/zh-cn/vim2/index.html#GPIO-Pinout)
3. `PWM_F` on [VIM3 GPIO-Out](/zh-cn/vim3/index.html#GPIO-Pinout)

# 却换到root用户

普通用户无法控制GPIO,因此需要先却换到root用户

```shell
khadas@Khadas:~$ sudo -i
[sudo] password for khadas:
root@Khadas:~#
```

# 设置硬件PWM

## 设置以及打开PWM

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

如果你成功开启了硬件PWM,你可以通过示波器看到波形

![pwm-Oscilloscope](/images/vim1/pwm-Oscilloscope.jpg)

**注意**: 如果使用示波器去查看波形,记得板子和示波器需要共地

## 关闭PWM

```shell
root@Khadas:~# echo 0 > /sys/class/pwm/pwmchip4/pwm1/enable

```



