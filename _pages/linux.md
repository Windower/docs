---
permalink: /linux/
title: Linux Installations
---

While we cannot *guarantee* full support for Windower 4 on Linux systems, it does generally work through the magic of Wine and/or Proton, depending on your system.

***Basic Requirements***

In general, the following requirements apply for compatibility with minimal workarounds:
* runner based on Wine 10 or newer, or preferably a gaming optimized one like Proton.
* dotnet48, gdiplus, corefonts installed via winetricks
* DirectX 8 compatibilty layer, preferably DXVK

> **Note:** The suggested Lutris installation method meets these requirements, but you can certainly install without Lutris as well.
{: .notice--info}

# Lutris

> **Preferred method, Last Updated 2024-01-20**
{: .notice--success}

The easiest way to use Windower 4 on Linux is through Lutris. The scripts available in the Lutris database enable a fully functional launcher UI and do not require the use of the `linuxfix` addon.

## Prerequisites
* Install Lutris on your system.<br/>Refer to the [Lutris documentation](https://lutris.net/downloads) for the best way to do this for your system.
* Configure Lutris to use the most recent version of Wine.<br/>(Currently <a href="https://github.com/GloriousEggroll/wine-ge-custom/releases/latest"><span id="latestrelease">Checking...</span></a>)

> **Note:** Wine versions may be labeled slightly differently within Lutris. For example, `Wine-GE-Proton8-25` is equivalent to `wine-ge-8-25` in Lutris.
{: .notice--info}

## Installing FINAL FANTASY XI
Install Final Fantasy XI with the script that is configured to use D8VK. This installer uses a modern version of Wine and D8VK for better compatibility and performance.

1. In Lutris, click **+** and choose **Search the Lutris website for installers**.
1. Enter `FINAL FANTASY XI Online` and press **Enter**.
1. Click **FINAL FANTASY XI Online** in the search results.
1. Select **Full (US) Version with D8VK** and click **Install**.

At this point, you can start Final Fantasy XI from Lutris and update it.

> **Backup Recommended**<br/>
> We strongly recommend that you back up your game directory after updating to save time if something goes wrong and you need to reinstall. If you plan to configure the gamepad, back up the game directory **after** doing so.
{: .notice--info}

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

# Post-Installation Tips

## Renaming the Lutris Entry
By default, the Lutris entry for Windower 4 keeps the same name as FINAL FANTASY XI itself. To easily distinguish which one is Windower, you can identify its entry and rename it.
1. Right-click one of the **FINAL FANTASY XI Online** entries and choose **Configure**.
1. In the **Game options** tab, check whether the path for **Executable** ends with `windower.exe`.
* If the path is for Windower, specify a new **Name** (e.g. `Windower 4`) in the **Game info** tab, and click **Save**.
* If the path is for `polboot.exe`, click **Cancel** and try a different **FINAL FANTASY XI Online** entry.

## Hiding the FPS Display
By default, the Lutris scripts display FPS using the DXVK HUD. If you don't want this display, you can disable it in the Lutris system options for Windower.
1. In Lutris, right-click your Windower 4 entry and choose **Configure**.
1. In the **System options** tab, locate the **Environment variables** under **Game execution**.
1. Highlight the **DXVK_HUD** key, and click **Delete**.
1. Click **Save** and the FPS display should no longer appear.

<script src="/assets/js/wine-ver.js"/>
  
<hr/>
> **FOR REFERENCE ONLY**<br/>
> For historical reference, the previous methods remain documented here:<br/>
> [Linux Installations - Deprecated](/linux-deprecated){: .btn .btn--warning .btn--small}
{: .notice--warning}
