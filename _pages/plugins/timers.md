---
permalink: /plugins/timers/
title: Timers
---

Tracks ability and spell recast timers, as well as durations on buffs that you cast.

## Commands

Can either be called only by the full name:
```
timers
```

### timers create
```
timers (c)reate <name> <duration> <up|down> <icon>
```
Create a custom timer.
* `<name>` name of the timer.
* `<duration>` time in seconds the timer will be tracking.
* `<up|down>` direction of the progress bar fill.
* `<icon>` file or subpath to .png, subpath must be contained in `%WindowerPath%/plugins/icons/`. examples:
    * `00001`
    * `abilities/00001`
    * `spells/00001.png`

### timers delete
```
timers (d)elete <name>
```
Deletes an existing timer by name.

## Settings

Timers uses timers.xml in the `plugins/settings` folder for all it's settings.
