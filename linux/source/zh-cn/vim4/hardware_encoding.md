title: 硬件编码
---

这篇主要介绍如何在VIM4上面使用硬件编码。

{% note warn 仅支持Amlgoic 5.4内核 %}
{% endnote %}

## H264硬件编码

```bash
$ aml_enc_test 1080p.nv12 dump.h264 1920 1080 30 30 6000000 100 1 0 2 4
```
编码后的生成的文件为`dump.h264`。

## H265硬件编码

```bash
$ aml_enc_test 1080p.nv12 dump.h265 1920 1080 30 30 6000000 100 1 0 2 5
```

编码后的生成的文件为`dump.h265`。

## JPEG硬件编码

```bash
$ jpeg_enc_test 1080p.nv12 dump.jpg 1920 1080 100 3 0 16 16 0
```

编码后生成的文件为`dump.jpg`。
