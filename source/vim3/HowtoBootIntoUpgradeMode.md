title: How To Boot Into Upgrade Mode
---

There are many different ways to boot into upgroup mode.
- Button Mode
- Serial Mode
- Android/Linux Command Line
- TST Mode(Recommended)

## Button Mode(U-boot is running)
1.Power on VIM3.

2.Long press the `Function` key without releasing it.

3.Short press the `Reset` key and release it.

4.Count for 2 to 3 seconds, then release the `Function` key to enter into Upgrade Mode. You will see the sys-led turn ON when you’ve entered Upgrade Mode (Loader Mode).

## Serial Mode(For Developers)

1. Refer this guide to setup your serial tool for VIM3.

2.Once again,make sure you've done the correct connections and setup.

3.Reset and hit any keys at the moment of bootup to stop autoboot.This step will let VIM3 boot into U-boot Mode.

4.Type `run update` in the terminal of U-boot as below.You will see the sys-led turn on when you've enterd Upgrade Mode.

```
Kvim3# run update
```
5.Type `run maskrom` on the terminal of U-Boot as below, and you will enter Maskrom Mode.
```
Kvim3# run maskrom
```
## Android/Linux Command Line
1.Refer to this guide to setup you serial tool for VIM3

2.Once again,make sure you've done the correct connections and setup.

3.Boot into Android or Linux command line.

4.For Linux,
```
$ sudo reboot loader
```
For Android,
```
$ su
#reboot loader
```
The system will reboot and enter upgrade Mode. You will see the sys-led turn on when you've entered Upgrade Mode (Loader Mode).

## TST Mode(Recommended)
1.Power on VIM3.

2.Quickly press the `function` key 3times in 2seconds,then release the key.

3.You will see the Power-Led(blue) blink fot about 3 seconds.After the Power-Led(blue) turns off, this indicates that the board is in Upgrade Mode(Maskrom Mode).
