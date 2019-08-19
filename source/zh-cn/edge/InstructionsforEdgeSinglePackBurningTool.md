# Windows
## 1. 导入分区配置

![load partition config](/images/edge/load_partition_config.png)
![Android tool](/images/edge/android_tool.png)

### 1.1 修改分区配置

![Modeify partition config](/images/edge/modify_partitio_config.png)
![Modeify partition config2](/images/edge/modify_partitio_config2.png)


每次随新工具发布的分区配置文件内容如上图，大部分情况下与项目的分区配置
存在一定程度差异，此时用户可以通过在分区配置区域空白处右击鼠标，选择“导
入配置”,加载之前保存的项目分区配置文件。如果想在工具启动时加载指定的
分区配置文件，可以通过修改 Config.ini 文件中 DEFAULT_IMAGE_CONFIG 项。

![config ini](/images/edge/config_ini.png)

## 2. 导出分区配置

![export config](/images/edge/export_config.png)
用户完成分区配置后，可以将分区配置通过导出功能进行保存，在分区配置区域
空白处点击“导出配置”，输入保存的文件名和目录，如果替换掉工具目录下的
config.cfg 文件，则可以在工具启动时加载当前保存的配置。

## 3. 烧写一个或多个分区镜像
![burn partition](/images/edge/burn_partiton_mirrors.png)

# Linux
```sh
unzip Linux_Upgrade_Tool_v1.47.zip
cd Linux_Upgrade_Tool_v1.47
sudo mv upgrade_tool /usr/local/bin
sudo chown root:root /usr/local/bin/upgrade_tool
sudo chmod a+x /usr/local/bin/upgrade_tool
```
如果板子为  `android 7.1`  升级到  `android 9.0`  固件或者
板子为  `android 9.0`  升级到  `android 7.1`  固件，需要先执行 **`擦除Flash`** 。
```sh
sudo upgrade_tool ef update.img
```
### 烧写整个固件 update.img：
```sh
sudo upgrade_tool uf update.img
```
### 烧写一个或多个分区镜像：
目前已知的定义缩写分区有-s(system 分区)、-k(kernel 分区)、-b(boot 分区)、-r(recovery 分区) 、-m(misc 分区) 、-u(uboot 分区) 、-t(trust 分区)和-re(resource 分区)，举例说明：

设备已烧录过 parameter 情况下，烧写单个system分区镜像命令：
```sh
sudo upgrade_tool di -s /path/to/system.img
```
设备未烧录过 parameter 情况下，烧写单个system分区镜像命令：
```sh
sudo upgrade_tool di -p parameter -s /path/to/system.img
```
设备已烧录过 parameter 情况下，烧写单个未定义缩写的分区 vendor 镜像命令：
```sh
sudo upgrade_tool di -vendor /path/to/vendor.img
```
设备已烧录过 parameter 情况下，烧写多个分区镜像命令：
```sh
sudo upgrade_tool di -b /path/to/uboot.img -k /path/to/boot.img
```
烧写 parameter命令：
```sh
sudo upgrade_tool di -p paramater
```
烧写 bootloader命令：
```sh
sudo upgrade_tool ul MiniLoaderAll.bin
```
