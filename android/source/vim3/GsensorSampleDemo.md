title: Gsensor sample demo
---

## Gsensor node

Gsensor node in `/dev` directory

```sh
$ ll /dev/accel 
crw-rw-rw- 1 root root 10, 50 Mar 18 12:17 /dev/accel
```

## Gsensor demo

The Gsensor example is to read and write nodes through the ioctl function

### source code

The source code only realizes the use of default settings to read data, other functions users can implement by yourself

```c
#include <stdio.h>
#include <sys/ioctl.h>
#include <fcntl.h>

#define GBUFF_SIZE                12
#define GSENSOR_IOCTL_MAGIC       'a'

#define GSENSOR_IOCTL_INIT              _IO(GSENSOR_IOCTL_MAGIC, 0x01)
#define GSENSOR_IOCTL_RESET             _IO(GSENSOR_IOCTL_MAGIC, 0x04)
#define GSENSOR_IOCTL_CLOSE             _IO(GSENSOR_IOCTL_MAGIC, 0x02)
#define GSENSOR_IOCTL_START             _IO(GSENSOR_IOCTL_MAGIC, 0x03)
#define GSENSOR_IOCTL_GETDATA           _IOR(GSENSOR_IOCTL_MAGIC, 0x08, char[GBUFF_SIZE+1])
#define GSENSOR_IOCTL_APP_SET_RATE      _IOW(GSENSOR_IOCTL_MAGIC, 0x10, short)
#define GSENSOR_IOCTL_GET_CALIBRATION   _IOR(GSENSOR_IOCTL_MAGIC, 0x11, int[3])


struct sensor_axis {
    int x;
    int y;
    int z;
};

char *gsensor_device = "/dev/accel";
int gsensor_fd = -1;

int main(int argc, char **argv){

        struct sensor_axis gsensor_data;

        gsensor_fd = open(gsensor_device, O_RDWR);

        if (0 > gsensor_fd){
                printf("gsensor node open failed ...\n");
                exit(-1);
        }else{
                printf("gsensor node open success!!!\n");
        }

        if(ioctl(gsensor_fd, GSENSOR_IOCTL_START, NULL) == -1) {
                printf("gsensor start failed ... \n");
                close(gsensor_fd);
                exit(-1);
        }else{
                printf("gsensor start sueecss !!!\n");
        }

        printf("start to get gsensor data ...\n");
        while(1){

                if(ioctl(gsensor_fd, GSENSOR_IOCTL_GETDATA, &gsensor_data) == -1) {
                        printf("gsensor get data faile ... \n");
                        close(gsensor_fd);
                        exit(-1);
                }

                printf("gsensor_data -- x:%d,y:%d,z:%d \n", gsensor_data.x, gsensor_data.y, gsensor_data.z);
                sleep(1);
        }
        close(gsensor_fd);

		return 0;
}
```

### compile

Use `gcc` to compile directly on the board

```sh
$ gcc -o gsensor_sample_demo gsensor_sample_demo.c
gsensor_sample_demo.c: In function ‘main’:
gsensor_sample_demo.c:34:3: warning: implicit declaration of function ‘exit’ [-Wimplicit-function-declaration]
   34 |   exit(-1);
      |   ^~~~
gsensor_sample_demo.c:34:3: warning: incompatible implicit declaration of built-in function ‘exit’
gsensor_sample_demo.c:4:1: note: include ‘<stdlib.h>’ or provide a declaration of ‘exit’
    3 | #include <fcntl.h>
  +++ |+#include <stdlib.h>
    4 |
gsensor_sample_demo.c:41:3: warning: implicit declaration of function ‘close’; did you mean ‘pclose’? [-Wimplicit-function-declaration]
   41 |   close(gsensor_fd);
      |   ^~~~~
      |   pclose
gsensor_sample_demo.c:42:3: warning: incompatible implicit declaration of built-in function ‘exit’
   42 |   exit(-1);
      |   ^~~~
gsensor_sample_demo.c:42:3: note: include ‘<stdlib.h>’ or provide a declaration of ‘exit’
gsensor_sample_demo.c:53:4: warning: incompatible implicit declaration of built-in function ‘exit’
   53 |    exit(-1);
      |    ^~~~
gsensor_sample_demo.c:53:4: note: include ‘<stdlib.h>’ or provide a declaration of ‘exit’
gsensor_sample_demo.c:57:3: warning: implicit declaration of function ‘sleep’ [-Wimplicit-function-declaration]
   57 |   sleep(1);
      |   ^~~~~
```


### Run

Rotate the board while running, you can see the changes in gsensor data

```sh
$ ./gsensor_sample_demo
gsensor node open success!!!
gsensor start sueecss !!!
start to get gsensor data ...
gsensor_data -- x:-2112,y:16,z:16448
gsensor_data -- x:-2128,y:176,z:16128
gsensor_data -- x:-1632,y:2784,z:15968
gsensor_data -- x:7440,y:-3760,z:14608
gsensor_data -- x:-512,y:-7280,z:12128
gsensor_data -- x:-14384,y:-2336,z:11280
gsensor_data -- x:9952,y:-5264,z:15216
gsensor_data -- x:-6432,y:3760,z:24896
```


