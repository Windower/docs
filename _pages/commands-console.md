---
permalink: /commands/console/
title: Console Commands
---

Console commands allow you to interact with and control the behavior of the Windower console.

### console_toggle
```
console_toggle
```
Toggles the visibilty of the console.

### console_clear
```
console_clear
```
Clears the console buffer.

### console_echo
```
console_echo "<string>"
```
Echoes the specified string to the console buffer.

### console_displayactivity
```
console_displayactivity <#>
```
Sets whether the console displays automatically on new text.

#### Allowed Values
| Value | Description |
|:---|:---|
| `0` | Disable automatic display |
| `1` | Enable automatic display |

### console_fadedelay
```
console_fadedelay <int>
``` 
Sets the time before the console fades (in milliseconds).

### console_position
```
console_position <x> <y>
```
Sets the console position.

### console_font
```
console_font <font> <size>
```
Sets the text size and font for the Windower console.

### console_color
```
console_color [A] <R> <G> <B>
```
Sets the console color in RGB format with optional alpha channel.

### exec
```
exec "<file>"
```
Executes a script in the Windower console.

### console_chatopen
```
console_chatopen <#>
```
Manages the behavior of the console key when the FFXI input line is active.

#### Allowed Values
| Value | Description |
|:---|:---|
| `0` | Disable the console key when the input line is active |
| `1` | Enable the console key at all times |

### console_screendir
```
console_screendir <#>
```
Sets the relative or absolute path for Windower screenshots.

### console_log
```
console_log <#>
```
Controls logging of console output.

#### Allowed Values
| Value | Description |
|:---|:---|
| `0` | Disable console logging |
| `1` | Enable console logging |
    
**Note:** Console output is logged to `windower\console.log`.
{: .notice}
