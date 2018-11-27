title: Khadas Tone Board User Manual
---

Thank you for purchasing Khadas Tone Board, now you can easily enjoy Hi-Res Audio at home.
![Tone Board Overview](/images/toneboard/ToneboardOverview.jpg)





## In the box
VIMs Edition|Generic Edition|
---|:---
Tone Board (with 20 & 40 pin header on board)|Tone Board
USB Cable|USB Cable
Screws set|Screws set
-|Header: 40 PIN Female
-|Header: 20 PIN

![Tone Board Recipes](/images/toneboard/ToneboardRecipes.jpg)


## Device connection

* ### VIMs

step|operation|
---|:---
step 1| connect Tone Board and VIMs through 40Pin Header
step 2| connect RCA output
step 3| connect HDMI
step 4| connect DC 5V

![Tone Board Connection VIMs](/images/toneboard/ToneboardConnectionVIMs.png)


* ### Others

step|operation|
---|:---
step 1| connect RCA output
step 2| connect Tone Board and PC through USB-C cable

![Tone Board Connection General](/images/toneboard/ToneboardConnectionGeneral.jpg)


## Setting up
Most software platforms have integrated Tone Board drivers, and Windows platforms need to install drivers.
* ### VIMs
  Make sure firmware of VIM1 is upgrade to VIM_Nougat_V180524 or later.
  Make sure firmware of VIM2 is upgrade to VIM2_Nougat_V180413 or later.

* ### Windows
  Take windows 10 for example, windows xp and windows 7 is similar.
  *  install XMOS driver
     * [Download](https://dl.khadas.com/Tools/XMOS-Stereo-USB-Audio-Class2-Driver-3033_v2.26.0.zip)
     * Decompression and run setup.exe to install driver
     * install finished
![Tone Board Windows Setup1](/images/toneboard/ToneboardWindowsSetup1.png)
  *  switch sound card for Tone Board
     * Click the sound icon from the lower right corner of the task-bar.
![Tone Board Windows Setup2](/images/toneboard/ToneboardWindowsSetup2.jpg)
     * Chose XMOS XS1-U8 DJ for the default sound-card.
![Tone Board Windows Setup3](/images/toneboard/ToneboardWindowsSetup3.jpg)

* ### Ubuntu
  *  switch sound card for Tone Board
![Tone Board Ubuntu Setup](/images/toneboard/ToneboardUbuntuSetup.jpg)

* ### MacOS
  *  switch sound card for Tone Board
![Tone Board Mac OS Setup](/images/toneboard/ToneboardMacosSetup.jpg)

* ### Raspberry Pi
  *  switch sound card for Tone Board

     * Volumio
![Tone Board Rpi Setup](/images/toneboard/ToneboardRpiSetup.jpg)

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

## Ports and interfaces
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

![Tone Board Ports](/images/toneboard/ToneboardPorts.png)

**No5**: 20 Pin Header Pinout (J4)

SIGNAL| PIN|PIN|SIGNAL
---|:---|:---|:---
VCC_3V3|1|11|TONE_5V
Linux_TX|2|12|TONE_5V
Linux_RX|3|13|GND
GND|4|14|GND
XL_DN1|5|15|XMOS_RST
XL_DN0|6|16|XMOS_TDO
XL_UP0|7|17|XMOS_TDI
XL_UP1|8|18|XMOS_TCK
XMOS_3V3|9|19|XMOS_TMS
GND|10|20|GND

**No6:** 40 Pin Header Pinout (J1)

SIGNAL| PIN|PIN|SIGNAL
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

**No7:** I2S FPC Connectors Pinout (J9)

PIN|SIGNAL
---|:---
1|TONE_5V
2|GND
3|VCC_3V3
4|GND
5|I2S_SCLK
6|I2S_MCLK
7|I2S_SDI
8|I2S_LRCK
9|I2S_SDO
10|GND

**No8:** 8 Channel Ext  FPC Connectors Pinout (J3)

PIN|SIGNAL
---|:---
1-3|TONE_5V
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

**No9:** OLED  FPC Connectors Pinout (J8)

PIN|SIGNAL
---|:---
1|TONE_5V
2|TONE_5V
3|OLED_SCL
4|OLED_SDA
5|GND
6|-
7|OLED_RST
8|OLED_PWREN
9|-
10|GND


## FAQs
* How to extend to 8 channel audio?
XMOS support 8 channels analog lineout, and Tone Board DAC(ES9038Q2M) has already used 2 channels. Users can add DAC for 8-channel expansion.


