const e=`---
title: '1.5.27 Release'
description: 'Items Kept on Death plugin, World Map Quest Completion Icons, bug fixes'
author: Jordan
---

[You've asked for
it](https://www.reddit.com/r/2007scape/comments/c194r3/suggestion_my_rework_of_the_broken_keptondeath/),
and we're here to deliver! We have added an
[Items Kept on Death plugin](https://github.com/runelite/runelite/wiki/Items-Kept-on-Death) which
more accurately displays the items you will lose upon dying, and adds toggle buttons which simulate
certain statuses which would affect that, such as being skulled or having the Protect Item prayer
active. Thanks to [@TheStonedTurtle's](https://github.com/TheStonedTurtle) for the hard work that
went into making this possible.

**Please note** that while we have tested this with as many situations as we had access to, our
knowledge and understanding of the death mechanics may not be perfectly in line with what will occur
ingame. If you discover a situation where this interface is inaccurate, [please report such bugs on
our issue tracker.](https://github.com/runelite/runelite/issues/new?template=Bug_report.md) For this
reason, _this plugin is disabled by default_. Make sure to look for it and turn it on if you'd like
to try it!

![Items Kept on Death interface demonstration](/img/blog/1.5.27-Release/items-kept-on-death-plugin.gif)

The [World Map plugin](https://github.com/runelite/runelite/wiki/World-Map) has been updated to
display quest completion states. Thanks to [@connorjclark](https://github.com/connorjclark) for
adding this feature.

![World Map plugin showing question completion status](/img/blog/1.5.27-Release/world-map-quest-completion-status.png)

In addition to the new features mentioned above, a small number of notable bugs have been fixed.

- [Object markers](https://github.com/runelite/runelite/wiki/Object-Markers) for objects larger than
  one tile will no longer become duplicated. This means you should no longer see a black overlay on
  such objects, and this will no longer impact your FPS ingame.
- The [Key Remapping plugin](https://github.com/runelite/runelite/wiki/Key-Remapping) will no longer
  change your tabs when an NPC dialog is open, allowing you to properly input chat options.
- We have fixed the
  [Interface Styles plugin's](https://github.com/runelite/runelite/wiki/Interface-Styles) HD
  healthbars.

There are also several smaller improvements and bug fixes, including:

- The [Chat Notifications plugin](https://github.com/runelite/runelite/wiki/Chat-Notifications) now
  correctly matches \`<\` and \`>\`
- [Emojis added to a message](https://github.com/runelite/runelite/wiki/Emojis) will no longer reset
  the message's [chat color](https://github.com/runelite/runelite/wiki/Chat-Color)
- The [Mining plugin](https://github.com/runelite/runelite/wiki/Mining) now recognizes ash piles,
  has some missing and inaccurate ore timers corrected, and draws its progress pie at the proper
  height for motherlode mine and amethyst veins. In addition, it displays its progress pie in a
  different color for motherlode mine veins during the random timer of their respawn.
- Clue scrolls affected by the Hosidius rework have had their locations updated
- A coordinate clue scroll located in Weiss has been added to the
  [Clue Scroll plugin](https://github.com/runelite/runelite/wiki/Clue-Scroll)
- The skill challenge clue scroll requiring killing a spiritual mage is now properly recognized
- The [Clue Scroll plugin](https://github.com/runelite/runelite/wiki/Clue-Scroll) will now recognize
  more Falo the Bard clue scrolls
- The [Item Stats plugin](https://github.com/runelite/runelite/wiki/Item-Stats) now has an option to
  remove the "Weight" stat from the stats tooltip
- The [Item Identification plugin](https://github.com/runelite/runelite/wiki/Item-Identification)
  will now overlay items shown in the seed box, looting bag, and in Miscellania's collection screen
- The [Timers plugin](https://github.com/runelite/runelite/wiki/Timers) will properly add a
  teleblock timer now, since the ingame message has changed
- The [Discord plugin](https://github.com/runelite/runelite/wiki/Discord) will show your ingame
  status as "Training: Fishing" instead of Strength or Agility when performing barbarian fly fishing
- New flash notification options have been added to
  [RuneLite's global configuration](https://github.com/runelite/runelite/wiki/RuneLite)
- The [Agility plugin](https://github.com/runelite/runelite/wiki/Agility) now recognizes a
  previously-missing Falador rooftop agility course obstacle
- You can now configure the drag delay of the [Inventory Grid
  plugin](https://github.com/runelite/runelite/wiki/Inventory-Grid)
- The [Menu Entry Swapper plugin](https://github.com/runelite/runelite/wiki/Menu-Entry-Swapper) will
  now swap the "Shop" menu entry of the Witchhaven shop when the "Trade" option is enabled
- A bug in the [Item Prices plugin](https://github.com/runelite/runelite/wiki/Item-Prices)
  preventing high alchemy profits from being displayed unless the item's high alchemy value was also
  displayed has been fixed

Enjoy!

\\- Jordan

### New commits

We had 19 contributors this release!

\`\`\`
Adam (7):
      mixins: fix duplicate spawn events for large gameobjects
      key remapping: don't remap fkeys when options dialog is open
      key remapping: remove some unused widget and keylistener checks
      key remapping: fix clearing input when plugin is turned on
      scripts: correctly pop unused input string when blocking chat input
      chat notifier: fix matching < and > in chat messages
      emoji plugin: fix stripping chat recolor tags

Adelaidian (1):
      mining plugin: add ash piles

Aundron (1):
      clue plugin: update Hosidius allotment clue location for rework

Connor Clark (1):
      world map plugin: show quest completion state

Dava (1):
      items stats: add option to show weight

Hydrox6 (6):
      Add ItemIdentification to Seed Box, Looting Bag, and Miscellania collection screen (#8999)
      mining plugin: add missing silver id
      timers: fix teleblock message
      api: implement resetHealthBarCaches and getHealthBarFrontSpriteId
      api: remove unneeded Health Bar Override code
      interface styles: update HD Health bar to work with new sprites

Jacky (1):
      Add additional info to waterbirth coordinate clue

Jacky Liang (2):
      clue plugin: add Weiss coordinate clue description
      clue plugin: improve Champions Guild clue hint

Jarred Vardy (1):
      Set priority '1' for TRAINING_FISHING DiscordGameEvent (#9061)

Jordan Atwood (2):
      cluescrolls: Fix Hosidius mess hall clue locations
      HotColdLocation: Center northeastern Kharazi jungle location

Max Weber (2):
      runelite-client: centralize item sprite dimensions
      runelite-client: Centralize the high alchemy multiplier

Sander de Groot (1):
      Fix typo in spiritual mage master cryptic clue (#9105)

TheStonedTurtle (2):
      Add scroll price to Magic shortbow (i) and Row (i)
      runelite-client: add items kept on death plugin

Twiglet1022 (7):
      mining plugin: draw overlay at correct height for mlm and amethyst
      mining plugin: correct coal timer, missing copper rock and other fixes
      clues: correct text of falo the bard warrior guild token clue
      mining plugin: remove progress pie from mlm veins that respawn early
      mining plugin: recolour pie in MLM during random segment of timer
      clues: correct text of falo the bard obby maul clue
      notifier: add customisation to flash notification

Unknown (1):
      Added missing falador rooftop course agility obstacle

William Collishaw (7):
      Fix typo in 'dumpJson' function name
      Fix typo in 'sessionCheck' function name
      Fix typo in 'getProperties' function name
      Fix 'Jewellery' typo in PohConfig show jewellery box description
      Optimize if statements in the client module (#8998)
      Fix 'ABERRANT_SPECTRE' typo in SlayerUnlock and CannonSpot enums
      Fix 'GROTESQUE_GUARDIAN' typo in SlayerUnlock enum

William Maga (1):
      inventory grid: add config for drag delay

cjamcl (1):
      MenuEntrySwapper: include "shop" for trade option

gregg1494 (2):
      mining plugin: add sandstone and granite
      itemprices: fix showing high alch profit with show ha value disabled
\`\`\`
`;export{e as default};
