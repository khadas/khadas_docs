title: Setup Serial Debugging Tool
---

### Preperations
- [x] A Serial Debugging Tool, what we used in the guidance is an USB to TTL Convertor.


### Connections
Follow the steps to do the connections:

**1)** Connect all the to GPIOs, and check the Tx / Rx Pins and ensure done the right connection:

  * Tool Pin `GND`: <---> `Pin17` of VIM1's GPIO
  * Tool Pin `TXD`: <---> `Pin18` of VIM1's GPIO(Linux_Rx)
  * Tool Pin `RXD`: <---> `Pin19` of VIM1's GPIO(Linux_Tx)
  * Tool Pin `VCC`: <---> `Pin20` of VIM1's GPIO

**2)** Insert the USB to your PC.

The connections should be like this:

![Image of SerialConnections](/images/vim1/SerialConnections_3Pin.png)

Another photo for more details(`VCC` Pin is not necessary):

![Image of SerialConnections](/images/vim1/SerialConnections.png)


### Setup the Kermit Protocol(C-Kermit)
**Install the c-kermit:**
```sh
$ sudo apt-get install ckermit
```

**Add the access permission**
```sh
$ sudo usermod -a -G dialout gouwa
```
*Tips: replace the `gouwa` with your real username.*


**Add the following contents into ~/.kermrc to finish the setup:**
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

**Run command `kermit` to launch C-Kermit**

Ensure that you have done the right connection, and if everything goes fine, printing would be like this:
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
*Tips: If the printing contain following line, you might need to check the step `Add the access permission` above.*
```
/dev/ttyUSB0: Permission denied
```



### See Also:
* [C-Kermit Offical website](http://www.columbia.edu/kermit/index.html)
