title: How To Use Android Settings Command
---

## android Settings three type attribute
android settings has three types of attributes, namely global, system and secure, corresponding to the three tables of /data/data/com.android.providers.settings/databases/settings.db 
``1)`` global：all preferences are open to all users of the system, and the third-party app has read permission,no write permission
``2)`` system：contains a variety of user preferences system settings
``3)`` secure：user preference system setting for security，and the third-party app has read permission,no write permission

## android settings usage 
``1)`` settings list 
This command is used to view the values of three properties, such as
View all global values
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
View all system values

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
View all secure values

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
Settings get is used to get the value of a single key in global, system and secure, such as auto_time in global

```shell
console:/ $ settings get global auto_time                                      
0
console:/ $ 
```
``3)`` settings put 

settings put is used to set the value of a single key in global, system and secure, such as auto_time in global

```shell
console:/ $ settings put global auto_time 1                                    
console:/ $ settings get global auto_time                                      
1
console:/ $ 
```
for the key in system,secure,the command is similar
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

Settings can get and set many system variables, such as getting and modifying wifi status (wifi_on),airplane mode(airlpane_mode_on), system prompt tone (notification_sound), etc


