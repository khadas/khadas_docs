title: 更换开机动画
---

## Bootanimation内容解析

Android的开机动画是由一系列连续的png图片组成，其将各帧png图片以压缩方式保存为`bootanimation.zip`，该压缩文件一般包括一个描述文件和几个part目录。
需要注意的是，压缩方式必须为存储压缩。

```
-rw-rw-rw- 1 lxx lxx   74 Aug 17  2015 desc.txt
drwxrwxrwx 2 lxx lxx 4096 Mar 18 11:10 part0
drwxrwxrwx 2 lxx lxx 4096 Mar 18 11:11 part1
drwxrwxrwx 2 lxx lxx 4096 Mar 18 11:11 part2
drwxrwxrwx 2 lxx lxx 4096 Mar 18 13:41 part3
drwxrwxrwx 2 lxx lxx 4096 Mar 18 13:42 part4
```

* `desc.txt`: 动画属性描述文件，用于设置动画像素（大小）、帧数、循环次数、文件名称等；
　　　　　　需要注意的是，文件格式需要设置为ANSI格式

* `Part0`: 第一阶段动画图片目录，存放每帧png图片文件夹

* `Part1`: 第二阶段动画图片目录，存放每帧png图片文件夹


`desc.txt`文件内容如下:

```
543 143 60
c 1 30 part0
c 1 0 part1
c 0 0 part2
c 1 64 part3
c 1 15 part4
```
`543 143 60`
`543`：图片像素的宽度
`143`：图片像素的高度
`60`：图片播放的帧率

`c 1 30 part0`
`c`：代表标志位
`1`：表示循环次数为1次（`0`表示无线循环）
`30`：表示port0目录下包含多少贞图片
`part0`：表示对应文件夹

## Bootanimation生成与替换

自定义part目录和`desc.txt` 文件后，可以使用下列命令生成`bootanimation.zip`：

```
$ zip -r -X -Z store bootanimation part*/* desc.txt
``` 
把`bootanimation.zip`文件放到`system/media`目录下，重启设备将显示新的动画：

```
$ adb root
$ adb remount
$ adb push bootanimation.zip system/media/bootanimation.zip
```

