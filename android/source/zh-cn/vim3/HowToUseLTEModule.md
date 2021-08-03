title: 如何使用LTE模块
---

## 查看所在地区支持的运营商和频段

可以在以下两个网站进行查看:

1. [frequencycheck](https://www.frequencycheck.com/carriers)
2. [spectrumonitoring](https://www.spectrummonitoring.com/frequencies/)


## LTE模块工作模式设置

### VIMs上安装monicom

```shell
$ sudo apt update
$ sudo apt install minicom
```

### 设置成USBNet模式

```shell
$ minicom -D /dev/ttyUSB2
```

打开minicom以后,输入

```shell
AT+QCFG="usbnet",2

OK
```

### 掉电重启

LITE模块需要掉电重启才能切换模式，拔出VIMs的电源，重新插上。LTE模块现在就工作在USBNet模式了

### 恢复LTE模块

```shell
$ minicom -D /dev/ttyUSB2
```

默认的工作方式是`0`

```shell
AT+QCFG="usbnet",0
```

同样掉电重启切换回默认模式

