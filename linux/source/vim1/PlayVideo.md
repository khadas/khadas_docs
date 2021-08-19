title: Player Video
---

{% note info Only applies to Linux 4.9 OS. %}
{% endnote%}

The system preinstalled two video player with hardware decoding support.

* **kplayer** - a command video player with hardware decoding support
* **kodi** - a free and open-source media player software application developed by the XBMC Foundation


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

**Kplayer** is a command video player with hardware decoding support, so you need to switch to command line interface to player videos, if you use desktop images, you can use **Ctrl+Alt+F1** switch to command line interface.

Usage: `kplayer xxx.mp4`。

```bash
khadas@Khadas:~$ kplayer 720P.mkv 
```

Use **Ctrl+C** to exit video player.

{% note info Info %}
Use **Ctrl+Alt+F7** switch to desktop environment.
{% endnote %}

</div>
<div class="tab-pane fade" id="kodi" role="tabpanel" aria-labelledby="kodi-tab">

{% note warn VIM2 doesn't support Kodi. %}
{% endnote %}

Just type **kodi** to launch it in command line interface.

You can use **Applications->Sound & Video->Kodi** to launch it in desktop environment.

</div>
</div>

