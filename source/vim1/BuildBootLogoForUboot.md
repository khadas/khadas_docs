title: Build Bootup Logo for U-Boot
---

Below are the basic information for the bootup Logo on Amlogic platform(might different with other SoC platforms):

* The Logo is loaded on U-Boot
* Build as `logo.img` with a separate `logo` partition
* Will display at the point U-Boot load `logo.img`, and disappear until the bootanimation of Android is loaded.
* If you don't want to display a bootup `logo`, just leave logo partition as blank.

### Preperations
Before starting, a bootup picture will be needed with below specs:

* BMP format, should be one of:
  * 16bit RGB565 BMP format
  * 24bit RGB888 BMP format
* Resolution <= 1080P (1920 * 1080)

Check the bmp file:
```sh
$ file ~/Pictures/khadas.bmp 
/home/gouwa/Pictures/khadas.bmp: data
$
```
A example bootup logo file [khadas.bmp](http://www.mediafire.com/file/xoobk7gc3t5bo00/khadas.bmp) for reference.

And in this guidance, we will introduce two different approaches to build the bootup Logo.

### Build Logo Separately
**1)** Clone the tool:
```sh
$ git clone https://github.com/khadas/utils.git
```

**2)** Update a new logo picture as you want:
```sh
$ mkdir -p images/logo
$ cp ~/Pictures/khadas.bmp images/logo/bootup.bmp
```
**3)** Build the logo:
```sh
$ ./utils/logo_img_packer -r images/logo/ images/logo.img 
dbg:item num 1
dbg:pack item [bootup]
$ 
```

### Build Logo on Android
**1)** Update a new logo picture as you want:
```sh
$ cp ~/Pictures/khadas.bmp device/khadas/kvim/product/logo/bootup.bmp
```

**2)** Build the logo:
```sh
$ make logoimg
```

Following build log for reference:
```sh
$ make logoimg

...

generate out/target/product/kvim/upgrade/logo.img
gzip -c device/khadas/kvim/product/logo/bootup.bmp > out/target/product/kvim/upgrade/logo/bootup.bmp
dbg:item num 8
dbg:pack item [bootup]
dbg:pack item [upgrade_upgrading]
dbg:pack item [upgrade_fail]
dbg:pack item [upgrade_unfocus]
dbg:pack item [upgrade_error]
dbg:pack item [upgrade_success]
dbg:pack item [upgrade_logo]
dbg:pack item [upgrade_bar]
Installed out/target/product/kvim/upgrade/logo.img

#### make completed successfully (01:54 (mm:ss)) ####

$
```

### Download the logo.img
**1)** Copy the new logo.img to a USB disk:
```sh
$ cp images/logo.img /media/gouwa/9B98-6C15/
```

**2)** Insert the USB disk into VIM1 device, then boot into U-Boot mode.

**3)** Update logo partition as new `logo.img`:
```sh
kvim# usb_update logo logo.img
```

**4)** Refresh to new Logo:
```sh
kvim# run init_display
```

### Further reading
You might notice that there are [some other pictures](https://github.com/khadas/android_device_khadas/tree/Vim/kvim/product/logo) listed as below also built into `logo.img`:

```sh
$ ls device/khadas/kvim/product/logo/
bootup.bmp       upgrade_error.bmp  upgrade_logo.bmp     upgrade_unfocus.bmp
upgrade_bar.bmp  upgrade_fail.bmp   upgrade_success.bmp  upgrade_upgrading.bmp
```
These pictures are used for indicate the different upgrade states, it's optional for bootup Logo.

You can check following source code for further details:

```sh
u-boot/drivers/usb/gadget/v2_burning/v2_common/optimus_progress_ui.c
```

See Also
[U-Boot Usage]()
