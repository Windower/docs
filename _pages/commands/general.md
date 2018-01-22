---
permalink: /commands/general/
title: General Commands
---

General commands control basic Windower functionality such as the framerate display and screenshots.

### showfps
```
showfps [#]
```
Shows or hides the framerate display.

##### Accepted Values

| Value | Description |
|:---|:---|
| `0` | Framerate display hidden |
| `1` | Framerate display visible |

**Tip:** Use `showfps` without a parameter to toggle visibility.
{: .notice--info}

### fps_position
```
fps_position <x> <y>
```
Repositions the framerate display.

### screenshot
```
screenshot <format> [hide]
```
Takes a screenshot in the specified format.

Supported formats: `bmp`, `jpg`, `png`

**Tip:** Use the optional `hide` parameter to hide Windower objects from the screenshot.
{: .notice--info}

### video start
```
video start <xres> <yres> <fps> <quality>
```
Starts recording a video with the specified parameters.

### video stop
```
video stop
```
Stops video recording.

### wait / pause
```
wait <#>
pause <#>
```
Pauses execution of a command, bind, alias, or script for the given number of seconds. Decimal values may be used.
