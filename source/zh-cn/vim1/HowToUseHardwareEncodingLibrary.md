title: 如何使用硬件编码库
---
## H264硬件编码库的使用

### H264硬件编码

```sh
$ h264EncoderDemo  1080p.nv21    1080p.h264 1920 1080 10 30 2000000 2000 1
```
编码后的文件为`1080p.h264`

### 获取帮助信息

```sh
$ h264EncoderDemo
Amlogic AVC Encode API
 usage: output [srcfile][outfile][width][height][gop][framerate][bitrate][num][fmt]
  options  :
  srcfile  : yuv data url in your root fs
  outfile  : stream url in your root fs
  width    : width
  height   : height
  gop      : I frame refresh interval
  framerate: framerate
   bitrate  : bit rate
   num      : encode frame count
   fmt      : encode input fmt 0:nv12 1:nv21 2:yv12 3:rgb888 4:bgr888
```

## H265硬件编码库的使用

**注意：VIM1不支持H265硬件编码。**

### H265硬件编码

```sh
$ h265EncoderDemo  1080p.nv21   1080p.h265  1920 1080 0 30 1000000 2000 0
```

编码后的文件为`1080p.h265`

### 获取帮助信息

```sh
$ h265EncoderDemo
Amlogic AVC Encode API
 usage: output [srcfile][outfile][width][height][gop][framerate][bitrate][num]
  options  :
  srcfile  : yuv data url in your root fs
  outfile  : stream url in your root fs
  width    : width
  height   : height
  gop      : I frame refresh interval
  framerate: framerate
   bitrate  : bit rate
   num      : encode frame count
   fmt      : encode input fmt 0:nv21, 1:nv12, 2:RGB888
```

### 编码库源码：https://github.com/numbqq/encoder_libs_aml

