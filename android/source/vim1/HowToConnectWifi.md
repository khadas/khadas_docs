title: How to Connect to Wi-Fi
---

## Android

For Android you can setup Wi-Fi via the GUI easily.

## Ubuntu

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="server-tab" data-toggle="tab" href="#server" role="tab" aria-controls="server" aria-selected="true">Server</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="desktop-tab" data-toggle="tab" href="#desktop" role="tab" aria-controls="desktop" aria-selected="false">Desktop</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="server" role="tabpanel" aria-labelledby="server-tab">

For the Ubuntu/Debian server we can use `NetworkManager` to setup Wi-Fi vis command line.

* Scan for Wi-Fi Networks

```
$ nmcli d wifi list
IN-USE  SSID                          MODE   CHAN  RATE        SIGNAL  BARS  SEC
        VIM                           Infra  2     195 Mbit/s  92      ▂▄▆█  WPA
        Wesion                        Infra  7     260 Mbit/s  84      ▂▄▆█  WPA
        VIM_5G                        Infra  161   405 Mbit/s  84      ▂▄▆█  WPA
        HP-HOTSPOT-48-LaserJet M1218  Infra  7     54 Mbit/s   69      ▂▄▆_  WPA
        ChinaNet-xjCH                 Infra  13    270 Mbit/s  67      ▂▄▆_  WPA
        BRGCN_GUEST                   Infra  1     405 Mbit/s  64      ▂▄▆_  WPA
        BRGCN                         Infra  1     405 Mbit/s  62      ▂▄▆_  WPA
```

Find a Wi-Fi network that you can connect to.

* Create an hashed pre-computed PSK key with wpa_passphrase

To avoid storing human readable passwords there is an handy tool coming with wpa_supplicant called `wpa_passphrase`.

Use `wpa_passphrase your_ssid your_password` to create a 256-bit PSK passphrase from your_ssid and your_password.

```bash
khadas@Khadas:~$ wpa_passphrase your_ssid your_password
network={
  ssid="your_ssid"  
  #psk="your_password"
  psk=6d5324610d3627ab4f97b80cf22b742996d82c022b283a874e88d083a299734c
}
```

The new password is now a hashed passphrase: `6d5324610d3627ab4f97b80cf22b742996d82c022b283a874e88d083a299734c`

{% note info Tips %}

Replace the `your_ssid` & `your_password` with your SSID and password.

{% endnote %}

* Connect to a Wi-Fi Network

```bash
$ sudo nmcli d wifi connect your_ssid password 6d5324610d3627ab4f97b80cf22b742996d82c022b283a874e88d083a299734c wep-key-type key
Device 'wlan0' successfully activated with '206ab399-3822-4652-ba4c-64847af0bce9'.
```

{% note info Tips %}

Replace the `your_ssid` & `6d5324610d3627ab4f97b80cf22b742996d82c022b283a874e88d083a299734c` with your SSID and passphrase.

{% endnote %}

* Disconnect from a Wi-Fi Network

```bash
$ sudo nmcli d disconnect wlan0
Device 'wlan0' successfully disconnected.
```

</div>

<div class="tab-pane fade show active" id="desktop" role="tabpanel" aria-labelledby="desktop-tab">

For the desktop image we can use GUI to setup Wi-Fi easily.

</div>
</div>
