title: Hardware Encoding
---

This documentation will introduce how to use hardware encoding on VIM4.

{% note warn Only support Amlgoic 5.4 Kernel. %}
{% endnote %}

## H264 Hardware Encoding

```bash
$ aml_enc_test 1080p.nv12 dump.h264 1920 1080 30 30 6000000 100 1 0 2 4
```

The encoded file is `dump.h264`.

## H265 Hardware Encoding

```bash
$ aml_enc_test 1080p.nv12 dump.h265 1920 1080 30 30 6000000 100 1 0 2 5
```

The encoded file is `dump.h265`.

## JPEG Hardware Encoding

```bash
$ jpeg_enc_test 1080p.nv12 dump.jpg 1920 1080 100 3 0 16 16 0
```

The encoded file is `dump.jpg`.
