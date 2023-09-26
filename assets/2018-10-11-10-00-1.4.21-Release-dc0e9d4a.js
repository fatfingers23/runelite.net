const e=`---
title: '1.4.21 Release'
description: 'Bank tag tabs, master clue 3-step cryptic solutions, partial grand exchange name searching, and various plugin visual improvements'
author: Jordan
---

## Bank tag tabs

Thanks to the tireless work of [@raiyni](https://github.com/raiyni), and supporting work from
[@deathbeam](https://github.com/deathbeam) and [@Abextm](https://github.com/Abextm), we are proud
to offer a new bank tag experience in bank tag tabs!

![Bank tag tabs: adding and selecting tabs](/img/blog/1.4.21-Release/bank-tag-tabs-intro.gif)

As indicated above, tabs can be created for any number of tags by clicking the "+" button in the
upper-left-hand corner of the bank interface, and selecting these tabs will display items tagged
with that tab's tag. More information regarding its features and functionalities can be found [by
browsing the Bank Tags wiki
page](https://github.com/runelite/runelite/wiki/Bank-Tags#using-tag-tabs).

## Master clue 3-step cryptic solutions

The Clue Scroll plugin now displays solutions for master-level three step cryptic clues, removing
steps from the overlay as they are completed. Thanks to
[@Eadgars-ruse](https://github.com/eadgars-ruse) for submitting
[(and demonstrating in video form)](https://streamable.com/ujaar) this feature!

![Master-level three step cryptic clue solution](/img/blog/1.4.21-Release/master-three-step-cryptic-clue-full.png)
![Partial solution for master-level three step cryptic clue](/img/blog/1.4.21-Release/master-three-step-cryptic-clue-partial.png)

## Grand Exchange partial name searching

The Grand Exchange search panel and ingame \`!price\` command now allow for partial name searching,
yielding better results than before. Thanks to [@Adam-](https://github.com/Adam-) for implementing
this enhancement.

![Grand exchange search results: before and after](/img/blog/1.4.21-Release/grand-exchange-search-before-after.gif)

## Visual improvements

Thanks to [@Adam-](https://github.com/Adam-), [@Monsterxsync](https://github.com/Monsterxsync),
[@psikoi](https://github.com/psikoi), and
[@SebastiaanVanspauwen](https://github.com/SebastiaanVanspauwen) respectively, a number of plugins
have had their visuals updated, which can be seen below:

- The "To:" and "From:" in split private chat can now be recolored
- A toggle has been added to use default skill coloring for XP globe progress arcs
- XP globes' progress bar has been changed into an overlay directly on the globe to save space
- A chatbox background image has been added to the 2005 interface style

![Recolored "To:" and "From:" in split private chat](/img/blog/1.4.21-Release/recolored-split-private-chat-to-from.png)
![XP globes default skill colors](/img/blog/1.4.21-Release/xp-globes-default-skill-color.png)
![Updated XP globes progress overlay](/img/blog/1.4.21-Release/xp-globes-progress-overlay.png)
![2005 interface chat background](/img/blog/1.4.21-Release/2005-chat-background.gif)

The Camera Zoom plugin has been disabled until we can fix it for the update today.

There are also several smaller improvements and bug fixes, including:

- The percentage completion component of the XP tracker is now accurate to two decimal places
- The 2010 interface style has had some tab icon offsets updated to be more accurate to the style
- Cavaliers will now display their buy limit in the grand exchange plugin
- Mouse tooltips should now properly be hidden whenever a RuneScape tooltip is displayed
- Chat notification highlight words now ignore leading and trailing space for highlight terms
- Regen meters should now be more accurate for the beginning and end of a regen cycle
- Overlays snapped above chatbox will now be rendered when text input or chat dialogs are open
- An option has been added to the boosts overlay to display in yellow when below the boost threshold
- Notifications have been added for highlighted ground items
- The Fairy ring plugin now remembers scroll position when re-opening the fairy ring menu
- The Slayer plugin will now update when assigned a task through partner slayer
- The NPC HP overlay has been updated to use a more accurate HP formula
- The Loot tracker no longer tries to add empty slots from Chambers of Xeric or Theatre of Blood
- The newly-added Al Kharid palace shortcuts have been added to the agility obstacle highlighter
- An idle alert should no longer trigger after casting most Lunar spells
- A toggle to send a notification upon the Ulitmate Force powerup spawning in Nightmare Zone has
  been added
- The Kingdom of Miscellania completion state check has been corrected
- Several bank tag editing edge cases have been fixed

Enjoy!

\\- Jordan

### New commits

We had 23 contributors this release!

\`\`\`
Adam (7):
      feed controller: move feed result fetch to spring scheduler
      http service: return item names in price lookup
      http-api: modify ItemPrice to contain id/name instead of Item
      mixins: fix runelite message not being cleared on reused messages nodes
      chat message manager: add support for coloring to/from
      runelite-client: update for search api changes
      ge search: cap max results at 100

Bailey Townsend (1):
      Add buy limit for cavalier hats to GE plugin (#5855)

Eadgars-Ruse (2):
      Fix and improve cryptic clues
      Add solutions for 3 step cryptic master clues

Eric White (1):
      Increase XP tracker accuracy to 2 decimal places (#5845)

GravitySalad (2):
      Add additional search tags for interface styles and pve plugins
      Change plugin search to include the plugin description

Jeremy Plsek (1):
      2010 styles: Fix emotes and music tab offsets (#5884)

Jordan Atwood (1):
      mouse tooltips: Don't add a tooltip if another is present

Kamiel (3):
      Fix chat notification highlight words split regex (#5798)
      Change regen meter stroke end-cap style to CAP_BUTT
      Fix snapped overlays above chatbox not being rendered

Magic fTail (3):
      Add support for making the boost colour yellow if below boost threshold
      Update osrs wiki link
      Stop CoX party size from showing before varb is loaded

Marshall (1):
      Add highlighted ground item notifications (#3647)

Max Weber (7):
      Add thread assertions to Widget
      WidgetInspector: run on client thread
      runelite-client: Make Widget::isHidden only run on client thread
      Add thread assertion to getVar(Varbits)
      runelite-client: Make getVar(Varbits) only run on the client thread
      fairyring: Don't loose scroll position
      timetracking: Show overview completion by tab, not implementation

Monsterxsync (1):
      Add default skill coloring to XP globe arcs

Nathen Sample (4):
      Improve readability of stackformatter tests
      Add support for partner assignment to slayer plugin (#5782)
      Improve attack style plugin encapsulation (#5806)
      Improve BA plugin encapsulation (#5807)

Ron Young (9):
      Add bank-related widget ids, scripts and varbits
      Add script for managing current bank tab
      Add method for getting keys based on prefix from ConfigManager
      Add tag tabs to bank tags plugin
      More accurate NPC hp overlay when max hp is known (#5528)
      widget: expose setchildren (#5309)
      Don't update tags if interface is force closed
      Don't change the active tab if tags are being edited
      Don't assume bank title is the same as search str because it truncate...

Ruben Amendoeira (1):
      XP Globes - Move progress bar display from tooltip to globe (#5856)

Sebastiaan Vanspauwen (1):
      Interface plugin: Added 2005 chatbox

Tomas Slusny (15):
      Fix Raids plugin varbit access not happening on client thread
      Move map clue checking to MenuOptionClicked
      Skip empty spots in Loot Tracker when getting items
      Fix NPE in Miscellania plugin on DC
      Use NpcSpawned/Despawned events for checking clue NPCs
      Move clue inventory/equipment assignment to ItemContainerChanged
      Inverse findClueScroll conditions
      Do not set hint arrows for object clue scroll
      Correctly highlight ObjectClueScroll for single location
      Remove clue scroll timeout
      Add executor service logger that logs exceptions
      Remove unnecessary calls to RunnableExceptionLogger
      Add method for standardizing text input to Text
      Use TAG_SEARCH const instead of hardcoding "tag:" in Bank Tags
      Properly reset search when deleting active tag tab

Tyler Nichols (2):
      Remove unused variable "rank" in HiscorePanel (#5843)
      Do not show quantity value for items with no GE/HA value (#5850)

forsco (4):
      Add new Al-Kharid palace agility shortcuts (#5800)
      Remove idle alerts from Lunar Spells shared animation (#5863)
      Fix spelling of Burthorpe Games Room in Discord Rich Presence (#5886)
      Correct Burthorpe spelling for Discord rich presence

mikek2 (1):
      Add ultimate force notification trigger to NMZ plugin (#5790)

robinwithes (1):
      Fix NPE in Grand Exchange search caused by null entry (#5911)

trimbe (1):
      Kingdom Plugin: fix throne completion state check (#5874)
\`\`\`
`;export{e as default};
