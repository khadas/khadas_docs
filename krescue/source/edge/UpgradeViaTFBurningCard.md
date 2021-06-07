title: Upgrade Using A SD Card
---

## Preparation

* Windows PC.
* Download [SDDiskTool](https://dl.khadas.com/Tools/SDDiskTool_en_v1.53.zip) and extract it.
* SD-Card and an SD-Card Reader.
* HDMI Monitor.

{% note info Note %}
You should backup the data of your SD-Card if it is important to you. All data on your SD-Card will be erased.
{% endnote %}

## Create Burning Card

1. Insert your SD-Card into the Card Reader, and insert the Card Reader into the USB-port of your Host PC.

2. Open the `SDDiskTool` tool.

3. Select the SD-Card you just inserted.

4. Set `function mode` as `Upgrade Firmware`.

5. Click `Firmware` and select the firmware you want to burn.

6. Click `Create` to start burning the image to your SD-Card.

![Sdtool](/images/edge/Sdtool_en_1.png)
![Sdtool](/images/edge/Sdtool_en_2.png)

If the image was burned successfully, you will see the following image:
![Sdtool](/images/edge/Sdtool_en_3.png)

## Upgrading Via An SD Card

1. Insert the "SD Burning Card" into the Edge-V TF-Card slot, or TF-Card slot on an Edge-IO that's connected to Edge.
2. Connect Edge to a screen via a HDMI cable.
3. Power on Edge or reboot it.
4. After reboot you will see the upgrade-interface displayed on your HDMI monitor.

![Sdtool upgrade](/images/edge/Sd_upgrade.JPG)

If upgrading was done successfully, you will see the following interface:

![Sdtool upgrade done](/images/edge/Sd_upgrade_done.JPG)

Remove the SD-Card from your Edge SBC, and the system will reboot automatically into the new OS.

## See Also
[Upgrade Via a USB cable](/edge/UpgradeViaUSBCable.html)
