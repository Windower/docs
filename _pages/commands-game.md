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
{: .notice--info}

### game_gamma
```
game_gamma #
```
Sets the game gamma value.
Integer values between `0` and `100` are allowed. The default value is `50`.

### game_allowsetcursorpos
```
game_allowsetcursorpos <#>
```
Sets whether the game is allowed to set the cursor position.

#### Allowed Values

| Value | Description |
|:---|:---|
| `0` | The game cannot set the cursor position |
| `1` | The game is allowed to set the cursor position |

### game_minimize
```
game_minimize
```
Minimizes the game to the Windows taskbar.

### game_exit
```
game_exit
```
Exits the game and returns to to PlayOnline

**Note:** Your character remains in world like going LD.
{: .notice--warning}

### terminate
```
terminate
```
Forces a hard exit to the Windows desktop.

**Caution:** This command is not recommended.
{: .notice--danger}

### game_allowresize
```
game_allowresize <#>
```
Controls the restriction on Window resizing.

#### Allowed Values

| Value | Description |
|:---|:---|
| `0` | The default Window resizing restriction applies |
| `1` | The game window can be proportionally resized without holding down `Alt` or `Ctrl` |

**Note:** You must still hold `Shift` to resize without proportion restrictions.
{: .notice}

### game_exitprompt
```
game_exitprompt <#>
```
Controls the confirmation dialog that appears before exiting when clicking the `X` button on the game window.

#### Allowed Values

| Value | Description |
|:---|:---|
| `0` | Disables the confirmation dialog |
| `1` | Enables the confirmation dialog |

### game_exittype
```
game_exittype <#>
```
Sets the exit type for the game. Terminate or Exit to POL (`1` for Terminate).

#### Allowed Values

| Value | Description |
|:---|:---|
| `0` | Hard terminates to the Windows desktop |
| `1` | Exits the PlayOnline |

### window_toggleframe
```
window_toggleframe
```
Toggles the game window frame on and off.

### window_togglefullscreen
```
window_togglefullscreen
```
Toggles pseudo-fullscreen mode for the game.
