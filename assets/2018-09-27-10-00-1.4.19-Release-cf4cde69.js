const n=`---
title: '1.4.19 Release'
description: 'Grand Exchange buy limits, Barbarian Assault game/wave duration timers'
author: Tomas
---

Grand Exchange buy limits were added to the Grand Exchange plugin, which will show \`Buy limit: x\`
in GE window for items with known buy limits. Thanks to [@Asymons](https://github.com/Asymons) for this contribution.

![gebuylimits](/img/blog/1.4.19-Release/buylimits.png)

A timer for Barbarian Assault waves and full game was added to the Barbarian Assault plugin that will
announce the times in your chat thanks to [@Jacoblairm](https://github.com/Jacoblairm).

![bawave](/img/blog/1.4.19-Release/bawave.png)
![bagame](/img/blog/1.4.19-Release/bagame.png)

There are also numerous smaller improvements and bug fixes, including:

- Duplicated display of actively traded price in GE interface has been fixed
- Teleblock timers are now removed when entering safe zone/leaving wilderness
- Search bar was added to the skill calculator plugin
- Little boulder in Weiss was added to the agility plugin obstacle highlighting
- Notes plugin now supports undo and redo (with ctrl-z and ctrl-u)
- Instance map now has a close button in top-right corner
- NPC indicators now has support for highlighting the south-west tile for large NPCs
- Idle notifier now also supports idle notifications for low oxygen on Fossil Island
- Charged versions of the new wilderness weapons will now display their prices correctly
- World map clipping in fixed mode has been fixed
- Multiple world points for hot/cold clues has been centered and should not show the wrong destination anymore
- The opponent info plugin now has a configuration option to always show opponent health in percent
- The Discord plugin now has a configuration option to hide the "time elapsed"
- You can now configure the prayer flick helper to show even when prayers are off
- Fix loot tracker not grouping Barrows loots

In regards to the [world hopper being disabled](https://runelite.net/blog/show/2018-09-18-Worldhopper-disabled):
After speaking with Jagex and other client developers, we think the chat message hop-to option is what is causing the issues. Jagex is allowing us to readd the world hopper without this feature in this release, and will let us know if it causes any further problems.

Enjoy!

\\- Tomas

### New commits

We had 24 contributors this release!

\`\`\`
Adam (2):
      opponent info: add config opt to show health as percent
      xp tracker: limit to one update per 5 minutes

Alessio (1):
      Add GE limits to Grand Exchange Plugin Search

ArthurTsvettsih (1):
      Add Undo Redo support for the Note plugin (#5606)

Ben Moyer (1):
      Reduce tab size in notes panel to 2 (#5599)

Jacob McElroy (2):
      Add barbarian assault game duration timer (#4590)
      Fix Fremennik Hot/Cold clue scroll dig location.

Jordan Atwood (6):
      Add IN_WILDERNESS Varbit
      Add PVP and Deadman widget info
      worldtype: Add PVP_WORLD_TYPES and isPvpWorld
      timers plugin: Reset Teleblock on entering safe zone
      slayer plugin: Add parsing for boss task assignments
      slayer plugin: Use boss pets as slayer icons

Justin Barnyak (1):
      Change Prayerbar Color Scheme to be Colorblind Friendly

MSAskew (1):
      Updated co-ordinates to match location suggested by user and cross-referenced with osrs wiki to confirm as there were two possibilities.

Max Weber (1):
      devtools: Add Interacting arrow devtool

Michael Goodwin (1):
      Fix HotColdLocation WorldPoint

Mike (1):
      Add option to disable time elapsed on discord activity (#5590)

Robin Withes Linux (1):
      Lady of the lake clue scroll rename

Runelite auto updater (1):
      [maven-release-plugin] prepare for next development iteration

Shaun Dreclin (1):
      Add option to always show prayer flick helper

Tomas Slusny (4):
      Simplify checkbox checks in skill calc
      Fix GE OSB actively traded price races
      Cleanup skill calculator
      Move IconTextField common icons to IconTextField.Icon class

Unknown (1):
      instancemap: add 'X' button on the interface to close map

davidyip50 (1):
      Correct location of Kharazi Jungle Hot/Cold clue (#5610)

johnhamilto (1):
      Add south-western tile indicator to NPC indicators (#5551)

ltvill (2):
      Hot/Cold clue West of Brimhaven location fix
      Hot/Cold clue near Fishing tutor location fix

psikoi (1):
      Fix loot tracker box subtitle

rbbi (1):
      Add searchbar suppor to Skill Calculator

robinwithes (2):
      Add little boulder from weiss into agility obstacles (#5636)
      Add oxygen alert to idle notifier (#5630)

rune3132 (1):
      Add wilderness weapons item mappings

steffenhauge (1):
      Add Justiciar armor set prayer bonuses to the prayer plugin (#5651)

trimbe (1):
      Fix clipping in fixed mode for edge snapping map points
\`\`\`
`;export{n as default};
