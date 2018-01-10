---
permalink: /commmands/game/
title: Game Commands
---

Game commands allow you to control various aspects of the game rendering engine, as well as the Window frame.

### game_forceambientlight
```
game_forceambientlight <#>
```
Forces the game engine to use a specified ambient light setting.

#### Allowed Values

| Value | Description |
|:---|:---|
| `0` | Ignores specified ambient light setting |
| `1` | Forces use of the ambient light setting |

### game_ambientlight
```
game_ambientlight [A] <R> <G> <B>
```
Defines the game ambient light color in RGB format with optional alpha channel.

### fillmode
```
fillmode <#>
```
Sets the game engine rendering mode.

#### Supported Modes

| Mode | Description |
|:---|:---|
| `0` | Normal rendering |
| `1` | Wireframe-only rendering |
| `2` | Point-fill rendering |

**Tip:** Use `fillmode` with no argument to toggle between normal and wireframe-only rendering.
{: .notice}


* `game_gamma #` - Sets game gamma
    * `0`-`100`, Default = `50`
* `game_allowsetcursorpos #` - Sets whether the game is allowed to set the cursor position
    * `0` = false
    * `1` = true
* `game_minimize` - Minimizes the game to the taskbar
* `game_exit` - Exits the game to POL (character remains in world like going LD)
* `terminate` - Hard exits the game to desktop (not recommended)
* `game_allowresize` - This command, when set to `1`, will disable the resizing restriction and you may freely resize the window proportionally without holding down Alt or Control. The shift key is still required to resize without proportion restrictions (`1` for allowing resize without holding alt or control)
* `game_exitprompt #` - Enable confirmation dialoge before exiting when clicking the 'X' button on the FFXI window.
    * `0` = disable
    * `1` = enable
* `game_exittype` - This sets the exit type for the game, Terminate or Exit to POL (`1` for Terminate).
* `window_toggleframe` - Toggles window frame on/off.
* `window_togglefullscreen` - Sets game to psudeo-fullscreen mode
