const e=`---
title: '1.5.37 Release'
description: 'Sound volume sliders, area sound mute, and new Jagex statement'
author: Adam
---

The music plugin now changes the volume sliders on the in-game sound interface
to slide:

![sliders](/img/blog/1.5.37-Release/sliders.gif)

The plugin additionally offers a new setting which will mute area sounds caused
from animations of other players (mostly skilling animations like woodcutting).

Jagex has released a new [third party
client](https://secure.runescape.com/m=news/another-message-about-unofficial-clients?oldschool=1)
statement which builds on their previous
[statement](https://secure.runescape.com/m=news/a-message-about-unofficial-clients?oldschool=1).
The vast majority of the statement seems targeted at features of clients other than
RuneLite; most features listed are not and have never been features of RuneLite.
However there are some changes required to RuneLite to make it compliant, so the
following changes have been made:

- Removal of the Cerberus plugin
- Removal of the reorder prayers plugin
- Remove "opponent's opponent" part of the opponent info overlay
- Remove the pickpocket/talk-to swap from the menu entry swapper
- Remove the minimap overlay from the barrows plugin
- Remove the Walk here/Attack swap on the Corporeal beast dark core

I would also like to thank Mod Bonsai for providing us with draft statements and
allowing us to provide feedback directly to Jagex. The collaboration between us
and Jagex over the last few weeks on this has been more than all of the last 2
years combined.

There are also several smaller improvements and bug fixes, including:

- Fix the random event plugin hiding menu options for your own randoms
- Fix the combat level plugin not showing combat level range in the wilderness
- Fix world map tooltip for Prifddinas farming patch
- Fix the PvP kill/death counter to once again be moveable
- Fix full teleblock timer
- Add pyramid plunder start-minigame and quick-leave to the menu entry swapper
- Add Fremennik Exiles to the world map and add tooltips for the new
  transportation icons
- The fishing overlay colors are now configurable
- Add coordinate clue descriptor for Island of Stone clue
- Add fishing trawler to the loot tracker
- The loot tracker can now use High Alchemy price for item valuation
- Show price check when examining items on the trade interface
- The wiki plugin can now have its "cast" feature used on items in the bank and
  all other interfaces with items other than the inventory
- The [loot tracker](https://runelite.net/account/loot-tracker) on the website now shows total value of loot

\\- Adam

### New commits

We had 19 contributors this release!

\`\`\`
15987632 (1):
      widgets: fix wilderness level widget

Abex (1):
      wiki: support wiki-casting on non-inventory items

Adam (16):
      random events: fix menu being hidden for own events
      achievement diary: remove requirements for Karamja hard kill a metal dragon task
      client: update mockito
      client: remove Cerberus plugin
      client: remove reorderprayers plugin
      opponentinfo: remove Opponent's opponent
      corp plugin: remove dark core attack deprioritization
      menuentryswapper: remove pickpocket swap
      cache: update npc definition and loader
      api: add source to sound effect events
      devtools: add source to sound effect overlay
      music plugin: add option to mute other players area sounds
      http-service: make mongo database configurable
      menu swapper: add pyramid plunder start-minigame and quick-leave
      barrows plugin: remove minimap
      http-api: centralize json mediatype

Alex (1):
      menu entry swapper: add shift click teleport spell swap

Alexsuperfly (6):
      world map: correct waterbirth ship transportation icon
      world map: correct pirates' cove ship transportation icon
      world map: correct lunar diplomacy quest start icon
      world map: add island of stone ship transport icon
      quest: add fremennik exiles quest to enum
      world map: add fremennik exiles quest start

David (4):
      farming calc: fix white lily level
      fletching calc: add dragon crossbow
      mining calc: add soft clay
      hunter calc: add crystal impling

Desetude (1):
      Make the PvP kill/death counter moveable

Elpan (1):
      world map: fix Prifddinas farming patch tooltip

Harry Freeborough (1):
      Correct capitalisations of "RuneScape" (#10142)

Hydrox6 (5):
      loot tracker: rename price to gePrice
      clues: fix Shayzien supply armour Sherlock clue
      loot tracker: add HA prices
      loot tracker: add price type display
      clues: fix MultipleOfItemRequirement not working with non-stacking items

Joel (1):
      Add item mapping for Berserker Necklace (or) (#10158)

Lotto (2):
      fishing: make overlay colors configurable
      feed: use RuneLiteClient's Twitter list

Max Weber (2):
      music: Add ingame granular volume adjustment
      music: check parent and siblings for null

Nathaniel Pather (2):
      clues: add Island of Stone location descriptor
      npc health: add lvl 44 zombie health (#10121)

SebastiaanVanspauwen (2):
      timers plugin: update full teleblock text
      Worldmap: Fix incorrect Zeah quest start locations (#10135)

Tomas Slusny (1):
      raids plugin: add option to manually broadcast layout

dekvall (7):
      skill calc: clear combined action slot on skill change
      fishing: reset trawler start time when back on land
      loottracker: add fishing trawler
      loottracker: add confirm dialog to reset all
      random events: fix npe on login
      examine plugin: add pricecheck for trade interface
      chat timestamps: add timestamps to split private chat

ln (1):
      GPU: Floating point screen coordinates to eliminate vertex snapping

trimbe (1):
      tabinterface: remember search after clicking deposit-x
\`\`\`
`;export{e as default};
