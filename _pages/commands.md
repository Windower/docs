---
permalink: /commands/
title: Windower Commands
---

Windower includes a variety of commands that allow you to control and configure the behavior of Windower.

## Command Usage
Windower commands can be used in several ways.

| Usage Method | Description |
|:---|:---|
| Windower Console | Press the console key to open the console, and simply type the command as it appears in this section. |
| Windower Scripts | In your script, enter the command as it appears in this section. |
| Game Chatlog | In the game chatlog, prefix the command with `//`.<br> For example: `//showfps 1` |
| Game Macros | In your macro, prefix the command with `/console `.<br> For example: `/console showfps 1` |

## Command Syntax
The commands in this section adhere to the following syntax.

| Element | Description |
|:---|:---|
| `plain text` | Elements written in plain text should be entered as-is. |
| `<angle brackets>` | Required parameter. Replace with an appropriate value. |
| `[square brackets]` | Optional parameter. Replace with an appropriate value. Or don't! |
  
#### Example
```
bind [modifier][state]<key> [up] <command>
```
The **bind** command supports two required parameters (**key**, **command**) and three optional parameters (**modifier**, **state**, **up**).

## Command Categories

| Category | Description |
|:---|:---|
| [General](general/) | Control basic Windower features such as screenshots. |
| [Alias](alias/) | Create Windower pseudo-commands that can be used in the same way as built-in commands. |
| [Console](console/) | Control the appearance and behavior of the Windower console. |
| [Game](game/) | Control various aspects of the game rendering engine. |
| [Input](input/) | Create keybinds and manage the behavior of the keyboard and mouse. |
| [Plugin](plugin/) | Load and unload Windower plugins. |
| [Addon](addon/) | Load, unload, and interact with Windower addons. |
