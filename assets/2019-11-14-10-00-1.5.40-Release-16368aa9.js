const e=`---
title: '1.5.40 Release'
description: 'Barbarian Assault healthbars, source dependent mutes, and ground item examine'
author: dekvall
---

The Barbarian Assault plugin now allows the healer to show the health of its teammates:

![ba healthbars](/img/blog/1.5.40-Release/ba_healthbars.png)

The music plugin now additionally allows for configuring which area sounds should be muted based on source.
You can now for example, filter out the sound of everyone else woodcutting while still hearing yours.

The examine plugin now offers functionality to examine ground items so that you can check the value of
your loot before even picking it up.

A new \`!layout\` command has been added to the Chambers of Xeric plugin to share a scouted raid layout.

Also, we'd like to thank Jagex for updating their [post](https://secure.runescape.com/m=news/another-message-about-unofficial-clients?oldschool=1) about 3rd-party clients with the statement that RuneLite is compliant with their rules.

There are also several smaller improvements and bug fixes, including:

- Add "sound" and "volume" tags to music plugin
- Remove paste to password on login screen as jagex added their own
- Add Reset option to various session overlays
- Add option to use last world as default
- Add cannon spot for trolls at Quidamortem
- Add arctic pine logs to the woodcutting plugin
- Fix ScreenshotPlugin Kingdom of Miscellania double screenshot
- Add untradeable item values for long/curved bones, tattered pages and shells
- Add five new emojis; Fire, Heart eyes, Alien, Wave and Eggplant
- Add more detailed location description for Mausoleum emote clue
- Highlight correct crate for Rommik's shop clue
- Fix speccounter for players with 200m hitpoints
- Add Black Demon cannon spot in Chasm of Fire
- Fix Island of Stone coordinate hint
- Correct direction of Miscellania island coordinate clue
- Fix yew tree Sherlock challenge
- Add notify option for impling spawns
- Add black border to wilderness crab teleport icon
- Fix resetting divine potion timers on death
- Make GWD kill count overlay movable
- Use mouse dragged distance to determine if the inventory grid should show
- Add rc-altar icons to worldmap

\\- dekvall

### New commits

We had 25 contributors this release!

\`\`\`
15987632 (1):
      raids plugin: fix rotation solver

Adam (13):
      npc highlight: use local location for south-west highlight
      osb exchange service: validate price averages
      login screen: remove paste to password
      container calculation: fix overflow computing ge price
      api: combine ExperienceChanged and BoostedLevelChanged events to StatChanged
      client: update for new skill change event
      scripts: update chat builder script
      Move ConfigChanged event to client events
      client: add Reset option to various session overlays
      client session manager: fix task crash from being unable to acquire a session id
      api: change LocalPlayerDeath event to PlayerDeath
      api: add fake xp drop event
      speccounter: support fake xpdrops

BenDol (1):
      defaultworld: add option to use last world as default

Chris Hranj (1):
      examineplugin: Add support for ground items (#10157)

Daniel (Danomate) (1):
      cannon: add cannon spot for trolls at Quidamortem (#10242)

David (1):
      worldmap: add rc-altar icons to worldmap

David Goldstein (1):
      clues: Highlight correct crate for Rommik's shop clue (#10194)

David Henshaw (1):
      Add item mappings for rune and tzhaar ornament kits (#10161)

Freya Varez (1):
      Add "sound" and "volume" tags to music plugin (#10199)

Hudson Shykowski (1):
      Add Fremennik Exiles monsters to the NPC health list

Hydrox6 (3):
      clues: fix Island of Stone coordinate hint
      clues: correct direction of Miscellania island coordinate clue
      clues: fix yew tree Sherlock challenge

JZomerlei (1):
      woodcutting plugin: add arctic pine logs

Joel (1):
      Fix ScreenshotPlugin Kingdom of Miscellania double screenshot

Matthew Jacques (1):
      impling plugin: add notify option for impling spawns

Max Weber (2):
      runelite-client/chat: Be more thread safe
      OverlayRenderer: Update bounds before render

Paveldin (1):
      Add Black Demon cannon spot in Chasm of Fire

RansomTime (1):
      Add more detailed location description for Mausoleum emote clue (#10217)

Ron Young (1):
      grandexchange: rebuild GE item text on rebuild script event

Tomas Slusny (3):
      Add method for attaching clear listener to IconTextField
      Clear skill calculator selection on clear button press
      Clear grand exchange selection on clear button press

Zeid Al-Ameedi (1):
      Add untradeable item values for long/curved bones, tattered pages and shells (#10202)

dekvall (4):
      inventorygrid: use mouse dragged distance to determine if overlay should show
      worldmap: add black border to wilderness crab teleport icon
      emojis: reduce file size of emoji icons
      emojis: add five new emojis

emerald000 (1):
      Correct medium Western diary requirement

neeerp (1):
      music plugin: add more area mute options

whartd (1):
      ba plugin: add health bars for healers

winterdaze (2):
      timers: Do not reset divine potion timers on death (#10235)
      Make GWD kill count overlay movable (#10238)
\`\`\`
`;export{e as default};
