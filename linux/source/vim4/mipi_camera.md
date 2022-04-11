title: MIPI Camera
---

## How To Connect MIPI Camera

Attaching a camera for the first-time to VIM3's MIPI-CSI header? Refer to this picture:

{% note info Note %}
The reverse connection will burn the camera, please check the connection of the picture carefully before connecting
{% endnote %}

<img src="/linux/images/vim3/docs_vim3_camera_OS08A10.jpg" width="50%" height="50%" >

## User MIPI Camera via Guvcview

### Open Guvcview

The desktop version has Guvcview pre-installed, find and open this software in the software list.

![mipi_guvcview_icon.png](/linux/images/vim3/mipi_guvcview_icon.png)

### Guvcview Setting

The name of the MIPI camera is `Juno R2`.

<img src="/linux/images/vim3/mipi_guvcview_setting.png" width="50%" height="50%" >

The resolution is set to `1920x1080` and the RGB format is `BGR3-BGR3`.

<img src="/linux/images/vim3/mipi_guvcview_seccess.png" width="50%" height="50%" >

After the setting is successful, you can use the camera normally.

## Test IR-Cut 

You can test IR-Cut via `v4l2`

The test needs to be conducted in the `framebuffer` mode, and switch to the `framebuffer` mode through the keyboard combination of `Ctrl`+`Alt`+`F1`.

disable IR-Cut

```shell
v4l2_test  -c 1 -p 0 -F 0 -f 0 -D 0 -R 1 -r 2 -d 2 -N 1000 -n 800 -w 0 -e 1 -I 0 -b /dev/fb0 -v /dev/video0
```

enable IR-Cut

```shell
v4l2_test  -c 1 -p 0 -F 0 -f 0 -D 0 -R 1 -r 2 -d 2 -N 1000 -n 800 -w 0 -e 1 -I 1 -b /dev/fb0 -v /dev/video0
```

### Record Video via Gstreamer
```
$ gst-launch-1.0 v4l2src name=vsrc device=/dev/video0 ! video/x-raw,width=1920,height=1080,framerate=60/1,format=RGB ! filesink location=.//test.rgb
```
The recorded video is saved in`test.rgb`.

## Use MIPI Camera via opencv

### Python

The source code with python

```sh
$ wget https://dl.khadas.com/development/code/docs_source/mipi-opencv.py
```

### C++

The source code with C++

```sh
$ wget https://dl.khadas.com/development/code/docs_source/mipi-opencv.cpp
```

compile command:

```sh
$ gcc -o mipi mipi-opencv.cpp -lopencv_imgproc -lopencv_core -lopencv_videoio -lopencv_imgcodecs -lopencv_highgui -std=c++11 -std=gnu++11 -Wall -std=c++11 -lstdc++ -I/usr/include/opencv4
```

How to run:

```sh
$ ./mipi /dev/videoX
```

**Learn More:**
- [khadas.com/shop](https://www.khadas.com/product-page/os08a10-8mp-camera)
- [Schematic](https://dl.khadas.com/Hardware/Accessories/OS08A10/OS08A10_V11_Specification.pdf)
- [Datasheet](https://dl.khadas.com/Hardware/Accessories/OS08A10/OS08A10-H92A_Specification_Version-2-11_SE.pdf)
