title: APP获取系统权限
---

第三方应用想要获取系统权限，首先需要在AndroiManifest.xml文件中声明UID为系统进程，还要用平台Key对APP进行签名。

## APP中声明UID为系统进程
第三方应用的AndroidManifest.xml文件中声明：
```sh
android:sharedUserid="android.uid.system"
```

## 用平台Key对APP进行签名
###　SDK源码下签名
1. 将APP放到对应目录下，编写Android.mk文件：
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
2. 将APP添加到系统编译mk文件中：
```sh
PRODUCT_PACKAGES +=\
   Bluetooth \
   XXXX
```
3. 重新编译SDK，在OUT目录下生成的APK文件就具有系统签名。

### Windows/Linux系统环境下进行应用签名
1. 下载平台Key文件[platform.x509.pem](https://dl.khadas.com/products/vim4/development/signtools/platform.x509.pem)与[platform.pk8](https://dl.khadas.com/products/vim4/development/signtools/platform.pk8)。
2. 下载签名工具[signapk.jar](https://dl.khadas.com/products/vim4/development/signtools/signapk.jar)。
3. 下载依赖库[libconscrypt_openjdk_jni.so](https://dl.khadas.com/products/vim4/development/signtools/libconscrypt_openjdk_jni.so)，下载完成后创建`signlib`目录，把依赖库放到该目录下。
4. 安装[JDK工具](https://docs.oracle.com/en/java/javase/17/install/overview-jdk-installation.html`)。
5. 命令终端下运行：
```sh
java -Djava.library.path=signlib -jar signapk.jar platform.x509.pem platform.pk8 unsigned.apk signed.apk
```
