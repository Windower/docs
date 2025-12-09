---
permalink: /commands/input/
title: Input Commands
---

Input commands allow you to control how Windower interacts with keyboard and mouse input, such as copy & paste and keybinds.

### bind / keyboard_bind
```
bind [modifier][state]<key> [up] <command>
keyboard_bind [modifier][state]<key> [up] <command>
```
Binds a command to a key.<br>
By default, binds activate on key press; specify `up` to bind on key release.

**Tip:** You can assign a command to multiple keys in a single statement by separating each key with a pipe (`|`) character.
{: .notice--info}

#### Supported Modifiers

| Modifier | Description |
|:---|:---|
| `^` | **Ctrl** |
| `!` | **Alt** |
| `@` | **Win** |
| `#` | **Apps** |
| `~` | **Shift** |

#### Supported Chat Box States

| State | Description |
|:---|:---|
| `$` | Keybind is valid while the game's chat box is open |
| `%` | Keybind is valid while the game's chat box is closed |

For an exhaustive list of bindable keys, see the [Key Mappings](../keymapping/) section.

### unbind / keyboard_unbind
```
unbind <key> [up]
keyboard_unbind <key> [up]
```
Removes an existing key binding. By default, unbinds from key press; specify `up` to unbind from key release.

### listbinds
```
listbinds
```
Lists all currently defined keybinds in the game chatlog.

### clearbinds
```
clearbinds
```
Unbinds all currently defined keybinds.

### input / keyboard_sendstring
```
input "<string>"
keyboard_sendstring "<string>"
```
Sends a string of text to the game.

### type / keyboard_type
```
type "<string>"
keyboard_type "<string>"
```
Types a string of text into the game chat input bar.

**Note:** This is older functionality and has been replaced for most purposes by the **[input](#input--keyboard_sendstring)** command.
{: .notice}

### keyboard_blockinput
```
keyboard_blockinput <#>
```
Blocks or enables keyboard input.

#### Allowed Values

| Value | Description |
|:---|:---|
| `0` | Allows input from the keyboard |
| `1` | Blocks input from the keyboard |

### keyboard_allowmmf
```
keyboard_allowmmf <#>
```
Allows or disables keyboard input via MMF.

#### Allowed Values

| Value | Description |
|:---|:---|
| `0` | Disables MMF keyboard input |
| `1` | Allows MMF keyboard input |

### paste
```
paste
```
Pastes the contents of the Windows clipboard to the input buffer.

### setkey
```
setkey [keyname] [state]
```
Sets a key to a state.

#### Supported Key Names
Most key names can be easily guessed, but there is probably an official mapping that should be linked here.

#### Supported Key States

| State | Description |
|:---|:---|
| `down` | Key pressed down |
| `up` | Key released |

### mouse_blockinput
```
mouse_blockinput <#>
```
Blocks mouse input.

#### Allowed Values

| Value | Description |
|:---|:---|
| `0` | Allows mouse input |
| `1` | Blocks mouse input (MAJOR PROBLEMS) |
