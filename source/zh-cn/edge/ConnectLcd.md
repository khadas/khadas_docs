title: 如何连接TS050触摸屏
---

# 1.简介

Edge-V开发板外置了3个LCD屏接口：HDMI + MIPI + EDP。接口对应板子上的位置如下图：

![C|690x252](/images/edge/edge-v_display_interfaces.jpg) 

Edge开发板外置了2个LCD屏接口：HDMI + DP。接口对应板子上的位置如下图：

![image|618x500](/images/edge/edge_display_interfaces.jpg)  

Captain开发板外置了2个LCD屏接口：EDP + MIPI。接口对应板子上的位置如下图：

![image|573x479](/images/edge/captain_display_interfaces.jpg) 

# 2.（HDMI + DP）屏幕配置
##  2.1配置 **dts**
rk3399-khadas-edge.dtsi为例介绍：HDMI(主显) + DP（副显）
### 2.1.1 使能对应显示设备节点
```sh
&hdmi {
	status = "okay";
	rockchip,phy-table =
		<74250000 0x8009 0x0004 0x0272>,
		<165000000 0x802b 0x0004 0x0209>,
		<297000000 0x8029 0x0005 0x028d>,
		<594000000 0x8039 0x0000 0x0090>,
		<000000000 0x0000 0x0000 0x0000>;
};

&cdn_dp {
	status = "okay";
	extcon = <&fusb0>;
	phys = <&tcphy0_dp>;
};
```
### 2.1.2 绑定 VOP
RK3399平台存在两个 VOP：vopb（支持 4K）、vopl（只支持 2K）， 当显示设备节点打开时，显示接口对应 vopb 和 vopl 的 ports 都会打开，需要关闭用不到的那个VOP。
```sh
&hdmi_in_vopb {
	status = "okay";
};

&hdmi_in_vopl {
	status = "disabled";
};

&dp_in_vopb {
	status = "disabled";
};

&dp_in_vopl {
	status = "okay";
};
```
### 2.1.3 开机 logo
如果 uboot logo 未开启，那 kernel 阶段也无法显示开机 logo，只能等到 android 启动后
才能看到显示。在 dts 里面将对应的 route 使能即可打开 uboot logo 支持，比如打开 hdmi 的
uboot logo 显示:
```sh
&route_hdmi {
	status = "okay";
	connect = <&vopb_out_hdmi>;
};
```
### 2.1.4 绑定 PLL
rk3399 的 hdmi 所绑定的 vop 时钟需要挂载到 vpll 上，若是双显需将另一个 vop 时钟挂到
cpll 这样可以分出任意 dclk 的频率。
如当 hdmi 绑定到 vopb 时配置：
```sh
&vopb {
	assigned-clocks = <&cru DCLK_VOP0_DIV>;
	assigned-clock-parents = <&cru PLL_VPLL>;
};
&vopl {
	assigned-clocks = <&cru DCLK_VOP1_DIV>;
	assigned-clock-parents = <&cru PLL_CPLL>;
};
```
当 hdmi 绑定到 vopl 时配置：
```sh
&vopb {
	assigned-clocks = <&cru DCLK_VOP0_DIV>;
	assigned-clock-parents = <&cru PLL_CPLL>;
};
&vopl {
	assigned-clocks = <&cru DCLK_VOP1_DIV>;
	assigned-clock-parents = <&cru PLL_VPLL>;
};
```
### 2.1.5 打开音频
```sh
&dp_sound {
	status = "okay";
};

&hdmi_sound {
	status = "okay";
};
```
##  2.2 主副显示器配置
### android 9.0配置
device/rockchip/rk3399/rk3399.mk
```sh
PRODUCT_PROPERTY_OVERRIDES += \
    vendor.hwc.device.primary=HDMI-A \
    vendor.hwc.device.extend=DP
	#vendor.hwc.device.extend=DSI
    #vendor.hwc.device.extend=eDP
```
### android 7.1配置
device/rockchip/rk3399/rk3399_all.mk
```sh
PRODUCT_PROPERTY_OVERRIDES += \
    sys.hwc.device.primary=HDMI-A \
    sys.hwc.device.extend=DP
	#sys.hwc.device.extend=DSI
    #sys.hwc.device.extend=eDP
```

