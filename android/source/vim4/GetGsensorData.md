title: Get Gsensor Data
---

VIM4 board has integrated gsensor function. Goto `Settings` --> `Khadas settings` --> `G-Sensor data` to view the acceleration of X, Y and Z.

<img src="/android/images/vim4/gsensor.png" width="75%" height="75%">

## Android APP get Gsensor Data
The data acquisition of app layer is mainly divided into three steps.
1. Get Sensor service : `getSystemService`.
2. Get detailed sensor object : `getDefaultSensor`.
3. Register data listener : `registerListener`.
The reference code is as follows:
```java
import android.app.Activity;
import android.content.Context;
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

        //get Sensor service
        mSensorManager = (SensorManager) getSystemService(Context.SENSOR_SERVICE);
        //get gsensor object
        Sensor gsensor = mSensorManager.getDefaultSensor(Sensor.TYPE_ACCELEROMETER);
        //register data listener，callback onSensorChanged method when has data
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
        //Judge whether the data type is gsensor
        if(event.sensor.getType() == Sensor.TYPE_ACCELEROMETER){
            //Get data
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
