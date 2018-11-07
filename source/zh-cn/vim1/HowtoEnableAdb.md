title: 如何使能ADB
---
这篇文档介绍如何在VIMs/Edge Ubuntu系统下使能ADB。

### VIMs
仅linux 3.14支持ADB，可以按如下命令使能：
```
khadas@Khadas:~$ sudo systemctl enable adb-khadas.service
khadas@Khadas:~$ sudo systemctl start adb-khadas.service
```

### Edge
仅linux 4.4支持ADB，可以按如下命令使能：
```
khadas@Khadas:~$ sudo systemctl enable adb-khadas.service
khadas@Khadas:~$ sudo systemctl start adb-khadas.service
```
