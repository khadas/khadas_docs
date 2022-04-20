title: Default Permissions for APP
---

For Android 6.0 and above, the APP permission pop-up window will appear when the APP is opened for the first time.
For a better experience, you can add default permissions for your APP with the following method.

## List of Permission Names
```java
PHONE_PERMISSIONS
CONTACTS_PERMISSIONS
ALWAYS_LOCATION_PERMISSIONS
FOREGROUND_LOCATION_PERMISSIONS
COARSE_BACKGROUND_LOCATION_PERMISSIONS
ACTIVITY_RECOGNITION_PERMISSIONS
CALENDAR_PERMISSIONS
SMS_PERMISSIONS
MICROPHONE_PERMISSIONS
CAMERA_PERMISSIONS
SENSORS_PERMISSIONS
STORAGE_PERMISSIONS
```

## Modify the SDK Source

Modify the file:

```
frameworks/base/services/core/java/com/android/server/pm/permission/DefaultPermissionGrantPolicy.java
```

Add permissions to the `grantdefaultsystemhandlerpermissions()` function:

```java
//com.xxx.xxx is the package name
grantSystemFixedPermissionsToSystemPackage("com.xxx.xxx", userId,
PHONE_PERMISSIONS, SMS_PERMISSIONS, CALENDAR_PERMISSIONS,
ALWAYS_LOCATION_PERMISSIONS, CONTACTS_PERMISSIONS, CAMERA_PERMISSIONS,MICROPHONE_PERMISSIONS, STORAGE_PERMISSIONS);
//add end
```
