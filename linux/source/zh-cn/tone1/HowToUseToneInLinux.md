title: Linux下使用MPD
---

## 系统准备

为了获得最佳性能，您需要使用本机[Linux-ALSA](https://en.wikipedia.org/wiki/Advanced_Linux_Sound_Architecture)堆栈！如果要从Tone2 Pro或Tone1获得最佳的音频质量，请避免使用PulseAudio。

### 禁用Tone2 Pro，Tone1和其他Khadas音频设备的PulseAudio

注意: 如果您的系统中未安装PulseAudio，则可以跳过此步骤。要检查，请使用以下命令：

```sh
which pulseaudio || echo PulseAudio not installed
```

如果安装了PulseAudio，则创建自定义配置文件非常容易！

```sh
sudo tee /etc/udev/rules.d/89-pulseaudio-usb.rules <<END
# Disable PulseAudio for next usb-audio devices by usb-id
# Tone2 Pro
ATTRS{idVendor}=="3353", ATTRS{idProduct}=="a002", ENV{PULSE_IGNORE}="1"
# Tone2
ATTRS{idVendor}=="3353", ATTRS{idProduct}=="a004", ENV{PULSE_IGNORE}="1"
# Tone1
ATTRS{idVendor}=="3353", ATTRS{idProduct}=="a001", ENV{PULSE_IGNORE}="1"
# Tea
ATTRS{idVendor}=="3353", ATTRS{idProduct}=="a005", ENV{PULSE_IGNORE}="1"
# Tea Pro
ATTRS{idVendor}=="3353", ATTRS{idProduct}=="a006", ENV{PULSE_IGNORE}="1"
# Tone1 with XMOS usbid
ATTRS{idVendor}=="20b1", ATTRS{idProduct}=="000a", ENV{PULSE_IGNORE}="1"

# just one line for all XMOS devices
ATTRS{idVendor}=="20b1", ENV{PULSE_IGNORE}="1"
# just one line for all Khadas Audio devices
ATTRS{idVendor}=="3353", ENV{PULSE_IGNORE}="1"

END
```

现在，只需将Tone2 Pro或Tone1设备重新插入计算机，新配置即可生效。

### 检查您的Tone2 Pro或Tone1是否支持本机DSD播放

通过下面的命令就能确认,

```sh
grep -H DSD_U32_BE /proc/asound/card?/stream0 && \
echo Native DSD support - ok
```

###  如果DSD不支持,应该怎么操作?

您的Linux系统使用的是旧内核！请使用命令“ uname -r”检查您的内核版本，并检查[此主题](https://forum.khadas.com/t/does-the-v2-00-firmware-sound-better/10176/6)，然后升级您的Linux内核。

## 如何显示所有支持的格式

使用终端获取所有支持的音频文件格式的列表：

```sh
grep "" /proc/asound/card?/stream0
# or 
grep -e usb -e Format -e Bits -e Rates /proc/asound/card?/stream0
```

示例

```sh
Khadas Tone2 Pro at usb-0000:03:00.4-1, high speed : USB Audio
    Format: S32_LE
    Rates: 44100, 48000, 88200, 96000, 176400, 192000, 352800, 384000, 705600, 768000
    Bits: 32
    Format: S32_LE
    Rates: 44100, 48000, 88200, 96000, 176400, 192000, 352800, 384000, 705600, 768000
    Bits: 24
    Format: SPECIAL DSD_U32_BE
    Rates: 44100, 48000, 88200, 96000, 176400, 192000, 352800, 384000, 705600, 768000
    Bits: 32
```

##  通过MDP播放器使用tone1 / tone2 pro

###  关于MPD

[音乐播放器守护程序MPD](https://www.musicpd.org/)是一种灵活，功能强大的服务器端应用程序，用于播放音乐。通过插件和库，它可以播放各种声音文件，同时受到其网络协议的控制。

### 为什么是 MPD?

+ 最高性能
+ 完美的音频播放
+ [本机DSD播放](https://en.wikipedia.org/wiki/Direct_Stream_Digital)

### MPD 用户手册

+ https://www.musicpd.org/doc/html/user.html
+ https://wiki.archlinux.org/index.php/Music_Player_Daemon
+ `man mpd`

### 安装MPD (示例)

```sh
sudo apt-get install mpd mpc ncmpc
```

### 准备MPD (示例)

创建`music`和`playlists`文件夹,要播放的文件放到`music`文件夹下就可以了

```sh
mkdir -p ~/mpd/music ~/mpd/playlists
```

### 最小的MPD配置文件（示例）

MPD在`$XDG_CONFIG_HOME/mpd/mpd.conf`中搜索配置文件，然后在~/.mpdconf`中搜索，然后在`/etc/mpd.conf`中搜索，或者...阅读更多`man mpd`。

创建一个配置文件

```sh
$ nano ~/.mpdconf
```

```sh
# ~/.mpdconf - minimal mpd configuration for bit-perfect DSD playback

music_directory "~/mpd/music"
playlist_directory "~/mpd/playlists"
db_file "~/mpd/base"
log_file "/dev/null"
pid_file "~/mpd/mpd.pid"
state_file "~/mpd/mpd.state"
sticker_file "~/mpd/sticker.sql"

group "audio"
#bind_to_address "localhost"
bind_to_address "any"
bind_to_address "~/mpd/mpd.socket"
follow_outside_symlinks "yes"
follow_inside_symlinks "yes"
auto_update "yes"
auto_update_depth "6"

#zeroconf_enabled "yes"
#zeroconf_name "Music Player @ %h"

audio_output {
type "alsa"
name "Tone2"
# use only hardware devices for bit-perfect playback
device "hw:CARD=Pro,DEV=0"
# optimal buffer/period size for maximum performance
# about 2% system usage only ;)
buffer_time "409600"
period_time "40960"
# only use hardware volume control
mixer_type "null"
# software volume control, you may/may not need this ;)
# mixer_type "software"

# disable all format conversions
auto_resample "no"
auto_channels "no"
auto_format	"no"
# Disable DSD over PCM, as we have native playback from the Linux kernel
# dop		"yes"
}

audio_output {
type "alsa"
name "Tone1"
device  "hw:CARD=Control,DEV=0"
buffer_time "409600"
period_time "40960"
mixer_type "null"
auto_resample "no"
auto_channels "no"
auto_format "no"
#dop "yes"
}

audio_output {
	type "null"
	name "NULL"
}

filesystem_charset "UTF-8"
audio_buffer_size "512"
#buffer_before_play "5"
```

### 如何获取正确的ALSA设备名称，以获取位完美播放

+ `aplay -L|grep -A1 ^hw:` - 完整列表
+ `aplay -L|grep -A1 ^hw:|grep USB -B1` - 只有USB的列表
+ `aplay -L|grep -A1 ^hw:|grep Tone -B1|head -n1` - 值相关tone的列表


### 启动MPD服务

系统开机会启动MPD服务,我们需要在普通用户下重启这个服务

```sh
$ sudo systemctl stop mpd
$ sudo systemctl stop mpd.socket
$ systemctl --user restart mpd
```

### MPC基本用户手册

mpc是Music Player守护程序（MPD）的命令行客户端。它连接到MPD并根据传递给它的命令和参数对其进行控制。如果未给出命令，则当前状态为printe d（与“ mpc状​​态”相同）。

```sh
mpc add DSD_test_512.44100.2.dsf
mpc add '09 - Faith No More - Be Aggressive.flac'
mpc add http://s4-webradio.rockantenne.de/alternative
# play it
mpc play
mpc repeat on
mpc
mpc outputs
mpc stop
mpc clear
mpc update
# get full commands list
mpc help
```

### 如何检查我的音调板当前使用哪种输出格式和速率？

```sh
cat $(dirname /proc/asound/card?/stream0)/pcm?p/sub?/hw_params
```

本机512-DSD输出示例:

```sh
access: RW_INTERLEAVED
format: DSD_U32_BE
subformat: STD
channels: 2
rate: 705600 (705600/1)
period_size: 28902
buffer_size: 131072
```

### MPD客户端接口

 + mpc   - 命令行客户端 (.必须)
 + ncmpc - 通用控制台GUI (必须)
 + [M.A.L.P.](https://play.google.com/store/apps/details?id=org.gateshipone.malp) - Android客户端
 + [IOS MPD 播放器](https://github.com/rbackhouse/MaximumMPD) - IOS客户端
 + 完整列表 - https://www.musicpd.org/clients/

