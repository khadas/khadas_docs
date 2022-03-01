title:  WOL Usage
---

`Wake-On-LAN (WOL)` is a protocol standard that allows your PC/Smartphone to turn on a computer via your local network or the Internet.

VIM2, VIM3, VIM4 and Edge are different from VIM1, as it supports the WOL-function.

Firstly, you have to connect VIM4 to your LAN, then get the Ethernet MAC address.

## Get Ethernet MAC Address

You can get it from `Settings`->`Khadas Settings`->`Ethernet` menu.

<img src="/android/images/vim4/Vim4AndroidMAC.png" width="75%" height="75%">

## Enable WOL

You can enable **WOL** in the `Settings`->`Khadas Settings`->`WOL` menu.

<img src="/android/images/vim4/Vim4AndroidWOL.png" width="75%" height="75%">


## Test WOL

1. Connect VIM4 with LAN.
2. Power off VIM4.
3. Attempt to wake up your VIM4 on Android.

* Download **[Wake-On-LAN Sender](http://www.yarovy.com/wol/)** tool

![sender](/android/images/vim2/wol_sender_main.png)

* Add a remote computer

![sender_add](/android/images/vim2/wol_sender_add_remote.png)

* Wake up VIM4 with this button

![sender](/android/images/vim2/wol_sender_send.png)

* Note:On iPhone, you can search for **Wake On Lan** in the App Store

## See also
[KBI Guidance](/android/vim4/KbiGuidance.html)

