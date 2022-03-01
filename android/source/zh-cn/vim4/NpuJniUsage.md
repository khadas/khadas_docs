title: 如何使用Android NPU JNI
---

{% note warn 注意 %}

在运行android NPU Demo前请先下载[firmware](/android/zh-cn/firmware/Vim3AndroidFirmware.html)升级系统到最新版本。

{% endnote %}


### 获取NPU JNI/APP 源码

NPU JNI源码目前没有集成到固件中，需要先从gitlab自行下载。

JNI仓库在gitlab上的地址为:[https://github.com/khadas/khadas_android_npu_library](https://github.com/khadas/khadas_android_npu_library)

APP仓库在gitlab上的地址为:[https://github.com/khadas/khadas_android_npu_app](https://github.com/khadas/khadas_android_npu_app)

### 安装NDK 编译环境

``1)`` 下载NDK
	wget https://dl.google.com/android/repository/android-ndk-r17-linux-x86_64.zip 
``2)`` 解压
	unzip android-ndk-r17-linux-x86_64.zip
``3)`` 配置NDK环境变量：打开.bashrc，将下面俩行添加到文件末尾。或者添加到/etc/profile文件也可以。

	export NDKROOT=/usr/ndk/android-ndk-r17
	export PATH=$NDKROOT:$PATH
	保存退出，更新下环境变量：source ~/.bashrc。

``4)`` 检测NDK是否安装完成：
	在shell中输入“ndk-build”命令来检查你的安装是否成功，如果不是显示“ndk-build not found”。

### NDK编译 NPU JNI so库
下载NPU JNI源码后，进入khadas_android_npu_library目录，如下

```shell
root@lxx-NUC10i7FNH:/home/lxx/khadas_android_npu/khadas_android_npu_library# ll
total 24
drwxr-xr-x 5 root root 4096 Jun  3 13:46 ./
drwxr-xr-x 4 root root 4096 Jun  3 13:45 ../
drwxr-xr-x 5 root root 4096 Jun  4 13:54 detect_code/
drwxr-xr-x 8 root root 4096 Jun  3 14:04 .git/
drwxr-xr-x 5 root root 4096 Jun  3 13:46 model_code/
-rw-r--r-- 1 root root   28 Jun  3 13:45 README.md
```
``1)`` 编译libkhadas_npu_jni.so 
```shell
root@lxx-NUC10i7FNH:/home/lxx/khadas_android_npu/khadas_android_npu_library/detect_code# ndk-build 
Android NDK: android-9 is unsupported. Using minimum supported version android-14.    
Android NDK: WARNING: APP_STL gnustl_static is deprecated and will be removed in the next release. Please switch to either c++_static or c++_shared. See https://developer.android.com/ndk/guides/cpp-support.html for more information.    
/bin/sh: 1: test: -ge: unexpected operator
Android NDK: WARNING:jni/Android.mk:khadas_npu_jni: non-system libraries in linker flags: -lopencv_java4    
Android NDK:     This is likely to result in incorrect builds. Try using LOCAL_STATIC_LIBRARIES    
Android NDK:     or LOCAL_SHARED_LIBRARIES instead to list the library dependencies of the    
Android NDK:     current module    
[armeabi-v7a] Install        : libkhadas_npu_jni.so => libs/armeabi-v7a/libkhadas_npu_jni.so
```
``2)`` 编译libnn_yoloface.so
```shell
root@lxx-NUC10i7FNH:/home/lxx/khadas_android_npu/khadas_android_npu_library/model_code/detect_yoloface# ndk-build 
Android NDK: android-9 is unsupported. Using minimum supported version android-14.    
Android NDK: WARNING: APP_STL gnustl_static is deprecated and will be removed in the next release. Please switch to either c++_static or c++_shared. See https://developer.android.com/ndk/guides/cpp-support.html for more information.    
/bin/sh: 1: test: -ge: unexpected operator
Android NDK: WARNING:jni/Android.mk:nn_yoloface: non-system libraries in linker flags: -lovxlib    
Android NDK:     This is likely to result in incorrect builds. Try using LOCAL_STATIC_LIBRARIES    
Android NDK:     or LOCAL_SHARED_LIBRARIES instead to list the library dependencies of the    
Android NDK:     current module    
[armeabi-v7a] Install        : libnn_yoloface.so => libs/armeabi-v7a/libnn_yoloface.so
```
``3)`` 编译libnn_yolo_v2.so
```shell
root@lxx-NUC10i7FNH:/home/lxx/khadas_android_npu/khadas_android_npu_library/model_code/detect_yolo_v2# ndk-build 
Android NDK: android-9 is unsupported. Using minimum supported version android-14.    
Android NDK: WARNING: APP_STL gnustl_static is deprecated and will be removed in the next release. Please switch to either c++_static or c++_shared. See https://developer.android.com/ndk/guides/cpp-support.html for more information.    
/bin/sh: 1: test: -ge: unexpected operator
Android NDK: WARNING:jni/Android.mk:nn_yolo_v2: non-system libraries in linker flags: -lovxlib    
Android NDK:     This is likely to result in incorrect builds. Try using LOCAL_STATIC_LIBRARIES    
Android NDK:     or LOCAL_SHARED_LIBRARIES instead to list the library dependencies of the    
Android NDK:     current module    
[armeabi-v7a] Install        : libnn_yolo_v2.so => libs/armeabi-v7a/libnn_yolo_v2.so
```
``4)`` 编译libnn_yolo_v3.so
```shell
root@lxx-NUC10i7FNH:/home/lxx/khadas_android_npu/khadas_android_npu_library/model_code/detect_yolo_v3# ndk-build 
Android NDK: android-9 is unsupported. Using minimum supported version android-14.    
Android NDK: WARNING: APP_STL gnustl_static is deprecated and will be removed in the next release. Please switch to either c++_static or c++_shared. See https://developer.android.com/ndk/guides/cpp-support.html for more information.    
/bin/sh: 1: test: -ge: unexpected operator
Android NDK: WARNING:jni/Android.mk:nn_yolo_v3: non-system libraries in linker flags: -lovxlib    
Android NDK:     This is likely to result in incorrect builds. Try using LOCAL_STATIC_LIBRARIES    
Android NDK:     or LOCAL_SHARED_LIBRARIES instead to list the library dependencies of the    
Android NDK:     current module    
[armeabi-v7a] Install        : libnn_yolo_v3.so => libs/armeabi-v7a/libnn_yolo_v3.so
```
### so库说明
libkhadas_npu_jni.so: khadas 封装的NPU相关的API, 由khadas NPU demo APP调用，具体查看khadas_android_npu_library 和khadas_android_npu_app 代码。
libnn_yoloface.so: 由模型转换工具自动生成的yoloface人脸检测case代码编译，具体如何转出case代码，请参考linux板块关于NPU模型转换的说明。
libnn_yolo_v2.so:由模型转换工具自动生成的yolo_v2图像识别case代码编译，具体如何转出case代码，请参考linux板块关于NPU模型转换的说明。
libnn_yolo_v3.so:由模型转换工具自动生成的yolo_v3图像识别case代码编译，具体如何转出case代码，请参考linux板块关于NPU模型转换的说明。

