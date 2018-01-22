---
permalink: /addons/cancel/
title: Cancel
---

Cancels buffs from the command line. This addon is similar to the cancel plugin for Windower, but it also accepts string representations of buff names. So you could do `//cancel defender` instead of `//cancel 57`.

This addon accepts multiple buffs (comma delimited) and supports wildcard matching per normal Windower wildcard rules. So entering `cancel Copy Image*` into console would cancel all forms of Copy Image. Entering `cancel Protect,Shell,44*` would cancel Protect, Shell, and all buffs with ID 44 and 440~449. The addon checks and makes sure you have the buff before attempting to cancel it, so you will not send any bad packets.

## Features

* Cancels buffs from the chat line.


## Commands

### cancel
```
cancel <buffname1 or buffID1>,<buffname2 or buffID2>,...
```

## Source
The latest source and information for this addon can be found on [GitHub](https://github.com/Windower/Lua/tree/live/addons/cancel).