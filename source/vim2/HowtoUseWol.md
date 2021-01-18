title: How To Use WOL
---

Wake-On-LAN (WOL) is a protocol standard that allows your PC/Smartphone to turn on a computer via your local network or the Internet.

**Note: The operation of VIM2, VIM3 and Edge is almost the same, so this document will take VIM2 as an example.**

VIM2, VIM3 and Edge are different from VIM1, as it supports the WOL-function.

Firstly, you have to connect VIM2 to your LAN, then get the Ethernet MAC address.

## Ubuntu

### Get Ethernet MAC address
1.MAC Address Sticker on the backside of the VIM:

![mac_page](/images/vim2/vim2_mac.jpg)

If the sticker has peeled-off, you can use following steps to get the MAC Address.

2.On Ubuntu, type `ifconfig` on terminal
```
$ ifconfig
eth0      Link encap:Ethernet  HWaddr 98:aa:fc:60:46:de
          inet addr:192.168.1.142  Bcast:192.168.1.255  Mask:255.255.255.0 
          inet6 addr: fe80::9aaa:fcff:fe60:46de/64 Scope: Link


```
HWaddr **98:aa:fc:60:46:de** corresponds to your Ethernet MAC Address.

### Enable WOL

1.By default **WOL** is disabled. So you'll have to use the [KBI](/vim2/KbiGuidance.html) (Khadas Bootloader Instructions) to enable it.
```
kvim2# kbi trigger wol w 1
```
If you want to check the WOL status, you can run:
```
kvim2# kbi trigger wol r
boot wol: enable
```

2.You can enable **WOL** in the **Applications->Wake On LAN Setting** on Ubuntu.

![wol](/images/vim2/vim2_ubuntu_wol1.png)

* Select WOL Mode.

![wol](/images/vim2/vim2_ubuntu_wol2.png)

### Test WOL
After doing the steps above, we can test the WOL function.

**1) Connect VIM2 with LAN**

**2) Power off VIM2**

**3) Attempt to wake up your VIM2 on Ubuntu.**

* Install the **wakeonlan** tool
```
$ sudo apt-get install wakeonlan
```
Now you can wake up your VIM2 with it's MAC Address
```
$ wakeonlan 98:aa:fc:60:46:de
```


## Android

### Get Ethernet MAC address

You can get it from **Settings->More Settings->About->Status** menu.

![mac](/images/vim2/vim2_android_mac.png)

### Enable WOL

You can enable **WOL** in the **Setting->More Settings->WOL** menu.

![wol](/images/vim2/vim2_android_wol.png)


### Test WOL

**1) Connect VIM2 with LAN**

**2) Power off VIM2**

**3) Attempt to wake up your VIM2 on Android.**

* Download **[Wake-On-LAN Sender](http://www.yarovy.com/wol/)** tool

![sender](/images/vim2/wol_sender_main.png)

* Add a remote computer

![sender_add](/images/vim2/wol_sender_add_remote.png)

* Wake up VIM2 with this button

![sender](/images/vim2/wol_sender_send.png)

* Note:On iPhone, you can search for **wake on lan** in the App Store.

## See also
[KBI Guidance](/vim2/KbiGuidance.html)

