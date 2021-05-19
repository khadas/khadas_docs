title: How To Boot Into Upgrade Mode
---

There are 4 ways to boot into Upgrade Mode:

1. Keys Mode (Side-Buttons)
2. Serial Mode
3. TST Mode (Recommended)
4. MRegister Mode

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

1. Power on VIM3.
2. Long press the `POWER` key without releasing it.
3. Short press the ‘Reset’ key and release it.
4. Count for 2 to 3 seconds, then release the `POWER` key to enter into Upgrade Mode. You will see the sys-led turn ON when you've entered Upgrade Mode.

</div>
<div class="tab-pane fade" id="serial" role="tabpanel" aria-labelledby="serial-tab">

1. Refer this [guide](/vim3/SetupSerialTool.html) to setup your serial tool for VIM3.
2. Once again, make sure you've done the correct connections and setup.
3. Hit any keys at the moment of bootup to stop autoboot. This step will let VIM3 boot into U-Boot Mode.
4. Type `run update` in the terminal of U-Boot as below. You will see the sys-led turn ON when you've entered Upgrade Mode.

</div>
<div class="tab-pane fade" id="tst" role="tabpanel" aria-labelledby="tst-tab">

1. Power-on VIM3.
2. Quickly press the `Function` key 3 times in 2 seconds, then release the key.
3. You will see the Power-LED (Blue) blink for about 3 seconds. After the Power-LED (Blue) turns OFF, this indicates that the board is in Upgrade Mode (Maskrom Mode).

</div>
<div class="tab-pane fade" id="mregister" role="tabpanel" aria-labelledby="mregister-tab">

1. Power on VIM3.
2. Use a tweezer to short-circuit the two pads of the `M` register, and without releasing...
3. Short press the `Reset` key and then release it, to boot into upgroup mode

![image](/images/vim3/VIM3_M_Register.jpg)

</div>
</div>
