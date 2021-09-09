title: How To Run Android NPU Demo On VIM3 Or VIM3L
---

{% note warn NOTE %}

Before run android NPU Demo,please download [firmware](/android/firmware/Vim3AndroidFirmware.html),update system to newest version.

{% endnote %}


## Get NPU demo

NPU demo is not installed on the board by default, You need to download it from gitlab.

Gitlab repository address :[https://github.com/khadas/khadas_android_npu_app](https://github.com/khadas/khadas_android_npu_app)

NPU demo app currently integrates three yolo series models, as shown in the following figure
![Image of vim_npumode](/android/images/vim3/npumode.png)

```
YOLOV3 MODEL: yolo image recognition model
YOLOV2 MODEL: yolo image recognition model,the accuracy is not as high as yolo v3
YOLOFACE MODEL: yolo face detection model
```
## Run NPU demo
After downloading the app source code, you can import it into Android studio to run it, or you can directly run it with adb install -t APK. Connect the USB camera or mipi camera to the board, and select the corresponding model to run it, as shown in the figure below
![Image of vim_npuresult](/android/images/vim3/npuresult.png)



