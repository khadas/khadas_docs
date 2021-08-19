title: Setup Serial Debugging Tool
---

## Preparation

* You need a `Serial Debugging Tool`. In this guide, we will use a `USB to TTL Converter`. You can find a [CH340 USB to TTL Converter here](https://www.amazon.com/Adaptor-Download-Adapter-Converter-LinkMore/dp/B08VGRRJ67/ref=sr_1_4?dchild=1&keywords=USB+to+TTL+ch340&qid=1629184609&sr=8-4).


## Connections
Follow these steps to make the correct connections:

* Connect the Tool Pins to the GPIOs, and check the Tx / Rx Pins once more to ensure that you've made correct connections:

  * Tool Pin `GND`: <---> `Pin17` of VIM's GPIO
  * Tool Pin `TXD`: <---> `Pin18` of VIM's GPIO (Linux_Rx)
  * Tool Pin `RXD`: <---> `Pin19` of VIM's GPIO (Linux_Tx)
  * Tool Pin `VCC`: <---> `Pin20` of VIM's GPIO

* Insert the USB-end into your PC.

The connections should look like this:

![Image of SerialConnections](/android/images/vim1/SerialConnections_3Pin.jpg)

* Blue color line: Tool Pin `TXD`
* Orange color line: Tool Pin `RXD`
* Black color line: Tool Pin `GND`

Another photo for more details (`VCC` Pin is not necessary):

![Image of SerialConnections](/android/images/vim1/SerialConnections.jpg)


## Setup Serial Communication Program

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

On Ubuntu system, you can use `minicom` serial communication program.

* Install `minicom`

```sh
$ sudo apt update
$ sudo apt install minicom
```

* Add access permission

```sh
$ sudo usermod -a -G dialout $(whoami)
```

{% note info %}
You may need to logout or reboot your system.
{% endnote %}

* Setup `minicom`

Before setup `minicom`, you need to connect the `USB to TTL Converter` tool to your device and computer.

```sh
$ sudo minicom -s
```

You will enter `minicom` setup mode, like this:

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

You can use **up/down arrow** on the keyboard to shift to `Serial port setup` item and hit `Enter` to `Serial port setup` menu.

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

You can use `Shift + A` to setup the serial device, and hit `Enter` to confirm.
You can use `Shift + E` to setup the baudrate, choose `115200` and hit `Enter` to confirm.
You can use `Shift + F` to disable the hardware flow control, set to `NO`.
When you done all the setup, you can hit `Enter` to exit the menu, and then choose `Save setup as dfl` to save the configuration, then `Exit from Minicom`.


{% note info Note %}

You need to replace the serial device node to the correct one on your computer.

{% endnote %}

* Launch `minicom`

Type `minicom` command in terminal will enter the board serial terminal.

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

* Exit `minicom`

You can use `Ctrl + A + Z` to lanuch the menu:

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

And use `Shift + Q` to exit `minicom`.

```

  +----------------------+
  | Leave without reset? |
  |     Yes       No     |
  +----------------------+

```

Choose `Yes` and hit `Enter` to exit `minicom`.

{% note info Tips %}

1. If the terminal output contains this line, you might need to type `sudo minicom`.
```
/dev/ttyUSB0: Permission denied
```
2. To access U-boot, leave your USB-Serial-Debug tool connected, then press the `reset` button on your device once. You should see some print-out on your terminal, then quickly press the `space-bar` or `control-c` to stop auto-boot. You will see the prompt [kvim#](/android/vim1/UBootUsage.html) when you've entered u-boot.

3. Note that to see the standard "help" commands as listed in the [U-Boot Usage Guide](/android/vim1/UBootUsage.html), you'll need to first have a version of Android or Ubuntu installed in your VIM device, from our [krescue images](https://dl.khadas.com/Firmware/Krescue/images/).

4. You can use the U-Boot command line ([kvim#](/android/vim1/UBootUsage.html)), to change your VIM's default boot logo.bmp, according to the guide, [Boot Logo for U-Boot](/android/vim1/BuildBootLogoForUboot.html).

{% endnote %}

## See Also
* [Minicom wiki](https://en.wikipedia.org/wiki/Minicom)

</div>
<div class="tab-pane fade show" id="windows" role="tabpanel" aria-labelledby="windows-tab">

On Windows system, you can use `SecureCRT` serial communication program.

* Install USB to TTL Converter Driver

If you haven't install `USB to TTL Converter` driver, you need to install it. Here we take **CH340** as a example.

1. Download the driver [here](https://dl.khadas.com/Tools/CH34x_Install_Windows_v3_4.zip)
2. Unzip the file
3. Run the installer which you unzipped

* Install `SecureCRT`

Please access [SecureCRT official website](https://www.vandyke.com/products/securecrt/) to down and install it.

* Setup `SecureCRT`

Before setup `SecureCRT`, you need to connect the `USB to TTL Converter` tool to your device and computer.

Launch `SecureCRT` and navigate to `File->Quick Connect`:

![securecrt1](/android/images/vim1/securecrt1.png)

Select protol `Serial`, and select correct device node, baudrate set to `115200`, unselect `XON/XOFF`.

![securecrt2](/android/images/vim1/securecrt2.png)

Then click `Connect` will enter the board serial terminal.

![securecrt3](/android/images/vim1/securecrt3.png)

</div>
<div class="tab-pane fade show" id="macos" role="tabpanel" aria-labelledby="macos-tab">

On Mac OS system, you can use `minicom` serial communication program.

* Setup the terminal

As `minicom` need Meta key, so you need to setup your terminal Meta option.
Go to `Terminal->Preferences->Keyboard`, select `Use Option as Meta key`.

![minicom1](/android/images/vim1/minicom1_en.png)

![minicom2](/android/images/vim1/minicom2_en.png)

![minicom3](/android/images/vim1/minicom3_en.png)


* Install `minicom`

You may need to install [homebrew](https://brew.sh/) if you haven't instll it.

```sh
$ brew install minicom
```

* Setup `minicom`

Before setup `minicom`, you need to connect the `USB to TTL Converter` tool to your device and computer.

```sh
$ minicom -s
```

You will enter `minicom` setup mode, like this:

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

You can use **up/down arrow** on the keyboard to shift to `Serial port setup` item and hit `Enter` to `Serial port setup` menu.

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

You can use `Shift + A` to setup the serial device, and hit `Enter` to confirm.
You can use `Shift + E` to setup the baudrate, choose `115200` and hit `Enter` to confirm.
You can use `Shift + F` to disable the hardware flow control, set to `NO`.
When you done all the setup, you can hit `Enter` to exit the menu, and then choose `Save setup as dfl` to save the configuration, then `Exit from Minicom`.


{% note info Note %}

You need to replace the serial device node to the correct one on your computer.

{% endnote %}

* Launch `minicom`

Type `minicom` command in terminal will enter the board serial terminal.

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

* Exit minicom

You can use `option + Z` to lanuch the menu:

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

And use `Shift + Q` to exit `minicom`.

```

  +----------------------+
  | Leave without reset? |
  |     Yes       No     |
  +----------------------+

```

Choose `Yes` and hit `Enter` to exit `minicom`.

</div>
</div>

