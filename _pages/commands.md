---
permalink: /commands/
title: Windower Commands
---
## General Commands

### showfps
```
showfps [#]
```
Shows or hides the framerate display.

Accepted values:
* `0` = hidden
* `1` = visible

Using `showfps` without a parameter toggles visibility.

### fps_position
```
fps_position <x> <y>
```
Repositions the framerate display.

### screenshot
```
screenshot <format> [hide]
```
Takes a screenshot.

Available formats:
* `bmp`
* `jpg`
* `png`

If specified, the optional `hide` parameter hides Windower objects from the screenshot.

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

## Alias Commands

### alias
```
alias <alias> <command>
```
Creates a pseudo console command that can be typed into the console or used in a script or key bind.

For example: `alias blah wait 5;echo hello` creates the `blah` pseudo-command.

### clearaliases
```
clearaliases
```
Clears all currently-defined aliases.

### listaliases
```
listaliases
```
Lists all currently-defined aliases.
The command may fail if you have more than 40 aliases.

## Console Commands
* `console_toggle` - Toggles the visibilty of the console
* `console_clear` - Clears the console buffer
* `console_echo "string"` - Echos string to the console buffer
* `console_displayactivity #` - Sets whether the console displays on new text
    * `0` = disable
    * `1` = enable
* `console_fadedelay int` - Time in milliseconds before the console fades
* `console_position X Y` - Sets the console position
* `console_font font size` - Sets the console font and size
* `console_color A R G B` - Sets the console color
    * Alpha (Optional) Red Green Blue
* `exec "file"` - Executes a console script
* `console_chatopen#` - Allow the 'console key' to send it's actual value when the FFXI input line is being used, rather than opening the console.
    * `0` = disable
    * `1` = enable
* `console_screendir #` - The relative or absolte path that screenshots are saved to.
* `console_log #` - Saves the console output to windower\console.log
    * `0` = disable
    * `1` = enable

## Game Commands
* `game_forceambientlight #` - Forces using specified ambient light
    * `0` = ignore
    * `1` = force
* `game_ambientlight A R G B` - Set game ambient light
    * Alpha (Optional) Red Green Blue
* `fillmode #` - Set rendering mode
    * `0` = normal
    * `1` = wireframe
    * `2` = point fill
    * No argument to toggle between normal and wireframe
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

## Keyboard Commands

### bind
```
bind [modifier][state]<key> [up] <command>
```
Binds a command to a key. By default, binds on key press; specify `up` to bind on key release.
Multiple keys can be assigned in the same statement by using `|` between keys.

Use an optional modifier to bind the key only while pressing Shift, Alt, Ctrl, Apps, or Win:
* `^`: Ctrl
* `!`: Alt
* `@`: Windows
* `#`: Apps

Optionally specify a state to indicate whether the bind is valid with the FFXI input line active or inactive:
* `$`: Valid while FFXI input line is active
* `%`: Valid while FFXI input line is inactive

For an exhaustive list of bindable keys, see [[Key Mapping]].

### unbind
```
unbind <key> [up]
```
Removes an existing key binding. By default, unbinds from key press; specify `up` to unbind from key release.

* `bind [modifier][state]key [up] command` - Binds a command to a key. Down is assumed, specify up for bind on release of key. Multiple keys can be assigned in the same bind statement, using `|` between keys. Use a modifier to bind the key only while also pressing one of the Shift, Alt, Ctrl, Apps, or Windows keys (Note use of the apps or windows key modifiers is not compatible with macros which use the windows or apps key by themselves as a bind). Use the optional state if you want to indicate the bind is valid only with the FFXI input line active/inactive.
    * `^` - Ctrl key
    * `!` - Alt key
    * `@` - Windows Key
    * `#` - Apps key
    * `state`
      * `$` - Valid when the FFXI input line is active
      * `%` - Valid when the FFXI input line is inactive
    * See [[Key Mapping]] for an exhaustive list of available keys
* `unbind key [up]` - Removes a key binding. down is assumed, specify up for up
* `listbinds` - Lists all currently bound keys into the game chat log
* `clearbinds` - Unbinds all currently bound keys
* `keyboard_bind` - alias for bind
* `keyboard_unbind` - alias for unbind
* `keyboard_sendstring "string"` - Sends a string to the game
* `input "string"` - alias for keyboard_sendstring
* `keyboard_type "string"` - This is the old functionality of `keyboard_sendstring`, this types the string to type "string" the chat input bar ingame
* `type "string"` - alias for keyboard_type
* `keyboard_blockinput #` - Blocks keyboard input
    * `0` = unblock
    * `1` = block
* `keyboard_allowmmf #` - Allows or disables keyboard input via MMF
    * `0` = disable
    * `1` = enable
* `paste` - Pastes the contents of the clipboard to the input buffer.
* `setkey [keyname] [state]` - Sets a key to a state.
    * keyname
        * Most of the key names can be easily guessed, but there is probably an official mapping that should be linked here.
    * state
        * `down` - Button pressed down
        * `up` - Button released

## Mouse Commands
* `mouse_blockinput #` - Blocks mouse input
    * `0` = unblock
    * `1` = block (MAJOR PROBLEMS)

| Command | Parameters | Description |
| :--- | :--- | :--- |
| mouse_blockinput | *#* | Blocks mouse input. Accepted values:<br> `0` = unblock<br> `1` = block (MAJOR PROBLEMS) |

### mouse_blockinput
```
mouse_blockinput <#>
```
Blocks mouse input. Accepted values:
* `0` = unblock
* `1` = block (MAJOR PROBLEMS)

## Plugin Commands

### load
Loads a plugin. The plugin name is not case-sensitive.
```
load <plugin>
```

### unload
Unloads the specified plugin.
```
unload <plugin>
```

### toggle
Toggles the specified plugin. Designed to be bound to a key to turn a plugin on or off with a keystroke.
```
toggle <plugin>
```

* `load <plugin>` - Loads a plugin dll (.dll is optional, and case is irrelevant)
* `unload <plugin>` - Unloads a plugin dll
* `toggle <plugin>` - Will toggle a plugin. Designed to be bound to a key to turn off or on a plugin on a keystroke
* `plugin_list` - Lists all loaded plugins into the game chat log.
* `reload <plugin>` - Unloads and reloads a plugin.
* `unloadall` - Unload all plugins.

| Command | Parameters | Description |
| :--- | :--- | :--- |
| load | *plugin_name* | Loads a plugin. The plugin name is not case-sensitive.<br> **Ex:** `load ffxidb` |
| unload | *plugin_name* | Unloads the specified plugin.<br> **Ex:** `unload ffxidb` |
| toggle | *plugin_name* | Toggle a plugin. Designed to be bound to a key to turn a plugin on or off with a keystroke.<br> **Ex:** `toggle ffxidb` |
| plugin_list | | Lists all loaded plugins in the game chatlog. |
| reload | *plugin_name* | Unloads and reloads the specified plugin.<br> **Ex:** `reload ffxidb` |
| unloadall | | Unloads all plugins. |

## Addon Commands
* `lua **l**oad <addon>` - Loads an addon
* `lua **u**nload <addon>` - Unloads an addon
* `lua **r**eload <addon>` - Reloads an addon
* `lua **c**ommand <addon> ...` - Sends a command with optional arguments to an addon
* `lua **i**nvoke <addon> <function> ...` - Invoke an addon function with optional arguments
* `lua **m**emory` - Show addon memory usage
* `lua list` - Show currently loaded addons
* `lua unloadall` - Unload all addons
* `lua **e**xec <script>` - Executes a Lua script