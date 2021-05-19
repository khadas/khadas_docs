title: Setup TFTP Server for U-Boot
---

Our approach to setup a TFTP server is quite similar to other guides that you can find via Google.
Here we provide some instructions for reference.

## Setup TFTP

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="16.04-tab" data-toggle="tab" href="#16.04" role="tab" aria-controls="16.04" aria-selected="true">Ubuntu 16.04</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="18.04-tab" data-toggle="tab" href="#18.04" role="tab" aria-controls="18.04" aria-selected="false">Ubuntu 18.04 (or newer)</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="16.04" role="tabpanel" aria-labelledby="16.04-tab">

Install TFTP packages:

```bash
$ sudo apt-get install openbsd-inetd tftpd tftp
```

* Configuration

To enable the TFTP server, edit the file `/etc/inetd.conf` as the root user, and locate the line that looks like the following:

```bash
#tftp   dgram   udp     wait    root    /usr/sbin/tcpd  /usr/sbin/in.tftpd
```

Uncomment this line, and add the option and value `-s /srv/tftp` to the end of this line: 

```bash
tftp   dgram   udp   wait   root   /usr/sbin/tcpd  /usr/sbin/in.tftpd -s /srv/tftp
```

Create and modify permissions on the TFTP root directory:

```bash
$ sudo mkdir /srv/tftp
$ sudo chown -R $(whoami) /srv/tftp
```

Restart the TFTP Service:

```bash
$ sudo /etc/init.d/xinetd restart
```
</div>

<div class="tab-pane fade show" id="18.04" role="tabpanel" aria-labelledby="18.04-tab">

Install TFTP packages:

```bash
$ sudo apt-get install tftp-hpa tftpd-hpa
```

* Configuration

Edit the file `/etc/default/tftpd-hpa` as the root user, and edit the line look like this:

```bash
TFTP_DIRECTORY="/usr/lib/tftpboot"
```

change the dir to `/srv/tftp`

```bash
TFTP_DIRECTORY="/srv/tftp"
```
Create and modify permissions on the TFTP root directory:

```bash
$ sudo mkdir /srv/tftp
$ sudo chown -R $(whoami) /srv/tftp
```
Restart the TFTP Services:

```bash
$ sudo service tftpd-hpa restart
```

</div>
</div>

## Setup For Target Device
To setup TFTP on your target device, you will need to:

* Connect a LAN cable to your target device, and make sure your device is on same local network with your Host PC.
* Connect a "Serial-To-USB Module" between the target device and Host PC and ensure you have done the correct [setup](/vim1/SetupSerialTool.html).
* Power-on your target device, and ensure the device has a Bootloader installed in it.

Stop U-Boot autoboot by hitting `Enter` or `Space` key at the moment you power on your target device:

```bash
U-Boot 2015.01 (May 18 2019 - 19:31:53)

DRAM:  3.8 GiB
Relocation Offset is: d6e56000

...

gpio: pin GPIOAO_7 (gpio 7) value is 1
Hit Enter or space or Ctrl+C key to stop autoboot -- :  0 
kvim3#
```

Setup the ip address of the target client and TFTP host server:

```bash
kvim3# setenv ipaddr 192.168.1.249
kvim3# setenv serverip 192.168.1.117
```

Save the settings:

```bash
kvim3# saveenv
Saving Environment to aml-storage...
mmc env offset: 0x6c00000 
Writing to MMC(1)... done
kvim3#
```
Running `saveenv` will save the env values to the env partition on the eMMC. You can run `defenv` to restore the env to the default values.

{% note info NOTE %}

Please confirm that your configuration is correct.

e.g.

```bash
kvim3#print ipaddr
ipaddr=192.168.1.249
kvim3#print serverip
serverip=192.168.1.117
```

{% endnote %}

## Test Your TFTP Server

Make sure you have copied the testing file to the TFTF root path:

```bash
$ ls /srv/tftp/u-boot.bin
/srv/tftp/u-boot.bin
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


## Troubleshooting
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

## Resources
* [Ubuntu Wiki: TFTP](https://help.ubuntu.com/community/TFTP)
* [Configuring TFTP server for linux](http://venkateshabbarapu.blogspot.com/2012/10/configuring-tftp-server-for-linux.html)