### khadas_android_npu_app APP so库使用
下载NPU APP源码后，在app/libs/armeabi-v7a目录中包含libkhadas_npu_jni.so libnn_yoloface.so libnn_yolo_v2.so libnn_yolo_v3.so以及其他NPU相关的库，libovxlib.so等,APP通过JNI调用libkhadas_npu_jni.so接口。 
```shell
root@lxx-NUC10i7FNH:/home/lxx/khadas_android_npu/khadas_android_npu/app/libs/armeabi-v7a# ll
total 33008
drwxr-xr-x  2 root root     4096 Jun  3 11:31 ./
drwxr-xr-x 20 root root     4096 Jun  3 11:31 ../
-rwxr-xr-x  1 root root     5408 Jun  3 11:31 ld-android.so*
-rw-r--r--  1 root root   227220 Jun  3 11:31 libarchmodelSw.so
-rwxr-xr-x  1 root root   657000 Jun  3 11:31 libc++_shared.so*
-rwxr-xr-x  1 root root   832796 Jun  3 11:31 libc.so*
-rw-r--r--  1 root root   636316 Jun  3 11:31 libc++.so
-rw-r--r--  1 root root    67444 Jun  3 11:31 libcutils.so
-rwxr-xr-x  1 root root     5940 Jun  3 11:31 libdl.so*
-rw-r--r--  1 root root  1273224 Jun  3 11:31 libGAL.so
-rwxr-xr-x  1 root root    26312 Jun  3 11:31 libkhadas_npu_jni.so*
-rwxr-xr-x  1 root root    89020 Jun  3 11:31 liblog.so*
-rwxr-xr-x  1 root root   136680 Jun  3 11:31 libm.so*
-rw-r--r--  1 root root   226016 Jun  3 11:31 libNNArchPerf.so
-rwxr-xr-x  1 root root    18032 Jun  3 11:31 libnn_yoloface.so*
-rwxr-xr-x  1 root root    22180 Jun  3 11:31 libnn_yolo_v2.so*
-rwxr-xr-x  1 root root    22252 Jun  3 11:31 libnn_yolo_v3.so*
-rw-r--r--  1 root root 10076740 Jun  3 11:31 libopencv_java4.so
-rw-r--r--  1 root root  1669588 Jun  3 11:31 libOpenVX.so
-rw-r--r--  1 root root  2763276 Jun  3 11:31 libovxlib.so
-rwxr-xr-x  1 root root    15928 Jun  3 11:31 libsync.so*
-rw-r--r--  1 root root 14976940 Jun  3 11:31 libVSC.so
```



