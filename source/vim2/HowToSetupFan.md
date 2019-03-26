title: How To Setup A Cooling Fan
---

This guide is about how to setup a cooling fan in Ubuntu.

### Preparations
* Ubuntu version must be `V20190319` or newer

For Ubuntu `V20190319`, the cooling fan is enabled by default.

The cooling fan has 5 working modes:
* `off` : Cooling fan is disabled.
* `low` : Cooling fan is working at low speed mode.
* `mid` : Coolinn fan is working at middle speed mode.
* `high`: Cooling fan is working at high speed mode.
* `auto`: Cooling fan is working at auto speed mode. By default, the fan speed is determined by CPU temperature.

### Setup Working Mode

You can edit file `/boot/env.txt` to setup the FAN mode, the default mode is `auto`.

* Set cooling fan to `low` speed mode:

Edit file `/boot/env.txt` and set `fan_mode=low`.

* Set cooling fan to `mid` speed mode:

Edit file `/boot/env.txt` and set `fan_mode=mid`.

* Set cooling fan to `high` speed mode:

Edit file `/boot/env.txt` and set `fan_mode=high`.

* Set cooling fan to `auto` speed mode:

Edit file `/boot/env.txt` and set `fan_mode=auto`.

* Disable cooling fan:

Edit file `/boot/env.txt` and set `fan_mode=off`.

After edit the file, please save the modification and reboot the board.

```
khadas@Khadas:~$ sync
khadas@Khadas:~$ sudo reboot
```
