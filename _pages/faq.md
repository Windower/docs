---
permalink: /faq/
layout: single
title: Frequently Asked Questions
toc: true
sidebar:
    nav: sidenav
---

#### How do I use the Windower?
Read the [[ReadMe]]

#### What is true fullscreen?
It disables Windower in terms of Windowing the game. You cant alt tab. It only gives you plugins.

#### How do I load plugins?
If the plugin name is **Find**, you have 3 options:
* Click the checkbox next to the **Find** plugin in the launcher.
* Open the console and type `load Find`
* In game type `//load Find`

#### Is there a list of commands to use?
Check the [[commands|Command Listing]]

#### FFXI runs terribly with the launcher graphical settings, how can I lower them further?
Edit `settings.xml` in your Windower directory, you can set the supersampling multiplier to anything you want.  Values less than 1 will undersample, which can speed up performance on low-powered PCs.

#### My Windower will not load (Crashes on Play)!
Check the [[http://forums.windower.net|Forums]] and search for any issues on the [[https://github.com/Windower/Issues/issues|Bug Tracker]]

#### I get an error when running launcher and PlayOnline does not open!
Check the windower directory for a crash log, and create an issue on the [[https://github.com/Windower/Issues/issues|Bug Tracker]] with the crash log attached.

#### My menus and game UI are gone/weird!
* You can not use any applications that skin the game's window like WindowsBlinds or StyleXP. Please add an exception for FFXI in the applications configuration.
* You can not play the game with XFire either, it is known to cause problems.

#### I don't want to use any plugins how do I get rid of them?
Don't check any in the launcher

#### How do I login 2 accounts at the same time?
Simply rerun the Launcher a 2nd time, you do not need to make copies of Windower to load twice.

#### How do I use scripting?
Refer to the [[scripting|Scripting Section]].

#### Why is the command line in the windower console input line obscured by the data in the output window?
If you set your fontsize in windows to something other than 100%, the console will not place the input line in the correct place. Set your windows font size to 100% (not 125%).

#### Why was my forum post locked or deleted shortly after making it?
Because your topic was stupid and you didn't search the forums.

#### Why are no developers replying to my topic?
Because no developer has an answer for you any different than what's already said on the topic in other threads.

#### Is there any way I can contact the developer team directly?
Yes, you may come on IRC by [[http://client00.chat.mibbit.com/?server=ffochat.com&channel=%23windower|WebClient]] or IRC by [[irc://ffochat.com/windower|Real Client]]

#### How can I make plugins for Windower?
Visit out [[http://dev.windower.net|Development Wiki]] for details on our Lua addon API

#### I'm an experienced programmer, how can I join the team?
You can't. At least not immediately. No matter how experienced BruceWillis3442 is at programming, trust is a major factor, and BruceWillis3442 isn't going to come out of nowhere and get on the team. Hanging out in IRC regularly and publishing some addons is a good way to get known.

#### How can I help out?
Answering peoples questions on the forums and joining IRC and joining the #Windower channel and answering questions is a good way to help out!

#### My Launcher will only install Windower and will not load. Keeps asking me to Allow/Don't Allow before loading.
Simply go to Control Panel>User Account>UAC and un-check the box that says User Account Control and RESTART computer.