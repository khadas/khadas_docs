title: Ubuntu system configuration file Usage
---

This document will introduce how to use the configuration file of the Ubuntu system

{% note warn All the functions in the configuration file are not valid for the main line and 4.9, please check the corresponding function introduction %}
{% endnote %}

## Introduction

`env.txt` is located in the `/boot` directory and is an environment configuration file used to configure the functions of the Ubuntu system.
The system will read this file when it starts to set HDMI, fan, CPU frequency, etc.

Modify this file, you can change the settings of these functions.

```sh
$ sudo vim /boot/env.txt
```

## Fan Setting

{% note info Only applicable to the firmware of the 4.9 kernel %}

{% endnote %}

### Fan level

* `off` : Cooling fan is disabled.
* `low` : Cooling fan is working at low speed mode.
* `mid` : Coolinn fan is working at middle speed mode.
* `high`: Cooling fan is working at high speed mode.
* `auto`: Cooling fan is working at auto speed mode. By default, the fan speed is determined by CPU temperature.

### Change Fan Level

* Set cooling fan to `low` speed mode:

  * Edit file `/boot/env.txt` and set `fan_mode=low`.

* Set cooling fan to `mid` speed mode:

  * Edit file `/boot/env.txt` and set `fan_mode=mid`.

* Set cooling fan to `high` speed mode:

  * Edit file `/boot/env.txt` and set `fan_mode=high`.

* Set cooling fan to `auto` speed mode:

  * Edit file `/boot/env.txt` and set `fan_mode=auto`.

* Disable cooling fan:

  * Edit file `/boot/env.txt` and set `fan_mode=off`.

After edit the file, you need to save the file and reboot the board.

```bash
khadas@Khadas:~$ sync
khadas@Khadas:~$ sudo reboot
```


