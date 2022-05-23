title: Wake-On-LAN
---

Wake-On-LAN (WOL) is a protocol standard that allows your PC/Smartphone to turn on a computer via your local network.

**Note: The WOL operation of VIM2, VIM3, VIM4 and Edge is similar, so this document will use VIM2 as an example.**

VIM1 does not support Wake-On-LAN.

First connect VIM2 to your local area network (LAN), then get the Ethernet MAC address.

## Ubuntu

### Get Ethernet MAC address
1. The Mac address is pasted onto the back of your SBC:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="vim2-tab" data-toggle="tab" href="#vim2" role="tab" aria-controls="vim2" aria-selected="true">VIM2</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim3-tab" data-toggle="tab" href="#vim3" role="tab" aria-controls="vim3" aria-selected="false">VIM3</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="edge-tab" data-toggle="tab" href="#vim4" role="tab" aria-controls="vim4" aria-selected="false">VIM4</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="edge-tab" data-toggle="tab" href="#edge" role="tab" aria-controls="edge" aria-selected="false">Edge</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="vim2" role="tabpanel" aria-labelledby="vim2-tab">

<img src="/linux/images/vim2/vim2_wol.png" width="800px">

</div>
<div class="tab-pane fade" id="vim3" role="tabpanel" aria-labelledby="vim3-tab">

<img src="/linux/images/vim3/vim3_wol.png" width="800px">

</div>
<div class="tab-pane fade" id="vim4" role="tabpanel" aria-labelledby="vim4-tab">

<img src="/linux/images/vim4/vim4_wol.png" width="800px">

</div>
<div class="tab-pane fade" id="edge" role="tabpanel" aria-labelledby="edge-tab">

<img src="/linux/images/edge/edge_wol.jpg" width="800px">

</div>
</div>

If the sticker has peeled-off, you can use following Terminal commands to get the MAC Address.

2.On Ubuntu, type `ifconfig` on terminal.

```sh
$ ifconfig
eth0      Link encap:Ethernet  HWaddr 98:aa:fc:60:46:de
          inet addr:192.168.1.142  Bcast:192.168.1.255  Mask:255.255.255.0 
          inet6 addr: fe80::9aaa:fcff:fe60:46de/64 Scope: Link
```
HWaddr **98:aa:fc:60:46:de** corresponds to your Ethernet MAC address.

### Enable WOL

1.By default **Wake-On-LAN** is disabled. So you'll have to use the [Khadas Bootloader Instructions (KBI)](KbiGuidance.html)to enable it.
```
kvim2# kbi trigger wol w 1
```
If you want to check the WOL status, you can input:
```
kvim2# kbi trigger wol r
boot wol: enable
```

2.You can enable **WOL** via the **Applications->Wake On LAN Setting** from within Ubuntu.

![wol](/linux/images/vim2/vim2_ubuntu_wol1.png)

* Select WOL mode.

![wol](/linux/images/vim2/vim2_ubuntu_wol2.png)

### Testing WOL
After doing the steps above, you can test the WOL function.

**1. Connect VIM2 with a LAN.**

**2. Power off VIM2.**

**3. Attempt to wake up your VIM2, via a Ubuntu device on the same LAN.**

* Install the **wakeonlan** tool

```
$ sudo apt-get install wakeonlan
```

* Wake up your VIM2 using it's MAC Address

```
$ wakeonlan 98:aa:fc:60:46:de
```

## See also
[KBI(Khadas Bootloader Instructions)](KbiGuidance.html)
