const n=`---
title: '1.5.14 Release'
description: 'Web based loot tracker, Grand Exchange history, and account overview'
author: Adam
---

This weeks update is focused on improvements to the website. You can now login
on [https://runelite.net](https://runelite.net) and view details about your
RuneLite account which includes current slayer task, a boss log, the loot
tracker, and a new Grand Exchange history tracker which tracks completed trades
you have made on the GE.

**Loot tracker:**

<div class="img-thumbnail mb-3">
![loot](/img/blog/1.5.14-Release/loot.png)
</div>

**Account overview:**

<div class="img-thumbnail mb-3 text-center">
![account](/img/blog/1.5.14-Release/account.png)
</div> 
  
**Grand Exchange history:**
<div class="img-thumbnail mb-3">
![ge](/img/blog/1.5.14-Release/ge.png)
</div>

Both the loot tracker and Grand Exchange tracker allow easily exporting their
data into JSON format. Both keep up to 1 month of history.

Thanks to [@deathbeam](https://github.com/deathbeam) for creating the site over
the last few weeks.

The hitpoints plugin can now recolor the hitpoints icons based on the type of
poison you have:

![orbs](/img/blog/1.5.14-Release/orbs.png)

Local RuneLite settings can now be imported into an account's settings by
clicking the Import button in the Info panel when logged in:

![import](/img/blog/1.5.14-Release/import.png)

There are also several smaller improvements and bug fixes, including:

- Fix item prices plugin to show negative alch profits too
- Fix fishing overlay disappearing whenever a new map is loaded
- Add heal amount for castle wars bandages to item stats
- kourend library plugin: add config option to hide duplicate books
- Add support for looking up game objects with the wiki plugin
- Add enchanting jewelry to the idle notification plugin
- Add link to Wiki guide from achievement diaries
- Allow bank tag tabs to be renamed
- Add new farming crops to skill calculator
- Add Twisted bow spawn near farming guild

Enjoy!

\\- Adam

### New commits

We had 15 contributors this release!

\`\`\`
Adam (12):
      http service: disable spring jmx
      item prices: show negative high alch profits too
      xptracker service: only update last_updated after hiscores are saved
      xptracker: up xp threshold to 10k
      api: add RS Enum API
      client: fix indenting of getItemCompositionCache javadoc
      Revert "Clear stored npcs in fishing/pc/rc plugins"
      Clear stored npcs in fishing/pc/rc plugins
      Revert "Clear Cerberus ghost on LOADING game state"
      cerb plugin: clear ghosts on connection lost too
      http service: remove ws service
      mixins: inject Client constructor for initialization of enumCache

Gio (1):
      Add heal amount for castle wars bandages (#7878)

Hydrox6 (1):
      Add account prompt to the OAuth URL

Koekkruimels (3):
      Add color to the library customer based on player inventory (#7951)
      kourend library plugin: add config option to hide duplicate books
      Refactor changes of #7951 to use doesPlayerContainBook

Magic fTail (1):
      Split synchronizing and uploading loot data into separate configs

Max Weber (3):
      WikiPlugin: Strip tags from names given to RSLookup
      WikiPlugin: Allow lookup of Objects
      WikiPlugin: Eschew URLEncoder in favor of HttpUrl

Ron Young (2):
      TabInterface: remove deprecated widget calls
      TabInterface: move icon search into method TabManager: add remove/set icon

Royce Mathews (1):
      Add enchanting jewelry to the idle notification plugin. (#7977)

RyBo (1):
      Highlight more efficient ledge in the Falador Agility course (#7938)

Shaun Dreclin (1):
      wiki plugin: Add support for achievement diaries

Tanner Chauncy (1):
      banktags: add tag tab renaming

TheStonedTurtle (1):
      Add dynamic hitpoints orb icon to poison plugin (#6517)

Tomas Slusny (11):
      Do not try to draw infobox caption if text is null or empty
      Remove emptyOrNull text check from InfoboxOverlay
      Add button to sync local config with remote
      Backup RuneLite account settings before overwriting them
      Log config property changes only if they really change
      Properly split config properties loaded from config client
      Catch JVM incompatible library JNA error when initializing Discord
      Move slayer weakness overlay 1 layer up above
      Limit access levels for InfoBox fields
      Fix infobox impl access levels and remove unused values
      Convert item stats mapping to use item ids instead of names

Will Thomas (1):
      skills calc: add new farmable crops and trees

chestnut1693 (1):
      Add home tag to Default World plugin
\`\`\`
`;export{n as default};
