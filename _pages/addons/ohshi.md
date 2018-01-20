---
permalink: /addons/ohshi/
title: OhShi
---

Replacement for yarnregex for Windower 4 I made for a friend. Uses the chat log so filters must be off. At least until i figure out another way to do it. Keeps track of various event related things. Such as, VW proc messages, mob casting, mob tp moves, TH procs and cor rolls, as well as others. Digi of shiva created the icon and was the driving force behind testing/giving me the idea to do this. Digi also created the default mob list/danger list and chose the name.

## Features

* Mob list that allows you to track only these monsters.
* Danger list where you can set what spells/abilities to catch.
* Dangerous mob list for when you want to catch everything they do (i.e. provenance watcher).

## Commands

The following commands are avaiable with the `ohshi` alias:

### bgcolor
```
ohshi bgcolor <alpha> <red> <green> <blue>
```

Sets the color of the box.

### text
```
ohshi text <red> <green> <blue>
```

Sets text color.

### font
```
ohshi font <size> <name>
```

Sets text font and size.

### pos
```
ohshi pos <posx> <posy>
```

Sets position of box.

### duration
```
ohshi duration <seconds>
```

Sets the timeout on the notices.

### track
```
ohshi track <vw/legion/other/abyssea/meebles/dangerous> <mobname>
```

Add mob to tracking list. Dangerous will cause all tpmoves/spell casting to trigger the warning icon/color

### untrack
```
ohshi untrack <vw/legion/other/abyssea/meebles/dangerous> <mobname>
```

Remove mob from tracking list.

### danger
```
ohshi danger <spell/ws> <dangerword>
```

Adds danger word to list.

### staggeronly
```
ohshi staggeronly (true/false)
```

Switches on/off stagger only mode.

### unload
```
ohshi unload
```

Save settings and close ohShi.

### help
```
ohshi help
```

Shows this menu.