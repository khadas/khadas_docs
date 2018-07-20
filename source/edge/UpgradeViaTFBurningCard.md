title: Upgrade via a TF card
---

### preparations
* A Windows PC
* Download [SDDiskTool](https://dl.khadas.com/Tools/SDDiskTool_en_v1.53.zip) and extract it
* A TF card and a TF crad reader
* A HDMI monitor

**Note:** You should backup the data of TF card if they are important to you, because the TF card will be formatted.

### Create burning card
1. Insert the TF card to card reader and insert the card reader to your host PC

2. Open `SDDiskTool` tool

3. Select the TF card you just inserted

4. Select `function mode` as `Upgrade Firmware`

5. Click `Firmware` and select the firmware you want to burn

6. Click `Create` to start creating

![Sdtool](/images/edge/Sdtool_en_1.png)
![Sdtool](/images/edge/Sdtool_en_2.png)

If creating successfully you will see the following image:
![Sdtool](/images/edge/Sdtool_en_3.png)

### Upgrade via TF card
1. Insert the TF burning card to Edge TF card slot
2. Connect Edge and HDMI monitor via a HDMI cable
3. Power on Edge or reboot it
4. After reboot you will see the upgrading interface on HDMI monitor

![Sdtool upgrade](/images/edge/Sd_upgrade.JPG)

If upgrading successfully, you will see the follow interface:

![Sdtool upgrade done](/images/edge/Sd_upgrade_done.JPG)

Now, remove the TF card from Edge the system will reboot automatically and boot into the new system.

### See also
[Upgrade via a USB cable](/edge/UpgradeViaUSBCable.html)
