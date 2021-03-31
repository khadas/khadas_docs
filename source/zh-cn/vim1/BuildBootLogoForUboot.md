title: 编译Amlogic平台u-boot开机logo
---

{% note warn 仅用于Android %}

{% endnote %}

下面是Amlogic平台开机logo的基本信息（可能与其他平台不同）：
* 开机logo是在u-boot中加载
* 编译为`logo.img`镜像，存放在`logo`分区
* 在u-boot启动时加载，并在安卓动画出现前消失
* 如果不想显示开机logo，那么只需把`logo`分区留空即可

## 准备工作
开始之前，你需要准备如下格式的开机logo图片：
* BMP格式
  * 16位 RGB565
* 分辨率小于等于1080P (1920 * 1080)  

检查BMP文件：
```
$ file ~/Pictures/khadas.bmp 
/home/gouwa/Pictures/khadas.bmp: data
$ 
```
开机logo参考文件 [khadas.bmp](http://www.mediafire.com/file/xoobk7gc3t5bo00/khadas.bmp)。
在这篇文章中，将会介绍两种不同的方法来编译开机logo。

## 单独编译开机logo
1）下载工具
```
$ git clone https://github.com/khadas/utils.git
```
2）更新你想要编译的开机图片
```
$ mkdir -p images/logo
$ cp ~/Pictures/khadas.bmp images/logo/bootup.bmp
```
3）编译开机logo
```
$ ./utils/logo_img_packer -r images/logo/ images/logo.img 
dbg:item num 1
dbg:pack item [bootup]
$ 
```
## 在安卓源码中编译开机logo
1）更新你想要编译的开机图片
```
$ cp ~/Pictures/khadas.bmp device/khadas/kvim/product/logo/bootup.bmp
```
2）编译开机logo
```
$ make logoimg
```
打印日志如下：
```
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

### make completed successfully (01:54 (mm:ss)) ###

$
```
## 下载`logo.img`
1）拷贝生成的`logo.img`到U盘
```
$ cp images/logo.img /media/gouwa/9B98-6C15/
```
2）把U盘插在VIMs上，并进入[u-boot命令行](/zh-cn/vim1/SetupSerialTool.html)
3）更新`logo`分区
```
kvim# usb_update logo logo.img
```
4）刷新logo
```
kvim# run init_display
```
## 扩展
你会发现还有一些别的图片也会编译进`logo.img`
```
$ ls device/khadas/kvim/product/logo/
bootup.bmp       upgrade_error.bmp  upgrade_logo.bmp     upgrade_unfocus.bmp
upgrade_bar.bmp  upgrade_fail.bmp   upgrade_success.bmp  upgrade_upgrading.bmp
```
这些图片是可选的，用来指示不同的升级状态。
你可以参考如下源码：
```
u-boot/drivers/usb/gadget/v2_burning/v2_common/optimus_progress_ui.c
```
## 参考
[如何使用u-boot](/zh-cn/vim1/UBootUsage.html)

