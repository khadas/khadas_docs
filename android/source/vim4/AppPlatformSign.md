title: System Permissions for 3rd Party Apps
---

If a third-party application wants to obtain system permissions, it needs to declare its UID as a system process in the `AndroidManifest.xml` file, and the application needs to be signed with the platform key (signature).

## Declare UID as a System Process
The third-party application's AndroidManifest.xml must include:
```sh
android:sharedUserid="android.uid.system
```

## Sign App with Platform Key
### App signing for SDK source code
1. Put the APK in the application directory, and create an `Android.mk` file containing the following contents:
```sh
LOCAL_PATH := $(call my-dir)
include $(CLEAR_VARS)
# module name should match the apk name
LOCAL_MODULE := XXXX
LOCAL_MODULE_TAGS := optional

LOCAL_SRC_FILES := $(LOCAL_MODULE).apk
LOCAL_MODULE_CLASS := APPS
LOCAL_MODULE_SUFFIX := $(COMMON_ANDROID_PACKAGE_SUFFIX)
LOCAL_PRIVILEGED_MODULE := true

# use the application's own signature
# LOCAL_CERTIFICATE := PRESIGNED
# sign with the platform key
LOCAL_CERTIFICATE := platform
include $(BUILD_PREBUILT)
```

2. Add the name of your APK `XXXX` into the compile file.
```sh
PRODUCT_PACKAGES +=\
   Bluetooth \
   XXXX
```

3. Recompile the SDK, and the APK file will be generated in the `out` directory, containing the platform key.

### App Signing for Windows & Linux PC
1. According to your SBC model and system version, download the two platform key files `platform.x509.pem` and `platform.pk8`, from `https://dl.khadas.com/`.

2. Download the Java Signing Tool [signapk.jar](https://dl.khadas.com/products/vim4/development/signtools/signapk.kar).

3. Download the library-dependency [libconscrypt_openjdk_jni.so](https://dl.khadas.com/products/vim4/development/signtools/libconscrypt_openjdk_jni.so) and put it in the `signlib` directory.

4. Install the [JDK Tool](https://docs.oracle.com/en/java/javase/17/install/overview-jdk-installation.html).

5. Execute the shell command.
```sh
java -Djava.library.path=signlib -jar signapk.jar platform.x509.pem platform.pk8 unsigned.apk signed.apk
```
