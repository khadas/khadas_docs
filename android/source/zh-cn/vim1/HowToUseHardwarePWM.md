title: 如何使用硬件PWM
---

## 确认PWM引脚

dts配置文件里默认已经打开了硬件PWM，所以仅需要确认哪一个物理引脚对应了硬件PWM。

* `PWM_F` on [VIM1 GPIO-Out](/zh-cn/vim1/index.html#GPIO-Pin-Out)
* `PWM_D` on [VIM2 GPIO-Out](/zh-cn/vim2/index.html#GPIO-Pinout)
* `PWM_F` on [VIM3 GPIO-Out](/zh-cn/vim3/index.html#GPIO-Pinout)

## 却换到root用户

普通用户无法控制GPIO，因此需要先却换到root用户。

```bash
khadas@Khadas:~$ sudo -i
[sudo] password for khadas:
root@Khadas:~#
```

## 设置硬件PWM

### 设置以及打开PWM

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

如果你成功开启了硬件PWM，你可以通过示波器看到波形：

![pwm-Oscilloscope](/images/vim1/pwm-Oscilloscope.jpg)

{% note info 注意 %}

如果使用示波器去查看波形,记得板子和示波器需要共地。

{% endnote %}

### 关闭PWM

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

