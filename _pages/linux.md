---
permalink: /linux/
title: Linux Installations
---

While we cannot *guarantee* full support for Windower 4 on Linux systems, it does generally work through the magic of Wine and/or Proton, depending on your system.

***Basic Requirements***

In general, the following requirements apply for compatibility with minimal workarounds:
* Wine Staging 8.5 or newer (or equivalent)
* dotnet462, gdiplus, corefonts installed via winetricks
* DirectX 8 compatibilty layer or shim such as D8VK or dgVoodoo2

The suggested Lutris installation method meets these requirements, but you can certainly install without Lutris as well.

# Lutris

> **Preferred method.**
> **Updated 2023-06-19**

The easiest way to use Windower 4 on Linux is through Lutris. The scripts available in the Lutris database enable a fully functional launcher UI and do not require the use of the `linuxfix` addon.

## Prerequisites
Install Lutris on your system. Refer to the [Lutris documentation](https://lutris.net/downloads) for the best way to do this for your system.

## Installing FINAL FANTASY XI
Install Final Fantasy XI with the script that is configured to use D8VK. This installer uses a modern version of Wine and D8VK for better compatibility and performance.

1. In Lutris, click **+** and choose **Search the Lutris website for installers**.
1. Enter `FINAL FANTASY XI Online` and press **Enter**.
1. Click **FINAL FANTASY XI Online** in the search results.
1. Select **Full (US) Version with D8VK** and click **Install**.

> **Backup Recommended**<br/>
> At this point, you can start Final Fantasy XI from Lutris and update it.
>
> We strongly recommend that you back up your game directory after updating to save time if something goes wrong and you need to reinstall. If you plan to configure the gamepad, back up the game directory after doing so.

### (Optional) Configuring the Gamepad
By default, gamepad support is not enabled in Final Fantasy XI.

1. Select the **FINAL FANTASY XI Online** entry in your Lutris games library.
1. Click the **^** button and choose **Run EXE inside Wine prefix**.
1. Navigate to `drive_c/Program Files (x86)/PlayOnline/SquareEnix/FINAL FANTASY XI/ToolsUS/`.
1. Double-click `FINAL FANTASY XI Config.exe`.
1. Configure your gamepad as you would on Windows.

You can also enable the gamepad in PlayOnline by repeating the same steps with `polcfg.exe` under `drive_c/Program Files (x86)/PlayOnline/SquareEnix/PlayOnlineViewer/polcfg/`.

## Installing Windower 4
Install Windower with the script that is compatible with the D8VK installation of Final Fantasy XI.
1. In Lutris, click **+** and choose **Search the Lutris website for installers**.
1. Enter `FINAL FANTASY XI Online` and press **Enter**.
1. Click **FINAL FANTASY XI Online** in the search results.
1. Select **Windower 4 Live** and click **Install**.

# Lutris (Previous Method)

> **Deprecated method as of 2023-06-19.**

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
