---
permalink: /addons/plasmon/
title: Plasmon
---

This addon tracks plasm, killed mobs and dropped airlixirs during a delve.

## Commands
### help
```
plasmon help
```

Shows the help text.

### test
```
plasmon test
```

Fills the chat log with some messages to show how the plugin will work.

### reset
```
plasmon reset
```

Sets gained plasm, monster kill count and dropped airlixirs to 0.

### full-reset
```
plasmon full-reset
```

Sets both current and total gained plasm, monster kill count and dropped airlixirs to 0.

### show
```
plasmon show
```

Shows the tracking window.

### hide
```
plasmon hide
```

Hides the tracking window.

### toggle
```
plasmon toggle
```

Toggles the tracking window's visibility.

### light
```
plasmon light <enabled>
```

Enables or disables light mode. When enabled, the addon will never show the window and just print a summary in the chat box at the end of the run. If the //enabled// parameter is not specified, the help text will be shown.

* **enabled:** specifies the status of the light mode. **default**, **false** or **0** mean disabled. **true** or **1** mean enabled.

### timer
```
plasmon timer <enabled>
```

Enables or disables the timer. When enabled, the addon will never show the window and just print a summary in the chat box at the end of the run. If the //enabled// parameter is not specified, the help text will be shown.

* **enabled:** specifies the status of the timer. **false** or **0** mean disabled. **default**, **true** or **1** mean enabled.

### position
```
plasmon position [[-h]|[-x <x>] [-y <y>]]
```

Sets the horizontal and vertical position of the window relative to the upper-left corner. If no parameter is specified, the help text will be shown.

* **-h:** shows the help text.
* **-x //x//:** specifies the horizontal position of the window.
* **-y //y//:** specifies the vertical position of the window.

### font
```
plasmon font [[-h]|[-f <font>] [-s <size>] [-a <alpha>] [-b [<bold>]] [-i [<italic>]]]
```

Sets the style of the font used in the window. If no parameter is specified, the help text will be shown.

* **-h:** shows the help text.
* **-f //font//:** specifies the text's font.
* **-s //size//:** specifies the text's size.
* **-a //alpha//:** specifies the text's transparency. The value must be set between 0 (transparent) and 255 (opaque), inclusive.
* **-b [//bold//]:** specifies if the text should be rendered bold. **default**, **false** or **0** mean disabled. **true**, **1** or no value mean enabled.
* **-i [//italic//]:** specifies if the text should be rendered italic. **default**, **false** or **0** mean disabled. **true**, **1** or no value mean enabled.

### color
```
plasmon color [[-h]|[-o <objects>] [-d] [-r <red>] [-g <green>] [-b <blue>] [-a <alpha>]]
```

Sets the colors of the various elements present in the addon's window. If no parameter is specified, the help text will be shown.

* **-h:** shows the help text.
* **-o //objects//:** specifies the item/s which will have its/their color changed. If this parameter is missing all the objects will be changed. The accepted values are: **all**, **background**, **bg**, **title**, **label**, **value**, **plasmon**, **plasmon.title**, **plasmon.label**, **plasmon.value**, **airlixir**, **airlixir.title**, **airlixir.label**, **airlixir.value**.
* **-d:** sets the red, green, blue and alpha values of the specified objects to their default values.
* **-r //red//:** specifies the intensity of the red color. The value must be set between 0 and 255, inclusive, where 0 is less intense and 255 is most intense.
* **-g //green//:** specifies the intensity of the greencolor. The value must be set between 0 and 255, inclusive, where 0 is less intense and 255 is most intense.
* **-b //blue//:** specifies the intensity of the blue color. The value must be set between 0 and 255, inclusive, where 0 is less intense and 255 is most intense.
* **-a //alpha//:** specifies the text's transparency. The value must be set between 0 (transparent) and 255 (opaque), inclusive.

## Bug Tracker
Please report any bug or suggetion on the bug tracker @ https://github.com/giulianoriccio/Lua/issues?state=open

## Changelog

#### v1.20130613
* **add**: Stop tracking on zone change.

#### v1.20130610
* **add**: Added a function to enable/disable the fracture timer.

#### v1.20130609
* **fix**: Fix for ally leaders and mobs counting.

#### v1.20130604
* **add**: Added a 45 minutes timer. Requires Timers plugin's custom timers function.

#### v1.20130529
* **change**: Aligned to Windower's addon development guidelines.

#### v1.20130528
* **add:** Added a recovery mode in case of crash/reload.
* **fix:** Fixed the mob kill count.

#### v1.20130517
* **fix:** Fixed a bug that kept the addon from counting airlixirs.

#### v1.20130516
* **change:** A "light mode" has been added. while active, the window will be kept hidden and only a summary will be shown at the end of the run.

#### v1.20130515
* First release.

## Source
The latest source and information for this addon can be found on [GitHub](https://github.com/Windower/Lua/tree/live/addons/plasmon).