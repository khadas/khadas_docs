title: Gsensor
---
Use Gsensor in Ubuntu.

## Gsensor Node

```sh
$ ll /dev/accel 
crw-rw-rw- 1 root root 10, 50 Mar 18 12:17 /dev/accel
```

## Gsensor Demo

Read and write nodes using the ioctl function.

### Source Code

The following source code only utilises the default settings to read data, additional functions can be implemented by the user.

```sh
$ wget https://dl.khadas.com/development/code/docs_source/gsensor.c
```

### Compile

Use `gcc` to compile this program directly on your SBC running Ubuntu.

```sh
$ gcc -o gsensor gsensor.c
```

### Test

Use your hands to rotate the SBC while this program is running, and you can see live changes in Gsensor data.

```sh
$ ./gsensor
gsensor node initialization success!
gsensor started successfully!
Receiving gsensor data...
gsensor_data -- x:-2112,y:16,z:16448
gsensor_data -- x:-2128,y:176,z:16128
gsensor_data -- x:-1632,y:2784,z:15968
gsensor_data -- x:7440,y:-3760,z:14608
gsensor_data -- x:-512,y:-7280,z:12128
gsensor_data -- x:-14384,y:-2336,z:11280
gsensor_data -- x:9952,y:-5264,z:15216
gsensor_data -- x:-6432,y:3760,z:24896
```
