title: 安装系统到SD卡或U盘
---

{% note info 注意 %}

请把`SD/USB`固件安装到SD卡或U盘，如果把其他固件安装到SD卡或U盘将会导致系统无法正常启动。

{% endnote %}

有多种方法可以把SD/USB固件安装到SD卡或U盘。

* 下载烧录工具[Etcher](https://www.balena.io/etcher/), 它会将镜像写入你的SD卡或U盘中。它为初学者提供了一个用户友好的图形用户界面，与Mac、Windows和Linux兼容，解压后是一个可执行文件，直接执行即可。选择固件，它将自动识别您的USB设备，然后烧录就可以了。

![How to Use Etcher](/linux/images/vim1/howto_use_etcher.gif)

* 在`Ubuntu`下使用`dd`命令直接写入：

```
$ sudo dd if=/path/to/image of=/dev/sdX bs=8M
```
