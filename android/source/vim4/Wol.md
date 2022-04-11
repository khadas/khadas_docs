title: Wake-On-LAN
---

`Wake-On-LAN (WOL)` is a protocol standard that allows your PC/Smartphone to turn on your SBC via a LAN network.

VIM2, VIM3, VIM4 and Edge SBCs support Wake-On-LAN.

Connect VIM4 to your LAN, then get the Ethernet MAC address.

## Get ethernet MAC address

You can get it from `Settings-->Khadas Settings-->Ethernet` menu.

<img src="/android/images/vim4/vim4_android_mac.png" width="75%" height="75%">

## Enable WOL

You can enable WOL in the `Settings-->Khadas Settings-->WOL` menu.

<img src="/android/images/vim4/vim4_android_wol.png" width="75%" height="75%">


## Test WOL

* Connect VIM4 with your LAN network
* Power off VIM4
* Attempt to wake up your VIM4 device from another Android device
  * Download **[Wake-On-LAN Sender](http://www.yarovy.com/wol/)** tool
  ![sender](/android/images/vim2/wol_sender_main.png)
  * Add a remote computer
  ![sender_add](/android/images/vim2/wol_sender_add_remote.png)
  * Wake up VIM4 with this button
  ![sender](/android/images/vim2/wol_sender_send.png)
  * Note: On iPhone, you can search for **Wake On LAN** in the App Store

## See also

[KBI Guidance](/android/vim4/KbiGuidance.html)
