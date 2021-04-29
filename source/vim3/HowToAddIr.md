title: How To Add Ir 
---

This guide is about how to add ir on android. 


### Hardware Connectity
`IR_IN(Infrared remote control output)` <-> `GPIOAO_5(Main chip infrared input port)`

### Android 9 Software Configuration
**1）**  for vim3，add the mapping from remote control code value to key value , enable remote control driver configuration in common/arch/arm/boot/dts/amlogic/mesong12b.dtsi 
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
At present, the VIM3/VIM3L android 9 platform is only equipped with the infrared remote control of khadas IR. if you need to add the remote control of nec protocol, you can add the mapping of key values in the same location, such as map1, map2, the customer code of the remote control and so on. finally, mapnum is added by 1

**2）**add android kl file 
add device/khadas/kvim3/files/Vendor_0001_Product_0001.kl file ,compile to /vendor/usr/keylayout directory

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
### remoter key value querry
If the driver and kl file are added correctly, enter getevent and press the remote control to view the key value
```sh
getevent -l 

/dev/input/event0: 0004 000400000068                       <--- IR Code 0x68=104

/dev/input/event0: 0001 0042 00000001                       

/dev/input/event0:EV_MSC      MSC_SCAN             00000068      

/dev/input/event0:EV_KEY      KEY_VOLUME_UP              DOWN    <--- linux key name KEY_VOLUME_UP
```

