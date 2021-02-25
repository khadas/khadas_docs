title: 设置串口调试工具
---

### 准备工作
- [x] 准备一个串口调试工具，我们使用的是一个USB转TTL的串口调试工具

### 如何连接
请按下面所示方式连接：

**1)** 连接所有GPIO，确保TX/RX连接正确

  * Tool Pin `GND`: <---> `Pin17` of VIM1's GPIO
  * Tool Pin `TXD`: <---> `Pin18` of VIM1's GPIO(Linux_Rx)
  * Tool Pin `RXD`: <---> `Pin19` of VIM1's GPIO(Linux_Tx)
  * Tool Pin `VCC`: <---> `Pin20` of VIM1's GPIO

**2)** 把串口调试工具插入PC

连接方式如下：

![Image of SerialConnections](/images/vim1/SerialConnections_3Pin.jpg)

参考下图(`VCC` 管脚可以不接):

![Image of SerialConnections](/images/vim1/SerialConnections.jpg)


### 设置串口软件`minicom`
**安装minicom:**
```sh
$ sudo apt-get install minicom
```

**添加权限**
```sh
$ sudo usermod -a -G dialout $(whoami)
```

**打开minicom**

```sh
$ minicom -D /dev/ttyUSB0 -b 115200
```

`-D` 指定串口设备, `-b` to 指定波特率

```
Welcome to minicom 2.7.1

OPTIONS: I18n
Compiled on Aug 13 2017, 15:25:34.
Port /dev/ttyUSB0, 16:45:10

Press CTRL-A Z for help on special keys
```
**How to use minicom**

`Ctrl + a` 或者 `Ctrl + z` 进入minicom控制模式. 按键 `o` 进入minicom配置界面

```
+-----[configuration]------+
| Filenames and paths      |
| File transfer protocols  |
| Serial port setup        |
| Modem and dialing        |
| Screen and keyboard      |
| Save setup as dfl        |
| Save setup as..          |
| Exit                     |
+--------------------------+

```

`Serial port setup` 选项配置与串口通信有关的配置
`Save setup as dfl` 保存成默认模式

键盘 `q` 可以关闭minicom

```
+----------------------+
| Leave without reset? |
|     Yes       No     |
+----------------------+
```

通过minicom的帮助命令可以查看到所有的选项

```sh
$ minicom -h
Usage: minicom [OPTION]... [configuration]
A terminal program for Linux and other unix-like systems.

  -b, --baudrate         : set baudrate (ignore the value from config)
  -D, --device           : set device name (ignore the value from config)
  -s, --setup            : enter setup mode
  -o, --noinit           : do not initialize modem & lockfiles at startup
  -m, --metakey          : use meta or alt key for commands
  -M, --metakey8         : use 8bit meta key for commands
  -l, --ansi             : literal; assume screen uses non IBM-PC character set
  -L, --iso              : don't assume screen uses ISO8859
  -w, --wrap             : Linewrap on
  -H, --displayhex       : display output in hex
  -z, --statline         : try to use terminal's status line
  -7, --7bit             : force 7bit mode
  -8, --8bit             : force 8bit mode
  -c, --color=on/off     : ANSI style color usage on or off
  -a, --attrib=on/off    : use reverse or highlight attributes on or off
  -t, --term=TERM        : override TERM environment variable
  -S, --script=SCRIPT    : run SCRIPT at startup
  -d, --dial=ENTRY       : dial ENTRY from the dialing directory
  -p, --ptty=TTYP        : connect to pseudo terminal
  -C, --capturefile=FILE : start capturing to FILE
  -F, --statlinefmt      : format of status line
  -R, --remotecharset    : character set of communication partner
  -v, --version          : output version information and exit
  -h, --help             : show help
  configuration          : configuration file to use

These options can also be specified in the MINICOM environment variable.
This variable is currently unset.
The configuration directory for the access file and the configurations
is compiled to /etc/minicom.

Report bugs to <minicom-devel@lists.alioth.debian.org>.

```
*提示*
1. 如果打印如下信息，你需要检查上面添加权限步骤是否执行正确。
```
/dev/ttyUSB0: Permission denied
```

2. 串口连接uboot
连接串口工具到PC以及板子上,打开PC上的串口软件,给板上电,看到串口开始打印信息提后,按下空格键就把系统停在uboot界面,对uboot进行操作.成功停在uboot以后,会在串口软件看到[kvim#](/zh-cn/vim1/UBootUsage.html).

3. 需要注意的是如果你想要使用[uboot用户指南](/zh-cn/vim1/UBootUsage.html)的里的标准"帮助"命令,那么你先要在板子上烧录一个ubuntu或者安卓的固件,当然直接只用[Kerscue固件](https://dl.khadas.com/Firmware/Krescue/images/)也可行.

4. 你可以使用uboot命令去修改默认的[开机图标](/zh-cn/vim1/BuildBootLogoForUboot.html)等等.

### 更多参考:
[Minicom wiki](https://en.wikipedia.org/wiki/Minicom)
