title: How To Change Boot Logo
---

* Where is original logo file

Logo file is stored in the `device/khadas/TARGET/logo_img_files/bootup.bmp` directory in android code.



* BMP format, should be:
  * 16bit RGB565 BMP format
* Resolution <= 1080P (1920 * 1080)


* How To Change

Replace the bootup.bmp ,then rebuild the logo.img

### Build Logo on Android
**1)** Update a new logo picture as you want:
```sh
$ cp ~/Pictures/khadas.bmp device/khadas/kvim3/logo_img_files/bootup.bmp
```

**2)** Build the logo:
```sh
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch TARGET_LUNCH
$ make logoimg

```

See this build log for reference:
```sh
$ make logoimg

...

generate out/target/product/kvim3/upgrade/logo.img
gzip -c device/khadas/kvim3/logo_img_files/bootup.bmp > out/target/product/kvim3/upgrade/logo/bootup.bmp
dbg:item num 8
dbg:pack item [bootup]
dbg:pack item [upgrade_upgrading]
dbg:pack item [upgrade_fail]
dbg:pack item [upgrade_unfocus]
dbg:pack item [upgrade_error]
dbg:pack item [upgrade_success]
dbg:pack item [upgrade_logo]
dbg:pack item [upgrade_bar]
Installed out/target/product/kvim3/upgrade/logo.img

#### make completed successfully (01:54 (mm:ss)) ####

$
```

### Burn the logo.img Separately

**1)** Copy the new logo.img to a thumbdrive (U-disk):
```sh
$ cp images/logo.img /media/jason/9B98-6C15/
```

**2)** Insert the thumbdrive into your VIM3, then boot into [U-Boot mode](/vim1/SetupSerialTool.html).

**3)** Update logo partition as new `logo.img`:
```sh
kvim3# usb_update logo logo.img
```

**4)** Refresh to see the new logo:
```sh
kvim3# run init_display
```
### Updage the logo by upgrate whole firmware
**1)** replace `device/khadas/TARGET/logo_img_files/bootup.bmp` bmp file 
**2)** build upgrate package 
```sh
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch TARGET_LUNCH
$ make installclean -j8
$ make otapackage -j8
```
**3)** Burn upgrate package update.img to your device you can refer [How To Upgrate](/vim1/UpgradeViaUSBCable.html) ,restart then you can see the new boot logo 
 

**Note**:
* Replace `PATH_YOUR_PROJECT` to your project path
* Replace `TARGET_LUNCH` to your lunch select.
  * For VIM3, it's kvim3-userdebug.
  * For VIM3L, it's kvim3l-userdebug.
* `TARGET` should be kvim3 or kvim3l

