---
permalink: /plugins/ime/
title: IME
---

IME implements the Japanese Input Method Editor in FFXI. This allows you to type text in Japanese. In order to use it, Japanese language support must be installed, and Japanese must be selected as the default non-unicode language in Windows.

## Using IME
I wrote this to help those that can actually speak Japanese but have little knowledge in the means of making their computer let them type it in FFXI. If you're here trying to find out how to get the emoticons to show up, you'll have to find someone else to teach you, or learn to read hiragana and katakana before asking me.

If you're already able to type Japanese on your computer, then obviously you already have the IME installed, so this first section is not for you. Go down to [II. Configuring the IME](#configuring-the-ime)

## Installing the IME
### Control Panel Languages Tab

**Control Panel** > **Regional and Language Options** > **Languages Tab**

Install files for East Asian languages must be checked. If not, check it at this time. You WILL require your Windows XP CDs in order to install this option. Tough luck if you don't have them, you can't download these files for XP.

Pre-XP (ie. Win98) users CAN download them because it was never included with the windows installation CDs. Do a search on Microsoft's site, and make sure you don't mistake the ones designed for MS Office.

Once you're done installing and rebooting, come back to this window.

### Control Panel Advanced Tab

**Control Panel** > **Regional and Language Options** > **Advanced Tab**

Language for non-Unicode programs<br>
You have two options for this, both with their own quirks:<br>
- Japanese, or
- English (using AppLocale on Windower)

#### Japanese
Setting it to Japanese will cause minor quirks to appear in many of your windows programs (the most prominent being that all your backslashes will appear as Yen symbols), however it will let Windower run as intended. A future update to Windower or the IME plugin should allow you (according to replies from Cliff in other threads) to set this back to English and Windower will take care of the rest.

#### English (AppLocale)
If you don't want to set your system's locale to Japanese, you also have the option of using a program provided by Microsoft known as [AppLocale](http:*www.microsoft.com/downloads/details.aspx?FamilyId=8C4E8E0D-45D1-4D9B-B7C0-8430C1AC89AB&displaylang=en).
AppLocale basically does what the above option does, except it only does it to the one program you want to run in the Japanese locale, instead of your entire system.

When you run AppLocale by itself, it'll ask you what program to run, and at the end if you want to create a shortcut for it. Of course, creating a shortcut saves you the trouble of constantly going through this wizard in order to run the Launcher. Where does it drop it? In **Start** > **Programs** > **AppLocale**. From there you can drag/drop/cut/copy/paste it to wherever you like; Quick Launch, Desktop, another directory in your Start Menu...

There is one problem with using AppLocale right now though. The FFXI window will be in a mode called "Always on Top" and as stated it will always be on top of other windows. It also removes the titlebar and borders from the window so you can't move or resize it. For this reason most of you will want to use option (a), unless you're a power user and run dualies (like myself).

With regard to the borderless and "Always on top" mode when using AppLocale, I have had success with using the FFXI official windowed mode to reapply the border. If you enable the official windowed mode in FFXI Config (and save settings), you may then use AppLocale with `launcher.exe` to use all of windower's features, as well as a window border and the ability to minimize/place windows on top of the game. I did however experience a bug wherein the game had to first be minimized before I could enter chat text... but that is a minor bug... 

### Control Panel Details Button

**Control Panel** > **Regional and Language Options** > **Languages Tab** > **Details**

This brings up the Text Services and Input Languages window. The Default input language can be whatever you want, but most English users will want to leave it on English. Basically it changes the default language that the Language Bar will start in for all programs.

In the area below that, labelled Installed services, you need to have two, possibly three, entries to use the Japanese IME. If you haven't Installed files for East Asian languages from 1. then you can't install the services required.

JP Japanese > Keyboard >

Microsoft IME Standard 2002 ver 8.1 (or variation thereof)<br>
Microsoft Natural Standard 2002 ver 8.1 (or variation thereof)<br>
Japanese (optional)

If these do not appear in the list yet, Add them. You may have to restart. Once you've done that, then you have everything you need to start using the IME.

**Note:** In the Advanced Tab of this window, ensure the checkbox under *Compatibility Configuration* is **not** checked. This will prevent the selection menu from appearing, as well as cause discrepancies in using pre-defined key combinations.

## Configuring the IME
There are two ways to bring up the *Text Services and Input Language* window:<br>
i. Regional and Language Options >> Languages Tab >> Details button<br>
ii. From the Language Bar, click on the tiny little down arrow button >> Settings

### Changing Language without the Mouse
Many users use the mouse to click on the language bar to change the modes it's in. You can configure the Language Bar with shortcuts so you don't have to do this.

Assuming the IME is installed, click on *Key Settings* from the *Text Services and Input Language* window.
Depending on how many languages you already have installed, more than two to four options may appear here. We are only interested in two in particular - that is to switch the language to Japanese, and switch to English - however users that can speak/read/write more than one language may want to change more than this option in a similar manner.

