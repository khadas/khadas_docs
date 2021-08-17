title: 设置串口调试工具
---

## 准备工作
* 准备一个串口调试工具，我们使用的是一个USB转TTL的串口调试工具。[这里有一个CH340串口的参考工具](https://detail.tmall.com/item.htm?id=590954778733&ali_refid=a3_430582_1006:1109952213:N:T+BSZBRBMKJ4P8zlByyd/g==:b94e362c34bb9ad84da8e8c8d85eb3f1&ali_trackid=1_b94e362c34bb9ad84da8e8c8d85eb3f1&spm=a230r.1.14.11&skuId=4221680274330)。

## 连接
请按下面所示方式连接：

* 连接所有GPIO，确保TX/RX连接正确.
  * Tool Pin `GND`: <---> `Pin17` of VIMs' GPIO
  * Tool Pin `TXD`: <---> `Pin18` of VIMs' GPIO(Linux_Rx)
  * Tool Pin `RXD`: <---> `Pin19` of VIMs' GPIO(Linux_Tx)
  * Tool Pin `VCC`: <---> `Pin20` of VIMs' GPIO

* 把串口调试工具插入PC

连接方式如下：

![Image of SerialConnections](/android/images/vim1/SerialConnections_3Pin.jpg)

* 蓝色是 Tool Pin `TXD`
* 橙色是 Tool Pin `RXD`
* 黑色是 Tool Pin `GND`

参考下图(`VCC` 管脚可以不接)：

![Image of SerialConnections](/android/images/vim1/SerialConnections.jpg)


## 设置串口通讯工具

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="ubuntu-tab" data-toggle="tab" href="#ubuntu" role="tab" aria-controls="ubuntu" aria-selected="true">Ubuntu</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="windows-tab" data-toggle="tab" href="#windows" role="tab" aria-controls="windows" aria-selected="false">Windows</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="macos-tab" data-toggle="tab" href="#macos" role="tab" aria-controls="macos" aria-selected="false">Mac OS</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="ubuntu" role="tabpanel" aria-labelledby="ubuntu-tab">

在Ubuntu系统下，你可以使用`minicom`串口工具。

* 安装`minicom`

```sh
$ sudo apt update
$ sudo apt install minicom
```

* 添加权限

```sh
$ sudo usermod -a -G dialout $(whoami)
```

{% note info %}
你需要注销或重启系统。
{% endnote %}

* 设置`minicom`

在设置`minicom`前，确保已经用USB转TTL的串口调试工具连接板子和电脑。

```sh
$ sudo minicom -s
```

会进入设置模式：

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
 | Exit from Minicom        |
 +--------------------------+

```

可以使用键盘方向上下建进行导航切换到`Serial port setup`条目然后按回车键进入子目录。

```
 +-----------------------------------------------------------------------+
 | A -    Serial Device      : /dev/ttyUSB0                              |
 | B - Lockfile Location     : /var/lock                                 |
 | C -   Callin Program      :                                           |
 | D -  Callout Program      :                                           |
 | E -    Bps/Par/Bits       : 115200 8N1                                |
 | F - Hardware Flow Control : No                                        |
 | G - Software Flow Control : No                                        |
 |                                                                       |
 |    Change which setting?                                              |
 +-----------------------------------------------------------------------+
         | Screen and keyboard      |
         | Save setup as dfl        |
         | Save setup as..          |
         | Exit                     |
         | Exit from Minicom        |
         +--------------------------+

```

使用`Shift + A`选择串口设备，按回车键确认。
使用`Shift + E`选择波特率，选择`115200`按回车键确认。
使用`Shift + F`关闭硬件流控制，设置为`NO`。
在一切都设置好后按回车键返回上一级菜单，然后选择`Save setup as dfl`保存配置，最后按`Exit from Minicom`退出设置。


{% note info 提示 %}

你需要根据你自己电脑上实际的串口设备节点来设置。

{% endnote %}

* 打开`minicom`

直接在终端执行`minicom`命令即可进入板子串口终端。

```
$ minicom
elcome to minicom 2.7.1

OPTIONS: I18n 
Compiled on Dec 23 2019, 02:06:26.
Port /dev/ttyUSB0, 15:24:13

Press CTRL-A Z for help on special keys

Ubuntu 20.04.2 LTS Khadas ttyS0

Khadas login: 
Khadas login: 
Khadas login: 
```

* 退出`minicom`

使用`Ctrl + A + Z`打开设置菜单：

```
+-------------------------------------------------------------------+
|                      Minicom Command Summary                      |
|                                                                   |
|              Commands can be called by CTRL-A <key>               |
|                                                                   |
|               Main Functions                  Other Functions     |
|                                                                   |
| Dialing directory..D  run script (Go)....G | Clear Screen.......C |
| Send files.........S  Receive files......R | cOnfigure Minicom..O |
| comm Parameters....P  Add linefeed.......A | Suspend minicom....J |
| Capture on/off.....L  Hangup.............H | eXit and reset.....X |
| send break.........F  initialize Modem...M | Quit with no reset.Q |
| Terminal settings..T  run Kermit.........K | Cursor key mode....I |
| lineWrap on/off....W  local Echo on/off..E | Help screen........Z |
| Paste file.........Y  Timestamp toggle...N | scroll Back........B |
| Add Carriage Ret...U                                              |
|                                                                   |
|             Select function or press Enter for none.              |
+-------------------------------------------------------------------+
```

使用`Shift + Q`退出`minicom`。

```

  +----------------------+
  | Leave without reset? |
  |     Yes       No     |
  +----------------------+

```

选择`Yes`按回车键退出`minicom`。

{% note info 提示 %}

1、如果打印如下信息，你需要检查上面添加权限步骤是否执行正确。

```bash
/dev/ttyUSB0: Permission denied
```

2、连接串口工具到PC以及板子上，打开PC上的串口软件，给板子上电，看到串口开始打印信息提后，按下空格键就把系统停在uboot命令行界面。成功停在uboot命令行以后,会在串口软件看到[kvim#](/android/zh-cn/vim1/UBootUsage.html)。

3、需要注意的是如果你想要使用[uboot用户指南](/android/zh-cn/vim1/UBootUsage.html)的里的标准“帮助”命令，那么你先要在板子上烧录一个ubuntu或者安卓的固件，当然直接只用[Kerscue固件](https://dl.khadas.com/Firmware/Krescue/images/)也可行。

4、你可以使用uboot命令去修改默认的[开机图标](/android/zh-cn/vim1/BuildBootLogoForUboot.html)等等。

{% endnote %}

## 更多参考
[Minicom wiki](https://en.wikipedia.org/wiki/Minicom)


</div>
<div class="tab-pane fade show" id="windows" role="tabpanel" aria-labelledby="windows-tab">

在Windows系统下，可以使用`SecureCRT`串口工具。

* 安装串口工具驱动

如果你还没有安装串口工具驱动，那么你需要先安装这个驱动，这里以**CH340**驱动为例。

1. 下载[CH340驱动](https://dl.khadas.com/Tools/CH34x_Install_Windows_v3_4.zip)
2. 解压
3. 安装

* 安装`SecureCRT`

访问[SecureCRT官网](https://www.vandyke.com/products/securecrt/)下载和安装。

* 设置`SecureCRT`

在设置前，确保已经用USB转TTL的串口调试工具连接了板子和电脑。

打开`SecureCRT`选择`File->Quick Connect`：

![securecrt1](/android/images/vim1/securecrt1.png)

选择协议为`Serial`，并选择正确的串口设备节点，波特了选择为`115200`，取消勾选`XON/XOFF`。

![securecrt2](/android/images/vim1/securecrt2.png)

点击`Connect`即可进入板子串口终端。

![securecrt3](/android/images/vim1/securecrt3.png)

</div>
<div class="tab-pane fade show" id="macos" role="tabpanel" aria-labelledby="macos-tab">

在Mac OS系统下，你可以使用`minicom`串口工具。

* 设置终端

因为`minicom`需要用到Meta键，所以需要设置终端的Meta选项。
选择`终端->偏好设置->键盘`，勾选`将Option键用作Meta键`。

![minicom1](/android/images/vim1/minicom1_zh.png)

![minicom2](/android/images/vim1/minicom2_zh.png)

![minicom3](/android/images/vim1/minicom3_zh.png)


* 安装`minicom`

如果之前没有安装过[homebrew](https://brew.sh/)，那么需要先安装这个工具。


```sh
$ brew install minicom
```

* 设置`minicom`

在设置`minicom`前，确保已经用USB转TTL的串口调试工具连接板子和电脑。

```sh
$ minicom -s
```

会进入设置模式：

```
 ┌─────[configuration]──────┐
 │ Filenames and paths      │
 │ File transfer protocols  │
 │ Serial port setup        │
 │ Modem and dialing        │
 │ Screen and keyboard      │
 │ Save setup as dfl        │
 │ Save setup as..          │
 │ Exit                     │
 │ Exit from Minicom        │
 └──────────────────────────┘
```

可以使用键盘方向上下建进行导航切换到`Serial port setup`条目然后按回车键进入子目录。

```
┌───────────────────────────────────────────────────────────────────────┐
│ A -    Serial Device      : /dev/tty.usbserial-1410                   │
│ B - Lockfile Location     : /usr/local/Cellar/minicom/2.7.1/var       │
│ C -   Callin Program      :                                           │
│ D -  Callout Program      :                                           │
│ E -    Bps/Par/Bits       : 115200 8N1                                │
│ F - Hardware Flow Control : No                                        │
│ G - Software Flow Control : No                                        │
│                                                                       │
│    Change which setting?                                              │
└───────────────────────────────────────────────────────────────────────┘
        │ Screen and keyboard      │
        │ Save setup as dfl        │
        │ Save setup as..          │
        │ Exit                     │
        │ Exit from Minicom        │
        └──────────────────────────┘

```

使用`Shift + A`选择串口设备，按回车键确认。
使用`Shift + E`选择波特率，选择`115200`按回车键确认。
使用`Shift + F`关闭硬件流控制，设置为`NO`。
在一切都设置好后按回车键返回上一级菜单，然后选择`Save setup as dfl`保存配置，最后按`Exit from Minicom`退出设置。

{% note info 提示 %}

你需要根据你自己电脑上实际的串口设备节点来设置。

{% endnote %}

* 打开`minicom`

直接在终端执行`minicom`命令即可进入板子串口终端。

```
$ minicom
Welcome to minicom 2.7.1

OPTIONS: 
Compiled on Sep 18 2017, 15:01:35.
Port /dev/tty.usbserial-1410, 16:02:04

Press Meta-Z for help on special keys

Ubuntu 20.04.2 LTS Khadas ttyS0

Khadas login: 
Khadas login: 
Khadas login: 
```

* 退出`minicom`

使用`option + Z`打开设置菜单：

```
┌───────────────────────────────────────────────────────────────────┐
│                      Minicom Command Summary                      │
│                                                                   │
│               Commands can be called by Meta-<key>                │
│                                                                   │
│               Main Functions                  Other Functions     │
│                                                                   │
│ Dialing directory..D  run script (Go)....G | Clear Screen.......C │
│ Send files.........S  Receive files......R | cOnfigure Minicom..O │
│ comm Parameters....P  Add linefeed.......A | Suspend minicom....J │
│ Capture on/off.....L  Hangup.............H | eXit and reset.....X │
│ send break.........F  initialize Modem...M | Quit with no reset.Q │
│ Terminal settings..T  run Kermit.........K | Cursor key mode....I │
│ lineWrap on/off....W  local Echo on/off..E | Help screen........Z │
│ Paste file.........Y  Timestamp toggle...N | scroll Back........B │
│ Add Carriage Ret...U                                              │
│                                                                   │
│             Select function or press Enter for none.              │
└───────────────────────────────────────────────────────────────────┘
```

使用`Shift + Q`退出`minicom`。

```

  +----------------------+
  | Leave without reset? |
  |     Yes       No     |
  +----------------------+

```

选择`Yes`按回车键退出`minicom`。

</div>
</div>
