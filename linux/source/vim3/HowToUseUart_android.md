title: How To Use Uart
---

## Confirm serial port hardware pins

Uart_C pin in 40 pins header is pin15 and pin16

* [VIM3-GPIO-Pin-Out](/vim3/#GPIO-Pinout)
vim3 uart_C default is enabled in kvim3.dts,the corresponding dev node is /dev/ttyS3
```
1443 &uart_C {
1444         status = "okay";
1445 };
```

#### How to use uart by comassistant apk
**1）** Through the serial port to USB adapter board, one end is connected to the computer, the other end is connected to pin 15, pin 16
**2）** install the comassistant.apk,the apk can test uart send and recieve funtion
**3）** the run result is as following,comassistant apk recevie 12345678 from pc , and send "serial send test" to pc 
![Image of serial_send_rec](/images/vim3/serial_send_rec.png)
**4）** pc receive "serial send test",show in serial tool secureCRT 
```
serial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send test  serial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send test
``` 

#### How to use uart by khadas api
when you download khadas_api_demo source code ,you will find the vim3_demo.apk,in api ,it provides serial operation interface,for example 
**1）** Open the serial port according to the path and baud rate, and set the callback function
```
private boolean openSerialPort(String path,int baudrate){
		SerialPortConfig serialPortConfig = new SerialPortConfig();
		serialPortConfig.mode = 0;
		serialPortConfig.path = path;
		serialPortConfig.baudRate = baudrate;
		serialPortConfig.dataBits = 8;
		serialPortConfig.parity   = 'N';
		serialPortConfig.stopBits = 1;

		// Initialization serial port
		serialPortHelper = new SerialPortHelper(16);
		// set serial port parameter
		serialPortHelper.setConfigInfo(serialPortConfig);
		// open serial port
		isOpen = serialPortHelper.openDevice();
		if(!isOpen){
			return false;
		}
		serialPortHelper.setSphResultCallback(new SphResultCallback() {
			@Override
			public void onSendData(SphCmdEntity sendCom) {
				Log.d(TAG, "send command:" + sendCom.commandsHex);
			}

			@Override
			public void onReceiveData(SphCmdEntity data) {
				final String result = data.commandsHex;
				Log.d(TAG, "onDataReceived:"+data.commandsHex);
				if(data.commandsHex != null && data.commandsHex.trim().length() > 0)
					mInfoView.post(new Runnable() {

						@Override
						public void run() {
							// TODO Auto-generated method stub
							mInfoView.append(result);
						}
					});
			}

			@Override
			public void onComplete() {
				Log.d(TAG, "finish");
			}
		});

		return true;
	}
```
**2)** Send string to serial port
```
String sendTxt = "123456789abcdef0";
serialPortHelper.addCommands(sendTxt);
```
**3)**
```
serialPortHelper.closeDevice();
```
**4)** run result in vim3_demo.apk as following
![Image of vim_serial](/images/vim3/vim3_serial.png)


