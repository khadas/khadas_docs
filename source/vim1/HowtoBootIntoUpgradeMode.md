title: How To Boot Into Upgrade Mode
---

There are 4 different ways to boot into Upgrade Mode:

* Keys Mode (Side-Buttons)
* Serial Mode
* TST Mode
* MRegister Mode

Usually, the first two methods will meet the needs of most users. However, in some cases such as burning an incorrect u-boot, or if your device is unable to boot at all, you can attempt to rectify the issue with the MRegister mode.

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="keys-tab" data-toggle="tab" href="#keys" role="tab" aria-controls="keys" aria-selected="true">Keys Mode</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="serial-tab" data-toggle="tab" href="#serial" role="tab" aria-controls="serial" aria-selected="false">Serial Mode</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="tst-tab" data-toggle="tab" href="#tst" role="tab" aria-controls="tst" aria-selected="false">TST Mode</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="mregister-tab" data-toggle="tab" href="#mregister" role="tab" aria-controls="mregister" aria-selected="false">MRegister Mode</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="keys" role="tabpanel" aria-labelledby="keys-tab">

1. Power on VIM1.
2. Long press the `Power` key without releasing it.
3. Short press the ‘Reset’ key and release it.
4. Count to 10 seconds and release the ‘Power’ key to enter into upgrade mode

</div>
<div class="tab-pane fade" id="serial" role="tabpanel" aria-labelledby="serial-tab">

1. Refer to this [guide](/vim1/SetupSerialTool.html) to setup your serial tool for VIM1.
2. Once again, ensure that you've done the right connections and setup.
3. Hit any keys at the moment of bootup to stop autoboot. This step will let VIM1 boot into u-boot mode.
4. Type `run update` on the terminal of u-boot as below:

```
kvim# run update
```

</div>
<div class="tab-pane fade" id="tst" role="tabpanel" aria-labelledby="tst-tab">

1. Power-on VIM1 (v14 only).
2. Quickly press the `Function` key 3 times in 2 seconds, then release the key. 
3. You will see the Power-LED (Blue) blink for about 3 seconds. After the Power-LED (Blue) turns OFF, this indicates that the board is in Upgrade Mode (Maskrom Mode).

</div>
<div class="tab-pane fade" id="mregister" role="tabpanel" aria-labelledby="mregister-tab">

1. Power on VIM1.
2. Use a tweezer to short-circuit the two pads of the `M` register, and without releasing it...
3. Short press the `Reset` key and release it to boot into upgrade mode

![Image of MRegister_ShortCircuit](/images/vim1/MRegister_ShortCircuit.png)
*Tip: The `M` register is located on the backside of your VIM1*

</div>
</div> 
