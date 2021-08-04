title: Khadas Tone1 User Manual
---

Thank you for purchasing a Khadas Tone1. Now you can easily enjoy Hi-Res Audio at home.
![Tone1](/images/tone1/ToneboardOverview.jpg)





## In The Box
VIMs Edition|Generic Edition|
---|:---
Tone1 (with 20 & 40 pin header on board)|Tone1
USB Cable|USB Cable
Set of Screws|Set of Screws
-|Header: 40-Pin Female
-|Header: 20-Pin

![Tone1 Recipes](/images/tone1/ToneboardRecipes.jpg)


## Device Connection

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="vims-tab" data-toggle="tab" href="#vims" role="tab" aria-controls="vims" aria-selected="true">VIM1/VIM2/Edge</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="other-tab" data-toggle="tab" href="#other" role="tab" aria-controls="other" aria-selected="false">Others</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="vims" role="tabpanel" aria-labelledby="win-tab">

Step|Operation|
---|:---
Step 1| Connect Tone1 and VIM1/VIM2/Edge-V SBC through 40-Pin Header
Step 2| Connect RCA output
Step 3| Connect HDMI
Step 4| Connect DC 5V

![Tone1 Connection VIMs](/images/tone1/ToneboardConnectionVIMs.png)

</div>
<div class="tab-pane fade" id="other" role="tabpanel" aria-labelledby="win-tab">

Step|Operation|
---|:---
Step 1| Connect RCA output 
Step 2| Connect Tone1 with PC using a USB-C data cable

![Tone1 Connection General](/images/tone1/ToneboardConnectionGeneral.jpg)

</div>
</div>

## Setting Up
Most software platforms have integrated Tone1 Drivers. Only Windows platforms need to install drivers.

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="vims-set-tab" data-toggle="tab" href="#vims-set" role="tab" aria-controls="vims-set" aria-selected="true">VIM1/VIM2/Edge</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="win-set-tab" data-toggle="tab" href="#win-set" role="tab" aria-controls="win-set" aria-selected="false">Windows</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="ubuntu-set-tab" data-toggle="tab" href="#ubuntu-set" role="tab" aria-controls="ubuntu-set" aria-selected="false">Ubuntu</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="mac-set-tab" data-toggle="tab" href="#mac-set" role="tab" aria-controls="mac-set" aria-selected="false">MacOS</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="rpi-set-tab" data-toggle="tab" href="#rpi-set" role="tab" aria-controls="rpi-set" aria-selected="false">Raspberry Pi</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="vims-set" role="tabpanel" aria-labelledby="vims-set-tab">

Make sure the firmware of your VIM1 is upgraded to VIM_Nougat_V180524 or later.
Make sure the firmware of your VIM2 is upgraded to VIM2_Nougat_V180413 or later.
Edge-V TBD.


