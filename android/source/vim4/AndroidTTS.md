title: TTS Usage
---

TTS is an engine for Android text-to-speech, which can realize automatic reading function.
The TTS service is integrated into Android for VIM4 SBC, and third-party applications can implement TTS function by calling the interface.

### Broadcast Interface

Broadcast: `com.khadas.tts.string`

Parameter: `msg`, Value(String) : `VIM4 TTS test`


### Language Selection

Change your preferred language in settings: `Settings-->Accessibility-->Text-to-speech output`


* Java code implementation
```java
Intent intent = new Intent("com.khadas.tts.string");
intent.putExtra("msg","VIM4 TTS test");
sendBroadcast(intent);
```

* ADB command implementation
```
adb shell am broadcast -a com.khadas.tts.string --es msg "VIM4 TTS test"
```

