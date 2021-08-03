title: How To Change Boot Animation
---

* Where is original Animation file

Animation file is stored in the `device/khadas/common/products/mbox/bootanimation.zip` in android code.

* Where is the Animation file on vim3 device

The Animation zip is stored on system/media/bootanimation.zip directory

## Explanation of bootanization content
Android boot animation is composed of a series of continuous PNG pictures as a frame of animation, and each frame of PNG picture is saved in a compressed way. The saved file name is bootanimation.zip , compression mode must be storage compression. It generally includes one desc.txt file and some part directories

```
root@lxx-NUC10i7FNH:/home/lxx/Downloads/android_pie/vim3/device/khadas/common/products/mbox/bootanimation# ls -l
total 24
-rw-rw-rw- 1 lxx lxx   74 Aug 17  2015 desc.txt
drwxrwxrwx 2 lxx lxx 4096 Mar 18 11:10 part0
drwxrwxrwx 2 lxx lxx 4096 Mar 18 11:11 part1
drwxrwxrwx 2 lxx lxx 4096 Mar 18 11:11 part2
drwxrwxrwx 2 lxx lxx 4096 Mar 18 13:41 part3
drwxrwxrwx 2 lxx lxx 4096 Mar 18 13:42 part4

```

**1)** desc.txt : animation property description file. Used to set the animation pixel (size), number of frames, number of cycles, file name, etc. The file format needs to be set to ANSI format.

**2)** Part0: first stage animation picture catalog. Store each PNG picture folder

**3)** Part1: second stage animation picture catalog. Store each PNG picture folder,Other part folder is similar


desc.txt file contents are as follows:

```
543 143 60
c 1 30 part0
c 1 0 part1
c 0 0 part2
c 1 64 part3
c 1 15 part4

```
`543 143 60`:The first two numbers represent the pixel width and height of the picture, and 60 represents the number of frames, that is, the number of pictures played in one second

`c 1 30 part0`: c stands for the flag bit, 1 means the number of cycles is 1,0 means infinite loop, 30 is the interval time between current part0 stage and part1 stage ,the time is 30x(1/60)s, and part0 represents the corresponding folder,Other lines are similar

## How To Generate Bootanimation.zip

After you custom part folders and desc.txt  ,then you can use following linux command to generate bootanimation.zip

```
zip -r -X -Z store bootanimation part*/* desc.txt 

``` 
push bootanimation.zip to system/media ,restart device to confirm

```
adb push bootanimation.zip system/media/bootanimation.zip

```

