const e=`---
title: '1.7.7 Release'
description: 'Minor fixes and improvements'
author: Adam
---

We've had a few updates since the last blog post, mostly minor, and so this post includes those changes as well as the changes today.

The low detail plugin now has an option to hide lower floors, which is particularly useful on lower end computers in
busy areas, like the hallowed sepulchre.

|                                               Before                                                |                                                                       After                                                                        |
| :-------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![Hallowed Sepulchre as it normally appears](/img/blog/1.7.7-Release/hallowed-sepulchre-normal.png) | ![Hallowed Sepulchre shown with the lower floor rendering disabled](/img/blog/1.7.7-Release/hallowed-sepulchre-lower-floor-rendering-disabled.png) |

The friend list plugin now has an option to show the world a player logged into on the log in message.

![login](/img/blog/1.7.7-Release/login.png)

The item charges plugin can now show infoboxes with a charge count for braclets of slaughter, expeditious bracelets, and the chronicle.

![slaughter](/img/blog/1.7.7-Release/slaughter.png)

A world region filter was added to the world switcher plugin, which causes the world hopper panel to only list worlds in a specific region.

![world-hopper](/img/blog/1.7.7-Release/world-hopper.png)

The chat colors config has gained an additional option to allow recoloring your own username in chat.

![chat-name-color](/img/blog/1.7.7-Release/chat-name-color.png)

There are also several smaller improvements and bug fixes, including:

- STASH units that you've removed items from now stay highlighted after the clue step has been completed, to remind you to deposit the items back
- When using \`Lookup\` from the chatbox, the hiscore plugin will now use the correct hiscores based on the ironman symbol of the player
- Items required for skill challenge clues are now found when using the \`clue\` bank tag
- The fishing trawler time remaining display has been updated to reflect the recent changes to the game duration
- The status bars alignment in modern resizable mode has been fixed back to its original position
- The obstacles on the way to the Rellekka lighthouse now have their clickboxes highlighted
- Tempoross and the chest in the Threatre of Blood lobby are now tracked by the loot tracker
- The Imcando hammer has been added to the idle notifier, once again allowing idle notifications when done smithing
- A \`!pb tempoross\` command has been added (requires getting 1 additional kill post-update)
- The spec counter has been fixed to not count bandos godsword and bandos godsword (or) specs separately
- Battlestaffs have been added to the fletching calculator
- A \`Leave\` swap has been added to the menu entry swapper for leaving Tempoross after a game
- A bug causing the GPU plugin to break when antialiasing is forced by the system has been fixed
- The camera plugin now has an option to keep the vertical camera position when aligning the camera to cardinal directions

Enjoy!

\\- Adam

### New commits

We had 21 contributors this release!

\`\`\`
Adam (23):
      wsclient: set ua on ws request
      pom: rename maven-central repositories to central
      api: add get/set min level to Scene
      low detail: add option to hide lower planes
      api: add getters for actor anim and spotanim frame
      devtools: use setAnimationFrame
      comp.cl: remove unused to_screen.cl import
      Update build for jdk 16
      containable frame: fix parsing version strings with only a major number
      hiscore: use correct endpoint when looking up self with shortcut
      hiscore: use correct endpoint when looking up chat messages
      api: add player composition colors
      api: add cross world message fields
      clues: add skill challenge clue requirements to clue tag test
      fishing plugin: update for fishing trawler changes
      widgets: fix modern resizable interface container component id
      chat message manager: add default color for friendschatnotification chat type
      friends chat: use friendschatinfo color for join/part messages
      agility plugin: add rellekka lighthouse obstacles
      info: simplify language surrounding config import
      client: accept custom javconfig url
      item charges: simplify infobox creation logic
      clientloader: don't use fallback config or client when jav_config is manually specified

Alexsuperfly (2):
      cannon: check invent cballs to initialize count when placing
      cannon: set count when loading wrong type of cannonballs

Amit G (1):
      SkillChallengeClue: Support inactive crystal tools (#13517)

Broooklyn (8):
      loottracker: Separate events that do not produce ground items
      loottracker: Add support for Tempoross Reward pool and new Casket
      fishing: Add Tempoross IDs and config to highlight bubbling spots
      Widget: Make Tempoross status indicator moveable
      worldmap: Add fishing spots from Tempoross update
      worldmap: Add Al Kharid and Ruins of Unkah Ferry locations
      worldmap: Add Ruins of Unkah mining location
      discord: finish naming over-world regions

Cyborger1 (1):
      SkillChallengeClue: Add Gold shade keys to Fiyr shade step (#13260)

Hydrox (14):
      Update discord invite links to start users in #welcome (#13549)
      image util: add function to scale images while preserving aspect ratio
      xp globes: scale icon while respecting aspect ratio
      item charges: use RSProfiles for items with stored charges
      time tracking: fix birdhouse notification buttons not doing anything
      idle notifier: add support for the imcando hammer
      wintertodt: add support for imcando hammer
      clues: update reanimated abyssal demon task for new reanimation spells
      skill calc: update arceuus spells
      clues: highlight the last clue's STASH until items are deposited back
      chat commands: add support for tempoross pb messages
      item charges: add bracelet of slaughter and expeditious bracelet
      slayer: remove bracelet charge tracking
      camera: add option to preserve pitch on compass look menu entries

Jordan Atwood (2):
      HotColdLocation: Fix Seers' Village bank spot
      menu manager: add menu entries in insert order

LlemonDuck (2):
      clues: Fix location of Captain Bleemadge (#13531)
      Add Below Ice Mountain quest

Maciej Lewicki (1):
      friendlist: add option to show world in login notifications

Martin H (1):
      achievementdiary: Update Runecraft task texts (#13485)

Matt Dennis (2):
      spec counter: combine item variations into one weapon
      examine: Improve plugin description and tags (#13399)

Max Weber (4):
      eventbus: preserve priority ordering during unregister
      cache/ObjectLoader: add randomizeAnimStart opcode from rev 193
      cache/NpcLoader: add category opcode from rev 195
      Update IDs for 2021-4-28

Nicholas Anzalone (2):
      achievement diary: remove requirment from easy fishing trawler task
      skill calc: Add battlesaff to fletching calculator (#13525)

Owen (1):
      clues: Support golden prospector kit (#13457)

Robert (1):
      chat colors: add color option for player's own name

RuneLogApp (1):
      music plugin: add null check to SettingsSideSlider icon on shutdown

aHooder (1):
      gpu: workaround for forced anti-aliasing

emiljensen2 (1):
      loot tracker: support tob lobby reward chest

isaacph (1):
      world hopper: add region filter config

molo-pl (2):
      clues: Support spirit angler's outfit (#13421)
      menu entry swapper: add Tempoross leave swap

superiorser9 (1):
      wiki: only show vanilla wiki banner when enabled (#13380)
\`\`\`
`;export{e as default};
