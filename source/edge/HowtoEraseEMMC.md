title: Howto Erase the eMMC Storage
---

### On Windows
You can use [AndroidTool](http://dl.khadas.com/Tools/AndroidTool_Release_en_v2.58.zip) to erase the eMMC storage.

1. Power on Edge and connect it to your host PC via USB-C cable.

2. Put your Edge enter `Loader` or `MASKROM` mode, please refer to [Enter Upgrade Mode](/edge/HowtoBootIntoUpgradeMode.html).

3. Open `AndroidTool` and choose `Upgrade Firmware->Firmware` to load firmware.

4. Click `EraseFlash` to erase the eMMC.
![AndroidTool Erase eMMC](/images/edge/AndroidTool_erase_en.png)

### On Ubuntu
You can use [Linux_Upgrade_Tool](http://dl.khadas.com/Tools/Linux_Upgrade_Tool_v1.34.zip) to erase the eMMC storage.

1. Power on Edge and connect it to your host PC via USB-C cable.

2. Put your Edge enter `Loader` or `MASKROM` mode, please refer to [Enter Upgrade Mode](/edge/HowtoBootIntoUpgradeMode.html).

3. Use `upgrade_tool` to erase the eMMC.
```
$ sudo ./upgrade_tool ef /path/to/MiniLoaderAll.bin
```
*Note: `MiniLoaderAll.bin` is needed to perform erase, it's built from u-boot.*

