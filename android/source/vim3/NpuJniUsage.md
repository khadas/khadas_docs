title: How To Use Android NPU JNI
---

{% note warn NOTE %}

Before run android NPU Demo,please download newest [firmware](/android/firmware/Vim3AndroidFirmware.html),and update system to latest version.

{% endnote %}


### Get NPU APP/JNI source code

Currently, the source code of NPU JNI is not integrated into the firmware and needs to be downloaded from gitlab.

Jni gitlab repository address:[https://github.com/khadas/khadas_android_npu_library](https://github.com/khadas/khadas_android_npu_library)

App gitlab repository address:[https://github.com/khadas/khadas_android_npu_app](https://github.com/khadas/khadas_android_npu_app)
### Install NDK build environment

``1)`` Download NDK
	wget https://dl.google.com/android/repository/android-ndk-r17-linux-x86_64.zip 
``2)`` Unzip
	unzip android-ndk-r17-linux-x86_64.zip
``3)`` Configure NDK environment variables: open .bashrc and add the following two lines to the end of the file, Or add it to the /etc/profile file

	export NDKROOT=/usr/ndk/android-ndk-r17
	export PATH=$NDKROOT:$PATH
	save and exit,update environment variables：source ~/.bashrc.

``4)`` Check whether the NDK installation is completed:
	enter the "ndk-build" command in the shell to check if your installation is successful, if not "ndk-build not found" is displayed.

### NDK build NPU JNI so library
After downloading the source code of NPU JNI, enter khadas_ android_ npu_ Library directory, as follows

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
``1)`` build libkhadas_npu_jni.so 
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
``2)`` build libnn_yoloface.so
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
``3)`` buld libnn_yolo_v2.so
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
``4)`` build libnn_yolo_v3.so
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
### So library description
libkhadas_npu_jni.so: The NPU related api encapsulated by khadas is called by khadas NPU demo APP，please refer to khadas_android_npu_library and khadas_android_npu_app code.

libnn_yoloface.so: compiled by yoloface face detection case code which automatically generated by the model conversion tool , For details on how to transfer out the case code, please refer to the description of NPU model conversion in Linux doc.

libnn_yolo_v2.so: compiled by yolo_v2 image recognition case code which automatically generated by the model conversion tool , For details on how to transfer out the case code, please refer to the description of NPU model conversion in Linux doc.

libnn_yolo_v3.so: compiled by yolo_v3 image recognition case code which automatically generated by the model conversion tool , For details on how to transfer out the case code, please refer to the descr
iption of NPU model conversion in Linux doc.


### khadas_android_npu_app app so library usage
After download NPU APP source code，app/libs/armeabi-v7a directory include libkhadas_npu_jni.so libnn_yoloface.so libnn_yolo_v2.so libnn_yolo_v3.so and other NPU releated library，libovxlib.so etc,app call libkhadas_npu_jni.so api by JNI. 
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



