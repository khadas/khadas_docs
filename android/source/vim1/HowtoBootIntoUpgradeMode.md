title: How To Boot Into Upgrade Mode
---

There are 4 different ways to boot into Upgrade Mode:

* Keys Mode (Side-Buttons)
* Serial Mode
* TST Mode (Recommended)
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

* Connect VIM1 to PC via USB-C cable.
* Long press the `Power` key without releasing it.
* Short press the `Reset` key and release it.
* Count to 10 seconds and release the `Power` key to enter into upgrade mode.

</div>
<div class="tab-pane fade" id="serial" role="tabpanel" aria-labelledby="serial-tab">

* Refer to this [guide](/vim1/SetupSerialTool.html) to setup your serial tool.
* Once again, ensure that you've done the right connections and setup.
* Hit any keys at the moment of bootup to stop autoboot. This step will let the board boot into u-boot mode.
* Type `run update` on the terminal of u-boot as below:

```
kvim# run update
```

</div>
<div class="tab-pane fade" id="tst" role="tabpanel" aria-labelledby="tst-tab">

* Connect VIM1 to PC via USB-C cable.
* Quickly press the `Func` key 3 times in 2 seconds, then release the key. 
* You will see the Power-LED (Blue) blink for about 3 seconds. After the Power-LED (Blue) turns OFF, this indicates that the board is in Upgrade Mode (Maskrom Mode).

{% note warn TST mode only available for VIM1 V14 or later. %}

{% endnote %}

</div>
<div class="tab-pane fade" id="mregister" role="tabpanel" aria-labelledby="mregister-tab">

* Connect VIM1 to PC via USB-C cable.
* Use a tweezer to short-circuit the two pads of the `M` register, and without releasing it.
* Short press the `Reset` key and release it to boot into upgrade mode.

![Image of MRegister_ShortCircuit](/images/vim1/MRegister_ShortCircuit.png)

{% note info Tips %}

The `M` register is located on the backside of your board.

{% endnote%}

</div>
</div> 
