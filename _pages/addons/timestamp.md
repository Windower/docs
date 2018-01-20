---
permalink: /addons/timestamp/
title: Timestamp
---

This addon prefixes any chat message with a timestamp. Based on Timestamp plugin.

## Commands

### help
```
timestamp [<command>] help
```

Shows the help text

* **command:** defines the name of the command you need help with

### format
```
timestamp format [help|<color>]
```

Sets the timestamp’s format.

* **help:** shows the help text.
* **format:** defines the timestamp’s format. The available constants are: **${year}**, **${y}**, **${year\_short}**, **${month}**, **${m}**, **${month\_short}**, **${month\_long}**, **${day}**, **${d}**, **${day\_short}**, **${day\_long}**, **${hour}**, **${h}**, **${hour24}**, **${hour12}**, **${minute}**, **${min}**, **${second}**, **${s}**, **${sec}**, **${ampm}**, **${timezone}**, **${tz}**, **${timezone\_sep}**, **${tz_sep}**, **${time}**, **${date}**, **${datetime}**, **${iso8601}**, **${rfc2822}**, **${rfc822}**, **${rfc1036}**, **${rfc1123}**, **${rfc3339}**

### color
```
timestamp color [help|<color>]
```

Sets the timestamp’s color.

* **help:** shows the help text.
* **color:** defines the timestamp’s color. The value must be between 0 and 511, inclusive.

## Change Log

#### v1.20130616

* **fix:** Fixed some indentation issues.

#### v1.20130607

* **fix:** Fixed custom timestamp formatting.

#### v1.20130529

* first release.