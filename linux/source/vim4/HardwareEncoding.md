title: Hardware Encoding
---

This article mainly introduces how to use hardware encoding on VIM4.

{% note warn Only support Amlgoic 5.4 Kernel. %}
{% endnote %}

## H264 && H265 Hardware Encoding

```sh
$ aml_enc_test 1080p.nv12 dump.h264 1920 1080 30 30 6000000 100 1 0 2 4   # For h264
$ aml_enc_test 1080p.nv12 dump.h265 1920 1080 30 30 6000000 100 1 0 2 5   # For h165
```

The resulting file after encoding is `dump.h264` or `dump.h265`.

## JPEG Hardware Encoding

```sh
$ jpeg_enc_test 1080p.nv12 dump.jpg 1920 1080 100 3 0 16 16 0
```

The resulting file after encoding is `dump.jpg`.

{% note warn The input file must be in nv12 format. %}
{% endnote %}



