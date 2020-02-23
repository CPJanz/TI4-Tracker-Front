const tiObject = {
  tech: [
    {
      id: 0,
      name: "Neural Motivator",
      text: "During the status phase, draw 2 action cards instead of 1",
      requires: "N",
      faction: -1,
      type: 0,
      iconname: "Biotic.png"
    },
    {
      id: 1,
      name: "Daxive Animators",
      text:
        "After you win a ground combat, you may place 1 infantry from your reinforcements on that planet",
      requires: "G",
      faction: -1,
      type: 0,
      iconname: "Biotic.png"
    },
    {
      id: 2,
      name: "Hyper Metabolism",
      text: "During the status phase, gain 3 command tokens instead of 2",
      requires: "GG",
      faction: -1,
      type: 0,
      iconname: "Biotic.png"
    },
    {
      id: 3,
      name: "X-89 Bacterial Weapon",
      text:
        "ACTION: Exhaust this card and choose 1 planet in a system that contains 1 or more of your ships that have BOMBARDMENT; destroy all infantry on that planet",
      requires: "GGG",
      faction: -1,
      type: 0,
      iconname: "Biotic.png"
    },
    {
      id: 4,
      name: "Bioplasmosis",
      text:
        "At the end of the status phase, you may remove any number of infantry from planets you control and place them on 1 or more planets you control in the same or adjacent systems.",
      requires: "GG",
      faction: 0,
      type: 0,
      iconname: "Biotic.png"
    },
    {
      id: 5,
      name: "Production Biomes",
      text:
        "ACTION: Exhaust this card and spend 1 token from your strategy pool to gain 4 trade goods and choose 1 other player; that player gains 2 trade goods.",
      requires: "GG",
      faction: 4,
      type: 0,
      iconname: "Biotic.png"
    },
    {
      id: 6,
      name: "Neuroglaive",
      text:
        "After another player activates a system that contains 1 or more of your ships, that player removes 1 token from his fleet pool and returns it to his reinforcements.",
      requires: "GGG",
      faction: 9,
      type: 0,
      iconname: "Biotic.png"
    },
    {
      id: 7,
      name: "Instinct Training",
      text:
        "You may exhaust this card and spend 1 token from your strategy pool when another player plays an action card; cancel that action card.",
      requires: "G",
      faction: 14,
      type: 0,
      iconname: "Biotic.png"
    },
    {
      id: 8,
      name: "Yin Spinner",
      text:
        "After 1 or more of your units use Production, place 1 infantry from your reinforcements on a planet you control in that system.",
      requires: "GG",
      faction: 15,
      type: 0,
      iconname: "Biotic.png"
    },
    {
      id: 9,
      name: "Transparasteel Plating",
      text:
        "During your turn of the action phase, players that have passed cannot play action cards.",
      requires: "G",
      faction: 16,
      type: 0,
      iconname: "Biotic.png"
    },
    {
      id: 10,
      name: "Mageon Implants",
      text:
        "ACTION: Exhaust this card to look at another player's hand of action cards.  Choose 1 of those cards and add it to your hand.",
      requires: "GGG",
      faction: 16,
      type: 0,
      iconname: "Biotic.png"
    },
    {
      id: 11,
      name: "Antimass Deflectors",
      text:
        "Your ships can move into and through asteroid fields. ||| When other players' units use SPACE CANNON against your units, apply -1 to the result of each die roll.",
      requires: "N",
      faction: -1,
      type: 1,
      iconname: "Propulsion.png"
    },
    {
      id: 12,
      name: "Gravity Drive",
      text:
        "After you activate a system, apply +1 to the move value of 1 of your ships during this tactical action",
      requires: "B",
      faction: -1,
      type: 1,
      iconname: "Propulsion.png"
    },
    {
      id: 13,
      name: "Fleet Logistics",
      text:
        "During each of your turns of the action phase, you may perform 2 actions instead of 1",
      requires: "BB",
      faction: -1,
      type: 1,
      iconname: "Propulsion.png"
    },
    {
      id: 14,
      name: "Light/Wave Deflector",
      text:
        "Your ships can move through systems that contain other player’s ships",
      requires: "BBB",
      faction: -1,
      type: 1,
      iconname: "Propulsion.png"
    },
    {
      id: 15,
      name: "Chaos Mapping",
      text:
        "Other players cannot activate asteroid fields that contain 1 or more of your ships. ||| At the start of your turn during the action phase, you may produce 1 unit in a system that contains at least 1 of your units that has Production.",
      requires: "B",
      faction: 2,
      type: 1,
      iconname: "Propulsion.png"
    },
    {
      id: 16,
      name: "Wormhole Generator",
      text:
        "At the start of the status phase, place or move a Creuss wormhole token into either a system that contains a planet you control or a non-home system that does not contain another player's ships.",
      requires: "BB",
      faction: 6,
      type: 1,
      iconname: "Propulsion.png"
    },
    {
      id: 17,
      name: "Spacial Conduit Cylinder",
      text:
        "You may exhaust this card after you activate a system that contains 1 or more of your units; that system is adjacent to all other systems that contain 1 or more of your units during this activation.",
      requires: "BB",
      faction: 12,
      type: 1,
      iconname: "Propulsion.png"
    },
    {
      id: 18,
      name: "Lazax Gate Folding",
      text:
        "During your tactical actions, if you do not control Mecatol Rex, treat its systems as if it has both an α and β wormhole. [Exhaust] ACTION: If you control Mecatol Rex, place 1 infantry from reinforcements on it.",
      requires: "BB",
      faction: 13,
      type: 1,
      iconname: "Propulsion.png"
    },
    {
      id: 19,
      name: "Sarween Tools",
      text:
        "When 1 or more of your units use Production, reduce the combined cost of the produced units by 1",
      requires: "N",
      faction: -1,
      type: 2,
      iconname: "Cybernetic.png"
    },
    {
      id: 20,
      name: "Graviton Laser System",
      text:
        "You may exhaust this card before 1 or more of your units uses Space Cannon; hits produced by those units must be assigned to non-fighter ships if able",
      requires: "Y",
      faction: -1,
      type: 2,
      iconname: "Cybernetic.png"
    },
    {
      id: 21,
      name: "Transit Diodes",
      text:
        "You may exhaust this card at the start of your turn during the action phase; remove up to 4 of your ground forces from the game board and place them on 1 or more planets you control.",
      requires: "YY",
      faction: -1,
      type: 2,
      iconname: "Cybernetic.png"
    },
    {
      id: 22,
      name: "Integrated Economy",
      text:
        "After you gain control of a planet, you may produce any number of units on that planet that have a combined cost equal to or less than that planet’s resource value.",
      requires: "YYY",
      faction: -1,
      type: 2,
      iconname: "Cybernetic.png"
    },
    {
      id: 23,
      name: "L4 Disruptors",
      text:
        "During an invasion, units cannot use Space Cannon against your units.",
      requires: "Y",
      faction: 1,
      type: 2,
      iconname: "Cybernetic.png"
    },
    {
      id: 24,
      name: "Quantum Datahub Node",
      text:
        "At the end of the strategy phase, you may spend 1 token from your strategy pool and give another player 3 of your trade goods.  If you do, give 1 of your strategy cards to that player and take 1 of his strategy cards.",
      requires: "YYY",
      faction: 4,
      type: 2,
      iconname: "Cybernetic.png"
    },
    {
      id: 25,
      name: "Inheritance Systems",
      text:
        "You may exhaust this card and spend 2 resources when you research a technology; ignore all of that technology's prerequisites.",
      requires: "YY",
      faction: 7,
      type: 2,
      iconname: "Cybernetic.png"
    },
    {
      id: 26,
      name: "Salvage Operations",
      text:
        "After you win or lose a space combat, gain 1 trade good; if you won the combat, you may also produce 1 ship in that system of any ship type that was destroyed during the combat.",
      requires: "YY",
      faction: 8,
      type: 2,
      iconname: "Cybernetic.png"
    },
    {
      id: 27,
      name: "Mirror Computing",
      text:
        "When you spend trade goods, each trade good is worth 2 resources or influence instead of 1.",
      requires: "YYY",
      faction: 8,
      type: 2,
      iconname: "Cybernetic.png"
    },
    {
      id: 28,
      name: "E-Res Siphons",
      text:
        "After another player activates a system that contains 1 or more of your ships, gain 4 trade goods.",
      requires: "YY",
      faction: 12,
      type: 2,
      iconname: "Cybernetic.png"
    },
    {
      id: 29,
      name: "Hegemonic Trade Policy",
      text:
        "Exhaust this card when 1 or more of your units use PRODUCTION; swap the resource and influence values of 1 planet you control until the end of your turn.",
      requires: "YY",
      faction: 13,
      type: 2,
      iconname: "Cybernetic.png"
    },
    {
      id: 30,
      name: "Impulse Core",
      text:
        "At the start of a space combat, you may destroy 1 of your cruisers or destroyers in the active system to produce 1 hit against your opponent's ships; that hit must be assigned by your opponent to 1 of his non-fighters ships if able.",
      requires: "YY",
      faction: 15,
      type: 2,
      iconname: "Cybernetic.png"
    },
    {
      id: 31,
      name: "Plasma Scoring",
      text:
        "When 1 or more of your units use Bombardment or Space Cannon, 1 of those rolls may roll 1 additional die",
      requires: "N",
      faction: -1,
      type: 3,
      iconname: "Warfare.png"
    },
    {
      id: 32,
      name: "Magen Defense Grid",
      text:
        "You may exhaust this card at the start of a round of ground combat on a planet that contains 1 or more of your units that have Planetary Shield; your opponent cannot make combat rolls this combat round.",
      requires: "R",
      faction: -1,
      type: 3,
      iconname: "Warfare.png"
    },
    {
      id: 33,
      name: "Duranium Armor",
      text:
        "During each combat round, after you assign hits to your units, repair 1 of your damaged units that did not use Sustain Damage during this combat round",
      requires: "RR",
      faction: -1,
      type: 3,
      iconname: "Warfare.png"
    },
    {
      id: 34,
      name: "Assault Cannon",
      text:
        "At the start of a space combat in a system that contains 3 or more of your non-fighter ships, your opponent must destroy 1 of his non-fighter ships",
      requires: "RRR",
      faction: -1,
      type: 3,
      iconname: "Warfare.png"
    },
    {
      id: 35,
      name: "Non-Euclidean Shielding",
      text:
        "When 1 of your units uses Sustain Damage, cancel 2 hits instead of 1.",
      requires: "RR",
      faction: 1,
      type: 3,
      iconname: "Warfare.png"
    },
    {
      id: 36,
      name: "Magmus Reactor",
      text:
        "Your ships can move into supernovas. ||| After 1 or more of your units use Production in a system that either contains a war sun or is adjacent to a supernova, gain 1 trade good.",
      requires: "RR",
      faction: 3,
      type: 3,
      iconname: "Warfare.png"
    },
    {
      id: 37,
      name: "Dimensional Splicer",
      text:
        "At the start of space combat in a system that contains a wormhole and 1 or more of your ships, you may produce 1 hit and assign it to 1 of your opponent's ships.",
      requires: "R",
      faction: 6,
      type: 3,
      iconname: "Warfare.png"
    },
    {
      id: 38,
      name: "Valkyrie Particle Wave",
      text:
        "After making combat rolls during a round of ground combat, if your opponent produced 1 or more hits, you produce 1 additional hit.",
      requires: "RR",
      faction: 11,
      type: 3,
      iconname: "Warfare.png"
    },
    {
      id: 39,
      name: "Carrier II",
      text:
        "The Carrier II is faster and and has a larger capacity than the carrier.",
      requires: "BB",
      faction: -1,
      type: 4,
      unitid: 0
    },
    {
      id: 40,
      name: "Advanced Carrier II",
      text:
        "Advanced Carrier IIs are faster and have a larger capacity than Advanced Carriers.",
      requires: "BB",
      faction: 5,
      type: 4,
      unitid: 1
    },
    {
      id: 41,
      name: "Cruiser II",
      text:
        "The Cruiser II is faster and stronger than the cruiser, and gains capacity.",
      requires: "GYR",
      faction: -1,
      type: 4,
      unitid: 2
    },
    {
      id: 42,
      name: "Destroyer II",
      text:
        "The Destroyer II is stronger in general combat and has an improved anti-fighter barrage.",
      requires: "RR",
      faction: -1,
      type: 4,
      unitid: 3
    },
    {
      id: 43,
      name: "Dreadnought II",
      text:
        'The Dreadnought II is faster than the dreadnought, and cannot be the subject of "Direct Hit" cards.',
      requires: "BBY",
      faction: -1,
      type: 4,
      unitid: 4
    },
    {
      id: 44,
      name: "Super-Dreadnought II",
      text: "Super-Dreadnought IIs are stronger than Super-Dreadnoughts.",
      requires: "BBY",
      faction: 7,
      type: 4,
      unitid: 5
    },
    {
      id: 45,
      name: "Exotrireme II",
      text:
        "Exotrireme IIs are faster than Exotriremes and can destroy themselves to destroy other ships.",
      requires: "BBY",
      faction: 11,
      type: 4,
      unitid: 6
    },
    {
      id: 46,
      name: "Fighter II",
      text:
        "Fighter IIs can move on their own, but if they do not count against another unit's capacity they count against your fleet limit.",
      requires: "GB",
      faction: -1,
      type: 4,
      unitid: 7
    },
    {
      id: 47,
      name: "Hybrid Crystal Fighter II",
      text:
        "Hybrid Crystal Fighter IIs are stronger than Hybrid Crystal Fighters. Hybrid Crystal Fighter IIs can move on their own, but if they do not count against another unit's capacity they each count as 1/2 of a ship against your fleet limit.",
      requires: "GB",
      faction: 9,
      type: 4,
      unitid: 8
    },
    {
      id: 48,
      name: "Infantry II",
      text:
        "After this unit is destroyed in combat roll 1 die. On a result of 6 or greater place this unit on a planet you control in your home system at the start of your next turn.",
      requires: "GG",
      faction: -1,
      type: 4,
      unitid: 9
    },
    {
      id: 49,
      name: "Spec Ops II",
      text:
        "Spec Ops II are stronger than Spec Ops and have a higher chance of surviving defeat than base Infantry II.",
      requires: "GG",
      faction: 5,
      type: 4,
      unitid: 10
    },
    {
      id: 50,
      name: "Letani Warrior II",
      text:
        "Letani Warrior IIs are stronger than Letani Warriors, and have a higher production value.",
      requires: "GG",
      faction: 0,
      type: 4,
      unitid: 11
    },
    {
      id: 51,
      name: "PDS II",
      text: "PDS IIs can fire their space cannons into adjacent systems.",
      requires: "RY",
      faction: -1,
      type: 4,
      unitid: 12
    },
    {
      id: 52,
      name: "Space Dock II",
      text: "Space Dock IIs have a higher production value than space dock",
      requires: "YY",
      faction: -1,
      type: 4,
      unitid: 13
    },
    {
      id: 53,
      name: "Floating Factory II",
      text:
        "The Floating Factory II is faster than the Floating Factory and has a higher capacity and production value.",
      requires: "YY",
      faction: 2,
      type: 4,
      unitid: 14
    },
    {
      id: 54,
      name: "War Sun",
      text: "War Suns are the most powerful unit in the game.",
      requires: "YRRR",
      faction: -1,
      type: 4,
      unitid: 15
    },
    {
      id: 55,
      name: "Prototype War Sun II",
      text:
        "Prototype War Sun II are as powerful as regular war suns but faster and cheaper.",
      requires: "YRRR",
      faction: 3,
      type: 4,
      unitid: 16
    },
    {
      id: 56,
      name: "Valefar Assimilator X",
      text:
        'When you would gain another players technology using 1 of your faction ability, you may place the "X" assimilator token on a faction technology owned by that player instead.  While that token is on a technology, this card gains that technology\'s text.  You cannot place an assimilator token on technology that already has an assimilator token.',
      requires: "N",
      faction: 10,
      type: 5
    },
    {
      id: 57,
      name: "Valefar Assimilator Y",
      text:
        'When you would gain another players technology using 1 of your faction ability, you may place the "Y" assimilator token on a faction technology owned by that player instead.  While that token is on a technology, this card gains that technology\'s text.  You cannot place an assimilator token on technology that already has an assimilator token.',
      requires: "N",
      faction: 10,
      type: 5
    },
    {
      id: 58,
      name: "Nullification Field",
      text:
        "After another player activates a system that contains 1 or more of your ships, you may exhaust this card and spend 1 token from your strategy pool; immediately end that player's turn.",
      requires: "YY",
      faction: 14,
      type: 2,
      iconname: "Cybernetic.png"
    },
    {
      id: 59,
      name: "The Winnu",
      text: "Choose and 1 technology that has no prerequisites.",
      requires: "N",
      faction: 13,
      type: 5
    }
  ],
  factions: [
    {
      id: 0,
      name: "The Arborec",
      factionabilities:
        "Mitosis: Your space docks cannot produce infantry.  At the start of the status phase , place 1 infantry from your reinforcements on any planet you control.",
      promissorynote:
        "Stymie:|||ACTION: Place this card face up in your play area.|||While this card is in your play area, the Arborec player cannot produce units in or adjacent to non-home systems that contain 1 or more of your units.|||If you activate a system that contains 1 or more of the Arborec player's units, return this card to the Arborec player.",
      startingtech: 32,
      flagship: 0,
      factionunits: 11,
      factiontech: "4,50",
      commodities: 3,
      iconname: "Arborec.png"
    },
    {
      id: 1,
      name: "The Barony of Letnev",
      factionabilities:
        "Munitions Reserves: At the start of each round of space combat, you may spend 2 trade goods;  you may re-roll any number of your dice during that combat round.|||Armada: The maximum number of non-fighter ships you can have in each system is equal to 2 more than the number of tokens in your fleet pool.",
      promissorynote:
        "War Funding:|||At the start of a round of space combat:|||The Letnev player loses 2 trade goods.|||During this combat round, re-roll any number of your dice.|||Then, return this card to the Letnev player.",
      startingtech: "11,31",
      flagship: 1,
      factionunits: -1,
      factiontech: "23,35",
      commodities: 2,
      iconname: "Letnev.png"
    },
    {
      id: 2,
      name: "The Clan of Saar",
      factionabilities:
        "Scavenge: After you gain control of a planet, gain 1 trade good.|||Nomadic: You can score objectives even if you do not control the planets in your home system.",
      promissorynote:
        "Ragh's Call:|||After you commit 1 or more units to land on a planet:|||Remove all of the Saar player's ground forces from that planet and place them on a planet controlled by the Saar player.|||Then return this card to the Saar player.",
      startingtech: 11,
      flagship: 2,
      factionunits: 14,
      factiontech: "15,53",
      commodities: 3,
      iconname: "Saar.png"
    },
    {
      id: 3,
      name: "The Embers of Muaat",
      factionabilities:
        "Star Forge: ACTION: Spend 1 token from your strategy pool to place either 2 fighters or 1 destroyer from your reinforcements in a system that contains 1 or more of your war suns.|||Gashlai Physiology: Your ships can move through supernovas.",
      promissorynote:
        "Fires of the Gashlai:|||ACTION: Remove 1 token from the Muaat player's fleet pool and return it to his reinforcements. Then, gain your war sun unit upgrade technology card.|||Then, return this card to the Muaat player.",
      startingtech: 31,
      flagship: 3,
      factionunits: 16,
      factiontech: "36,55",
      commodities: 4,
      iconname: "Muaat.png"
    },
    {
      id: 4,
      name: "The Emirates of Hacan",
      factionabilities:
        'Masters of Trade: You do not have to spend a command token to resolve the secondary ability of the "Trade" strategy card.|||Guild Ships: You can negotiate transactions with players who are not your neighbor.|||Arbiters: When you are negotiating a transaction, action cards can be exchanged as part of that transaction.',
      promissorynote:
        "Trade Convoys:|||ACTION: Place this card face-up in your play area.|||While this card is in your play area, you may negotiate transactions with players who are not your neighbor.|||If you activate a system that contains 1 or more of the Hacan player's units, return this card to the Hacan player.",
      startingtech: "11,19",
      flagship: 4,
      factionunits: -1,
      factiontech: "5,24",
      commodities: 6,
      iconname: "Hacan.png"
    },
    {
      id: 5,
      name: "The Federation of Sol",
      factionabilities:
        "Orbital Drop: ACTION: Spend 1 token from your strategy pool to place 2 infantry from your reinforcements on 1 planet you control.|||Versatile: When you gain command tokens during the status phase, gain 1 additional command token.",
      promissorynote:
        "Military Support:|||At the start of the Sol player's turn:|||Remove 1 token from the Sol player's strategy pool, if able, and return it to his reinforcements.  Then, you may place 2 infantry from your reinforcements on any planet you control.|||Then return this card to the Sol player.",
      startingtech: "0,11",
      flagship: 5,
      factionunits: "1,10",
      factiontech: "40,49",
      commodities: 4,
      iconname: "Sol.png"
    },
    {
      id: 6,
      name: "The Ghosts of Creuss",
      factionabilities:
        "Quantum Entanglement: You treat all systems that contain either an alpha or beta wormhole as adjacent to each other. Game effects cannot prevent you from using this ability.|||Slipstream: During your tactical actions, apply +1 to the move value of each of your ships that starts its movement in your home system  or in a system that contains either an alpha or beta wormhole.|||Creuss Gate: When you create the game board, place the Creuss Gate (tile 17) where your home system would normally be placed. The Creuss Gate system is not a home system. Then, place your home system (tile 51) in your play area.",
      promissorynote:
        "Creuss Iff:|||At the start of your turn during the action phase:|||Place or move a Creuss wormhole token into either a system that contains a planet you control or a non-home system that does not contain another player's ships.|||Then, return this card to the Creuss player.",
      startingtech: 12,
      flagship: 6,
      factionunits: -1,
      factiontech: "16,37",
      commodities: 4,
      iconname: "Creuss.png"
    },
    {
      id: 7,
      name: "The L1Z1X Mindnet",
      factionabilities:
        "Assimilate: When you gain control of a planet, replace each PDS and space dock that is on that planet with a matching unit from your reinforcements.|||Harrow: After each round of ground combat, your ships in the active system may use their Bombardment abilities against your opponent's ground forces on the planet.",
      promissorynote:
        "Cybernetic Enhancements:|||At the start of your turn:|||Remove 1 token from the L1Z1X player's strategy pool and return it to his reinforcements. Then, place 1 command token from your reinforcements in your strategy pool.|||Then, return this card to the L1Z1X player.",
      startingtech: "0,31",
      flagship: 7,
      factionunits: 5,
      factiontech: "25,44",
      commodities: 2,
      iconname: "L1Z1X.png"
    },
    {
      id: 8,
      name: "The Mentak Coalition",
      factionabilities:
        "Ambush: At the start of a space combat, you may roll 1 die for each of up to 2 of your cruisers or destroyers in the system.  For each result equal to or greater than that ship's combat value, produce 1 hit; your opponent must assign it to 1 of his ships.|||Pillage: After 1 of your neighbors gains trade goods or resolves a transaction, if he has 3 or more trade goods, you may take 1 of his trade goods or commodities.",
      promissorynote:
        "Promise of Protection:|||Action: Place this card face-up in your play area.|||While this card is in your play area, the Mentak player cannot use their Pillage faction ability against you.|||If you activate a system that contains 1 or more of the Mentak player's units, return this card to the Mentak player.",
      startingtech: "19,31",
      flagship: 8,
      factionunits: -1,
      factiontech: "26,27",
      commodities: 2,
      iconname: "Mentak.png"
    },
    {
      id: 9,
      name: "The Naalu Collective",
      factionabilities:
        'Telepathic: At the end of the strategy phase, place the Naalu "0" token on your strategy card; you are first in initiative order.|||Foresight: After another player moves ships into a system that contains 1 or more of your ships, you may place 1 token from your strategy pool in an adjacent system that does not contain another player\'s ships;  move your ships from the active system into that system.',
      promissorynote:
        'Gift of Prescience:|||At the end of the strategy phase:|||Place this card face-up in your play area and place the Naalu "0" token on your strategy card;  you are first in the initiative order.  The Naalu player cannot use his TELEPATHIC faction ability during this game round.|||Return this card to the Naalu player at the end of the status phase.',
      startingtech: "0,19",
      flagship: 9,
      factionunits: 8,
      factiontech: "6,47",
      commodities: 3,
      iconname: "Naalu.png"
    },
    {
      id: 10,
      name: "The Nekro Virus",
      factionabilities:
        "Galactic Threat: You cannot vote on agendas.  Once per agenda phase, after an agenda is revealed, you may predict aloud the outcome of that agenda.  If your prediction is correct, gain 1 technology that is owned by a player who voted how you predicted.|||Technological Singularity: Once per combat, after 1 of your opponent's units is destroyed, you may gain 1 technology that is owned by that player.|||Propagation: You cannot research technology.  When you would research a technology, gain 3 command tokens instead.",
      promissorynote:
        "Antivirus:|||At the start of combat:|||Place this card face-up in your play area. While this card is in your play area, the Nekro player cannot use his TECHNOLOGICAL SINGULARITY faction ability against you.|||If you activate a system that contains 1 or more of the Nekro player's units, return this card to the Nekro player.",
      startingtech: "1,56,57",
      flagship: 10,
      factionunits: -1,
      factiontech: "56,57",
      commodities: 3,
      iconname: "Nekro.png"
    },
    {
      id: 11,
      name: "The Sardakk N'orr",
      factionabilities:
        "Unrelenting: Apply +1 to the result of each of your unit's combat rolls.",
      promissorynote:
        "Tekklar Legion:|||At the start of an invasion combat:|||Apply +1 to the result of each of your unit's combat rolls during this combat.  If your opponent is the N'orr player, apply -1 to the result of each of his unit's combat rolls during this combat.|||Then, return this card to the N'orr player.",
      startingtech: -1,
      flagship: 11,
      factionunits: 6,
      factiontech: "38,45",
      commodities: 3,
      iconname: "Sardakk.png"
    },
    {
      id: 12,
      name: "The Universities of Jol-Nar",
      factionabilities:
        'Fragile: Apply -1 to the result of each of your unit\'s combat rolls.|||Brilliant: When you spend a command token to resolve the secondary ability of the "Technology" strategy card, you may resolve the primary ability instead.|||Analytical: When you research a technology that is not a unit upgrade technology, you may ignore 1 prerequisite.',
      promissorynote:
        "Research Agreement:|||After the Jol-Nar player researches a technology that is not a faction technology:|||Gain that technology.|||Then, return this card to the Jol-Nar player.",
      startingtech: "0,11,19,31",
      flagship: 12,
      factionunits: -1,
      factiontech: "17,28",
      commodities: 4,
      iconname: "Jol_Nar.png"
    },
    {
      id: 13,
      name: "The Winnu",
      factionabilities:
        "Blood Ties: You do not have to spend influence to remove the custodians token from Mecatol Rex.|||Reclamation: After you resolve a tactical action during which you gained control of Mecatol Rex, you may place 1 PDS and 1 space dock from your reinforcements on Mecatol Rex.",
      promissorynote:
        "Acquiesence:|||At the end of the strategy phase:|||Exchange 1 of your strategy cards with a strategy card that was chosen by the Winnu player.|||Then, return this card to the Winnu player.",
      startingtech: 59,
      flagship: 13,
      factionunits: -1,
      factiontech: "18,29",
      commodities: 3,
      iconname: "Winnu.png"
    },
    {
      id: 14,
      name: "The Xxcha Kingdom",
      factionabilities:
        'Peace Accords: After you resolve the primary or secondary ability of the "Diplomacy" strategy card, you may gain control of 1 planet other than Mecatol Rex that does not contain any units and is in a system that is adjacent to a planet you control.|||Quash: When an agenda is revealed, you may spend 1 token from your strategy pool to discard that agenda and reveal 1 agenda from the top of the deck.  Players vote on this agenda instead.',
      promissorynote:
        "Political Favor:|||After an agenda is revealed:|||Remove 1 token from the Xxcha player's strategy pool and return it to his reinforcements.  Then, discard the revealed agenda and reveal 1 agenda from the top of the deck.  Players vote on this agenda instead.|||Then, return this card to the Xxcha player.",
      startingtech: 20,
      flagship: 14,
      factionunits: -1,
      factiontech: "7,58",
      commodities: 4,
      iconname: "Xxcha.png"
    },
    {
      id: 15,
      name: "The Yin Brotherhood",
      factionabilities:
        "Indoctrination: At the start of a ground combat, you may spend 2 influence to replace 1 of your opponent's participating infantry with 1 infantry from your reinforcements.|||Devotion: After each space battle round, you may destroy 1 of your cruisers or destroyers in the active system to produce 1 hit and assign it to 1 of your opponent's ships in that system.",
      promissorynote:
        "Greyfire Mutagen:|||After a system is activated:|||The Yin player cannot use faction abilities or faction technology during this tactical action.|||Then, return this card to the Yin player.",
      startingtech: 19,
      flagship: 15,
      factionunits: -1,
      factiontech: "8,30",
      commodities: 2,
      iconname: "Yin.png"
    },
    {
      id: 16,
      name: "The Yssaril Tribes",
      factionabilities:
        "Stall Tactics: ACTION: Discard 1 action card from your hand|||Scheming: When you draw 1 or more action cards, draw 1 additional action card.  Then, choose and discard 1 action card from your hand.|||Crafty: You can have any number of action cards in your hand.  Game effects cannot prevent you from using this ability.",
      promissorynote:
        "Spy Net:|||At the start of your turn:|||Look at the Yssaril player's hand of action cards.  Choose 1 of those cards and add it to your hand.|||Then, return this card to the Yssaril player.",
      startingtech: 0,
      flagship: 16,
      factionunits: -1,
      factiontech: "9,10",
      commodities: 3,
      iconname: "Yssaril.png"
    }
  ],
  flagships: [
    {
      id: 0,
      name: "Duha Menaimon",
      cost: 8,
      combat: "7 (x2)",
      move: 1,
      capacity: 5,
      ability:
        "After you activate this system, you may produce up to 5 units in this system.|||Sustain Damage"
    },
    {
      id: 1,
      name: "Arc Secundus",
      cost: 8,
      combat: "5 (x2)",
      move: 1,
      capacity: 3,
      ability:
        "Other players' units in this system lose PLANETARY SHIELD.  At the start of each space combat round, repair this ship.|||Sustain Damage|||Bombardment 5 (x3)"
    },
    {
      id: 2,
      name: "Son of Ragh",
      cost: 8,
      combat: "5 (x2)",
      move: 1,
      capacity: 3,
      ability: "Sustain Damage|||Anti-Fighter Barrage 6 (x4)"
    },
    {
      id: 3,
      name: "The Inferno",
      cost: 8,
      combat: "5 (x2)",
      move: 1,
      capacity: 3,
      ability:
        "ACTION: Spend 1 token from your strategy pool to place 1 cruiser in this unit's system.|||Sustain Damage"
    },
    {
      id: 4,
      name: "Wrath of Kenara",
      cost: 8,
      combat: "7 (x2)",
      move: 1,
      capacity: 3,
      ability:
        "After you roll a die during a space combat in this system, you may spend 1 trade good to apply +1 to the result.|||Sustain Damage"
    },
    {
      id: 5,
      name: "Genesis",
      cost: 8,
      combat: "5 (x2)",
      move: 1,
      capacity: 12,
      ability:
        "At the end of the status phase, place 1 infantry from your reinforcements in this system's space area.|||Sustain Damage"
    },
    {
      id: 6,
      name: "Hil Colish",
      cost: 8,
      combat: 5,
      move: 1,
      capacity: 3,
      ability:
        "This ship's system contains a delta wormhole. During movement, this ship may move before or after your other ships.|||Sustain Damage"
    },
    {
      id: 7,
      name: "[0.0.1]",
      cost: 8,
      combat: "5 (x2)",
      move: 1,
      capacity: 5,
      ability:
        "During a space combat, hits produced by this ship and by your dreadnoughts in this system must be assigned to non-fighter ships if able.|||Sustain Damage"
    },
    {
      id: 8,
      name: "Fourth Moon",
      cost: 8,
      combat: "7 (x2)",
      move: 1,
      capacity: 3,
      ability:
        "Other players' ships in this system cannot use Sustain Damage.|||Sustain Damage"
    },
    {
      id: 9,
      name: "Matriarch",
      cost: 8,
      combat: "9 (X2)",
      move: 1,
      capacity: 6,
      ability:
        "During an invasion in this system, you may commit fighters to planets as if they were ground forces. When combat ends, return those units to the space area.|||Sustain Damage"
    },
    {
      id: 10,
      name: "The Alastor",
      cost: 8,
      combat: "9 (X2)",
      move: 1,
      capacity: 3,
      ability:
        "At the start of a space combat, choose any number of your ground forces in this system to participate in that combat as if they were ships.|||Sustain Damage"
    },
    {
      id: 11,
      name: "C'Morran N'orr",
      cost: 8,
      combat: "6 (X2)",
      move: 1,
      capacity: 3,
      ability:
        "Apply +1 to the result of each of your other ship's combat rolls in this system.|||Sustain Damage"
    },
    {
      id: 12,
      name: "J.N.S. Hylarim",
      cost: 8,
      combat: "6 (X2)",
      move: 1,
      capacity: 3,
      ability:
        "When making a combat roll for this ship, each result of 9 or 10, before applying modifiers, produces 2 additional hits.|||Sustain Damage"
    },
    {
      id: 13,
      name: "Salai Sai Corian",
      cost: 8,
      combat: "7 (x?)",
      move: 1,
      capacity: 3,
      ability:
        "When this unit makes a combat roll, it rolls a number of dice equal to the number of your opponent's non-fighter ships in this system.|||Sustain Damage"
    },
    {
      id: 14,
      name: "Loncarra Ssodu",
      cost: 8,
      combat: "7 (x2)",
      move: 1,
      capacity: 3,
      ability:
        "You may use this unit's SPACE CANNON against ships that are in adjacent systems.|||Space Cannon 5 (x3)|||Sustain Damage"
    },
    {
      id: 15,
      name: "Van Hauge",
      cost: 8,
      combat: "9 (X2)",
      move: 1,
      capacity: 3,
      ability:
        "When this ship is destroyed, destroy all ships in this system.|||Sustain Damage"
    },
    {
      id: 16,
      name: "Y'sia Y'ssrila",
      cost: 8,
      combat: "5 (x2)",
      move: 2,
      capacity: 3,
      ability:
        "This ship can move through systems that contain other player's ships.|||Sustain Damage"
    }
  ],
  tech_types: [
    {
      id: 0,
      name: "Green"
    },
    {
      id: 1,
      name: "Blue"
    },
    {
      id: 2,
      name: "Yellow"
    },
    {
      id: 3,
      name: "Red"
    },
    {
      id: 4,
      name: "Unit"
    },
    {
      id: 5,
      name: "Special"
    }
  ],
  upgraded_units: [
    {
      id: 0,
      name: "Carrier II",
      cost: 3,
      combat: 9,
      move: 2,
      capacity: 6,
      ability:
        "The Carrier II is faster and and has a larger capacity than the carrier."
    },
    {
      id: 1,
      name: "Advanced Carrier II",
      cost: 3,
      combat: 9,
      move: 2,
      capacity: 8,
      ability:
        "Advanced Carrier IIs are faster and have a larger capacity than Advanced Carriers.|||Sustain Damage"
    },
    {
      id: 2,
      name: "Cruiser II",
      cost: 2,
      combat: 6,
      move: 3,
      capacity: 1,
      ability:
        "The Cruiser II is faster and stronger than the cruiser, and gains capacity."
    },
    {
      id: 3,
      name: "Destroyer II",
      cost: 1,
      combat: 8,
      move: 2,
      capacity: 0,
      ability:
        "The Destroyer II is stronger in general combat and has an improved anti-fighter barrage.|||Anti-Fighter Barrage 6 (x3)"
    },
    {
      id: 4,
      name: "Dreadnought II",
      cost: 4,
      combat: 5,
      move: 2,
      capacity: 1,
      ability:
        '"Direct Hit" cards are no longer effective against this type of ship.|||Sustain Damage|||Bombardment 5'
    },
    {
      id: 5,
      name: "Super-Dreadnought II",
      cost: 4,
      combat: 4,
      move: 2,
      capacity: 2,
      ability:
        '"Direct Hit" cards are no longer effective against this type of ship.|||Sustain Damage|||Bombardment 4'
    },
    {
      id: 6,
      name: "Exotrireme II",
      cost: 4,
      combat: 5,
      move: 2,
      capacity: 1,
      ability:
        'After a round of space comat, you may destroy this unit to destroy up to 2 ships in this system.|||"Direct Hit" cards are no longer effective against this type of ship.|||Sustain Damage|||Bombardment 4 (x2)'
    },
    {
      id: 7,
      name: "Fighter II",
      cost: "1 (x2)",
      combat: 8,
      move: 2,
      capacity: 0,
      ability:
        "Fighter IIs can move on their own, but if they do not count against another unit's capacity they count against your fleet limit."
    },
    {
      id: 8,
      name: "Hybrid Crystal Fighter II",
      cost: "1 (x2)",
      combat: 7,
      move: 2,
      capacity: 0,
      ability:
        "Hybrid Crystal Fighter IIs are stronger than Hybrid Crystal Fighters. Hybrid Crystal Fighter IIs can move on their own, but if they do not count against another unit's capacity they each count as 1/2 of a ship against your fleet limit."
    },
    {
      id: 9,
      name: "Infantry II",
      cost: "1 (x2)",
      combat: 7,
      move: 0,
      capacity: 0,
      ability:
        "After this unit is destroyed in combat roll 1 die. On a result of 6 or greater place this unit on a planet you control in your home system at the start of your next turn."
    },
    {
      id: 10,
      name: "Spec Ops II",
      cost: "1 (x2)",
      combat: 6,
      move: 0,
      capacity: 0,
      ability:
        "After this unit is destroyed in combat roll 1 die. On a result of 5 or greater place this unit on a planet you control in your home system at the start of your next turn."
    },
    {
      id: 11,
      name: "Letani Warrior II",
      cost: "1 (x2)",
      combat: 7,
      move: 0,
      capacity: 0,
      ability:
        "After this unit is destroyed in combat roll 1 die. On a result of 6 or greater place this unit on a planet you control in your home system at the start of your next turn.|||Production 2"
    },
    {
      id: 12,
      name: "PDS II",
      cost: 0,
      combat: 0,
      move: 0,
      capacity: 0,
      ability:
        "PDS IIs can fire their space cannons into adjacent systems.|||Planetary Shield|||Deep Space Cannon 5"
    },
    {
      id: 13,
      name: "Space Dock II",
      cost: 0,
      combat: 0,
      move: 0,
      capacity: 0,
      ability:
        "Up to 3 fighters per space dock in a system a space dock is in do not count towards that system's fleet capacity.|||Production (Planet +4)"
    },
    {
      id: 14,
      name: "Floating Factory II",
      cost: 0,
      combat: 0,
      move: 2,
      capacity: 5,
      ability: "Production 7"
    },
    {
      id: 15,
      name: "War Sun",
      cost: 12,
      combat: "3 (x3)",
      move: 2,
      capacity: 6,
      ability:
        "Other players units in a war sun's system lose their planetary shield.|||Sustain Damage|||Bombardment 3 (x3)"
    },
    {
      id: 16,
      name: "Prototype War Sun II",
      cost: 10,
      combat: "3 (x3)",
      move: 3,
      capacity: 6,
      ability:
        "Other players units in a war sun's system lose their planetary shield.|||Sustain Damage|||Bombardment 3 (x3)"
    }
  ],
  objectives: [
    {
      id: 0,
      name: "Custodian Token",
      text: "Claim the Custodian Token.",
      pointvalue: 1,
      type: 0
    },
    {
      id: 1,
      name: "Imperial",
      text: "Use the primary of Imperial while controlling Mecatol Rex",
      pointvalue: 1,
      type: 1
    },
    {
      id: 2,
      name: "Corner the Market",
      text: "Control 4 planets that each have the same planet trait",
      pointvalue: 1,
      type: 2
    },
    {
      id: 3,
      name: "Develop Weaponry",
      text: "Own 2 unit upgrade technologies",
      pointvalue: 1,
      type: 2
    },
    {
      id: 4,
      name: "Diversify Research",
      text: "Own 2 technologies in each of 2 colors",
      pointvalue: 1,
      type: 2
    },
    {
      id: 5,
      name: "Erect a Monument",
      text: "Spend 8 resources",
      pointvalue: 1,
      type: 2
    },
    {
      id: 6,
      name: "Expand Borders",
      text: "Control 6 planets in non-home systems",
      pointvalue: 1,
      type: 2
    },
    {
      id: 7,
      name: "Found Research Outposts",
      text: "Control 3 planets that have technology specialties",
      pointvalue: 1,
      type: 2
    },
    {
      id: 8,
      name: "Intimidate Council",
      text:
        "Have 1 or more ships in 2 systems that are adjacent to Mecatol Rex's System",
      pointvalue: 1,
      type: 2
    },
    {
      id: 9,
      name: "Lead From the Front",
      text: "Spend a total of 3 tokens from your tactic and/or strategy pools",
      pointvalue: 1,
      type: 2
    },
    {
      id: 10,
      name: "Negotiate Trade Routes",
      text: "Spend 5 trade goods",
      pointvalue: 1,
      type: 2
    },
    {
      id: 11,
      name: "Sway the Council",
      text: "Spend 8 influence",
      pointvalue: 1,
      type: 2
    },
    {
      id: 12,
      name: "Centralize Galactic Trade",
      text: "Spend 10 trade goods",
      pointvalue: 2,
      type: 3
    },
    {
      id: 13,
      name: "Conquer the Weak",
      text: "Control 1 planet that is in another player's home system",
      pointvalue: 2,
      type: 3
    },
    {
      id: 14,
      name: "Form Galactic Brain Trust",
      text: "Control 5 planets that have technology specialties",
      pointvalue: 2,
      type: 3
    },
    {
      id: 15,
      name: "Found a Golden Age",
      text: "Spend 16 resources",
      pointvalue: 2,
      type: 3
    },
    {
      id: 16,
      name: "Galvanize the People",
      text: "Spend a total of 6 tokens from your tactic and/or strategy pools",
      pointvalue: 2,
      type: 3
    },
    {
      id: 17,
      name: "Manipulate Galactic Law",
      text: "Spend 16 influence",
      pointvalue: 2,
      type: 3
    },
    {
      id: 18,
      name: "Master the Sciences",
      text: "Own 2 technologies in each of 4 colors",
      pointvalue: 2,
      type: 3
    },
    {
      id: 19,
      name: "Revolutionize Warfare",
      text: "Own 3 unit upgrade technologies",
      pointvalue: 2,
      type: 3
    },
    {
      id: 20,
      name: "Subdue the Galaxy",
      text: "Control 11 planets in non-home systems",
      pointvalue: 2,
      type: 3
    },
    {
      id: 21,
      name: "Unify the Colonies",
      text: "Control 6 planets that each have the same planet trait",
      pointvalue: 2,
      type: 3
    },
    {
      id: 22,
      name: "Destroy Their Greatest Ship",
      text: "Destroy another player's war sun or flagship",
      pointvalue: 1,
      type: 4
    },
    {
      id: 23,
      name: "Make an Example of Their World",
      text:
        "Use BOMBARDMENT to destroy the last of a player's ground forces on a planet",
      pointvalue: 1,
      type: 4
    },
    {
      id: 24,
      name: "Spark a Rebellion",
      text: "Win a combat against a player who has the most victory points",
      pointvalue: 1,
      type: 4
    },
    {
      id: 25,
      name: "Turn Their Fleets to Dust",
      text:
        "Use SPACE CANNON to destroy the last of a player's ships in a system",
      pointvalue: 1,
      type: 4
    },
    {
      id: 26,
      name: "Unveil Flagship",
      text:
        "Win a space combat in a system that contains your flagship. You cannot score this objective if your flagship is destroyed in the combat",
      pointvalue: 1,
      type: 4
    },
    {
      id: 27,
      name: "Adapt New Strategies",
      text:
        "Own 2 faction technologies. (Valefar Assimilator technologies do not count toward this objective)",
      pointvalue: 1,
      type: 5
    },
    {
      id: 28,
      name: "Become the Gatekeeper",
      text:
        "Have 1 or more ships in a system that contains an alpha wormhole and 1 or more ships in a system that contains a beta wormhole",
      pointvalue: 1,
      type: 5
    },
    {
      id: 29,
      name: "Control the Region",
      text: "Have 1 or more ships in 6 systems",
      pointvalue: 1,
      type: 5
    },
    {
      id: 30,
      name: "Cut Supply Lines",
      text:
        "Have 1 or more ships in the same system as another player's space dock",
      pointvalue: 1,
      type: 5
    },
    {
      id: 31,
      name: "Establish a Perimeter",
      text: "Have 4 PDS units on the game board",
      pointvalue: 1,
      type: 5
    },
    {
      id: 32,
      name: "Forge an Alliance",
      text: "Control 4 cultural planets",
      pointvalue: 1,
      type: 5
    },
    {
      id: 33,
      name: "Form a Spy Network",
      text: "Discard 5 action Cards",
      pointvalue: 1,
      type: 5
    },
    {
      id: 34,
      name: "Fuel the War Machine",
      text: "Have 3 space docks on the game board",
      pointvalue: 1,
      type: 5
    },
    {
      id: 35,
      name: "Gather a Mighty Fleet",
      text: "Have 5 dreadnoughts on the game board",
      pointvalue: 1,
      type: 5
    },
    {
      id: 36,
      name: "Learn the Secrets of the Cosmos",
      text:
        "Have 1 or more ships in 3 systems that are each adjacent to an anomaly",
      pointvalue: 1,
      type: 5
    },
    {
      id: 37,
      name: "Master the Laws of Physics",
      text: "Own 4 technologies of the same color",
      pointvalue: 1,
      type: 5
    },
    {
      id: 38,
      name: "Mine Rare Metals",
      text: "Control 4 hazardous planets",
      pointvalue: 1,
      type: 5
    },
    {
      id: 39,
      name: "Monopolize Production",
      text: "Control 4 industrial planets",
      pointvalue: 1,
      type: 5
    },
    {
      id: 40,
      name: "Occupy the Seat of the Empire",
      text: "Control Mecatol Rex and have 3 or more ships in its system",
      pointvalue: 1,
      type: 5
    },
    {
      id: 41,
      name: "Threaten Enemies",
      text:
        "Have 1 or more ships in a system that is adjacent to another player's home system",
      pointvalue: 1,
      type: 5
    },
    {
      id: 42,
      name: "Holy Planet of Ixth",
      text:
        "Elect cultural planet, The planet's controller gains 1VP. Units on this planet cannot use Production.",
      pointvalue: 1,
      type: 6
    },
    {
      id: 43,
      name: "Shard of the Throne",
      text:
        "Elect player, This card is worth 1VP. If a player wins a combat against the player that has this card, they gain this card.",
      pointvalue: 1,
      type: 6
    },
    {
      id: 44,
      name: "The Crown of Emphidia",
      text:
        "Elect player, This card is worth 1VP. If a player gains control of a planet in this player's home system they gain this card.",
      pointvalue: 1,
      type: 6
    },
    {
      id: 45,
      name: "Mutiny (Passed)",
      text: 'Each player who voted "For" gains 1 VP.',
      pointvalue: 1,
      type: 6
    },
    {
      id: 46,
      name: "Mutiny (Failed)",
      text: 'Each player who voted "For" loses 1 VP.',
      pointvalue: -1,
      type: 6
    },
    {
      id: 47,
      name: "Seed of an Empire (Most)",
      text: "The player with most VP gains 1 VP.",
      pointvalue: 1,
      type: 6
    },
    {
      id: 48,
      name: "Seed of an Empire (Fewest)",
      text: "The player with the fewest VP gains 1 VP.",
      pointvalue: 1,
      type: 6
    },
    {
      id: 49,
      name: "Support for the Throne",
      text:
        "When you recieve this card, if you are not the note's owner, you must place it face-up in your play area and gain 1 victory point.|||If you activate a system that contains 1 or more of the owner's units, or if the owner is eliminated, lose 1 victory point and return this card to the owner.",
      pointvalue: 1,
      type: 7
    }
  ],
  objective_types: [
    {
      id: 0,
      name: "Mecatol Rex",
      iconname: "Placeholder.png"
    },
    {
      id: 1,
      name: "Imperial",
      iconname: "Placeholder.png"
    },
    {
      id: 2,
      name: "Stage I Public Objective",
      iconname: "Public1.png"
    },
    {
      id: 3,
      name: "Stage II Public Objective",
      iconname: "Public2.png"
    },
    {
      id: 4,
      name: "Action Phase Secret Objective",
      iconname: "Secret.png"
    },
    {
      id: 5,
      name: "Status Phase Secret Objective",
      iconname: "Secret.png"
    },
    {
      id: 6,
      name: "Agenda",
      iconname: "Placeholder.png"
    },
    {
      id: 7,
      name: "Support the Throne",
      iconname: "Placeholder.png"
    }
  ]
};

export default tiObject;
