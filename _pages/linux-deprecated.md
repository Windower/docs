---
permalink: /linux-deprecated/
title: Linux Installations (OLD)
---

> **CURRENT INSTALLATION METHOD**<br/>
> For the latest installation method, see the Lutris-based instructions:<br/>
> [Linux Installations (Current)](/linux){: .btn .btn--success .btn--large}
{: .notice--success}

> **FOR REFERENCE USE ONLY**<br/>
> The configuration methods listed on this page are outdated and NOT RECOMMENDED. They remain documented here for **reference purposes only**.
{: .notice--danger}

# Lutris

**Deprecated method as of 2023-06-19.**
{: .notice--warning}

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

# Steam Deck

## Prerequisites

1. On a Windows PC, download and configure Windower 4 to your liking.<br/>
   Recommended settings:
   - Resolution: `1280x800`
   - Display Mode: `Borderless Windowed`
2. Add the `linuxfix` addon to your Windower install:
   1. Download [linuxfix](https://raw.githubusercontent.com/Windower/Lua/dev/addons/linuxfix/linuxfix.lua)
   2. Place `linuxfix.lua` in `windower/addons/linuxfix/`.
   3. Add `lua l linuxfix` to the end of `windower/scripts/init.txt`.
3. Copy your configured Windower 4 folder to a USB drive or network-accessible location.

## Known Issues
- **FFXIDB** *Causes instant crash to OS*
- **linuxfix** *This addon is necessary to allow the keyboard (including software keyboard) to work with Windower 4, but essentially sacrifices the ability to use normal Windower keybinds.*

## Non-Steam Version
### Install and Update Final Fantasy XI

1. Switch your Steam Deck to Desktop Mode. 
2. Using Firefox or another browser, download the FFXI client installer files to your Steam Deck:
   http://www.playonline.com/ff11us/download/media/install_win.html
3. Open Steam in Desktop Mode.

#### Add a non-Steam game to your library
1. Choose **Games** > **Add a Non-Steam Game to My Library...**
1. Click **Browse** and navigate to the downloaded client files.<br/>
   *By default, Firefox downloads to `/home/deck/Downloads`*
3. For **File type**, choose **All Files**.
4. Select `FFXIFullSetup_US.part1.exe` and click **Open**.
5. Click **ADD SELECTED PROGRAMS**.<br/>
   A new application called **FFXIFullSetup_US.part1.exe** appears in your Steam library.
5. In your Steam library, select **FFXIFullSetup_US.part1.exe**.
6. Click the configuration (cog) icon and choose **Properties**.
7. In the **SHORTCUT** tab, change the name of the application to your liking.<br/>
   e.g. **FFXIFullSetup_US.part1.exe** -> **FINAL FANTASY XI**
8. In the **COMPATIBILITY** tab, select **Force the use of a specific Steam Play compatibility tool**.
9. Choose the version of Proton you wish to use.<br/>
   e.g. **Proton 7.0-2**
10. Close the configuration window.

#### Extract the client installer
1. In your non-Steam app, click **PLAY**.<br/>
    After some time, a **WinRAR self-extracting archive** window should appear. It may appear underneath the Steam window, so watch your task bar.
2. Note the Destination Folder, and click **Extract**.
3. After the extraction finishes, return to the application in the Steam library.

#### Install Final Fantasy XI
1. In your non-Steam app, click the configuration icon.
2. Click **Browse** and navigate to the newly extracted directory.<br/>
    e.g. `/home/deck/Downloads/FFXIFullSetup_US`
3. Select **FFXISetup.exe** and click **OPEN**.
4. Close the configuration window and click **PLAY**.<br/>
   After some time, the **FINAL FANTASY XI Installer** dialog appears.
5. Step through the DirectX, PlayOnline, and FINAL FANTASY XI installers as normal.<br/>
   Accept the default installation paths. You can uncheck the boxes to create desktop shortcuts.
   > ***NOTE:*** <br>
   > When the **FINAL FANTASY XI Setup** window appears, it will indicate that it is *Computing space requirements* and appear to be stalled.
   > ***BE PATIENT AND WAIT***. This step may take a long time (5-10+ minutes), but you will eventually be able to click **Next**.

#### Locate your non-Steam app directory.
1. Open Dolphin and navigate to your Steam compatdata directory:<br/>
   `/home/deck/.local/share/Steam/steamapps/compatdata/`<br/>
   Each numbered directory here represents a virtual Windows installation (Wine Prefix) for a Steam Proton application.
2. Browse the `pfx/drive_c/Program Files (x86)` directory in each directory until you locate the one that contains `PlayOnline`.
3. Make a note of the complete path to the `pfx` directory that contains `drive_c/Program Files (x86)/PlayOnline`.<br/>
   e.g. `/home/deck/.local/share/Steam/steamapps/compatdata/12345678/pfx/`

Further steps will refer to this directory as `<prefix_dir>`.

#### Update PlayOnline and Final Fantasy XI
2. In your non-Steam app, click the configuration icon.
3. Click **Browse** and navigate to `<prefix_dir>/drive_c/Program Files (x86)/PlayOnline/SquareEnix/PlayOnlineViewer`.
4. Select **pol.exe** and click **OPEN**.
5. Close the configuration window and click **PLAY**.<br/>
   After some time, the PlayOnline viewer appears.
6. Update and configure your account in PlayOnline as normal.
7. After PlayOnline restarts, update Final Fantasy XI.

#### Configure the PlayOnline Viewer
1. In your non-Steam app, click the configuration icon.
2. Click **Browse** and navigate to `<prefix_dir>/drive_c/Program Files (x86)/PlayOnline/SquareEnix/PlayOnlineViewer/polcfg`.
3. Select **polcfg.exe** and click **OPEN**.
4. Close the configuration window and click **PLAY**.<br/>
   After some time, the PlayOnline Viewer Config window appears.
5. Select **Use Gamepad** and click **Gamepad Configuration**.<br/>
   Ensure that **Controller (XBOX 360 for Windows)** is listed, and click **OK**.
8. Save the settings, click **OK** and exit the config tool.

#### Configure Final Fantasy XI
1. In your non-Steam app, click the configuration icon.
2. Click **Browse** and navigate to `<prefix_dir>/drive_c/Program Files (x86)/PlayOnline/SquareEnix/FINAL FANTASY XI/ToolsUS`.
3. Select **FINAL FANTASY XI Config.exe** and click **OPEN**.
4. Close the configuration window and click **PLAY**.<br/>
   After some time, the FINAL FANTASY XI Config window appears.
5. Uncheck **Play opening movie on startup**.
6. Click **Gamepad Settings**.
7. Select **Enable Game** and click **XInput (F)**.
8. (Optional) Click **Test Gamepad (T)** and verify that the controls work as expected.
9. Click **OK**, save the settings, and **Close** the config tool.

### Configure Windower
1. Insert your USB drive or open your network location containing your configured Windower 4 folder.
2. Copy your Windower 4 folder to `<prefix_dir>/drive_c`.<br/>
   You should end up with something like `<prefix_dir>/drive_c/Windower4`.
3. In your non-Steam app, click the configuration icon.
4. Click **Browse** and navigate to `<prefix_dir>/drive_c/Windower4`.
5. Select **windower.exe** and click **OPEN**.
6. In **LAUNCH OPTIONS**, enter `-p=""`
7. Close the configuration window and click **PLAY**.<br/>
   After some time, the Windower splash screen appears, followed by the PlayOnline Viewer.<br/>
   The PlayOnline Viewer title should indicate **Windower Enabled**
  
You can now switch back to Game Mode, and launch your non-Steam app to play FINAL FANTASY XI with Windower 4 enabled. You can use the gamepad controls and PlayOnline software keyboard to log in without needing a keyboard and mouse connected.

## Steam Version

You can use Windower with a Steam copy of the game by manipulating the Steam launch command for the game.

### Install ProtonUp-Qt and Proton-GE

1. Switch your SteamDeck to desktop mode.
1. Open **Discover**, search for ProtonUp-Qt and install it.
1. Launch ProtonUp-Qt.
1. Click **Add version**, select and **Install** the following version:
   - Compatibility tool: `Proton-GE`
   - Version: `GE-Proton7-24` (or latest available)

### Install and Update Final Fantasy XI

1. Install the game from Steam.
1. Update the game as normal.

### Change Launch Options and Configure Windower

#### Export the Steam launch command

1. In your Final Fantasy XI Steam library entry, click the **Manage** icon and choose **Properties**.
1. In **LAUNCH OPTIONS**, enter the following:
   ```
   echo %command% > /home/deck/Documents/steam_launch_command.txt
   ```
1. In **COMPATIBILITY**, select **Force the use of a specific Steam Play compatibility tool**.
1. From the dropdown, select **GE-Proton7-24** or the version you installed in ProtonUp-Qt.
1. Close the **Properties** window and click **PLAY**.

#### Configure Windower

1. Open the generated text file:
   ```
   /home/deck/Documents/steam_launch_command.txt
   ```
1. Note the AppID and the final path to `polboot.exe`.<br/>
   For example, for FINAL FANTASY XI: Ultimate Collection - Abyssea Edition:

   ```
   /home/deck/.local/share/Steam/ubuntu12_32/reaper SteamLaunch AppId=39250 -- /home/deck/.local/share/Steam/steamapps/common/SteamLinuxRuntime_soldier/_v2-entry-point --verb=waitforexitandrun -- /home/deck/.local/share/Steam/compatibilitytools.d/GE-Proton7-24/proton waitforexitandrun /home/deck/.local/share/Steam/steamapps/common/ffxi/SquareEnix/FINAL FANTASY XI/polboot.exe
   ```

   * AppID: `39250`
   * polboot path: `/home/deck/.local/share/Steam/steamapps/common/ffxi/SquareEnix/FINAL FANTASY XI/polboot.exe`

1. Copy your pre-configured Windower folder into the following directory: 
   ```
   /home/deck/.local/share/Steam/steamapps/compatdata/<AppID>/pfx/drive_c
   ```
   For example, `windower.exe` should now be located at `/home/deck/.local/share/Steam/steamapps/compatdata/39250/pfx/drive_c/Windower4/windower.exe`

#### Modify the launch command

1. In the exported Steam launch command, replace the final path to `polboot.exe` with the path to `windower.exe`.
1. Add ` -p="" #%command%` to the end of the command.<br/>
   For example:
   ```
   /home/deck/.local.share/Steam/ubuntu12_32/reaper SteamLaunch AppId=39250 -- /home/deck/.local/share/Steam/steamapps/common/SteamLinuxRuntime_soldier/_v2-entry-point --verb=waitforexitandrun -- /home/deck/.local/share/Steam/compatibilitytools.d/GE-Proton7-24/proton waitforexitandrun /home/deck/.local/share/Steam/steamapps/compatdata/39250/pfx/drive_c/Windower4/windower.exe -p="" #%command%
   ```
   If you have a named profile that you want to use, specify the name inside the double quotes. For example, ` -p="MainChar" #%command%`
1. Copy the entire modified launch command.
1. Return to the Properties for your Steam library entry.
1. Replace the entire existing **LAUNCH OPTIONS** string with the modified launch command.

### Play the Game

You can now return to Gaming Mode and play FINAL FANTASY XI. 

After clicking **Play**, you should see the Windower splash screen for a short time and then PlayOnline should start.
