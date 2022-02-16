title: 从外部媒体介质启动系统
---


有很多系统运行在SD卡或U盘上，例如：
* Khadas SD images
  * [VIM4](https://dl.khadas.com/Firmware/VIM4/Ubuntu/SD_USB/)

这篇文档将介绍如何启动这些固件。

## 把固件写入到SD卡或U盘

参考[安装操作系统到SD/USB存储](InstallOsIntoSdusb.html)。

## 启动

把SD卡或U盘插入到板子，然后上电，系统会自动从SD卡或U盘启动。

{% note warn 注意 %}

如果SPI Flash或eMMC都没有固件，那么将无法直接从U盘启动固件。必须小烧录固件到eMMC或SPI Falsh后才能从U盘启动系统。

{% endnote %}

## 参考

[系统启动优先级](BootSequeue.html)
