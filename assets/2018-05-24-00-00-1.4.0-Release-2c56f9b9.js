const e=`---
title: '1.4.0 Release'
description: 'Obsidian theme, 05/10 interface styles, and screen markers'
author: Adam
---

The new Obsidian theme has been released, which re-skins the client UI and most
of the plugin panel intefaces. Thanks to [@psikoi](https://github.com/psikoi)
who has been working on this for the last month.

![obsidian1](/img/blog/1.4.0-Release/obsidian1.png)

![obsidian2](/img/blog/1.4.0-Release/obsidian2.png)

![obsidian3](/img/blog/1.4.0-Release/obsidian3.png)

![obsidian4](/img/blog/1.4.0-Release/obsidian4.png)

An interface style plugin was added to allow switching the 2005 or 2010 game
frames.

![2005](/img/blog/1.4.0-Release/2005.png)

![2010](/img/blog/1.4.0-Release/2010.png)

A screenmarker plugin was added to mark areas on the screen.

![screenmarker](/img/blog/1.4.0-Release/marker.png)

Support for level goals has been added, that loads the XP/level goals from the
Vanilla goals interface and displays it in XP tracker.

![goals](/img/blog/1.4.0-Release/goals.png)

The world map plugin now shows all teleport locations, and detailed requirements
for all agility obstacles.

![tele](/img/blog/1.4.0-Release/tele.png)

![shortcut](/img/blog/1.4.0-Release/shortcut.png)

There are also several smaller improvements and bug fixes, including:

- Fix agility plugin to not show obstacles in Vespula's raid room
- Fix impling plugin incorrectly showing imps after a world hop (1.3.9.1)
- Add Corsair Cove fishing spots to fishing plugin
- Add Gu'Tanoth bridge obstacles to agility plugin
- Improve performance of stretched fixed mode by utilizing volatile images
- Check inventory for required emote clue items too
- Add gem rocks to mining calculator
- Fix plugin toolbar tooltips
- Fix low detail mode sometimes causing game sounds to not load
- Change the anti-drag plugin to only work with shift held
- Fix slayer bracelet charges not updating when there is only one charge left
- Add commas to ground item quantities
- Add Burgh de Rott fishing spots to fishing plugin
- Fix bounds for west bookcases in the Kourend Library (1.3.9.1)
- Add teak garden bench to construction calculator
- A notification and timer were added to the agility plugin for the agility
  arena
- XP boosts for bones have been corrected in the skill calculator
- Farming, fishing, herblore, and hunter have been expanded on in the skill
  calculator

Additionally there were clue fixes from user35557, Jouni Pikkarainen, and Jordan
Atwood.

Enjoy!

\\- Adam

### New commits

We had 26 contributors this release!

\`\`\`
Abex (1):
      interfacestyles: Run on game thread (#3129)

Adam (21):
      Update substance to 8.0.02
      Bump to 1.4.0-SNAPSHOT
      runescape-api: add sprite related imports for interface style plugin
      runelite-api: add sprite override api
      runelite-api: add widget positioned event
      Add interface styles plugin
      runelite-client: fix usage of npc despawn event
      agility plugin: limit obstacles to agility pyramid regions
      modelviewer: begin work on tile shapes
      Revert "Delay setting of low detail mode"
      low detail plugin: apply low detail on startup if on login screen
      runelite-mixins: fix hasHintArrow
      runelite-api: expand hint arrow api
      Revert "Fix early stop of player lookup in HiScores (#3035)"
      hiscore panel: wrap lookup in a runnable exception logger
      hiscore panel: clear tooltips when clearing levels
      hiscore panel: pass result to detailsHtml and remove reduncant null check
      hiscore panel: remove duplicate getExperience
      runelite-client: add detached overlay position
      runelite-client: add screen markers plugin
      screen marker panel: fix toggling hide/show

Alex Kolpa (5):
      Clear plugin skill tracking on reset
      Add agility arena notifier
      Add agility arena timer
      Don't show experience progress for unranked skills
      Change AgilityArenaTimer contact to GitHub account (#3121)

Joel (1):
      Add missing Corsair Cove fishing spots (#3096)

Jordan Atwood (2):
      Add puzzle box indicator to Drunken Dwarf clue
      Add Gu'Tanoth bridge obstacles

Jouni Pikkarainen (1):
      Fixed typo in a cryptic clue solution

Levi Schuck (2):
      Fix til next level time for low xp amounts
      Switch to safer division method without floats Use custom formatter since LocalTime.toString rolls over the amount of days.

Lotto (5):
      entityhider: don't hide npcs by default
      client: use Image instead of BufferedImage
      stretchedfixedmode: use volatile image instead of buffered image
      emoteclues: change symbols to ✓ and ✗
      emoteclues: display when item is in inventory

Magic fTail (2):
      Fix edgeville monastery emote clue scroll (#2909)
      Add missing Port Sarim and Ape Toll fishing spots (#2837)

Max Weber (5):
      Cleanup FarmingTracker panels
      Add VarC events
      Allow get/setVarbitValue to operate on arbitrary varp sets
      devtools: Replace Var tracker with Var Inspector
      varinspector: Lazily initialize var arrays

Morgan Lewis (4):
      WorldMap: Add teleport destinations for spells and jewellery
      WorldMapPointManager: Fix concurrent modification exception
      WorldMap: Add agility shortcut level requirements
      WorldMap: Fix jewellery item name loading bugs

Rheon-D (1):
      Fix friend note not displaying due to color tags

Ruben (3):
      Restore Plugin Toolbar Button Tooltips (#2833)
      Add Gem rocks to mining calculator plugin (#2907)
      Add mouse hover changes to various ui elements

Ruben Amendoeira (22):
      Restyled the client frame
      Added custom components + moved/rewrote some
      Grand Exchange Plugin redesign
      Hiscore Plugin redesign
      Kourend Library Plugin slight design tweak
      News Feed Plugin slight design tweak
      Notes Plugin slight design tweak
      Configs slight design tweak
      Exp trackers plugin redesign
      Info panel redesign
      Farming plugin panel redesign
      Plugin side toolbar design tweak
      Skilling Calculators Plugin design tweak
      SetOpaque performance fix
      Fix Config search bar focus
      Moved the new text selection colors globally
      Removed unused styling on JComboBox
      Fixed exp tracker pop-up in the progress bar
      Recolour config names to white
      Expanded SkillIconManager to include smaller versions
      Added/Changed custom UI components
      Skill Calc plugin redesign

Seth (1):
      impling plugin: fix impling list not clearing on hopping worlds

SoyChai (1):
      Friend notes plugin: Add documentation and increase code readability (#2714)

Tomas Slusny (7):
      Delay setting of low detail mode
      Change Anti-Drag plugin to work only with SHIFT
      Fix access levels in XpStateSingle
      Add Varps for player experience goals
      Add support for player experience goals to tracker
      Add support for preferredSize to OverlayRenderer
      Change ScreenMarkers to use OverlayRenderer

Unknown (1):
      Change string to match for slayer bracelet

William Metcalf (1):
      Add commas to ground item quantities

WooxSolo (1):
      Add RSTileMixin.getGroundItems and RSNPCMixin.getTransformedComposition

Xavier Bergeron (1):
      Fix early stop of player lookup in HiScores (#3035)

raqes (1):
      Fix 2005 interface container alignment, add scrollbar and spellbooks

shmeeps (1):
      Add Burgh de Rott fishing spots to fishing overlays (#3132)

trimbe (1):
      Fix bounds for west bookcases in Kourend library (#2875)

user35557 (1):
      Clue Scrolls: fix dark warrior fortress clue coordinates (#3083)

wa1id (1):
      Add teak garden bench to construction calculator.
\`\`\`
`;export{e as default};
