title: TTS
---

The TTS service is integrated into Android for VIM4 SBCs, and third-party applications only need to call it.

## Broadcast interface

Broadcast: `com.khadas.tts.string`

Parameter: `msg`, Value(String) : `test`


## Add code to Java
```java
Intent intent = new Intent("com.khadas.tts.string");
intent.putExtra("msg","test");
sendBroadcast(intent);
```

## ADB broadcast test
```
adb shell am broadcast -a com.khadas.tts.string --es msg "test"
```

## Language selection
Change your preferred language in settings.
`Settings` --> `Accessibility` --> `Text-to-speech output`