</div>
<div class="tab-pane fade" id="win-set" role="tabpanel" aria-labelledby="win-set-tab">

 We will use Windows 10 for this example. Windows 7 is similar.
  *  Install XMOS Driver 
     * [Download](https://dl.khadas.com/Firmware/ToneBoard/Driver/Thesycon-Stereo-USB-Audio-Driver-V224.rar).
     * Decompress and run setup.exe to install the driver.
     * Install completed. 
![Tone1 Windows Setup1](/images/tone1/ToneboardWindowsSetup1.png)
  *  Switch sound-card to the Tone1
     * Click the sound icon in the lower-right-corner of the Windows Task-Bar.
![Tone1 Windows Setup2](/images/tone1/ToneboardWindowsSetup2.jpg)
     * Chose XMOS XS1-U8 DJ as the default sound-card.
![Tone1 Windows Setup3](/images/tone1/ToneboardWindowsSetup3.jpg)

</div>
<div class="tab-pane fade" id="ubuntu-set" role="tabpanel" aria-labelledby="ubuntu-set-tab">

Switch sound-card to the Tone1
![Tone1 Ubuntu Setup](/images/tone1/ToneboardUbuntuSetup.jpg)

</div>
<div class="tab-pane fade" id="mac-set" role="tabpanel" aria-labelledby="mac-set-tab">

Switch sound-card to the Tone1
![Tone1 Mac OS Setup](/images/tone1/ToneboardMacosSetup.jpg)

</div>
<div class="tab-pane fade" id="rpi-set" role="tabpanel" aria-labelledby="rpi-set-tab">

*  Switch sound-card to the Tone1
     
   * Volumio
![Tone1 Rpi Setup](/images/tone1/ToneboardRpiSetup.jpg)
     
   * Raspbian
```
1.list sound card
$ aplay -l

2.switch sound card
$vi ~/.asoundrc

3.replace card 0 for XMOS sound card
pcm.!default {
    type hw
    card 0
}

ctl.!default {
    type hw
    card 0
}
```

</div>
</div>


## Ports and Interfaces
No|Ports|Function|
---|:---|:---
1|USB-C    |Power supply & data transmission
2|S/PDIF   |S/PDIF input/output
3|L             |Audio left channel output
4|R            |Audio right channel output
5|20Pin Header  |Debug Port, update XMOS firmware
6|40Pin Header  |VIMs connector (Power supply & data transmission)
7|I2S         |VIMs I2S output
8|8 Channel Ext |XMOS 8 Channel extend
9|OLED     |VIMs OLED display
10|Power LED     |Power supply indicator

![Tone1 Ports](/images/tone1/ToneboardPorts.png)


<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="no5-tab" data-toggle="tab" href="#no5" role="tab" aria-controls="no5" aria-selected="true">No.5</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="no6-tab" data-toggle="tab" href="#no6" role="tab" aria-controls="no6" aria-selected="false">No.6</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="no7-tab" data-toggle="tab" href="#no7" role="tab" aria-controls="no7" aria-selected="false">No.7</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="no8-tab" data-toggle="tab" href="#no8" role="tab" aria-controls="no8" aria-selected="false">No.8</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="no9-tab" data-toggle="tab" href="#no9" role="tab" aria-controls="no9" aria-selected="false">No.9</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="no5" role="tabpanel" aria-labelledby="no5-tab">

**No5**: 20-Pin Header Pinout (J4)

Signal| Pin|Pin|Signal
---|:---|:---|:---
VCC_3V3|1|11|Tone_5V
Linux_TX|2|12|Tone_5V
Linux_RX|3|13|GND
GND|4|14|GND
XL_DN1|5|15|XMOS_RST
XL_DN0|6|16|XMOS_TDO
XL_UP0|7|17|XMOS_TDI
XL_UP1|8|18|XMOS_TCK
XMOS_3V3|9|19|XMOS_TMS
GND|10|20|GND

</div>
<div class="tab-pane fade" id="no6" role="tabpanel" aria-labelledby="no6-tab">

**No6:** 40-Pin Header Pinout (J1)

Signal| Pin|Pin|Signal
---|:---|:---|:---
5V_1|1|21|GND5
5V_2|2|22|OLED_SCL
VIM_DN|3|23|OLED_SDA
VIM_DP|4|24|GND6
GND|5|25|-
-|6|26|-
-|7|27|VCC_3V3
-|8|28|GND7
GND|9|29|I2S_SCLK
ADC0|10|30|I2S_MCLK
-|11|31|I2S_SDO
-|12|32|I2S_LRCK
VIM_SPDIF|13|33|I2S_SDI
GND3|14|34|GND8
UART_RX_AO_B/SPDIF_MODE|15|35|OLED_PWREN
UART_TX_AO_B/SPDIF_IN_MODE|16|36|-
GND4|17|37|OLED_RST
Linux_RX|18|38|-
Linux_TX|19|39|MUTE
VCC_3V3|20|40|GND9

</div>
<div class="tab-pane fade" id="no7" role="tabpanel" aria-labelledby="no7-tab">

**No7:** I2S FPC Connectors Pin-Out (J9)

Pin|Signal
---|:---
1|Tone_5V
2|GND
3|VCC_3V3
4|GND
5|I2S_SCLK
6|I2S_MCLK
7|I2S_SDI
8|I2S_LRCK
9|I2S_SDO
10|GND

</div>
<div class="tab-pane fade" id="no8" role="tabpanel" aria-labelledby="no8-tab">

**No8:** 8 Channel Ext FPC Connectors Pin-Out (J3)

Pin|Signal
---|:---
1-3|Tone_5V
4-6|GND
7,8|XMOS_3V3
9|XMOSIO3
10|XMOSIO2
11|XMOSIO1
12|ADC0
13|VOLUME
14|XMOS_SCL
15|XMOS_SDA
16|MUTE
17|DAC_RST
18|GND
19|MCLK
20|GND
21|LRCK/DSD_CLK
22|GND
23|BCLK/DSD_1
24|GND
25|SIN0/DSD_2
26|SIN1/DSD_3
27|SIN2/DSD_4
28|SIN3/DSD_5
29|DSD_6
30|GND

</div>
<div class="tab-pane fade" id="no9" role="tabpanel" aria-labelledby="no9-tab">

**No9:** OLED FPC Connectors Pin-Out (J8)

PIN|SIGNAL
---|:---
1|Tone_5V
2|Tone_5V
3|OLED_SCL
4|OLED_SDA
5|GND
6|-
7|OLED_RST
8|OLED_PWREN
9|-
10|GND

</div>
</div>

## FAQs
* How to extend to 8-channel audio?
XMOS supports 8-channel analog line-out. However, the Tone1 DAC (ES9038Q2M) is already using 2-channels. Users can add a DAC for 8-channel expansion.
