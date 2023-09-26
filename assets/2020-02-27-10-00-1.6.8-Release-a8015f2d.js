const n=`---
title: '1.6.8 Release'
description: 'GE bank tag search, world map mining tooltips, and new UI scaling options'
author: Adam
---

Bank tags can now be searched in the GE:

![getags](/img/blog/1.6.8-Release/getags.png)

The world map now has tooltips for mining site locations which shows which rocks are there:

![mining](/img/blog/1.6.8-Release/mining.png)

The blast furnace overlay now includes the time until the coffer runs out of GP:

![blastfurnace](/img/blog/1.6.8-Release/blastfurnace.png)

The GPU plugin now includes additional UI scaling options which can result in clearer images on higher resolution displays.
If you were using the stretched mode plugin with the \`Increased performance mode\` option _and_ the GPU plugin,
you may want to change the GPU UI scaling option to \`Nearest\`.

The plugin hub has a new [webpage](https://runelite.net/plugin-hub) which shows all of the plugins available on it.

There are also several smaller improvements and bug fixes, including:

- GE buy limits are now automatically pulled from the wiki
- The item stats plugin can now show item stats when hovering items in the bank
- The pensive emoji has been added to the emoji plugin (\`V_V\`)
- Item price tooltips now work in the seed vault
- Inventory tags now has 2 additional tag groups
- Fix the loottrackker show/hide ignored loot button
- Fix the always stack resizable stones interface styles option
- Add bounty hunter (rogue) and LMS chat commands
- Fix incorrectly hiding salamander attack styles with the attackstyles plugin

Enjoy!

\\- Adam

### New commits

We had 22 contributors this release!

\`\`\`
Adam (4):
      configmanager: harden against being killed mid-save
      Merge protocol and protocol-api into cache-client
      Use GE limits from item stats
      session: add logged-in tracking

Alfred Ababio (1):
      skill calc: add long and curved bones to construction calc

Ben Dol (3):
      itemstats: Round item values for displaying
      itemstats: Add "Show Stats In Bank" option
      itemstats: Add "Always Show Base Stats" option

Daniel (1):
      blast furnace: add coffer time remaining overlay

DeliciousLunch55 (2):
      clue plugin: Improve Shilo Village elite coordinate clue hint
      xpdrop plugin: add 'prayer' to tags

Evan Walden (1):
      item prices: show tooltips in the seed vault

Henry Darnell (1):
      emoji: add pensive emoji

Hydrox6 (1):
      slayer: fix boss task parsing to support Konar

James Carroll (1):
      Thread Desktop browse and open

Jeremy Plsek (1):
      plugin hub panel: add url to help tooltip and add missing space to warning

Jordan Atwood (5):
      ClueScrollPlugin: Reset clue on empty dev command
      clues: Don't return clue instances for empty text
      cluescroll plugin: Clear stale location clue hint arrows
      util: Create RSTimeUnit enum
      plugins: Use RSTimeUnit util where applicable

Krysa (1):
      inventory tags: add 2 additional color groups

Max Weber (2):
      PluginManager: try/catch Throwable all the plugin startup stuff
      loottracker: fix hide/show ignored items button

Rolf Don (1):
      skill calc: strip out non-digits characters

Ron Young (5):
      runelite-api: add GE search event and variables
      ItemVariations: add reverse mapping of variations
      banktags: add tag searching for ge search
      banktags: add tests
      LayoutResizableStones: fix bad script merge

Sander de Groot (1):
      chat commands: add Bounty Hunter, Bounty Hunter Rogue, and Last Man Standing commands

Seth (1):
      clue plugin: update Trollweiss cryptic clue hint to include a sled

Trevor (1):
      client: add notification fired event

dekvall (4):
      attackstyles: fix salamander magic attacks
      inventorygrid: re-add a delay to showing the overlay
      worldmap: support multiline tooltips
      worldmap: add informative mining site tooltip

kmutchnick (4):
      clue plugin: add new Slepe anagram clue
      skill calc: fix skill requirement for compost potions
      clue plugin: update solution text for deep wilderness dungeon cryptic clue
      clue plugin: add pet rock and rune thrownaxe to DK clue

ln (1):
      gpu: add UI bicubic & xBR rescaling

seth (2):
      AgilityShortcut: update Arceuus essence agility shortcut coordinates
      QuestStartLocation: Update The forsaken tower/roving elves quest coordinates
\`\`\`
`;export{n as default};
