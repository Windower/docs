# Windower Documentation

This repository contains the official Windower documentation.

The Windower Documentation is rendered from the source files in this repo using the Jekyll static content creator. It is published to GitHub Pages, and is visible at https://docs.windower.net.

## File Structure
```
docs/             <-- Repository root
    _data/        <-- Configuration information for the Jekyll theme, such as the nav defaults
    _pages/
        addons/   <-- All pages for individual addons
        plugins/  <-- All pages for individual plugins
```

## Creating Pages
This site uses the [minimal-mistakes](https://github.com/mmistakes/minimal-mistakes) Jekyll theme. 
Pages should be created as standard Markdown files with the following exceptions.

#### Page Header
Include a Jekyll processing header at the top of each page, including the permalink for the page and the title.

For example:

```md
---
permalink: /addons/
title: Windower Addons
---
```

#### Note Formatting
You can use formatting provided by the Jekyll theme to format a paragraph as various kinds of notes.

For example:
```md
**Note:** This paragraph is formatted as an informational note.
{: .notice--info}
```

Suggested notice types are: `success`, `info`, `warning`, `danger`
