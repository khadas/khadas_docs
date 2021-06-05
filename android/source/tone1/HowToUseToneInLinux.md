title: Tone with MPD In Linux
---

## System Preparation

For maximum performance, you need to use the native [Linux-ALSA](https://en.wikipedia.org/wiki/Advanced_Linux_Sound_Architecture) stack! Please avoid PulseAudio if you want to obtain the best audio quality from your Tone2 Pro or Tone1.


### Disable PulseAudio for Tone2 Pro, Tone1, and other Khadas Audio Devices

NOTE: You can skip this step if PulseAudio not installed in your system. To check, use the command:

```sh
which pulseaudio || echo PulseAudio not installed
```

If PulseAudio is installed, it is very easy to create a custom configuration file!

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

Now just re-plug your Tone2 Pro or Tone1 device to your machine for the new configuration to take effect.

### Check If Native DSD Playback is Supported on Your Tone2 Pro or Tone1

Enter the following command into Terminal:

```sh
grep -H DSD_U32_BE /proc/asound/card?/stream0 && \
echo Native DSD support - ok
```

###  What should I do, if DSD is not supported?

Your Linux system is using an old kernel! Please check your kernel version using the command `uname -r`, and check this topic https://forum.khadas.com/t/does-the-v2-00-firmware-sound-better/10176/6, and then upgrade your Linux kernel.

## How to Display All Supported Formats

Get a list of all supported audio file formats using Terminal:

```sh
grep "" /proc/asound/card?/stream0
# or 
grep -e usb -e Format -e Bits -e Rates /proc/asound/card?/stream0
```

Example Output:

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

##  Use MPD Audio Player with Tone2 Pro and Tone1

###  About MPD

[Music Player Daemon (MPD)](https://www.musicpd.org/) is a flexible, powerful, server-side application for playing music. Through plugins and libraries it can play a variety of sound files while being controlled by its network protocol.

### Why MPD?

+ Maximum performance - YES
+ Bit-perfect audio playback - YES
+ [Native DSD playback](https://en.wikipedia.org/wiki/Direct_Stream_Digital) - YES

### MPD User Manuals

+ https://www.musicpd.org/doc/html/user.html
+ https://wiki.archlinux.org/index.php/Music_Player_Daemon
+ `man mpd`

### Install MPD (example)

```sh
sudo apt-get install mpd mpc ncmpc
```

### Prepare MPD (example)

Create music folders and the mpd config file (your music library must be accessible from these folders)

```sh
mkdir -p ~/mpd/music ~/mpd/playlists
```

### Minimal MPD Config File (example)

MPD searches for a config file in `$XDG_CONFIG_HOME/mpd/mpd.conf` then `~/.mpdconf` then `/etc/mpd.conf` or ... read more `man mpd`

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

### How to Get the Proper ALSA Device Name, to get Bit-Perfect Playback

+ `aplay -L|grep -A1 ^hw:` - full list
+ `aplay -L|grep -A1 ^hw:|grep USB -B1` - only usb list
+ `aplay -L|grep -A1 ^hw:|grep Tone -B1|head -n1` - only for Tone board


### Start MPD service

The system will automatically start the MPD service, we need to restart this service with ordinary users

```sh
$ sudo systemctl stop mpd
$ sudo systemctl stop mpd.socket
$ systemctl --user restart mpd
```

### Basic MPC Usage Example

mpc  is  a command-line client for the Music Player Daemon (MPD).  It connects to a MPD and controls it according to commands and arguments passed to it.  If no command is given, the current status is printed (same as "mpc status").

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

### How to Check Which Output Format and Rate is Currently Used for My Tone Board?

```sh
cat $(dirname /proc/asound/card?/stream0)/pcm?p/sub?/hw_params
```

Native 512-DSD output example:

```sh
access: RW_INTERLEAVED
format: DSD_U32_BE
subformat: STD
channels: 2
rate: 705600 (705600/1)
period_size: 28902
buffer_size: 131072
```

### MPD Client Interfaces

 + mpc   - command-line client (must have)
 + ncmpc - common console GUI  (must have)
 + [M.A.L.P.](https://play.google.com/store/apps/details?id=org.gateshipone.malp) - android client
 + [A MPD client for iOS](https://github.com/rbackhouse/MaximumMPD) - iOS player
 + full list - https://www.musicpd.org/clients/

All are welcome to give comments, replies and suggestions for improvement!


