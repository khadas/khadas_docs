title: 创建启动SD卡
---

什么是启动SD卡？

* 启动SD卡包含U-boot
* 启动卡又可以称为启动盘，在板载eMMC里面没有固件的情况下，可以用于启动你的板子

为什么需要SD启动卡？
* 在开发中使用SD启动卡提升调试效率
* 发布SD卡固件会使用到
* 在某些情况下固件无法从eMMC启动时，可以通过SD卡启动

{% note info 由于VIM1、VIM2和VIM3操作方式基本上是一样的，所以本文档以VIM1为例进行说明。%}

{% endnote %}

## 开始制作
下载([VIM1](https://dl.khadas.com/Firmware/VIM1/U-boot/)/[VIM2](https://dl.khadas.com/Firmware/VIM2/U-boot/)/[VIM3](https://dl.khadas.com/Firmware/VIM3/U-boot/))或编译U-boot 获取U-boot镜像。

不管通过哪种方式，你都会得到不同的镜像：

* `u-boot.bin.sd.bin` 是SD卡镜像
* `u-boot.bin` 是eMMC镜像

把SD卡插入电脑并卸载：

```bash
$ sudo umount /dev/sdX1
```

格式化SD卡为Fat32文件系统:

```bash
$ sudo mkfs.vfat /dev/sdX1 
```

通过`dd`命令把U-boot写入SD卡：

```bash
$ sudo dd if=u-boot.bin.sd.bin of=/dev/sdX conv=fsync,notrunc bs=1 count=444
$ sudo dd if=u-boot.bin.sd.bin of=/dev/sdX conv=fsync,notrunc bs=512 skip=1 seek=1
```

从PC移除SD卡:

```bash
$ sudo eject /dev/sdX
```

{% note info 注意 %}

请替换`sdX`为你自己电脑上的正确的块设备。

{% endnote %}

## 检查

确保串口连接正确，参考这里([VIM1](/zh-cn/vim1/SetupSerialTool.html)/[VIM2](/zh-cn/vim2/SetupSerialTool.html)/[VIM3](/zh-cn/vim3/SetupSerialTool.html))。

为了确保U-boot从SD卡启动，你必须擦除eMMC([VIM1](/zh-cn/vim1/HowtoEraseEMMC.html)/[VIM2](/zh-cn/vim2/HowtoEraseEMMC.html)/[VIM3](/zh-cn/vim3/HowtoEraseEMMC.html))。

打开终端，执行`sudo minicom`命令或者你也可以选则其他你喜欢的串口工具。

插入刚做好的SD卡到VIM并上电，你会看到如下打印信息，说明系统是从SD卡启动的：

```bash
GXL:BL1:9ac50e:a1974b;FEAT:ADFC318C;POC:3;RCY:0;EMMC:0;READ:0;CHK:AA;SD:0;READ:0;0.0;CHK:0;
no sdio debug board detected 
TE: 194208

BL2 Built : 13:48:56, Sep 23 2016. 
gxl g7459bd4 - jianxin.pan@droid06

set vcck to 1120 mv
set vddee to 1000 mv
Board ID = 6
CPU clk: 1200MHz
DQS-corr enabled
DDR scramble enabled
DDR3 chl: Rank0+1 @ 792MHz - PASS
Rank0: 1024MB(auto)-2T-11
Rank1: 1024MB(auto)-2T-11
DataBus test pass!
AddrBus test pass!
Load fip header from SD, src: 0x0000c200, des: 0x01400000, size: 0x00004000
New fip structure!
Load bl30 from SD, src: 0x00010200, des: 0x01100000, size: 0x0000d600
Load bl31 from SD, src: 0x00020200, des: 0x10100000, size: 0x00015400
Load bl33 from SD, src: 0x00038200, des: 0x01000000, size: 0x000a3400
NOTICE:  BL3-1: v1.0(debug):2e39a99
...

```
