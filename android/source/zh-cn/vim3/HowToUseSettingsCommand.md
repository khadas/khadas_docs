title: 如何使用Android Settings 命令
---

## android Settings系统属性
android Settings 有三种类型的属性，分别是global，system, secure，对应的是/data/data/com.android.providers.settings/databases/settings.db 数据库的三张表
``1)`` global：所有的偏好设置对系统的所有用户公开，第三方APP有读没有写的权限
``2)`` system：包含各种各样的用户偏好系统设置
``3)`` secure：安全性的用户偏好系统设置，第三方APP有读没有写的权限

## android Settings 用法 
``1)`` settings list 
此命令用于查看三种属性的值，比如
查看global所有的值
```shell
130|console:/ $ settings list global                                           
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
查看system所有的值

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
查看secure所有的值

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
``2)`` settings get
settings get 用于获取global ,system,secure 中单个key的值，比如获取global中auto_time 这个key的值
```shell
console:/ $ settings get global auto_time                                      
0
console:/ $ 
```
``3)`` settings put 
settings put 用于设置global ,system,secure 中单个key的值，比如设置global中auto_time 这个key的值
```shell
console:/ $ settings put global auto_time 1                                    
console:/ $ settings get global auto_time                                      
1
console:/ $ 
```
对于 system,secure中的key ,获取和设置命令类似
```shell
console:/ $ 
console:/ $ settings get system accelerometer_rotation                         
0
console:/ $ settings put system accelerometer_rotation 1                       
console:/ $ 
console:/ $ 
console:/ $ settings get system accelerometer_rotation                         
1
console:/ $ 
```

settings 可以获取，设置很多系统变量，比如获取、修改wifi状态（wifi_on）、飞行模式（airlpane_mode_on），系统提示音(notification_sound) 等


