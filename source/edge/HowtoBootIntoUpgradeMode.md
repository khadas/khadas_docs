title: Howto Boot Into Upgrade Mode
---

There are many different ways to boot into upgrade mode listed as following:

* Keys Mode
* Serial Mode
* Linux/Android command line
* TST Mode (Recommend)
* MRegister Mode

Usually, the first four methods will meet most of the user needs, but in some case, for example, if burnning a wrong u-boot, or your device cannot even boot any more, in thus cases, you can try with MRegister mode.

### Keys Mode(U-Boot is running)
1. Power on Edge.
2. Long press `Func` key without release.
3. Short press ‘Reset’ key and release.
4. Count 2-3 seconds and release the ‘Func’ key to enter into upgrade mode, you will see the sys-led on when enter upgrade mode(loader mode).

### Serial Mode(For developers)
1. Refer this [guidance](/edge/SetupSerialTool.html) to setup serial tool for Edge.
2. Make sure again you've done the right connections and setup.
3. Hit any keys at the moment of booting to stop autoboot. This step will let Edge boot into u-boot mode.
4. Type `run update` on the terminal of u-boot as belowing, you will see the sys-led on when enter loader mode.

```
kedge# run update
```
5. Type `run maskrom` on the terminal of u-boot as belowing, you will enter maskrom mode.

```
kedge# run maskrom
```

### Android/Linux command line
1. Refer this [guidance](/edge/SetupSerialTool.html) to setup serial tool for Edge.
2. Make sure again you've done the right connections and setup.
3. Boot into android or linux command line.
4. Linux executes `sudo reboot loader`, Android executes `su` and `reboot loader`, the system will reboot and enter upgrade mode, you will see the sys-led on when enter upgrade mode(loader mode).

### TST Mode (Recommend)
1. Power on Edge.
2. Quickly press `Func` key 3 times in 2 seconds and release the key.
3. You will see the power-led(Blue) blink about 3 seconds, after the power-led(Blue) off indicate that the board is in upgrade mode(maskrom mode).

### MRegister Mode(Maskrom Mode)
1. Power on Edge.
2. Use a tweezer to short-circuit the two pads of `M` register and without release.
3. Short press `Reset` key and release it to boot into upgrade mode(maskrom mode).

![Image of MRegister_ShortCircuit](/images/edge/MRegister_ShortCircuit.png)
*Tips: The  `M` register is loacated on the bottom of Edge*
