const e=`---
title: '1.4.26 Release'
description: 'Status bars plugin and upcoming GPU plugin'
author: Jordan
---

A [Status Bars plugin](https://github.com/runelite/runelite/wiki/Status-Bars) has been added, which
will display hitpoints and prayer information on the columns of the inventory, or along the left
side of the inventory panel. Big thanks to [@Malfuryent](https://github.com/Malfuryent) for their
tireless work maintainng this plugin for months preparing for its addition to the client.

![Status bars plugin demonstration](/img/blog/1.4.26-Release/status-bars-plugin.gif)

[As we've announced on Twitter](https://twitter.com/RuneLiteClient/status/1062440996401790977), we
will soon be releasing the highly-anticipated GPU plugin. Keep on the lookout!

There are also several smaller improvements and bug fixes, including:

- A bug causing the [XP Tracker plugin](https://github.com/runelite/runelite/wiki/XP-Tracker) to
  improperly display combat skills with strange values has been fixed
- Menu entry swaps will no longer affect NPCs with hint arrows above them to aid clue hunters
- The [Grand Exchange plugin](https://github.com/runelite/runelite/wiki/Grand-Exchange) panel has
  had its color scheme updated to better match the rest of the client
- The [Friend Notes plugin](https://github.com/runelite/runelite/wiki/Friend-Notes) now uses the
  updated chatbox dialog
- [XP globes](https://github.com/runelite/runelite/wiki/XP-Globes) are now ordered statically, and
  will not change order based on the time skill experience is received
- A Myth's guild cannon spot for blue dragons has been highlighted in the [Cannon
  plugin](https://github.com/runelite/runelite/wiki/Cannon)
- Shortcuts for a stile in Taverly and the stairs to the task-restricted Skeletal wyverns area are
  now highlighted in the [Agility plugin](https://github.com/runelite/runelite/wiki/Agility)
- The [Barrows Brothers plugin](https://github.com/runelite/runelite/wiki/Barrows-Brothers)'s
  overlay panel now displays reward potential and utilizes custom minimap colors in its minimap
  overlay
- Icons for the new portal nexus and mounted jewellery have been added to the [Player-owned house
  plugin](https://github.com/runelite/runelite/wiki/Player-owned-House)
- A [menu entry swapper](https://github.com/runelite/runelite/wiki/Menu-Entry-Swapper) option has
  been added to swap the Private and Shared options of the Chambers of Xeric chest
- Overlays can no longer get stuck offscreen when switching between fixed and resizable views
- The [Diary Requirements plugin](https://github.com/runelite/runelite/wiki/Diary-Requirements) now
  displays combat level requirements for achievements requiring them

Enjoy!

\\- Jordan

### New commits

We had 16 contributors this release!

\`\`\`
15987632 (1):
      Do not swap entries on NPCs with hint arrows (#6437)

Adam (1):
      devtools: add cape command

Arrexel (1):
      Make Grand Exchange plugin panel background color consistent

Hydrox6 (2):
      interfacestyles: Fix resizeable mode widgets
      friendnotes: Use new chatbox input dialogue

LarkCubed (1):
      Use static skill order for XP globes (#6087)

Luke Sheldon (1):
      Add cannon spot to blue dragon area in Myth's Guils (#6460)

Magic fTail (1):
      Move "Outside the Falador Party Room" hot cold clue step

Malfuryent (4):
      Add IS_POISONED and QUICK_PRAYER vars
      Add interface container widget ID
      Expose ItemStatChangesService from ItemStats plugin
      Add status bars plugin

Max Weber (1):
      ChatboxPanelManager: Kill panels when logging out.

MaxBartlett (2):
      Add Taverley shortcut to agility plugin (#6381)
      Add skeletal wyvern stairs to agility shortcut plugin (#6420)

Monsterxsync (1):
      Add potential reward to the barrows overlay

SebastiaanVanspauwen (1):
      Poh plugin: Add nexus/pendant/xerics teleport icons (#6395)

TheStonedTurtle (1):
      Add option to swap "Private" and "Shared" on CoX chest (#6388)

Tomas Slusny (7):
      Add AMMO(13) to EquipmentInventorySlot
      Update item_variations.json for latest cache changes
      Check if any experience was gained in skill before tracking action
      Unlimit stretched resizable mode
      Properly limit scaling factor for stretched resizable
      Prevent overlays from moving off-screen
      Make barrows minimap respect client minimap colors, show players

William (1):
      Add ability to set combat requirements for achievement diaries (#6270)

brodan (1):
      Make boost overlay to change to yellow at threshold
\`\`\`
`;export{e as default};
