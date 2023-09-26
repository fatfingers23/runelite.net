const n=`---
title: '1.3.6 Release'
description: 'Tile marking, clue bugfixes, and entity hider'
author: Adam
---

A tile marker plugin has been added which allows you to highlight arbitrary
tiles by holding shift and selecting "Mark". The markers are saved with your
client settings, and work even in instances.

![tilemarker](/img/blog/1.3.6-Release/tilemarker.gif)

Agility shortcuts throughout the game are now highlighted, and the agility
plugin now highlights marks of grace:

![agilityshortcut](/img/blog/1.3.6-Release/agilityshortcut.png)

A fairy ring location plugin was added which tells you the location fairy rings
are configured to:

![fairyring](/img/blog/1.3.6-Release/fairyring.png)

An entity hider plugin was added which lets you hide other players and npcs from
view.

![entityhider](/img/blog/1.3.6-Release/entityhider.png)

There has been a large effort to fix and correct all of the clues from the
cluescroll plugin. I expect a few more releases before it is solid, but it
should no longer point at random objects anymore.

There are also several smaller improvements and bug fixes, including:

- Opponent info should no longer sometimes show "null" for opponent name
- The infoboxes now have a configurable wrap limit, and can be configured to
  stack verically instead.
- Support for slayer braclets have been added to the slayer plugin
- The MLM plugin now only shows veins on the same floor as you are
- Fix notes plugin to textwrap
- Add kingdom of misc. to screenshot plugin
- The length XP globes are shown is now configurable
- Fix client resizing itself when the plugin panel is collapsed and the client
  is maximized
- Color HP xp drops when praying too if XP drops are split
- "Actions Left" has been added to XP globes

Enjoy!

\\- Adam

### New commits

We had 26 contributors this release!

\`\`\`
Adam (22):
      ge plugin: use query runner for bank query
      perspective: use LOCAL_COORD_BITS in getTileHeight and document that parameters are local coords
      Remove unnecessary groupdIds that are equivalent to the parents
      Rename runelite api artifact to runelite-api
      Rename runescape api artifact to runescape-api
      Change pushingpixels groupId to be under net/runelite
      Update cache-server test to use cache 165 too
      overlay renderer: fix npe when client is null
      devtools: show instance location information
      Add ground marker plugin
      tile mixin: don't fire itemlayer change events when loading regions
      update check service: set a lower connect timeout
      Add command executed event
      runescape-client: rename pendingVarbitChanges/Count
      devtools plugin: add commands to get and set varbits
      idle notifier plugin: use wildcard import for animation ids
      runelite config: add position to config items
      infobox overlay: Configure the amount of boxes per row
      npc mixin: transform npc in getName/getCombatLevel/getId
      npc indicators: fix npe building npcs
      Revert "Merge pull request #1886 from deathbeam/cleanup-sidebar"
      xp tracker service: fix deadlock acquiring connections

Cas van Dongen (1):
      Slayer plugin: Added support for slayer bracelets.

Gabriel (2):
      Fix and add a few medium clue steps
      Fix anagram, cryptic and emote medium clues (#1876)

Gamer1120 (1):
      Only render mining spots on same floor in MLM. Fixes #1642

Grant Dellar (1):
      Change JEditorPane to JTextArea

HypoxiaOSRS (3):
      screenshot plugin: add Kingdom screenshot
      Add rune and addy dragon slayer icons (#1725)
      Fix gnome agility arena emote clue

Håkon Rosseland Paulsen (1):
      xpglobes: add duration of xp orbs in config

Infinitay (2):
      kingdom plugin: only show favour when in kingdom
      Add fairy ring plugin

Jeremy Plsek (5):
      clientui: don't update size if already maximized
      geplugin: create input listener class
      geplugin: replace default action when pressing alt
      stretched mode: pass extended modifiers on click
      Highlight agility shortcuts

Jeroen (2):
      Added an idle notification for when crushing infernal eels.
      Add support for colored HP xp drops if XP drops are split and a combat prayer is active

JerwuQu (1):
      Allow customization of barrows brother location colors

Jordan Atwood (1):
      Fix Canifis emote clue

Kamiel (4):
      Change regen meter arc position and size to match with orb background
      Draw player indicator clan icon further away from player name
      Add VarClientStr to api and rename VarClient to VarClientInt
      Change ground marker plugin to use selected region tile coords instead of basing them off of mouse location

Levi Schuck (1):
      Sort Fishing spots by distance from camera

Lotto (2):
      cluescroll-plugin: group item variants + display when to unequip items
      Add entity hider plugin

Mantautas Jurksa (2):
      cluescroll plugin: remove tags from clue text
      Fix barbarian chest and abbot langley clue steps

Reasel (1):
      Add dropdown for font style for in-game overlays

Rheon-D (1):
      agility plugin: add highlighting for marks of grace

Rune Nielsen (3):
      Clue plugin: fix easy and medium cryptic and emote clues (#1726)
      IdleNotifierPlugin: Add big net fishing
      IdleNotifier: Add infernal harpoon

Samlof (1):
      Add more travel menu swap options and claim slime swap

Seth (3):
      overlay util: remove white outline on minimap dots
      barrows overlay: Reorder enum to match in game overlay/use full name
      barrows overlay: Replace existing slain brother overlay with our own

SomeZer0 (1):
      Fix spirit tree cryptic clue step

Tomas Slusny (8):
      Add back support for regular overload (NMZ)
      Stronger visual indicators for MLM sack
      Do not use object world locations
      Make ObjectClueScroll extend LocationClueScroll
      Fix runelite-client shading
      Remove unnecessary code from GroundMarkerPlugin
      Fix herbiboar performance/blinking
      Cleanup sidebar expanding/closing

Trees (1):
      Add Sacred Eels and Barehand Fishing (#1857)

Valmir Memeti (1):
      Add "Actions left" for Xp globes

WooxSolo (2):
      Fix cannon cannonball count
      Fix 2 emote clues
\`\`\`
`;export{n as default};
