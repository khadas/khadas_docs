title: How To Use WOL
---

Wake-On-LAN (WOL) is a standard that allows your PC/Smartphone to turn on a computer via your local network or Internet.
Edge is different with VIM1 as it supports the WOL function.

Firstly, You have to connect Edge with your LAN and get its Ethernet MAC address.

### Get Ethernet MAC Address
MAC Address Sticker can be found on the board's backside:
![mac_page](/images/vim2/vim2_mac.jpg)

If your sticker has peeled off, you can use the following steps to retrieve it:
**1) Using Ubuntu, you can type ifconfig on terminal**
```
$ ifconfig
eth0      Link encap:Ethernet  HWaddr 98:aa:fc:60:46:de
          inet addr:192.168.1.142  Bcast:192.168.1.255  Mask:255.255.255.0 
          inet6 addr: fe80::9aaa:fcff:fe60:46de/64 Scope: Link
```
The HWaddr **98:aa:fc:60:46:de** corresponds to your Edge's Ethernet MAC Address.

**2) Using Android, you can get it from Settings->More Settings->About->Status menu.**

![mac](/images/vim2/vim2_android_mac.png)

### Enable WOL

By default **WOL** is disabled. You'll need to use the [KBI](/vim2/KbiGuidance.html) (Khadas Bootloader Instructions) to enable it.
```
kvim2# kbi trigger wol w 1
set_wol: 1
```
To check the WOL Status, you can run:
```
kvim2# kbi trigger wol r
get_wol: 1
```
You also can enable **WOL** in the **Setting->More Settings->WOL** menu on Android.

![wol](/images/vim2/vim2_android_wol.png)

### Test WOL
Now We can start to test WOL function.

**1) Connect Edge with your LAN network**

**2) Power-OFF Edge**

**3) Attempt to wake up your Edge with different Devices and OSes.**

*<1> Using a Ubuntu Host, you'll need to install the **wakeonlan** tool*
```
$ sudo apt-get install wakeonlan
```
Now you can wake up your Edge with a MAC Address:
```
$ wakeonlan 98:aa:fc:60:46:de
```

*<2> Using a Windows Host, you can download the **[Wake-On-LAN Sender](http://www.yarovy.com/wol/)** tool*
![sender](/images/vim2/wol_sender_main.png)

Add Remote Computer:
![sender_add](/images/vim2/wol_sender_add_remote.png)

Wake Edge With This Button:
![sender](/images/vim2/wol_sender_send.png)

*<3> On an iPhone, you can search for **wake on lan** in the App Store.*

### See Also
[KBI Guidance](/vim2/KbiGuidance.html)

