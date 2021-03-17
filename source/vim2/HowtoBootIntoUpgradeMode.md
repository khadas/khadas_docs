title: Howto Boot Into Upgrade Mode
---

There are many different ways to boot into upgrade mode. They are listed below:

* Button Mode
* Serial Mode
* TST Mode
* MRegister Mode

Usually, the first two methods will meet the needs of most users. However, in some cases, for example if you've burned the incorrect u-boot, or your device can't even boot anymore, you can try out the MRegister mode.

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

1. Power on VIM2.
2. Long press the `Power` key without releasing it.
3. Short press the ‘Reset’ key and release it.
4. Count to 10 seconds and release the ‘Power’ key to enter into upgrade mode.

</div>
<div class="tab-pane fade" id="serial" role="tabpanel" aria-labelledby="serial-tab">

1. Refer to this [guide](/vim1/SetupSerialTool.html) to setup a serial tool for VIM2.
2. Make sure again that you've done the right connections and setup.
3. Hit any keys at the moment of booting to stop autoboot. This step will let VIM boot into u-boot mode.
4. Type `run update` in the terminal of u-boot as shown below:

```
kvim2# run update
```

</div>
<div class="tab-pane fade" id="tst" role="tabpanel" aria-labelledby="tst-tab">

1. Power-on VIM2.(Only VIM2 V14)
2. Quickly press the Function key 3 times in 2 seconds, then release the key.
3. You will see the Power-LED (Blue) blink for about 3 seconds.  
4. After the Power-LED (Blue) turns OFF, this indicates that the board is in Upgrade Mode (Maskrom Mode).

</div>
<div class="tab-pane fade" id="mregister" role="tabpanel" aria-labelledby="mregister-tab">

1. VIM2 V14

![Image of MRegister_ShortCircuit](/images/vim2/MRegister_ShortCircuit_V14.png)

2. VIM2 V12

![Image of MRegister_ShortCircuit](/images/vim2/MRegister_ShortCircuit.png)
*Tip: The `M` register is located on the underside of VIM2*

</div>
</div> 

