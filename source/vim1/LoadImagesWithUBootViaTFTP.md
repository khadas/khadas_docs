title: Load Images with U-Boot via TFTP
---

With a network connection available, U-Boot can load images quickly and easily via TFTP.

### Preperations
- [x] [Setup TFTP Server for U-Boot](/vim1/SetupTFTPServer.html)

We'll start off with a terminal connected to the board and sitting at the U-Boot prompt.



### Upgrade bootloader

```
kvim# tftp 1080000 u-boot.bin
kvim# store rom_write 1080000 0 100000
```

**Note**: You might also need to clean up the old U-Boot environment value stored at `env` partition, and save as new value:
```
kvim# defenv
kvim# saveenv
```

Run `reset` or press `Reset` Button to boot from the new bootloader:
```
kvim# reset
```

### boot.img
Load image into memeory, then run `bootm` to boot from memory:
```
kvim# tftp 1080000 boot.img
kvim# bootm
```

### Linux Kernel Image
Download and run linux:
```
kvim# tftp 1080000 zImage
kvim# tftp 10000000 uInitrd
kvim# tftp 20000000 kvim.dtb 
kvim# booti 1080000 10000000 20000000"
```
### Troubleshootings
Failed to `saveenv`:
```
kvim# saveenv
Saving Environment to aml-storage...
get partition info failed !!
kvim#
```

You need to write DTB first!
### Resources
* [U-Boot Offical Guidance](http://www.denx.de/wiki/view/DULG/UBoot)
