const e=`---
title: '1.5.43 Release'
description: 'Camera plugin right-click rotate, clan chat confirm kick dialog, and bugfixes'
author: Jordan
---

The newly-renamed [Camera plugin](https://github.com/runelite/runelite/wiki/Camera) now offers an
option to rotate the camera using your right mouse button when no menu options are available. It
also offers further options to map the middle mouse button to open the right-click menu and to
ignore the "Examine" menu option for right-click camera rotation. Thanks to
[@Wynadorn](https://github.com/Wynadorn) for this contribution!

The [Clan Chat plugin](https://github.com/runelite/runelite/wiki/Clan-Chat) now has an option to
display a chat prompt to confirm kicking a player to help avoid accidental kicks! Thanks to
[@TheStonedTurtle](https://github.com/TheStonedTurtle) for this feature.

![Clan Chat plugin kick confirmation chatbox dialog](/img/blog/1.5.43-Release/clan-chat-kick-confirm-dialog.gif)

There are also several smaller improvements and bug fixes, including:

- The [Chat Commands plugin](https://github.com/runelite/runelite/wiki/Chat-Commands)'s chatbox
  clearing keybinds are now configurable
- The [Kourend Library plugin](https://github.com/runelite/runelite/wiki/Kourend-Library) has an
  option (enabled by default) to display a tutorial overlay to help get started with it
- Messages displayed via the [Twitch plugin](https://github.com/runelite/runelite/wiki/Twitch) now
  have timestamps
- Captain Khaled and Arceuus library customers now have [menu entry
  swaps](https://github.com/runelite/runelite/wiki/Menu-Entry-Swapper) for their "Task" and "Help"
  options, respectively
- A [menu entry swap](https://github.com/runelite/runelite/wiki/Menu-Entry-Swapper) for previous
  destinations of your POH Jewellery box has been added
- The "Chat Leagues Icons plugin" has been renamed to the easier-to-understand [League Chat Icons
  plugin](https://github.com/runelite/runelite/wiki/League-Chat-Icons)
- League Chat icons no longer display usernames without their appropriate [chat
  colors](https://github.com/runelite/runelite/wiki/Chat-Color) applied
- The [Slayer plugin](https://github.com/runelite/runelite/wiki/Slayer) has learned to recognize
  Konar giving a player their first slayer task in the Twisted League
- The [Object Markers plugin](https://github.com/runelite/runelite/wiki/Object-Markers) now properly
  allows unmarking objects which may have a different name than when they spawned

Enjoy!

\\- Jordan

### New commits

We had 15 contributors this release!

\`\`\`
Adam (10):
      client: fix world hopper not populating worlds on startup and when refreshed
      woodcutting plugin: disable by default
      client: rename zoom plugin to camera plugin
      camera plugin: add option to rotate camera with right click
      object indicators: fix unmarking objects matched by name
      object indicators: fix checkObjectPoints to check plane
      client loader: fix incorrect applet world when using fallback config
      clientloader: don't lazy load client classes
      http-api: update for boss hiscores
      hiscore result builder: fix building hiscore result with no boss hiscores

Alexsuperfly (1):
      woodcutting: show respawn timers after GameState change

Hydrox6 (8):
      kourendlibrary: replace \`final static\` with \`static final\`
      kourendlibrary: fix prediction not resetting when layout changes
      kourendlibrary: add tutorial overlay
      kourendlibrary: remove unneeded hidden flag from overlay
      kourendlibrary: add option to hide Varlamore Envoy
      kourendlibrary: optimize NPC marking code
      kourendlibrary: remove LibraryCustomer
      twitch: add timestamps to messages

JZomerlei (1):
      chatcommands: Make chat clearing keybinds configurable (#10308)

Justinmcnabb (1):
      woodcutting: Add missing Willow Tree Object IDs (#10391)

KC Sparks (1):
      menu entry swapper: add captain khaled talk-to/task swap

Linda Lapinlampi (1):
      npc highlight: skip noninteractible npcs on minimap

Max Weber (3):
      Update Scripts to 2019-12-05-rev182
      poh: Update jewelery box ids
      fix ChatSplitBuilder crashing when receiving a friend login/out message

Shaun Dreclin (1):
      menu entry swapper: Add 'help' swap to Arceuus library customers

Shawn Shadrix (1):
      kourendlibrary: highlight the customer's desired book in the overlay

TheStonedTurtle (1):
      clanchat plugin: add option to confirm kicks

Thomas (2):
      chat message manager: deprioritize chat message hook
      league chat icons: fix plugin name

dekvall (1):
      prayer-reorder: remove test

h3half (1):
      slayer plugin: fix detecting Konar's first assignment

whartd (1):
      menu swapper: add jewellery box
\`\`\`
`;export{e as default};
