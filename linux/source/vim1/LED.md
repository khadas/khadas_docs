title: LED
---

## LED Nodes

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
  
  VIM1/VIM2 has only one node.

  ```
  $ ls /sys/class/leds
  sys_led
  ```
  </div>
  <div class="tab-pane fade" id="vim3-node" role="tabpanel" aria-labelledby="vim3-tab">

  VIM3/VIM3L has two nodes.

  ```
  ls /sys/class/leds
  red_led  sys_led
  ```
  </div>
  <div class="tab-pane fade" id="vim4-node" role="tabpanel" aria-labelledby="vim4-tab">

  VIM4 has only one node `pwmled`.

  ```
  ls /sys/class/leds
  pwmled
  ```
  </div>
</div>


## Setup LED


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

Lets use `sys_led` (white) as an example:

* Turn off

Set the LED node parameter to `none` to turn off the LED:

```
$ echo none | sudo tee > /sys/class/leds/sys_led/trigger
```

* Turn on

Set the LED node parameter to `default-on` to keep the LED permanently on:

```
$ echo default-on | sudo tee > /sys/class/leds/sys_led/trigger
```

* Set LED heartbeat

Set the LED node parameter to `heartbeat`, to make the LED flash with a heartbeat blink:

```
$ echo heartbeat > /sys/class/leds/sys_led/trigger
```

You can also experiment with other parameters.                                                                                                                                            

  </div>
  <div class="tab-pane fade" id="vim4" role="tabpanel" aria-labelledby="vim4-tab">

Lets use `pwmled` (white) as an example:

* Turn off

Set the LED node parameter to `none` to turn off the LED:

```
$ echo none | sudo tee > /sys/class/leds/pwmled/trigger
```

* Turn on

Set the LED node parameter to `heartbeat`, to make the LED flash with a heartbeat rhythm:

```
$ echo heartbeat | sudo tee > /sys/class/leds/pwmled/trigger
```

* Set LED heartbeat

Set the LED node parameter to `heartbeat`, to make the LED flash with a heartbeat blink:

```
$ echo heartbeat > /sys/class/leds/pwmled/trigger
```

You can also experiment with other parameters.

  </div>
</div>

