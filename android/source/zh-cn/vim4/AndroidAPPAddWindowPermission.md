title: App添加悬浮窗权限
---

如果应用需要添加悬浮窗权限，可以按照如下修改。

1. `AndroidManifest.xml`添加：
```java
<uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
```

2. Java添加：
```java
if(Build.VERSION.SDK_INT >= 23 && !Settings.canDrawOverlays(this)) {
    StringBuilder sb = new StringBuilder();
    sb.append("package:");
    sb.append(getPackageName());
    startActivityForResult(new Intent("android.settings.action.MANAGE_OVERLAY_PERMISSION",Uri.parse(sb.toString())),123);
}
```

## 报错
```
Caused by: android.content.ActivityNotFoundException:No Activity found to handle Intent { act=android.settings.action.MANAGE_OVERLAY_PERMISSION dat=package:com.xxx.xxx}
```
## 解决方法是给应用签名

`AndroidManifest.xml`添加：
```java
android:sharedUserId="android.uid.system"
...
<uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
```
