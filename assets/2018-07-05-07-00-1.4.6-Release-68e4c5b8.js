const n=`---
title: '1.4.6 Release'
description: 'Lightbox and Varrock Museum quiz solver, config panel tags and favorites, Discord bosses & minigames'
author: Tomas
---

A lightbox solver plugin was added which tells you the pattern to solve lightboxes after
observing a few of the switches. Contributed by [@Adam-](https://github.com/Adam-).

![lightboxsolver](/img/blog/1.4.6-Release/lightboxsolver.png)

A helper for Varrock Museum Quiz was added as well that highlights correct answer to
questions in Varrock Museum basement. Thanks to [@vikke1234](https://github.com/vikke1234)
who contributed this feature.

![varrockmuseumsolver](/img/blog/1.4.6-Release/varrockmuseumsolver.png)

The configuration panel was significantly improved thanks to big contribution from
[@takuyakanbr](https://github.com/takuyakanbr). Some of the improvements are:

- Each plugin now has a short description when hovered
- Each plugin now has tags that will make plugins easier to search for
- Plugins can now be pinned to the top of the panel (a new star icon was added next to each plugin name
  that when clicked will pin the config option to top)
- Search bar in configuration panel will now always stay on top
- Each configuration page for plugins now have back and on/off buttons at the top of panel

![configbackbutton](/img/blog/1.4.6-Release/configbackbutton.png)
![configfavorites](/img/blog/1.4.6-Release/configfavorites.png)
![configtags](/img/blog/1.4.6-Release/configtags.png)
![configtooltip](/img/blog/1.4.6-Release/configtooltip.png)

Thanks to another awesome contribution from [@PandahRS](https://github.com/PandahRS) who spent
a lot of time manually mapping a lot of RuneScape surface to regions, the Discord plugin now has
a lot of new features, including display of **city** you are in, **dungeon** you are currently
exploring, **boss** you are currently fighting and even **minigame** you are currently playing.

Due to privacy reasons, these new location-based features are disabled in any PVP scenario, such
as PVP worlds, High Risk worlds, DMM and Seasonal DMM worlds.

![discord1](/img/blog/1.4.6-Release/discord1.png)
![discord2](/img/blog/1.4.6-Release/discord2.png)

In addition to the highlighted features, there have been several other improvements and bugfixes this release:

- !total, !clues and !lvl commands now properly show ranks based on account types
- Plenty of new food types have been added to Item Stats plugin
- SOTD timer now properly works also for SOTL
- Obstacles for Agility Pyramid entrance and Morytania pirate ship have been added to Agility plugin
- Al-Kharid lap counter has been fixed
- XP tracker now shows dots instead of commas to follow OSRS style of displaying numbers
- Fishing plugin now supports all types of eels
- Bug with inventory tagger plugin showing items with different models depending on the quantity
  incorrectly have been fixed

Enjoy!

~ Tomas

### New commits

We had 15 contributors this release!

\`\`\`
Adam (8):
      runelite-api: make HashTable a generic
      Calculate and store widget parent id and position when the interfaces are rendered
      Revert "Add ironman status and AccountType to API"
      chat commands: fix to use exiting accounttype api
      agility plugin: fix Al Kharid lap counter
      puzzle solver: add lightbox solver
      chat commands: store kill counts in config
      Change Widget::parentId behavior to work again if the widget hasn't been drawn yet

Damen (2):
      Fix Dark Crab req lvl in skill calculator (#4071)
      Prevent cannonball count conflicting with health bars (#2857)

Gamer1120 (1):
      Fix hiscore lookup for ironman in chat commands

JHPinto (1):
      slayer plugin: move item count overlay checks to render

Jeremy Plsek (2):
      item manager: add item outline caching
      inventory tags: use item manager for outlines

Jordan (1):
      Ignore level goals which have been passed (#3805)

Jordan Atwood (17):
      item stats plugin: Add Edible seaweed
      chat color: Fix description typo
      Update Veng Other / Energy Transfer animation ID
      Add Vengeance Other graphic ID
      timers plugin: Check for Vengeance Other graphic
      item stats: Add missing RFD foods
      fishing plugin: Add cave eel and slimy eel spots
      agility plugin: Add Lumbridge swamp cave shortcuts
      item stats plugin: Add field ration
      grand exchange plugin: Fix error message typos
      grand exchange plugin: Clear render on empty string
      item stats plugin: Fix import ordering
      item stats plugin: Fix Zamorak brew stat changes
      skill calculator: Fix combined items with decimals
      item stats: Add negative attack bonus to wines
      clues: Fix Cap'n Izzy No-Beard anagram clue
      agility plugin: Add pyramid entrance obstacles

Kamiel (1):
      screen-markers: fix graphical bug

Magic fTail (1):
      AgilityPlugin: Add obstacles north of pirate ship (#4084)

Max Weber (3):
      mixins: Don't show siblings in dynamic widget's child lists
      farmingtracker: Correct several patch timings
      itemstats: Add variable healing food

Nathen Sample (1):
      Represent decimals as .'s not ,'s (#4059)

PandahRS (5):
      Make skilling activity configurable in Discord
      Add bosses to Discord plugin
      Add cities to Discord plugin
      Add dungeons to discord plugin
      Add minigames to Discord plugin

Tomas Slusny (7):
      Add ironman status and AccountType to API
      Make SOTD/SOTL timer use chat messsage
      Return preferredSize.width from TitleComponent
      Make !clues command respect account type
      Add logging of presence to DiscordService
      Make Discord plugin more extensible/support region
      Reset Discord state if now > updated + timeout

Viktor Horsmanheimo (2):
      Add widget IDs for the varrock museum quiz
      Add Varrock museum quiz solver

takuyakanbr (5):
      Add description and tags fields to PluginDescriptor
      config panel: change plugin search to use plugin name + tags
      config panel: add ability to pin plugins to the top
      config panel: keep search bar at the top while scrolling Add back and toggle buttons at the top of plugin configuration pages
      Replace fields in ConfigGroup with a single \`value\` field
\`\`\`
`;export{n as default};
