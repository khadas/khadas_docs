title: 蓝牙使用说明
---

这里将介绍如何使用蓝牙连接你的蓝牙媒体设备。
### 连接前的准备 ### 

>1. 一个ubuntu固件版本的开发板
>2. 蓝牙媒体设备（本文使用的是蓝牙耳机）
>3. 音乐播放器(本文使用的是 [music.163.com](https://music.163.com/)).

### 连接你的蓝牙媒体设备 ### 

>打开 **Bluetooth Manager** 配对你的蓝牙设备.选择 **headset** 模式.

![bluetooth connect](/images/vim1/bluetooth_connect.png)

>如果连接成功你会看到下面这个图片的内容

![bluetooth connect success](/images/vim1/bluetooth_connect_success.png)

### 播放音乐以及相关的设置 ###

如果你的音乐播放器播放正常，那么你的设置旧没有问题.但是有时候你会碰见一些问题，这时候你需要确认你的播放设置。

>1.确认播放的设备选择是否正确。

![bluetooth player status](/images/vim1/bluetooth_player_status.png)
**注意**:我在这里使用谷歌的网页浏览器.如果你使用的不是谷歌浏览器或者使用其他播放器，这里你会看到你使用的设备
>2.打开音频控制器，然后确认两个地方。 

![bluetooth player back](/images/vim1/bluetooth_player_back.png) ![bluetooth player configuretion](/images/vim1/bluetooth_player_configuretion.png)
第一个就是你的播放源是否选择了正确的播放设备，然后就是你的蓝牙设备是否处于 *A2DP Sink* 模式。
