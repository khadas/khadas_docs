title: How To Use 1-Wire
---

Take Edge-V as an example, Caption please replace dtb with `rk3399-khadas-captain-linux.dtb`. Edge not support this driver.

# Connect 1-Wire module

```shell
$ vim /boot/env.txt
```

Add onewire to configuration file (default is enable)

```shell
overlays=i2c2 spi3 i2s0 onewire
```

For details on overlays, please refer to [how to use device tree overlays](/edge/HowToUseDeviceTreeOverlay.html)


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

