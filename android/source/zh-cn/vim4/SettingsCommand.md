title: ADB Settings命令
---

## ADB Settings命令介绍

通过ADB Settings命令查询或修改系统变量，实际上是对SettingsProvider数据库进行查询和修改。
SettingsProvider数据库有三种属性的系统变量：

* `system`：各种各样的用户系统变量
* `global`：公开性的用户系统变量，第三方APP有读没有写的权限
* `secure`：安全性的用户系统变量，第三方APP有读没有写的权限


## ADB Settings命令用法
1. `settings list`
`settings list`命令用于查看系统变量，命令行格式如下：
```shell
settings list [global/system/secure]
```

*  查看`global`属性的系统变量：

```shell
console:/ $ settings list global
Phenotype_boot_count=10
Phenotype_flags=
_boot_Phenotype_flags=
adb_enabled=1
add_users_when_locked=0
airplane_mode_on=0
airplane_mode_radios=cell,bluetooth,wifi,nfc,wimax
airplane_mode_toggleable_radios=bluetooth,wifi,nfc
assisted_gps_enabled=1
audio_mixing=1
audio_safe_volume_state=3
auto_time=0
auto_time_zone=1
bluetooth_disabled_profiles=0
bluetooth_on=1
boot_count=11
```

* 查看`system`属性的系统变量：

```shell
console:/ $ settings list system
accelerometer_rotation=0
alarm_alert=content://media/internal/audio/media/13
alarm_alert_set=1
dim_screen=1
dtmf_tone=1
dtmf_tone_type=0
haptic_feedback_enabled=1
hearing_aid=0
hide_rotation_lock_toggle_for_accessibility=0
lockscreen_sounds_enabled=1
mode_ringer_streams_affected=166
mute_streams_affected=47
notification_light_pulse=1
notification_sound=content://media/internal/audio/media/180
```

*  查看`secure`属性的系统变量：

```shell
console:/ $ settings list secure                                               
accessibility_display_inversion_enabled=null
accessibility_display_magnification_enabled=0
accessibility_display_magnification_scale=2.0
accessibility_enabled=0
android_id=265be16cb9e0f636
autofill_service=
backup_enabled=null
backup_transport=android/com.android.internal.backup.LocalTransport
bluetooth_address=22:22:21:87:13:81
bluetooth_name=VIM3L
clock_seconds=null
default_input_method=com.android.inputmethod.latin/.LatinIME
double_tap_to_wake=1
enabled_input_methods=com.android.inputmethod.latin/.LatinIME
```

2. `settings get`

`settings get`用于查询具体的系统变量，命令行格式如下：

```shell
settings get [global/system/secure] [key]
```

举例：查询飞行模式是否打开，该系统变量属于`global`属性，具体如下：

```shell
console:/ $ settings get global airplane_mode_on
0
```

3. `settings put`

`settings put`用于修改具体的系统变量，命令行格式如下：
```shell
settings put [global/system/secure] [key] [value]
```

举例：打开飞行模式，该系统设置属于`global`属性，具体如下：

```shell
console:/ $ settings put global airplane_mode_on 1
console:/ $ settings get global airplane_mode_on
1
```

`settings`可以查询和修改很多系统变量，比如获取或修改Wi-Fi状态（wifi_on）、蓝牙状态（bluetooth_on）、系统提示音(notification_sound)等。


