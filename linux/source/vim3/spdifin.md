title: SPDIF IN
---

This document mainly introduces how to use SPDIF IN on VIM3 or VIM3L.

## Enable SPDIF IN

Edit configiure file,

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ sudo vim /boot/env.txt</pre>

Edit `overlays`,

```sh
overlays=uart3 i2c3 i2s os08a10 watchdog --> overlays=uart3 i2c3 i2s os08a10 watchdog spdifin
```

Reboot.

For Overlays documentation, please refer to --> [How to use Device Tree Overlay](./DeviceTreeOverlay.html)

## Test

1. Check the sound card device

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


`device 4: SPDIF-dummy-alsaPORT-spdif` is the device for SPDIF IN

{% note info Tip %}

If you turn off i2s in the overlays, it should be device 3 here

{% endnote %}

2. Test

Use Dupont line to link PIN13 and PIN35(SPDIF OUT & SPDIF IN)

Play wav audio files through SPDIF OUT

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ aplay -Dhw:0,4 xxx.wav</pre>

Record audio files via SPDIF IN

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ arecord -Dhw:0,4 -r 48000 -f S16_LE  test.wav</pre>

