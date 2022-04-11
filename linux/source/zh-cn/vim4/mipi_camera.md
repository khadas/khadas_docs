title: MIPI摄像头
---

## 连接摄像头

按照下面图片的方式，将摄像头连接到板子的是`MIPI-CSI`接口。

{% note info 注意 %}
接反会烧坏摄像头，连接前请仔细查看图片的接法。
{% endnote %}

<img src="/linux/images/vim3/docs_vim3_camera_OS08A10.jpg" width="50%" height="50%" >

## 通过Guvcview使用摄像头

### 打开Guvcview

桌面版本已经预装了Guvcview，直接在软件列表里找到并打开这个软件

![mipi_guvcview_icon.png](/linux/images/vim3/mipi_guvcview_icon.png)

### 设置Guvcview

MIPI摄像头的名称为`Juno R2`

<img src="/linux/images/vim3/mipi_guvcview_setting.png" width="50%" height="50%" >

分辨率设置成`1920x1080`，RGB格式为`BGR3-BGR3`

<img src="/linux/images/vim3/mipi_guvcview_seccess.png" width="50%" height="50%" >

设置成功以后，就能正常的使用摄像头了

## 测试IR-Cut 

通过`v4l2`可以测试使用IR-Cut

测试需要在`framebuffer`模式下进行，通过`Ctrl`+`Alt`+`F1`的键盘组合，切换到`framebuffer`模式

IR-Cut不打开

```shell
v4l2_test  -c 1 -p 0 -F 0 -f 0 -D 0 -R 1 -r 2 -d 2 -N 1000 -n 800 -w 0 -e 1 -I 0 -b /dev/fb0 -v /dev/video0
```

IR-Cut打开

```shell
v4l2_test  -c 1 -p 0 -F 0 -f 0 -D 0 -R 1 -r 2 -d 2 -N 1000 -n 800 -w 0 -e 1 -I 1 -b /dev/fb0 -v /dev/video0
```

## 使用Gstreamer录制视频
```
$ gst-launch-1.0 v4l2src name=vsrc device=/dev/video0 ! video/x-raw,width=1920,height=1080,framerate=60/1,format=RGB ! filesink location=.//test.rgb
```
录制的视频保存在`test.rgb`中


## 通过Opencv使用MIPICamera

### Python

python版本的源码如下：

```sh
$ wget https://dl.khadas.com/development/code/docs_source/mipi-opencv.py
```

### C++

C++版本的源码如下：

```sh
$ wget https://dl.khadas.com/development/code/docs_source/mipi-opencv.cpp    
```

编译命令

```sh
$ gcc -o mipi mipi-opencv.cpp -lopencv_imgproc -lopencv_core -lopencv_videoio -lopencv_imgcodecs -lopencv_highgui -std=c++11 -std=gnu++11 -Wall -std=c++11 -lstdc++ -I/usr/include/opencv4
```

运行:

```sh
$ ./mipi /dev/videoX
```


**更多资料:**
- [khadas.com/shop](https://www.khadas.com/product-page/os08a10-8mp-camera)
- [原理图](https://dl.khadas.com/Hardware/Accessories/OS08A10/OS08A10_V11_Specification.pdf)
- [数据手册](https://dl.khadas.com/Hardware/Accessories/OS08A10/OS08A10-H92A_Specification_Version-2-11_SE.pdf)
