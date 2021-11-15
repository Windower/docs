---
permalink: /faq/
layout: single
title: Frequently Asked Questions
toc: true
toc_label: Contents
toc_icon: "question-circle"
sidebar:
    nav: sidenav
---
## Using Windower
### How do I use Windower?
See [Getting Started](../).

### What is true fullscreen?
True fullscreen mode disables Windower in terms of windowing the game. In true fullscreen mode, you cannot use **ALT + TAB**; it only gives you plugins and addons.

### How do I load a plugin?
If the plugin name is **FFXIDB**, you have 3 options:
* Enable the **Find** plugin in your Windower launcher profile.
* Open the Windower console and type `load ffxidb`.
* In the game chat log, type `//load ffxidb`.

### How do I load an addon?
If the addon name is **Clock**, you have 3 options:
* Enable the **Clock** addon in your Windower launcher profile.
* Open the Windower console and type `lua l clock`.
* In the game chat log, type `//lua l clock`.

### What commands can I use?
See the [Windower Commands](../commands/) section.

### I don't want to use any plugins or addons. How can I get rid of them?
Disable them in your profile in the Windower launcher.

### How do I log into 2+ accounts at the same time?
Simply run Windower a second time, you do not need to install mulitple copies of Windower.

<!--### How do I use scripting?
Refer to the [[Scripting Section]].-->

## Errors and Problems
### FFXI runs terribly with the launcher graphical settings, how can I lower them further?
Edit `settings.xml` in your Windower directory, you can set the supersampling multiplier to anything you want.

Values less than 1 will undersample, which may speed up performance on low-powered PCs.

### The game crashes when I load a second character through Windower
Windower alone cannot prevent issues related to FFXI trying to claim exclusive use of your graphics adapter. 

You can prevent crashes related to exclusive GPU use when multiboxing in a few ways. For example:
* Change your Windows User Account Control (UAC) settings by lowering it at least one setting to prevent desktop dimming. To access the UAC settings, open the **Start** menu, type `User Account Control`, and choose **Change User Account Control Settings**.
* Use a DirectX proxy that virtualizes your graphics adapter, such as DGVoodoo2.

### Windower will not load (Crashes on Play)!
Search for your issue in the following locations:
* [Windower Support on FFXIAH Forums](http://www.ffxiah.com/forum/forum/170/support/)
* [Windower Bug Tracker on GitHub](https://github.com/Windower/Issues/issues)

### I get an error when running launcher and PlayOnline does not open!
Check the windower directory for a crash log, and create an issue on the [Bug Tracker](https://github.com/Windower/Issues/issues) with the crash log attached.

### My menus and game UI are gone or weird!
* You can not use any applications that skin the game's window like WindowsBlinds or StyleXP. Please add an exception for FFXI in the applications configuration.
* You can not play the game with XFire either, it is known to cause problems.

<!--### Why is the command line in the Windower console input line obscured by the data in the output window?
If you set your fontsize in windows to something other than 100%, the console will not place the input line in the correct place. Set your windows font size to 100% (not 125%).-->

<!--### My Launcher will only install Windower and will not load. Keeps asking me to Allow/Don't Allow before loading.
Simply go to **Control Panel** > **User Account** > **UAC** and un-check the box that says User Account Control and RESTART computer.-->

## Contacting the Dev Team
<!--### Why was my forum post locked or deleted shortly after making it?
Because your topic was stupid and you didn't search the forums.

### Why are no developers replying to my topic?
Because no developer has an answer for you any different than what's already said on the topic in other threads.-->

### Are you recruiting?
Generally speaking, yes! Check out Arcon's [forum post](https://www.ffxiah.com/forum/topic/41270/windower-is-recruiting/#3296177) about the roles we'd like to fill.

### How can I contact the developer team directly?
You can stop by our [Discord](https://discord.gg/v6pk6uy) server.

### How can I make addons for Windower?
See the [Windower Lua wiki](https://github.com/Windower/Lua/wiki) on GitHub.

<!--### I'm an experienced programmer, how can I join the team?
You can't. At least not immediately. No matter how experienced BruceWillis3442 is at programming, trust is a major factor, and BruceWillis3442 isn't going to come out of nowhere and get on the team. Hanging out in IRC regularly and publishing some addons is a good way to get known.-->

### How can I help out?
If you're not a developer, an easy way to help out is by answering other users' questions.
* [FFXIAH Windower forums](https://www.ffxiah.com/forum/forum/170/support/) 
* [Windower Discord server](https://discord.gg/v6pk6uy)
