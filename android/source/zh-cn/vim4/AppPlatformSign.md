title: Android 第三方应用添加系统签名
---

当第三方应用声明使用系统权限时，需要平台key去签名才能正常安装。

## Khadas源码编译环境下签名
如果你有Linux的Khadas源码编译环境，你可以采用两种方式去签名。

1. 通过在`Android.mk`中添加`LOCAL_CERTIFICATE := platform`， 将你未签名的apk重新编译后就具有平台签名。

2. 直接通过命令签名，前提是编译好源码。
```sh
java -Djava.library.path=out/host/linux-x86/lib64 -jar out/host/linux-x86/framework/signapk.jar build/target/product/security/platform.x509.pem build/target/product/security/platform.pk8 app-debug.apk app-debug-signed.apk
```
`app-debug.apk`是签名前申明系统权限的apk，就是在`AndroidManifeset.xml`中申明了`android:sharedUserid="android.uid.system"`，如果不加入device的系统签名，adb install 安装会出现`Failure INSTALL_FAILED_SHARED_USER_INCOMPATIBLE: Package couldn't be installed`的error，`app-debug-signed.apk`是采用平台签名后apk，可以直接`adb install`安装。

## Windows下Android Studio上签名
需要准备`keytool-importkeypair`工具脚本，下载地址`https://github.com/getfatday/keytool-importkeypair`
`platform.x509.pem`，`platform.pk8`，在源码目录`build/target/product/security`下
`custom.jks` (android studio 下生成)，具体参考 android studio jks文件生成步骤。
### Android Studio jks文件生成步骤
![Image of jks_step](/android/images/vim3/step1.png)
![Image of jks_step](/android/images/vim3/step2.png)
![Image of jks_step](/android/images/vim3/step3.png)
![Image of jks_step](/android/images/vim3/step4.png)
![Image of jks_step](/android/images/vim3/step5.png)
![Image of jks_step](/android/images/vim3/step6.png)
![Image of jks_step](/android/images/vim3/step7.png)

`custom.jks`生成后，使用`keytool-importkeypair`脚本生成嵌入platform 签名的新的`custom.jks`，命令如下：
```sh
./keytool-importkeypair -k custom.jks -p 123456 -pk8 platform.pk8 -cert platform.x509.pem -alias khadasdemo
```
`custom.jks`是android studio中生成的123456是创建`custom.jks`时输入的password，khadasdemo是jks文件的别名。

执行上面脚本后生成的新的`custom.jks`就带有系统签名，需要复制到android studio app 的工程目录，编译时配置`custom.jks`，

这样编译的app可以直接安装运行，具体参考android studio配置`custom.jks`去系统签名。

### Android Studio配置jks系统签名

在工程目录APP下的`build.gradle`中添加signingConfigs配置，依次填写jks的路径、密码、别名：
```sh
signingConfigs { 
release { 
storeFile file("signApk/custom.jks") 
storePassword '123456'
keyAlias 'khadasdemo'
keyPassword '123456'
} 
debug { 
storeFile file("signApk/custom.jks") 
storePassword '123456'
keyAlias 'khadasdemo'
keyPassword '123456'
} 
```
`signApk/custom.jks`为`custom.jks`在APP工程中的目录。
添加`custom.jks`后，直接在android studio中编译，APP可以正常安装在具有platform签名的机器上。

## Windows下jarsigner命令签名
首先windows要安装jdk，才能使用jarsigner命令：
```sh
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore custom.jks app-debug.apk khadasdemo
 正在签名: res/drawable-hdpi-v4/abc_textfield_activated_mtrl_alpha.9.png
 正在签名: res/drawable-hdpi-v4/notification_bg_low_pressed.9.png
 正在签名: res/layout/abc_action_menu_layout.xml
 正在签名: res/drawable/abc_seekbar_tick_mark_material.xml
 正在签名: classes.dex
 正在签名: res/drawable/btn_checkbox_unchecked_mtrl.xml
 正在签名: res/drawable-hdpi-v4/notification_bg_normal.9.png
 正在签名: res/layout/abc_list_menu_item_icon.xml

 签名者
   X.509, EMAILADDRESS=android@android.com, CN=Android, OU=Android, O=Android, L=Mountain View, ST=California, C=US

```
`custom.jks` : ./keytool-importkeypair -k custom.jks -p 123456 -pk8 platform.pk8 -cert platform.x509.pem -alias khadasdemo生成。
`khadasdemo` : 别名。
`密码` : 123456。
`app-debug.apk` : 未签名的apk ,生成的签名apk也是`app-debug.apk`。

