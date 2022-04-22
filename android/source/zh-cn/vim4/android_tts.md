title: TTS使用说明
---

TTS是Android文字转语音的一个引擎，其可以实现自动朗读功能。
VIM4 默认Android系统已经集成了TTS服务，第三方应用可以通过调用相应接口实现TTS功能。

## 广播接口描述

广播 : `com.khadas.tts.string`

参数 : `msg`, Value(String) : `VIM4 TTS test`

## 语言选择

在设置里面选择语言：

`设置-->无障碍-->文字转语音（TTS）输出`


* JAVA代码实现
```java
Intent intent = new Intent("com.khadas.tts.string");
intent.putExtra("msg","VIM4 TTS test");
sendBroadcast(intent);
```


* ADB命令实现
```
adb shell am broadcast -a com.khadas.tts.string --es msg "VIM4 TTS test"
```
