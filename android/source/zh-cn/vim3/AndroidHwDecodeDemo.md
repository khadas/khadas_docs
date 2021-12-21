title: 如何在VIM3运行安卓硬件解码例子
---

## 获取硬件解码app源码

硬件解码app默认没有安装在板子上，需要从gitlab下载

Gitlab 仓库地址 :[https://github.com/khadas/khadas_android_hwdecode_app](https://github.com/khadas/khadas_android_hwdecode_app)

Hwdecode演示应用程序目前集成了三种视频格式解码，如下图所示
![Image of vim_hwdecode_mode](/android/images/vim3/hwdecode.png)

```
输入参数说明

fps: 视频帧率
width: 视频宽度
height: 视频高度
format: 视频解码格式，例如
MPEG4:1 H264:2 MJPEG:3 AVS:7 HEVC:11 VP9:14 AV1:16

```
## 运行硬件解码演示程序
下载应用程序源代码后，可以将其导入Android studio运行，也可以直接使用adb安装运行,通过视频列表选择要解码的视频，然后单击解码按钮，就可以播放视频。


