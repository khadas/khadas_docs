title: 进入升级模式
---

有4种方式可以进入升级模式，如下：

* TST模式（推荐使用）
* 按键模式
* 串口模式
* SD启动卡

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="keys-tab" data-toggle="tab" href="#keys" role="tab" aria-controls="keys" aria-selected="true">TST模式（推荐使用）</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="serial-tab" data-toggle="tab" href="#serial" role="tab" aria-controls="serial" aria-selected="false">按键模式</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="tst-tab" data-toggle="tab" href="#tst" role="tab" aria-controls="tst" aria-selected="false">串口模式</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="sdbooting-tab" data-toggle="tab" href="#sdbooting" role="tab" aria-controls="sdbooting" aria-selected="false">SD启动卡</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="keys" role="tabpanel" aria-labelledby="tst-tab">

1. 通过USB数据线连接VIM4和电脑。
2. 在**2秒内连续按3次**`Func`按键后松开，会看到系统电源指示灯(红色)开始闪烁。
3. 闪烁3秒后电源指示灯(红色)会熄灭，表明板子已经进入升级模式。

</div>
<div class="tab-pane fade" id="serial" role="tabpanel" aria-labelledby="keys-tab">

1. 通过USB数据线连接VIM4和电脑。
2. 长按`POWER`按键不松开。
3. 短按`Reset`按键。
4. 数2-3秒后松开`POWER`按键会进入升级模式，进入升级模式后系统LED会点亮。

</div>
<div class="tab-pane fade" id="tst" role="tabpanel" aria-labelledby="serial-tab">

1. 通过USB数据线连接VIM4和电脑。
2. 参考[文档](SetupSerialTool.html)设置串口。
3. 确保串口连线正确。
4. 系统启动时按**空格键**进入串口命令行模式。
5. 执行`run update`命令进入升级模式，进入升级模式后系统LED灯会点亮。

</div>
<div class="tab-pane fade" id="sdbooting" role="tabpanel" aria-labelledby="sdbooting-tab">

1. [制作SD启动卡](create_bootable_sdcard.html)。
2. 参考[文档](SetupSerialTool.html)设置串口。
3. 通过USB数据线连接VIM4和电脑。
4. 系统启动时按**空格键**进入串口命令行模式。
5. 执行`run update`命令进入升级模式。

</div>
</div>
