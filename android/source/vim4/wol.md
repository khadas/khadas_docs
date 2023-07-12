title: Wake-On-LAN
---

`Wake-On-LAN (WOL)` is a protocol standard that allows your PC/Smartphone to turn on your SBC via a LAN network.

VIM2, VIM3, VIM4 and Edge SBCs support Wake-On-LAN.

Connect VIM4 to your LAN, then get the Ethernet MAC address.

## Get Ethernet MAC Address

You can get it from executing the `cat sys/class/net/eth0/address` command.

```sh
VIM4:/ $ cat sys/class/net/eth0/address
02:ad:36:01:e4:a1
```

## Enable WOL

You can enable WOL in the `Settings-->Khadas Settings-->WOL` menu.

<img src="/android/images/vim4/vim4_android_wol.png" width="75%" height="75%">


## Test WOL

**1. Connect VIM4 with your LAN network.**
**2. Power off VIM4.**
**3. Attempt to wake up your VIM4, via a Ubuntu device on the same LAN.**

* Install the **wakeonlan** tool

```
$ sudo apt update
$ sudo apt install wakeonlan
```

* Wake up your VIM4 using it’s MAC Address

```
$ wakeonlan 02:ad:36:01:25:55
```

## See also

[KBI Guidance](/android/vim4/KbiGuidance.html)
