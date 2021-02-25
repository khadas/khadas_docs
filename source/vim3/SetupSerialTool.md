title: Setup Serial Debugging Tool
---

### Preparation

You need a "Serial Debugging Tool". In this guide we will use a "USB to TTL Converter".

### Connections

Follow these steps to make the correct connections:

**1)** Connect the Tool Pin to the GPIOs, and check the Tx/Rx Pin once more to ensure that you have amde correct connections:

  * Tool Pin `GND`: <---> `Pin17` of VIM's GPIO
  * Tool Pin `TXD`: <---> `Pin18` of VIM's GPIO(Linux_Rx)
  * Tool Pin `RXD`: <---> `Pin19` of VIM's GPIO(Linux_Tx)
  * Tool Pin `VCC`: <---> `Pin20` of VIM's GPIO

**2)** Insert the USB-end into your PC.

The connections should look like this:

![Image of SerialConnections3Pin](/images/vim1/SerialConnections_3Pin.jpg)

Another photo for more details(`VCC` Pin is not necessary):

![Image of SerialConnections](/images/vim1/SerialConnections.jpg)


### Setup kermit Protocol(c-kermit)

**Install c-kermit:**

```sh
$ sudo apt-get install ckermit
```

**Add Access Permission:**
```sh
$ sudo usermod -a -G dialout $(whoami)
```

**Add the following contents into ~/.kermrc to finsh the setup:**

Use nano,`$ nano ~/.kermrc` to create a new `.kermrc` file. Then copy-paste the contents below.
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

**Run command `kermit` to launch C-kermit**

Ensure that you have made the correct connections. If everyting went well,you'll see the following:
```sh
$kermit
Connecting to /dev/ttyUSB0, speed 115200
Escape character: Ctrl-\ (ASCII 28, FS): enabled
Type the escape character followed by C to get back,
or followed by ? to see other options.
----------------------------------------------------
```
**Tips:**
1. If the treminal output contains this line, you might need to check the previous step `Add Access Permission`.
```
/dev/ttyUSB0:Permission denied
```
2. To access U-boot, leave your USB-Serial-Debug tool connected, then press the `reset` button on your device once.you should see some print-out on your terminal, and then you'll have access to U-boot.

3.If your terminal prints these
```
?SET SPEED has no effect without prior SET LINE
Sorry, you must SET LINE or SET HOST first
...

```
This is the wrong device to choose.Confirm your ttyUSB device number in the `/dev` directory and then modify `.kermrc` file

### See Also

* [C-Kermit offical websit](http://www.columbia.edu/kermit/index.html)
