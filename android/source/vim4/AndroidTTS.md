title: Use TTS
---

TTS service has been integrated into the Android system of vim4, and third-party applications only need to call.

## Broadcast Interface

Broadcast : `com.khadas.tts.string`

Parameter : `msg`, Value(String) : `test`


## Add Code to Java
```java
Intent intent = new Intent("com.khadas.tts.string");
intent.putExtra("msg","test");
sendBroadcast(intent);
```


## Adb Test
```
adb shell am broadcast -a com.khadas.tts.string --es msg "test"
```

## Language Choice
You can choice language in settings.
`Settings` --> `Accessibility` --> `Text-to-speech output`
