title: 如何控制LED
---

## 切换root用户

只有root用户有权限控制修改LED灯的节点状态。

```bash
khadas@Khadas:~$ su
Password:
root@Khadas:/home/khadas#
```

## 查看LED节点

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#vim1-node" role="tab" aria-controls="vim1" aria-selected="true">VIM1</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#vim2-node" role="tab" aria-controls="vim2" aria-selected="false">VIM2</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#vim3-node" role="tab" aria-controls="vim3" aria-selected="false">VIM3/VIM3L</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="vim1-node" role="tabpanel" aria-labelledby="vim1-tab">

  VIM1只有一个LED节点。

  ```bash
  root@Khadas:/home/khadas# cd /sys/class/leds/
  root@Khadas:/sys/class/leds# ls
  sys_led
  ```
  </div>
  <div class="tab-pane fade" id="vim2-node" role="tabpanel" aria-labelledby="vim2-tab">
  
  VIM2只有一个LED节点。

  ```bash
  root@Khadas:/home/khadas# cd /sys/class/leds/
  root@Khadas:/sys/class/leds# ls
  sys_led
  ```
  </div>
  <div class="tab-pane fade" id="vim3-node" role="tabpanel" aria-labelledby="vim3-tab">

  VIM3/VIM3L有两个LED节点。

  ```bash
  root@Khadas:/home/khadas# cd /sys/class/leds/
  root@Khadas:/sys/class/leds# ls
  red_led  sys_led
  ```
  </div>
</div>

## 使用LED

这里以`sys_led`为例.

```bash
root@Khadas:/sys/class/leds# cd sys_led
root@Khadas:/sys/class/leds/sys_led# ls
brightness  device  invert  max_brightness  power  subsystem  trigger  uevent
```

查看所有可设置的参数：

```bash
root@Khadas:/sys/class/leds/sys_led# cat trigger
none rc-feedback kbd-scrolllock kbd-numlock kbd-capslock kbd-kanalock kbd-shiftlock kbd-altgrlock kbd-ctrllock kbd-altlock kbd-shiftllock kbd-shiftrlock kbd-ctrlllock kbd-ctrlrlock timer oneshot [heartbeat] backlight gpio cpu0 cpu1 cpu2 cpu3 cpu4 cpu5 default-on transient panic rc_feedback emmc sd sdio rfkill0 rfkill1 rfkill2 rfkill3
```

* 关闭LED

输入`none`参数关闭LED：

```bash
root@Khadas:/sys/class/leds/sys_led# echo none > trigger
```
* 打开LED

输入参数`default-on`打开LED：

```bash
root@Khadas:/sys/class/leds/sys_led# echo default-on > trigger
```

* 心跳闪烁

设置`heartbeat`可以让LED以心跳的方式闪烁：

```bash
root@Khadas:/sys/class/leds/sys_led# echo heartbeat > trigger
```

你也可以尝试其他参数。
