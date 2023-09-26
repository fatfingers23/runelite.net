const e=`---
title: '1.5.22 Release'
description: 'Custom Cursor and Item Identification plugins, Falo the Bard clue support'
author: Jordan
---

A Custom Cursor plugin has been added which, when enabled, allows you to change your cursor when
hovering the client to one of a number of iconic RuneScape cursors, including the RS3 gold and
silver cursors, a trout, and the iconic dragon scimitar. Thanks to
[@Kruithne](https://github.com/Kruithne) and [@Trevor159](https://github.com/Trevor159) for making
this happen!

![RS3 gold cursor](/img/blog/1.5.22-Release/rs3-gold-cursor.png)
![Dragon dagger cursor](/img/blog/1.5.22-Release/dragon-dagger-cursor.png)

Have you ever confused your herbs, seeds, or tree saplings? We've added an Item Identification
plugin to help combat that. When enabled, it will overlay the name (or abbreviated name) on the
item when in most non-bank interfaces. Thanks to [@Hydrox6](https://github.com/Hydrox6) for adding
this feature.

![Item identification plugin overlaying some herbs, saplings, and herb seeds](/img/blog/1.5.22-Release/item-identification-plugin.png)

The Clue Scroll plugin has had support added for Falo the Bard clues, thanks to
[@Twiglet1022](https://github.com/Twiglet1022).

![A clue hint being shown for an opened Falo the Bard clue](/img/blog/1.5.22-Release/falo-the-bard-clue-support.png)

There are also several smaller improvements and bug fixes, including:

- The loot tracker plugin now tracks Herbiboar harvest loot
- When completing beginner-level music clue steps, the Clue Scroll plugin will scroll your music
  list to the requested song when first opened after reading the clue
- An option has been added to the NPC Indicators plugin to also highlight the right-click menu
  options of marked NPCs
- The Slayer plugin will now highlight Mutated Zygomites sooner when they are weak and can be
  sprayed
- The Idle Notifier plugin will now alert you should you go idle after crafting pottery
- An icon for the battlefront teleport has been added to the World Map plugin
- The Daily Task plugin now has an option to notify you when Thirus's dynamite is available for
  pick-up
- The Virtual Levels plugin now has an option to disable showing virtual total level
- Bronze darts are now shown at the proper level in the Skill Calculator plugin
- Fixed a bug which could cause the Ammo plugin's infobox to not be removed properly

Enjoy!

\\- Jordan

### New commits

We had 12 contributors this release!

\`\`\`
Adam (5):
      interface styles: invalidate healthbar cache on shutdown
      travis: update dist to xenial
      travis: switch to openjdk8
      client: add custom cursor plugin
      world hopper: disable Hop-to pvp worlds from regular worlds

Alexsuperfly (2):
      slayer: add 'south of' to task regex
      slayer: add test including 'south of'

Beau (1):
      Optionally prevent virtual levels from effecting total level

Crow (1):
      Fix bronze dart requirement in skillcalculator (1->10) (#8690)

Hydrox6 (3):
      clue plugin: add widget scroll feature
      ammo: fix the infobox not getting removed
      client: add item identification plugin

TheStonedTurtle (2):
      chat history: fix pm cycling deque max size
      chat history: clear friend deque when clearing pm history

Tomas Slusny (2):
      Fix Mutated Zygomite fungicide weaknes threshold
      Use proxy methods for settings cursor via ClientUI

Twiglet1022 (2):
      worldmap: add Battlefront teleport
      clue scroll plugin: add Falo the Bard clues

beaumitch (1):
      npcindicators: Add option to highlight NPC name in right click menu (#8673)

langhillie (1):
      daily task plugin: add Thirus's dynamite

xDemoN (1):
      idlenotifier: add support pottery crafting (#8674)

zaydsalah (1):
      Add Herbiboar support to the Loottracker (#8663)
\`\`\`
`;export{e as default};