# 3.（MIPI + HDMI）屏幕配置
![TS050 and Edge-V](/images/edge/edge_v_ts050.jpg)
##  3.1配置 **dts**
rk3399-khadas-edge-mipi-android.dtsi为例介绍：MIPI(主显) + HDMI（副显）
### 3.1.1 使能对应显示设备节点
```sh
&hdmi {
	status = "okay";
	rockchip,phy-table =
		<74250000 0x8009 0x0004 0x0272>,
		<165000000 0x802b 0x0004 0x0209>,
		<297000000 0x8029 0x0005 0x028d>,
		<594000000 0x8039 0x0000 0x0090>,
		<000000000 0x0000 0x0000 0x0000>;
};

&cdn_dp {
	status = "disabled";
};

&dsi {
    status = "okay";
};
```
### 3.1.2 绑定 VOP
RK3399平台存在两个 VOP：vopb（支持 4K）、vopl（只支持 2K）， 当显示设备节点打开时，显示接口对应 vopb 和 vopl 的 ports 都会打开，需要关闭用不到的那个VOP。
```sh
&dp_in_vopl {
	status = "disabled";
};

&dp_in_vopb {
	status = "disabled";
};

&hdmi_in_vopl {
	status = "okay";
};

&hdmi_in_vopb {
	status = "disabled";
};

&dsi_in_vopl {
	status = "disabled";
};

&dsi_in_vopb {
	status = "okay";
};
```
### 3.1.3 开机 logo
如果 uboot logo 未开启，那 kernel 阶段也无法显示开机 logo，只能等到 android 启动后
才能看到显示。在 dts 里面将对应的 route 使能即可打开 uboot logo 支持，比如打开 hdmi 的
uboot logo 显示:
```sh
&route_hdmi {
	status = "okay";
	connect = <&vopl_out_hdmi>;
};

&route_dsi {
	status = "okay";
	connect = <&vopb_out_dsi>;
};
```
### 3.1.4 绑定 PLL
rk3399 的 hdmi 所绑定的 vop 时钟需要挂载到 vpll 上，若是双显需将另一个 vop 时钟挂到
cpll 这样可以分出任意 dclk 的频率。
如当 hdmi 绑定到 vopb 时配置：
```sh
&vopb {
	assigned-clocks = <&cru DCLK_VOP0_DIV>;
	assigned-clock-parents = <&cru PLL_VPLL>;
};
&vopl {
	assigned-clocks = <&cru DCLK_VOP1_DIV>;
	assigned-clock-parents = <&cru PLL_CPLL>;
};
```
当 hdmi 绑定到 vopl 时配置：
```sh
&vopb {
	assigned-clocks = <&cru DCLK_VOP0_DIV>;
	assigned-clock-parents = <&cru PLL_CPLL>;
};
&vopl {
	assigned-clocks = <&cru DCLK_VOP1_DIV>;
	assigned-clock-parents = <&cru PLL_VPLL>;
};
```
### 3.1.5 打开音频
```sh
&dp_sound {
	status = "disabled";
};

&hdmi_sound {
	status = "okay";
};
```
### 3.1.6 配置 **timing**
```sh
&dsi {
    status = "okay";
    rockchip,lane-rate = <1000>;
    dsi_panel: panel@0 {
        status = "okay";
        compatible = "simple-panel-dsi";
        reg = <0>;
        backlight = <&backlight>;
        reset-gpios = <&gpio4 RK_PD4 GPIO_ACTIVE_HIGH>; /* GPIO4_D4 */
        enable-gpios = <&gpio4 RK_PD5 GPIO_ACTIVE_HIGH>; /* GPIO4_D5 */
//		pinctrl-names = "default";
//      pinctrl-0 = <&lcd_reset_gpio>, <&lcd_enable_gpio>;
        reset-delay-ms = <10>;
        enable-delay-ms = <60>;
        prepare-delay-ms = <60>;
        unprepare-delay-ms = <60>;
        disable-delay-ms = <60>;
        dsi,flags = <(MIPI_DSI_MODE_VIDEO | MIPI_DSI_MODE_VIDEO_BURST |
                  MIPI_DSI_MODE_LPM | MIPI_DSI_MODE_EOT_PACKET)>;

		dsi,format = <MIPI_DSI_FMT_RGB888>;
        dsi,lanes  = <4>;
        panel-init-sequence = [
			15 00 02  FF 05
             ....
			05 0A 01  29
		];
		panel-exit-sequence = [
			05 05 01 28
			05 78 01 10
		];

        disp_timings: display-timings {
            native-mode = <&timing0>;
            timing0: timing0 {
                clock-frequency = <120000000>;
                hactive = <1088>; /* default 1080, but afbdc must 16 align */
                hfront-porch = <104>;
                hback-porch = <127>;
                hsync-len = <4>; /////
                vactive = <1920>;
                vfront-porch = <4>;
                vback-porch = <3>;
                vsync-len = <2>; /////
                hsync-active = <0>;
                vsync-active = <0>;
                de-active = <0>;
                pixelclk-active = <0>;
            };
        };
    };
};
```
![image|690x429,75%](/images/edge/timing_attribute_reference_figure.png)  
![2|379x500,100%](/images/edge/timing_attribute_reference_figure_2.png) 

