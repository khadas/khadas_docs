title: PWM Usage
---

This document introduces how to use hardware PWM.

By default, the DTS configuration file specifies `PWM_F` as the pin used to control the backlight of a VBO screen. 

The following code modification is required:

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
## PWM-F Harware Interfaces

* [VIM4 GPIO-Out](/android/vim4/Interfaces#GPIO-Pinout)


## PWM Usage 

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

If you successfully turn on the hardware pwm, you can see the waveform through the oscilloscope:

![pwm-Oscilloscope](/android/images/vim1/pwm-oscilloscope.jpg)

{% note info Note %}
If you use an oscilloscope to check the waveform, remember that the board and the oscilloscope need to share the same ground.
{% endnote %}
