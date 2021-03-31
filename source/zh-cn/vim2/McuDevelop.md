title: 安装STM8开发环境--基于Ubuntu 16.04
---

## 概述
* 本文档是关于如何在Ubuntu上搭建STM8的开发环境。搭建环境时会安装SDCC编译器和stm8flash烧录工具。

* SDCC 和 stm8flash 都是开源项目, 更多细节请查看[SDCC](http://sdcc.sourceforge.net/), [stm8flash](https://github.com/vdudouyt/stm8flash).

* 除了SDCC外，还有几个工具都可用于STM8的开发,比如：STVD, IAR, Cosmic(free) ……

* 开始搭建开发环境前先安装好Ubuntu操作系统并准备好烧录器ST-LINK V2。

## 安装编译器：SDCC
### 安装

```
$ sudo apt-get install sdcc sdcc-doc sdcc-libraries sdcc-ucsim

```

### 查看SDCC版本（从下面的版本信息可以看出SDCC已经支持编译STM8了）。
```
$ sdcc -v
SDCC : mcs51/z80/z180/r2k/r3ka/gbz80/tlcs90/ds390/TININative/ds400/hc08/s08/stm8 3.5.0 #9253 (Mar 24 2016) (Linux)
published under GNU General Public L1cense (GPL)
```

## 安装烧录工具：stm8flash
### 下载stm8flash
```
$ git clone https://github.com/vdudouyt/stm8flash.git
```
### 编译并安装stm8flash烧录工具
```
$ cd stm8flash
$ make
$ sudo make install
```

## 烧录器与VIM2的连接
### 烧录器只需要连接 **VCC_MCU, MCU_SWIM, MCU_NRST, GND** 就可以实现烧录。
![VIM2 MCU Header](/images/vim2/vim2_mcu_header.png)
![VIM2 MCU Header Description](/images/vim2/vim2_mcu_header_desc.png)


## 增加USB烧录器的权限

### 烧录器与PC连接后查看USB烧录器的ID号。
```
$ lsusb
Bus 001 Device 003: ID 0483:3748 STMicroelectronics ST-LINK/V2
```

### 增加下面内容到文件/etc/udev/rules.d/51-android.rules，并保存。
```
#STMicroelectronics ST-LINK/V2
SUBSYSTEM=="usb", ATTR{idVendor}=="0483", ATTR{idProduct}=="3748", MODE="0666", OWNER="<kenny>"
```
  提示: 用当前的用户名替换掉上面的用户名kenny。

## 编译烧录例程

### 解压源码
```
$ tar -zxvf mcu_20180322.tar.gz
```

### 编译源码 (由于sdcc不支持多文件同时编译，代码里面用Makefile来管理)
```
$ cd Khadas/
$ make
sdcc -D__SDCC__ -I./ -I/usr/share/sdcc/include -mstm8 --out-fmt-ihx -c uart.c
sdcc -D__SDCC__ -I./ -I/usr/share/sdcc/include -mstm8 --out-fmt-ihx -c clk.c
sdcc -D__SDCC__ -I./ -I/usr/share/sdcc/include -mstm8 --out-fmt-ihx -c flash.c
sdcc -D__SDCC__ -I./ -I/usr/share/sdcc/include -mstm8 --out-fmt-ihx -c gpio.c
sdcc -D__SDCC__ -I./ -I/usr/share/sdcc/include -mstm8 --out-fmt-ihx -c int.c
sdcc -D__SDCC__ -I./ -I/usr/share/sdcc/include -mstm8 --out-fmt-ihx -c main.c
sdcc -D__SDCC__ -I./ -I/usr/share/sdcc/include -mstm8 --out-fmt-ihx -c tim4.c
sdcc -D__SDCC__ -I./ -I/usr/share/sdcc/include -mstm8 --out-fmt-ihx -c tim1.c
tim1.c:70: warning 116: right shifting more than size of object changed to zero
sdcc -D__SDCC__ -I./ -I/usr/share/sdcc/include -mstm8 --out-fmt-ihx -c tim2.c
tim2.c:53: warning 116: right shifting more than size of object changed to zero
sdcc -D__SDCC__ -I./ -I/usr/share/sdcc/include -mstm8 --out-fmt-ihx -c i2c.c
sdcc -D__SDCC__ -I./ -I/usr/share/sdcc/include -mstm8 --out-fmt-ihx -c adc.c
sdcc -mstm8 --out-fmt-ihx -lstm8 uart.rel clk.rel flash.rel gpio.rel int.rel main.rel tim4.rel tim1.rel tim2.rel i2c.rel adc.rel -o khadas.ihx
packihx khadas.ihx > khadas.hex
packihx: read 250 lines, wrote 491: OK.
```

### 烧录固件
```
$ make load
stm8flash -cstlinkv2 -pstm8s003?3 -s eeprom -w eeprom.hex
Determine EEPROM area
Writing Intel hex file 128 bytes at 0x4000... OK
Bytes written: 128
stm8flash -cstlinkv2 -pstm8s003?3 -s flash -w khadas.ihx
Determine FLASH area
Writing Intel hex file 8003 bytes at 0x8000... OK
Bytes written: 8003
```

## 参考
[MCU代码](https://github.com/khadas/vim2-mcu)
