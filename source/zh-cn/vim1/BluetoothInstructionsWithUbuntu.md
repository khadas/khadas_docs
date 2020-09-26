title: Ubuntu中蓝牙的使用说明
---
这里将介绍如何使用蓝牙连接你的蓝牙媒体设备。
### 连接前的准备
1、一个ubuntu固件版本的开发板；
2、蓝牙媒体设备（本文使用的是蓝牙耳机；
3、音乐播放器(本文使用的是 https://music.163.com/ )。

### 连接你的蓝牙媒体设备
打开Bluetooth Manager配对你的蓝牙设备，选择headset模式。
![image](/images/vim1/Bluetooth_Instructions_With_Ubuntu_1.png)
如果连接成功你会看到下面这个图片的内容
![image](/images/vim1/Bluetooth_Instructions_With_Ubuntu_2.png)

### 播放音乐以及相关的设置
如果你的音乐播放器播放正常，那么你的设置就没有问题。当你碰见一些问题时，你就需要确认你的播放设置：
#### 1、确认播放的设备选择是否正确
![image](/images/vim1/Bluetooth_instructions_With_Ubuntu_3.jpeg)
注意：因为我选择的是网络播放器，因此这里的选项是Chromium，如果你的音乐播放器不是网络播放器，那么你会在这里看到你自己的播放器。
#### 2、打开音频控制器，然后确认两个地方：
1、你的播放源是否选择了正确的播放设备
![image](/images/vim1/Bluetooth_Instructions_With_Ubuntu_4.png)
2、你的蓝牙设备是否处于A2DP Sink模式
![image](/images/vim1/Bluetooth_Instructions_With_Ubuntu_5.png)

