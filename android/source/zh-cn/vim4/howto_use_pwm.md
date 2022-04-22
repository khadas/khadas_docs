title: PWM使用说明
---
这篇文档主要介绍如何使用硬件PWM，VIM4`PWM_F`端口默认被其它功能占用，使用`PWM_F`端口前，请先修改如下代码：
```diff
diff --git a/arch/arm64/boot/dts/amlogic/kvim4.dts b/arch/arm64/boot/dts/amlogic/kvim4.dts
--- a/arch/arm64/boot/dts/amlogic/kvim4.dts
+++ b/arch/arm64/boot/dts/amlogic/kvim4.dts
@@ -1749,13 +1749,13 @@
                };
        };
 
-       bl1_pwm_off_pins:bl1_pwm_off_pin {
-               mux {
-                       groups = "GPIOY_8";
-                       function = "gpio_periphs";
-                       output-low;
-               };
-       };
 

diff --git a/arch/arm64/boot/dts/amlogic/mesont7_an400-panel.dtsi b/arch/arm64/boot/dts/amlogic/mesont7_an400-panel.dtsi
--- a/arch/arm64/boot/dts/amlogic/mesont7_an400-panel.dtsi
+++ b/arch/arm64/boot/dts/amlogic/mesont7_an400-panel.dtsi
@@ -1442,13 +1442,13 @@
 
        backlight1{
                compatible = "amlogic, backlight-t7";
-               status = "okay";
+               status = "disabled";
                index = <1>;
                key_valid = <0>;
                pinctrl-names = "pwm_on",
                                "pwm_off";
-               pinctrl-0 = <&pwm_f_pins>;
-               pinctrl-1 = <&bl1_pwm_off_pins>;
                pinctrl_version = <2>; /* for uboot */
                interrupts = <0 197 1

```
## `PWM_F`物理引脚确认

* [VIM4 GPIO-Out](/android/zh-cn/vim4/Interfaces#GPIO-Pinout)


## PWM使用

* 申请PWM
```shell
root@Khadas:~# echo 1 > /sys/class/pwm/pwmchip4/export
```
* 配置PWM周期
```shell
root@Khadas:~# echo 1000000 > /sys/class/pwm/pwmchip4/pwm1/period
```
* 配置PWM占空比
```shell
root@Khadas:~# echo 500000 > /sys/class/pwm/pwmchip4/pwm1/duty_cycle
```
* 使能PWM
```shell
root@Khadas:~# echo 1 > /sys/class/pwm/pwmchip4/pwm1/enable
```
* 关闭PWM
```shell
root@Khadas:~# echo 0 > /sys/class/pwm/pwmchip4/pwm1/enable
```

如果你成功开启了硬件PWM，可以通过示波器看到波形：

![pwm-Oscilloscope](/android/images/vim1/pwm-oscilloscope.jpg)

{% note info 注意 %}
如果使用示波器去查看波形，记得板子和示波器需要共地。
{% endnote %}
