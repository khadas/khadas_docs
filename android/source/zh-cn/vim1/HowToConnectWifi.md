title: 如何连接Wi-Fi
---

对于桌面系统，可以通过图形界面很方便地连接到Wi-Fi热点，所以在这里只说如何通过命令行连接Wi-Fi。对于Ubuntu/Debian服务器版本，没有图形界面，可以通过`NetworkManager`提供的命令来连接Wi-Fi。

## 扫描Wi-Fi热点
```
khadas@Khadas:~$ nmcli d wifi list
IN-USE  SSID                          MODE   CHAN  RATE        SIGNAL  BARS  SEC
        VIM                           Infra  2     195 Mbit/s  92      ▂▄▆█  WPA
        Wesion                        Infra  7     260 Mbit/s  84      ▂▄▆█  WPA
        VIM_5G                        Infra  161   405 Mbit/s  84      ▂▄▆█  WPA
        HP-HOTSPOT-48-LaserJet M1218  Infra  7     54 Mbit/s   69      ▂▄▆_  WPA
        ChinaNet-xjCH                 Infra  13    270 Mbit/s  67      ▂▄▆_  WPA
        BRGCN_GUEST                   Infra  1     405 Mbit/s  64      ▂▄▆_  WPA
        BRGCN                         Infra  1     405 Mbit/s  62      ▂▄▆_  WPA
```
你会看到附近可见的Wi-Fi热点。

## 连接到Wi-Fi热点
```
khadas@Khadas:~$ sudo nmcli d wifi connect your_ssid password your_password
[sudo] password for khadas:
Device 'wlan0' successfully activated with '206ab399-3822-4652-ba4c-64847af0bce9'.
```
*注意： 替换`your_ssid`和`your_password`为你要连接的Wi-Fi的SSID和密码。*

## 断开Wi-Fi
```
khadas@Khadas:~$ sudo nmcli d disconnect wlan0
Device 'wlan0' successfully disconnected.
```
