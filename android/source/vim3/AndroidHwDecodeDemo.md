title: How To Run Android Hwdecode Demo On VIM3
---

## Get hwdecode demo

Hwdecode demo is not installed on the board by default, You need to download it from gitlab.

Gitlab repository address :[https://github.com/khadas/khadas_android_hwdecode_app](https://github.com/khadas/khadas_android_hwdecode_app)

Hwdecode demo app currently integrates three video format decode , as shown in the following figure
![Image of vim_hwdecode_mode](/android/images/vim3/hwdecode.png)

```
Input parameter description

fps: video frame rate
width: video width
height: video height
format: video decode format，for example
MPEG4:1 H264:2 MJPEG:3 AVS:7 HEVC:11 VP9:14 AV1:16

```
## Run hwdecode demo
After downloading the app source code, you can import it into Android studio to run it, or you can directly run it with adb install -t APK. Select the video to decode through video list,then click START DECODE button,then video will play.



