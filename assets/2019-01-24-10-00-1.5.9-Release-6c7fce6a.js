const e=`---
title: '1.5.9 Release'
description: '!task command and plugin overlay menu options'
author: Jordan
---

The [Slayer plugin](https://github.com/runelite/runelite/wiki/Slayer) now offers a \`!task\` command,
which displays your current task, starting amount and, if applicable, task location.

![Slayer plugin !task command](/img/blog/1.5.9-Release/task-command.gif)

Plugin overlays now support adding right-click menus. Currently, you will only see a "Configure"
option, but expect to see more relevant and useful options in the future.

![The woodcutting overlay with an overlay-specific menu option](/img/blog/1.5.9-Release/overlay-menu.png)

There are also several smaller improvements and bug fixes, including:

- Users will now be prompted to confirm plugin configuration resets
- The [Clue Scroll plugin](https://github.com/runelite/runelite/wiki/Clue-Scroll) correctly shows
  the second emote required for the Mount Karuulm emote clue
- The [WASD Camera plugin](https://github.com/runelite/runelite/wiki/WASD-Camera) operates correctly
  when holding modifier keys
- The [Idle Notifier plugin](https://github.com/runelite/runelite/wiki/Idle-Notifier) now sends
  notifications after making magic tablets
- The Attack skill color has been changed slightly to be easier to see against the
  [XP Globes](https://github.com/runelite/runelite/wiki/XP-Globes) background
- The [Prayer plugin](https://github.com/runelite/runelite/wiki/Prayer) now recognizes prayer
  bonuses of the ancient staff, devout boots, and bonecrusher necklace
- New items will now populate more quickly to be found using the
  [Grand Exchange plugin](https://github.com/runelite/runelite/wiki/Grand-Exchange) search
- The [World Hopper plugin](https://github.com/runelite/runelite/wiki/World-Hopper) hop chat message
  can now be disabled
- Anti-venom potions now display the proper time in the
  [Timers plugin](https://github.com/runelite/runelite/wiki/Timers)

An issue with the world hopper and prayer order plugins post-update has been
fixed. We would like to remind users that we receive _no_ special insight into
upcoming updates and so we do not know what will change ahead of time. After an
update, all or none of the client may be broken in unpredictable ways. Please
don't report issues to Jagex without checking it out on the vanilla client
first.

Enjoy!

\\- Jordan

### New commits

We had 16 contributors this release!

\`\`\`
Adam (13):
      idle notifier: add tablet making animation
      item service: detect new items when price scraping
      api: mark getCollisionMaps as nullable
      Add overlay menu support
      Add support for Configuration overlay menus
      Add configure option to many overlays
      examine plugin: split item/quantity lookup from item price lookup
      examine plugin: drop examines for tradable items and large stacks
      examine service: split into controller and service
      examine service: use item descriptions from item service if available
      session manager: lazily open websocket
      loot tracker: move panel updating to EDT on config change
      Add task chat command

Brandon Popson (1):
      Allow full Amulet of the Damned as clue requirement (#7423)

Charlie Waters (1):
      ConfigPanel: Confirm plugin configuration reset

DannysPVM (1):
      Cap fog depth to 100 in the GPU Plugin.

Ermal (2):
      Added SPIN after CLAP to Mount Karuulm Emote Clue Closes: #7416
      Removed an extra semicolon Found in IdleNotifierPlugin.java line 392 from latest release

Hydrox6 (1):
      Make Game Notification use the Game message highlight colour

Jeremy Plsek (1):
      world hopper: allow disabling chat hop message

Joe Iaquinto (1):
      Correct spelling of Skybox bounds exception

Josiah (1):
      Add ancient staff to prayer items list (#7513)

Max Weber (5):
      cache: Add FlatStorage
      cache: Add equals and hashCode to all Definitions
      config: Add ModifierlessKeybind
      wasdcamera: Use modifierless keybinds
      runelite-api, runescape-api: Rename Area to mapElement

Tomas Slusny (15):
      Inverse collapse menu entry loop
      Shutdown plugins on window close
      Move close handling to windowClosed event
      Move configManager.sendConfig to RuneLite#shutdown
      Wrap DiscordEventHandlers in native lib try/catch
      Do not discard 1 second requests in Xp tracker
      Change xp tracker filter clean to 3 hours
      Remove OverlayManager#addMenu/removeMenu
      Remove overlayManager#overlayId
      Move overlay menu entries to Overlay class
      Add Text#fromCSV and Text#toCSV
      Replace usage of Spliter/Joiner with toCSV/fromCSV
      Revert "Move close handling to windowClosed event"
      Null-check local location in trap overlay
      Mark localToCanvas methods nullable

ermalsh (1):
      Change RGB variable for Attack on XP Globes (more bright) (#7454)

gregg1494 (2):
      Correct agility configuration casing (#7393)
      Fix anti-venom potion timer (#7453)

kevinisninja (1):
      prayer plugin: add devout boots and bonecrusher necklace to prayer items

maytonsw (1):
      time tracker: correct Iasor farming produce typo

trimbe (1):
      chat commands: rebuild chatbox input after using clear shortcuts
\`\`\`
`;export{e as default};
