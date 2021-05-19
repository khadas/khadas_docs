title: How To Use LTE Module
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

## Use LTE Module with Ubuntu Desktop

### Xfce Desktop

#### Step1: Open `edit connections`

Find `edit connections` in network menu.

![LTE_edit_connect](/images/vim3/LTE_edit_connect.png)

The lastest option is `edit connections`.

#### Step2: Add new connect

![LTE_add_connect](/images/vim3/LTE_add_connect.png)

You can find the `+` option in the lower left corner.

#### Step3: choose connect type

![LTE_choose_connect_tpye](/images/vim3/LTE_choose_connect_tpye.png)

The `Mobile Broadband` that can be use for LTE Module

#### Step4: Choose you provider's country 

![LTE_choose_country](/images/vim3/LTE_choose_country.png)

Choose you provider's country . 

#### Step5: Choose you provider 

![LTE_choose_provider](/images/vim3/LTE_choose_provider.png)

Choose you provider,This needs to be set according to your SIM card.

After choose you provider, the next two steps use defconfigiure. So you just need to choose `next`.

#### Step6: set password
![LTE_set_psk](/images/vim3/LTE_set_psk.png)

Set you LTE Module connect passwork, you need to remember it . When you connect it , you need to use it.
And you can set you connection name or use default.

#### Step7: Connect 

![LTE_connect](/images/vim3/LTE_connect.png)

Now, you can connect it , you will find you LTE module connections in network menu.Choose it and input the password which you set in `Step6`.

![LTE_use_psk](/images/vim3/LTE_use_psk.png)

And then, you will connect success !

### GNOME Desktop

#### Step1: Open `Mobile Board Settings`

![LTE_gnome_open](/images/vim3/LTE_gnome_open.png)

Click the menu bar in the upper right corner to see the 'mobile board settings' option

#### Step2: New Connect

Click the `Network`, Chooise `Add new connection`, and then click `Next`.

![LTE_gnome_new](/images/vim3/LTE_gnome_new.png)
![LTE_gnome_next](/images/vim3/LTE_gnome_next.png)

#### Step3: Choose you provider's country

Choose you provider's country . 

![LTE_gnome_country](/images/vim3/LTE_gnome_country.png)

#### Step4: Choose you provider

Choose you provider,This needs to be set according to your SIM card.

![LTE_gnome_provider](/images/vim3/LTE_gnome_provider.png)
#### Step5: Enter password and connect

After choose you provider, the next two steps use defconfigiure. So you just need to choose `next`. And then click `apply` . Now, you need a password , default is `000`.

![LTE_gnome_apply](/images/vim3/LTE_gnome_apply.png)
![LTE_gnome_psk](/images/vim3/LTE_gnome_psk.png)

After entering the password, you can connect normally.

![LTE_gnome_success](/images/vim3/LTE_gnome_success.png)

#### Change Password

Open the corresponding settings and update the password in 'mobile broadband'

![LTE_gnome_change_psk](/images/vim3/LTE_gnome_change_psk.png)


## Use LTE Module with Ubuntu Server

If you use Ubuntu Server, you just need a command to connect it .

```
$ sudo nmcli connection add type gsm apn 3gnet user 0000 password 0000 con-name "EM06 4G"

```

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

