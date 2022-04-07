title: 编译Linux内核
---

这篇文档会介绍如何编译Linux内核源码。

我们推荐使用[Fenix](https://github.com/khadas/fenix)来编译Linux内核源码，只需要简单几条命令即可完成编译。如果还没有搭建开发环境，请参考文档[编译Ubuntu/Debian固件](fenix_script.html)搭建开发环境。

## 设置环境

选择需要编译的板子型号，如：`VIM4`，U-Boot版本，Linux版本，系统版本等等。

```bash
$ source setenv.sh
```

{% note info Note %}
目前每个板子都支持两个版本的Linux。如下：
* 芯片原厂自带的原始Linux，版本为`5.4`，该版本功能全面，但是版本比较旧
* 主线版本Linux，版本会一直随主线更新，该版本功能相对不是很完善，但是版本跟随主线
{% endnote %}

根据实际需求选择不同的Linux版本。

## 修改内核配置[**可选的**]

如果你想要修改默认的内核配置，可以参考如下步骤。

```
$ make kernel-config
$ make kernel-saveconfig
```

## 编译

通过简单的命令即可编译Linux Debian包。

```bash
$ make kernel
$ make kernel-deb
```

编译后的Debian包在目录`build/images/debs/{VERSION}/{BOARD}`下：

**VERSION** ：表示Fenix版本号，如`1.0.7`
**BOARD** ：表示对应的板子，如`VIM4`

所以目录可能为`build/images/debs/1.0.7/VIM4`，其中有三个包是我们所需要的，分别为：dtb包，image包和头文件包。

* 4.9
  * DTB - `linux-dtb-amlogic-5.4_1.0.7_arm64.deb`
  * IMAGE - `linux-image-amlogic-5.4_1.0.7_arm64.deb`
  * Header - `linux-headers-amlogic-5.4_1.0.7_arm64.deb`
* Mainline
  * DTB - `linux-dtb-amlogic-mainline_1.0.7_arm64.deb`
  * IMAGE - `linux-image-amlogic-mainline_1.0.7_arm64.deb`
  * Header - `linux-headers-amlogic-mainline_1.0.7_arm64.deb`


## 参考
[更新Linux内核](upgrade_system.html)
