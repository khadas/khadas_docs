title: How To Enable ADB
---

This tutorial is about how to enable ADB on Ubuntu for VIMs/Edge.

### VIMs
Only linux 3.14 support ADB, you can enable it via the following commands:
```
khadas@Khadas:~$ sudo systemctl enable adb-khadas.service
khadas@Khadas:~$ sudo systemctl start adb-khadas.service
```

### Edge
Only linux 4.4 support ADB, you can enable it via the following commands:
```
khadas@Khadas:~$ sudo systemctl enable adb-khadas.service
khadas@Khadas:~$ sudo systemctl start adb-khadas.service
```
