# Windower Documentation

This repository contains the official Windower documentation.

The Windower Documentation is rendered from the source files in this repo using the Jekyll static content creator. It is published to GitHub Pages, and is visible at http://docs.windower.net.

## File Structure
```
docs/             <-- Repository root
    _data/        <-- Configuration information for the Jekyll theme, such as the nav defaults
    _pages/
        addons/   <-- All pages for individual addons
        plugins/  <-- All pages for individual plugins
```

## Creating Pages
This site uses the [minimal-mistakes](https://github.com/mmistakes/minimal-mistakes) Jekyll theme.<br>
Pages should be created as standard Markdown files with the following exceptions.

### Page Header
Include a Jekyll processing header at the top of each page, including the permalink for the page and the title.

For example:

```md
---
permalink: /addons/
title: Windower Addons
---
```

You may also include other Jekyll directives in the page header to override the theme defaults for your page location.

For example, if you wanted to create a page for a plugin that does not display the automatic table of contents on the right side:
```md
---
permalink: /plugins/coolplugin/
title: Cool Plugin
toc: false
---
```

### Note Formatting
You can use formatting provided by the Jekyll theme to format a paragraph as various kinds of notes.

For example:
```md
**Note:** This paragraph is formatted as an informational note.
{: .notice--info}
```

Suggested notice types are: `success`, `info`, `warning`, `danger`

### Navigation
New pages do not automatically appear in the navigation section on the left side. If you want your page to appear there, you need to add the appropriate entry to the defaults section in `_data/navigation.yml`.

Most frequently, this will involve adding a new child node in the Addons nav bar:
```yaml
# Navigation Sidebar: Addons
addonnav:
  - title: "Getting Started"
    url: /
  - title: Addons
    url: /addons/
    children:
      - title: "Clock"
        url: /addons/clock/
      - title: "GearSwap"
        url: /addons/gearswap/
  - title: Plugins
    url: /plugins/
 ```
