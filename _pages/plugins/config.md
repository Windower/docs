---
permalink: /plugins/config/
title: Config
---

Adds several configuration options that are automatically applied to characters during play.


## Commands

### Help
```
config help
```

Displays information about each available command and configuration setting.

### Save
```
config save
```

Saves the current character's settings as global settings for **all characters**.

## Available Settings

### Automatic Aspect Ratio

```
config AdjustAspectRatio <true|false>
```
When set to true, automatically determines the correct aspect ratio to use based on your resolution. 

**Default:** `true`

### Animation Frame Rate

```
config AnimationFramerate [0-3]
```
Only integer values, 3 being the lowest and 0 the highest.

**Default:** `0`

### Aspect Ratio

Explicitly defines the aspect ratio (x:y resolution). Ignored if **AdjustAspectRatio** is set to `true`.

**Default:** `1.33333`

### Automatic Disconnect Time

```
config AutoDisconnectTime <#>
```

The amount of time, in minutes, of inactivity until a disconnect. Set to `0` to disable.

**Default:** `0`

### Battle Auto Target

```
config BattleAutoTarget <true|false>
```

If set to true, automatically locks on to a target after engaging.

**Default:** `true`

### Clipping Plane

```
config ClippingPlane <#>
```

Sets the maximum map draw distance. `1` is the game's default maximum.

**Default:** `5`

### Footstep Effects

```
config FootstepEffects <true|false>
```

Enables footstep effects, both display and sound.

**Default:** `true`

### Framerate Divisor

```
config FrameRateDivisor <0-2>
```

Sets the game's frame rate divisor, starting from a root of 60fps. `2` results in the default 30fps frame rate, `1` results in 60fps, and `0` is fully uncapped.

> **Caution:** A fully uncapped framerate results in animation glitching and can cause the client to crash during certain events, such as zoning. Not recommended unless you artificially set a 60fps limit with another external application, such as the display driver.

**Default:** `2`
