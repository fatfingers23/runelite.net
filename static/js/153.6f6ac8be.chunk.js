(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[153],{747:function(e,n){e.exports={title:"1.8.24 Release",description:"Jagex rules update and party improvements",author:"Adam",body:'<h2>Jagex rules update</h2>\n<p>Jagex have published a new <a href="https://secure.runescape.com/m=news/third-party-clients-update?oldschool=1" native="" rel="nofollow">third party client update</a>,\nand with it a new set of <a href="https://secure.runescape.com/m=news/third-party-client-guidelines?oldschool=1" native="" rel="nofollow">third party client\nguidelines</a>.\nThese new guidelines remove some previous restrictions which allows us to add\nsome new features. We\'ve added these features in this update.</p>\n<h3>Pickpocket swap</h3>\n<p><code>Pickpocket</code> can now be swapped on all NPCs, even with a <code>Talk-to</code> option, by\nshift-right clicking them and selecting <code>Swap Pickpocket</code></p>\n<p><img src="/img/blog/1.8.24-Release/pickpocket.png" alt="pickpocket"></p>\n<h3>Removing dead NPC menus</h3>\n<p>The menu entry swapper now has a setting to remove menus for dead NPCs. This\nprevents clicking on them while they are dieing, as well as casting spells.\nThe entity hider additionally has an option to remove the NPC completely so it\nis no longer rendered.</p>\n<p><video src="/img/blog/1.8.24-Release/deadnpc.mp4" autoPlay=true muted=true loop=true playsInline=true preload="auto">\nYour browser does not support playing HTML5 video.\nYou can <a href="/img/blog/1.8.24-Release/deadnpc.mp4" download>download the file</a> instead.\nHere is a description of the content: deadnpc\n</video></p>\n<h3>Walk here swap</h3>\n<p>It is now possible to swap Walk here for both left click and shift click on NPC\nby shift-right clicking them and selecting the corresponding swap option. There\nis also a global shift click walk here setting in the menu swapper\nconfiguration that affects all NPCs.</p>\n<p><img src="/img/blog/1.8.24-Release/walk.png" alt="walk"></p>\n<h3>Worn item swaps</h3>\n<p>Menus on worn items can now have both their left click and shift click option\nswapped, which can be configured by shift-right clicking the item when wielded.</p>\n<p><img src="/img/blog/1.8.24-Release/wornitems.png" alt="wornitems"></p>\n<h2>Party system improvements</h2>\n<p>As you may have noticed, we recently updated the special attack counter plugin\nto show a &quot;spec drop&quot; overlay on the player when a special attack lands. This\nfeature works with the reworked party system, which allows the spec drops to\nshow on your party members.</p>\n<p>The party system no longer requires Discord integration to send or join invites,\nand instead uses a passphrase system. This is a lot less finicky and works more\nreliably when multiple clients are running.</p>\n<p>Creating a party now gives you a passphrase, such as <code>robe-set-raw-purple</code>,\nwhich you share with your friends. They just need to click <code>Join party</code> and\npaste the passphrase to join.</p>\n<p><img src="/img/blog/1.8.24-Release/createparty.png" alt="createparty"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The inventory and chatbox are now movable by holding alt. As usual they can\nbe reset to their default position via alt-right click. The <code>alt</code> key used to\ndrag overlays around is also configurable within the <code>RuneLite</code> settings.</li>\n<li>Keris partisan defensive style is now correctly hidden by the attack styles\nplugin</li>\n<li>Another bug causing the <code>!pets</code> icons to not show up has been fixed, again.</li>\n<li>Minigame reset timer no longer shows if the setting to enable it is off.</li>\n<li>A bug causing entity hider\'s hide pets option to not work has been fixed.</li>\n<li><code>!lvl cox cm</code> now works correctly</li>\n<li>Ancient brew, mixed potions, and other more obscure things have been added to the item stats plugin</li>\n<li>The stamina timer now works more reliably and also with stamina mixes</li>\n<li>NPC agression timer now has a setting to show for slayer tasks</li>\n<li>The timers plugin now has a timer for Shadow Veil</li>\n<li>Item charges now supports imbued ring of wealth, and braclet of clay</li>\n<li>The mining plugin now shows respawn timers for gold veins</li>\n<li>The bank plugin now has an option to force right click the placeholder toggle button</li>\n<li>The <code>Left click walk on core</code> option of the Corporeal Beast plugin has returned once again</li>\n<li>NPC indicators now has an option to highlight true south-west tile and true\ntile</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<p>We had 19 contributors this update!</p>\n<pre><code>Adam (57):\n      compost tracking: fix tracking fertile soil with ash covered tome\n      overlay: make alt drag hotkey configurable\n      overlay: better handle picking up overlapping overlays\n      menu swapper: removetags object/npc names\n      menu swapper: removetags npc name on reset swap\n      widget overlay: change minimap position back to top_right\n      overlay: add movable and snappable overlay flags\n      overlay: disallow transformPosition with dynamic/tooltip\n      overlay: set g2d clip per layer\n      overlay: worldmap: prefer rect2d as g2d clip shape\n      devtools: allow pgup/down to cycle through previous commands\n      overlay: use hovered overlay for picking managed overlay\n      overlay manager: remove spurious position reset logs\n      gpu: initialize scene uploader scene id with nanotime\n      api: add setForcedPosition widget method\n      widget overlay: use setForcedPosition\n      overlay: prevent moving non-movable overlays\n      prayer: don\'t return dimension for dynamic overlays\n      api: pass menu entry to menu add event and forward accessors\n      events: add tostring/equalsandhashcode to menuoption clicked\n      api: add npc accessor to menuentry\n      api: add player accessor to menuentry\n      attackstyles: add weapon types 28 and 29\n      fix race loading modicons\n      api: add player id accessor\n      party: remove Discord requirement\n      party: use passphrases for party ids\n      party: remove overlay\n      spec counter: add devmode check for spec command\n      gpu: fix debug mode on macos\n      worldmap: add akp and bjp fairy rings\n      chat commands: fix !lvl cox cm\n      api: deprecate if1 usage\n      chat commands: add rifts closed to gotr bossnames\n      chatfilter: fix matching lt/gt\n      Move entity hider logic to plugin\n      hooks: add exception handler for renderable draw listener\n      hooks: raise exception logs to error level\n      account: use http redirect for oauth login response\n      chat channel: use fc max size from container\n      runelite: set jagex.disableBouncyCastle=true\n      cannon: use varp for cannonball count\n      Move party messages from http-api\n      spec counter: add config option for infoboxes\n      party: no longer use account session id\n      party: send join on reconnect\n      entity hider: fix hide pets\n      timers: fix showMinigameTeleports check\n      raids: remove party scout message\n      xpglobes: add time to level to tooltip\n      corp plugin: add dark core attack deprioritization\n      npc overlay: use true tile for south west tile\n      menu swapper: remove Pickpocket block\n      menu swapper: add option to remove dead npc menu options\n      menu swapper: add npc walk here swap\n      entity hider: add option to hide dead npcs\n      menu swapper: add worn item swaps\n\nBen Puryear (1):\n      Add .DS_Store to .gitignore (#14925)\n\nCameron Hetzler (1):\n      loottracker: reverse collapse all tooltips\n\nDavid Luong (1):\n      item identification: Add Desert Treasure diamonds (#14764)\n\nHexagon (1):\n      spec counter: add spec drops\n\nHydrox6 (2):\n      item stats: add support for stat boosts with a cap\n      item stats: add ancient brew\n\nJonathan Forscher (1):\n      item stats: Add some missing beverages (#14412)\n\nJordan Atwood (10):\n      chat commands: Update clear word and clear line defaults\n      item stats: Clean up saradomin brew code\n      item stats: Use variables for reused potion effects\n      item stats: Add mixed potions\n      item stats: Remove combo primaries\n      item stats: Fix jangerberries stats\n      status bars: Override hitpoints and prayer max values in LMS\n      special counter: Fix test\n      hunter: Remove unused lastActionTime field\n      timers: Don\'t clear stamina on death\n\nLlemonDuck (5):\n      chatcommands: consume &quot;clear single word&quot; keypress\n      interfacestyles: 2005-style quest tab headers\n      clientui: setResizable after setVisible\n      slayer: expose slayer task data in service\n      npcaggro: show for current slayer task option\n\nMasonPMGit (2):\n      item charges: add bracelet of clay\n      clues: Allow Daeyalt essence for runecrafting skill challenges\n\nMatthew C (1):\n      skill calculator: Fix herblore typos (#14324)\n\nMax Weber (5):\n      rl-api, groundmarkers: handle instance plane conversion correctly\n      overlay: do not move snap points backwards\n      fairyring: add isle of souls ring\n      ClientLoader: don\'t fail patching to hidden files\n      SessionManager: don\'t fail to login with a existing hidden session file\n\nProjectileRage (1):\n      timers: Add Shadow Veil protection detection (#14687)\n\nStefan Zopfi (1):\n      itemcharges: add imbued ring of wealth\n\nZander Bolgar (1):\n      mining: add gold vein respawn timer\n\nemerald000 (1):\n      item stats: Add missing consumables\n\nsjpfeiffer (1):\n      bank: Add option to force right click on placeholder toggle button\n\nsuperiorser9 (2):\n      timers: Track home and minigame teleports using vars (#14842)\n      timers: Check stamina effect using varbits (#15014)\n\nvmarlowe (1):\n      fishing: Add frog spawn spot NPC (#14659)\n</code></pre>\n',image:"/img/blog/1.8.24-Release/pickpocket.png"}}}]);
//# sourceMappingURL=153.6f6ac8be.chunk.js.map