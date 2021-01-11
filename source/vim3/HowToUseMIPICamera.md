title: How To Use MIPI Camera
---

# How To Connect MIPI Camera

Attaching a camera for the first-time to VIM3's MIPI-CSI header? Refer to this picture:
**note**: The reverse connection will burn the camera, please check the connection of the picture carefully before connecting

![image](/images/vim3/docs_vim3_camera_OS08A10.jpg)

# User MIPI Camera via Guvcview

## Open Guvcview

The desktop version has Guvcview pre-installed, find and open this software in the software list.

![mipi_guvcview_icon.png](/images/vim3/mipi_guvcview_icon.png)

## Guvcview Setting

The name of the MIPI camera is `Juno R2`.

![mipi_guvcview_setting.png](/images/vim3/mipi_guvcview_setting.png)

The resolution is set to `1920x10800` and the RGB format is `BGR3-BGR3`.

![mipi_guvcview_seccess.png](/images/vim3/mipi_guvcview_seccess.png)

After the setting is successful, you can use the camera normally.

# Test IR-Cut 

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

# Use MIPICamera via opencv

## Python

The source code with python

```python
import cv2 

if __name__ == '__main__':

    val = True

    cap = cv2.VideoCapture(0)
    cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1920)
    cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 1080)

    fourcc = cv2.VideoWriter_fourcc(*'XVID')

    out = cv2.VideoWriter("./test.avi", fourcc, 20.0, (640, 480), True)

    while val is True:
        ret, frame = cap.read()
        cv2.cvtColor(frame,cv2.COLOR_RGB2BGR)
        if frame is None:
            break
        else:
            out.write(frame)
            cv2.imshow("video", frame)
            k = cv2.waitKey(1) & 0xFF
            if k == 27: 
                break

    cap.release()
    out.release()
```

## C++

The source code with C++

```c++
#include <opencv2/highgui/highgui.hpp>
#include <opencv2/imgproc/imgproc.hpp>
#include <opencv2/core/core.hpp>
#include <iostream>
#include <string>
using
namespace  cv;

using
namespace  std;

int main(int argc, char** argv)
{
    int count=100;
    string str = argv[1];
    string res=str.substr(10);
    VideoCapture capture(stoi(res));
        capture.set(CV_CAP_PROP_FRAME_WIDTH, 1920);
    capture.set(CV_CAP_PROP_FRAME_HEIGHT, 1080);
    while (count)
    {
        Mat frame;
        capture >> frame;

        if (frame.empty()) {
            break;
        }
        int h = frame.rows;
        int w = frame.cols;
        const char *name = "video";
        cvNamedWindow(name, 0);
        cvResizeWindow(name, w / 1, h / 1);
        imshow(name, frame);
        waitKey(30);
        count--;
    }
    return 0;
}

```

**Learn More:**
- [khadas.com/shop](https://www.khadas.com/product-page/os08a10-8mp-camera)
- [Schematic](https://dl.khadas.com/Hardware/Accessories/OS08A10/OS08A10_V11_Specification.pdf)
- [Datasheet](https://dl.khadas.com/Hardware/Accessories/OS08A10/OS08A10-H92A_Specification_Version-2-11_SE.pdf)
