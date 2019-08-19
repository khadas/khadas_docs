# Windows
## 1. Load Partition Config

![load partition config](/images/edge/load_partition_config.png)
![Android tool](/images/edge/android_tool.png)

### 1.1 Modify Partition Config

![Modeify partition config](/images/edge/modify_partitio_config.png)
![Modeify partition config2](/images/edge/modify_partitio_config2.png)

The contents of the partition profile published with the new tool is as shown in the figure above, in most cases there is a certain degree of difference. The user can load a project partition configuration by first right-clicking in the blank space of the partition configuration window, and then selecting "Load Config". If you want to load a specific partition profile when the tool starts, you can modify the DEFAULT_IMAGE_CONFIG entry in the Config.ini file.

![config ini](/images/edge/config_ini.png)
## 2. Export Config

![export config](/images/edge/export_config.png)
After completing a partition configuration, the configuration can be exported from the tool. Right-click in the blank space of the partition configuration window, and select "Export Config", then select a directory to save the file. If you replace the config.cfg file found within this tool's directory, your currently saved configuration will be loaded at tool startup.

## 3. Burn one or more Partition Mirrors
![burn partition](/images/edge/burn_partiton_mirrors.png)

# Linux
```sh
unzip Linux_Upgrade_Tool_v1.47.zip
cd Linux_Upgrade_Tool_v1.47
sudo mv upgrade_tool /usr/local/bin
sudo chown root:root /usr/local/bin/upgrade_tool
sudo chmod a+x /usr/local/bin/upgrade_tool
```
**`Erasing Flash`** is required if the board is upgraded from  `android 7.1`  to  `android 9.0`  firmware, or the board is downgraded from  `android 9.0`  to  `android 7.1`.
```sh
sudo upgrade_tool ef update.img
```
Burning the firmware's update.img:
```sh
sudo upgrade_tool uf update.img
```
### Burn one or more Partition Mirrors:
Currently known abbreviated partitions are - s (system partition), - k (kernel partition), - b (boot partition), - r (recovery partition), - m (misc partition), - u (uboot partition), - t (trust partition) and - re (resource partition). Examples are given to illustrate these definitions:

When the device has burned a parameter, write a single system partition mirror command:
```sh
sudo upgrade_tool di -s /path/to/system.img
```
If the device has not burned the parameter, write a single system partition mirror command:
```sh
sudo upgrade_tool di -p parameter -s /path/to/system.img
```
When the device has burned a parameter, write a single undefined abbreviated partition vendor image command:
```sh
sudo upgrade_tool di -vendor /path/to/vendor.img
```
When the device has burned the parameter, burn several partition mirroring commands:
```sh
sudo upgrade_tool di -b /path/to/uboot.img -k /path/to/boot.img
```
Burn the parameter command:
```sh
sudo upgrade_tool di -p paramater
```
Burn the bootloader command:
```sh
sudo upgrade_tool ul MiniLoaderAll.bin
```
