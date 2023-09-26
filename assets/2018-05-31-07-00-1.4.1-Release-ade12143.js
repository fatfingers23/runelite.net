const e=`---
title: '1.4.1 Release'
description: 'Chat recolor, redwood tree markers, and grand exchange notifications'
author: Adam
---

First, lately there have been several targeted phishing attacks against
RuneLite, including targeted ad buys on both Google and Reddit. If in doubt,
cross reference the site with the official GitHub and Discord. The main tell is
the official Windows download is an executable digitally signed by Alexander
Henne, and not a .jar. We can generally get these sites taken down, but it
usually takes some time to do so.

Now for the update:

Chat color for each chat type (public, private, clan, trade, etc.) are now
configurable in the "Chat Colors" configuratrion.

![chatcolors](/img/blog/1.4.1-Release/chatcolors.png)

The woodcutting plugin now can overlay redwood tree locations.

![redwood](/img/blog/1.4.1-Release/redwood.png)

The grand exchange plugin can now notify you when something buys or sells.

![genotification](/img/blog/1.4.1-Release/genotification.png)

Also a special thanks to [@Matthew Steglinski](https://github.com/sainttx) who
contributed Javadoc for [155
files](https://github.com/runelite/runelite/pull/3236) in the API. This greatly
improves our [published Javadoc](https://static.runelite.net/api/runelite-api/).

Screen markers can now be assigned names, making it easy to save and reuse them
later without having to re-add and position them. Existing screen markers will
need to be deleted and readded.

Full screen mode was added and is toggleable in RuneLite settings.

![fullscreen](/img/blog/1.4.1-Release/fullscreen.png)

There are also several smaller improvements and bug fixes, including:

- Fix hiscore lookup autocomplete
- Fix hiscore and GE lookups getting stuck when given invalid input
- Improve boss timer spawn timers by start them when the NPC despawns instead of
  at the beginning of the death animation
- Add miscellaneous and scroll teleports to the world map plugin
- Skill calculator now turns actions that will become available before target
  level orange
- The bank evaluator plugin now includes the price of untradeable items
  tradeable versions
- Optimize clickbox calculation code
- Fix Vet'ion boss timer and add KQ boss timer
- Add option to swap "interact" with "empty" on birdhouses
- Update menu swapper to support multiple fairy ring defaults
- Fix slayer plugin to work with NPC contact
- Add Bandit Camp fishing spot to fishing plugin
- Fix MLM plugin when it is started/stopped from within the MLM
- Fix UI responsiveness when closing skill calculator
- Add Limestone attack stone to skill calc
- Reset gorillas in demonic gorilla plugin on startup and world hop
- Add gilded altar to idle notifier
- Add wine making to idle notifier
- Add option to swap minecart menu option to travel from GE to Keldagrim
- Add bar dispenser clickbox overlay to blast furnace plugin
- Show clickbox of the Boiler in Dorgesh-Kaan agility course in the agility
  plugin

Additionally, there were clue fixes from Eadgars-Ruse, Jordan Atwood, and Maiddog.

Enjoy!

\\- Adam

### New commits

We had 26 contributors this release!

\`\`\`
Adam (30):
      pom: set updatePolicy always for runelite snapshots
      pom: remove tomcat deploy execution
      hiscore panel: properly error if result is null
      ge search panel: catch cache load exception from search returning null
      Revert "boss timers: improve accuracy of boss respawn timer"
      boss timers plugin: change to use npc despawn event
      agility plugin: fix exception on reconnect
      poh plugin: fix exception when tile for burner is not fully visible
      Remove actor death event, use despawn event instead
      woodcutting plugin: timeout woodcutting sessions
      woodcutting plugin: show redwood trees
      world map plugin: merge jewellery teleports and magic teleports
      world map plugin: add misc teleports
      skill calculator: lombok some of UIActionSlot
      skill calculator: turn indicators orange for actions that will become available before target
      screen marker overlay: stop if preferred size is null
      antidrag: reset drag when focus is lost
      runelite-client: add ItemMapping to map untradeable items to tradeable versions
      item manager: use item mapping
      item manager: cache unable to look up on unsuccessful bulk lookup too
      runelite-client: update bank calculation and barrows calculation to use item mapping
      runelite-api: optimize ChatMessageType.of()
      config manager: fix resetting configuration items with no default value
      config panel: allow color configs with no value
      runelite-client: add chat color config
      runelite-client: remove chat color config from plugins
      Revert "perspective: use viewport offset in get2DGeometry"
      perspective: use viewport offset for offsetting rectangle in get2DGeometry
      runelite-api: use lombok constructors for Vertex/Triangle
      perspective: optimize clickbox generation

Alexsuperfly (3):
      boss timers: improve accuracy of boss respawn timer
      boss timers: fix Vet'ion timer to start after 2nd phase death
      boss timers: add KQ to boss list

BeefaloKing (1):
      Stretched Fixed Mode Plugin: Add Integer Scaling option (#2863)

Eadgars-Ruse (2):
      Change hot/cold overlay to only show outline of dig area (#3166)
      Fix coordinates for venenatis hot cold clue (#3212)

Ethan (5):
      Exclude ironmen from daily herb box notifications
      Add option to swap "interact" with "empty" on birdhouses
      Update menu swapper to support multiple fairy ring defaults
      Add teleport scroll locations to map
      Add notifications to Grand Exchange plugin

Hydrox6 (1):
      Fix items with no Grand Exchange Price using Store Price for the right click menu instead of High Alchemy value

Iguaan (2):
      slayer plugin: read bracelet charges directly from chat message
      slayerplugin: fix current task regex and new task via npc contact regex

Jeremy Plsek (1):
      enqueue most post/put/delete requests

Jordan Atwood (6):
      Allow imbued Ring of Wealth for emote clue (#3230)
      Fix location for West Ardougne emote clue (#3231)
      Fix Grand Tree mushrooms clue
      Improve Yanille anvil room map clue location
      Add Wilderness Bandit Camp fishing spot
      Fix Iban's Temple emote clue

Kelvin (1):
      Use single DynamicGridLayout for XPTracker stats (#3432)

Kruithne (1):
      skill calculator: allow XP values up to 200,000,000 rather than 188,884,740

Lars (3):
      Motherlode Mine - Startup / shutdown bugs (#3124)
      XpInfoBox - Remove min/max experience check (#3397)
      Use screenmarker name not ID for displaying it (#3423)

Magic fTail (3):
      BossTimerPlugin: Find bosses based on id instead of name
      More accurate respawn timers
      MenuEntrySwapper: Reorder config items to alphabetical order

Maiddog (1):
      Fix typo in Pyramid Plunder emote clue (#3419)

Matthew Steglinski (6):
      runelite-api: Add missing documentation
      Fix ArrayIndexOutOfBoundsException when an empty command is typed
      devtools: Add camera position overlay
      devtools: Add base, local, and region coordinates to LocationOverlay
      grandexchange: Format 'Price each' value for items in additional information layout
      Add local player death event

Morgan Lewis (3):
      Clue Scroll Plugin: Add wording to direct users to world map
      Dev-tools: Add location overlay to show world map position
      Remove WorldMapOverlayTest Plugin

Ruben Amendoeira (6):
      Hiscore auto-complete fix
      Skill calcs performance improvement
      Refactor ClientUI using CardLayout
      Remove feed refresh button
      Add top margin to the XP tracker error panel (#3343)
      Add naming to screenmarkers

Simon Landry (1):
      Add Boiler to Dorgesh-Kaan obstacles IDs (#3437)

Tomas Slusny (11):
      Unify NPC highlighting color settings
      Use NpcSpawned and despawned for getting cacheNpc
      Move private methods at bottom of NPC plugin
      Add support for fullscreen mode
      Change default PluginPanel layout to DynamicGrid
      Change config TextField to TextArea
      Move highlighted/hidden to top
      Store markers based on epoch millis
      Properly set preferredSize of navContainer
      Add Limestone attack stone to skill calc
      Update Lombok to 1.16.22

TzZek (1):
      Add making wines to idle notifications (#3441)

WooxSolo (1):
      Reset gorillas in demonic gorilla plugin on startup and world hop

drivfe (1):
      screen markers: fix for confirm dialog appearing behind main UI window

iguaan (3):
      idlenotifier: add support for gilded altar
      timers: use correct capitalisation for antifire in settings
      slayerplugin: fixed bracelet charge counter

iskarky (1):
      Swap menu entry for minecart travel from GE to Keldagrim

shmeeps (2):
      Capitalize world map configuration names (#3301)
      Account for slightly different dimensions of first and second/third floors (#3249)

ypperlig (1):
      blast furance plugin: add bar dispenser to clickbox overlay
\`\`\`
`;export{e as default};
