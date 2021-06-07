title: 如何进入升级模式
---

有很多种方式可以进入升级模式，如下：

* 按键模式
* 串口模式
* TST模式（推荐使用）
* MRegister模式

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

1. 给VIM3上电
2. 长按`POWER`按键不松开
3. 短按`Reset`按键。
4. 数2-3秒后松开`POWER`按键会进入升级模式，进入升级模式后系统led会点亮。

</div>
<div class="tab-pane fade" id="serial" role="tabpanel" aria-labelledby="serial-tab">

1. 参考[文档](/zh-cn/vim3/SetupSerialTool.html)设置串口。
2. 确保串口连线正确。
3. 系统启动时按任意按键进入串口命令行模式。
4. 执行`run update`命令进入升级模式，进入升级模式后系统led灯会点亮。

</div>
<div class="tab-pane fade" id="tst" role="tabpanel" aria-labelledby="tst-tab">

1. 给VIM3上电。
2. 在2S内连续按3次`Func`按键后松开。
3. 你会看到系统电源指示灯(蓝色)闪烁,3s后电源指示灯(蓝色)会熄灭，表明板子已经进入升级模式。

</div>
<div class="tab-pane fade" id="mregister" role="tabpanel" aria-labelledby="mregister-tab">

1. 给VIM3上电
2. 使用镊子短接`M`处的两个焊盘触点不松开
3. 短按复位按键进入升级模式

![image](/images/vim3/VIM3_M_Register.jpg)

</div>
</div>
