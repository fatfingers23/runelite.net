const e=`---
title: '1.6.36 Release'
description: 'Improved farming timer estimations and Zalcano damage counter'
author: Adam
---

The time tracking plugin now keeps track of when each account's farming tick
happens and can use it to give much more precise estimations of when crops are
done growing. To do this it must first observe a tree growing.

![Farming timer](/img/blog/1.6.36-Release/farm-timer.png)

The Zalcano plugin now includes a damage counter to track how much damage you
have done to the health and shield, to let you easily track if you've done
enough damage to be eligible for drops, uniques, or the pet.

![Zalcano damage counter](/img/blog/1.6.36-Release/zalcano-dmg.png)

Many of the existing color configuration options for overlays now support
adjusting their transparency too.

![Zalcano damage counter](/img/blog/1.6.36-Release/alpha.png)

There are also several smaller improvements and bug fixes, including:

- Texture brightness with the GPU plugin has been adjusted to more closely
  reflect the software rasterizer
- FPS with GPU on in areas with full-screen transparent overlays, such as
  Godwars, under water, and Ver Sinhaza has been improved
- The xp tracker now respects the in-game xp tracker position setting
- Fix some dead clicks when trying to alt+drag or alt+reset overlays
- Fix item overlays, such as the rune pouch or item identification overlays,
  from drawing over top the world map
- The barrows reward potential overlay colors are now exact and no longer an estimation
- Fix the Ape Atoll skull climb obstacle click box overlay
- Mouse tooltips now work on the welcome screen and the full screen world map
- The multicombat icon is now movable when holding alt
- The status bars health bar is now recolored when infected by a parasite
- Timers have been added to the green Tears of Guthix streams
- The Sire stun timer now more accurately tracks when the Sire is stunned while
  already stunned
- Fix the essence teleport menu swap for Sedridor
- Fix the Charge spell timer time to be 7 minutes

Enjoy!

\\- Adam

### New commits

We had 19 contributors this release!

\`\`\`
Adam (31):
      barrows: fix reward potential color overlay
      twitch: fix npe closing client if no socket has been created
      widget overlay: use the in-game configured position for the xptracker widget
      devtools: assign unique names to debug infoboxes
      overlay renderer: set currentManagedOverlay also when clicking
      Allow overlay renderer to restrict overlay parent bounds
      ci: use mvn verify phase instead of install
      api: remove getViewportWidget()
      overlay renderer: use viewport bounds for snap corner offsets
      Rename various itemWidget to widgetItem to match class name
      Add interface and layer draw hooks for overlays
      wiki: use script post fired event for hiding wiki banner
      timers: use pvp varbit to clear teleblock timer
      Remove ITEM_DROP menu action
      menu entry swapper: replace some client.getItemDefinition calls with itemManager.getItemComposition
      menu entry swapper: refactor configure shift click menu code to use menu types and ids
      ping: place IcmpCloseHandle in finally
      api: remove WidgetHiddenChanged
      ge plugin: better handle trades updating on login
      ge: add user agent to trade message
      ge: add trade seq number
      ge: submit buy limit reset time
      Allow mouse tooltips on the welcome screen and full screen world map
      comp_unordered.glsl: don't orient vertices
      gpu: move calculateExtreme() after visibility check
      gpu: correctly set model height on non-model renderables
      gpu: draw full screen widgets on gpu
      client: bind runelite.properties to guice
      gpu: dispatch compute after scene draw
      perspective: ignore invisible tris in clickbox calculation
      gpu: fix lighting textures

Broooklyn (2):
      discord: add a few missing regions
      item identification: add Jungle Potion herbs

CGOSURLDEV (1):
      ge plugin: update config descriptions to be more descriptive

Christian Gati (1):
      Add Green Tears of Guthix Timer (#12862)

Fjara - Choppe (1):
      agilityshortcut: fix Neitiznot Bridge agility level requirements

Hydrox6 (1):
      WidgetOverlay: Make Multicombat Indicator moveable

Jordan Atwood (1):
      itemstats: Add Darkmeyer foods

Koanga (1):
      item prices: fix evalulating large platinum token stack prices

Malfuryent (1):
      statusbarplugin: Recolor health bar when infected by a parasite (#12874)

Max Weber (4):
      config/PluginHubPanel: show uninstall ui feedback when in safe mode
      music: fix channel mute op name
      runelite-api: add WidgetClosed event
      runelite-api: add WidgetNode::modalMode

Minhs2 (1):
      skill calc: add 4 dose potions

Morgan Lewis (3):
      Add additional areas to FarmingRegions
      Add Health Check data to PatchImplementation.java
      Add farming tick offset to time tracking plugin

Mrnice98 (1):
      timers: use chat message for sire stun timer

Paul Norton (2):
      Add "scorched" Lletya regionID recognition to TimeTracking's FarmingWorld
      Add scorched Lletya region ID to discord presence determination

Paveldin (1):
      fishing: Add crystal and trailblazer harpoon to fishing tool list (#12829)

Usman Akhtar (1):
      menu entry swapper: fix swap for sedridor

dekvall (2):
      zalcano: add damage counter
      sponsors: add patreon link

emerald000 (1):
      timers: change Charge time to 7 minutes

pilino1234 (1):
      Add alpha channel to color config options where applicable
\`\`\`
`;export{e as default};
