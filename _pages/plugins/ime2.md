---
permalink: /plugins/ime2/
title: IME
---

IME implements the Japanese Input Method Editor in FFXI. This allows you to type text in Japanese. In order to use it, Japanese language support must be installed, and Japanese must be selected as the default non-unicode language in Windows.

# Basic Usage

1. Configure the IME appropriately in Windows.

1. Use Windower to log into Final Fantasy XI and load the IME plugin.

1. From the Windows language bar, change your language to Japanese.

1. Open the chat log, and use the keyboard shortcut to change your input mode.

---

# Known Issues

There are several known issues when using the IME plugin for Windower 4:

* **Keyboard shortcuts to switch to Japanese do not seem to work.**

    For example, if you have keyboard layouts for German, English and Japanese installed, the typical **Alt**+**Shift** key combination to cycle languages will only switch between German and English. If you assign specific shortcuts, say **Ctrl**+**Shift**+**1** for German, **Ctrl**+**Shift**+**2** for English and **Ctrl**+**Shift**+**3** for Japanese, only the first two will work.

    > **Workaround:** Switch the language manually from the Windows language bar.

* **Keyboard shortcut to switch input modes does not work.**

    Even after manually selecting Japanese from the Windows language bar, you cannot change the input mode.

    > **Workaround:** Reconfigure the [input mode keyboard shortcut](#reconfigure-the-input-mode-keyboard-shortcut).

* **The input mode can get stuck in Japanese.**

    Occasionally, the input mode can get stuck and you won't be able to type in any keyboard layout other than Japanese.

    Because the Japanese *Romaji-Input* mode is similar to the English layout, you may want to stick with the Japanese layout and keep it in Romaji mode most of the time. You'll get used to it, and if you didn't want to use Japanese input anyways, why do you have the IME plugin loaded? It doesn't have to be on auto-load.

---

# Configuration (Windows 10)

* [Install the Japanese IME Keyboard](#install-the-japanese-ime-keyboard)
* [Set the non-Unicode input language to Japanese](#set-the-non-unicode-program-input-language)
* [Reconfigure the input mode keyboard shortcut](#reconfigure-the-input-mode-keyboard-shortcut)

## Install the Japanese IME Keyboard

1. Open the Region and Language settings: <br> **Windows Settings** > **Time & Language** > **Region and Language**

1. Click **Add a language** and search for Japanese.

1. Select the language, click **Next**, and proceed to install.

## Set the non-Unicode program input language

> **Tip:** You may be able to use AppLocale-style programs such as Locale Emulator, but this is currently untested.

1. Open the Region and Language settings: <br> **Windows Settings** > **Time & Language** > **Region and Language**

1. Under **Related settings**, click **Additional date, time, & regional settings**.

1. Click **Region**.

1. Open the **Administrative** tab, and click **Change system locale...**.

1. Select **Japanese (Japan)**, and click **OK**. 

> **Note:** You will need to reboot your computer for the locale change to take effect.

## Reconfigure the Input Mode Keyboard Shortcut

1. Open the Region and Language settings: <br> **Windows Settings** > **Time & Language** > **Region and Language**

1. Select the Japanese keyboard, and click **Options**.

1. Select **Microsoft IME**, and click **Options**.

1. Under **Advanced Settings**, click **Open advanced settings**.

1. In the **Editing operation and behavior** section, click **Advanced**.

1. Locate the **IME ON/OFF** function in the table.

    > Generally, this function is assigned to a key that only physically exists on Japanese keyboards.

1. Double-click the currently assigned key in the first column.

1. Specify a more useful key combination such as **Ctrl**+**F2**, and click **OK**.

1. Verify the new key combination in the table, and then click **OK**.