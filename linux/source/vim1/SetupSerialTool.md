title: Serial Debugging Tool
---

## Preparation

* Get a `Serial Debugging Tool`, also known as a `USB to TTL Converter`. For example, the [CH340 USB to TTL Converter](https://www.amazon.com/Adaptor-Download-Adapter-Converter-LinkMore/dp/B08VGRRJ67/ref=sr_1_4?dchild=1&keywords=USB+to+TTL+ch340&qid=1629184609&sr=8-4).


## Connections

* Use the following diagram to connect your serial tool to your board's GPIOs:

  * Tool Pin `GND`: <---> `Pin17` of VIM's GPIO
  * Tool Pin `TXD`: <---> `Pin18` of VIM's GPIO (Linux_Rx)
  * Tool Pin `RXD`: <---> `Pin19` of VIM's GPIO (Linux_Tx)
  * Tool Pin `VCC`: <---> `Pin20` of VIM's GPIO

* Insert the USB-side of the tool into your computer.

Refer to this image:

![Image of SerialConnections](/linux/images/vim1/serial_connections_3pin.jpg)

* Blue line: `TXD`
* Orange line: `RXD`
* Black line: `GND`

Another photo (don't connect `VCC`):

![Image of Serial Connections](/linux/images/vim1/serial_connections.jpg)

## Setup Serial Communication Program

{% note warn Note %}

`VIM1/VIM2/VIM3/VIM3L` Baudrate: **115200**

`VIM4` Baudrate: **921600**

{% endnote %}

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

Use the `minicom` serial communication program.

* Install `minicom`

```sh
$ sudo apt update
$ sudo apt install minicom
```

* Add access permissions

```sh
$ sudo usermod -a -G dialout $(whoami)
```

{% note info %}
You may need to logout or reboot your system for changes to take effect.
{% endnote %}

* Setup `minicom`

Connect the `USB to TTL Converter` tool to your SBC and computer before setting up `minicom`.

```sh
$ sudo minicom -s
```

Enter the `minicom` setup mode:

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

Use the **up/down arrows** to shift to `Serial port setup`, and hit `Enter` to enter the `Serial port setup` menu.

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

You can use `Shift + A` to setup the serial device, hit `Enter` to confirm.
You can use `Shift + E` to setup the baudrate, choose `115200` and hit `Enter` to confirm.
You can use `Shift + F` to disable the hardware flow control, set to `NO`.

After completing the setup, hit `Enter` to exit, then choose `Save setup as dfl`, then `Exit from Minicom`.

{% note info Note %}

The `serial device node` must correspond to Ubuntu's serial device node.

{% endnote %}

* Launch `minicom`

Type `minicom` into the Ubuntu Terminal:

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

You can use `Ctrl + A + Z` to open the menu:

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

Use `Shift + Q` to exit `minicom`.

```

  +----------------------+
  | Leave without reset? |
  |     Yes       No     |
  +----------------------+

```

Choose `Yes` and hit `Enter` to exit `minicom`.

{% note info Tips %}

1. If the Terminal output contains this line, you need to use `sudo minicom`.
```
/dev/ttyUSB0: Permission denied
```
2. To access U-Boot, leave your USB-Serial-Debug tool connected, then press the `reset` button on your device once. You should see some print-out on your Terminal, then quickly press the `space-bar` or `control-c` to stop auto-boot. You will see the prompt [kvim#](UBootUsage.html) when you've entered U-boot.

3. Standard "help" commands are listed in [U-Boot Usage Guide](UBootUsage.html), you'll need to first have a version of Android or Ubuntu installed in your VIM device, from our official [OOWOW images](https://dl.khadas.com/Firmware/Krescue/images/).

{% endnote %}

## See Also
* [Minicom Wiki](https://en.wikipedia.org/wiki/Minicom)

</div>
<div class="tab-pane fade show" id="windows" role="tabpanel" aria-labelledby="windows-tab">

* Install the USB to TTL Driver

Install the **CH340** driver.

1. Download the [driver](https://dl.khadas.com/Tools/CH34x_Install_Windows_v3_4.zip).
2. Unzip the compressed file.
3. Run the installer.

* Install `SecureCRT`

Download the program from the [SecureCRT](https://www.vandyke.com/products/securecrt/) website.

* Setup `SecureCRT`

Before starting `SecureCRT`, you'll need to connect the `USB to TTL Converter` tool to your SBC and computer.

Launch `SecureCRT` and navigate to `File->Quick Connect`:

![securecrt1](/linux/images/vim1/securecrt1.png)

Select the `Serial` protocol, select the correct device node, set the baudrate to `115200`, unselect `XON/XOFF`.

![securecrt2](/linux/images/vim1/securecrt2.png)

Click `Connect`.

![securecrt3](/linux/images/vim1/securecrt3.png)

</div>
<div class="tab-pane fade show" id="macos" role="tabpanel" aria-labelledby="macos-tab">

* Setup Meta key

`minicom` needs a Meta key. Use Terminal to create a Meta key.
Go to `Terminal->Preferences->Keyboard`, select `Use Option as Meta key`.

![minicom1](/linux/images/vim1/minicom1_en.png)

![minicom2](/linux/images/vim1/minicom2_en.png)

![minicom3](/linux/images/vim1/minicom3_en.png)

* Install `minicom`

Use [homebrew](https://brew.sh/) to install `minicom`.

```sh
$ brew install minicom
```

* Setup `minicom`

Connect the `USB to TTL Converter` tool to your SBC and computer, then input the command:

```sh
$ minicom -s
```

Enter `minicom` setup mode:

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

Use **up/down arrow** on the keyboard to shift to the `Serial port setup` item and hit `Enter` to enter the `Serial port setup` menu.

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

You can use `Shift + A` to setup the serial device, hit `Enter` to confirm.
You can use `Shift + E` to setup the baudrate, choose `115200` and hit `Enter` to confirm.
You can use `Shift + F` to disable the hardware flow control, set to `NO`.

After completing setup, hit `Enter` to exit, then choose `Save setup as dfl` to save the configuration, then choose `Exit from Minicom`.


{% note info Note %}

The `serial device node` must correspond to the Mac OS' serial device node.

{% endnote %}

* Launch `minicom`

Type `minicom` into the Mac OS Terminal, to access your SBC's serial Terminal.

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

You can use `option + Z` to open the menu:

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

Use `Shift + Q` to exit `minicom`.

```

  +----------------------+
  | Leave without reset? |
  |     Yes       No     |
  +----------------------+

```

Choose `Yes` and hit `Enter` to exit `minicom`.

</div>
</div>
