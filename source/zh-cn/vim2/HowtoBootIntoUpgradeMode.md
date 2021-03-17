title: 如何进入升级模式
---

有四种方式进入升级模式，如下:

* 按键模式
* 串口模式
* TST模式
* `MRegister`模式
通常情况下普通用户会用到前三种方法，但是在某些特殊情况下，会用第四种方法，如：烧录了错误的Uboot导致系统无法启动，进入不了普通升级模式，这时可以采用第四种方式`MRegister`模式。

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

1. 给VIM2上电
2. 长按电源按键不松开
3. 短按复位键
4. 10秒后松开电源按键就会进入升级模式

</div>
<div class="tab-pane fade" id="serial" role="tabpanel" aria-labelledby="serial-tab">

1. 参考 [这里](/zh-cn/vim1/SetupSerialTool.html) 去设置串口.
2. 确保串口连接正常并正确配置  
3. 按任意键进入uboot命令行模式 
4. 输入`update`命令进入升级模式

```
kvim2# run update
```

</div>
<div class="tab-pane fade" id="tst" role="tabpanel" aria-labelledby="tst-tab">

1. 给VIM2上电
2. 使用镊子短接`M`处的两个焊盘触点不松开
3. 短按复位键会进入升级模式

</div>
<div class="tab-pane fade" id="mregister" role="tabpanel" aria-labelledby="mregister-tab">

1. VIM2 V14

![Image of MRegister_ShortCircuit](/images/vim2/MRegister_ShortCircuit_V14.png)

2. VIM2 V12

![Image of MRegister_ShortCircuit](/images/vim2/MRegister_ShortCircuit.png)

*提示:  `M` 触点在VIM板底部*

</div>
</div> 


