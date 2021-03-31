title: How To Control LEDs
---

## Switch to root user

Only the root user has the authority to control and modify the node status of the LEDs.

```bash
khadas@Khadas:~$ su
Password:
root@Khadas:/home/khadas#
```

## Check LED Node

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
  
  VIM1 has only one node.

  ```bash
  root@Khadas:/home/khadas# cd /sys/class/leds/
  root@Khadas:/sys/class/leds# ls
  sys_led
  ```
  </div>
  <div class="tab-pane fade" id="vim2-node" role="tabpanel" aria-labelledby="vim2-tab">

  VIM2 has only one node.

  ```bash
  root@Khadas:/home/khadas# cd /sys/class/leds/
  root@Khadas:/sys/class/leds# ls
  sys_led
  ```
  </div>
  <div class="tab-pane fade" id="vim3-node" role="tabpanel" aria-labelledby="vim3-tab">

  VIM3/VIM3L has two nodes.

  ```bash
  root@Khadas:/home/khadas# cd /sys/class/leds/
  root@Khadas:/sys/class/leds# ls
  red_led  sys_led
  ```
  </div>
</div>


## How To Use

Here takes `sys_led` as an example:

```bash
root@Khadas:/sys/class/leds# cd sys_led
root@Khadas:/sys/class/leds/sys_led# ls
brightness  device  invert  max_brightness  power  subsystem  trigger  uevent
```

Check the parameters:

```bash
root@Khadas:/sys/class/leds/sys_led# cat trigger
none rc-feedback kbd-scrolllock kbd-numlock kbd-capslock kbd-kanalock kbd-shiftlock kbd-altgrlock kbd-ctrllock kbd-altlock kbd-shiftllock kbd-shiftrlock kbd-ctrlllock kbd-ctrlrlock timer oneshot [heartbeat] backlight gpio cpu0 cpu1 cpu2 cpu3 cpu4 cpu5 default-on transient panic rc_feedback emmc sd sdio rfkill0 rfkill1 rfkill2 rfkill3
```

* Turn off

Set `none` parameter to turn off the LED:

```bash
root@Khadas:/sys/class/leds/sys_led# echo none > trigger
```

* Turn on

Set `default-on` parameter to turn off the LED:

```bash
root@Khadas:/sys/class/leds/sys_led# echo default-on > trigger
```

Set `heartbeat` to make the LED heartbeat flash:

```bash
root@Khadas:/sys/class/leds/sys_led# echo heartbeat > trigger
```

You can also try other parameters.
