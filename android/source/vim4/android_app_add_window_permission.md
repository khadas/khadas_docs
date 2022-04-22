title: Add Window Permission for APP 
---

If your application need add window permission, you can modify it as follows.

1. `AndroidManifest.xml`:
```java
<uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
```

2. Add code to Java:
```java
if(Build.VERSION.SDK_INT >= 23 && !Settings.canDrawOverlays(this)) {
    StringBuilder sb = new StringBuilder();
    sb.append("package:");
    sb.append(getPackageName());
    startActivityForResult(new Intent("android.settings.action.MANAGE_OVERLAY_PERMISSION",Uri.parse(sb.toString())),123);
}
```

## Report Error
```
Caused by: android.content.ActivityNotFoundException:No Activity found to handle Intent { act=android.settings.action.MANAGE_OVERLAY_PERMISSION dat=package:com.xxx.xxx}
```
## The Solution is to Sign the Application

`AndroidManifest.xml`:
```java
android:sharedUserId="android.uid.system"
...
<uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
```