The observant person may notice that an option may appear with a frequently mentioned key sequence of **ALT + SHIFT**. Pressing this key sequence will cause the Language Bar to cycle through the installed languages (if you have just English and Japanese, it'll switch between the two whenever you press it). If this is not the case, it may be why some suggestions appearing in the forum are not working for you. We'll remedy this immediately:

Select *Switch to Japanese* and click the *Change Key Sequence* button. Now here, you're free to change the key sequence to whatever you like, just as long as you can remember it in the future. Do the same for switching to English, as you will occassionally need to do so when your input mode gets stuck. Personally, mine is set to **CTRL + SHIFT + 1** (with the option to switch back to English as **CTRL + SHIFT + 0**; multilingual users may want to arrange their languages to other numbers, or whatever). Now whenever you press **CTRL + SHIFT + 1** (or whatever you set yours to) the IME will change to JP.

You're pretty much done with this window now, and are ready to start using the IME.

## Using the IME
The IME is quite an amazing tool, and it takes a lot of patience, practice and knowledge to be able to use it effectively. There are also a lot of shortcuts available that make changing modes easier (or saving you the trouble of doing so), and there are just as many odd quirks that cause the IME to behave in inexplicable ways.

When you first switch the language to JP (using whatever key sequence you set up above), the *Input Mode* default to "direct input". This means that the IME will not do any transliteration for you as you type (FFXI will show the mode as "off" in it's first box to the right of the input line when this is the case).

Press **ALT + ~** (tilde) to turn the IME on. You may have to hold it for a moment, since FFXI misses modifier keys at times, especially on slower computers. If this does not work after several attempts, you have failed to turn off *Extend support of advanced text services to all programs*. Or you're just weird or something. Having this option enabled will also prevent the candidate menu from appearing when you press the spacebar. Ctrl+~ should work for you instead, for the time being. Again, no candidate window until you change that setting.

In FFXI's language bar, the "off" should turn to an "on", and the "A" beside it should turn into the hiragana equivalent. You are now in hiragana mode, and there are ways of changing to katakana, and full- and half-width alphanumeric modes. The second box beside the "Off/On" in FFXI's language bar will change to reflect the mode you're in. The other modes you don't want to sit in because it's quite frankly annoying. There's another way to change your input into these formats, and it's much easier than changing your mode.

Since I rarely change my input mode (aside from turning the IME on/off using **ALT + ~**), I don't know the exact key combonations for each one. But using the **CAPS LOCK** key in conjunction with **ALT**, **SHIFT** or **CTRL** will change your mode. IIRC, **ALT + CAPS LOCK** will change the mode to hiragana. This much is good to know when you find all your input defaulting to katakana.

When you're typing your sentences in Japanese, it's generally much easier to do it a little bit at a time. A word followed by a particle, or a word comprised of compound-kanji. Type this, hit space to find the correct candidate, then press enter to select it. Move on. This prevents unexpected transliterations to appear, and it's generally time consuming to move back through your input to correct it. The annoyed user will press Escape far too many times, resulting in only more annoyance after losing all the green text, or the entire input bar.

Your new input typically appears as green. Sometimes the rest of it will appear in yellow depending on how much you type in. When you hit spacebar, the IME will attempt to locate the parts of the sentence and transliterate them best it can. Selection is shown by green, while the rest of your input is yellow. Sometimes the IME selects the groups of your entry wrong, having taken too much or too little of the reading. Holding shift and pressing left or right will detract from or extend the current selection, at the same time turning it back to hiragana until you press space to attempt another transliteration. Don't press space if you don't want it to try turning it into kanji. If you've found the right candidate and there's more you need to correct, press left or right to move to the next/previous group. Otherwise press enter and it'll change your entry to white, signifying that you're done with the transliteration.

Yes, you need to press enter twice if you just want to type English. Get used to it, you can't change this behavior.

If you need a part of your text to appear in katakana, type it in first, then press the **F7** key. Voila, you have katakana.

Many of the keys from **F5** to **F12** will change your current input to a different mode. In FFXI, many of these won't seem to have an effect, but that's because FFXI doesn't accept half-width input. I don't remember what each one does off-hand, so playing with them is your best bet to learning what each of them do. (I know that somewhere along **F10** to **F12** will change your current input to straight roma-ji). Beware of **F1** to **F4** if you still have *Extend support of advanced text services to all programs* enabled. You can possibly freeze and/or crash FFXI since the Windows IME commanderes FFXI when the IME Tools open.

**Added:** There tends to be only one shift key that works when typing kana in FFXI, which is usually the left one. If one doesn't work, try the other. This only happens when the IME is turned on. Both keys work as normal when you're not typing kana. After you run into this a few times it becomes almost second nature to keep using it. This has something to do with Japanese keyboards only have one shift key, or so I hear.

There are multiple ways of typing in English without having to turn the IME off entirely. As mentioned above, somewhere between **F10** and **F12** will change your input to roma-ji. Therefore, you can type your entire sentence in hiragana mode and hit the appropriate F-key. Pressing it multiple times changes the case of the letters.

Secondly, and a bit of a quirk at times, either pressing the Shift key once (can't remember which), or Shift and another letter ("I" for example, for those that have good habits in their written English), will change the mode to Alphanumeric. The shift method though, I believe, defaults to full-width which is the odd-looking wide characters. You'll probably end up pressing the F-key at the end anyways or turning off the IME. Just know that this quirk exists. If this happens and you didn't want it to, hit escape once to clear the green text and start typing again.

There are cases where you'll get stuck in certain modes. If this happens, and you've tried to change the mode back to hiragana using the above methods, AND pressing **ALT + ~** multiple times to turn the IME on and off doesn't work, then this is where you should have set up a key sequence that turns Windows' Language bar back to English. (**CTRL + SHIFT + 0** in my case) Doing that, then turning it back to Japanese should clear up any such problems. If not, beat your fist into it's fontface (read: you're SOL until you restart FFXI).

FFXI remembers what mode you left off in. By pressing **CTRL + L** (linkshell), **CTRL + R** (reply), or **CTRL + P** (party), FFXI will recall and have you continue typing in that mode. This behavior is programmed into the IME, so you have to deal with it. However, if you type /s, /sh, /l, or /p first, the mode defaults to *Direct Input*. Actually, ANYTHING you start with a / will keep the IME off until you turn it back on or press enter. It does this because even the Japanese have to type commands as their English equivalents.