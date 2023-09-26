const n=`---
title: '1.6.4 Release'
description: 'Loot tracker history and Clan member recoloring'
author: dekvall
---

The Loot Tracker plugin has been reworked to retain your loot for longer and will load a greater amount of loot data when starting the client, starting with loot received last weekend. This will make it easier to track your progression when going for those very rare drops. This requires being logged into RuneLite.

![loot-tab](/img/blog/1.6.4-Release/loot-tracker-tab.png)

The Clan Chat plugin now has the ability to recolor players that also are on your ignore list.

![clan-member-recolored](/img/blog/1.6.4-Release/recolor-clan-member.png)

The "Request focus on Notification" feature on Windows now will forcibly bring the client into focus, similar to how it works on OSX. You may want to disable it if you had it enabled previously and do not want this behavior.

There are also several smaller improvements and bug fixes, including:

- Add Brimhaven cart traveling to menu entry swapper
- Add Chambers of Xeric personal best tracking to \`!pb\` chat command
- The opponent info plugin now gets its known max NPC hitpoints from the wiki

Enjoy!

\\- dekvall

### New commits

We had 10 contributors this release!

\`\`\`
Adam (4):
      loot tracker: store aggregated drops
      loot controller: publish loot to redis
      cache: add field initializers to interface def
      Use wiki scraped npcs for npc healths

Alex Germann (1):
      menu swapper: add Brimhaven cart to Travel option

Gamma91 (1):
      Fix typo in 'Swap Bank Op' description

Hexagon (1):
      cache: Add hitsplat definition

Matt Capone (1):
      chatcommands: add CoX pb tracking

Max Weber (2):
      wiki: Remove quest and diary links
      wiki: Use jagex's sprite, but hide their wiki banner

Twiglet1022 (1):
      clientui: forcibly bring client to front on Windows on request focus

Wessel Radstok (1):
      Add reanimated monsters to npc_health.json

dekvall (1):
      widgetid: change sound slider ids

melkypie (1):
      clanchat: add ability to recolor ignored players

\`\`\`
`;export{n as default};
