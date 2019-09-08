title: How To Setup A Cooling Fan
---

This guide is about how to setup a cooling fan in Ubuntu.

### Preparations

* Ubuntu version must be `V20190116` or newer

For Ubuntu `V20190116`, the cooling fan is enabled by default.

The cooling fan has 5 working modes:

* `off` : Cooling fan is disabled.
* `low` : Cooling fan is working at low speed mode.
* `mid` : Coolinn fan is working at middle speed mode.
* `high`: Cooling fan is working at high speed mode.
* `auto`: Cooling fan is working at auto speed mode. By default, the fan speed is determined by CPU temperature.
* `on`  : Cooling fan alias for `auto`. See above.

### Setup Working Mode

You can edit file `/boot/env.txt` to setup the fan mode, the default mode is `auto`.

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

```bash
khadas@Khadas:~$ sync
khadas@Khadas:~$ sudo reboot
```

### Query fan mode/level, temperature and trigger after boot

To query the fan mode/level, temperature and trigger after booting use the following commands:

* `mode` : Query the actual fan mode/level.
* `temp` : Query the actual CPU temperature.
* `trig` : Query the three different temperature trigger for low, mid and high fan level.

```bash
khadas@Khadas:~$ sudo fan.sh --help
Help: Command line parameters:

Usage: /usr/local/bin/fan.sh [on|auto|off]  :: Set fan mode
       /usr/local/bin/fan.sh [low|mid|high] :: Set fan level
       /usr/local/bin/fan.sh [temp]         :: Query cpu temperature
       /usr/local/bin/fan.sh [trig]         :: Query fan trigger temperature
       /usr/local/bin/fan.sh [mode]         :: Query fan mode/level
       /usr/local/bin/fan.sh [--help|-h]    :: This text

Examp: /usr/local/bin/fan.sh auto
```
