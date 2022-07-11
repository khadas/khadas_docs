title: PWM
---

这篇文档主要介绍如何使用硬件PWM（Pulse Width Modulation）。

## 设置以及打开PWM

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
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#vim4-enable" role="tab" aria-controls="vim4" aria-selected="false">VIM4</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="vim1-enable" role="tabpanel" aria-labelledby="vim1-tab">
    PWM_F：
    ```shell
    $ echo 1 | sudo tee /sys/class/pwm/pwmchip4/export
    $ echo 1000000 | sudo tee /sys/class/pwm/pwmchip4/pwm1/period
    $ echo 500000 | sudo tee /sys/class/pwm/pwmchip4/pwm1/duty_cycle
    $ echo 1 | sudo tee /sys/class/pwm/pwmchip4/pwm1/enable
    ```
  </div>
  <div class="tab-pane fade" id="vim2-enable" role="tabpanel" aria-labelledby="vim2-tab">
    PWM_D：
    ```shell
    $ echo 1 | sudo tee /sys/class/pwm/pwmchip1/export
    $ echo 1000000 | sudo tee /sys/class/pwm/pwmchip1/pwm1/period
    $ echo 500000 | sudo tee /sys/class/pwm/pwmchip1/pwm1/duty_cycle
    $ echo 1 | sudo tee /sys/class/pwm/pwmchip1/pwm1/enable
    ```
  </div>
  <div class="tab-pane fade" id="vim3-enable" role="tabpanel" aria-labelledby="vim3-tab">
    PWM_F：
    ```shell
    $ echo 1 | sudo tee /sys/class/pwm/pwmchip4/export
    $ echo 1000000 | sudo tee /sys/class/pwm/pwmchip4/pwm1/period
    $ echo 500000 | sudo tee /sys/class/pwm/pwmchip4/pwm1/duty_cycle
    $ echo 1 | sudo tee /sys/class/pwm/pwmchip4/pwm1/enable
    ```
  </div>
  <div class="tab-pane fade" id="vim4-enable" role="tabpanel" aria-labelledby="vim4-tab">
    PWM_F：
    ```shell
    $ echo 1 | sudo tee /sys/class/pwm/pwmchip4/export
    $ echo 1000000 | sudo tee /sys/class/pwm/pwmchip4/pwm1/period
    $ echo 500000 | sudo tee /sys/class/pwm/pwmchip4/pwm1/duty_cycle
    $ echo 1 | sudo tee /sys/class/pwm/pwmchip4/pwm1/enable
    ```
  </div>
</div>

如果你成功开启了硬件PWM，你可以通过示波器看到波形：

![pwm-Oscilloscope](/linux/images/vim1/pwm-oscilloscope.jpg)

{% note info 注意 %}

如果使用示波器去查看波形,记得板子和示波器需要共地。

{% endnote %}

## 关闭PWM

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
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#vim4-disable" role="tab" aria-controls="vim4" aria-selected="false">VIM4</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="vim1-disable" role="tabpanel" aria-labelledby="vim1-tab">
  ```shell
  $ echo 0 | sudo tee /sys/class/pwm/pwmchip4/pwm1/enable
  ```
  </div>
  <div class="tab-pane fade" id="vim2-disable" role="tabpanel" aria-labelledby="vim2-tab">
  ```shell
  $ echo 0 | sudo tee /sys/class/pwm/pwmchip1/pwm1/enable
  ```
  </div>
  <div class="tab-pane fade" id="vim3-disable" role="tabpanel" aria-labelledby="vim3-tab">
  ```shell
  $ echo 0 | sudo tee /sys/class/pwm/pwmchip4/pwm1/enable
  ```
  </div>
  <div class="tab-pane fade" id="vim4-disable" role="tabpanel" aria-labelledby="vim4-tab">
  ```shell
  $ echo 0 | sudo tee /sys/class/pwm/pwmchip4/pwm1/enable
  ```
  </div>
</div>

