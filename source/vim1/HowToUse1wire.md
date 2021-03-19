title: How To Use 1-Wire
---

Take VIM1 as an example, VIM2 please replace dtb with `kvim2_linux.dtb`, and VIM3 please replace dtb with `kvim3_linux.dtb`.

# Connect 1-Wire module

```shell
$ vim /boot/env.txt
```

Add onewire to configuration file

```shell
overlays=uart4 pwm_ao_a pwm_f i2c0 --> overlays=uart4 pwm_ao_a pwm_f i2c0 onewire
```

For details on overlays, please refer to [how to use device tree overlays](/vim1/HowToUseDeviceTreeOverlay.html)

# How TO Use 

enter driver directory,

```shell
khadas@Khadas:~$ cd /sys/bus/w1/devices
khadas@Khadas:/sys/bus/w1/devices$ ls
28-0119395ebf91  w1_bus_master1
```
the `ds18b20` node is `28-0119395ebf91`. enter node directory,

```shell
khadas@Khadas:/sys/bus/w1/devices$ cd 28-0119395ebf91
khadas@Khadas:/sys/bus/w1/devices/28-0119395ebf91$ ls
driver  id  name  power  subsystem  uevent  w1_slave
```

The value of the module can be read by reading the `w1_slave` file.

```shell
khadas@Khadas:/sys/bus/w1/devices/28-0119395ebf91$ cat w1_slave 
b1 01 4b 46 7f ff 0c 10 d8 : crc=d8 YES
b1 01 4b 46 7f ff 0c 10 d8 t=27062
```

Physical pins of onewire

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#vim1-phy" role="tab" aria-controls="vim1" aria-selected="true">VIM1</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#vim2-phy" role="tab" aria-controls="vim2" aria-selected="false">VIM2</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#vim3-phy" role="tab" aria-controls="vim3" aria-selected="false">VIM3</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="vim1-phy" role="tabpanel" aria-labelledby="vim1-tab">
  ```sh
  GPIOH5   --- PIN37
  ```
  </div>
  <div class="tab-pane fade" id="vim2-phy" role="tabpanel" aria-labelledby="vim2-tab">
  ```sh
  GPIOH5   --- PIN37
  ```
  </div>
  <div class="tab-pane fade" id="vim3-phy" role="tabpanel" aria-labelledby="vim3-tab">
  ```sh
  GPIOH6   --- PIN15
  ```
  </div>
</div>

