title: How To Erase The eMMC Storage
---

## Using Windows

You can use [AndroidTool](https://dl.khadas.com/Tools/AndroidTool_Release_en_v2.58.zip) to erase the eMMC storage.

1. Power on Edge and connect it to your Host PC via a USB-C data cable.

2. Place your Edge into `Loader` or `MaskROM` mode. Please refer to [Enter Upgrade Mode](/edge/HowtoBootIntoUpgradeMode.html).

3. Open `AndroidTool` and choose `Upgrade Firmware->Firmware`.

4. Click `EraseFlash` to erase the eMMC.
![AndroidTool Erase eMMC](/images/edge/AndroidTool_erase_en.png)

## Using Ubuntu

	You can use [Linux_Upgrade_Tool](https://dl.khadas.com/Tools/Linux_Upgrade_Tool_v1.34.zip) to erase the eMMC storage.

1. Power on Edge and connect it to your Host PC via a USB-C data cable.

2. Place your Edge into `Loader` or `MaskROM` mode. Please refer to [Enter Upgrade Mode](/edge/HowtoBootIntoUpgradeMode.html).

3. Use the `upgrade_tool` to erase the eMMC.

```sh
$ sudo ./upgrade_tool ef /path/to/MiniLoaderAll.bin
```

{% note info Tip %}
`MiniLoaderAll.bin` is needed to perform the erasure. It is built from U-Boot.
{% endnote %}

