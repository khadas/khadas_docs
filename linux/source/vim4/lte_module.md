title: 4G LTE Module
---

## Operators and Frequency Bands

You can view operators and frequency bands supported by your region by visiting these two websites:

1. [Frequency Check](https://www.frequencycheck.com/carriers)
2. [Spectrum Monitoring](https://www.spectrummonitoring.com/frequencies/)

## LTE Module Usage Instructions

### Install Minicom in Ubuntu

```shell
$ sudo apt update
$ sudo apt install minicom
```

### Switching to USBNet Mode

```shell
$ minicom -D /dev/ttyUSB2
```

atfer open minicom , enter:

```shell
AT+QCFG="usbnet",2

OK
```

### Power Down and Restart

The LTE module needs to be powered down and restarted to switch modes. Power cycle your SBC by replugging the USB-C power cable, and your LTE module now will function in USBNet mode.

### Restore LTE Module

```shell
$ minicom -D /dev/ttyUSB2
```

The default mode is `0`

```shell
AT+QCFG="usbnet",0
```

Power down and restart to switch back to the default mode

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="desktop-tab" data-toggle="tab" href="#desktop" role="tab" aria-controls="desktop" aria-selected="true">Desktop</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="server-tab" data-toggle="tab" href="#server" role="tab" aria-controls="server" aria-selected="false">Server</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="desktop" role="tabpanel" aria-labelledby="desktop-tab">

#### Step1: Open `Mobile Board Settings`

![LTE_gnome_open](/linux/images/vim3/lte_gnome_open.png)

Click the menu bar in the upper-right corner and select `Mobile Broadband Settings` option.

#### Step2: Add New Connection

Click `Network`, choose `Add New Connection`, and then click `Next`.

![LTE_gnome_new](/linux/images/vim3/lte_gnome_new.png)
![LTE_gnome_next](/linux/images/vim3/lte_gnome_next.png)

#### Step3: Choose Your Provider's Country

Choose your provider's country. 

![LTE_gnome_country](/linux/images/vim3/lte_gnome_country.png)

#### Step4: Choose Your Provider

Choose your provider. This needs to be set according to your SIM card.

![LTE_gnome_provider](/linux/images/vim3/lte_gnome_provider.png)

#### Step5: Enter Password and Connect

Using the default configuration, just choose `next`. Then click `apply`. The default password is `000`.

![LTE_gnome_apply](/linux/images/vim3/lte_gnome_apply.png)
![LTE_gnome_psk](/linux/images/vim3/lte_gnome_psk.png)

After entering the password, you can connect normally.

![LTE_gnome_success](/linux/images/vim3/lte_gnome_success.png)

#### Changing the Password

Open the corresponding settings and update the password in `Mobile Broadband`.

![LTE_gnome_change_psk](/linux/images/vim3/lte_gnome_change_psk.png)

</div>
<div class="tab-pane fade show" id="server" role="tabpanel" aria-labelledby="server-tab">

## LTE Module with Ubuntu Server

If you use Ubuntu server, use this command to connect to the 4G LTE module.

```
$ sudo nmcli connection add type gsm apn 3gnet user 0000 password 0000 con-name "EM06 4G".

```

</div>
</div>

## Checking Network Connectivity

Use the `ping` command, with the `-I` flag to select the LTE module interface.

### Checking Network Nodes
```
$ ifconfig -a

...

wwan0: flags=4098<BROADCAST,MULTICAST>  mtu 1500
        ether 1a:68:e0:a7:94:88  txqueuelen 1000  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

...
```

You will find the interface `wwan0` via the command `ifconfig -a`


### Using `ping` Command to Test

```
$ ping www.baidu.com -I wwan0
```
If your LTE module is functionally normally, you should see a stream of ping echoes.
