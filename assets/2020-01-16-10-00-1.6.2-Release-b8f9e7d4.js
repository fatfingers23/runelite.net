const n=`---
title: '1.6.2 Release'
description: 'Shift click eat, drink and equip'
author: dekvall
---

The menu entry swapper plugin now supports eating, drinking and equipping with the bank open by shift clicking. You can enable it with the \`Swap Bank Op\` option.

![swap-bank-op](/img/blog/1.6.2-Release/swap-bank-op.gif)

There are also several smaller improvements and bug fixes, including:

- You can now see score in the tooltips for activities in the hiscore plugin
- Add Sq'irkjuices to the thieving calculator
- Update the hint for Duel Arena coordinate clue
- The skill calculator will now use your set target level if you have one set
- Add shift click swap for NPC Contact
- Add configuration to hide agility obstacle clickboxes

Enjoy!

\\- dekvall

### New commits

We had 10 contributors this release!

\`\`\`
15987632 (1):
      world hopper plugin: make world pings persist across world fetches

Adam (4):
      feed controller: catch any exception when fetching newes sources
      hiscore panel: add score/points to activity tooltips
      api: rename menuaction cc ops
      menu swapper: add bank extra op swap

Dan Schmidt (1):
      skill calc: add sq'irkjuices to the thieving calculator

Hydrox6 (1):
      cluescrolls: update hint for Duel Arena Coordinate Clue

Max Weber (1):
      poh: Add new portal nexus ids

Rami (1):
      agility plugin: add toggle for obstacle clickboxes

Rami-J (1):
      menu swapper: add shift click swap for npc contact

WLoumakis (1):
      skill calc: use target level if available

Zachary Waller (1):
      skill calc: calculate xp on focus lost

melkypie (1):
      menu swapper: check home portal swap target
\`\`\`
`;export{n as default};
