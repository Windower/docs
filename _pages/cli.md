---
permalink: /cli/
title: Windower Command Line Interface
---

Windower supports a number of command-line arguments when launching. You can create various shortcuts to launch Windower with different settings, override specific parameters, set up private servers, etc.

## Profile Arguments
The specified default values are just the default values when creating a profile. If a profile is specified, and the default for any missing value is taken from that profile, instead of the default specified in the table below.

| Argument | Description |
|:---|:---|
| `-p|--profile <profile>` | Sets the profile to use to `profile`. If present, it will skip the interactive UI and launch the game directly. <br>Default: The empty (default) profile. |
| `-r|--region <region>` | Sets the POL region to use to `region`. Allows one of `Auto`, `JP`, `US`, or `EU`. <br>Default: Automatic detection (`Auto`). |
| `-c|--console-key <key>` | Sets the key to use to open the Windower console to `key`. <br>Default: Insert. |
| `-w|--width <x>` | Sets the horizontal resolution to `x`. <br>Default: The horizontal display resolution. |
| `-h|--height <y>` | Sets the vertical resolution to `y`. <br>Default: The vertical display resolution. |
| `--borderless` | Sets the window mode to **Borderless**. <br>Default: Set. |
| `--windowed` | Sets the window mode to **Windows**. <br>Default: Not set. |
| `--fullscreen` | Sets the window mode to **Fullscreen**. <br>Default: Not set. |
| `--executable <path>` | Sets the path to the executable to use. <br>Default: `&lt;FFXIPath&gt;/pol.exe`. |
| `--args <arg-string>` | Sets teh arguments to pass to the executable. Only meant to be used together with `--executable`. One string expected, if multiple arguments need to be passed, they need to be quoted. <br>Default: None. |

## Functional Arguments
| Argument | Description |
|:---|:---|
| `-h|--hide` | Hides the UI. Only makes sense in combination with specifying a profile, or with the `--quit` or `--update` flags. <br>Default: Not set. |
| `-q|--quit` | Exits Windower immediately after the update step. <br>Default: Not set. |
| `-u|--update` | Forces an update, and implies `--hide` and `--quit`. Will update even if other Windower instances are running. May corrupt running instances. <br>Default: Not set. |

## Technical Arguments
| Argument | Description |
|:---|:---|
| `--debug` | Sets the internal debug flag, passed onto plugins. Unspecified use case, not meant for users. <br>Default: Not set. |
| `--no-steam` | Ignores the steam install of FFXI, even if found. <br>Default: Not set. |
