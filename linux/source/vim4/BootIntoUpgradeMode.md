title: Boot Into Upgrade Mode
---

There are 4 ways to boot into upgrade mode:

* Keys Mode (Side-Buttons)
* Serial Mode
* TST Mode (Recommended)
* SD Booting Card

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
    <a class="nav-link" id="sdbooting-tab" data-toggle="tab" href="#sdbooting" role="tab" aria-controls="sdbooting" aria-selected="false">SD Booting Card</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="keys" role="tabpanel" aria-labelledby="keys-tab">

1. Power on VIM4.
2. Long press the `POWER` key without releasing it.
3. Short press the ‘RESET’ key and release it.
4. Count for 2 to 3 seconds, then release the `POWER` key to enter into Upgrade Mode. You will see the sys-led turn ON when you've entered Upgrade Mode.

</div>
<div class="tab-pane fade" id="serial" role="tabpanel" aria-labelledby="serial-tab">

1. Refer this [guide](SetupSerialTool.html) to setup your serial tool for VIM4.
2. Once again, make sure you've done the correct connections and setup.
3. Hit 'SPACE' key at the moment of bootup to stop autoboot. This step will let VIM4 boot into U-Boot Mode.
4. Type `run update` in the terminal of U-Boot as below. You will see the sys-led turn ON when you've entered Upgrade Mode.

</div>
<div class="tab-pane fade" id="tst" role="tabpanel" aria-labelledby="tst-tab">

1. Power-on VIM4.
2. Quickly press the `Function` key 3 times in 2 seconds, then release the key.
3. You will see the Power-LED (Blue) blink for about 3 seconds. After the Power-LED (Blue) turns OFF, this indicates that the board is in Upgrade Mode (Maskrom Mode).

</div>
<div class="tab-pane fade" id="sdbooting" role="tabpanel" aria-labelledby="sdbooting-tab">

1. [Create a SD booting Card]().
2. Insert the SD card to slot.
3. Refer this [guide](SetupSerialTool.html) to setup your serial tool for VIM4.
4. Power-on VIM4.
5. Hit `SPACE` key at the moment of bootup to stop autoboot. This step will let VIM4 boot into U-Boot Mode.
6. Type `run update` in the terminal of U-Boot as below..

![image]()

</div>
</div>
