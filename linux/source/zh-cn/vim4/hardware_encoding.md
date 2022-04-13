title: 硬件编码
---

这篇主要介绍如何在VIM4上面使用硬件编码。

{% note warn 仅支持Amlgoic 5.4内核 %}
{% endnote %}

## H264 && H265 硬件编码

```sh
$ aml_enc_test 1080p.nv12 dump.h264 1920 1080 30 30 6000000 100 1 0 2 4   #h264
$ aml_enc_test 1080p.nv12 dump.h265 1920 1080 30 30 6000000 100 1 0 2 5   #h165
```

编码后的生成的文件为`dump.h264`或者`dump.h265`。

## jpeg 硬件编码

```sh
$ jpeg_enc_test 1080p.nv12 dump.jpg 1920 1080 100 3 0 16 16 0
```

编码后生成的文件为`dump.jpg`。

{% note warn 输入文件必须使用nv12格式。 %}
{% endnote %}



