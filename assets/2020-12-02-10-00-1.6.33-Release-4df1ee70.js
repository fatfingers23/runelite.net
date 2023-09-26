const e=`---
title: '1.6.32 & 1.6.33 Release'
description: 'Numerical ground item despawn timers, custom skybox colors, and leagues time tracking profiles'
author: Jordan
---

[Ground item](https://github.com/runelite/runelite/wiki/Ground-Items) despawn times can now be
displayed numerically in game ticks or in seconds. Thanks to [@Hydrox](https://github.com/Hydrox6)
for this feature.

![Ground item despawn timer configuration](/img/blog/1.6.33-Release/ground-item-despawn-timers.gif)

The [time tracking plugin](https://github.com/runelite/runelite/wiki/Time-Tracking), [chat commands
plugin](https://github.com/runelite/runelite/wiki/Chat-Commands), and [grand exchange
plugin](https://github.com/runelite/runelite/wiki/Grand-Exchange) now understand main game vs league
and deadman mode profiles, and will track crops, kill counts, and offers of these profiles
separately. All existing crops and other values are automatically applied to your main profile, you
will have to visit each farming patch in-game on each profile for it to be correctly synced up.

The [Skybox plugin](https://github.com/runelite/runelite/wiki/Skybox) now allows you to set a custom
color for overworld and underground areas to use instead of the default area-specific colors.

There are also several smaller improvements and bug fixes, including:

- Using the [bank plugin](https://github.com/runelite/runelite/wiki/Bank), you can now trigger a
  bank search using the hotkey <kbd>Ctrl</kbd> + <kbd>F</kbd>
- The [combat level plugin](https://github.com/runelite/runelite/wiki/Combat-Level) now shows levels
  needed for a new combat level beyond 99.
- The [DPS counter plugin](https://github.com/runelite/runelite/wiki/DPS-Counter) has gained new
  options to only count boss damage, and to reset when a boss dies
- An NPC Deposit-Items swap has been added to the [menu entry swapper
  plugin](https://github.com/runelite/runelite/wiki/Menu-Entry-Swapper)
- The plugin hub button has been sticky'd to the bottom of the plugin list. No more scrolling to the
  bottom to find it!
- The [slayer plugin](https://github.com/runelite/runelite/wiki/Slayer) now recognizes Battlefront
  as a task location
- Chambers of Xeric potions now have their doses shown via the [item charges
  plugin](https://github.com/runelite/runelite/wiki/Item-Charges)
- The west Al Kharid palace window is no longer highlighted via the [agility
  plugin](https://github.com/runelite/runelite/wiki/Agility) as you cannot go through it
- Some objects marked with the [object markers
  plugin](https://github.com/runelite/runelite/wiki/Object-Markers) correctly maintain their marker
  when leaving and revisiting the area
- The [chat filter plugin](https://github.com/runelite/runelite/wiki/Chat-Filter) no longer filters
  some messages for players with icons next to their names
- The [timers plugin's](https://github.com/runelite/runelite/wiki/Timers) tzhaar timer no longer
  keeps counting when disabled mid-run
- The abyssal sire's [stun timer](https://github.com/runelite/runelite/wiki/Timers) has been fixed
- The [chat notifications plugin](https://github.com/runelite/runelite/wiki/Chat-Notifications) now
  correctly sends notifications for some messages matching a highlighted word ending in a period
- Using a leagues area teleport will no longer trigger a [home or minigame teleport
  timer](https://github.com/runelite/runelite/wiki/Timers)

Enjoy!

\\- Jordan

### New commits

We had 14 contributors this release!

\`\`\`
Adam (20):
      gpu: fix intel miscompiles of fragui shader
      api: add method to remove game objects from scene
      combat level: show next levels needed even past 99
      Move BankSearch to bank plugin
      banktags: use script event for detecting bank search
      Fix incorrectly marking Al Kharid west shortcut window
      objectindicators: fix not marking objects when loaded on other planes
      cache: fix objexporter hsl to rgb calculation
      chat controller: return 404 if task is not found
      chatfilter: fix filtering self and clan messages with chat icons
      dps counter: add option to reset when boss dies
      dps counter: add option to only count boss damage
      notifier: move osx terminal-notifier test to executor
      worldmap: add Getting Ahead quest start location
      api: add queueChangedVarp
      devtools: queue changed varps in setvarb and setvarp
      Use raw varp array for get/set value in devtools
      timers: ignore config changed events for other config groups
      timers: fix tzhaar timer tracking when disabled mid inferno
      timers: fix abyssal sire stun timer

Hydrox6 (2):
      timetracking: add support for botanist relic
      grounditems: add numerical despawn timers

Jacob Buckheit (1):
      chat notifier: fix matching messages with included punctuation

Jordan Atwood (1):
      timers: Fix leagues area teleport bug

Max Weber (10):
      rl-api: update friends chat rank sprite ids
      rl-api,rl-client: update friends chat kick cs2 id
      runelite-api: add WorldChanged event
      runelite-api: add PlayerChanged event
      runelite-client: add rsprofile support
      ConfigManager: immediately send config after importing local
      http-api, http-service, rl-client: bulk upload configuration changes
      runelite-client: build on java 8 again
      cache: allow concurrent disk storage reads
      cache: allow partial caches to load

Minhs2 (1):
      slayer: add various monsters as alternatives to tasks

Plondrein (1):
      menu swapper: Add NPC Deposit-Items swap

Ron Young (1):
      runelite-api: import SpritePixels methods

SirGirion (1):
      itemcharges: add cox potions to show item doses

Trevor (1):
      raids plugin: fix array out of bounds error when scouting for a raid

dekvall (3):
      widgetid: correct quest completed group
      widgetid: correct quest completed text
      plugin-panel: stick plugin hub button to bottom of plugin list

logarithm (1):
      skybox: add custom sky color options

skyblownet (1):
      slayer plugin: add Battlefront to task locations

trimbe (1):
      bank plugin: add ctrl+f hotkey to initiate bank search
\`\`\`
`;export{e as default};
