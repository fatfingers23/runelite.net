const n=`---
title: '1.6.37 & 1.6.38 Release'
description: 'Ground marker sharing, refreshed hiscore boss icons, and filled inventory tag display'
author: Jordan
---

We've added the ability to share ground markers. Click the "Export Ground Markers" option on the
world map orb to copy nearby ground markers to your clipboard, or click the "Import Ground Markers"
option to load them into your game! Thanks to [@LlemonDuck](https://github.com/LlemonDuck) for
adding this feature.

![Importing a set of ground markers in the shape of the RuneLite logo](/img/blog/1.6.38-Release/import-ground-markers.mp4)

The hiscore panel's boss icons have been refreshed and tidied up, courtesy of
[@Psikoi's](https://github.com/Psikoi) excellent updated icons.

![Updated boss hiscore icons](/img/blog/1.6.38-Release/boss-hiscore-icons.png)

A "Fill" display has been added for your inventory tags, which can be toggled alongside the existing
outline and underline options. Thanks to [@1jz](https://github.com/1jz) for this addition.

![Inventory tags shown with a filled-in image icon](/img/blog/1.6.38-Release/inventory-tags-fill-option.png)

There are also several smaller improvements and bug fixes, including:

- Support for soul wars has been added across our plugins, such as the rank in the hiscore panel and
  chat commands, tooltips on world map icons, food and potion boost information, and loot tracking
  for spoils of war.
- A toggle has been added to the GPU plugin to render brighter textures so you can enjoy the
  brighter look of your fire and infernal capes
- The plugin hub panel now sorts plugins by user count so you can more quickly find popular plugins
- The Time Tracking plugin can now show the soonest completion of a crop for your farming tracker
  categories (eg. Show time until your first tree grows, instead of when they would all be grown)
- The Special Attack Counter plugin no longer resets your damage when attacking the Corporeal
  beast's Dark core, Vorkath's Zombified spawn, or combat dummies. It also tracks damage from the
  bone dagger, bone crossbow, and barrelchest anchor, and can send special attack energy threshold
  notifications
- World map icons and tooltips have been added for Watson teleport scrolls, Mahogany Homes
  locations, ancient cavern mining rocks, and the Crabclaw caves agility shortcuts and quest
  chamber
- The menu entry swapper now supports swaps for Spria's NPC Contact, the Dwarven rock cake, and the
  Skull sceptre
- You can now configure the color of the Tears of Guthix vein overlays
- Dragon skilling tools with the Trailblazer ornament kits are now correctly recognized by their
  respective skilling plugins
- The Idle Notifier plugin now supports low & high run energy notifications
- The Time Tracking plugin has been taught the correct growth times for sweetcorn and watermelons
- The XP Globes plugin can now show your virtual level in the tooltip

Enjoy!

\\- Jordan

### New commits

We had 24 contributors this release!

\`\`\`
Adam (30):
      http-api: add soul wars hiscores
      hiscore panel: add soul wars zeal
      overlay: fix layouted overlays not respecting parent bounds
      spec counter: prevent dark core, zombified spawn, and combat dummies from reseting counter
      gpu: add option to use old texture brightness code
      spec counter: add spec threshold notifications
      npc highlight: revert fill color behavior
      config service: handle fromJson() returning null
      gpu: fix camera position
      runelite config: enable custom chrome only on Windows
      Shorten many config names to fit into side panel
      config panel: fix combobox displayed size
      custom cursor: use cursor name for combobox labels
      world map: consolidate world map points into one
      client: update gluegen and jogl osx natives
      client: update discord dependency version
      chat notifier: restore original color when highlighting own name
      kittype: use ordinal for index
      Use delomboked sources for javadoc generation
      client: update discord dependency version
      client: rename jogl/gluegen osx natives artifacts
      plugin hub panel: sort plugins by usercount
      plugin list panel: remove unused executor
      ground items: add despawn time for gwd instances
      spec counter: add bone dagger, crossbow, and anchor
      teamcapes: rewrite to use events
      image util: simplify fillImage alpha check
      inventory tags: add fill tag option
      ground markers: add option to export and import
      api: remove PlayerMenuOptionClicked

Broooklyn (10):
      worldmap: add Watson teleport scroll location
      menu entry swapper: add dwarven rock cake swap
      discord: add Soul Wars regions
      loot tracker: Add Spoils of war (Soul Wars)
      worldmap: add Mahogany Homes minigame locations
      worldmap: add Soul Wars minigame and teleport locations
      itemstats: Add Soul Wars Potion of Power and Bandages
      agility: Add Crabclaw Caves obstacles
      worldmap: fix Crabclaw Caves Tunnel (quest) WorldPoint
      chatcommands: Add Soul Wars Zeal command

Chad J. Lewis (1):
      WidgetInfo: Remove unused SHOP_ITEMS_CONTAINER definition (#13011)

Christian Gati (1):
      tears of guthix: add config for tears color

Cyborger1 (2):
      clues: Update Yanille anvil map clue description (#12825)
      idle notifier: Add low & high energy notifications (#12995)

David (1):
      menu entry swapper: Add Spria to NPC Contact swap (#13070)

Hydrox6 (3):
      barrows: fix reward potential formatting showing too many 0s
      WidgetOverlay: Make Classic Resizeable Multicombat Indicator moveable
      timetracking: Add option to show the soonest completion time of a tab

JZomerlei (1):
      Update Quest Enum to latest cache (#12999)

Jordan Atwood (5):
      AnimationID: Remove incorrect trailblazer harpoon entry
      Add support for trailblazer kit rewards
      ChatboxTextInput: Select full message on ctrl+a
      ChatboxTextInput: Improve open selection left/right handling
      HotColdLocation: Fix Pirates' Cove spot

Joshua Kahn (1):
      bank: Fix item container NPE (#13082)

Kevin (1):
      loottracker: Add opened bird nest ID to loot metadata (#12936)

Max Weber (4):
      ImageUtil: rename getResourceStreamFromClass to loadImageResource
      worldhopper: use ImageUtil for loading images
      runelite-api: add Preferences::getHideUsername()
      Update widget ids to 2021-1-20

Morgan Lewis (1):
      Fix growth stages of sweetcorn and watermelon

Mrnice98 (1):
      world map: add mining rock info for Ancient Cavern

Nick (1):
      CrypticClue: Include Varrock armour in Head chef clue solution (#13029)

Nick Wolff (1):
      clues: Allow Dragon scimitar (or) for Falo the bard step (#13032)

Patrick Pollock (1):
      loottracker: Track boosted hunter level for birdhouse loot (#13068)

Psikoi (1):
      hiscore panel: update boss icons

Usman Akhtar (2):
      worldmap: Fix copper ore amount at battlefield mine (#12802)
      plugins: Fix copied variable names

Zach (1):
      itemstats: Fix Zamorak brew defence drain amount (#12921)

equirs (1):
      kittype: add arms kit type

jamesahhh (1):
      menu swapper: Add Skull sceptre invoke swap (#12944)

loldudester (1):
      Fix javadoc cutting off descriptions

wrightmalone (1):
      xp globes: add option to show virtual level in tooltip
\`\`\`
`;export{n as default};
