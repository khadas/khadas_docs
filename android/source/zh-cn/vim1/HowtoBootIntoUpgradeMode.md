title: 如何进入升级模式
---

有四种方式进入升级模式，如下：

* 按键模式
* 串口模式
* TST模式（推荐使用）
* `MRegister`模式

通常情况下普通用户会用到前三种方法，但是在某些特殊情况下，会用第四种方法，如：烧录了错误的Uboot导致系统无法启动，进入不了普通升级模式，这时可以采用第三或第四种方式。

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="keys-tab" data-toggle="tab" href="#keys" role="tab" aria-controls="keys" aria-selected="true">按键模式</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="serial-tab" data-toggle="tab" href="#serial" role="tab" aria-controls="serial" aria-selected="false">串口模式</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="tst-tab" data-toggle="tab" href="#tst" role="tab" aria-controls="tst" aria-selected="false">TST模式</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="mregister-tab" data-toggle="tab" href="#mregister" role="tab" aria-controls="mregister" aria-selected="false">MRegister模式</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="keys" role="tabpanel" aria-labelledby="keys-tab">

* 通过USB-C线连接VIM1和电脑。
* 长按电源按键不松开。
* 短按复位键。
* 10秒后松开电源按键就会进入升级模式。

</div>
<div class="tab-pane fade" id="serial" role="tabpanel" aria-labelledby="serial-tab">

* 参考 [这里](/zh-cn/vim1/SetupSerialTool.html) 去设置串口.
* 确保串口连接正常并正确配置
* 按任意键进入uboot命令行模式
* 输入如下命令进入升级模式

```
kvim# run update
```

</div>
<div class="tab-pane fade" id="tst" role="tabpanel" aria-labelledby="tst-tab">

* 通过USB-C线连接VIM1和电脑。
* 在2S内连续按3次`Func`按键后松开。
* 你会看到系统电源指示灯(蓝色)闪烁,3s后电源指示灯(蓝色)会熄灭，表明板子已经进入升级模式。

{% note warn 只有VIM1 V14或更新版本支持TST模式。 %}

{% endnote %}

</div>
<div class="tab-pane fade" id="mregister" role="tabpanel" aria-labelledby="mregister-tab">

* 通过USB-C线连接VIM1和电脑。
* 使用镊子短接`M`处的两个焊盘触点不松开
* 短按复位键会进入升级模式

![Image of MRegister_ShortCircuit](/images/vim1/MRegister_ShortCircuit.png)

{% note info 提示 %}

`M` 触点在VIM1板底部。

{% endnote %}

</div>
</div> 