### 3.1.7 命令格式说明
```sh
		panel-exit-sequence = [
			05 05 01 28
			05 78 01 10
		];
```
命令的前面三个字节分别表示命令类型、延时和命令净荷长度。从第四个字节开始表示命令的
有效 payload。这个字节数需要与第三个字节一致。
第一个字节代表的命令类型分两大类：DCS 命令和 Generic 命令。DCS 命令是有 mipi 标准
协议里面指定的命令，具体可以参考《MIPI Alliance Specification for Display Command
Set.pdf 》。Generic 命令一般应用于厂商自定义的命令。具体使用哪种类型需要参考屏规格书
或者咨询屏厂 FAE。如果没有特别指定，建议按 DCS 命令类型配置。
DCS 命 令 的 类 型 有 三 种 ： 0x05/0x15/0x39 。 Generic 命 令 的 类 型 分 为 ：
0x03/0x13/0x23/0x29。

### 3.1.8 背光 backlight
```sh
&backlight {
	pwms = <&pwm1 0 25000 0>;
	status = "okay";
};

&pwm1 {
	status = "okay";
};

&dsi {
    status = "okay";
    rockchip,lane-rate = <1000>;
    dsi_panel: panel@0 {
        status = "okay";
        compatible = "simple-panel-dsi";
        reg = <0>;
        backlight = <&backlight>;
        ...
    }
};
```
pwms属性：配置PWM，MIPI屏使用的pwm输出是pwm1，25000ns是周期(40 KHz)。

##  3.2 主副显示器配置
### android 9.0配置
device/rockchip/rk3399/rk3399.mk
```sh
PRODUCT_PROPERTY_OVERRIDES += \
    vendor.hwc.device.primary=DSI \
    #vendor.hwc.device.extend=DP
	vendor.hwc.device.extend=HDMI-A
    #vendor.hwc.device.extend=eDP
```
### android 7.1配置
device/rockchip/rk3399/rk3399_all.mk
```sh
PRODUCT_PROPERTY_OVERRIDES += \
    sys.hwc.device.primary=DSI \
    #sys.hwc.device.extend=DP
	sys.hwc.device.extend=HDMI-A
    #sys.hwc.device.extend=eDP
```
# 4.（HDMI or DP + MIPI）屏幕配置
HDMI or DP + MIPI意思是，兼容 HDMI(主显) + MIPI（副显） 或 DP(主显) + MIPI（副显）两种接屏方式，但不支持同时接HDMI + DP。
##  4.1 配置 **dts**
### android 9.0配置
见下面dts，详解见前面两章节说明：
rk3399-khadas-edge-android.dts

##  4.2 主副显示器配置
### android 9.0配置
device/rockchip/rk3399/rk3399.mk
```sh
PRODUCT_PROPERTY_OVERRIDES += \
    vendor.hwc.device.primary=HDMI-A,DP\
	vendor.hwc.device.extend=DSI
```
