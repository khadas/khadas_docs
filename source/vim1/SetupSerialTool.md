title: Setup Serial Debugging Tool
---

### Preparation
- You need a "Serial Debugging Tool". In this guide, we will use a "USB to TTL Converter".

### Connections
Follow these steps to make the correct connections:

**1)** Connect the Tool Pins to the GPIOs, and check the Tx / Rx Pins once more to ensure that you've made correct connections:

  * Tool Pin `GND`: <---> `Pin17` of VIMs's GPIO
  * Tool Pin `TXD`: <---> `Pin18` of VIMs's GPIO (Linux_Rx)
  * Tool Pin `RXD`: <---> `Pin19` of VIMs's GPIO (Linux_Tx)
  * Tool Pin `VCC`: <---> `Pin20` of VIMs's GPIO

**2)** Insert the USB-end into your PC.

The connections should look like this:

![Image of SerialConnections](/images/vim1/SerialConnections_3Pin.jpg)

Another photo for more details (`VCC` Pin is not necessary):

![Image of SerialConnections](/images/vim1/SerialConnections.jpg)


### Setup Minicom Protocol
**Install minicom:**

```sh
$ sudo apt-get install minicom
```

**Add Access Permission:**
```sh
$ sudo usermod -a -G dialout $(whoami)
```

**open minicom**

```sh
$ minicom -D /dev/ttyUSB0 -b 115200
```

`-D` to designated device, `-b` to designated baud rate

```
Welcome to minicom 2.7.1

OPTIONS: I18n
Compiled on Aug 13 2017, 15:25:34.
Port /dev/ttyUSB0, 16:45:10

Press CTRL-A Z for help on special keys
```
**How to use minicom**

`Ctrl + a` or `Ctrl + z` enter minicom control mode. Keyboard `o` can enter configuration mode

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

`Serial port setup` option use to set up serial
`Save setup as dfl` option use to save you configure .

Keyboard `q` use for exit minicom . 

```
+----------------------+
| Leave without reset? |
|     Yes       No     |
+----------------------+
```

Through the help you can see all the options available to you

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

**Tips (and booting into U-Boot):**

1. If the terminal output contains this line, you might need to type `sudo minicom`.
```
/dev/ttyUSB0: Permission denied
```
2. To access U-boot, leave your USB-Serial-Debug tool connected, then press the `reset` button on your device once. You should see some print-out on your terminal, then quickly press the `space-bar` or `control-c` to stop auto-boot. You will see the prompt [kvim#](/vim1/UBootUsage.html) when you've entered u-boot.

3. Note that to see the standard "help" commands as listed in the [U-Boot Usage Guide](/vim1/UBootUsage.html), you'll need to first have a version of Android or Ubuntu installed in your VIM device, from our [krescue images](https://dl.khadas.com/Firmware/Krescue/images/).

4. You can use the U-Boot command line ([kvim#](/vim1/UBootUsage.html)), to change your VIM's default boot logo.bmp, according to the guide, [Boot Logo for U-Boot](/vim1/BuildBootLogoForUboot.html).

### See Also:
* [Minicom wiki](https://en.wikipedia.org/wiki/Minicom)
