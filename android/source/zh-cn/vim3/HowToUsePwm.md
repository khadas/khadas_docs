title: 如何使用硬件PWM
---

## 目前VIM3板子还有PWM_F这个管脚可以使用pwm

dts配置文件里默认没有配置pwm_f,需要在arch/arm/boot/dts/amlogic/kvim3.dts添加如下配置
```shell
&pwm_ef {
                status = "okay";
+               pinctrl-names = "default";
+                pinctrl-0 = <&pwm_f_pins2>;
        };
```
## 确认哪一个物理引脚对应了硬件PWM.

`PWM_F` on [VIM3 GPIO-Out](/android/zh-cn/vim3/index.html#GPIO-Pinout)

## 却换到root用户

普通用户无法控制GPIO,因此需要先却换到root用户

```shell
kvim3:/ $ su
```

## 设置硬件PWM

## 设置以及打开PWM

    ```shell
    root@Khadas:~# echo 1 > /sys/class/pwm/pwmchip4/export
    root@Khadas:~# echo 1000000 > /sys/class/pwm/pwmchip4/pwm1/period
    root@Khadas:~# echo 500000 > /sys/class/pwm/pwmchip4/pwm1/duty_cycle
    root@Khadas:~# echo 1 > /sys/class/pwm/pwmchip4/pwm1/enable
    ```

如果你成功开启了硬件PWM,你可以通过示波器看到波形

![pwm-Oscilloscope](/android/images/vim1/pwm-oscilloscope.jpg)

{% note info 注意 %}
如果使用示波器去查看波形,记得板子和示波器需要共地
{% endnote %}

## 关闭PWM

  ```shell
  root@Khadas:~# echo 0 > /sys/class/pwm/pwmchip4/pwm1/enable
  ```

