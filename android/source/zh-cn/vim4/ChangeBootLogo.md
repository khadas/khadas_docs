title: 更新开机logo
---

* BMP格式
  * 16bit RGB565 BMP 格式
* 分辨率小于等于 1080P (1920 * 1080)

## 在线替换开机logo
```sh
$ adb root
$ adb remount
$ adb push xxx.bmp /mnt/vendor/odm_ext/logo_files/bootup.bmp
$ adb shell sync
$ adb reboot
```

## 更新固件去更新logo
1. 替换`device/khadas/TARGET/logo_img_files/bootup.bmp` bmp 文件。
2. 编译升级包。
```sh
$ cd PATH_YOUR_PROJECT
$ rm -rf out/target/product/TARGET/
$ source build/envsetup.sh
$ lunch TARGET_LUNCH
$ make installclean -j8
$ make otapackage -j8
```
3. 烧录升级包到你的设备，你可以参考 [How To Upgrate](UpgradeViaUSBCable.html)，重启设备你将看到新的logo。
 
{% note info 注意 %}
* `PATH_YOUR_PROJECT` 是你的工程目录
* `TARGET_LUNCH` 是你lunch的目标
  * For VIM4, it's kvim4-userdebug
* `TARGET` should be kvim4
{% endnote %}
