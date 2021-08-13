title: 如何获取android gps 数据
---
### android gnss 框架
在Android中, gps 数据通过gnss location框架获取，Location以分层的方式实现, 从上到下依次为

- 应用框架: 提供android.location API

定位管理器: LocationManager
定位提供者: LocationProvider
位置信息: Location
定位监听者: LocationListener

- Framework Services: 服务实现, 主要涉及文件如下

frameworks/base/location/java/android/location/*
frameworks/base/services/core/java/com/android/server/location/*
frameworks/base/services/core/java/com/android/server/LocationManagerService.java
frameworks/base/services/core/java/com/android/server/location/GnssLocationProvider.java

- JNI: 封装GNSS hal层接口(IGnss)给GnssLocationProvider使用体现

frameworks/base/services/core/jni/com_android_server_location_GnssLocationProvider.cpp

- HAL层: 实现了IGnss接口和IGnss服务

hardware/libhardware/include/hardware/gps.h

hardware/interfaces/gnss/1.0/                        ====>android.hardware.gnss@1.0.so
hardware/interfaces/gnss/1.0/default/         ====>android.hardware.gnss@1.0-impl.so  android.hardware.gnss@1.0-service

hardware/interfaces/gnss/1.1/                        ====>android.hardware.gnss@1.1.so
hardware/interfaces/gnss/1.1/default/         ====>android.hardware.gnss@1.1-service


### gps 用法
VIM3 板子在安卓9上已经集成usb gps 功能，通过usb接口插入gps 接收器，然后安装gps apk，可以查看当前位置的经纬度等信息，也可以安装地图软件查看定位 
**注意** 
**1)** 从GPS模块启动到获取第一次定位数据，可能需要比较长的时间
**2)** 在没有网络的情况下也能使用，但是gps设备需要放置在室外才能接收到卫星信号

使用gps定位，需要先打开设置中的Location 开关，Droid Settings > More settings > Device Preferences > Loacation,Location 选择 on,命令查看location_providers_allowed 将为gps 
```shell
130|console:/ $ settings list secure |grep location_providers_allowed          
location_providers_allowed=gps
console:/ $ 
```
apk 运行如下
![Image of vim_gps](/images/vim3/gps.png)

### android gps 位置数据api 说明
android frameworks 中封装了标准的api让应用去获取gps相关的数据，比如经纬度数据通过frameworks/base/location/java/android/location/Location.java这个类中的方法去获取，具体可以参考安卓源代码frameworks/base/tests/LocationTracker中的实现，Location 中获取经纬度api 如下
```shell
 583     /**
 584      * Get the latitude, in degrees.
 585      *
 586      * <p>All locations generated by the {@link LocationManager}
 587      * will have a valid latitude.
 588      */
 589     public double getLatitude() {
 590         return mLatitude;
 591     }


 600     /**
 601      * Get the longitude, in degrees.
 602      *
 603      * <p>All locations generated by the {@link LocationManager}
 604      * will have a valid longitude.
 605      */
 606     public double getLongitude() {
 607         return mLongitude;
 608     }

```
经纬度信息由GnssLocationProvider提供，如下
```shell
01-01 13:11:01.483  3735  3757 I GnssLocationProvider: WakeLock released by handleMessage(REPORT_LOCATION, 1, Location[gps 22.570539,113.863433 hAcc=1 et=+6m35s993ms alt=153.4 vel=0.03909778 vAcc=??? sA
cc=??? bAcc=??? {Bundle[{satellites=6, maxCn0=33, meanCn0=22}]}])
```
22.570539,113.863433 分别代表的是经纬度数据




