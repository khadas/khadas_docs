title: How To Use 1-Wire
---

Take VIM1 as an example, VIM2 please replace dtb with `kvim2_linux.dtb`, and VIM3 please replace dtb with `kvim3_linux.dtb`.

# Connect 1-Wire module

Take the `ds18b20` module as an example. Connect the device to the physical pin `Pin15`.

# Open 1-Wire dtb node 

* Switch to root user

```shell
khadas@Khadas:~$ su
Password:
root@Khadas:/home/khadas#
```


* Check node status

```shell
root@Khadas:/home/khadas# fdtget /boot/dtb/kvim1_linux.dtb /onewire status
disable
```

* Enable node

```shell
root@Khadas:/home/khadas# fdtput -t s /boot/dtb/kvim1_linux.dtb /onewire status "okay"
root@Khadas:/home/khadas# fdtget /boot/dtb/kvim1_linux.dtb /onewire status
okay
```

use this command can disable it 

```shell
root@Khadas:/home/khadas# fdtput -t s /boot/dtb/kvim1_linux.dtb /onewire status "disable"
```

* reboot

Restart the device and load the 1-Wire driver.

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

