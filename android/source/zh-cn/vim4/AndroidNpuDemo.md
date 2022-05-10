title: 如何在VIM3或VIM3L上面运行 Android NPU Demo
---

{% note warn 注意 %}

在运行android NPU Demo前请先下载[firmware](/android/zh-cn/firmware/Vim3AndroidFirmware.html)升级系统到最新版本。

{% endnote %}


## 获取NPU Demo

NPU Demo 默认并没有安装在板子上，需要先从gitlab自行下载。

仓库在gitlab上的地址为:[https://github.com/khadas/khadas_android_npu_app](https://github.com/khadas/khadas_android_npu_app)

NPU Demo app 目前集成了yolo 系列的三个模型，如下图
![Image of vim_npumode](/android/images/vim3/npumode.png)

```
YOLOV3 MODEL: yolo 图像识别模型
YOLOV2 MODEL: yolo 图像识别模型,准度没有yolo v3高
YOLOFACE MODEL: yolo 人脸检测模型
```
## 运行 npu demo
下载app 源码后，可以导入到android studio中去运行，也可以直接adb install -t apk 去运行，板子接上usb 摄像头或mipi 摄像头，选择相应的模型就能运行,如下图
![Image of vim_npuresult](/android/images/vim3/npuresult.png)



