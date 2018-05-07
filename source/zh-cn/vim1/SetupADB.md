title: 设置ADB
---

有两种方法设置ADB，这些方法也是通用方法。

### 网络ADB 
* 确保连上局域网Wi-Fi或有线网络
* 确保开启调试模式: `Settings-->Developer options--->USB debugging`
* 查看设备IP地址: `Settings-->About device--->Status--->IP`
* 执行 `adb connect` 命令,如下 :
```sh
$ adb connect 192.168.1.120
connected to 192.168.1.120:5555
$ adb shell
```

### USB ADB
* 确保设备通过USB-C数据线连接到PC
* 确保调试模式打开: `Settings-->Developer options--->USB debugging`
* 打开终端执行如下命令:
```sh
$ adb shell
```
### 参考
* [Android Debug Brige](https://developer.android.com/studio/command-line/adb.html)

