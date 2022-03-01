title: 使用硬件PWM
---

目前VIM4板子40引脚有个`PWM_F`管脚可以用作为PWM使用。
dts配置文件里默认`PWM_F`被VBO屏的背光使用，需要作如下代码修改才能使用：
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
## 确认哪一个物理引脚对应了硬件PWM.

* `PWM_F` on [VIM4 GPIO-Out](/android/zh-cn/vim4/Interfaces#GPIO-Pinout)

## 切换到root用户

普通用户无法控制GPIO，因此需要先却换到root用户。

```shell
kvim4:/ $ su
```

## PWM使用

* Export PWM
```shell
root@Khadas:~# echo 1 > /sys/class/pwm/pwmchip4/export
```
* Configure PWM period
```shell
root@Khadas:~# echo 1000000 > /sys/class/pwm/pwmchip4/pwm1/period
```
* Configure PWM duty cycle
```shell
root@Khadas:~# echo 500000 > /sys/class/pwm/pwmchip4/pwm1/duty_cycle
```
* Enable PWM
```shell
root@Khadas:~# echo 1 > /sys/class/pwm/pwmchip4/pwm1/enable
```
* Disable PWM
```shell
root@Khadas:~# echo 0 > /sys/class/pwm/pwmchip4/pwm1/enable
```

如果你成功开启了硬件PWM，你可以通过示波器看到波形：

![pwm-Oscilloscope](/android/images/vim1/pwm-Oscilloscope.jpg)

{% note info 注意 %}
如果使用示波器去查看波形，记得板子和示波器需要共地。
{% endnote %}
