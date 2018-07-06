title: Setup STM8 Development Environment on Ubuntu 16.04
---

### Summary
* This documentation is about how to install STM8 development environment on Ubuntu. From this documentation, that will show how to install SDCC compiler and stm8flash burnning tool.

* SDCC and stm8flash is opensource project, for more details about [SDCC](http://sdcc.sourceforge.net/), for more details about [stm8flash](https://github.com/vdudouyt/stm8flash).

* There are several kinds of software to compile STM8, such as STVD, IAR, Cosmic(free) etc.

* Be sure that Ubuntu is ready and the ST-LINK V2 for STM8 also prepare.

### Install SDCC compiler
#### Install

```
$ sudo apt-get install sdcc sdcc-doc sdcc-libraries sdcc-ucsim

```

#### Check SDCC version, this info show that STM8 has been supported.
```
$ sdcc -v
SDCC : mcs51/z80/z180/r2k/r3ka/gbz80/tlcs90/ds390/TININative/ds400/hc08/s08/stm8 3.5.0 #9253 (Mar 24 2016) (Linux)
published under GNU General Public L1cense (GPL)
```

### Install stm8flash burnning tool.
#### Download stm8flash
```
$ git clone https://github.com/vdudouyt/stm8flash.git
```
#### Compile and install stm8flash tool
```
$ cd stm8flash
$ make
$ sudo make install
```

### How to connect VIM2 and ST-LINK V2
#### To upgrade STM8 firmware just connect VCC_MCU, MCU_SWIM, MCU_NRST and GND between VIM2 and ST-LINK V2 tool
![VIM2 MCU Header](/images/vim2/vim2_mcu_header.png)
![VIM2 MCU Header Description](/images/vim2/vim2_mcu_header_desc.png)

### Add the permissions of the ST-LINK V2 tool

#### Connect ST-LINK V2 tool and PC through usb cable,  and get the ID of ST-LINK V2 tool.
```
$ lsusb
Bus 001 Device 003: ID 0483:3748 STMicroelectronics ST-LINK/V2
```

#### Add the following contents into /etc/udev/rules.d/51-android.rules.
```
#STMicroelectronics ST-LINK/V2
SUBSYSTEM=="usb", ATTR{idVendor}=="0483", ATTR{idProduct}=="3748", MODE="0666", OWNER="<kenny>"
```
  Tips: replace the kenny with your real username.

### An example of compilation and burning

#### Extract source code
```
$ tar -zxvf mcu_20180322.tar.gz
```

#### Compile
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

#### Burning
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

### See also
[MCU code](https://github.com/khadas/vim2-mcu)
