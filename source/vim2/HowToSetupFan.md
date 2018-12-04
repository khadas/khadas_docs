title: How To Setup A Cooling Fan
---

This guide is about how to setup a cooling fan in Ubuntu.

### Preparations
* Ubuntu version must be `V20180531` or newer

For Ubuntu `V20180531`, the cooling fan is enabled by default.

The cooling fan has 5 working modes:
* `off` : Cooling fan is disabled.
* `low` : Cooling fan is working at low speed mode.
* `mid` : Coolinn fan is working at middle speed mode.
* `high`: Cooling fan is working at high speed mode.
* `auto`: Cooling fan is working at auto speed mode. By default, the fan speed is determined by CPU temperature.

### Check Working Mode
```
$ fw_printenv fan
fan=auto
```
`fan=auto` means the working mode is currently set to `auto`.

### Setup Working Mode

* Set cooling fan to `low` speed mode:

```
$ sudo fw_setenv fan low
$ sudo reboot
```

* Set cooling fan to `mid` speed mode:

```
$ sudo fw_setenv fan mid
$ sudo reboot
```
* Set cooling fan to `high` speed mode:

```
$ sudo fw_setenv fan high
$ sudo reboot
```

* Set cooling fan to `auto` speed mode:

```
$ sudo fw_setenv fan auto
$ sudo reboot
```

* Disable cooling fan:

```
$ sudo fw_setenv fan off
$ sudo reboot
```
