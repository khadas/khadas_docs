title: How To Use Hardware Decoding Library
---
# Usage Of Hardware Decoding Library

*Note: Only for linux 4.9.*

Please make sure you use the latest image, if not please follow [How To Upgrade The System](/vim1/HowToUpgradeTheSystem.html) to upgrade your system.

## Hardware Decoding just For Display

Here is a demo about how to use the decoding library to decode and display video directly. It's just a simplest demo, if you want to develop complex player you can refer the command line player [kplayer source code](https://github.com/numbqq/libplayer).

https://github.com/numbqq/aml_hardware_decode_demo

## Hardware Decoding & Get the Decoded Frames

You can also use the hardware decoding library to decode and get the decoded (RGB/YUV) frames.

Here is a demo to use ionvideo to get the decoded frames with a UVC.

https://github.com/numbqq/uvc_capture_aml/tree/ionvideo

Read from file.

https://github.com/numbqq/aml_hardware_decode_demo/tree/ionvideo

### Library Source Code

Here is the source code: https://github.com/numbqq/libplayer
