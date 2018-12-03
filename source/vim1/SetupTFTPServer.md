title: Setup TFTP Server for U-Boot
---

Our approach to setup a TFTP server is quite similar to other guides that you can find via Google.
Here we provide some instructions for reference:

### Setup TFTP
Install TFTP packages:
```sh
$ sudo apt-get install openbsd-inetd tftpd tftp
```

Configuration
To enable the TFTP server, edit the file `/etc/inetd.conf` as the root user, and locate the line that looks like the following:
```
#tftp   dgram   udp     wait    root    /usr/sbin/tcpd  /usr/sbin/in.tftpd
```
Uncomment this line, and add the option and value `-s /srv/tftp` to the end of this line: 
```
tftp   dgram   udp   wait   root   /usr/sbin/tcpd  /usr/sbin/in.tftpd -s /srv/tftp
```

Create and modify permissions on TFTP root directory:
```sh
$ sudo mkdir /srv/tftp
$ sudo chown -R $(whoami) /srv/tftp
```

Restart the TFTP Service:
```sh
$ sudo /etc/init.d/xinetd restart
```

### Setup for target device
To setup TFTP for your target device, you will need:

* Connect a LAN cable to your target device, and make sure your device is on same network with your Host PC.
* Connect a Serial-to-USB module between the target device and PC and ensure to have done the correct [setup](/vim1/SetupSerialTool.html).
* Power on your target device, and ensure the device has a bootloader installed in it.

Stop U-Boot autoboot by hitting `Enter` or `Space` key at the moment you power on your target device:

```
U-Boot 2015.01-g1e20d03-dirty (Jan 01 2017 - 14:40:23)

DRAM:  2 GiB
Relocation Offset is: 76ed0000

...

[CANVAS]addr=0x3d800000 width=3840, height=2160
Hit Enter or space or Ctrl+C key to stop autoboot -- :  0 
kvim#
```

Setup the ip address of the target client and TFTP host server:
```
kvim# setenv ipaddr 192.168.1.100
kvim# setenv serverip 192.168.1.168
```

Save the settings:
```
kvim# saveenv
Saving Environment to aml-storage...
mmc env offset: 0x7400000 
Writing to MMC(1)... done
kvim#
```
Running `saveenv` will save the env values to the env partition on the eMMC. You can run `defenv` to restore the env to the default values.


### Test it
Make sure you have copied the testing file to the TFTF root path:
```sh
$ ls /srv/tftp/u-boot.bin
/srv/tftp/u-boot.bin
$ 
```

Load a file into the `0x1080000` address:
```
kvim# tftp 1080000 u-boot.bin
Speed: 100, full duplex
Using dwmac.c9410000 device
TFTP from server 192.168.1.168; our IP address is 192.168.1.100
Filename 'u-boot.bin'.
Load address: 0x1080000
Loading: #################################################################
	 #################################################################
	 ###############################################
	 2.5 MiB/s
done
Bytes transferred = 901120 (dc000 hex)
kvim#
```
If everything goes well, the terminal print-out will look similar to what is shown above.


### Troubleshooting
* You might need to check the connection of your LAN cable if the terminal print-out looks like:
```
kvim# tftp 1080000 u-boot.bin
dwmac.c9410000 Waiting for PHY auto negotiation to complete......... TIMEOUT !
dwmac.c9410000: No link.
kvim#
```

* You could have setup a wrong server IP address if the print-out looks like:
```
kvim#tftp 1080000 u-boot.bin
Speed: 100, full duplex
Using dwmac.c9410000 device
TFTP from server 192.168.1.68; our IP address is 192.168.1.100
Filename 'u-boot.bin'.
Load address: 0x1080000
Loading: T T T T T T T T T T 
Retry count exceeded; starting again
Speed: 100, full duplex
```
In this instance, I had setup the server IP address to an incorrect one `192.168.1.68`, it should be `192.168.1.168` instead.

### Resources
* [Ubuntu Wiki: TFTP](https://help.ubuntu.com/community/TFTP)
* [Configuring TFTP server for linux](http://venkateshabbarapu.blogspot.com/2012/10/configuring-tftp-server-for-linux.html)
