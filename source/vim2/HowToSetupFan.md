title: How To Setup Cooling Fan
---

This tutorial is about how to setup cooling fan on Ubuntu.

### Preperations
* Ubuntu version must be `V20180531` ro newer

For Ubuntu `V20180531`, the cooling fan is enabled by default.

The cooling fan has 5 working modes:
* `off`: Cooling fan is disabled.
* `low`: Cooling fan is working on low speed mode.
* `mid`: Coolinn fan is working on middle speed mode.
* `high`: Cooling fan is working on higt speed mode.
* `auto`: Cooling fan is working on auto speed mode, setup speed depend on the temperature, it is the default mode.

### Check Current Working Mode
```
khadas@Khadas:~$ fw_printenv fan
fan=auto
```
`fan=auto` means current mode is `auto` speed mode.

### Setup Working Mode

* Setup cooling fan `low` speed mode

```
khadas@Khadas:~$ sudo fw_setenv fan low
khadas@Khadas:~$ sudo reboot
```

* Setup cooling fan `mid` speed mode

```
khadas@Khadas:~$ sudo fw_setenv fan mid
khadas@Khadas:~$ sudo reboot
```
* Setup cooling fan `high` speed mode

```
khadas@Khadas:~$ sudo fw_setenv fan high
khadas@Khadas:~$ sudo reboot
```

* Setup cooling fan `auto` speed mode

```
khadas@Khadas:~$ sudo fw_setenv fan auto
khadas@Khadas:~$ sudo reboot
```

* Disable cooling fan

```
khadas@Khadas:~$ sudo fw_setenv fan off
khadas@Khadas:~$ sudo reboot
```
