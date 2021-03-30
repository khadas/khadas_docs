title: 如何使用uart
---

## 确认串口硬件引脚

Urt_c引出到40Pin的引脚是15脚以及16脚

* [VIM3-GPIO-Pin-Out](/vim3/#GPIO-Pinout)

VIM3 uart_C 默认在kvim3.dts中使能，对应的设备节点是/dev/ttyS3

```sh
1443 &uart_C {
1444         status = "okay";
1445 };
```

#### 通过 comassistant apk去使用uart

**1）** Through the serial port to USB adapter board, one end is connected to the computer, the other end is connected to pin 15, pin 16

**1）** 首先通过串口转usb小板，一端连接电脑，一端连接40Pin的15脚以及16脚

**2）** 安装 comassistant.apk,这个apk 可以测试uart的发送和接收功能

**3）** 运行结果如下,comassistant apk从电脑接收数字 12345678 , 发送 "serial send test" 字符到电脑端 

![Image of serial_send_rec](/images/vim3/serial_send_rec.png)

**4）** 电脑接收 "serial send test",在 secureCRT工具显示如下

```sh
serial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send test  serial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send test
``` 

#### 通过 khadas api使用uart 

当你下载khadas_api_demo 源码后，你可以在里面找到vim3_demo.apk，在api里面提供了串口操作接口，例如：

**1）** 根据传入的路径和波特率，设置回调函数

```c
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

**2)** 发送字符串到串口

```c
String sendTxt = "123456789abcdef0";
serialPortHelper.addCommands(sendTxt);
```

**3)** 关闭串口

```c
serialPortHelper.closeDevice();
```

**4)** 在 vim3_demo.apk 中运行结果如下

![Image of vim_serial](/images/vim3/vim3_serial.png)


