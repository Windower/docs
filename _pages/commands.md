---
permalink: /commands/
title: Windower Commands
---
## General Commands
* `showfps #` - Shows or hides FPS counter
    * `0` = hidden
    * `1` = visible
    * no parameter to toggle
* `fps_position x y` - Repositions the FPS Counter.
* `screenshot <format> [hide]` - Takes a screenshot, specifying hide hides Windower from the screenshot.
    * format can be `bmp`/`jpg`/`png`
* `video start <xRes> <yRes> <fps> <quality>` - Starts a video using specified parameters
* `video stop` - Stop recording
* `wait #` - Pauses execution of a command/bind/alias/script for given seconds. Can be decimal.
* `pause #`

## Alias Commands
* `alias <alias> command` - e.g. `alias blah wait 5;echo hello` will create a pseudo console command `blah` can be typed in the console, used in a script, or even put into a bind
* `clearaliases` - Clears all currently defined aliases.
* `listaliases` - Lists all currently created aliases. (Command will fail if you have more than 40 aliases)

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

## Plugin Commands
* `load <plugin>` - Loads a plugin dll (.dll is optional, and case is irrelevant)
* `unload <plugin>` - Unloads a plugin dll
* `toggle <plugin>` - Will toggle a plugin. Designed to be bound to a key to turn off or on a plugin on a keystroke
* `plugin_list` - Lists all loaded plugins into the game chat log.
* `reload <plugin>` - Unloads and reloads a plugin.
* `unloadall` - Unload all plugins.

| Command | Parameters | Description |
| :--- | :--- | :--- |
| load | *plugin_name* | Loads a DLL plugin. The plugin name is not case-sensitive.<br> load ffxidb{: .notice--success} |
| unload | *plugin_name* | Unloads a DLL plugin.<br> ``` unload ffxidb ``` |

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