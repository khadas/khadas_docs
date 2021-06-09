title: How to get android gsensor data
---
## gsensor usage
VIM3 board has integrated gsensor function on Android 9. Installing sensor apk can view the acceleration of X, y and Z, as follows
![Image of vim_gsensor](/android/images/vim3/sensor.png)

If the sensor function is realized at the Android device, the acceleration of X, y, Z of gsensor can be viewed by getevent command. The value will change if VIM3 is rotated

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
## android apk get gsensor data
The data acquisition of app layer is mainly divided into three steps
**1)** get Sensor service：getSystemService;
**2)** get detailed sensor object：getDefaultSensor;
**3)** register data listener：registerListener;
The reference code is as follows
```shell
//get Sensor service
mSensorManager = (SensorManager) getSystemService(Context.SENSOR_SERVICE);
//get gsensor object
gsensor = mSensorManager.getDefaultSensor(Sensor.TYPE_ACCELEROMETER);
//register data listener，callback onSensorChanged method when has data
mSensorManager.registerListener((SensorEventListener) this, gsensor, SensorManager.SENSOR_DELAY_NORMAL);

    //rewrite data monitor onSensorChanged method
    @Override
    public void onSensorChanged(SensorEvent event) {
        if(event.sensor == null)
            return ;
        //Judge whether the data type is gsensor
        if(event.sensor.getType() == Sensor.TYPE_ACCELEROMETER){
            //Get data of float type
            mLastX = event.values[0];
            mLastY = event.values[1];
            mLastZ = event.values[2];
            //Convert float type data to character type for textview display
            sX = String.valueOf(mLastX);
            sY = String.valueOf(mLastY);
            sZ = String.valueOf(mLastZ);
 
            mTextView_x.setText(sX);
            mTextView_y.setText(sY);
            mTextView_z.setText(sZ);
        }
    }

```
