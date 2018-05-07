title: Khadas VIMs外部供电接口
---

### 前言：
 * 设备主要由USB-C接口供电。
 * 电源适配器电压确保最高为5.2V，电流推荐值为2000mA。

### 概述
Khadas vim1设计了两个主要电源输入接口
 * USB-C：可以用作供电，也可以作USB数据传输。
 * VIN：只用于供电
 * 备用供电接口：靠近USB-C的USB Host接口，需要准备一个公对公的USB线进行连接。

### 使用USB-C作为外部供电接口
USB-C是常用的供电接口，在供电的同时也可以作数据传输，比如烧录系统固件、ADB调试...
![image](/images/vim1/usbc_extra_power.png)

### 使用VIN作为外部供电
VIN供电接口座子规格参数：4-Pin 1.25mm间距。
![image](/images/vim1/vin_extra_power.png)
提示：目前我们还没有VIN接口的电源线售卖，需要用户自己DIY。

### 使用USB Host作为外部供电
如图所示：需要准备一个公对公的USB线进行外部供电连接。
![image](/images/vim1/usb_host_extra_power.png)


提示：靠近USB-C旁边的USB Host接口输入电流可达900mA，可作为备用外部供电接口。靠近网口的另外一路USB Host接口输入电流只有500mA。具体细节请参考原理图。

### 更多资料
* [VIM1接口描述](/zh-cn/vim1/VimInterfaces.html)
* [VIM2接口描述](/zh-cn/vim2/Vim2Interfaces.html)

