const e=`---
title: '1.4.22 Release'
description: 'Recent clan chat listings, inventory/equipment tagging and tag tab export/import'
author: Jordan
---

Recent Clan chats are now listed in the clan chat tab when not already in a clan chat room. Thanks
to [@raiyni](https://github.com/raiyni) for this feature.

![Recent clan chats listing in the clan chat tab](/img/blog/1.4.22-Release/recent-clan-chats-listing.png)

An enhancement has been added to the bank tags feature to tag items in your inventory or equipment
directly, also thanks to [@raiyni](https://github.com/raiyni).

![bank tags: Tag inventory and equipment](/img/blog/1.4.22-Release/bank-tag-inventory-and-equipment.gif)

Tag tabs can now be imported from and exported to the clipboard. After exporting tag tab from RuneLite,
clipboard contents should look like this (this is mining tag tab with prospectors and d pick):

\`\`\`
mining,12797,12020,12019,12016,12015,12014,12797,1712,1710
\`\`\`

and you can view it online [here](https://runelite.net/tag/show/mining,12797,12020,12019,12016,12015,12014,12797,1712,1710).
Thanks to [@deathbeam](https://github.com/deathbeam) for this feature.

![bank tags: Import and export using clipboard](/img/blog/1.4.22-Release/bank-tag-import-export.gif)

There are also several smaller improvements and bug fixes, including:

- Fixed a bug where the OSBuddy price overlay text was duplicated on the Grand Exchange offer screen
- Motherlode Mine and raiding have been added to the Discord plugin activity reporter
- Private messages received from player moderators are now properly recolored
- The Chambers of Xeric scouting overlay now displays while at the nearby bank
- Bank tag icons now display a higher quantity for stackable items
- Bank searching (and thus bank tags) now allows for terms larger than 15 characters
- The wilderness kill/death counter, Bounty Hunter stats widget, and Zeah mess hall widgets are now
  moveable
- Fixed some slayer plugin parsing bugs
- An option has been added to the Bank Tags plugin to remember the last-opened tag tab
- An option has been added to the Runelite settings to display your username in the window title
- Some bugfixes for clues (particularly the newly-added 3-cryptic clues) have been added
- Runelite on OSX will now attempt to use terminal-notifier for better-quality notifications
- The Menu Entry Swapper plugin can now swap Quick-pass/travel/start menu options

Enjoy!

\\- Jordan

### New commits

We had 17 contributors this release!

\`\`\`
Adam (2):
      Revert "Remove zoom plugin"
      clue plugin: fix spelling of Peksa's name

Bruno_ (1):
      Fix OSB price duplicationon delayed lookup (#5860)

Connor S. Parks (1):
      DiscordPlugin: Add MLM

Farmour (1):
      Add PRIVATE_MESSAGE_RECEIVED_MOD to chat recoloring (#5977)

Hydrox6 (1):
      Correctly reset widget.originalY in WidgetOverlay (#6004)

Jordan Atwood (3):
      time tracking: Remove deprecated config migration
      GameEventManager: Simulate Actor spawn events
      slayer: Add combat bracelet task update handling

Kamiel (2):
      Fix raid scout overlay not rendering at bank
      Add examine info to dev tools

Magic fTail (1):
      Fix zoom after update

Mattias Cederlund (1):
      Fix ASGARNIA_MIAZRQA Hot-Cold clue location.

Nathen (1):
      Log if we fail to match clue text

Ron Young (11):
      Fix spellbook home teleport widget ids (#5928)
      ConfigManager: don't post an update if the values are the same (#5480)
      Add recent clan chats plugin
      Bank tags: add ability to tag inventory/equipment (#5988)
      Tag tabs: Add to existing tags instead of overwriting them from inv/eq (#6025)
      widget: expose itemQuantityMode (#6020)
      Tag tabs: show largest quantity icon (#6040)
      Relate worn weight reducing items to their inventory version
      Don't show recent clan chats with CC req popup (#6067)
      Don't limit bank search explicitly to 15 characters
      Don't fetch itemid of Change Icon menu option on tabs

SebastiaanVanspauwen (1):
      WidgetOverlay: Make k/d counter moveable (#5829)

Tomas Slusny (34):
      Make bounty hunter stats widget layoutable
      Move raid scouter layout to title
      Correctly parse slayer task with the and breaks in npc name
      Do not reset equipment/inventory in clues croll plugin each tick
      Remove duplicate "Patches" from time track overview
      Add Gout Tuber heal info to Item Stats plugin
      Add option to remember last opened tag tab
      Fix cave kraken boss task name
      Add optional "the" when checking slayer task progress message
      Remove invalid properties from map on property load
      Use UTF-8 instead of ISO 8859-1 when loading/saving config
      Lock configuration file when writing to filesystem
      Reorder menu swaps again by name
      Add quick pass/travel/start menu entry swapping
      Disable bury and harpoon swaps by default
      Limit widget overlay bounds to parent
      Move ChatMessageManager#refreshAll to client thread
      Move local player hiscore type check to client thread
      Add option to choose interface (layoutable) overlay font
      Add toggle for displaying username in title
      Sort config panel options by name as well
      Add raiding activity to Discord plugin
      Make 3 step cryptic clues more robust (better splitting)
      Null-check location for multi-location clues
      Fix punctionation in "Fiendish cooks" cryptic clue
      Add ability to import/export tag tabs with clipboard
      Properly update 3 step cryptic clues on step completion
      Use terminal-notifier when available for OSX
      Unify calls for getting real item id for bank tag
      Make Zeah Mess Hall display layoutable
      Invoke GameEventManager events on ClientThread
      Clear hint arrow when switching 3 step NPCs
      Update active tag tab containing edited tag
      Filter > 0 when tagging inventory/equipment

ellscape (1):
      Mystic Mist Staff buy limit corrected from 6 to 8

forsco (1):
      Remove switch case for swapQuick that would cause rest of swaps to be skipped (#6007)

robinwithes (4):
      Update slayer task based on VarPlayer value if available (#5989)
      Revert "Update slayer task based on VarPlayer value if available (#5989)"
      Add diamond bolts to the ge limits (#6042)
      Add lockpick requirement to magical axe hut clue (#6045)

trimbe (1):
      Fix lava maze dungeon cryptic clue
\`\`\`
`;export{e as default};
