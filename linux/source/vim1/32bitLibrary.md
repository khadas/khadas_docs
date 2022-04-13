title: 32-bit Library
---

This library is for executing 32-bit code within a 64-bit environment.

## Test Code

1. Sample code.

```c
#include <stdio.h>

int main(int argc, char *argv[])
{
    printf("Hello world !!!\n");

    return 0;
}
```

2. Compile and run.

```
$ arm-linux-gnueabihf-gcc -o test test.c
$ ./test   
-bash: ./test: No such file or directory
```

## Install the 32-bit package

```bash
$ sudo apt-get update
$ sudo apt-get -y install libc6:armhf 
$ ./test
Hello World!
```
`libc6` is the name of the package, whilst `armhf` indicates that the package is 32-bit.
