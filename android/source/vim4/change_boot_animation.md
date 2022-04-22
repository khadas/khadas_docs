title: Change Boot Animation
---

## Explanation of Bootanimation Content
Android boot animation is composed of a series of PNG pictures that act as frames of a continuous animation. Each PNG frame is saved in a compressed format.

The boot animation file name is `bootanimation.zip`, the format is `.zip` and the compression method is `store`.

The animation file includes one `desc.txt` file and directories labelled `part0` to `part4`.

```
-rw-rw-rw- 1 lxx lxx   74 Aug 17  2015 desc.txt
drwxrwxrwx 2 lxx lxx 4096 Mar 18 11:10 part0
drwxrwxrwx 2 lxx lxx 4096 Mar 18 11:11 part1
drwxrwxrwx 2 lxx lxx 4096 Mar 18 11:11 part2
drwxrwxrwx 2 lxx lxx 4096 Mar 18 13:41 part3
drwxrwxrwx 2 lxx lxx 4096 Mar 18 13:42 part4
```

* `desc.txt`: animation property description file. Used to set the animation pixel (size), number of frames, number of cycles, file name, etc. 

{% note info Tip %}
The file format needs to be set to ANSI
{% endnote %}

* `Part0`: folder containing first stage animation frames.

* `Part1`: folder containing second stage animation frames.


`desc.txt` file contents:
```
543 143 60
c 1 30 part0
c 1 0 part1
c 0 0 part2
c 1 64 part3
c 1 15 part4
```
`543 143 60`
`543`: the pixel width of the picture
`143`: the pixel height of the picture
`60` : frame rate

`c 1 30 part0`
   `c` : the flag bit
   `1` : the number of cycles is 1 (`0` for infinite loop)
   `30`: the number of frames contained within part0
`part0": the directory of the picture
We can there calculate the time-duration of part0 as: `30 * (1 / 60) seconds`. 

## Generate and Replace Bootanimation

After you create the part folders and `desc.txt`, you can use following Linux command to generate `bootanimation.zip`:

```
$ zip -r -X -Z store bootanimation part*/* desc.txt 
``` 
Push `bootanimation.zip` to `system/media`, and restart your SBC for changes to take effect.

```
$ adb root
$ adb remount
$ adb push bootanimation.zip system/media/bootanimation.zip
```

