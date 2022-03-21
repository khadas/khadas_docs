title: Add IR 
---

This guide is about how to add IR on Android.


## Hardware Connectity
`IR_IN`(infrared remote control output) pin in `40-PIN HEADER` is pin39 `GPIOD_15`:
* [VIM4-GPIO-Pin-Out](/android/zh-cn/vim4/Interfaces#GPIO-Pinout)

## Software Configuration
1. Add the mapping from remote control code value to key value, enable remote control driver configuration in `common/arch/arm64/boot/dts/amlogic/meson-ir-map.dtsi`:

```c
--- a/arch/arm64/boot/dts/amlogic/meson-ir-map.dtsi
+++ b/arch/arm64/boot/dts/amlogic/meson-ir-map.dtsi
@@ -6,11 +6,12 @@
 / {
 
        custom_maps: custom_maps {
-               mapnum = <4>;
+               mapnum = <5>;
                map0 = <&map_0>;
                map1 = <&map_1>;
                map2 = <&map_2>;
                map3 = <&map_3>;
+               map4 = <&map_4>;
                map_0: map_0{
                        mapname = "amlogic-remote-1";
                        customcode = <0xfb04>;
@@ -199,5 +200,27 @@
                                REMOTE_KEY(0x49, KEY_YELLOW)
                                REMOTE_KEY(0x4C, KEY_BLUE)>;
                };
+               map_4: map_4{
+                       mapname = "amlogic-remote-khadas";
+                       customcode = <0xff00>;
+                       release_delay = <80>;
+                       vendor = <0x0003>;
+                       product = <0x0003>;
+                       version = <0x0300>;
+                       size  = <13>;
+                       keymap = <REMOTE_KEY(0x14,KEY_POWER)
+                               REMOTE_KEY(0x13,KEY_MENU)
+                               REMOTE_KEY(0x03,KEY_UP)
+                               REMOTE_KEY(0x02,KEY_DOWN)
+                               REMOTE_KEY(0x0e,KEY_LEFT)
+                               REMOTE_KEY(0x1a,KEY_RIGHT)
+                               REMOTE_KEY(0x07,KEY_ENTER)
+                               REMOTE_KEY(0x58,KEY_VOLUMEDOWN)
+                               REMOTE_KEY(0x5c,KEY_F5)
+                               REMOTE_KEY(0x5b,KEY_F5)
+                               REMOTE_KEY(0x0b,KEY_VOLUMEUP)
+                               REMOTE_KEY(0x01,KEY_BACK)
+                               REMOTE_KEY(0x48,KEY_HOME)>;
+               };
        };
 };
```

2. Add Android kl file:

* Record the ID number of your infrared device, such as the ID number added in the previous steps (as vendor=0x0003, product=0x0003)
```diff
+                       vendor = <0x0003>;
+                       product = <0x0003>;
```

* Create one new files：`device/khadas/common/keyboards/Vendor_xxxx_Product_xxxx.kl` (as Vendor_0003_Product_0003.kl)
```sh
$ vim device/khadas/kVIM4/files/Vendor_0003_Product_0003.kl
```
```sh
key 116   POWER
key 139   MENU
key 103   DPAD_UP
key 108   DPAD_DOWN
key 105   DPAD_LEFT
key 106   DPAD_RIGHT
key 232    DPAD_CENTER
key 114   VOLUME_DOWN
key 63   F5
key 115   VOLUME_UP
key 158     BACK
key 102   HOME
```

* Check if pairing was successful
```sh
kvim4:/ # dumpsys input
INPUT MANAGER (dumpsys input)

Input Manager State:
  Interactive: true
  System UI Visibility: 0x8708
  Pointer Speed: 0
  Pointer Gestures Enabled: true
  Show Touches: false
  Pointer Capture Enabled: false
......
    8: ir_keypad
      Classes: 0x00000029
      Path: /dev/input/event6
      Enabled: true
      Descriptor: a6893ab22828f3b8b792fe40bc0d6df2b2725f26
      Location: keypad/input0
      ControllerNumber: 0
      UniqueId:
      Identifier: bus=0x0010, vendor=0x0003, product=0x0003, version=0x0300
      KeyLayoutFile: /vendor/usr/keylayout/Vendor_0003_Product_0003.kl
      KeyCharacterMapFile: /system/usr/keychars/Generic.kcm
      ConfigurationFile:
      HaveKeyboardLayoutOverlay: false
      VideoDevice: <none>  
```
As shown above, when the value `KeyLayoutFile:` is followed by the kl file name `Vendor_0003_Product_0003.kl`, pairing is successful.
