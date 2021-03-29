title: 如何更新安卓启动logo
---

* 开机logo文件放置路径

logo 文件保存在安卓源码`device/khadas/TARGET/logo_img_files/bootup.bmp` 目录


* BMP 格式:
  * 16bit RGB565 BMP 格式
* 分辨率小于等于 1080P (1920 * 1080)


* 如何替换开机logo 

替换bootup.bmp文件，然后重新编译logo.img

### 安卓上编译logo.img
**1)** 更新你想要的新的logo图片:
```sh
$ cp ~/Pictures/khadas.bmp device/khadas/kvim3/logo_img_files/bootup.bmp
```

**2)** 编译logo镜像命令:
```sh
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch TARGET_LUNCH
$ make logoimg

```

编译过程log:
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

### 单独烧录logo.img

**1)** 复制 logo.img 到u盘:
```sh
$ cp images/logo.img /media/jason/9B98-6C15/
```

**2)** 插上u盘到你的VIM3上, 然后进入 [U-Boot 模式](/vim1/SetupSerialTool.html)。

**3)** 更新logo.img到 logo 分区:
```sh
kvim3# usb_update logo logo.img
```

**4)** 使用下面命令查看新的logo:
```sh
kvim3# run init_display
```
### 更新整个固件去更新logo
**1)** 替换`device/khadas/TARGET/logo_img_files/bootup.bmp` bmp 文件 
**2)** 编译升级包
```sh
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch TARGET_LUNCH
$ make installclean -j8
$ make otapackage -j8
```
**3)** 烧录升级包到你的设备，你可以参考 [How To Upgrate](/vim1/UpgradeViaUSBCable.html)，重启设备你将看到新的logo。
 

**Note**:
* `PATH_YOUR_PROJECT` 是你的工程目录
* `TARGET_LUNCH` 是你lunch的目标.
  * For VIM3, it's kvim3-userdebug
  * For VIM3L, it's kvim3l-userdebug.
* `TARGET` should be kvim3 or kvim3l

