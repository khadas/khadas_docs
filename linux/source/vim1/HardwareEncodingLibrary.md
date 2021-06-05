title: How To Use Hardware Encoding Library
---

{% note warn Only support Linux 4.9. %}

{% endnote %}

## H264 Hardware Encoding

```bash
$ h264EncoderDemo  1080p.nv21    1080p.h264 1920 1080 10 30 2000000 2000 1
```
The encoded file is `1080p.h264`

### Get Help Information

```bash
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

## H265 Hardware Encoding

{% note warn Note %}

VIM1 doesn't support H265 Hardware Encoding.

{% endnote %}

```bash
$ h265EncoderDemo  1080p.nv21   1080p.h265  1920 1080 0 30 1000000 2000 0
```

The encoded file is `1080p.h265`

### Get Help Information

```bash
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
## Code Library Source Code

https://github.com/numbqq/encoder_libs_aml
