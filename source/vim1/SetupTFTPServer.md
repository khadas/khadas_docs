title: Setup TFTP Server for U-Boot
---

Our approach to setup a TFTP server is quite similar to other guides that you can find via Google.
Here we provide some instructions for reference:

### Ubuntu16.04

#### Setup TFTP
Install TFTP packages:
```sh
$ sudo apt-get install openbsd-inetd tftpd tftp
```

#### Configuration
To enable the TFTP server, edit the file `/etc/inetd.conf` as the root user, and locate the line that looks like the following:
```
#tftp   dgram   udp     wait    root    /usr/sbin/tcpd  /usr/sbin/in.tftpd
```
Uncomment this line, and add the option and value `-s /srv/tftp` to the end of this line: 
```
tftp   dgram   udp   wait   root   /usr/sbin/tcpd  /usr/sbin/in.tftpd -s /srv/tftp
```

Create and modify permissions on the TFTP root directory:
```sh
$ sudo mkdir /srv/tftp
$ sudo chown -R $(whoami) /srv/tftp
```

Restart the TFTP Service:
```sh
$ sudo /etc/init.d/xinetd restart
```

### Ubuntu18.04

#### Setup TFTP
Install TFTP packages:
```sh
$ sudo apt-get install tftp-hpa tftpd-hpa
```

#### Configuration
edit the file `etc/default/tftpd-hpa` as the root user, and edit the line look like this:
```
TFTP_DIRECTORY="/usr/lib/tftpboot"
```
change the dir to `/srv/tftp`
```
TFTP_DIRECTORY="/srv/tftp"
```
Create and modify permissions on the TFTP root directory:

```sh
$ sudo mkdir /srv/tftp
$ sudo chown -R $(whoami) /srv/tftp
```
Restart the TFTP Services:
```sh
$ sudo service tftpd-hpa restart
```

### Setup For Target Device
To setup TFTP on your target device, you will need to:

* Connect a LAN cable to your target device, and make sure your device is on same local network with your Host PC.
* Connect a "Serial-To-USB Module" between the target device and Host PC and ensure you have done the correct [setup](/vim1/SetupSerialTool.html).
* Power-on your target device, and ensure the device has a Bootloader installed in it.

Stop U-Boot autoboot by hitting `Enter` or `Space` key at the moment you power on your target device:

```
U-Boot 2015.01 (May 18 2019 - 19:31:53)

DRAM:  3.8 GiB
Relocation Offset is: d6e56000

...

gpio: pin GPIOAO_7 (gpio 7) value is 1
Hit Enter or space or Ctrl+C key to stop autoboot -- :  0 
kvim3#
```

Setup the ip address of the target client and TFTP host server:
```
kvim3# setenv ipaddr 192.168.1.249
kvim3# setenv serverip 192.168.1.117
```

Save the settings:
```
kvim3# saveenv
Saving Environment to aml-storage...
mmc env offset: 0x6c00000 
Writing to MMC(1)... done
kvim3#
```
Running `saveenv` will save the env values to the env partition on the eMMC. You can run `defenv` to restore the env to the default values.

**NOTE**:How to confirm that your configuration is correct.
```
kvim3#print ipaddr
ipaddr=192.168.1.249
kvim3#print serverip
serverip=192.168.1.117
```

### Test Your TFTP Server
Make sure you have copied the testing file to the TFTF root path:
```sh
$ ls /srv/tftp/u-boot.bin
/srv/tftp/u-boot.bin
$ 
```

Load a file into the `0x1080000` address:
```
kvim3# tftp 1080000 u-boot.bin
Speed: 1000, full duplex
Using dwmac.ff3f0000 device
TFTP from server 192.168.1.117; our IP address is 192.168.1.249
Filename 'u-boot.bin'.
Load address: 0x1080000
Loading: #################################################################
	 #################################################################
	 ###############################################
	 2.5 MiB/s
done
Bytes transferred = 1371504 (14ed70 hex)

```
If everything goes well, the terminal print-out will look similar to what is shown above.


### Troubleshooting
* You might need to check the connection of your LAN cable if the terminal print-out looks like:
```
kvim3# tftp 1080000 u-boot.bin
dwmac.ff3f0000 Waiting for PHY auto negotiation to complete......... TIMEOUT !
dwmac.ff3f0000: No link.
kvim3#
```

* You could have entered an incorrect server IP or Error filename address if the print-out looks like:
```
kvim3#tftp 1080000 u-boot.bin
Speed: 1000, full duplex
Using dwmac.ff3f0000 device
TFTP from server 192.168.1.177; our IP address is 192.168.1.249
Filename 'u-boot.bin'.
Load address: 0x1080000
Loading: T T T T T T T T T T 
Retry count exceeded; starting again
Speed: 1000, full duplex
```
In this instance, I had setup the server IP address to an incorrect one `192.168.1.177`, it should be `192.168.1.117` instead.

### Resources
* [Ubuntu Wiki: TFTP](https://help.ubuntu.com/community/TFTP)
* [Configuring TFTP server for linux](http://venkateshabbarapu.blogspot.com/2012/10/configuring-tftp-server-for-linux.html)
