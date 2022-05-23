title: How To Use Pwm
---

## VIM3 board use pwm by pwm_f gpio
There is no pwm_f configuration in dts configuration file, You need to add the following configuration in arch/arm/boot/dts/amlogic/kvim3.dts
```shell
&pwm_ef {
                status = "okay";
+               pinctrl-names = "default";
+                pinctrl-0 = <&pwm_f_pins2>;
        };
```
## Confirm which physical pin corresponds to hardware pwm

`PWM_F` on [VIM3 GPIO-Out](/android/zh-cn/vim3/index.html#GPIO-Pinout)

## switch to root user

Ordinary users can't control gpio, so they need to switch to root first

```shell
kvim3:/ $ su
```
## set and open pwm 

    ```shell
    root@Khadas:~# echo 1 > /sys/class/pwm/pwmchip4/export
    root@Khadas:~# echo 1000000 > /sys/class/pwm/pwmchip4/pwm1/period
    root@Khadas:~# echo 500000 > /sys/class/pwm/pwmchip4/pwm1/duty_cycle
    root@Khadas:~# echo 1 > /sys/class/pwm/pwmchip4/pwm1/enable
    ```

if you successfully turn on the hardware pwm, you can see the waveform through the oscilloscope
![pwm-Oscilloscope](/android/images/vim1/pwm-oscilloscope.jpg)

{% note info Note %}
If you use an oscilloscope to check the waveform, remember that the board and the oscilloscope need to share the same ground 
{% endnote %}

  ```shell
  root@Khadas:~# echo 0 > /sys/class/pwm/pwmchip4/pwm1/enable
  ```

