title: How To Use WOL
---

Wake on LAN (WOL) is a standard that allows your PC/Phone to turn on a computer via a local network or internet.
VIM2 is different with VIM1 and it support for WOL function.

Firstly, You have to connect VIM2 with LAN and get the ethernet MAC address.

### Get ethernet MAC address
MAC address sticker at the back of board:

![mac_page](/images/vim2/vim2_mac.jpg)


Unlucky, If the sticker was lost. you can following below steps to get it.
**1) On Ubuntu, you can type **ifconfig** on terminal**
```
khadas@khadas:~$ ifconfig
eth0      Link encap:Ethernet  HWaddr 98:aa:fc:60:46:de
          inet addr:192.168.1.142  Bcast:192.168.1.255  Mask:255.255.255.0 
          inet6 addr: fe80::9aaa:fcff:fe60:46de/64 Scope: Link


```
The **98:aa:fc:60:46:de** is ethernet MAC address.

**2) On Android, you can get it from Settings->More Settings->About->Status menu.**

![mac](/images/vim2/vim2_android_mac.png)



### Enable WOL

The  default **WOL** is disabled, and here we use kbi to enable it. kbi means Khadas Bootloader Instrucionts, you can refer more KBI instrucions at [TBD]().
```
kvim2# kbi trigger wol w 1
set_wol: 1
```
If you wanna check the WOL status, you can run:
```
kvim2# kbi trigger wol r
get_wol: 1
```
You also can enable **WOL** in **Setting->More Settings->WOL** menu on Android.

![wol](/images/vim2/vim2_android_wol.png)


### Test WOL
After doing that, Now We can start to test WOL function.

**1) Connect VIM2 with LAN**

**2) Power off VIM2**

**3) Try to wake up VIM2 with different device and OS.**

*<1> On Ubuntu PC host, you need to install **wakeonlan** tool*
```
terry@terry:~$ sudo apt-get install wakeonlan
```
Now you can wake up VIM2 with MAC address
```
terry@terry:~$ wakeonlan 98:aa:fc:60:46:de
```

*<2> On Windows PC host, you can download **[Wake-On-LAN Sender](http://www.yarovy.com/wol/)** tool*

![sender](/images/vim2/wol_sender_main.png)

Add remote computer

![sender_add](/images/vim2/wol_sender_add_remote.png)

Wake up VIM2 with below  button
![sender](/images/vim2/wol_sender_send.png)

*<3> On IPhone, you can search for **wake on lan** in App Store.*

### See also
[KBI Guidance](/vim2/KbiGuidance.html)

