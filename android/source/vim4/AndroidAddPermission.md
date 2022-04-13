title: Default Permissions for APP
---
For a better experience, you can add default permissions to your application using the Android Framework.

## Permissions Name
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

## Add Permissions

Modified the file:

```
frameworks/base/services/core/java/com/android/server/pm/permission/DefaultPermissionGrantPolicy.java
```

Add permissions to the `grantdefaultsystemhandlerpermissions()` function:

```java
//add Permissions
grantSystemFixedPermissionsToSystemPackage("com.xxx.xxx", userId,
PHONE_PERMISSIONS, SMS_PERMISSIONS, CALENDAR_PERMISSIONS,
ALWAYS_LOCATION_PERMISSIONS, CONTACTS_PERMISSIONS, CAMERA_PERMISSIONS,MICROPHONE_PERMISSIONS, STORAGE_PERMISSIONS);
//add end
```

`com.xxx.xxx` is the package name.
