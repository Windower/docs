---
permalink: /plugins/ffxidb/
title: FFXIDB
---

Displays an in-game minimap.

You can position and zoom the map by dragging and scrolling with the mouse or by using commands.

## General Commands

```
ffxidb
```
If specified with no parameters, displays the plugin help.

### Reload Settings
```
ffxidb {r|reload}
```
Reloads the settings file.

## Available Map Commands

### Position
```
ffxidb {p|pos|position} <x> <y>
```
Sets the minimap x and y positions.

```
ffxidb {px|posx|positionx} <x>
```
Sets the minimap x position.

```
ffxidb {py|posy|positiony} <y>
```
Sets the minimap y position.

### Scale
```
ffxidb {sc|scale} <factor>
```
Sets the minimap scale factor. For example, `1` for 1.0x scale.

**Default:** `1`

### Zoom
```
ffxidb {z|zoom} <percentage>
```
Sets the minimap zoom between 0 and 1000, inclusive.

```
ffxidb {z+|z-|zoom+|zoom-}
```
Increases (+) or reduces (-) the minimap zoom by 10.

### Opacity
```
ffxidb {o|opacity} <percentage>
```
Sets the minimap's opacity between 0 and 100, inclusive.

### Entity Visibility
```
ffxidb {pc|npc|mob|marker}
```
Toggles visibility for the specified entity type on the minimap.

### Ranges
```
ffxidb {rn|range} <radius> [<red> <green> <blue>]
```
Defines a new range to show on the map.

```
ffxidb {drn|delete-range} <radius>
```
Deletes a previously defined range.

### Target Lines
```
ffxidb {tl|target-line}
```
Toggles target line visibility on the minimap.