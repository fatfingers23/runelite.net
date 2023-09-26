const e=`---
title: '1.4.13 & 1.4.14 Release'
description: 'Small enhancements and world hopper, WASD camera plugin fixes'
author: Jordan
---

Minimap icons have been added for wilderness obelisk teleports and achievement
diary set item teleports. Thanks to [@raiyni](https://github.com/raiyni) for
contributing these icons.

![ardougne cloak teleport icon](/img/blog/1.4.13-Release/ardougne-cloak-teleport-icon.png)
![explorer's ring teleport icon](/img/blog/1.4.13-Release/explorers-ring-teleport-icon.png)
![fremennik sea boots teleport icon](/img/blog/1.4.13-Release/fremennik-sea-boots-teleport-icon.png)
![wilderness obelisk teleport icons](/img/blog/1.4.13-Release/wilderness-obelisk-teleport-icons.png)

Several agility shortcuts and obstacles have been added to the agility shortcut
highlighter.

![falador wall shortcut](/img/blog/1.4.13-Release/falador-wall-shortcut.png)
![river salve shortcut](/img/blog/1.4.13-Release/river-salve-shortcut.png)
![underwater obstacles](/img/blog/1.4.13-Release/underwater-obstacles.png)
![underwater shortcuts](/img/blog/1.4.13-Release/underwater-shortcuts.png)

There are also several smaller improvements and bug fixes, including:

- The WASD plugin is now smarter at deciding when to block inputs to the game
- Fix world hopper freezing client when trying to hop during times the game
  prevents you from hopping
- Add option to Corporeal Beast plugin to make left click on the Dark Energey
  core "Walk here"
- Fix Corporal Beast plugin overlay sometimes not showing
- Fix Brimhaven agility alrena timer from resetting whenever an obstacle makes
  you fall to the ground floor
- Fix GE plugin not to show the OSB actively traded price more reliably
- Fix NPCs with empty names being highlighted in some cases
- Fix Pest control plugin detecting shield status
- Time tracker stopwatches and timers now also accept more user-friendly time
  strings, such as "01h30m15s"
- Adjusted Autumn and Winter Deadman Mode teleblock timers have been created in
  advance of the upcoming DMM tournaments

Enjoy!

\\- Jordan

### New commits

We had 15 contributors this release!

\`\`\`
Adam (16):
      wasd plugin: pass through shift and escape
      wasd plugin: disable key listener if not logged in
      wasd plugin: pass through ctrl, alt, and tab
      wasd plugin: allow input to chat dialogs
      wasd plugin: fix slash to talk
      wasd plugin: check chatbox input widget visibility to determine if a dialog is open
      wasd plugin: release same keychar as pressed when changing to typing mode
      wasd plugin: allow input to world map search when focused
      mixins: fix friend manager mixin to implement friend manager
      corp plugin: deprioritize attack option on dark energy core
      barrows plugin: fix double counting price of coins
      pest control plugin: move portal text overlay underneath progress bar
      pest control plugin: cleanup & lombokize
      corp plugin: fix losing track of corp when it spawns during loading
      agility plugin: fix brimhaven timer resetting when failing obstacles
      ge plugin: more reliably show actively traded price

ItsSebas (3):
      Add other side of Falador grapple wall highlight (#5028)
      Add missing agility shortcut near North River Salve (#5048)
      Add boss skill screenshots (#5030)

Jamy C (2):
      TimeTracking: Refactor time parsing and add tests (#5050)
      TimeTracking: Add support for intuitive time notations like "1h 30m 10s"

Jordan Atwood (3):
      Add CHAT_SCROLLBAR_ON_LEFT Varbit
      timers plugin: Add fall/winter DMM teleblock timers
      screenmarker plugin: Remove extra images

Lotto (1):
      worldhopper: fix spam in chatbox when trying to open switcher in bank

Magic fTail (4):
      Add Bastion and Battlemage potions
      Fix KBD respawn timer
      Add debugging to npc highlighter plugin
      Change boss kill screenshot naming

Robbie McLeod (1):
      Fix sidebar hotkey leaking into game client

Ron Young (4):
      Add wilderness obelisk teleport spots on map (#4937)
      Fix pest control shield state checks (#4977)
      Add ardougne cloak map teleport icons (#4998)
      Add Missing Achievement Diary Teleport Map Icons (#5027)

Sebastiaan (1):
      Add Fossil Island underwater agility obstacles (#5055)

Tomas Slusny (4):
      Omit empty strings in NPC indicators
      Add tests for parsing NPC list
      Make pressing BkSPACE with empty chat exit chat
      Remove unused Objects import in AgilityPlugin

astaninger (1):
      Fix fire surge icon and remove redundant smithing entries (#4979)

gandalfthegoat (1):
      add the fairy ring CKS to speak to Ulizius cryptic clue step

psikoi (2):
      Add activity priority to world list
      Fix activity ordering incosistency

trimbe (1):
      wasd plugin: use clientscript to determine what input to block
\`\`\`
`;export{e as default};
