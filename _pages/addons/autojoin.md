---
permalink: /addons/autojoin/
title: AutoJoin
---

This addon allows you to join or decline invites automatically. It is configurable to run in two modes:
* **Whitelist mode**: will join invites by people you have specifically mentioned on your whitelist.
* **Blacklist mode**: will join invites by anyone *except* people on your blacklist.

It is configurable both in the game as well as in the `settings.xml` that comes with it.

## Features

* Works for both party and alliance invites.
* In-game interface with short and simple syntax to change modes and modify whitelist and blacklist
* Supports per-character settings, also adjustable from within the game.
* If stuck in a CS or an NPC dialogue, it will join as soon as the you are free to move again.
* Ability to automatically decline invites from people on your blacklist.
* Will not join invites if the treasure pool is not empty.

**Note**: Currently, the invite simply won't be accepted and you will have to join manually once you cleared the treasure pool or if you want to ignore it. It is planned to adjust this so it will automatically join once the pool clears, but that's currently not possible due to LuaCore limitations. It will be added in the future.
{: .notice--info}

## Commands

Can either be called by the full or abbreviated name:
```
autojoin
aj
```

Calling it without any arguments will print the current settings. The following arguments are supported:

### aj whitelist/blacklist 
```
aj <list> <op> [name1 [name2 [...]]]
```

This will add names to either the blacklist or whitelist list.
* `<list>` can be any of `whitelist`, `white`, `wlist`, `w` for the whitelist and `blacklist`, `black`, `blist`, `b` for the blacklist.
* `<op>` can be any of `add`, `a`, `+` to add to the list and `remove`, `r`, `-` to remove from the list.
* `[name1 [name2 [...]]]` is a space-separated list of names to add/remove to the respective list.

### aj mode
```
aj mode <list>
```

This switches between modes.
* `<list>` same as above.

### aj decline
```
aj decline <true|false>
```

Sets the auto-decline property to `true` or `false`.

### aj save
```
aj save
```

Saves the current settings for *all* characters.

## Settings File

All of the above arguments will make immediate changes to the `settings.xml` for that character only, except for `aj save` which saves all of those settings globally.

## Source
The latest source and information for this addon can be found on [GitHub](https://github.com/Windower/Lua/tree/live/addons/autojoin).