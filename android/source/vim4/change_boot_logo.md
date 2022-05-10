title: Change Boot Logo
---

* Image format:
  * 16bit RGB565 (BMP)
* Resolution:
  * <= 1080P (1920x1080 px)

## Change Boot Logo via ADB

```sh
$ adb root
$ adb remount
$ adb push xxx.bmp /mnt/vendor/odm_ext/logo_files/bootup.bmp
$ adb shell sync
$ adb reboot
```

## Change Boot Logo via Upgrading the Firmware

1. Replace the `device/khadas/kvim4/logo_img_files/bootup.bmp` logo file.

2. Build upgrade package:
```sh
$ cd PATH_YOUR_PROJECT
$ rm -rf out/target/product/kvim4/
$ source build/envsetup.sh
$ lunch kvim4-userdebug
$ make installclean -j8
$ make otapackage -j8
```
3. Burn update.img to your SBC, you can refer [How To Upgrade](UpgradeViaUSBCable.html). Restart for changes to take effect.
 
{% note info Note %}
* Replace `PATH_YOUR_PROJECT` with your project path
{% endnote %}
