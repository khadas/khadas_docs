title: ADB Settings Commands
---

## Introduction
ADB settings commands are used to query or modify variables within the `SettingsProvider` database. 

There are three types of system variables:
* `global`: global system settings, containing preferences that always apply identically to all defined users
* `system`: system settings, containing miscellaneous system preferences
* `secure`: secure system settings, containing system preferences that applications can read but are not allowed to write


## Settings Commands Usage

1. **`settings list` command is used to query system variables.** The command line format is as follows:

```shell
settings list [global/system/secure]
```

*  List `global` variables:
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

*  List `system` variables:
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

*  List `secure` variables:
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

2. **`settings get` is used to query specific system variables.** The command line format is as follows:
```shell
settings get [global/system/secure] [key]
```
Example: To query the value of `airplane_mode_on`, we need to add the `global` attribute, as follows:
```shell
console:/ $ settings get global airplane_mode_on
0
```

3. **`settings put` is used to modify specific system variables.** The command line format is as follows:
```shell
settings put [global/system/secure] [key] [value]
```
Example: To modify the value of `airplane_mode_on`, we need to add the `global` attribute, as follows:
```shell
console:/ $ settings put global airplane_mode_on 1
console:/ $ settings get global airplane_mode_on
1
```

The `settings` command can query and modify many system variables. 

For example, obtaining or modifying the Wi-Fi status (wifi_on), Bluetooth status (bluetooth_on), and system sounds (notification_sound), etc.
