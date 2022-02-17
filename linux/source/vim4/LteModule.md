title: LTE 4G Module
---

## Check operators and frequency bands supported by your region

You can view it on the following two websites:

1. [frequencycheck](https://www.frequencycheck.com/carriers)
2. [spectrumonitoring](https://www.spectrummonitoring.com/frequencies/)

## LTE module working mode setting

### Install minicom in your boarad

```shell
$ sudo apt update
$ sudo apt install minicom
```

### Setting to USBNet mode

```shell
$ minicom -D /dev/ttyUSB2
```

atfer open minicom , enter:

```shell
AT+QCFG="usbnet",2

OK
```

### Power down and restart

LTE module needs power down and restart to switch mode. Unplug VIMS and plug in again. LTE module now works in usbnet mode

### Restore LTE module

```shell
$ minicom -D /dev/ttyUSB2
```

The default mode is ` 0`

```shell
AT+QCFG="usbnet",0
```

Power down and restart to switch back to default mode

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

### GNOME Desktop

#### Step1: Open `Mobile Board Settings`

![LTE_gnome_open](/linux/images/vim3/LTE_gnome_open.png)

Click the menu bar in the upper right corner to see the 'mobile board settings' option

#### Step2: New Connect

Click the `Network`, Chooise `Add new connection`, and then click `Next`.

![LTE_gnome_new](/linux/images/vim3/LTE_gnome_new.png)
![LTE_gnome_next](/linux/images/vim3/LTE_gnome_next.png)

#### Step3: Choose you provider's country

Choose you provider's country . 

![LTE_gnome_country](/linux/images/vim3/LTE_gnome_country.png)

#### Step4: Choose you provider

Choose you provider,This needs to be set according to your SIM card.

![LTE_gnome_provider](/linux/images/vim3/LTE_gnome_provider.png)
#### Step5: Enter password and connect

After choose you provider, the next two steps use defconfigiure. So you just need to choose `next`. And then click `apply` . Now, you need a password , default is `000`.

![LTE_gnome_apply](/linux/images/vim3/LTE_gnome_apply.png)
![LTE_gnome_psk](/linux/images/vim3/LTE_gnome_psk.png)

After entering the password, you can connect normally.

![LTE_gnome_success](/linux/images/vim3/LTE_gnome_success.png)

#### Change Password

Open the corresponding settings and update the password in 'mobile broadband'

![LTE_gnome_change_psk](/linux/images/vim3/LTE_gnome_change_psk.png)

</div>
<div class="tab-pane fade show active" id="server" role="tabpanel" aria-labelledby="desktop-tab">

## Use LTE Module with Ubuntu Server

If you use Ubuntu Server, you just need a command to connect it .

```
$ sudo nmcli connection add type gsm apn 3gnet user 0000 password 0000 con-name "EM06 4G"

```

</div>
</div>

## How to check  you connection is success

You can test it by `ping` command. And you need to use `-I` option to choose the LTE Module.


### check your network node
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

You will find `wwan0` via command `ifconfig -a`


### Use `ping` command to test

```
$ ping www.baidu.com -I wwan0
```
If you LTE module work fine, It will be success.

