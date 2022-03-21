title: 第三方应用如何获取系统权限
---

第三方应用想要获取系统权限，首先需要在AndroiManifest.xml文件中声明UID为系统进程，还要用平台key对APP进行签名。

## 在APP中声明UID为系统进程
第三方应用的AndroidManifest.xml文件中声明：
```sh
android:sharedUserid="android.uid.system
```

## 如何用平台Key对APP进行签名
###　SDK源码编译环境下签名
1. 将APK放到对应目录下，编写Android.mk文件。
```sh
LOCAL_PATH := $(call my-dir)
include $(CLEAR_VARS)
# Module name should match apk name to be installed
LOCAL_MODULE := XXXX
LOCAL_MODULE_TAGS := optional

LOCAL_SRC_FILES := $(LOCAL_MODULE).apk
LOCAL_MODULE_CLASS := APPS
LOCAL_MODULE_SUFFIX := $(COMMON_ANDROID_PACKAGE_SUFFIX)
LOCAL_PRIVILEGED_MODULE := true

# 保留原来应用自身签名
# LOCAL_CERTIFICATE := PRESIGNED
# 使用系统平台签名
LOCAL_CERTIFICATE := platform
include $(BUILD_PREBUILT)
```
2. 将APK添加到系统编译mk文件中
```sh
PRODUCT_PACKAGES +=\
   Bluetooth \
   XXXX
```
3. 重新编译SDK，在OUT目录下生成的APK文件就具有系统签名了。

### Windows/Linux系统环境下进行应用签名
1. 平台Key文件有`platform.x509.pem`与`platform.pk8`两个，需根据手上的板子型号与系统版本去`https://dl.khadas.com/products/vim4/development/signtools/`网站下载。
2. 下载[signapk.jar](https://dl.khadas.com/products/vim4/development/signtools/signapk.kar)。
3. 下载依赖库[libconscrypt_openjdk_jni.so](https://dl.khadas.com/products/vim4/development/signtools/libconscrypt_openjdk_jni.so), 创建新目录`signlib`，并把库文件放到该目录下。
3. 安装JDK工具，可自行参考ｘｘｘ
4. 命令终端运行
```sh
java -Djava.library.path=signlib -jar signapk.jar platform.x509.pem platform.pk8 unsigned.apk signed.apk
```ww
