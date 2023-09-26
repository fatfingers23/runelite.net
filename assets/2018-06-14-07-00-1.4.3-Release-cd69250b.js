const n=`---
title: '1.4.3 Release'
description: 'Blast mine plugin, chat highlights and notifications, and resizable infoboxes'
author: Adam
---

A blast mine plugin was added which keeps track of lit dynamite charges, as well
as which stage the rock is in.

![blastmine](/img/blog/1.4.3-Release/blastmine.png)

A chat notifications plugin was added which can underscore your name when spoken
in public chat, as well as optionally send you notifications for trade, duel,
and other chat messages.

![chatnotif](/img/blog/1.4.3-Release/chatnotif.png)

![chatnotif2](/img/blog/1.4.3-Release/chatnotif2.png)

A Crystal Math Labs plugin was added which, when enabled, automatically updates
your stats on CML whenever you log out.

There are also several smaller improvements and bug fixes, including:

- ctrl+w and backspace can now be used to delete the last word and the entire
  line from the chatbox input, respectively
- Add public chat friend name color in chat color config
- The boosts plugin can now notify you when your boost gets low
- Add Isafdar and Jatizso fishing spots to fishing plugin
- Remove 'Actions left' and 'Xp per hour' from Xp Globes when Xp Tracker is disabled
- Add fungicide spray to item stats plugin
- The ground items plugin can now grey hidden items from the take menu

Enjoy!

\\- Adam

### New commits

We had 15 contributors this release!

\`\`\`
Adam (13):
      xtea plugin: batch xteas on gamestate change event
      Remove map region changed event
      Add gson to dependency management
      Update gson to 2.8.5
      http-service: import spring boot dependencies in dependency management
      travis: remove old secrets
      travis: remove old discord notification [ci skip]
      Add public chat friend name color in chat color config
      Fix genie cryptic clue to display proper requirements
      overlay renderer: bound overlays position to viewport at render time instead of at config load time
      runelite-api: add setVar for setting varclientstr
      item controller: expose bulk item prices
      chat commands: alow clearing words and chat with ctrl w/backspace

Arman (1):
      Adds notification when boost gets low

Chris Jimenez (1):
      Small contributing.md clarification

Hydrox6 (7):
      Fix "Clan Channel Name" typo, fix capitalisation (#3671)
      Make Color config options show their colour instead of "Pick a color" (#3583)
      [chat-color] Add support for Public Chat from Mods
      Clean up the Examine Colour loading
      Fix JColorChooser text not updating properly
      Fix NMZ points overlay appearing in the KBD instance lair
      runelite-client: add chat notifications plugin

Jordan Atwood (1):
      Add Jatizso fishing spots to fishing plugin

Marshall Briggs (1):
      Remove 'Actions left' and 'Xp per hour' from Xp Globes when Xp Tracker is disabled

Max Weber (6):
      runelite-api: Correct actor documentation
      runelite-client: Don't fail on invalid config values.
      runelite-client: add detached camera devtool
      runelite-client: Make OverlayManager thread safe
      runelite-client: Use an ArrayList to store overlays
      runelite-client: Allow new screenmarkers to be created

Mitchell Kovacs (4):
      Reworked Jewellery Charge to item charge.
      item charges: add charge warning threshold color configuration
      Moved the watering can overlay from tithe farming plugin to item charge plugin.
      Add counter for fungicide spray #3727

SieBrum (1):
      Add CrystalMathLabs plugin

Tim Granata (1):
      Add Isafdar dense forest agility boxes north of Tyras Camp (#3731)

Timmy-Jim (2):
      Move BAKED_POTATO to 4 HP healing food (#3724)
      Add Isafdar fishing spots

Tomas Slusny (14):
      Remove auto-expanding from PanelComponent
      Show GE and HA only when showing both prices
      Add mappings for isTradeable to ItemComposition
      Add option to always draw untradeable items
      Remove 4th invalid state from ground boxes
      Add full item name clickboxes
      Add highlight > value, merge hide < ge and ha
      Split OverlayRenderer logic to OverlayManager
      Make plugins work with new OverlayManager
      Add support for wrapping to PanelComponent
      Add support for preferred location to Panel
      Change InfoBoxOverlay to use PanelComponent
      Change the default size of infoboxes to be smaller
      Add support for configurable infobox size

Unmoon (1):
      Add blast mine plugin

WooxSolo (1):
      Fix demonic gorilla overlay position on fixed screen

drivfe (1):
      Fix combined action slot not updating when an input field was changed
\`\`\`
`;export{n as default};
