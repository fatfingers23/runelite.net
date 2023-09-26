const n=`---
title: '1.5.20 Release'
description: 'Clue updates and world map transportation tooltips'
author: Adam
---

This release adds many of the new clues released last week, with only beginner
hot/cold and beginner map clues not done yet. Thanks to everyone working to get
those added.

The hiscore plugin was updated for beginner clues:

![hiscore](/img/blog/1.5.20-Release/hiscore.png)

The world map plugin now adds tooltips to all transportation icons so you can
tell what kind of transportation method it is:

![transport](/img/blog/1.5.20-Release/transport.png)

There are also several smaller improvements and bug fixes, including:

- Add all new anagram, cipher, coordinate, cryptic, and emote clues
- Add support for music clues, and highlighting the correct track to play
- Add new wilderness hot cold spot in the Graveyard of Shadows
- Fix the hiscore plugin looking up clues and LMS rank
- Add beginner clues to the !clues chat command
- Add beginner clues to the loot tracker
- Fix status bars plugin sometimes not correctly showing the poison background
  color
- Fix NPC aggro plugin not showing the instructions after being toggled on

An issue was fixed which prevented configuration from syncing across devices for
users with newly created RuneLite accounts (in the last 3-4 weeks). A side effect of
fixing this caused the client to wipe its configuration for these users over the
last week. Sorry about that.

Enjoy!

\\- Adam

### New commits

We had 11 contributors this release!

\`\`\`
Adam (16):
      Revert "pom: add reproducable build plugin"
      pom: add reproducable build plugin
      http api: update for beginner clues
      chat commands: add beginner clues
      hiscore plugin: add beginner clues
      config service: remove writing to sql
      clue plugin: move widget highlights to plugin
      clue plugin: add music clues
      clue plugin: add beginner anagram clues
      clue plugin: add beginner cryptic clues
      clue plugin: add beginner emote clues
      mixins: set thread name on client thread
      clue plugin: fix text matching anagrams
      clue plugin: fix emote clue overlay with no item requirements
      config service: fix not upserting documents when setting config keys
      devtools: add setstat command

Daniel Robaina (1):
      clue plugin: add easy cryptic clues

Hydrox6 (1):
      loottracker: add support for beginner clues

Jordan Atwood (3):
      clue plugin: Add new cipher clues
      clue plugin: Add new cryptic clues
      clue plugin: Add new coordinate clue descriptions

ScapeRune (3):
      Fix item mapping of Saradomin's Blessed Sword and Saradomin's Tear (#8453)
      clue scroll plugin: add new medium and master anagrams
      npc aggro timer: fix instructions not showing up when plugin is turned on

TheStonedTurtle (2):
      LootTracker: Change rigid area to compound border
      Fix status bar poison background color

Tomas Slusny (2):
      Fix access control in clue scroll plugin
      Properly use Lombok in MusicClue class

Whitehooder (1):
      clue plugin: add lvl 27 wilderness hot-cold clue location

Yuuki-chan (1):
      Fix grammar in Skybox plugin description (#8496)

bjornenalfa (1):
      Remove duplicate coordinate clue

ksergio39 (1):
      world map plugin: add tooltips for transportation icon
\`\`\`
`;export{n as default};
