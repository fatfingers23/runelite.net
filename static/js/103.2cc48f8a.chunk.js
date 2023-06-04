(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[103],{704:function(e,n){e.exports={title:"1.5.31 Release",description:"Challenge clues, splash screen, and loot tracker improvements",author:"Adam",body:'<p>The loot tracker now has collapsible loot boxes, and can also track loot from the Kingdom of Miscellania</p>\n<p><img src="/img/blog/1.5.31-Release/lootcollapse.png" alt="lootcollapse"></p>\n<p>The clue plugin now supports Sherlock challenge clues</p>\n<p><img src="/img/blog/1.5.31-Release/challenge.png" alt="challenge"></p>\n<p>A loading splash screen was added which shows the client load progress when it\nis starting. It also includes better error handling, so if the client fails to\nstart it will show a prompt with the reason and possible resolution steps.</p>\n<p><img src="/img/blog/1.5.31-Release/splash.png" alt="splash"></p>\n<p>A launcher release is planned soon to include a similar themed loading screen,\nand the improved error handling.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Fix wasd camera sometimes blocking messages from being sent</li>\n<li>Updated the XP tracker to try to account for offline xp gain (from eg. mobile)\nand not factor it into XP/hr</li>\n<li>Add the remaining new SotE clue steps</li>\n<li>Update Prifddinas course xp rates</li>\n<li>Add four dose stamina to herblore calculator</li>\n<li>Add Dragon bolts to skill calculator</li>\n<li>Add ferrets to the hunter plugin</li>\n<li>Add arrow fletching to idle notifier</li>\n<li>Add Isafdar tripwire to agility shortcuts</li>\n<li>Add Sarachnis task to the slayer plugin</li>\n<li>Fix items on death plugin values for repairable untradeables</li>\n<li>Add volcanic mine entrance to menu entry swapper</li>\n<li>Fix a bug causing the attack styles plugin to not hide attack styles properly\nfor certain weapon switches</li>\n<li>Fix loot tracker loot loading on startup to place newer loot at the top</li>\n<li>Fix mining plugin respawn timers in the wilderness resource area, and on Miscellania</li>\n<li>Add Trollweiss Mountain Cave agility shortcut</li>\n<li>Fix camera effects from drunkenness and the fishing trawler with the GPU\nplugin</li>\n<li>Fix bug causing bank tag tabs to sometimes not automatically reopen when the\nbank is opened</li>\n<li>Fix clipping of world map tooltips</li>\n<li>Add divine potions to item stats plugin</li>\n</ul>\n<p>We are aware of the client pauses common in the demonic gorilla cavern. Some\noptimization work has gone into this release which should reduce the frequency\nof the pauses. We hope this combined with the upcoming launcher release, which\nincludes a newer version of Java with increased performance characteristics,\nwill solve this issue for most players.</p>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<p>We had 24 contributors this release!</p>\n<pre><code>15987632 (2):\n      hot cold clues: center northern blast mine dig location\n      hot cold clues: center eastern part of piscatoris hunter area dig location\n\nAdam (18):\n      client: cache and reuse Graphics\n      client: cache config values\n      slayer plugin: validate !task name and location\n      slayer plugin: fix task lookup test\n      keyremapping: fix race with sending messages and clearing chat input\n      config service: return status based on whether set/unset were successful\n      config service: add test for parseJsonString\n      config service: validate config values\n      xptracker: update lastXp after submitting xp gains\n      xptracker: move initialization until after login\n      xptracker: support xp gains when offline\n      cml plugin: fix request throttling\n      http-service: use jndi provided mongo\n      http-service: remove inferred destroy method on mongo client bean\n      osbuddy client: update exchange summary location\n      osbuddy client: set UA to RuneLite\n      overlay renderer: reduce graphics properties copying\n      overlay renderer: remove unnecessary color resetting\n\nAlexsuperfly (10):\n      clues: add RUE GO anagram\n      clues: add Lady Trahaearn cryptic\n      clues: add elvish onions cryptic\n      clues: update bow near Lord Iorwerth emote\n      clues: add bow in the Iorwerth camp emote\n      clues: add beckon by crystalline maple trees emote\n      agility: update prif last obstacle exp\n      agility: update prif whole course exp\n      skill calc: update prif course\n      clues: update Falo crystal bow items\n\nBrady (1):\n      skill calc: Add four dose stamina to herblore calculator (#4689)\n\nDaniel (1):\n      Loot Tracker: Allow loot boxes to be collapsed (#9439)\n\nDaniel Bolink (2):\n      achievmentdiary: Update Ardougne Hard diary text (#9551)\n      loot tracker: add Kingdom of Miscellania\n\nDavid (2):\n      skill calc: Add Dragon bolts (#9552)\n      ge: Add item limits for redwood and celastrus seeds/saplings (#9476)\n\nDylan Smith (1):\n      cluescrolls: Add the new General Hining cryptic clue (#9613)\n\nGustavo Rodrigues (1):\n      hunter: Add support for ferrets (#9524)\n\nHydrox6 (8):\n      idle notifier: notify when adding feathers or heads to shafts\n      Move Item Requirement code from EmoteClue to its own sub-package\n      Add support for named AllRequirementsCollections\n      Add support for Challenge Clues\n      clues: remove mis-categorised skill challenge\n      item prices: show alch price while selecting item to alch\n      item prices: show alch price when alching with Explorer\'s Ring interface\n      Add new crystal equipment IDs to the Item Mapping\n\nIan Gibson (1):\n      clue plugin: update Monk camp clue location\n\nJordan Atwood (1):\n      hotcold: Center level 5 wilderness location\n\nKrysa (1):\n      agility shotcuts: add Isafdar tripwire\n\nMax Weber (8):\n      ClanManager: handle startup with an empty cache\n      runelite-api: Annotate script ids with their argument counts\n      runelite-api: allow runScript to take a plain Object...\n      runelite-client: Call scripts with the correct number of arguments\n      runelite-client: Add loading splash screen\n      runelite-client: Make RuneLiteProperties fully static\n      runelite-client: Add fatal error dialog\n      runelite-client: Bypass Jagex load balancer if we can\'t connect\n\nMaxwell Chow (1):\n      discord: Fix spelling errors in Discord status locations (#9615)\n\nNate Brown (1):\n      slayer plugin: add Sarachnis task\n\nRon Young (1):\n      colorpicker: force hex color to update on window close\n\nTheStonedTurtle (2):\n      Fix BrokenOnDeathItems death value by adding repair price\n      menuentryswapper - Add volcanic mine entrance to swapQuick\n\nTomas Slusny (1):\n      Snapshot all grahics2d properties in safeRender\n\nToocanzs (1):\n      fix MSAA white pixels\n\ndekvall (7):\n      Disable inventory grid if the dragged item is removed\n      attack styles: fix NPE in overlay\n      attack styles: fix hide styles on weapon change\n      loottracker: remove timestamp from LootTrackerRecord\n      loottracker: fix order on client reload\n      examine plugin: remove examine value for coins\n      mining plugin: fix respawn timers in misc and resource area\n\ntortuga69 (2):\n      grandexchange: Add Forthos Dungeon item buy limits (#9540)\n      Add support for Trollweiss Mountain Cave agility shortcut (#9543)\n\ntrimbe (6):\n      gpu plugin: fix camera effects used for drunkeness and fishing trawler\n      api: remove devtools annotation and rename setSetting\n      bank tags: use setVarbit instead of setVarbitValue\n      bank tags: properly open saved tab\n      hot cold: center \'west of farming guild\' location\n      world map: correct canvas bounds location and clip tooltips properly\n\nxdesr (1):\n      item stats: add divine potions\n</code></pre>\n',image:"/img/blog/1.5.31-Release/lootcollapse.png"}}}]);
//# sourceMappingURL=103.2cc48f8a.chunk.js.map