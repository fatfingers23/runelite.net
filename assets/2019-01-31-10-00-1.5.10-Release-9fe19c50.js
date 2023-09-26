const e=`---
title: '1.5.10 Release'
description: 'Revamped color selector and boss personal best time chat command'
author: Jordan
---

We have written a new color selector from scratch to offer a long-time requested feature for color
picking: adjustable transparency values! This color selector now offers that functionality for the
[Cannon](https://github.com/runelite/runelite/wiki/Cannon), [Ground
Marker](https://github.com/runelite/runelite/wiki/Ground-Markers), [Object
Marker](https://github.com/runelite/runelite/wiki/Object-Markers), [Tile
Indicator](https://github.com/runelite/runelite/wiki/Tile-Indicators), and [XP
Globe](https://github.com/runelite/runelite/wiki/XP-Globes) plugins. Thanks to
[@psikoi](https://github.com/psikoi) and [@raiyni](https://github.com/raiyni) for this feature!

![New color picker with transparency slider in action](/img/blog/1.5.10-Release/color-picker.gif)

A \`!pb\` chat command has been added, which displays your personal best kill time of any boss which
has a kill timer. Make sure to secure a kill on the desired boss so RuneLite can store its best
kill time to share!

The [NPC Indicators plugin](https://github.com/runelite/runelite/wiki/NPC-Indicators) has been
updated to allow tagging of NPCs which, because of technical limitations, could not previously have
a "Tag" menu entry added, such as Menaphite Thugs. As a side effect, however, the "Tag" menu entry
will now be listed just before the NPC's "Examine" menu entry, shown below.

![Updated NPC tag menu entry position](/img/blog/1.5.10-Release/npc-tag-change.png)

There are also several smaller improvements and bug fixes, including:

- A number of Kebos area hot-cold clue locations have been added to the [Clue Scroll
  plugin](https://github.com/runelite/runelite/wiki/Clue-Scroll)
- The [Time Tracking plugin](https://github.com/runelite/runelite/wiki/Time-Tracking) now displays
  more conservative estimates for farming patch growth timers to avoid showing a crop as finished
  too early
- An option has been added to the [Runelite
  settings](https://github.com/runelite/runelite/wiki/RuneLite) to require Shift to be pressed for
  overlay menu options to appear. Additionally, overlay menu options will no longer be a left-click
  option when positioned over other widgets.
- An ore tracker has been added to the [Motherlode Mine
  plugin](https://github.com/runelite/runelite/wiki/Motherlode-Mine)
- The [World Map plugin](https://github.com/runelite/runelite/wiki/World-Map) now adds the type of
  rare tree to the tree icon tooltips
- Upon completion, anti-venom [timers](https://github.com/runelite/runelite/wiki/Timers) will now
  add an anti-poison timer of the appropriate length
- The [Chambers of Xeric plugin](https://github.com/runelite/runelite/wiki/Chambers-of-Xeric) now
  has an option to send a game message with the raid layout when entering a new raid
- The [Barrows Brothers plugin](https://github.com/runelite/runelite/wiki/Barrows-Brothers) will no
  longer display minimap dots for NPCs which would not ordinarily draw one elsewhere (such as pets)
- The [Screenshot plugin](https://github.com/runelite/runelite/wiki/Screenshot) now has an option to
  screenshot duel wins and losses
- When buying slayer rewards, the [Slayer plugin](https://github.com/runelite/runelite/wiki/Slayer)
  infobox will now update the points displayed in its tooltip
- A [Menu Entry Swapper plugin](https://github.com/runelite/runelite/wiki/Menu-Entry-Swapper) option
  has been added to swap "Pick" with "Pick-lots" to help you grab empty gourds faster in Chambers of
  Xeric
- A bug causing some minor render order issues in the [GPU
  plugin](https://github.com/runelite/runelite/wiki/GPU) has been fixed
- A bug causing the [Mage Training Arena
  plugin's](https://github.com/runelite/runelite/wiki/Mage-Training-Arena) Telekinetic room helper
  to fail has been fixed

Enjoy!

\\- Jordan

### New commits

We had 16 contributors this release!

\`\`\`
4444N (1):
      Remove tags from chat notifications (#7608)

Adam (7):
      chat controller: fix method name of getQp
      Add !pb chat command
      chat commands: capitalize boss names
      http api: fix GameItem to have a no arg constructor
      stausbars: don't assume menu is always populated
      statusbars: avoid looking up item status unless the widget is the inventory
      gpu: fix priority renderer face cull checking

Jordan Atwood (1):
      chat commands: Add test case for PB without trailing period

Lucas (1):
      Add normal colour to the !clues command

Magic fTail (1):
      Change menu manager to not modify npc composition

Marshall Briggs (1):
      Add 3 new Kebos clue spots to HotColdLocation.

Max Weber (7):
      farming: Centralize patch prediction
      farming: Give a more conservative estimate of when patches are done
      mixins: Force RUNELITE_OVERLAY menuops to not be left click
      mousehighlight: Don't show tooltips for right click only menuops
      cache: use lombok Data for all definitions
      cache: Include id in StructDefinition
      mixins: Don't clobber left click forced menuops

Rheon-D (1):
      Remove invalid OverlayMenuEntries

Ron Young (5):
      Config: add Alpha annotation
      ColorUtil: add color to/from methods
      Add RuneliteColorPicker
      Screen Markers: use new color picker
      plugins: Add alpha notation to configs

Ryan Bohannon (1):
      Change location of clue scroll coordinates in Feldip Hills

SirGirion (1):
      mlm plugin: add ore tracker

Spedwards (1):
      Add Rare Tree locations

Tomas Slusny (13):
      Move menu entry nulling to BeforeRender
      Add anti-poison timers to anti-venom potions
      Refresh infoboxes only when needed
      Add toRoomString and toCodeString Raid utilities
      Move ChatCommandsPlugin#sanitize to Text
      Send raid layout message on raid enter
      Limit only overlays that are not snapped
      Remove activity prefix from Discord plugin
      Add option to require shift for overlay menus
      Dont display bank value GE/HA text when not needed
      barrows plugin: don't draw dots for npcs which are hidden on the minimap
      Show xp globe goal only if goal > current xp
      Remove anymatch regex from chat commands plugin patterns

Zakru (1):
      Add option to screenshot duel wins and losses (#7576)

daiya7 (1):
      Update slayer points in tooltip while in rewards screen (#7620)

winterdaze (3):
      Add Hydra & Karuulm Area to Discord Plugin (#7560)
      Use better task icons for revs and ents (#7562)
      Swap pick with pick-lots in CoX (#7563)
\`\`\`
`;export{e as default};
