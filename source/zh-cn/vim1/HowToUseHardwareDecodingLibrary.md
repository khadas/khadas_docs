title: 如何使用硬件解码库
---
# 如何使用硬件解码库

*注意：仅仅支持4.9内核。*

请确保你使用的是最新的固件，如果不是请参考[如何升级系统](/zh-cn/vim1/HowToUpgradeTheSystem.html)进行升级。

## 硬件解码和显示

这里有一个硬件解码并显示的例子，如果你的应用场景仅仅是解码和显示，那么可以参考这个。这是一个最简单的例子，如果你要做复杂的播放器，你可以参考命令行播放器[kplayer源码](https://github.com/numbqq/libplayer)。

https://github.com/numbqq/aml_hardware_decode_demo

## 硬件解码并获取解码数据

你可以使用解码库解码并获取解码后的（RGB/YUV）数据。

这里有一个简单的解码UVC MJPEG格式数据并处理显示的例子。

https://github.com/numbqq/uvc_capture_aml/tree/ionvideo

### 解码库源码

解码库源码：https://github.com/numbqq/libplayer
