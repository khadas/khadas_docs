title: Gsensor
---
Use the Gsensor in Ubuntu.

## Gsensor Node

The Gsensor node is located within the `/dev` directory.

```sh
$ ll /dev/accel 
crw-rw-rw- 1 root root 10, 50 Mar 18 12:17 /dev/accel
```

## Gsensor Demo

Read and write nodes using the ioctl function.

### Source Code

The following source code only utilises the default settings to read data, additional functions can be implemented by the user.

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
                printf("gsensor node initialization failure...\n");
                exit(-1);
        }else{
                printf("gsensor node initialization success!\n");
        }

        if(ioctl(gsensor_fd, GSENSOR_IOCTL_START, NULL) == -1) {
                printf("gsensor failed to start... \n");
                close(gsensor_fd);
                exit(-1);
        }else{
                printf("gsensor started successfully!\n");
        }

        printf("Receiving gsensor data...\n");
        while(1){

                if(ioctl(gsensor_fd, GSENSOR_IOCTL_GETDATA, &gsensor_data) == -1) {
                        printf("Failed to get gsensor data... \n");
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

### Compile

Use `gcc` to compile this program directly on your SBC running Ubuntu.

```sh
$ gcc -o gsensor_sample_demo gsensor_sample_demo.c
```


### Run

Use your hands to rotate the SBC whilst this program is running, and you can see live changes in Gsensor data.

```sh
$ ./gsensor_sample_demo
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
