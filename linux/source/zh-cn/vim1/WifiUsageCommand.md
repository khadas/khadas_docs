title: Wi-Fi命令行使用说明
---


* 扫描Wi-Fi网络

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

找到自己可以使用的Wi-Fi

* 通过wpa_passphrase创建一个受保护的密码

为了避免密码被直接读取，wpa_supplicant附带了一个方便的工具，称为`wpa_passphrase`。

使用`wpa_passphrase`创建1个256位长度的哈希密码

```bash
khadas@Khadas:~$ wpa_passphrase your_ssid your_password
network={
  ssid="your_ssid"
  #psk="your_password"
  psk=6d5324610d3627ab4f97b80cf22b742996d82c022b283a874e88d083a299734c
}
```

现在新的密码已经是一个哈希密码: `6d5324610d3627ab4f97b80cf22b742996d82c022b283a874e88d083a299734c`

{% note info Tips %}

`your_ssid` 和`your_password`需要替换成你的ssid和密码

{% endnote %}

* 连接Wi-Fi

```bash
$ sudo nmcli d wifi connect your_ssid password 6d5324610d3627ab4f97b80cf22b742996d82c022b283a874e88d083a299734c wep-key-type key
Device 'wlan0' successfully activated with '206ab399-3822-4652-ba4c-64847af0bce9'.
```

{% note info Tips %}

`your_ssid`和`6d5324610d3627ab4f97b80cf22b742996d82c022b283a874e88d083a299734c`需要进行替换

{% endnote %}

* 关闭Wi-Fi连接

```bash
$ sudo nmcli d disconnect wlan0
Device 'wlan0' successfully disconnected.
```

