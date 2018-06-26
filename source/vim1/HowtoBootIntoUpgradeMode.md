title: Howto Boot Into Upgrade Mode
---

There are many different ways to boot into upgrade mode listed as following:

* Keys Mode
* Serial Mode
* MRegister Mode

Usually, the first two methods will meet most of the user needs, but in some case, for example, if burnning a wrong u-boot, or your device cannot even boot any more, in thus cases, you can try with MRegister mode.

### Keys Mode(U-Boot is running)
1. Power on VIM1.
2. Long press `Power` key without release
3. Short press ‘Reset’ key and release
4. Count 10 seconds and release the ‘Power’ key to enter into upgrade mode


### Serial Mode(For developers)
1. Refer this [guidance](/vim1/SetupSerialTool.html) to setup serial tool for VIM1.
2. Make sure again you've done the right connections and setup.
3. Hit any keys at the moment of booting to stop autoboot. This step will let VIM1 boot into u-boot mode.
4. Type `run update` on the terminal of u-boot as belowing:

```
kvim# run update
```


### MRegister Mode(Maskrom Mode)
1. Power on VIM1.
2. Use a tweezer to short-circuit the two pads of `M` register and without release.
3. Short press `Reset` key and release it to boot into upgrade mode

![Image of MRegister_ShortCircuit](/images/vim1/MRegister_ShortCircuit.png)
*Tips: The  `M` register is loacated on the bottom of VIM1*
