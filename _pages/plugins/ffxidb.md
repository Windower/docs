---
permalink: /plugins/ffxidb/
title: FFXIDB
---

Displays an in-game minimap.

You can position and zoom the map by dragging and scrolling with the mouse or by using commands.

## General Commands
All the current info is displayed with:
```
//ffxidb
```

## Minimap Commands

All minimap commands begin with `ffxidb m` or `ffxidb map`.

### map position
Set the minimap x and y positions.
```
ffxidb {m|map} {p|pos|position} <x> <y>
```

Set the minimap x position.
```
ffxidb {m|map} {px|posx|positionx} <x>
```

Set the minimap y position.
```
ffxidb {m|map} {py|posy|positiony} <y>
```

### map zoom
Set the minimap zoom between 0 and 1000, inclusive.
```
ffxidb {m|map} {z|zoom} <percentage>
```

Reduce the minimap zoom by 10.
```
ffxidb {m|map} {z-|zoom-}
```

Increase the minimap zoom by 10.
```
ffxidb {m|map} {z+|zoom+}
```

### map opacity
Sets the minimap's opacity between 0 and 100, inclusive.
```
ffxidb {m|map} {o|opacity} <percentage>
```

### map settings reload
Reloads the settings file.
```
ffxidb {m|map} {r|reload}
```

### map features
Toggles PCs visibility on the minimap.
```
ffxidb {m|map} pc
```

Toggles NPCs visibility on the minimap.
```
ffxidb {m|map} npc
```

Toggles mobs visibility on the minimap.
```
ffxidb {m|map} mob
```

Toggles markers visibility on the minimap.
```
ffxidb {m|map} marker
```

Defines a new range to show on the map.
```
ffxidb {m|map} {rn|range} <radius> [<red> <green> <blue>]
```

Deletes a previously defined range.
```
ffxidb {m|map} {drn|delete-range} <radius>
```

Toggles target line visibility on the minimap.
```
ffxidb {m|map} {tl|target-line}
```
