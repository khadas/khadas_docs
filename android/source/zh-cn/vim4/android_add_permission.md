title: APP默认权限添加
---
Anddroid 6.0以上，系统应用第一次打开会出现申请权限弹窗，为了更好的用户交互体验，系统应用不该弹窗，

而是直接授予默认权限，下面就介绍如何为应用添加默认权限。

## 权限名称列表
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


## SDK源码修改

修改`frameworks/base/services/core/java/com/android/server/pm/permission/DefaultPermissionGrantPolicy.java`源码文件，

在`grantDefaultSystemHandlerPermissions()`函数里面为应用添加默认权限：

```java
//com.xxx.xxx为应用的包名
grantSystemFixedPermissionsToSystemPackage("com.xxx.xxx", userId,
PHONE_PERMISSIONS, SMS_PERMISSIONS, CALENDAR_PERMISSIONS,
ALWAYS_LOCATION_PERMISSIONS, CONTACTS_PERMISSIONS, CAMERA_PERMISSIONS,MICROPHONE_PERMISSIONS, STORAGE_PERMISSIONS);
```
