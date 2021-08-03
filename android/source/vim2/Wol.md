title:  WOL Usage
---

Wake-On-LAN (WOL) is a protocol standard that allows your PC/Smartphone to turn on a computer via your local network or the Internet.

**Note: The operation of VIM2, VIM3 and Edge is almost the same, so this document will take VIM2 as an example.**

VIM2, VIM3 and Edge are different from VIM1, as it supports the WOL-function.

Firstly, you have to connect VIM2 to your LAN, then get the Ethernet MAC address.

## Android

### Get Ethernet MAC address

You can get it from **Settings->More Settings->About->Status** menu.

![mac](/android/images/vim2/vim2_android_mac.png)

### Enable WOL

You can enable **WOL** in the **Setting->More Settings->WOL** menu.

![wol](/android/images/vim2/vim2_android_wol.png)


### Test WOL

**1) Connect VIM2 with LAN**

**2) Power off VIM2**

**3) Attempt to wake up your VIM2 on Android.**

* Download **[Wake-On-LAN Sender](http://www.yarovy.com/wol/)** tool

![sender](/android/images/vim2/wol_sender_main.png)

* Add a remote computer

![sender_add](/android/images/vim2/wol_sender_add_remote.png)

* Wake up VIM2 with this button

![sender](/android/images/vim2/wol_sender_send.png)

* Note:On iPhone, you can search for **wake on lan** in the App Store.

## See also
[KBI Guidance](/android/vim2/KbiGuidance.html)

