title: Howto Boot Into Upgrade Mode
---

There are many different ways to boot into upgrade mode. They are listed below:

* Button Mode
* Serial Mode
* MRegister Mode

Usually, the first two methods will meet the needs of most users. However, in some cases, for example if you've burned the incorrect u-boot, or your device can't even boot anymore, you can try out the MRegister mode.

### Button Mode (U-Boot is running)
1. Power on VIM2.
2. Long press the `Power` key without releasing it.
3. Short press the ‘Reset’ key and release it.
4. Count to 10 seconds and release the ‘Power’ key to enter into upgrade mode.


### Serial Mode (For developers)
1. Refer to this [guide](/vim1/SetupSerialTool.html) to setup a serial tool for VIM2.
2. Make sure again that you've done the right connections and setup.
3. Hit any keys at the moment of booting to stop autoboot. This step will let VIM boot into u-boot mode.
4. Type `run update` in the terminal of u-boot as shown below:
```
kvim2# run update
```

### MRegister Mode(Maskrom Mode)
1. Power on VIM2.
2. Use a tweezer to short-circuit the two pads of the `M` register, and without releasing...
3. Short press the `Reset` key and then release it, to boot into upgrade mode

![Image of MRegister_ShortCircuit](/images/vim2/MRegister_ShortCircuit.png)
*Tip: The `M` register is located on the underside of VIM2*
