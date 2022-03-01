title: 更新开机动画
---
## Bootanimation.zip 目录

1. VIM4源代码目录`device/khadas/common/products/tv/bootanimation.zip`。
2. VIM4本机内目录`system/media/bootanimation.zip`。

## Bootanimation.zip 内容解析

Android的开机动画是由一系列连续的png图片作为帧组成的动画形式，将各帧png图片以压缩方式保存。这个保存的文件名就是`Bootanimation.zip`，压缩方式必须为存储压缩。一般包括一个文件、几个part目录。

```
-rw-rw-rw- 1 lxx lxx   74 Aug 17  2015 desc.txt
drwxrwxrwx 2 lxx lxx 4096 Mar 18 11:10 part0
drwxrwxrwx 2 lxx lxx 4096 Mar 18 11:11 part1
drwxrwxrwx 2 lxx lxx 4096 Mar 18 11:11 part2
drwxrwxrwx 2 lxx lxx 4096 Mar 18 13:41 part3
drwxrwxrwx 2 lxx lxx 4096 Mar 18 13:42 part4
```

1. `desc.txt` : 动画属性描述文件。用于设置这个动画像素（大小），帧数，循环次数，文件名称等。文件格式需要设置为ANSI格式。

2. `Part0` : 第一阶段动画图片目录，存放每帧png图片文件夹。

3. `Part1` : 第二阶段动画图片目录，存放每帧png图片文件夹。


`desc.txt`文件内容如下:

```
543 143 60
c 1 30 part0
c 1 0 part1
c 0 0 part2
c 1 64 part3
c 1 15 part4
```
`543 143 60` : 前两个数字代表图片的像素宽度和高度，`60`代表帧数，也就是1秒播放的图片张数。

`c 1 30 part0` : `c`代表标志位，`1`表示循环次数为1次，`0`表示阶段间隔时间为0，`part0`表示对应文件夹，其他行类似。

## 怎样去生成Bootanimation.zip

在你自定义part目录和`desc.txt` 文件后，你可以使用下列命令去生成`Bootanimation.zip`。

```
$ zip -r -X -Z store bootanimation part*/* desc.txt 
``` 
把`Bootanimation.zip`文件放到`system/media`目录下，重启设备将显示新的动画。

```
$ adb push bootanimation.zip system/media/bootanimation.zip
```

