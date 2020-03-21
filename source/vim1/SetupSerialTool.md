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

![Image of SerialConnections](/images/vim1/SerialConnections_3Pin.png)

Another photo for more details (`VCC` Pin is not necessary):

![Image of SerialConnections](/images/vim1/SerialConnections.png)


### Setup Kermit Protocol(C-Kermit)
**Install c-kermit:**

```sh
$ sudo apt-get install ckermit
```

**Add Access Permission:**
```sh
$ sudo usermod -a -G dialout $(whoami)
```

**Add the following contents into ~/.kermrc to finish the setup:**

Use nano, `$ nano ~/.kermrc` to create a new `.kermrc` file. Then copy-paste the contents below.
```
set line /dev/ttyUSB0
set speed 115200
set carrier-watch off
set handshake none
set flow-control none
robust
set file type bin
set file name lit
set rec pack 1000
set send pack 1000
set window 5
c
```
After you're done copy-pasting, save and exit nano.

**Run command `kermit` to launch C-Kermit**

Ensure that you have made the correct connections. If everything went well, you'll see the following:

```sh
$ kermit
Connecting to /dev/ttyUSB0, speed 115200
 Escape character: Ctrl-\ (ASCII 28, FS): enabled
Type the escape character followed by C to get back,
or followed by ? to see other options.
----------------------------------------------------
GXL:BL1:9ac50e:a1974b;FEAT:ADFC318C;POC:3;RCY:0;EMMC:0;READ:0;0.0;CHK:0;
TE: 116640

...

```
**Tips (and booting into U-Boot):**

1. If the terminal output contains this line, you might need to type `sudo kermit`.
```
/dev/ttyUSB0: Permission denied
```
2. To access U-boot, leave your USB-Serial-Debug tool connected, then press the `reset` button on your device once. You should see some print-out on your terminal, then quickly press the `space-bar` or `control-c` to stop auto-boot. You will see the prompt [kvim#](https://docs.khadas.com/vim1/UBootUsage.html) when you've entered u-boot.

3. Note that to see the standard "help" commands as listed in the [U-Boot Usage Guide](https://docs.khadas.com/vim1/UBootUsage.html), you'll need to first have a version of Android or Ubuntu installed in your VIM device, from our [krescue images](https://dl.khadas.com/Firmware/Krescue/images/).

4. You can use the U-Boot command line ([kvim#](https://docs.khadas.com/vim1/UBootUsage.html)), to change your VIM's default boot logo.bmp, according to the guide, [Boot Logo for U-Boot](https://docs.khadas.com/vim1/BuildBootLogoForUboot.html).

### See Also:
* [C-Kermit Offical website](http://www.columbia.edu/kermit/index.html)
