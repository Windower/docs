---
permalink: /addons/infobar/
title: InfoBar
---

Displays a configurable bar showing information on your targets.

### Available Variables ###

#### General Variables ####
```
${name}, ${id}, ${index}, ${x}, ${y}, ${z}, ${facing}, ${facing_dir}, ${game_moon}, ${game_moon_pct}, ${zone_name}, ${notes}
```

#### Player-specific Variables ####
```
${main_job}, ${main_job_level}, ${sub_job}, ${sub_job_level}
```

#### Mob-specific Variables ####
```
${family}, ${job}, ${levelrange}, ${weakness}, ${resistances},
${immunities}, ${drops}, ${stolen}, ${spawns}, ${spawntime}, ${isagressive},
${islinking}, ${isnm}, ${isfishing}, ${detect}
```

#### Crafting Guild Variables ####
Show whether the guild shops are open or closed.
```
${alchemy}, ${bonecraft}, ${clothcraft}, ${cooking}, ${fishing}, ${goldsmithing}, ${leathercraft}, ${smithing},
${woodworking}
```

### Adding Variables ###
To add variables open `data/settings.xml` with an editor and add the variables as you wish to the `NoTarget` (when you have no target or target yourself), `TargetPC` (you target another player), `TargetNPC` (you target a npc), `TargetMob` (you target a mob) tags.

You can also add normal strings, such as `Name: ${name}`.

----

### Commands ###

#### help ####

```
//ib|infobar help
```

Shows a list of commands.

#### notes add ####

```
//ib|infobar notes add <string>
```

Defines a note to the current target.

#### notes delete ####

```
//ib|infobar notes delete
```

Delete a note to the current target that was defined previously.
