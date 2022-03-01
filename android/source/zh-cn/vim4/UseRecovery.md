title: 如何使用android recovery
---

## recovery 进入方式
**1）** 板子上电后，长按power按键直至进入recovery 模式
**2）** 进入主系统后，串口输入reboot recovery ,或者通过adb reboot recovery 命令

## recovery ota 升级
进入recovery 后，将源码生成的kvim3-ota-eng.root.zip 升级包复制到u盘，选择 Apply update from EXT 项进行升级，升级不擦除data分区

## 修改recovery 文字大小
android recovery 默认有两种字体,一种是12x22 ,一种是18x32,从recovery下的png图片中获取对应的字体大小，对应如下
```shell
root@lxx-NUC10i7FNH:/home/lxx/Downloads/android_khadas/bootable/recovery/fonts# ls -l
total 188
-rw-r--r-- 1 root root 145804 May 22 13:48 12x22.png
-rw-r--r-- 1 lxx  lxx   24437 Apr 20 15:29 18x32.png
-rw-r--r-- 1 lxx  lxx    4407 Apr 20 15:29 OFL.txt
-rw-r--r-- 1 lxx  lxx     216 Apr 20 15:29 README

```
由build/make/core/Makefile 中的recovery_font 变量指定要使用的字体大小
```shell
ifneq (,$(filter xxxhdpi 560dpi xxhdpi 400dpi xhdpi,$(recovery_density)))
recovery_font := $(call include-path-for, recovery)/fonts/18x32.png
else
recovery_font := $(call include-path-for, recovery)/fonts/12x22.png
endif

```
如果需要自定义recovery 的文字大小，可以增加类似12x22.png 图片，只需要通过ps软件修改png 图片的长宽像素大小，然后添加到源码目录bootable/recovery/fonts下重新编译升级包升级可以看到效果

**注意**: 12x22.png 对应的字体大小是长等于12个像素，高等于22个像素，12x22.png实际像素大小是1152x44,12 = 1152/96，22=44/2 

## recovery 下常用命令使用
进入recovery后，有些常用命令cp ,ls,vi 等不能直接使用，要通过busybox 才能使用,比如
```shell
# vi /etc/recovery.kl                                                          
/sbin/sh: vi: not found
# 
# busybox vi /etc/recovery.kl 
```


