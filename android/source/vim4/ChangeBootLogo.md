title: Change Boot Logo
---

* BMP format, should be
  * 16bit RGB565 BMP format
* Resolution <= 1080P (1920 * 1080)

## Replace the Boot Logo by ADB
```sh
$ adb root
$ adb remount
$ adb push xxx.bmp /mnt/vendor/odm_ext/logo_files/bootup.bmp
$ adb shell sync
$ adb reboot
```

## Updage the Logo by Upgrate Whole Firmware
1. Replace `device/khadas/TARGET/logo_img_files/bootup.bmp` bmp file.
2. Build upgrate package.
```sh
$ cd PATH_YOUR_PROJECT
$ rm -rf out/target/product/TARGET/
$ source build/envsetup.sh
$ lunch TARGET_LUNCH
$ make installclean -j8
$ make otapackage -j8
```
3. Burn upgrate package update.img to your device you can refer [How To Upgrate](UpgradeViaUSBCable.html), restart then you can see the new boot logo.
 
{% note info Note %}
* Replace `PATH_YOUR_PROJECT` to your project path
* Replace `TARGET_LUNCH` to your lunch select
  * For VIM4, it's kvim4-userdebug
* `TARGET` should be kvim4
{% endnote %}
