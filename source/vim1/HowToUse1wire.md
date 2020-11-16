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

