---
permalink: /linux/
title: Linux Installations
---

While we cannot *guarantee* full support for Windower 4 on Linux systems, it does generally work through the magic of Wine and/or Proton, depending on your system.

> ***General Known Issues***
> - `FFXIDB` plugin does not work and causes a crash

# Lutris
By far the easiest way to use Windower 4 on Linux is through Lutris. By using the provided installation scripts, you will have a working Windower 4 installation that includes a functioning launcher GUI and does not require the `linuxfix` addon required by other methods.

## Prerequisites
Install Lutris on your system. Refer to the [Lutris documentation](https://lutris.net/downloads) for the best way to do this for your system.

Download the following Lutris scripts to your local system:
- [FINAL FANTASY XI Online - Full (US) (32-bit)](https://cdn.discordapp.com/attachments/1003467859260870676/1028065002000756886/ffxi_us_new32.yaml)
- [Windower 4 (32-bit)](https://cdn.discordapp.com/attachments/1003467859260870676/1028065001648431144/windower_4_32.yaml)

## Procedure
### Install FINAL FANTASY XI
1. In Lutris, click **+** and choose **Install from a local install script**.
2. Select the `ffxi_us_new32.yaml` script and click **OK**.
3. Click **Install** and complete the installation process.
> To configure PlayOnline and FINAL FANTASY XI, use the launcher options when you run it from Lutris. <br/>For example, configure your gamepad, if necessary.

### Install Windower 4
1. In Lutris, click **+** and choose **Install from a local install script**.
2. Select the `windower_4_32.yaml` script and click **OK**.
3. Click **Install** and complete the installation process.

### Run Windower 4 and Configure
The older version of Wine required to use Windower 4 without the `linuxfix` addon does not support the version of SSL needed to update `hook.dll` and download plugins. To work around this:
1. Start Windower 4 from Lutris before changing the Wine version.
2. In the **Plugins** tab, enable any plugins that you need.
3. Close the launcher before starting the game.

You may need to repeat this step to update Windower in the future or enable other Plugins.

### Add Wine 4.21 to Lutris
1. In the **Runners** list, click the **Manage Versions** button next to **Wine**.
2. Check the box for `lutris-4.21` in the list and click **OK**.

### Change the Windower 4 Wine version
1. Right-click on **Windower 4** and choose **Configure**.
2. In the **Runner options** tab, choose `lutris-4.21-x86_64`.

### Link to Steam (Optional)
1. Right-click on **Windower 4** and choose **Create Steam shortcut**.

## Updating Windower and Downloading Plugins
You may need to temporarily set the Wine version to something current (7.x) to update Windower and download plugins. Note that this does not apply for Addons.

1. Change the Wine version as described above, start the launcher and download any plugins.
2. Close the launcher, and re-set the Wine version to 4.21.
3. Restart the launcher and play the game.
