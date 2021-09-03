title: 如何获取android gsensor 数据
---
## gsensor 用法
VIM3 板子在安卓9上已经集成gsensor功能,安装sensor读取的apk可以查看x,y,z的加速度大小，如下
![Image of vim_gsensor](/android/images/vim3/sensor.png)

android 设备底层如果实现Gsensor功能，通过getevent命令可以查看gsensor 的x,y,z的加速度大小，转动VIM3,数值也将变化
```shell
130|console:/ $ getevent -l                                                    
add device 1: /dev/input/event3
  name:     "cec_input"
add device 2: /dev/input/event1
  name:     "aml_keypad"
add device 3: /dev/input/event0
  name:     "gpio_keypad"
add device 4: /dev/input/event6
  name:     "PixArt Dell MS116 USB Optical Mouse"
could not open /dev/input/mice, Permission denied
could not open /dev/input/mouse0, Permission denied
could not open /dev/input/mouse1, Permission denied
add device 5: /dev/input/event2
  name:     "aml_vkeypad"
add device 6: /dev/input/event5
  name:     "adc_keypad"
add device 7: /dev/input/event4
  name:     "gsensor"
/dev/input/event4: EV_ABS       ABS_X                000001f0            
/dev/input/event4: EV_ABS       ABS_Y                fffffb70            
/dev/input/event4: EV_ABS       ABS_Z                00004230            
/dev/input/event4: EV_SYN       SYN_REPORT           00000000            
/dev/input/event4: EV_ABS       ABS_X                00000140            
/dev/input/event4: EV_ABS       ABS_Y                fffffac0            
/dev/input/event4: EV_ABS       ABS_Z                00004160            

```

## android apk 获取gsensor数据
app层数据获取主要分为3个步骤
**1)** 获取Sensor服务：getSystemService;
**2)** 获取具体sensor对象：getDefaultSensor;
**3)** 注册数据监听器：registerListener;
参考代码如下
```shell
//获取Sensor服务
mSensorManager = (SensorManager) getSystemService(Context.SENSOR_SERVICE);
//获取gsensor的对象
gsensor = mSensorManager.getDefaultSensor(Sensor.TYPE_ACCELEROMETER);
//注册数据监听器，当有数据时会回调onSensorChanged方法
mSensorManager.registerListener((SensorEventListener) this, gsensor, SensorManager.SENSOR_DELAY_NORMAL);

    //重写数据监控的onSensorChanged方法
    @Override
    public void onSensorChanged(SensorEvent event) {
        if(event.sensor == null)
            return ;
        //判断获取的数据类型是不是gsensor
        if(event.sensor.getType() == Sensor.TYPE_ACCELEROMETER){
            //获得数据为float类型的数据
            mLastX = event.values[0];
            mLastY = event.values[1];
            mLastZ = event.values[2];
            //将float类型的数据转为字符型供textView显示
            sX = String.valueOf(mLastX);
            sY = String.valueOf(mLastY);
            sZ = String.valueOf(mLastZ);
 
            mTextView_x.setText(sX);
            mTextView_y.setText(sY);
            mTextView_z.setText(sZ);
        }
    }

```
