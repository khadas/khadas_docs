title: 播放视频
---

{% note info 仅仅针对4.9内核Ubuntu固件。 %}
{% endnote%}

系统默认安装了两个支持硬件解码的播放器：

* **kplayer** - 支持硬件解码的命令行界面视频播放器
* **kodi** - XBMC基金会开发的开源媒体播放器


<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="kplayer-tab" data-toggle="tab" href="#kplayer" role="tab" aria-controls="kplayer" aria-selected="true">Kplayer</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="kodi-tab" data-toggle="tab" href="#kodi" role="tab" aria-controls="kodi" aria-selected="false">Kodi</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="kplayer" role="tabpanel" aria-labelledby="kplayer-tab">

**Kplayer**是一个支持硬件解码的命令行界面视频播放器，因此需要切换到命令行模式下进行视频播放，如果使用的是桌面系统，需要使用**Ctrl+Alt+F1**切换到命令行界面。

使用方法为：`kplayer xxx.mp4`。

```bash
khadas@Khadas:~$ kplayer 720P.mkv 
```

使用**Ctrl+C**可以退出播放界面。

{% note info 提示 %}
如果想重新返回桌面系统，可以通过**Ctrl+Alt+F7**切换到桌面环境。
{% endnote %}

</div>
<div class="tab-pane fade" id="kodi" role="tabpanel" aria-labelledby="kodi-tab">

{% note warn VIM2不支持Kodi %}
{% endnote %}

在命令行界面下直接通过命令**kodi**即可打开。

如果是桌面环境，可以通过：**Applications->Sound & Video->Kodi**打开。

</div>
</div>

