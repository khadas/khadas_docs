title: How To Boot Into Upgrade Mode
---

There are 4 ways to boot into Upgrade Mode:

1. Keys Mode (Side-Buttons)
2. Serial Mode
3. TST Mode (Recommended)
4. MRegister Mode

### Keys Mode (U-Boot is Running Normally)
1. Power on VIM3.
2. Long press the `POWER` key without releasing it.
3. Short press the ‘Reset’ key and release it.
4. Count for 2 to 3 seconds, then release the `POWER` key to enter into Upgrade Mode. You will see the sys-led turn ON when you've entered Upgrade Mode.

### Serial Mode (For Developers)
1. Refer this [guide](/vim3/SetupSerialTool.html) to setup your serial tool for VIM3.
2. Once again, make sure you've done the correct connections and setup.
3. Hit any keys at the moment of bootup to stop autoboot. This step will let VIM3 boot into U-Boot Mode.
4. Type `run update` in the terminal of U-Boot as below. You will see the sys-led turn ON when you've entered Upgrade Mode.

```
kvim3# run update
```
### TST Mode (Recommended)
1. Power-on VIM3.
2. Quickly press the `Function` key 3 times in 2 seconds, then release the key.
3. You will see the Power-LED (Blue) blink for about 3 seconds. After the Power-LED (Blue) turns OFF, this indicates that the board is in Upgrade Mode (Maskrom Mode).

### MRegister Mode
1. Power on VIM3.
2. Use a tweezer to short-circuit the two pads of the `M` register, and without releasing...
3. Short press the `Reset` key and then release it, to boot into upgroup mode

![image](/images/vim3/VIM3_M_Register.jpg)

