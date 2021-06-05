title: How To Use Hardware PWM
---

## Check HardwarePWM Pin

Hardware PWM had open at default dtb configuration.So you need to check which Physical pin is connect to it .

* `PWM_F` on [VIM1 GPIO-Out](/vim1/index.html#GPIO-Pin-Out)
* `PWM_D` on [VIM2 GPIO-Out](/vim2/index.html#GPIO-Pinout)
* `PWM_F` on [VIM3 GPIO-Out](/vim3/index.html#GPIO-Pinout)

## Switch to root user

Ordinary users cannot control GPIO, so they need to switch to the root user.

```shell
khadas@Khadas:~$ sudo -i
[sudo] password for khadas:
root@Khadas:~#
```

## Set Hardware PWM

### Setup and enable PWM

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#vim1-enable" role="tab" aria-controls="vim1" aria-selected="true">VIM1</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#vim2-enable" role="tab" aria-controls="vim2" aria-selected="false">VIM2</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#vim3-enable" role="tab" aria-controls="vim3" aria-selected="false">VIM3/VIM3L</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="vim1-enable" role="tabpanel" aria-labelledby="vim1-tab">
  	```shell
	root@Khadas:~# echo 1 > /sys/class/pwm/pwmchip4/export
	root@Khadas:~# echo 1000000 > /sys/class/pwm/pwmchip4/pwm1/period
	root@Khadas:~# echo 500000 > /sys/class/pwm/pwmchip4/pwm1/duty_cycle
	root@Khadas:~# echo 1 > /sys/class/pwm/pwmchip4/pwm1/enable
	```
  </div>
  <div class="tab-pane fade" id="vim2-enable" role="tabpanel" aria-labelledby="vim2-tab">
  	```shell
	root@Khadas:~# echo 1 > /sys/class/pwm/pwmchip1/export
	root@Khadas:~# echo 1000000 > /sys/class/pwm/pwmchip1/pwm1/period
	root@Khadas:~# echo 500000 > /sys/class/pwm/pwmchip1/pwm1/duty_cycle
	root@Khadas:~# echo 1 > /sys/class/pwm/pwmchip1/pwm1/enable
	```
  </div>
  <div class="tab-pane fade" id="vim3-enable" role="tabpanel" aria-labelledby="vim3-tab">
  	```shell
	root@Khadas:~# echo 1 > /sys/class/pwm/pwmchip4/export
	root@Khadas:~# echo 1000000 > /sys/class/pwm/pwmchip4/pwm1/period
	root@Khadas:~# echo 500000 > /sys/class/pwm/pwmchip4/pwm1/duty_cycle
	root@Khadas:~# echo 1 > /sys/class/pwm/pwmchip4/pwm1/enable
	```
  </div>
</div>


If you sueccess to enable it , you can see it with oscilloscope.

![pwm-Oscilloscope](/images/vim1/pwm-Oscilloscope.jpg)

{% note info Note %}

If you use an oscilloscope to view the waveform, remember that the board and the oscilloscope need to share the GND.

{% endnote %}

### Disable PWM

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#vim1-disable" role="tab" aria-controls="vim1" aria-selected="true">VIM1</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#vim2-disable" role="tab" aria-controls="vim2" aria-selected="false">VIM2</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#vim3-disable" role="tab" aria-controls="vim3" aria-selected="false">VIM3/VIM3L</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="vim1-disable" role="tabpanel" aria-labelledby="vim1-tab">
  ```shell
  root@Khadas:~# echo 0 > /sys/class/pwm/pwmchip4/pwm1/enable
  ```
  </div>
  <div class="tab-pane fade" id="vim2-disable" role="tabpanel" aria-labelledby="vim2-tab">
  ```shell
  root@Khadas:~# echo 0 > /sys/class/pwm/pwmchip1/pwm1/enable
  ```
  </div>
  <div class="tab-pane fade" id="vim3-disable" role="tabpanel" aria-labelledby="vim3-tab">
  ```shell
  root@Khadas:~# echo 0 > /sys/class/pwm/pwmchip4/pwm1/enable
  ```
  </div>
</div>


