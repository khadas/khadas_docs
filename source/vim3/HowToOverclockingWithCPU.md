title: How to set CPU overclocking
---

## Overclocking settings

1. Overclocking configiure file path :`/boot/env.txt`

2. edit configiure file

```shell
sudo vim /boot/env.txt
```

3. Change overclocking settings

* VIM3

Overclocking settings with `Little Core`

```shell
max_freq_a53=1800
```

Overclocking settings with `Big Core`

```shell
max_freq_a73=2208
```

* VIM3L

```shell
max_freq_a55=1908
```

There is a frequency list above each frequency setting, which can be set to any one in the list.

4. Reboot

After the frequency is set, it needs to be restarted to take effect.

## Check whether the setting takes effect

Check the frequency value through the system.

```shell
cat /sys/devices/system/cpu/cpufreq/policyX/cpuinfo_cur_freq
```

**Note**: `policyX` needs to be replaced according to the CPU core you need to check


## Check temperature

View the CPU temperature at different frequencies

```shell
cat /sys/class/thermal/thermal_zone0/temp
```

**Note**: After overclocking, the CPU temperature will be higher, it is best to use it with a heatsink and cooling fan

