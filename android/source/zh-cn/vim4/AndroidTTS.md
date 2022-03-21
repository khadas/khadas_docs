title: 使用TTS
---

TTS服务已经集成到VIM4的Android系统，第三方应用只需要调用。

## 广播接口

广播 : `com.khadas.tts.string`

参数 : `msg`, Value(String) : `test`


## Java添加代码
```java
Intent intent = new Intent("com.khadas.tts.string");
intent.putExtra("msg","test");
sendBroadcast(intent);
```


## Adb测试
```
adb shell am broadcast -a com.khadas.tts.string --es msg "test"
```

## 语言选择
你可以在设置里面添加和选择语言。
`设置-->无障碍-->文字转语音（TTS）输出`
