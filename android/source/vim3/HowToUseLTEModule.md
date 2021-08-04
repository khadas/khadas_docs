title: How To Use LTE Module
---

## Check operators and frequency bands supported by your region

You can view it on the following two websites:

1. [frequencycheck](https://www.frequencycheck.com/carriers)
2. [spectrumonitoring](https://www.spectrummonitoring.com/frequencies/)

## LTE module working mode setting

### Install minicom in your boarad

```shell
$ sudo apt update
$ sudo apt install minicom
```

### Setting to USBNet mode

```shell
$ minicom -D /dev/ttyUSB2
```

atfer open minicom , enter:

```shell
AT+QCFG="usbnet",2

OK
```

### Power down and restart

LTE module needs power down and restart to switch mode. Unplug VIMS and plug in again. LTE module now works in usbnet mode

### Restore LTE module

```shell
$ minicom -D /dev/ttyUSB2
```

The default mode is ` 0`

```shell
AT+QCFG="usbnet",0
```

Power down and restart to switch back to default mode


