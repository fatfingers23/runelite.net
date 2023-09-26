const e=`---
title: '1.4.2 Release'
description: 'Respawn timers, death indicator plugin, prayer indicators'
author: Adam
---

The NPC indicators plugin now has an option to show respawn times for tagged
NPCS. Thanks to [@WooxSolo](https://github.com/WooxSolo) for his work on this.

![respawn](/img/blog/1.4.2-Release/respawn.png)

[@DannysPVM](https://github.com/DannysPVM) added a death indicator plugin which
remembers where you've died last, and on what world.

![deathindicator](/img/blog/1.4.2-Release/deathindicators.png)

The prayer flicking plugin was renamed to the prayer plugin - and now shows
prayer indicator infoboxes, from [@raqes](https://github.com/raqes).

![prayindicator](/img/blog/1.4.2-Release/prayerindicator.png)

The full screen mode added in last weeks update was removed as it is not working
for some users and getting their client stuck in a nonworking state. We may add
it back in the future if we can make it work better.

There are also several smaller improvements and bug fixes, including:

- The screenshot plugin now screenshots pvp kills and pet drops
- A 'Reset others' option was added to the xp tracker panel
- A Charge timer was added
- Fix Callisto and Venenatis boss timers from previous release
- Fix regen plugin showing when orb is hidden
- Added Zeah fishing spots to fishing plugin
- Add dragonfire-charged items to untradeable item mappings
- Fix expeditious bracelet charge tracking, which was broke last release
- Add support for swapping all options on the house portal to the menu entry
  swapper
- Show RuneLite launcher version in the info panel
- Add bake pie and string jewellery to idle notifier
- Fix rare crash when drawing clickboxes

Additionally, there were clue fixes from Jordan Atwood, StanleyMole, and Trig.

Enjoy!

\\- Adam

### New commits

We had 26 contributors this release!

\`\`\`
Adam (25):
      perspective: do not remove culled faces from clickbox calculation
      chat color config: set default color for examine highlight
      Fix prayer enumation order back to the order the prayers are in game
      chat message manager: set default colors for examine
      hooks: move combat info callback to actor mixin
      Flag npc as dead when their health ratio hits 0
      runelite-client: update to use isDead
      pom: update rs.version
      runelite-mixins: once again reset menu on widget close
      Rename CONTRRIBUTING.md -> CONTRIBUTING.md
      Fix null names for quest objects in cryptic clues
      config invocation handler: fix setting config values to null
      config manager: support Instant
      runelite-client: add death indicator plugin
      config manager: only apply default config from methods which read configuration
      antidrag: remove unused config setter
      death indicators: only set death mark after respawning in a known respawn location
      death indicator: move location check to after respawn
      death indicator: use animation to detect death
      Revert "Merge pull request #3192 from deathbeam/add-support-for-fullscreen"
      clientui: reimport ExpandResizeType from fullscreen revert
      screenshot plugin: capitalize pet messages constant
      screenshot plugin: screenshot pvp kills
      info panel: use revision number from client
      npc scene overlay: fix respawn time

Evan Sloan (1):
      Add reset others to XpPanel right click menu

Gert de Pagter (1):
      Use github issue templates

Hydrox6 (7):
      Add Charge Timer
      Fix Callisto and Venenatis Boss Timers using the incorrect ID
      Reorder updateConfig to match TimerConfig
      Add support for Clan Chat Info highlights for the Raids Plugin
      Add default highlight for Game Messages to fix Daily Task message colour
      Fix Charge timer showing with every teleport
      Remove Charge Timer when the effect ends

Infinitay (1):
      Add hyperlinks to project layout in README (#3509)

Jeremy Plsek (1):
      regen plugin: don't show regen if widget is hidden

Jordan (2):
      Reword Dad hot-cold clue hint (#3513)
      Fix McGrubor and Cow pen hot-cold locations (#3603)

Jordan Atwood (3):
      Fix "The hand ain't listening." clue step
      Add missing Zeah fishing spots
      Fix Guard Vemmeldo anagram clue location

Juuso Lapinlampi (1):
      Fix spelling of Taverley

Kamiel (1):
      Allow screenmarker resizing below base point

Lars (2):
      Fix typo in BarrowsPlugin (Spanwed to Spawned)
      Update tooltip for Grand Exchange Panel Icon to "Grand Exchange" (#3618)

Magic fTail (2):
      Add dragonfire-charged armour item mappings
      screenshot plugin: screenshot receiving pet

Max Weber (1):
      runelite-client: Require assertions when developer mode is on

Reasel (1):
      Add Tile location tooltip option to dev tools. Remove extra empty line.

Ruben Amendoeira (1):
      Remove Skill Calc unused code (#3568)

Seth (1):
      slayer plugin: fix expeditious regex pattern

Snakk (1):
      menu entry swapper: add options for house portal

StanleyMole (1):
      Fix TzHaar and Castle Draken emote clues

Tomas Slusny (5):
      Change tithe farm to use PieComponent
      Change schedule to GameTick sub in Tithe plugin
      Cleanup RuneLite class (use Lombok)
      Add support for getting runelite launcher version
      Show RuneLite launcher version in info panel

Trig (1):
      Fix "hosptial" anagram clue typo (#3600)

TzZek (1):
      Add bake pie & string jewelry to idle notifier (#3486)

WooxSolo (5):
      Fix remember screen bounds for KEEP_GAME_SIZE
      Move frame to right screen border when expanding large window
      Fix Jarvis infinite loop
      perspective: fix getCanvasTileAreaPoly for even number sizes
      npc indicators: add respawn timer

psikoi (2):
      Add Icon Material Tab + Hover effects
      Refactor plugin panels for new Icon Tabs

raqes (2):
      Rename Prayer Flicking plugin to Prayer
      Add prayer indicators to prayer plugin

shmeeps (1):
      Use chat messages for GE notifications (#3492)

ypperlig (1):
      Change tickrate for giant seaweed from 10 to 5
\`\`\`
`;export{e as default};
