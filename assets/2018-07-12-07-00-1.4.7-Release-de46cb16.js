const n=`---
title: '1.4.7 Release'
description: 'Kill count command, prayer bars, and Tears of Guthix plugin'
author: Adam
---

A kill count command was added which can share your kill count with other
players who are also using RuneLite. The client must first observe you
getting a kill count message to record the kill count. It can not read
the kill counts off of the boss log in game yet, but maybe that will come soon.

Note that as the kill count data is sent from the client it is trusted and is not
difficult for someone to fake.

![kc](/img/blog/1.4.7-Release/kc.png)

The prayer plugin now can show a prayer bar, below your hitpoints bar, showing
how much prayer you have left.

![prayerbar](/img/blog/1.4.7-Release/prayerbar.png)

A Tears of Guthix plugin was added which displays time remaining on the blue streams:

![tog](/img/blog/1.4.7-Release/tog.png)

The special attack orb now indicates when you have special attack enabled.

![specorb](/img/blog/1.4.7-Release/specorb.gif)

There are also several smaller improvements and bug fixes, including:

- Add broad arrows to the fletching skill calculator
- XP drop plugin will now center text of XP if skill icons are hidden
- Fix agility plugin counting laps on the agility pyramid
- The runecraft plugin can now send a notification when rune pouches degrade

Enjoy!

\\- Adam

### New commits

\`\`\`
Adam (12):
      slayer plugin: don't lowercase task names
      slayer plugin: add spiritual creatures, and fix a few other tasks
      slayer plugin: move target highlight building to use events
      Add killcount command
      Add getVarpValue and setVarpValue to RSClientMixin and Client
      runecraft plugin: add positions for config options
      runelite-scripts: check length check in chatbox input
      runelite-client: add immediate event bus
      chat commands: fix kc command in friends chat
      plugin manager: register plugins with immediate event bus
      command manager: post events to immediate eventbus
      widgetid: update barrows interface ids

Forsco (1):
      Add broad arrows to fletching skill calc

Infinitay (2):
      Add "getvarp", "setvarp", "getvarb", "setvarb" dev-tool chat commands
      Add stream progress overlay for Tears of Guthix

Isha Dijcks (1):
      runecraft plugin: add a notification when a runepouch degrades

Jordan Atwood (9):
      clues: Fix SW-of-deserted-keep hot-cold location
      xp drop plugin: Move text to use hidden icon's space
      xp tracker plugin: Reduce visibilities
      xp tracker plugin: Remove WorldClient usages
      agility plugin: Remove unused variables and imports
      agility plugin: Reduce visibility of classes
      agility plugin: Fix course spellings
      agility plugin: Check for endpoints only when defined
      agility plugin: Add pyramid end point

Nathen Sample (1):
      Add prayer bonus for suffering R and RI

Oliver Atkinson (1):
      Fix #4101 - Add swap options for Decant

Tomas Slusny (11):
      Rename prayer tooltip option
      Add prayer bar to prayer plugin
      Add api mappings for oculus orb normal speed
      Set oculus speed to 36 (x3) in DevTools
      Add spec active indicator to spec orb
      Do not explode on illegal unicode chat in settings
      Fix "verxik" typo in ChatCommandsPlugin
      Add more !kc abbreviations
      Check if infobox can render in InfoBoxOverlay
      Add debuff/buff change indicators
      Add support for preserving boost indicators
\`\`\`
`;export{n as default};
