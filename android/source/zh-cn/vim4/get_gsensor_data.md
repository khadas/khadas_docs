title: G-Sensor数据获取
---

VIM4 SBC内置G-Sensor模块，进入`设置-->Khadas设置-->重力感应器数据`可以查看X，Y，Z三轴加速度大小。

<img src="/android/images/vim4/gsensor.png" width="75%" height="75%">

## APP获取G-Sensor数据

APP获取G-Sensor数据有如下几个步骤：

1. 获取Sensor服务 ： `getSystemService`。

2. 获取G-Sensor对象 ： `getDefaultSensor`。

3. 注册数据监听器 ： `registerListener`。

代码参考如下：
```java
import android.app.Activity;
import android.content.Context
import android.hardware.Sensor;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.hardware.SensorEvent;
import android.os.Bundle;
import android.widget.TextView;

public class Gsensor_Preference extends Activity implements SensorEventListener {

    private SensorManager mSensorManager;
    private TextView mTextView_x;
    private TextView mTextView_y;
    private TextView mTextView_z;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.gsensor);

        //获取Sensor服务
        mSensorManager = (SensorManager) getSystemService(Context.SENSOR_SERVICE);
        //获取G-Sensor的对象
        Sensor gsensor = mSensorManager.getDefaultSensor(Sensor.TYPE_ACCELEROMETER);
        //注册数据监听器，当有数据时会回调onSensorChanged方法
        mSensorManager.registerListener(this, gsensor, SensorManager.SENSOR_DELAY_NORMAL);

        mTextView_x = findViewById(R.id.textView_x);
        mTextView_y = findViewById(R.id.textView_y);
        mTextView_z = findViewById(R.id.textView_z);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        mSensorManager.unregisterListener(this);
    }

    @Override
    public void onSensorChanged(SensorEvent event) {
        if(event.sensor == null)
            return ;
        //判断获取的数据类型是不是G-Sensor
        if(event.sensor.getType() == Sensor.TYPE_ACCELEROMETER){
            //获得数据
            mTextView_x.setText("X: " + event.values[0] + " m/s²");
            mTextView_y.setText("Y: " + event.values[1] + " m/s²");
            mTextView_z.setText("Z: " + event.values[2] + " m/s²");
        }
    }

    @Override
    public void onAccuracyChanged(Sensor sensor, int accuracy) {

    }
}
```
