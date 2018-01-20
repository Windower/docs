---
permalink: /addons/porter/
title: Porter
---

This addon shows the slips' items highlighting those that are stored.

## Commands

s### porter
```
porter [<slip> [<page>]] [owned]
```

Shows the specified slip or slip's page. if "owned" is specified, only the owned items will be shown. if no parameter is specified, all the owned slips will be shown.

* **//slip//:** the number of the slip you want to show.
* **//page//:** the page of the slip you want to show.
* **owned:** shows only the items you own.

## Bug Tracker
Please report any bug or suggetion on the bug tracker @ https://github.com/giulianoriccio/Lua/issues?state=open

## Change Log
#### v1.20130529
* **fix**: Fixed parameters validation
* **change**: Aligned to Windower's addon development guidelines

#### v1.20130525.1
* **add**: Added the "owned" param. if present, only the owned items will be shown.

#### v1.20130525
* **change**: If no parameter is specified all the owned slips will be shown.

#### v1.20130524
* First release.