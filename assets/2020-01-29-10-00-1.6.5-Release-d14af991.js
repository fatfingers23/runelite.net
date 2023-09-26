const e=`---
title: '1.6.5 Release'
description: 'Bank deposit/withdraw menu entry swap and bugfixes'
author: Jordan
---

The [Menu Entry Swapper plugin](https://github.com/runelite/runelite/wiki/Menu-Entry-Swapper) has
had its "Swap Bank Op" config changed to support different shift-click options to prioritize,
allowing you to choose the shift-click behavior when withdrawing from or depositing into the bank.
Thanks to [@zacharydwaller](https://github.com/zacharydwaller) for this feature!

In last week's update, we made an update to how the client would request focus on notification and
have reverted this to the previous behavior after hearing user feedback regarding this change.

There are also several smaller improvements and bug fixes, including:

- Item overlays—such as teleport charges, inventory tags, rune pouch display—now follow
  their overlaid item when being dragged.
- The [Clan Chat plugin](https://github.com/runelite/runelite/wiki/Clan-Chat) now strips leading
  slashes from your messages when sent through the "Clan" chat tab
- Clue hints referencing the "Elf Camp" have been updated to refer to what is now the "Iorwerth
  Camp"
- The Last Man Standing info box is now movable
- The [Chat Commands plugin](https://github.com/runelite/runelite/wiki/Chat-Commands) now correctly
  tracks your personal best time to complete the Chambers of Xeric

Enjoy!

\\- Jordan

### New commits

We had 7 contributors this release!

\`\`\`
Adam (4):
      clientloader: throw classnotfoundexception when trying to load classes from the closed jar
      Revert "clientui: forcibly bring client to front on Windows on request focus"
      api: add dragging flag to widget item
      task: use lambdas for scheduled method invokes

Daniel Bolink (1):
      widgetoverlay: make LMS info box movable

Henry Darnell (1):
      Capitalize "discord" in info panel (#10667)

Vuk (1):
      clue plugin: rename Elf Camp to Iorwerth Camp

Zach Waller (1):
      menu swapper: add bank deposit/withdraw shift click

dekvall (1):
      clanchat plugin: strip leading / from clan tab chat messages

melkypie (1):
      chatcommands: fix cox pb tracking
\`\`\`
`;export{e as default};
