title: 设置ADB
---
SDK 默认以userdebug模式编译。有利于开发调试。
有两种方法设置ADB，这些方法也是通用方法。

### 网络ADB：
* 确保连上局域网Wi-Fi或有线网络
* 确保开启调试模式: Settings-->Developer options--->USB debugging
* 查看设备IP地址: Settings-->About device--->Status--->IP
* 执行 adb connect 命令,如下 :
```
$ adb connect xxx.xxx.xxx.xxx(IP 地址)
$ adb root
$ adb connect xxx.xxx.xxx.xxx(IP 地址)
$ adb remount
```
* 进而可以进行push操作来debug

### USB ADB：
* 确保设备通过USB-C数据线连接到PC
* 确保调试模式打开: Settings-->Developer options--->USB debugging
* 打开终端执行如下命令:
```
$ adb shell
```
### 参考
* [Android Debug Brige](https://developer.android.com/studio/command-line/adb.html)
