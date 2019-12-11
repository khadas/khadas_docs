title: How To Boot Into Upgrade Mode
---

There are 4 different ways to boot into Upgrade Mode:

* Keys Mode (Side-Buttons)
* Serial Mode
* TST Mode
* MRegister Mode

Usually, the first two methods will meet the needs of most users. However, in some cases such as burning an incorrect u-boot, or if your device is unable to boot at all, you can attempt to rectify the issue with the MRegister mode.

### Keys Mode (U-Boot is Running)
1. Power on VIM1.
2. Long press the `Power` key without releasing it.
3. Short press the ‘Reset’ key and release it.
4. Count to 10 seconds and release the ‘Power’ key to enter into upgrade mode


### Serial Mode (For Developers)
1. Refer to this [guide](/vim1/SetupSerialTool.html) to setup your serial tool for VIM1.
2. Once again, ensure that you've done the right connections and setup.
3. Hit any keys at the moment of bootup to stop autoboot. This step will let VIM1 boot into u-boot mode.
4. Type `run update` on the terminal of u-boot as below:

```
kvim# run update
```

### TST Mode (Recommended)
1. Power-on VIM1 (v14 only).
2. Quickly press the `Function` key 3 times in 2 seconds, then release the key.
3. You will see the Power-LED (Blue) blink for about 3 seconds. After the Power-LED (Blue) turns OFF, this indicates that the board is in Upgrade Mode (Maskrom Mode).

### MRegister Mode (Maskrom Mode)
1. Power on VIM1.
2. Use a tweezer to short-circuit the two pads of the `M` register, and without releasing it...
3. Short press the `Reset` key and release it to boot into upgrade mode

![Image of MRegister_ShortCircuit](/images/vim1/MRegister_ShortCircuit.png)
*Tip: The `M` register is located on the backside of your VIM1*
