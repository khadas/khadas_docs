title: How To Use 1-Wire
---

{% note info Take VIM1 as an example. %}

{% endnote %}

## Enable 1-Wire Driver

Edit `/boot/env.txt` to add `onewire` to `overlays`.

e.g. 

```bash
overlays=uart4 pwm_ao_a pwm_f i2c0 onewire
```

For details on overlays, please refer to [how to use device tree overlays](/vim1/HowToUseDeviceTreeOverlay.html).

## Uasge

Here we attach a `1-Wire device `DS18B20` temperature sensor to the `1-Wire` bus.

Goto the driver directory:

```bash
khadas@Khadas:~$ cd /sys/bus/w1/devices
khadas@Khadas:/sys/bus/w1/devices$ ls
28-0119395ebf91  w1_bus_master1
```

You can see the node of `ds18b20` is `28-0119395ebf91`. Goto this directory:

```
khadas@Khadas:/sys/bus/w1/devices$ cd 28-0119395ebf91
khadas@Khadas:/sys/bus/w1/devices/28-0119395ebf91$ ls
driver  id  name  power  subsystem  uevent  w1_slave
```

Read `w1_slave` file will get the temperature value:

```
khadas@Khadas:/sys/bus/w1/devices/28-0119395ebf91$ cat w1_slave
b1 01 4b 46 7f ff 0c 10 d8 : crc=d8 YES
b1 01 4b 46 7f ff 0c 10 d8 t=27062
```

Physical pins of onewire bus:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#vim1-phy" role="tab" aria-controls="vim1" aria-selected="true">VIM1</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#vim2-phy" role="tab" aria-controls="vim2" aria-selected="false">VIM2</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#vim3-phy" role="tab" aria-controls="vim3" aria-selected="false">VIM3/VIM3L</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="vim1-phy" role="tabpanel" aria-labelledby="vim1-tab">
  GPIOH5 - PIN37
  </div>
  <div class="tab-pane fade" id="vim2-phy" role="tabpanel" aria-labelledby="vim2-tab">
  GPIOH5 - PIN37
  </div>
  <div class="tab-pane fade" id="vim3-phy" role="tabpanel" aria-labelledby="vim3-tab">
  GPIOH6 - PIN15
  </div>
</div>

