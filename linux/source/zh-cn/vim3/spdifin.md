title: SPDIF IN
---

这篇文档主要介绍，如果和在VIM3或VIM3L上使用SPDIF IN。

## 使能SPDIF IN

修改配置文件，

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ sudo vim /boot/env.txt</pre>

修改`overlays`，

```sh
overlays=uart3 i2c3 i2s os08a10 watchdog --> overlays=uart3 i2c3 i2s os08a10 watchdog spdifin
```

重启生效。

Overlays文档请参考 --> [如何使用Device Tree Overlay](./DeviceTreeOverlay.html)

## 测试

1. 确定声卡设备，

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: AMLAUGESOUND [AML-AUGESOUND], device 0: SPDIF-B-dit-hifi-alsaPORT-spdif-b dit-hifi-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 0: AMLAUGESOUND [AML-AUGESOUND], device 1: TDM-A-dummy-alsaPORT-pcm multicodec-1 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 0: AMLAUGESOUND [AML-AUGESOUND], device 2: TDM-B-dummy-alsaPORT-i2s multicodec-2 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 0: AMLAUGESOUND [AML-AUGESOUND], device 3: TDM-C-dummy multicodec-3 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 0: AMLAUGESOUND [AML-AUGESOUND], device 4: SPDIF-dummy-alsaPORT-spdif dummy-4 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
</pre>


设备`device 4: SPDIF-dummy-alsaPORT-spdif`就是我们对应的SPDIF IN

{% note info Tip %}

如果你在overlays里面关闭了i2s，这里应该是设备3

{% endnote %}

2. 测试

使用杜邦线链接PIN13和PIN35(SPDIF OUT & SPDIF IN)

通过SPIDOUT播放wav音频文件

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ aplay -Dhw:0,4 xxx.wav</pre>

通过SPDIF IN录制音频文件

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ arecord -Dhw:0,4 -r 48000 -f S16_LE  test.wav</pre>

