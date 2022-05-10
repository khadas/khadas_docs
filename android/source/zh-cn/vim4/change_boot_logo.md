title: 更换开机Logo
---
## 图片格式尺寸要求
* 图片格式
  * 16bit RGB565 BMP
* 图片尺寸
  * <=1080P (1920 * 1080)

## 用adb命令替换开机Logo
```sh
$ adb root
$ adb remount
$ adb push xxx.bmp /mnt/vendor/odm_ext/logo_files/bootup.bmp
$ adb shell sync
$ adb reboot
```

##　更新固件方式替换开机Logo
1. 替换`device/khadas/kvim4/logo_img_files/bootup.bmp` bmp 文件。
2. 编译固件：
```sh
$ cd PATH_YOUR_PROJECT
$ rm -rf out/target/product/kvim4/
$ source build/envsetup.sh
$ lunch kvim4-userdebug
$ make installclean -j8
$ make otapackage -j8
```
3. 烧录新的固件到你的设备，可以参考 [How To Upgrate](UpgradeViaUSBCable.html)，重启设备你将看到新的Logo。
 
{% note info 注意 %}
* `PATH_YOUR_PROJECT` 是你的工程目录
{% endnote %}
