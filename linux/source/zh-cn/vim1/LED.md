title: LED
---

## 查看LED节点

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#vim1-node" role="tab" aria-controls="vim1" aria-selected="true">VIM1/VIM2</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#vim3-node" role="tab" aria-controls="vim3" aria-selected="false">VIM3/VIM3L</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#vim4-node" role="tab" aria-controls="vim4" aria-selected="false">VIM4</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="vim1-node" role="tabpanel" aria-labelledby="vim1-tab">

  VIM1和VIM2只有一个LED节点，如下：

  ```bash
  $ ls /sys/class/leds
  sys_led
  ```
  </div>
  <div class="tab-pane fade" id="vim3-node" role="tabpanel" aria-labelledby="vim3-tab">

  VIM3/VIM3L有两个LED节点，如下：

  ```bash
  $ ls /sys/class/leds
  red_led  sys_led
  ```
  </div>
  <div class="tab-pane fade" id="vim4-node" role="tabpanel" aria-labelledby="vim4-tab">
  
  VIM4只有一个LED节点`pwmled`，如下：

  ```bash
  $ ls /sys/class/leds# ls
  pwmled
  ```
  </div>
</div>

## 设置LED

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#vim1" role="tab" aria-controls="vim1" aria-selected="true">VIM1/VIM2/VIM3/VIM3L</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#vim4" role="tab" aria-controls="vim4" aria-selected="false">VIM4</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="vim1" role="tabpanel" aria-labelledby="vim1-tab">

这里以 `sys_led` 为例进行说明。

* 关闭LED

输入`none`参数关闭LED：

```bash
$ echo none | sudo tee /sys/class/leds/sys_led/trigger
```
* 打开LED

输入参数`default-on`打开LED：

```bash
$ echo default-on | sudo tee /sys/class/leds/sys_led/trigger
```

* 设置心跳闪烁

设置`heartbeat`可以让LED以心跳的方式闪烁：

```bash
$ echo heartbeat | sudo tee /sys/class/leds/sys_led/trigger
```

你也可以尝试其他参数。

</div>
<div class="tab-pane fade" id="vim4" role="tabpanel" aria-labelledby="vim4-tab">

* 关闭LED

输入`none`参数关闭LED：

```bash
$ echo none | sudo tee /sys/class/leds/pwmled/trigger
```

* 打开LED

输入参数`default-on`打开LED：

```bash
$ echo default-on | sudo tee /sys/class/leds/pwmled/trigger
```

* 设置心跳闪烁

设置`heartbeat`可以让LED以心跳的方式闪烁：

```bash
$ echo heartbeat | sudo tee /sys/class/leds/pwmled/trigger
```

你也可以尝试其他参数。
  </div>
</div>
