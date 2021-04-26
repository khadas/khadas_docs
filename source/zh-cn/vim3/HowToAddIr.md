title: 如何添加遥控器
---


这个文档主要说明在安卓上增加遥控器


### 硬件连接
`IR_IN(红外遥控头输出)` <-> `GPIOAO_5(主芯片红外输入口)`

### 安卓9软件配置
**1）**  对于vim3，common/arch/arm/boot/dts/amlogic/mesong12b.dtsi 中增加遥控器码值到键值的映射，使能遥控器驱动配置
```sh
        remote:rc@0xff808040 {
                compatible = "amlogic, aml_remote";
                dev_name = "meson-remote";
                reg = <0xff808040 0x44>, /*Multi-format IR controller*/
                        <0xff808000 0x20>; /*Legacy IR controller*/
                status = "okay";
                protocol = <REMOTE_TYPE_NEC>;
                interrupts = <0 196 1>;
                pinctrl-names = "default";
                pinctrl-0 = <&remote_pins>;
                map = <&custom_maps>;
                max_frame_time = <200>; /*set software decoder max frame time*/
        };

        custom_maps:custom_maps {
                mapnum = <1>;
                map0 = <&map_0>;
                map_0: map_0{
                        mapname = "khadas-ir";
                        customcode = <0xff00>;
                        release_delay = <80>;
                        fn_key_scancode = <0x5b>;
                        cursor_left_scancode = <0x0e>;
                        cursor_right_scancode = <0x1a>;
                        cursor_up_scancode = <0x03>;
                        cursor_down_scancode = <0x02>;
                        cursor_ok_scancode = <0x07>;
                        size  = <13>;   /*keymap size*/
                        keymap = <REMOTE_KEY(0x14, 116)
                                REMOTE_KEY(0x13,139)
                                REMOTE_KEY(0x03,103)
                                REMOTE_KEY(0x02,108)
                                REMOTE_KEY(0x0e,105)
                                REMOTE_KEY(0x1a,106)
                                REMOTE_KEY(0x07,232)
                                REMOTE_KEY(0x58,114)
                                REMOTE_KEY(0x5c,63)
                                REMOTE_KEY(0x5b,63)
                                REMOTE_KEY(0x0b,115)
                                REMOTE_KEY(0x01,158)
                                REMOTE_KEY(0x48,102)>;
                };
        };

```
目前vim3/vim3l 安卓9平台只配置了khadas-ir的红外遥控，如果需要增加nec协议的遥控,可以在相同位置类似增加键值的映射，比如map1,map2,遥控器的客户码 等信息，最后 mapnum 增加1

**2）** 增加 android kl 文件

添加 device/khadas/kvim3/files/Vendor_0001_Product_0001.kl ,编译到/vendor/usr/keylayout目录

```sh
vi device/khadas/kvim3/files/Vendor_0001_Product_0001.kl
key 139    MENU
key 125    MENU
key 60    NOTIFICATION
key 127   SEARCH
key 217   SEARCH
key 228   POUND
key 227   STAR
key 231   CALL
key 61    CALL
key 97    DPAD_CENTER
key 232   DPAD_CENTER
key 108   DPAD_DOWN
key 103   DPAD_UP
key 102   HOME
key 105   DPAD_LEFT
key 106   DPAD_RIGHT
key 115   VOLUME_UP
key 114   VOLUME_DOWN
key 104   VOLUME_UP
key 109   VOLUME_DOWN
key 212   CAMERA
```
### 遥控器键值查看
如果驱动和kl文件添加正确的话，输入getevent ,按遥控器可以查看到键值
```sh
getevent -l 

/dev/input/event0: 0004 000400000068                       <--- IR Code 0x68=104

/dev/input/event0: 0001 0042 00000001                       

/dev/input/event0:EV_MSC      MSC_SCAN             00000068      

/dev/input/event0:EV_KEY      KEY_VOLUME_UP              DOWN    <--- linux key name KEY_VOLUME_UP
```

