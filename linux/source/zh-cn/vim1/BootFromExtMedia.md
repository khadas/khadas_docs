title: 从外部媒体介质启动系统
---


有很多系统运行在SD卡或U盘上,例如：
* [Armbian with Debian / Ubuntu]()
* [CoreELEC](https://coreelec.org/)
* [LibreELEC](https://libreelec.tv/downloads_new/khadas-vim/)
* [Manjaro](https://forum.khadas.com/t/manjaro-linux-desktop-environment-for-vim1-vim3/3945)
* [Volumio]()
* Khadas SD images
  * [VIM1](https://dl.khadas.com/Firmware/VIM1/Ubuntu/SD_USB/)
  * [VIM2](https://dl.khadas.com/Firmware/VIM2/Ubuntu/SD_USB/)
  * [VIM3](https://dl.khadas.com/Firmware/VIM3/Ubuntu/SD_USB/)
  * [VIM4](https://dl.khadas.com/Firmware/VIM4/Ubuntu/SD_USB/)


## 把固件写入到SD卡或U盘

参考[安装操作系统到SD/USB存储](InstallOsIntoSdusb.html)。
 
## 准备DTB文件

{% note info 如果固件是Khadas SD卡固件，那么你可以跳过此步骤，直接到下一步。%}

{% endnote %}

### 对于Armbian, LibreELEC, Manjaro, AltLinux and ArchLinux
你需要设置正确的DTB文件，设置方法如下：

* 进入SD卡或U盘的`BOOT`分区下的`dtb`文件夹。
* 在`dtb`文件夹中找到相应的`.dtb`文件，如：
  * VIM1: `/dtb/meson-gxl-s905x-khadas-vim.dtb`
  * VIM2: `/dtb/meson-gxm-khadas-vim2.dtb`
  * VIM3: `/dtb/meson-g12b-a311d-khadas-vim3.dtb`
  * VIM3L: `/dtb/meson-sm1-khadas-vim3l.dtb`
* 编辑`/extlinux/extlinux.conf`里面的`FDT`，以及`uEnv.ini`文件里面的`dtb_name=`设置为上面相应的值。

### 对于CoreELEC
* 在SD卡或U盘的`COREELEC`分区`device_trees`目录下找到相应的`.dtb`文件：
  * VIM1：拷贝`gxl_p212_2g_kvim.dtb`到`COREELEC`分区，并重命名为`dtb.img`。
  * VIM2：拷贝`gxm_kvim2.dtb`到`COREELEC`分区，并重命名为`dtb.img`。
  * VIM3：拷贝`g12b_a311d_khadas_vim3`到`COREELEC`分区，并重命名为`dtb.img`。

### 对于Volumio
* 在SD卡或U盘的`BOOT`分区`dtb`目录下找到相应的`.dtb`文件：
  * VIM1：拷贝`kvim.dtb`，`kvim_linux.dtb`或`meson-gxl-s905x-khadas-vim.dtb`到`BOOT`分区，并重命名为`dtb.img`。
  * VIM2：拷贝`kvim2.dtb`，`kvim2_linux.dtb`或`meson-gxm-khadas-vim2.dtb`到`BOOT`分区并重命名为`dtb.img`。
  * VIM3：拷贝`kvim3_linux.dtb`或`kvim3l_linux.dtb`到`BOOT`分区，并重命名为`dtb.img`。

### 对于Khadas SD固件

不需要任何操作，直接跳过该步骤。

## 激活多启动
两种方式激活多启动：
1)、通过[按键模式](BootIntoUpgradeMode.html)。
2)、通过安卓系统激活。
* 进入`Settings>About Device->System->updates`。
* 点击`select`并选择`aml_autosript.zip`。
* 点击`update`，系统会重启运行外部媒体介质固件。

{% note warn 注意 %}

不要使用电脑USB供电，要使用适配器供电，否则会导致激活多启动失败！

{% endnote %}
