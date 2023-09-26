const e=`---
title: '1.6.26 & 1.6.27 Release'
description: 'Website time tracking and improved item outlines'
author: Jordan
---

You can now view your [Time Tracker
plugin](https://github.com/runelite/runelite/wiki/Time-Tracking) progress [on the
website](https://runelite.net/account/time-tracking) when you are [logged in to your RuneLite
account](https://github.com/runelite/runelite/wiki/Account) for easy checking on the go!

|                                                                                                   |                                                                                                 |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| ![Website time tracker for fruit trees](/img/blog/1.6.27-Release/website-tracker-fruit-trees.png) | ![Website time tracker for birdhouses](/img/blog/1.6.27-Release/website-tracker-birdhouses.png) |

Item outlines [like those seen when using the Inventory Tags
plugin](https://github.com/runelite/runelite/wiki/Inventory-Tags) have been updated to draw more
accurate borders around the outlined items.

| Before                                                                                   | After                                                                                 |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| ![Item outlines prior to release 1.6.27](/img/blog/1.6.27-Release/item-outlines-old.png) | ![Item outlines after release 1.6.27](/img/blog/1.6.27-Release/item-outlines-new.png) |

Several bugs preventing RuneLite from maximizing correctly on hidpi or scaled displays have been
fixed, and there will be an upcoming launcher release to fix the remaining known issues, which are
related to multiple displays with mixed hidpi/scaling settings.

There are also several smaller improvements and bug fixes, including:

- Load times with the [GPU plugin](https://github.com/runelite/runelite/wiki/GPU) enabled have been
  slightly improved
- A "Plugin Hub" search suggestion has been added to the plugin list panel to help identify plugins
  added via the hub
- The [Mining plugin](https://github.com/runelite/runelite/wiki/Mining) now tracks dense essence
  mining and shows the proper mining status while mining at Motherlode mine and while mining
  amethyst
- The [Motherlode Mine plugin](https://github.com/runelite/runelite/wiki/Motherlode-Mine) shows the
  proper mining status while mining with a 3rd Age pickaxe
- The [Discord plugin](https://github.com/runelite/runelite/wiki/Discord) now recognizes many more
  areas such as the Farming Guild, runecrafting altars, Morytania, and more
- The [Clue Scroll plugin](https://github.com/runelite/runelite/wiki/Clue-Scroll) correctly
  indicates that items protected with a Trouver parchment are eligible for emote clues
- Blisterwood logs, Hallowed Sepulchre floors, and the Carpenter's outfit set bonus have been added
  to the [Skill Calculator plugin](https://github.com/runelite/runelite/wiki/Skill-Calculator)
- You can now toggle the Dark energy core highlight in the [Corporeal Beast
  plugin](https://github.com/runelite/runelite/wiki/Corporeal-Beast)
- The new Gu'Tanoth agility shortcut is now highlighted with the [Agility
  plugin](https://github.com/runelite/runelite/wiki/Agility)
- Houses decorated with the Twisted League or Hosidius themes now have their own [skybox
  colors](https://github.com/runelite/runelite/wiki/Skybox)
- The [Abyssal Sire stun timer](https://github.com/runelite/runelite/wiki/Timers) shows up correctly
  again
- [The Inferno's time tracker](https://github.com/runelite/runelite/wiki/Timers) is now adjusted by 6
  seconds to be in line with the ingame timer

Enjoy!

\\- Jordan

### New commits

We had 17 contributors this release!

\`\`\`
Adam (13):
      scripts: fix privateMessage message skipping
      core overlay: cleanup
      timers: consolidate teleblock timers
      ge: include username in machine hash
      mining plugin: track dense essence mining
      item manager: fix item outlines to more accurately fit model
      ui: fix frame maximized bounds with dpi scaling
      disassembler: escape string operands
      containableframe: fix parsing Oracle Java 8 version string
      scene uploder: remove unnecessary reset
      gpu: optimize ensureCapacity()
      scene uploader: inline pushFace() into uploadModel()
      scene uploader: add stopwatch

Broooklyn (8):
      clues: Fix Watchtower master emote step coordinates (#12429)
      quest: add A Porcine of Interest and Daddy's Home to quest enum
      worldmap: add A Porcine of Interest quest start location
      worldmap: add Sourhog Cave dungeon location
      discord: update config names and descriptions
      discord: add Region AreaType
      discord: add additional mapped regions
      discord: fix Barbarian Assault regions

David (1):
      menuentryswapper: Add Island of Stone quick travel (#12422)

Doron Galambos (3):
      clues: Update Ardougne cryptic clue (#12520)
      clues: Update Falador cryptic clue (#12519)
      game: Add Gu'Tanoth crumbling wall agility shortcut (#12506)

Hydrox6 (2):
      Pickaxe: add overhead mining animations (#12509)
      motherlode: add 3a pickaxe

Illya Myshakov (1):
      skillcalc: Add Blisterwood Logs firemaking and woodcutting calc (#12456)

Jordan Atwood (2):
      HotColdLocation: Center some location spots
      EmoteClue: Fix Infernal max cape item ID

MarbleTurtle (1):
      clues: Support items locked with Trouver parchment

Matt Davenport (1):
      cluescrolls: add fairy ring codes to emote clues

Matthew C (4):
      timers: Add Mage Arena 2 teleblock timers
      corp: Add toggle for dark energy core highlighting (#12462)
      slayer: Sort Task enum alphabetically
      slayer: Add black knights and pirates

Max Weber (3):
      runelite-client: remove removed items
      config: implicitly tag all hub plugins as pluginhub
      skybox: include twisted league and hosidius POH themes

Michael Archer (1):
      timers: Update stunned Abyssal Sire ID (#12410)

Sean Patiag (1):
      achievementdiary: Fix Western Provinces quest requirement

Tomas Slusny (1):
      Merge UntradeableItemMapping and ItemMapping

arthur798 (2):
      skillcalculator: Add Carpenter's outfit set bonus (#12412)
      skillcalculator: Add Hallowed sepulchre floors to agility calculator (#12414)

data-dependent (1):
      mining: Fix gem rock respawn time (#12481)

jcwhisman (2):
      ElapsedTimer: Display time in mm:ss format
      timers: Fix inferno timer starting time
\`\`\`
`;export{e as default};
