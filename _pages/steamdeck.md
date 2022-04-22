---
permalink: /steamdeck/
title: Playing on Steam Deck (WIP)
---

## Prerequisites

1. On a Windows PC, download and configure Windower 4 to your liking.<br/>
   Recommended settings:
   - Resolution: `1280x800`
   - Display Mode: `Borderless Windowed`
2. Add the `linuxfix` addon to your Windower install:
   1. Download linuxfix: https://cdn.discordapp.com/attachments/338713865812574219/907688771036782652/linuxfix.lua
   2. Place `linuxfix.lua` in `windower/addons/linuxfix/`.
   3. Add `lua l linuxfix` to the end of `windower/scripts/init.txt`.
3. Copy your configured Windower 4 folder to a USB drive or network-accessible location.
4. A usable keyboard and mouse. (You can probably use the Steam Deck's controls and software keyboard, but save yourself the hassle.)

## Known Issues
- **FFXIDB** *Causes instant crash to OS*

# Install and Update Final Fantasy XI

1. Switch your Steam Deck to Desktop Mode. 
2. Using Firefox or another browser, download the FFXI client installer files to your Steam Deck:
   http://www.playonline.com/ff11us/download/media/install_win.html
3. Open Steam in Desktop Mode.

## Add a non-Steam game to your library
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

## Extract the client installer
1. In your non-Steam app, click **PLAY**.<br/>
    After some time, a **WinRAR self-extracting archive** window should appear. It may appear underneath the Steam window, so watch your task bar.
2. Note the Destination Folder, and click **Extract**.
3. After the extraction finishes, return to the application in the Steam library.

## Install Final Fantasy XI
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

## Locate your non-Steam app directory.
1. Open Dolphin and navigate to your Steam compatdata directory:<br/>
   `/home/deck/.local/share/Steam/steamapps/compatdata/`<br/>
   Each numbered directory here represents a virtual Windows installation (Wine Prefix) for a Steam Proton application.
2. Browse the `pfx/drive_c/Program Files (x86)` directory in each directory until you locate the one that contains `PlayOnline`.
3. Make a note of the complete path to the `pfx` directory that contains `drive_c/Program Files (x86)/PlayOnline`.<br/>
   e.g. `/home/deck/.local/share/Steam/steamapps/compatdata/12345678/pfx/`

Further steps will refer to this directory as `<prefix_dir>`.

## Update PlayOnline and Final Fantasy XI
2. In your non-Steam app, click the configuration icon.
3. Click **Browse** and navigate to `<prefix_dir>/drive_c/Program Files (x86)/PlayOnline/SquareEnix/PlayOnlineViewer`.
4. Select **pol.exe** and click **OPEN**.
5. Close the configuration window and click **PLAY**.<br/>
   After some time, the PlayOnline viewer appears.
6. Update and configure your account in PlayOnline as normal.
7. After PlayOnline restarts, update Final Fantasy XI.

## Configure the PlayOnline Viewer
1. In your non-Steam app, click the configuration icon.
2. Click **Browse** and navigate to `<prefix_dir>/drive_c/Program Files (x86)/PlayOnline/SquareEnix/PlayOnlineViewer/polcfg`.
3. Select **polcfg.exe** and click **OPEN**.
4. Close the configuration window and click **PLAY**.<br/>
   After some time, the PlayOnline Viewer Config window appears.
5. Select **Use Gamepad** and click **Gamepad Configuration**.<br/>
   Ensure that **Controller (XBOX 360 for Windows)** is listed, and click **OK**.
8. Save the settings, click **OK** and exit the config tool.

## Configure Final Fantasy XI
1. In your non-Steam app, click the configuration icon.
2. Click **Browse** and navigate to `<prefix_dir>/drive_c/Program Files (x86)/PlayOnline/SquareEnix/FINAL FANTASY XI/ToolsUS`.
3. Select **FINAL FANTASY XI Config.exe** and click **OPEN**.
4. Close the configuration window and click **PLAY**.<br/>
   After some time, the FINAL FANTASY XI Config window appears.
5. Uncheck **Play opening movie on startup**.
6. Click **Gamepad Settings**.
7. Select **Enable Game** and click **XInput (F)**.
8. (Optional) Click **Test Gamepad (T)** and verify that the controls work as expected.
9. Click **OK*, save the settings, and **Close** the config tool.

# Configure Windower
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
