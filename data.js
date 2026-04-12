// RIFT — Shadow Slave Data
const RIFT_DATA = {
    novels: {
        "shadow-slave": {
            id: "shadow-slave",
            title: "Shadow Slave",
            author: "Guiltythree",
            platform: "Royal Road / Webnovel",
            chapters: 2868,
            status: "Ongoing",
            genres: ["Dark Fantasy", "Progression Fantasy", "Action"],
            summary: "A young man named Sunny is awakened into a world where humanity fights nightmarish creatures. Without a memory of his past, he begins his journey in the terrifying Nightmare Realm.",
            color: "#C41E3A"
        }
    },

    characters: [
        {
            id: "sunny",
            novel: "shadow-slave",
            name: "Sunny",
            epithet: "The Dreamless · The Forsaken One · Lord of Shadows · The Forgotten",
            rank: "Transcendent (Outside the Spell)",
            rankLevel: 4,
            portraitSymbol: "☾",
            portraitGlow: "red",
            role: "Protagonist",
            status: "Alive",
            faction: "Shadow Clan (Founder)",
            firstChapter: 1,
            tags: ["Shadowborn", "Memory Weave", "Cursed Aspect", "Echo Army"],
            abilities: [
                { name: "Shadow Aspect", level: 95, color: "red" },
                { name: "Soul Strength", level: 80, color: "red" },
                { name: "Echo Control", level: 88, color: "red" }
            ],
            echoes: ["Fiend", "Nightmare Creature", "Shadow Demon", "Bone Golem"],
            soulAspects: 7,
            background: "Born without a memory and awakened into the Nightmare Realm, Sunny received the unique 'Cursed' aspect — no innate ability but an endless pool of shadow coins. His journey from a nameless, powerless slave to one of the most feared beings in existence defines the story. After reaching Saint rank, Sunny reunited with Nephis in the Nightmare Desert, survived a time loop on Wind Flower Island, traveled the Great River to the Estuary, and discovered the truth of the Forgotten God. Around Ch. 1600, he transcended the Nightmare Spell — and was forgotten by everyone, including his closest companions. He now operates from Bastion, running a café, while secretly founding the Shadow Clan.",
            keyMoments: [
                "First nightmare — survived with only cunning",
                "Received the Cursed Aspect",
                "Formed the shadow army",
                "Reached Saint rank",
                "Confronted a Transcendent nightmare",
                "Reunited with Nephis on a giant turtle in the Nightmare Desert",
                "Survived 60+ time loops on Wind Flower Island",
                "Discovered the truth of the Seventh God at the Estuary",
                "Transcended the Nightmare Spell — forgotten by everyone",
                "Founded the Shadow Clan from the Forgotten Shore"
            ],
            relationships: [
                { name: "Nephis", type: "ally", note: "Complex bond; she lost all memory of him after his transcendence" },
                { name: "Cassie", type: "ally", note: "Trusted friend and seer" },
                { name: "Effie", type: "ally", note: "Reliable battle companion" },
                { name: "Kai", type: "ally", note: "Strategist of the group" }
            ]
        },
        {
            id: "nephis",
            novel: "shadow-slave",
            name: "Nephis",
            epithet: "Star of Undying Flame · Changing Star",
            rank: "Transcendent",
            rankLevel: 4,
            portraitSymbol: "✦",
            portraitGlow: "gold",
            role: "Main Female Lead",
            status: "Alive",
            faction: "Immortal Flame clan",
            firstChapter: 5,
            tags: ["Flame Aspect", "Swordsman", "Healer"],
            abilities: [
                { name: "Flame Aspect", level: 99, color: "gold" },
                { name: "Soul Strength", level: 92, color: "gold" },
                { name: "Undying Will", level: 97, color: "gold" }
            ],
            echoes: [],
            soulAspects: 5,
            background: "A member of the powerful Immortal Flame clan, Nephis is one of the most gifted Awakened in history. Her Flame aspect burns without limit. She reunited with Sunny on a giant turtle in the Great River, where they trained and sparred for a month. She journeyed through Wind Flower Island and the Great River with the cohort. After Sunny transcended the Spell, she lost all memory of him due to the transcendence effect.",
            keyMoments: [
                "Led the group through the First Nightmare",
                "Reached Transcendent rank",
                "Fateless arc begins (Transcendence)",
                "Peak flame manifestation — entire sky ignited",
                "Reunited with Sunny on a giant turtle in the Great River",
                "Survived the Wind Flower Island time loop",
                "Journeyed through the Great River to the Estuary",
                "Lost all memory of Sunny after his transcendence"
            ],
            relationships: [
                { name: "Sunny", type: "complex", note: "Former ally; all memory of him erased by transcendence" },
                { name: "Cassie", type: "ally", note: "Trusted companion" }
            ]
        },
        {
            id: "cassie",
            novel: "shadow-slave",
            name: "Cassie",
            epithet: "The Blind Seer · Prophet of Doom",
            rank: "Transcendent",
            rankLevel: 4,
            portraitSymbol: "◈",
            portraitGlow: "purple",
            role: "Supporting Lead",
            status: "Alive",
            faction: "Clan Valor",
            firstChapter: 3,
            tags: ["Seer", "Prophetic Vision", "Blind", "Seneschal"],
            abilities: [
                { name: "Prophecy Aspect", level: 75, color: "purple" },
                { name: "Soul Perception", level: 85, color: "purple" },
                { name: "Soul Strength", level: 60, color: "purple" }
            ],
            echoes: [],
            soulAspects: 2,
            background: "Blind by birth, Cassie awakened as a Seer — able to perceive threads of fate and prophecy. Her visions are cryptic but devastatingly accurate. She is one of Sunny's earliest and most trusted companions. During the Wind Flower Island arc, Cassie gradually became aware of the time loop and helped break it. She accompanied Sunny to the Estuary where the truth of the Seven Gods was revealed.",
            keyMoments: [
                "Prophesied the downfall of an Ascended",
                "Vision of the Last Nightmare",
                "Warned the group before the Tomb of Ariel arc",
                "Became aware of the time loop on Wind Flower Island",
                "Witnessed the Forgotten God revelation at the Estuary",
                "Prophecy from Ch. 1102 fulfilled in Ch. 1245"
            ],
            relationships: [
                { name: "Sunny", type: "ally", note: "Oldest companion (no longer remembers him)" },
                { name: "Nephis", type: "ally", note: "Admires her strength" }
            ]
        },
        {
            id: "effie",
            novel: "shadow-slave",
            name: "Effie",
            epithet: "Raised by Wolves · Iron-Armed Hunter",
            rank: "Transcendent",
            rankLevel: 4,
            portraitSymbol: "⚔",
            portraitGlow: "teal",
            role: "Supporting Lead",
            status: "Alive",
            faction: "Independent",
            firstChapter: 60,
            tags: ["Warrior", "Unbreakable", "Fearless", "Physical"],
            abilities: [
                { name: "Physical Strength", level: 88, color: "teal" },
                { name: "Hunt Aspect", level: 72, color: "teal" },
                { name: "Endurance", level: 91, color: "teal" }
            ],
            echoes: [],
            soulAspects: 3,
            background: "A towering warrior with an iron will and near-limitless physical endurance, Effie fights with raw power and relentless aggression. Her Hunt Aspect amplifies her tracking and combat instincts to inhuman levels. She rejoined the cohort at Fallen Grace and journeyed with them through the Great River. After Sunny's transcendence, Effie lost all memory of him. She now has a son, Little Ling — a child born as a Saint rank with Transcendent-level power, causing chaos on her farm.",
            keyMoments: [
                "Defeated a Master-rank nightmare solo",
                "Hunt Aspect breakthrough — reached Saint rank",
                "Protected the group during the Tomb of Ariel arc",
                "Rejoined cohort at Fallen Grace",
                "Gave birth to Little Ling — a child born as a Saint",
                "Lost all memory of Sunny after his transcendence"
            ],
            relationships: [
                { name: "Sunny", type: "ally", note: "Reliable battle partner (no longer remembers him)" },
                { name: "Kai", type: "ally", note: "Strategic foil to her raw power approach" }
            ]
        },
        {
            id: "kai",
            novel: "shadow-slave",
            name: "Kai",
            epithet: "The Sly Arrow · Whispering Shadow",
            rank: "Transcendent",
            rankLevel: 4,
            portraitSymbol: "⬡",
            portraitGlow: "purple",
            role: "Supporting Lead",
            status: "Alive",
            faction: "Nightingales",
            firstChapter: 110,
            tags: ["Archer", "Tactician", "Stealth", "Idol"],
            abilities: [
                { name: "Arrow Aspect", level: 78, color: "purple" },
                { name: "Stealth", level: 83, color: "purple" },
                { name: "Precision", level: 90, color: "purple" }
            ],
            echoes: [],
            soulAspects: 2,
            background: "A calm, calculating archer. Kai serves as the tactical mind of the group — always three steps ahead, rarely wasting energy on direct confrontation when a precise arrow from darkness does the same job.",
            keyMoments: [
                "Sniped an Awakened-rank nightmare from 800 meters",
                "Solo mission into enemy nightmare territory"
            ],
            relationships: [
                { name: "Sunny", type: "ally", note: "Mutual respect; both prefer cunning over brute force" },
                { name: "Effie", type: "ally", note: "Opposite personalities, effective together" }
            ]
        },
        {
            id: "morgans",
            novel: "shadow-slave",
            name: "Morgan",
            epithet: "Princess of Valor",
            rank: "Transcendent",
            rankLevel: 4,
            portraitSymbol: "⚔",
            portraitGlow: "red",
            role: "Rival / Ally",
            status: "Alive",
            faction: "Clan Valor",
            firstChapter: 400,
            tags: ["Blade Aspect", "Valor", "Princess", "Lethal"],
            abilities: [
                { name: "Blade Aspect", level: 95, color: "red" },
                { name: "Sword Mastery", level: 90, color: "red" },
                { name: "Flawless Body", level: 85, color: "red" }
            ],
            echoes: [],
            soulAspects: 4,
            background: "Morgan is a princess of Clan Valor — daughter of the Sovereign, Anvil of Valor. She is a formidable Master whose Aspect allows her to act as a living blade, capable of cutting through immensely durable materials. Cold and austere, she is both feared and respected. She appears in the Chained Isles arc and later becomes a significant figure in clan politics.",
            keyMoments: [
                "First appearance in the Chained Isles arc",
                "Demonstrated her lethal Blade Aspect",
                "Played a key role in Clan Valor's political maneuvers"
            ],
            relationships: [
                { name: "Sunny", type: "complex", note: "Rival turned uneasy ally" }
            ]
        },
        {
            id: "jet",
            novel: "shadow-slave",
            name: "Jet",
            epithet: "The Soul Reaper · Colonel of the First Army",
            rank: "Transcendent",
            rankLevel: 4,
            portraitSymbol: "⚔",
            portraitGlow: "blue",
            role: "Supporting Lead",
            status: "Alive",
            faction: "Government / First Army",
            firstChapter: 55,
            tags: ["Soul Reaper", "Ascended", "Government", "Scythe"],
            abilities: [
                { name: "Soul Reaper Aspect", level: 92, color: "blue" },
                { name: "Physical Strength", level: 88, color: "blue" },
                { name: "Combat Mastery", level: 95, color: "blue" }
            ],
            echoes: [],
            soulAspects: 4,
            background: "Colonel Jet is a senior officer of the First Awakened Irregular Company. Known as the 'Soul Reaper,' her Awakened Ability bypasses physical defenses to strike directly at an enemy's soul. Her Dormant Ability lets her absorb soul essence from kills — critical because her soul cannot generate essence on its own. She carries an Aspect Legacy that manifests as a chilling mist she shapes into a deadly scythe. Despite her terrifying combat prowess, she is disciplined and duty-driven. She provided Sunny with crucial survival advice and later joined the cohort at Fallen Grace for the Great River journey.",
            keyMoments: [
                "First meeting with Sunny — provided Dream Realm survival advice",
                "Revealed as 'Soul Reaper' — abilities bypass physical defense",
                "Joined the cohort at Fallen Grace",
                "Accompanied the group through the Great River journey",
                "Known as a 'murderous savage' by those who don't understand her"
            ],
            relationships: [
                { name: "Sunny", type: "ally", note: "Mentored him early; later trusted battle companion" },
                { name: "Effie", type: "ally", note: "Both joined the cohort at Fallen Grace" }
            ]
        }
    ],

    ranks: [
        { level: 1, name: "Dormant (Sleeper)", desc: "Infected by the Nightmare Spell. Has not yet completed their First Nightmare. Pulled into Dream Realm on Winter Solstice.", color: "#2DD4BF" },
        { level: 2, name: "Awakened", desc: "Survived the First Nightmare and returned to the waking world with an Aspect and Flaw.", color: "#60A5FA" },
        { level: 3, name: "Ascended (Master)", desc: "Cleared the Second Nightmare. Can travel freely between Dream Realm and waking world.", color: "#A855F7" },
        { level: 4, name: "Transcendent (Saint)", desc: "Cleared the Third Nightmare. Transcends mortal limits. Gains Transformation ability.", color: "#C41E3A" },
        { level: 5, name: "Supreme (Sovereign)", desc: "Cleared the Fourth Nightmare. Establishes a Domain — near-absolute authority over their territory.", color: "#F59E0B" },
        { level: 6, name: "Sacred", desc: "Cleared the Fifth Nightmare. Closer to gods than humans.", color: "#6366F1" },
        { level: 7, name: "Divine", desc: "Cleared the Sixth Nightmare. True divinity.", color: "#8B5CF6" }
    ],

    loreSystems: [
        {
            name: "Nightmare Realm",
            desc: "A dark parallel world that overlaps with reality. Awakened enter it to fight and grow. The longer you survive, the stronger you become.",
            category: "World"
        },
        {
            name: "Aspects",
            desc: "The core power granted upon awakening. Each person's Aspect is unique — from fire to shadow to time. It defines your combat style and growth path.",
            category: "Power"
        },
        {
            name: "Echo System",
            desc: "Echoes are shadow copies of defeated nightmare creatures that Sunny can summon. Unique to him — most Awakened cannot collect echoes.",
            category: "Power"
        },
        {
            name: "Soul Aspects",
            desc: "Secondary abilities that grow alongside your main Aspect. The more Soul Aspects, the more versatile the Awakened.",
            category: "Power"
        },
        {
            name: "Nightmare Creatures",
            desc: "Monsters that inhabit the Nightmare Realm. Ranked like Awakened: Dormant to Ascended. The higher the rank, the more catastrophic the threat.",
            category: "World"
        },

        {
            name: "Great Clans",
            desc: "Powerful human factions — Valor Clan, Song Clan, House of Night — that control resources, knowledge, and political power in the Awakened world.",
            category: "Factions"
        },
        {
            name: "Tomb of Ariel",
            desc: "A legendary nightmare dungeon location. Scene of major battles and revelations. Ariel was a mythical Transcendent-rank being.",
            category: "Locations"
        },
        {
            name: "The Forgotten God (Seventh God)",
            desc: "There were not six but seven gods: Sun God, War God, Storm God, Beast God, Heart God, Shadow God, and the Forgotten God. The other six imprisoned the Seventh to contain the Void — making him their collective Flaw. The daemons were born from his fractured soul. This truth was buried by Ariel at the Estuary of the Great River.",
            category: "Lore"
        },
        {
            name: "The Great River (River of Time)",
            desc: "An infinite river that flows from the future into the past, existing outside of time itself. Found within the Black Pyramid, connected to the blood of an Unholy Titan. Its Estuary holds the secret of the Seven Gods. The cohort traveled it aboard the Chain Breaker.",
            category: "World"
        },
        {
            name: "Time Loops",
            desc: "Certain locations in the Nightmare Realm can trap inhabitants in temporal loops. Wind Flower Island is the most famous — Sunny experienced over sixty repetitions of the same day, using each loop to sharpen his Shadow Step before breaking free.",
            category: "Power"
        },
        {
            name: "Transcendence (Spell Escape)",
            desc: "When an individual transcends the Nightmare Spell, they are erased from collective memory — everyone forgets they existed. Records vanish, citizenship is revoked, and the world adjusts to their absence. Sunny transcended around Ch. 1600, losing all connection to his cohort.",
            category: "Power"
        },
        {
            name: "Shadow Clan",
            desc: "Founded by Sunny around Ch. 1844. Operating from the Forgotten Shore north of the Hollow Mountains, the Shadow Clan is Sunny's personal faction — built from trusted allies including Aiko and Rain. It provides access to the Underworld and serves as a launch point into the Nightmare Desert.",
            category: "Factions"
        }
    ],

    discussions: [
        {
            id: 1,
            chapter: "Ch. 1248",
            badge: "hot",
            title: "The new Sovereign's identity — 3 theories that actually make sense",
            user: "@shadow_theorist",
            comments: 847,
            likes: 2100,
            content: "Based on the clues dropped in chapters 1230-1248, specifically the shadow sigil pattern and the reference to the 'nameless one' — I believe the new Sovereign is connected to Sunny's original clan. Here are my 3 theories...",
            tags: ["Theory", "Spoilers Ch1248", "Sovereign"]
        },
        {
            id: 2,
            chapter: "Power Prediction",
            badge: "new",
            title: "Sunny's shadow army will reach 1000 shadows before the final arc — here's why",
            user: "@lore_keeper",
            comments: 312,
            likes: 941,
            content: "If you track the rate of echo acquisition across each major arc, there's a clear exponential curve. Chapter 100: 2 echoes. Chapter 500: 18 echoes. Chapter 1000: 73 echoes. By this math...",
            tags: ["Math", "Echo System", "Prediction"]
        },
        {
            id: 3,
            chapter: "Character Analysis",
            badge: "trending",
            title: "Sunny's fateless arc wasn't accidental — the author foreshadowed this early on",
            user: "@rift_analyst",
            comments: 1200,
            likes: 5400,
            content: "Re-reading from the start with fresh eyes after he became fateless hits different. Everyone forgetting about Sunny makes his lonely nature from the beginning feel like a tragic setup.",
            tags: ["Foreshadowing", "Fateless", "Deep Dive"]
        },
        {
            id: 4,
            chapter: "Ch. 1200-1250",
            badge: "hot",
            title: "Effie's Saint rank breakthrough and Little Ling's power — absolutely CINEMATIC",
            user: "@rift_fan",
            comments: 623,
            likes: 3200,
            content: "Someone needs to animate this arc. The moment Effie reveals she has a son born as a Saint with Transcendent-level power — and he's just causing chaos on her farm — I've read this 4 times and it hits harder every time.",
            tags: ["Effie", "Little Ling", "Hype"]
        },
        {
            id: 5,
            chapter: "Lore Discussion",
            badge: "trending",
            title: "Complete breakdown of the Fateless status — what we actually know",
            user: "@lore_master",
            comments: 988,
            likes: 4100,
            content: "I've compiled every consequence of the Fateless status across all recent chapters. Here's what the data shows: It erases existence from all memories, physical records, and fate itself. The pattern...",
            tags: ["Fateless", "Lore", "Research"]
        },
        {
            id: 6,
            chapter: "Ch. 1100-1150",
            badge: "new",
            title: "The Forgotten Shore to Crimson Spire — the journey that made us fall in love with the cohort",
            user: "@prophecy_watch",
            comments: 445,
            likes: 2800,
            content: "Re-reading the Forgotten Shore arc after knowing what happens later hits completely different. Gunlaug's tyranny, the Dark City politics, and then that desperate march to the Crimson Spire where so many people died... this is where the story became legendary.",
            tags: ["Forgotten Shore", "Crimson Spire", "Deep Dive"]
        }
    ],


    // Legacy recaps kept for fallback
    recaps: {
        "1-50": "Sunny is infected by the Nightmare Spell and enters the First Nightmare. He meets Cassie (a blind seer) and Nephis (wielder of a blinding flame). The trio survives deadly trials together. Sunny receives his True Name 'Lost from Light' and the Shadow Slave Aspect — with the Flaw that he cannot lie.",
        "51-100": "After clearing the First Nightmare as Sleepers, the trio is pulled into the Dream Realm and arrives at the Forgotten Shore — a cursed, nightmare-infested wasteland. They reach the Dark City, ruled by the tyrant King Gunlaug from the Bright Castle. Sunny meets Effie and Kai among the survivors.",
        "101-200": "Life in the Dark City under Gunlaug's oppressive rule. Sunny secretly trains his shadow abilities and begins building his first echoes. Political tensions rise between factions within the city. The group learns the only escape lies far across the Forgotten Shore at the Crimson Spire.",
        "201-350": "The cohort leads an expedition to the Crimson Spire to find the gateway home. They fight through the horrors of the Forgotten Shore, including a Fallen Terror guarding the Spire. After immense sacrifice, the group activates the gateway and returns to the waking world as Awakened.",
        "351-600": "Back in the real world, Sunny navigates Awakened society and Great Clan politics (Valor, Song, House of Night). He enters the Chained Isles — floating islands connected by massive chains — seeking exile from clan influence. Morgan (Princess of Valor) appears. Sunny grows his echo army and prepares for the Second Nightmare.",
        "601-900": "Sunny enters the Second Nightmare, facing the Red Colosseum (Ch. 602), Temple of the Chalice (Ch. 666), and the Ivory City siege (Ch. 710). He clears it and achieves Ascended (Master) rank. The clan war between Valor and Song escalates. Nephis rises rapidly through the ranks.",
        "901-1100": "The Antarctica Campaign and the Siege of Falcon Scott. Sunny and the cohort face massive nightmare incursions in the real world. Sunny pushes toward Saint rank through grueling combat. Clan politics reach breaking point.",
        "1101-1250": "Sunny clears the Third Nightmare and achieves Transcendent (Saint) rank. The cohort prepares for the next phase of the journey.",
        "1251-1400": "Sunny and Nephis reunite on a giant black turtle drifting through the Nightmare Desert. They spend a month training and sparring. The cohort regroups at Fallen Grace — a crumbling city-ship on the Great River.",
        "1401-1480": "On Wind Flower Island (Aletheia's Island), the cohort is trapped in a time loop. Sunny experiences 60+ repetitions. Cassie becomes aware of the loops. They discover Wind Flower — a Saint trapped in eternal slumber. The cohort breaks free and departs.",
        "1481-1600": "The cohort navigates the Great River — flowing from future to past. They reach Verge, an ancient Seeker city. At the Estuary, Sunny discovers there were SEVEN gods, not six. The Forgotten God was imprisoned to contain the Void. Around Ch. 1600, Sunny transcends the Nightmare Spell — everyone forgets he existed.",
        "1601-1800": "Post-transcendence. Sunny is erased from all memories and records. He lives in Bastion, opens a café. Effie's son Little Ling is revealed — born as a Saint. Sunny begins laying the groundwork for the Shadow Clan."
    },

    // ── GRANULAR CHAPTER EVENTS DATABASE ──────────────────────────────────────
    // Each event: { ch, type, spoiler(1-3), chars[], text, powerDetail?, loreDetail?, deathDetail?, romanceDetail? }
    // Types: "event" | "powerup" | "lore" | "death" | "romance"
    // spoiler: 1=safe summary, 2=moderate detail, 3=full spoiler
    chapterEvents: [
        // ── CHAPTERS 1-10: AWAKENING ARC ──
        { ch: 1, type: "event", spoiler: 1, chars: ["sunny"], text: "Sunny is transported into the First Nightmare — a deadly parallel world where human souls face trials to become Awakened." },
        { ch: 1, type: "lore", spoiler: 1, chars: [], text: "The Nightmare Spell is revealed: a magical system overlapping reality. Dormant humans are pulled into trials. Survival means gaining power — death means true death.", loreDetail: "Nightmare Spell mechanics, Dormant-to-Sleeper transition, aspects" },
        { ch: 2, type: "powerup", spoiler: 1, chars: ["sunny"], text: "Sunny receives his strange True Name 'Lost from Light' and the Shadow Slave aspect.", powerDetail: "Sunny — Shadow Slave Aspect unlocked. Unique flaw: He cannot lie." },
        { ch: 3, type: "event", spoiler: 1, chars: ["sunny", "cassie"], text: "Sunny encounters Cassie — a blind girl who navigates the nightmare world with preternatural calmness." },
        { ch: 3, type: "lore", spoiler: 1, chars: ["cassie"], text: "Cassie carries the sacred visions, perceiving threads of fate although she is blind to the physical world.", loreDetail: "Seer-type awakened abilities" },
        { ch: 5, type: "event", spoiler: 1, chars: ["sunny", "nephis"], text: "Nephis is introduced — a strikingly powerful girl wielding a silver sword. She takes a commanding role as they face the First Nightmare enemies together." },
        { ch: 5, type: "powerup", spoiler: 1, chars: ["nephis"], text: "Nephis's abilities are revealed: a pure white flame that burns both enemies and heals friends, but causes her excruciating pain.", powerDetail: "Nephis — Light Aspect unlocked. Unusually powerful." },
        { ch: 7, type: "event", spoiler: 1, chars: ["sunny"], text: "Sunny discovers his shadow can move independently and act as a scout, confirming his Aspect has immense utility." },
        { ch: 9, type: "event", spoiler: 2, chars: ["sunny", "nephis"], text: "The trio forms an uneasy alliance to survive the First Nightmare together. Nephis lays down survival rules; Sunny subtly complies but maintains self-reliance." },
        { ch: 10, type: "lore", spoiler: 1, chars: [], text: "The mechanics of the Nightmare are explored: surviving the trial grants them access to the Spell's progression system.", loreDetail: "First Nightmare rules, survival requirement." },

        // ── CHAPTERS 11-50: FIRST NIGHTMARE SURVIVAL ──
        { ch: 15, type: "event", spoiler: 2, chars: ["sunny"], text: "Sunny silently uses his shadow coins to purchase a minor ability from the nightmare shop — confirming his Aspect has real utility, just hidden behind a currency mechanic." },
        { ch: 20, type: "powerup", spoiler: 2, chars: ["sunny"], text: "Sunny acquires his first Echo — a shadowy copy of a defeated nightmare creature he can summon. This reveals the true nature of the Cursed Aspect: an army-builder.", powerDetail: "Sunny — First Echo acquired. Echo System revealed: shadow copies of defeated nightmare creatures that answer only to Sunny." },
        { ch: 20, type: "lore", spoiler: 2, chars: ["sunny"], text: "The Echo System is revealed: most Awakened cannot collect echoes. Sunny's Cursed Aspect uniquely allows it, making him a potential commander of shadow armies.", loreDetail: "Echo System — exclusive to Sunny's Cursed Aspect. Echoes are shadow-bound copies of nightmare creatures." },
        { ch: 28, type: "event", spoiler: 2, chars: ["sunny", "nephis", "cassie"], text: "A massive nightmare creature ambushes the group. The trio cooperates in a desperate defensive stand to survive the winter." },
        { ch: 35, type: "event", spoiler: 2, chars: ["sunny", "nephis"], text: "Sunny uses his wits to handle a nightmare threat while concealing his true nature from Nephis. Their dynamic tension deepens." },
        { ch: 40, type: "romance", spoiler: 3, chars: ["sunny", "nephis"], text: "A quiet moment between Sunny and Nephis during a rest period — a flicker of personal connection amidst the deadly mountain." },
        { ch: 50, type: "event", spoiler: 1, chars: ["sunny", "nephis", "cassie"], text: "The trio clears the First Nightmare and enters the Dream Realm as Sleepers. They arrive at the Forgotten Shore — a cursed wasteland from which no one has ever returned." },
        { ch: 50, type: "powerup", spoiler: 1, chars: ["sunny", "nephis", "cassie"], text: "All three gain their Aspects and Flaws. Sunny's Shadow Aspect and his Flaw (cannot lie) are now active.", powerDetail: "First Nightmare cleared. Sleeper status achieved. Destination: Dream Realm — Forgotten Shore." },

        // ── CHAPTERS 51-200: FORGOTTEN SHORE — DARK CITY ARC ──
        { ch: 55, type: "event", spoiler: 1, chars: ["sunny", "nephis", "cassie"], text: "The trio arrives at the Dark City — a crumbling settlement built on the edge of a massive crater on the Forgotten Shore. They discover a society of survivors ruled by King Gunlaug from the Bright Castle." },
        { ch: 60, type: "event", spoiler: 2, chars: ["sunny", "effie"], text: "Sunny meets Effie — a towering warrior with an iron will and near-limitless endurance. She becomes one of his most reliable combat companions." },
        { ch: 65, type: "lore", spoiler: 1, chars: [], text: "The Dark City's structure is revealed: King Gunlaug maintains order through fear and control of resources. Survivors are trapped with no way back to the waking world.", loreDetail: "Dark City: ruled by King Gunlaug. Bright Castle is the seat of power. No escape route known except the Crimson Spire." },
        { ch: 75, type: "event", spoiler: 2, chars: ["sunny"], text: "Sunny begins secretly training his Shadow Aspect and acquiring his first echoes — shadow copies of defeated nightmare creatures that only he can summon." },
        { ch: 80, type: "powerup", spoiler: 2, chars: ["sunny"], text: "Sunny acquires his first Echo — confirming his Cursed Aspect's unique army-building ability.", powerDetail: "Sunny — First Echo acquired. Echo System: shadow-bound copies of nightmare creatures." },
        { ch: 85, type: "event", spoiler: 2, chars: ["sunny", "kai"], text: "Sunny encounters Kai — a calm, calculating former idol turned archer. Kai's tactical mind makes him an invaluable addition to the group." },
        { ch: 100, type: "lore", spoiler: 2, chars: [], text: "The cohort learns about the Crimson Spire — a colossal tower at the far edge of the Forgotten Shore rumored to house a gateway back to the waking world.", loreDetail: "Crimson Spire: only known exit from the Forgotten Shore. Guarded by a Fallen Terror." },
        { ch: 120, type: "event", spoiler: 2, chars: ["sunny", "nephis"], text: "Tensions rise in the Dark City. Sunny navigates the brutal politics between Gunlaug's loyalists and the growing resistance, while secretly growing his shadow army." },
        { ch: 150, type: "event", spoiler: 2, chars: ["sunny", "nephis", "cassie", "effie", "kai"], text: "The cohort solidifies — Sunny, Nephis, Cassie, Effie, and Kai form a core group united by survival. They begin planning the expedition to the Crimson Spire." },
        { ch: 180, type: "powerup", spoiler: 2, chars: ["sunny"], text: "Sunny's echo army grows in the shadows of the Dark City. He trains relentlessly while hiding his true power level.", powerDetail: "Sunny — Echo army expanding. Shadow Aspect developing offensive capabilities." },

        // ── CHAPTERS 201-350: CRIMSON SPIRE EXPEDITION ──
        { ch: 210, type: "event", spoiler: 2, chars: ["sunny", "nephis", "cassie", "effie", "kai"], text: "The cohort leads an expedition from the Dark City toward the Crimson Spire. They traverse the most dangerous stretches of the Forgotten Shore." },
        { ch: 250, type: "event", spoiler: 2, chars: ["sunny"], text: "The expedition faces nightmare creatures of escalating power. Multiple survivors fall during the journey. Sunny uses his echo army strategically to protect the group." },
        { ch: 280, type: "death", spoiler: 3, chars: [], text: "Several members of the expedition are killed by nightmare creatures during the march toward the Crimson Spire.", deathDetail: "Multiple survivors lost during the Crimson Spire expedition." },
        { ch: 300, type: "event", spoiler: 2, chars: ["nephis"], text: "Nephis's flame Aspect grows stronger as the group faces more dangerous threats. Her leadership holds the expedition together during the darkest moments." },
        { ch: 330, type: "event", spoiler: 3, chars: ["sunny", "nephis", "cassie", "effie", "kai"], text: "The cohort reaches the Crimson Spire and confronts a Fallen Terror guarding the gateway. After a devastating battle with immense sacrifices, they activate the gateway." },
        { ch: 350, type: "event", spoiler: 1, chars: ["sunny", "nephis", "cassie", "effie", "kai"], text: "The survivors pass through the gateway and return to the waking world as Awakened. The Forgotten Shore arc ends." },
        { ch: 350, type: "powerup", spoiler: 1, chars: ["sunny", "nephis", "cassie", "effie", "kai"], text: "The entire cohort achieves Awakened rank upon returning to the real world.", powerDetail: "Awakened rank achieved. Aspects fully activated. Access to the waking world restored." },

        // ── CHAPTERS 351-600: WAKING WORLD & CHAINED ISLES ──
        { ch: 360, type: "lore", spoiler: 1, chars: [], text: "Awakened society is revealed — dominated by the Great Clans: Clan Valor (War God lineage), Clan Song (Beast God lineage), House of Night (Storm God lineage), and Immortal Flame Clan (Sun God lineage).", loreDetail: "Great Clans: Valor, Song, House of Night, Immortal Flame. Each tied to a divine lineage." },
        { ch: 380, type: "event", spoiler: 2, chars: ["sunny"], text: "Sunny struggles to fit into Awakened society. Seeking freedom from clan politics, he takes refuge in the Chained Isles — floating islands connected by massive chains at the edge of the Dream Realm." },
        { ch: 400, type: "event", spoiler: 2, chars: ["morgans"], text: "Morgan, Princess of Clan Valor, makes her first significant appearance in the Chained Isles. Her Blade Aspect makes her a lethal combatant — capable of cutting through almost anything." },
        { ch: 420, type: "lore", spoiler: 2, chars: [], text: "The Chained Isles' dangers are explored: the 'Crushing' phenomenon creates intense pressure as islands ascend. Powerful nightmare creatures inhabit the upper reaches.", loreDetail: "Chained Isles: floating islands, connected by chains. Crushing phenomenon. Under Clan Valor's nominal protection." },
        { ch: 450, type: "powerup", spoiler: 2, chars: ["sunny"], text: "Sunny's echo army grows significantly during his time in the Chained Isles. His Shadow Aspect develops new offensive capabilities.", powerDetail: "Sunny — Echo army expanding. Shadow combat techniques evolving." },
        { ch: 500, type: "event", spoiler: 2, chars: ["sunny", "nephis"], text: "Nephis continues her rapid rise through the ranks. The tension between Clan Valor and Clan Song begins to escalate, drawing all Awakened into the growing conflict." },
        { ch: 550, type: "event", spoiler: 2, chars: ["sunny"], text: "Sunny prepares for the Second Nightmare — the trial required to advance from Awakened to Ascended (Master) rank. The stakes are life or death." },
        { ch: 580, type: "lore", spoiler: 2, chars: [], text: "The Second Nightmare's structure is explored: unlike the First Nightmare which is universal, the Second Nightmare is personalized — each Awakened faces unique trials based on their Aspect.", loreDetail: "Second Nightmare: personalized trial. Survival = Master rank. Death = permanent." },

        // ── CHAPTERS 601-900: SECOND NIGHTMARE & MASTER RANK ──
        { ch: 602, type: "event", spoiler: 2, chars: ["sunny"], text: "Sunny enters the Second Nightmare. His first trial is the Red Colosseum — a brutal gladiatorial arena where he must fight increasingly powerful opponents." },
        { ch: 624, type: "event", spoiler: 2, chars: ["sunny"], text: "Sunny survives the Red Colosseum through a combination of shadow army tactics and cunning strategy rather than brute force." },
        { ch: 666, type: "event", spoiler: 2, chars: ["sunny"], text: "The Temple of the Chalice — a mid-Nightmare trial that tests Sunny's resolve and understanding of his Aspect's true nature." },
        { ch: 677, type: "event", spoiler: 2, chars: ["sunny"], text: "Sunny emerges from the Temple of the Chalice having gained deeper insight into his Shadow Aspect. His control over his echoes becomes more refined." },
        { ch: 710, type: "event", spoiler: 2, chars: ["sunny"], text: "The Ivory City siege begins — the final phase of Sunny's Second Nightmare. He must survive a massive conflict within a crumbling ancient city." },
        { ch: 742, type: "event", spoiler: 2, chars: ["sunny"], text: "Sunny clears the Second Nightmare and achieves Ascended (Master) rank. He can now travel freely between the Dream Realm and the waking world." },
        { ch: 742, type: "powerup", spoiler: 1, chars: ["sunny"], text: "Sunny achieves Master rank. His Shadow Aspect undergoes a significant evolution.", powerDetail: "Sunny — Ascended (Master) rank achieved. Second Nightmare cleared. Free travel between Dream Realm and waking world unlocked." },
        { ch: 800, type: "event", spoiler: 2, chars: ["nephis", "cassie", "effie", "kai"], text: "The cohort members advance through their own paths. The clan war between Valor and Song intensifies, threatening to engulf all of Awakened humanity." },
        { ch: 850, type: "lore", spoiler: 2, chars: [], text: "The political landscape is explored: Clan Valor (led by Anvil of Valor) and Clan Song (led by Ki Song) prepare for an inevitable confrontation. Neutral parties scramble to survive.", loreDetail: "Clan War approaching: Valor vs Song. Both Sovereigns are preparing forces." },
        { ch: 900, type: "event", spoiler: 2, chars: ["sunny"], text: "As a Master, Sunny operates with greater freedom. His echo army has grown substantially, and his true combat capability far exceeds his apparent rank." },

        // ── CHAPTERS 901-1100: ANTARCTICA CAMPAIGN ──
        { ch: 920, type: "event", spoiler: 2, chars: ["sunny", "cassie", "effie", "jet"], text: "The Antarctica Campaign begins — a massive military operation against nightmare creature incursions in the real world. Sunny and the cohort are deployed to the frontlines." },
        { ch: 950, type: "event", spoiler: 2, chars: ["sunny"], text: "The Siege of Falcon Scott — a desperate defense against overwhelming nightmare creature forces in Antarctica. Sunny pushes his Shadow Aspect to its limits evacuating civilians." },
        { ch: 980, type: "death", spoiler: 3, chars: [], text: "Heavy casualties during the Antarctica Campaign. The nightmare incursions prove more devastating than anticipated.", deathDetail: "Significant losses during the Antarctica Campaign and Siege of Falcon Scott." },
        { ch: 1000, type: "event", spoiler: 2, chars: ["sunny"], text: "Sunny's performance during the Antarctica Campaign draws attention from both Clan Valor and Clan Song. His hidden power becomes harder to conceal." },
        { ch: 1050, type: "lore", spoiler: 2, chars: [], text: "The clan conflict between Valor and Song reaches breaking point. The Antarctica Campaign reveals the fragility of human civilization against nightmare threats.", loreDetail: "Clan War escalation: Valor vs Song. Antarctica Campaign exposed humanity's vulnerability." },
        { ch: 1100, type: "event", spoiler: 2, chars: ["sunny"], text: "The Antarctica Campaign concludes. Sunny emerges hardened and ready for the next threshold — the Third Nightmare, which will push him to Saint rank." },

        // ── CHAPTERS 1101-1250: THIRD NIGHTMARE & SAINT RANK ──
        { ch: 1110, type: "event", spoiler: 2, chars: ["sunny"], text: "Sunny enters the Third Nightmare — the trial required to advance from Master to Transcendent (Saint) rank. The challenges eclipse anything he has faced before." },
        { ch: 1150, type: "powerup", spoiler: 2, chars: ["sunny"], text: "Sunny achieves Transcendent (Saint) rank. His Shadow Aspect undergoes a fundamental transformation — the shadows become semi-real, able to affect the physical world directly.", powerDetail: "Sunny — Transcendent (Saint) rank achieved. Third Nightmare cleared. Shadow Aspect: shadows gain physical mass." },
        { ch: 1200, type: "event", spoiler: 2, chars: ["sunny", "nephis", "cassie", "effie"], text: "As Saints, the cohort operates at near-mythical levels. The political tension between Valor and Song continues to dominate the landscape." },
        { ch: 1250, type: "event", spoiler: 2, chars: ["sunny"], text: "Sunny's echo army continues to grow. He begins preparing for the next phase of the journey, knowing danger lies ahead." },

        // ── CHAPTERS 1251-1400: NIGHTMARE DESERT & FALLEN GRACE ──
        { ch: 1251, type: "event", spoiler: 2, chars: ["sunny", "nephis"], text: "Sunny and Nephis reunite on the shell of a giant black turtle drifting through the Nightmare Desert. After months of separation, their meeting is tense but quickly settles into familiar patterns." },
        { ch: 1255, type: "lore", spoiler: 2, chars: [], text: "The Nightmare Desert is revealed to be a zone where space itself is fragmented. Traveling in a straight line is impossible without falling into spatial tears.", loreDetail: "Nightmare Desert: space is fractured. The giant black turtle naturally navigates spatial anomalies." },
        { ch: 1258, type: "romance", spoiler: 2, chars: ["sunny", "nephis"], text: "A quiet moment of vulnerability: Nephis tends to a severe wound Sunny sustained before they met. There's an unspoken relief in their reunion, even without memories on her part.", romanceDetail: "Nephis subconsciously relies on Sunny, proving her soul remembers him even if her mind doesn't." },
        { ch: 1260, type: "event", spoiler: 2, chars: ["sunny", "nephis"], text: "Over a month on the turtle, Sunny and Nephis train intensively — sparring, sharing meals, and uncovering mythological truths. Nephis reveals her disdain for authority and the gods through the tale of Heracles." },
        { ch: 1260, type: "lore", spoiler: 2, chars: ["sunny", "nephis"], text: "Deep lore revelations on the turtle: the Seven Suns are believed to be divine soul shards. The Great River's connection to the Tomb of Ariel, a daemon, an Unholy Titan, and the Black Pyramid is established.", loreDetail: "Seven Suns = divine soul shards. Great River flows through the Black Pyramid. Connected to an Unholy Titan's blood." },
        { ch: 1270, type: "powerup", spoiler: 2, chars: ["nephis"], text: "Nephis's flame aspect evolves once more in the desert — adapting to the brutal heat, she forms a permanent mantle of heat distortion.", powerDetail: "Nephis — Flame Aspect: Desert Adaptation. Generates 'Desert Flame Mantle', providing immunity to extreme environmental heat." },
        { ch: 1286, type: "event", spoiler: 2, chars: ["sunny", "nephis", "cassie"], text: "The cohort reaches Fallen Grace — a crumbling city-ship flotilla on the Great River. Buildings of white stone with crimson fabric sails. Once grand, now a wilting flower with desolate streets." },
        { ch: 1300, type: "event", spoiler: 2, chars: ["sunny"], text: "Sunny explores Fallen Grace's underbelly, discovering factions of Awakened who have given up on conquering the Nightmare and settled into a grim survival routine." },
        { ch: 1320, type: "lore", spoiler: 2, chars: ["cassie"], text: "Cassie uncovers the history of the Sybils of Fallen Grace — seers who slowly went mad trying to chart the Great River's temporal anomalies.", loreDetail: "Sybils of Fallen Grace: oracle class Awakened driven insane by the River of Time's paradoxes." },
        { ch: 1355, type: "event", spoiler: 2, chars: ["sunny", "cassie", "effie", "jet"], text: "At Fallen Grace, Jet and Effie rejoin the cohort. The full group is assembled for the first time since the Tomb of Ariel. Dusk, the last sybil of Fallen Grace, provides critical intelligence." },
        { ch: 1360, type: "romance", spoiler: 3, chars: ["effie"], text: "Effie casually reveals she has found a partner during her time separated from the group. The cohort is stunned by her casual approach to relationships mid-nightmare.", romanceDetail: "Effie reveals she has a partner. Adds levity to the grim Fallen Grace arc." },
        { ch: 1380, type: "event", spoiler: 2, chars: ["sunny", "jet"], text: "Jet and Sunny execute a coordinated strike against a Corrupted-rank river beast threatening the flotilla, showcasing their seamless tactical synergy." },
        { ch: 1398, type: "event", spoiler: 2, chars: ["sunny", "nephis", "cassie"], text: "The cohort arrives at Wind Flower Island — a mysterious island on the Great River. Immediately, time begins to loop. Sunny experiences the same day repeating, with no one else initially aware." },
        { ch: 1398, type: "lore", spoiler: 2, chars: [], text: "Wind Flower Island was originally known as Aletheia's Island, created by a powerful Seeker. A Saint named Wind Flower is trapped in eternal slumber here due to a seed of corruption.", loreDetail: "Aletheia's Island = Wind Flower Island. Contains a Seeker's tower. Wind Flower (Saint) trapped by corruption seed." },

        // ── CHAPTERS 1401-1480: TIME LOOP ARC ──
        { ch: 1405, type: "death", spoiler: 3, chars: ["sunny", "effie", "jet"], text: "In an early time loop, the entire cohort is massacred by a hidden defensive mechanism on the island. Sunny retains the traumatic memory of their deaths when the loop resets.", deathDetail: "First total party kill (reverted by loop). Establishes the extreme lethality of Wind Flower Island's defenses." },
        { ch: 1410, type: "event", spoiler: 2, chars: ["sunny", "nephis"], text: "Sunny attempts to explain the time loop to Nephis. Her initial distrust (due to memory loss) fades when he accurately predicts a series of impossibly specific events." },
        { ch: 1423, type: "event", spoiler: 2, chars: ["sunny"], text: "Sunny has now experienced approximately thirty time loops on Wind Flower Island. Each repetition allows him to gather more information and sharpen his combat techniques." },
        { ch: 1430, type: "powerup", spoiler: 2, chars: ["sunny"], text: "Through brutal repetition in the time loop, Sunny masters a new application of Shadow Step — moving through spatial micro-tears instantaneously.", powerDetail: "Sunny — Shadow Step mastery. Can now teleport through micro-shadows instantly using spatial distortion awareness." },
        { ch: 1436, type: "event", spoiler: 2, chars: ["cassie"], text: "Cassie begins to realize they are trapped in a time loop. Her Prophecy Aspect allows her to perceive the temporal anomaly differently — she senses the 'threads' doubling and re-weaving." },
        { ch: 1443, type: "lore", spoiler: 2, chars: ["sunny", "cassie"], text: "It is revealed that the island was once known as Aletheia's Island. Sunny and Cassie discover the entrance to Aletheia's Tower — a structure holding deeper secrets about the Mad Prince.", loreDetail: "Aletheia's Tower discovered on the island. Connected to Mad Prince lore. Takes multiple additional loops to enter." },
        { ch: 1450, type: "lore", spoiler: 3, chars: ["sunny"], text: "The identity of the Mad Prince is hinted heavily — an alternate, corrupted future version of Sunny himself, driven insane by countless time loops and the Sin of Solace.", loreDetail: "Mad Prince: revealed to be a corrupted, future timeline iteration of Sunny." },
        { ch: 1460, type: "romance", spoiler: 3, chars: ["sunny", "nephis"], text: "During a loop they both know will reset, Sunny and Nephis share a profound, unguarded conversation about their fears. It is erased by the reset, but Sunny remembers.", romanceDetail: "A beautiful, doomed moment of connection inside the loop. Sunny carries the emotional weight alone after the reset." },
        { ch: 1466, type: "event", spoiler: 2, chars: ["sunny", "nephis", "cassie"], text: "The time loop finally breaks. Sunny sacrifices a massive amount of accumulated shadow fragments to shatter the core mechanism. The cohort escapes temporal prison." },
        { ch: 1480, type: "event", spoiler: 1, chars: ["sunny", "nephis", "cassie", "effie", "jet"], text: "The full cohort departs Wind Flower Island aboard the Chain Breaker. They set course down the Great River — a treacherous path flowing from the future into the past, toward the Estuary." },

        // ── CHAPTERS 1481-1600: GREAT RIVER & ESTUARY ──
        { ch: 1487, type: "lore", spoiler: 2, chars: ["sunny"], text: "The Source of the Great River is examined — the river flows endlessly from the future into the past, existing entirely outside normal time. It is connected to the blood of an Unholy Titan.", loreDetail: "Great River (River of Time): flows future → past. Blood of an Unholy Titan. Inside the Black Pyramid." },
        { ch: 1500, type: "event", spoiler: 2, chars: ["effie", "jet"], text: "The Chain Breaker is attacked by a Great-rank river leviathan. Effie and Jet tag-team the beast in a spectacular display of Master and Ascended combat synergy." },
        { ch: 1515, type: "powerup", spoiler: 2, chars: ["cassie"], text: "Cassie's temporal perception solidifies. She can now reliably 'read' the immediate past and future of objects touching the Great River's water.", powerDetail: "Cassie — Temporal Reading capability unlocked. Can view 24-hour history/future of localized objects." },
        { ch: 1530, type: "event", spoiler: 2, chars: ["sunny", "nephis", "cassie"], text: "The cohort reaches Verge — an ancient city built by Seekers near the beginning of time. The architecture is alien and impossibly old. This is the staging ground for reaching the Estuary." },
        { ch: 1545, type: "death", spoiler: 3, chars: ["jet"], text: "A tragic reveal: Jet's soul condition worsens drastically near the Estuary. We learn her true status — she died years ago during her First Nightmare, and her Aspect has been puppeteering her corpse ever since.", deathDetail: "Jet's secret revealed: she is technically undead. Her soul constantly bleeds out, requiring constant nightmare essence to animate her body." },
        { ch: 1560, type: "event", spoiler: 3, chars: ["sunny", "nephis"], text: "As the group approaches the Estuary, the psychological pressure of the void begins fracturing their minds. Sunny uses the Sin of Solace's madness to counteract the Estuary's mind-wiping effects." },
        { ch: 1570, type: "lore", spoiler: 3, chars: ["sunny"], text: "At the Estuary, the truth is revealed: there were not six but SEVEN gods — Sun God, War God, Storm God, Beast God, Heart God, Shadow God, and the Forgotten God. The other six imprisoned the Seventh to contain the Void.", loreDetail: "SEVEN GODS revealed: Sun, War, Storm, Beast, Heart, Shadow, Forgotten. The Forgotten God was imprisoned to contain the Void." },
        { ch: 1571, type: "lore", spoiler: 3, chars: ["sunny"], text: "The Seventh God's imprisonment created the universal law of imperfection — every Awakened's 'Flaw' traces back to this act. The daemons, including Ariel, were born from the Forgotten God's fractured soul.", loreDetail: "Universal Flaw origin: Seventh God's imprisonment. Daemons = fragments of the Forgotten God's soul. Ariel was one such daemon." },
        { ch: 1579, type: "event", spoiler: 3, chars: ["sunny", "cassie"], text: "The Estuary journey concludes. Sunny emerges with knowledge that fundamentally changes his understanding of Awakened existence. The Chapter is titled 'Forgotten' — foreshadowing his own fate." },
        { ch: 1600, type: "event", spoiler: 3, chars: ["sunny"], text: "Sunny transcends the Nightmare Spell. He severs his Fate. The consequence is devastating: everyone forgets he ever existed. Nephis, Cassie, Effie, Kai — all lose their memories of him. His citizenship is revoked, his records erased. He is truly alone." },
        { ch: 1600, type: "lore", spoiler: 3, chars: ["sunny"], text: "Transcendence mechanics revealed: when someone transcends the Spell, they are erased from collective memory and official records. The world adjusts to their absence. Sunny can no longer summon Spell-related memories but retains personally created ones.", loreDetail: "Spell Transcendence: Fate severed. Memory erasure from all, records deleted. Cannot summon Spell memories (inventory wiped). Retains only what his soul holds." },

        // ── CHAPTERS 1601-1800: POST-TRANSCENDENCE ──
        { ch: 1605, type: "event", spoiler: 3, chars: ["effie"], text: "Chapter 1600 ('Beast Farm') reveals Effie's life post-transcendence: she manages a farm within her Supreme Memory. Her son, Little Ling, is a child born as a Saint — with Transcendent-level power — causing delightful chaos." },
        { ch: 1620, type: "event", spoiler: 2, chars: ["sunny"], text: "Sunny, now operating completely outside the system as a 'Nameless' Saint, begins adopting a new persona: The Lord of Shadows. He builds a citadel in the Nightmare Realm." },
        { ch: 1650, type: "event", spoiler: 2, chars: ["sunny", "nephis"], text: "The Lord of Shadows (Sunny in disguise) meets Nephis on a battlefield. She does not recognize him, but is intrigued by his overwhelming power and strange familiarity." },
        { ch: 1675, type: "romance", spoiler: 3, chars: ["sunny", "nephis"], text: "Operating under his Lord of Shadows persona, Sunny flirts dangerously with Nephis. Nephis, ironically, begins developing feelings for this 'new' mysterious Saint, unaware it's Sunny.", romanceDetail: "Nephis falling for the Lord of Shadows (Sunny). A tragic, comedic, and deeply romantic irony." },
        { ch: 1700, type: "event", spoiler: 3, chars: ["sunny"], text: "Sunny operates from Bastion, where he opens a mundane café. He brushes shoulders with former cohort members who no longer recognize him — a profound and ironic form of freedom. He watches them from afar." },
        { ch: 1730, type: "powerup", spoiler: 2, chars: ["sunny"], text: "Sunny's shadow mastery reaches a new zenith. Without the Spell dictating his abilities, he learns to weave essence directly, creating his own Memories and Items from scratch.", powerDetail: "Sunny — Weaver's Lineage activated fully. Can now forge bespoke Memories and weave shadow essence into physical reality." },
        { ch: 1760, type: "lore", spoiler: 2, chars: [], text: "The political landscape has shifted dramatically in the years since transcendence. The Sovereigns of Valor and Song are preparing for an all-out war that will tear the human domains apart.", loreDetail: "Clan War brewing: Valor vs Song. Sovereigns preparing for direct conflict. The neutral zone is shrinking." },
        { ch: 1800, type: "event", spoiler: 3, chars: ["sunny"], text: "Sunny revisits the Black Mountain and a ruined temple — locations tied to his past as a slave during the First Nightmare. This moment of reflection marks a confrontation with his origins and sets the stage for the Shadow Clan's founding." },
    ],

    // ── CHARACTER INVENTORY DATABASE ──────────────────────────────────────────
    // slot: "weapon" | "offhand" | "armor" | "cloak" | "accessory" | "special"
    // rarity: "common" | "uncommon" | "rare" | "legendary" | "mythic"
    inventoryItems: {

        sunny: [
            {
                id: "s1", name: "Rusted Shiv",
                image: 'assets/items/rusted_shiv.png', slot: "weapon", ch: 1, rarity: "common", emoji: "🗡️", color: "#888", desc: "A crude blade scavenged on the first night of the First Nightmare. Sunny's first real weapon — barely sharp, but kept him alive.", stat: "ATK +5 | Durability: Low"
            },
            {
                id: "s2", name: "Shadow Coin Pouch",
                image: 'assets/items/shadow_coin_pouch.png', slot: "accessory", ch: 2, rarity: "uncommon", emoji: "💰", color: "#FFD700", desc: "The tangible manifestation of the Cursed Aspect. Shadow coins are Sunny's true currency — each one grants a choice instead of a power.", stat: "Aspect Resource | Regenerates in Nightmare"
            },
            {
                id: "s3", name: "Nightmare Leather Garb",
                image: 'assets/items/nightmare_leather_garb.png', slot: "armor", ch: 5, rarity: "common", emoji: "🧥", color: "#4A4A6A", desc: "Crude armor crafted from nightmare creature hide during the First Nightmare survival arc. It absorbed several fatal blows.", stat: "DEF +8 | Nightmare Resistance: Low"
            },
            {
                id: "s13", name: "Weaver's Mask",
                image: 'assets/items/weavers_mask.png', slot: "accessory", ch: 30, rarity: "legendary", emoji: "👺", color: "#2D0A3A", desc: "Sunny's most critical non-combat tool — crafted from black lacquered wood resembling a ferocious demon with three twisted horns and four protruding fangs. Anyone looking at him through the mask sees only a Dormant with no power.", stat: "Power Concealment: 100% | Rank Hidden | Aura: Dormant-level"
            },
            {
                id: "s4", name: "Iron Nightmare Blade",
                image: 'assets/items/iron_nightmare_blade.png', slot: "weapon", ch: 50, rarity: "uncommon", emoji: "⚔️", color: "#7CA9C4", desc: "A solid weapon claimed after surviving the First Nightmare exit trial. Forged in nightmare iron — heavier than it looks, holds an edge.", stat: "ATK +22 | Durability: High | Nightmare-Iron"
            },
            {
                id: "s5", name: "Shadow Cloak",
                image: 'assets/items/shadow_cloak.png', slot: "cloak", ch: 60, rarity: "rare", emoji: "🌑", color: "#1A1A3A", desc: "A cloak woven from condensed shadow essence — the first physical manifestation of Sunny's growing shadow aspect outside of combat.", stat: "Stealth +30 | Shadow Sense enabled | Visual concealment"
            },
            {
                id: "s14", name: "Bone Nightmare Pauldrons",
                image: 'assets/items/bone_pauldrons.png', slot: "armor", ch: 70, rarity: "rare", emoji: "🦴", color: "#5A4A3A", desc: "Shoulder guards crafted from the bones of a Master-rank nightmare creature. They harden Sunny's upper body against slashing attacks.", stat: "DEF +28 | Slash Resistance | Master-Bone: reduces pain"
            },
            {
                id: "s6", name: "Shade's Binding",
                image: 'assets/items/shades_binding.png', slot: "offhand", ch: 80, rarity: "rare", emoji: "👁️", color: "#C41E3A", desc: "The first echo — 'Shade' — bound to Sunny's will. Not held physically, but worn as a dark aura around the off-hand that extends into shadow.", stat: "Summons Shade | Echo Control I | Shadow Perception"
            },
            {
                id: "s15", name: "Echo Whisper",
                image: 'assets/items/echo_whisper.png', slot: "special", ch: 100, rarity: "rare", emoji: "🌀", color: "#3A1A5A", desc: "An ability crystallized from Sunny's aspect — allows him to hear through any echo's senses regardless of distance. Critical for reconnaissance.", stat: "Echo Perception | Range: Unlimited | Sensory Link: all echoes"
            },
            {
                id: "s7", name: "Veil of Shadow",
                image: 'assets/items/veil_of_shadow.png', slot: "cloak", ch: 180, rarity: "legendary", emoji: "🌒", color: "#6B21A8", desc: "A deeper manifestation of the shadow cloak — fully able to bend light around Sunny, rendering him practically invisible in darkness.", stat: "Stealth +75 | True Concealment | Shadow Walk I"
            },
            {
                id: "s16", name: "Carapace of Night",
                image: 'assets/items/carapace_of_night.png', slot: "armor", ch: 220, rarity: "legendary", emoji: "🛡️", color: "#1A0A2E", desc: "Full-body armor grown from hardened shadow mass — not manufactured but manifested. It repairs itself by consuming nearby shadows.", stat: "DEF +50 | Self-Repair | Shadow Absorption: 25% dmg"
            },
            { id: "s8", name: "Echo Commander's Seal", slot: "accessory", ch: 300, rarity: "legendary", image: 'assets/items/echo_commanders_seal.png', color: "#C41E3A", desc: "The crescent sigil that appears on Sunny's palm as his echo army exceeds 25. Commands coordinated tactical formation attacks.", stat: "Echo Command +25 | Formation Tactics | Shadow Sync" },
            { id: "s17", name: "Thorn of Nightmare", slot: "weapon", ch: 380, rarity: "legendary", image: 'assets/items/thorn_of_nightmare.png', color: "#2A0A4A", desc: "A slim shadow-blade that grows from Sunny's forearm on command — functionally a part of his body. Cuts nightmare essence cleanly.", stat: "ATK +60 | Bodypart Weapon | Nightmare Sever | No Disarm" },
            { id: "s9", name: "Shadow Aspect Armor", slot: "armor", ch: 420, rarity: "legendary", image: 'assets/items/shadow_aspect_armor.png', color: "#1A0A2E", desc: "Armor that does not exist in the waking world — manifested fully from shadow mass upon reaching Awakened rank. Absorbs non-light damage.", stat: "DEF +65 | Shadow Absorption | Rank: Awakened" },
            {
                id: "s18", name: "Dream Ring — Nightmare Heart",
                image: 'assets/items/dream_ring.png', slot: "accessory", ch: 450, rarity: "mythic", emoji: "💍", color: "#8B0050", desc: "A crystallized nightmare heart worn as a ring — it pulses with dream energy and amplifies Sunny's aspect in the nightmare realm by 40%.", stat: "Nightmare ATK/DEF +40% | Dream Anchor | Anti-Wake"
            },
            { id: "s10", name: "Blade of Severed Light", slot: "weapon", ch: 500, rarity: "legendary", image: 'assets/items/blade_of_severed_light.png', color: "#4B0082", desc: "A shadow-forged blade that cuts both physical matter and nightmare essence. The edge is visible only to those with nightmare perception.", stat: "ATK +80 | Essence Cut | Ignores 40% armor" },
            {
                id: "s19", name: "Nameless Fragment — The Dreamless",
                image: 'assets/items/nameless_fragment.png', slot: "special", ch: 600, rarity: "mythic", emoji: "⬛", color: "#0A0004", desc: "An aspect of Sunny's identity crystallized as an object — the Dreamless nature. He is the only Awakened who does not dream, which makes him invisible to certain nightmare detection systems.", stat: "Dream Invisibility | Nightmare Detection: immune | Dreamless State"
            },
            {
                id: "s11", name: "Shadow General's Mantle",
                image: 'assets/items/shadow_general_mantle.png', slot: "cloak", ch: 750, rarity: "mythic", emoji: "🌑", color: "#3D0066", desc: "The 'general-tier' echo army signifier — a living cloak of shadows that responds to battlefield commands autonomously. Extremely rare.", stat: "Echo Command +73 | Auto-Formation | Master Rank Req."
            },
            {
                id: "s12", name: "Sovereign's Shadow Seal",
                image: 'assets/items/sovereign_shadow_seal.png', slot: "special", ch: 900, rarity: "mythic", emoji: "☾", color: "#0A0014", desc: "The absolute manifestation of Sunny's Master-rank shadow aspect. A seal that can create shadow territory — a domain where all light is consumed.", stat: "Shadow Territory | Domain: 200m | Master Rank"
            },
            { id: "s20", name: "Saint-Rank Shadow Core", image: 'assets/items/saint_rank_shadow_core.png', slot: "special", ch: 1150, rarity: "mythic", emoji: "⬛", color: "#0A001A", desc: "The manifestation of Sunny's Saint-rank shadow aspect — shadows become semi-real, able to affect the physical world directly. This core pulses with the weight of a hundred echoes.", stat: "Shadow Mass +200% | Physical Density | Echo Sync: 100 shadows" },
            { id: "s21", name: "Chain Breaker Compass", image: 'assets/items/chain_breaker_compass.png', slot: "accessory", ch: 1480, rarity: "mythic", emoji: "🧭", color: "#0EA5E9", desc: "Navigational instrument from the Chain Breaker — the ship that carried the cohort down the Great River. It points not toward north, but toward the Estuary: the mouth of time itself.", stat: "Navigation: Great River | Temporal Read | Anti-Vortex" },
            { id: "s22", name: "The Forgotten Seal", image: 'assets/items/the_forgotten_seal.png', slot: "special", ch: 1600, rarity: "mythic", emoji: "🕳️", color: "#000000", desc: "After transcending the Spell, this seal appeared on Sunny's soul — invisible to everyone because no one remembers he exists. It represents his freedom from the Spell and his complete isolation from humanity.", stat: "Spell Transcendence | Memory Erasure: global | Outside the Spell" },
        ],

        nephis: [
            { id: "n1", name: "Memory Clan Robe", slot: "armor", ch: 5, rarity: "uncommon", image: 'assets/items/memory_clan_robe.png', color: "#C8A882", desc: "Nephis arrived in the First Nightmare wearing her clan's ceremonial robes — woven with memory-enchanted thread. Elegant despite the battlefield.", stat: "DEF +6 | Memory Resistance | Clan Heritage" },
            { id: "n2", name: "Flame Edge Dagger", slot: "weapon", ch: 5, rarity: "uncommon", image: 'assets/items/flame_edge_dagger.png', color: "#FF6B00", desc: "Nephis's primary sidearm through the early arcs — a dagger that ignites with her flame aspect on contact. Precise, controlled, devastating.", stat: "ATK +18 | Flame Edge: Burns on strike | Fast Draw" },
            { id: "n3", name: "Flame Aspect Bracer", slot: "accessory", ch: 10, rarity: "rare", image: 'assets/items/flame_aspect_bracer.png', color: "#FF8C00", desc: "Bracers that channel Nephis's flame aspect — allowing sustained flame projection without scorching her own hands.", stat: "Flame Control +20 | Sustained Burn | Aspect Channel" },
            {
                id: "n4", name: "White Flame Sword",
                image: 'assets/items/white_flame_sword.png', slot: "weapon", ch: 100, rarity: "rare", emoji: "⚡", color: "#FFF5E0", desc: "A blade that burns with Nephis's abnormal white flame — not orange like normal fire. It sears nightmare essence directly.", stat: "ATK +45 | White Flame | Nightmare Sear | Anti-Shadow"
            },
            { id: "n5", name: "Flame Aspect Veil", slot: "cloak", ch: 150, rarity: "rare", image: 'assets/items/flame_aspect_veil.png', color: "#FFD700", desc: "A veil of accumulated flame aura — not actual cloth, but solidified heat that follows Nephis like a corona when she moves at speed.", stat: "Flame Aura: passive burn field | DEF +15 | Intimidation" },
            { id: "n6", name: "Memory Clan Guardian Shield", slot: "offhand", ch: 200, rarity: "legendary", image: 'assets/items/memory_clan_guardian_shield.png', color: "#8B7355", desc: "The Memory Clan's combat shield — engraved with the clan's founding memory-seals. Deflects both physical and memory-based attacks.", stat: "DEF +50 | Memory Seal: Resist memory disruption | Block" },
            { id: "n7", name: "Cold White Flame Armor", slot: "armor", ch: 250, rarity: "legendary", image: 'assets/items/cold_white_flame_armor.png', color: "#E0F4FF", desc: "After Nephis's flame turns cold-white in the Tomb of Ariel, her armor transforms — appearing as frozen white fire that burns absolutely.", stat: "DEF +70 | Cold Flame Absorption | Absolute Zero field" },
            { id: "n8", name: "Flame Sovereign's Crown", slot: "accessory", ch: 400, rarity: "mythic", image: 'assets/items/flame_sovereigns_crown.png', color: "#FFD700", desc: "Not a literal crown — a permanent manifestation of Nephis's flame aspect at its peak. The white flame forms a halo above her head in battle.", stat: "Flame Domain +50m | City-Scale Flame | Transcendent Aura" },
            { id: "n9", name: "Memory Clan Champion Blade", slot: "weapon", ch: 500, rarity: "mythic", image: 'assets/items/memory_clan_champion_blade.png', color: "#FFEAA0", desc: "The Memory Clan's champion-grade weapon, formally granted to Nephis after her Awakened rank advancement. Holds clan memories as power.", stat: "ATK +90 | Memory Resonance | Aspect Amplifier x2" },
            { id: "n10", name: "Desert Flame Mantle", image: 'assets/items/desert_flame_mantle.png', slot: "cloak", ch: 1260, rarity: "mythic", emoji: "🔥", color: "#FF4500", desc: "During the month-long training with Sunny on the giant turtle in the Nightmare Desert, Nephis's flame aspect evolved once more — manifesting as a permanent mantle of heat that bends the air around her.", stat: "Flame Aura +100% | Heat Distortion | Desert Survival" },
            { id: "n11", name: "Transcendent Flame Crown", image: 'assets/items/transcendent_flame_crown.png', slot: "accessory", ch: 1500, rarity: "mythic", emoji: "👑", color: "#FFD700", desc: "The ultimate manifestation of Nephis's Transcendent-rank flame aspect. The white flame forms a permanent ethereal crown that burns reality itself — visible only to those with nightmare perception.", stat: "Transcendent Aura | Reality Burn | Flame Domain: 100m" },
        ],

        cassie: [
            { id: "c1", name: "Sightless Circlet", slot: "accessory", ch: 3, rarity: "uncommon", image: 'assets/items/sightless_circlet.png', color: "#9B59B6", desc: "A simple circlet Cassie wore from the beginning — it doesn't provide vision, but amplifies her prophecy aspect's thread-perception.", stat: "Prophecy Range: +50m | Thread Count: +10 | Focus" },
            { id: "c2", name: "Thread-Sight Staff", slot: "weapon", ch: 3, rarity: "rare", image: 'assets/items/thread_sight_staff.png', color: "#7D3C98", desc: "A wooden staff Cassie uses to navigate without sight. The wood is from a nightmare tree — it resonates with fate threads.", stat: "ATK +8 | Fate Thread Sensor | Navigation in Darkness" },
            { id: "c3", name: "Prophecy Shroud", slot: "cloak", ch: 30, rarity: "rare", image: 'assets/items/prophecy_shroud.png', color: "#2C1654", desc: "A dark cloak that swirls with faint starlight patterns when Cassie is actively seeing prophecies. Other Awakened find it unsettling.", stat: "Prophecy Stability +30 | Intimidation field: Seer" },
            { id: "c4", name: "Blind Oracle's Focus", slot: "offhand", ch: 50, rarity: "rare", image: 'assets/items/blind_oracles_focus.png', color: "#8A2BE2", desc: "A crystal orb Cassie uses to anchor large-scale prophecies — prevents her from getting lost in far-future visions.", stat: "Prophecy Anchor | Range +100% | Vision Stability" },
            { id: "c5", name: "Fate Thread Blade", slot: "weapon", ch: 100, rarity: "legendary", image: 'assets/items/fate_thread_blade.png', color: "#6C3483", desc: "A knife Cassie carries — enchanted to cut fate threads in the physical world. She uses it when a vision shows a thread that must be severed.", stat: "ATK +30 | Thread Cut: severs minor fate events | Anti-Destiny" },
            { id: "c6", name: "Seer's Robes", slot: "armor", ch: 150, rarity: "legendary", image: 'assets/items/seers_robes.png', color: "#4A235A", desc: "Robes that adapt to the shape of emerging prophecies — patterns shift and change on the fabric as new futures present themselves.", stat: "DEF +25 | Prophecy Clarity +50 | Future Sight: passive" },
            { id: "c7", name: "Oracle's Chain", slot: "accessory", ch: 540, rarity: "mythic", image: 'assets/items/oracles_chain.png', color: "#9B59B6", desc: "After Cassie's prophecy aspect evolves to multi-day temporal range, this chain manifests — binding her to the present despite seeing days ahead.", stat: "Temporal Anchor | Prophecy Range: 72hrs | Present Lock" },
            { id: "c8", name: "Time Loop Thread", image: 'assets/items/time_loop_thread.png', slot: "special", ch: 1436, rarity: "mythic", emoji: "🔮", color: "#22D3EE", desc: "On Wind Flower Island, Cassie's Prophecy Aspect allowed her to perceive the time loop's structure differently — she sensed fate threads doubling and re-weaving. This crystallized thread is a remnant of that awareness.", stat: "Temporal Perception | Loop Detection | Thread Vision" },
            { id: "c9", name: "Estuary Vision Stone", image: 'assets/items/estuary_vision_stone.png', slot: "offhand", ch: 1570, rarity: "mythic", emoji: "💎", color: "#7C3AED", desc: "At the Estuary, Cassie witnessed the revelation of the Seven Gods alongside Sunny. This vision stone preserves the prophetic resonance of that moment — the truth of the Forgotten God imprinted into crystal.", stat: "Lore Anchor | Forgotten God Resonance | Prophecy: Divine-tier" },
        ],

        effie: [
            { id: "e1", name: "Iron Gauntlets", slot: "offhand", ch: 4, rarity: "uncommon", image: 'assets/items/iron_gauntlets.png', color: "#708090", desc: "Effie's preferred combat tool — iron gauntlets that reinforce her naturally superhuman punch force. She's never without them.", stat: "ATK +15 | Punch Force x2 | Bone Break chance: 20%" },
            { id: "e2", name: "Hunt Aspect Wraps", slot: "accessory", ch: 4, rarity: "rare", image: 'assets/items/hunt_aspect_wraps.png', color: "#2ECC71", desc: "Binding wraps that channel Effie's Hunt Aspect through her limbs — allowing her to track nightmare creatures by touch alone.", stat: "Hunt Tracking | Touch Perception | Speed +20%" },
            { id: "e3", name: "Nightmare Hide Plate", slot: "armor", ch: 20, rarity: "uncommon", image: 'assets/items/nightmare_hide_plate.png', color: "#556B2F", desc: "Heavy armor plates skinned from Awakened-class nightmare creatures. Effie cobbled it together herself — messy, heavy, very effective.", stat: "DEF +35 | Weight: Heavy | Nightmare Resistance: Mid" },
            { id: "e4", name: "Huntress Greatsword", slot: "weapon", ch: 50, rarity: "rare", image: 'assets/items/huntress_greatsword.png', color: "#228B22", desc: "An oversized blade suited to Effie's strength — most Awakened couldn't swing it, but she does so with terrifying speed.", stat: "ATK +55 | Two-handed | Cleave: hits 3 targets | Heavy" },
            { id: "e5", name: "Beast Pelt Cloak", slot: "cloak", ch: 100, rarity: "rare", image: 'assets/items/beast_pelt_cloak.png', color: "#2D5A27", desc: "A cloak of woven nightmare beast pelts — they retain a faint hunt aura, making Effie harder to detect by scent or noise.", stat: "Stealth +20 | Hunt Aura | Beast Deterrent field" },
            { id: "e6", name: "Hunt Constellation Armbands", slot: "accessory", ch: 650, rarity: "mythic", image: 'assets/items/hunt_constellation_armbands.png', color: "#00FF7F", desc: "Upon reaching Master rank, Effie's Hunt Aspect forms visible constellation patterns on her skin. The armbands are the physical focus.", stat: "Hunt Domain | Nightmare Command: passive | Master Rank" },
            { id: "e7", name: "Alpha Predator Armor", slot: "armor", ch: 650, rarity: "mythic", image: 'assets/items/alpha_predator_armor.png', color: "#006400", desc: "Post-Master rank armor — nightmare creatures of Awakened class instinctively submit when they see this armor, recognizing the Hunt Aspect's dominance.", stat: "DEF +110 | Creature Submission aura | Physical: x3 baseline" },
            { id: "e8", name: "Iron Fist of the Hunt", slot: "weapon", ch: 900, rarity: "mythic", image: 'assets/items/iron_fist_of_the_hunt.png', color: "#008000", desc: "Effie's Master-rank weapon — an iron gauntlet infused with Hunt Aspect essence. Each punch creates a shockwave that stuns everything within 10m.", stat: "ATK +100 | Shockwave: 10m stun | Nightmare Crush | Master" },
            { id: "e9", name: "Great River War Plate", image: 'assets/items/great_river_war_plate.png', slot: "armor", ch: 1480, rarity: "mythic", emoji: "🛡️", color: "#004D00", desc: "Armor reinforced during the Great River journey — nightmare creature bone plated with river-titan scales. Effie assembled it from kills during the perilous voyage.", stat: "DEF +130 | River Resistance | Temporal Shielding" },
            { id: "e10", name: "Mother's Resolve Gauntlets", image: 'assets/items/mothers_resolve_gauntlets.png', slot: "offhand", ch: 1600, rarity: "mythic", emoji: "🤲", color: "#00CC00", desc: "After Sunny's transcendence, Effie no longer remembers her battle companion. But her Supreme Memory farm thrives, and her son Little Ling — born as a Saint — is her new priority. These gauntlets are softer, designed for holding rather than hitting.", stat: "Saint-Child Containment | Physical: x4 | Farm Protection Mode" },
        ],

        kai: [
            { id: "k1", name: "Arrow Clan Recurve Bow", slot: "weapon", ch: 5, rarity: "uncommon", image: 'assets/items/arrow_clan_recurve_bow.png', color: "#8B4513", desc: "Kai's primary weapon — an Arrow Clan precision recurve bow. The clan's mark is carved into the grip. Every shot is calculated.", stat: "ATK +20 | Precision: +40% | Range: 300m | Silent" },
            { id: "k2", name: "Clan Quiver — 24 Arrows", slot: "offhand", ch: 5, rarity: "uncommon", image: 'assets/items/clan_quiver_24_arrows.png', color: "#A0522D", desc: "Arrow Clan signature arrows — fletched with nightmare raven feathers that stabilize trajectory in dimensional winds.", stat: "Arrow Capacity: 24 | Trajectory Stable | Piercing" },
            { id: "k3", name: "Hunter's Vest", slot: "armor", ch: 20, rarity: "uncommon", image: 'assets/items/hunters_vest.png', color: "#6B5844", desc: "Light combat vest favored by Arrow Clan scouts — padded in the right places, open enough for full draw motion.", stat: "DEF +15 | Mobility: High | Draw Speed: +25%" },
            { id: "k4", name: "Phantom Arrow Quiver", slot: "offhand", ch: 350, rarity: "legendary", image: 'assets/items/phantom_arrow_quiver.png', color: "#4169E1", desc: "After Awakened rank — his arrows no longer need to follow physics. The quiver holds arrows that exist in perceptual space until they strike.", stat: "Phantom Trajectory | Curve: any angle | Invisible path" },
            { id: "k5", name: "Archer's Longcloak", slot: "cloak", ch: 100, rarity: "rare", image: 'assets/items/archers_longcloak.png', color: "#1C3A5E", desc: "A long dark cloak designed to break silhouette — when Kai is still, he is essentially invisible against any natural backdrop.", stat: "Stealth +45 | Silhouette Break | Observation Resistance" },
            { id: "k6", name: "Arrow Clan Intelligence Seal", slot: "accessory", ch: 350, rarity: "legendary", image: 'assets/items/arrow_clan_intelligence_seal.png', color: "#191970", desc: "After Kai reveals clan intel to Sunny — a personal seal that marks him as outside clan authority. It carries intelligence from clan archives.", stat: "Intel Access | Clan Network | Counter-Tracking" },
            { id: "k7", name: "Phantom Archer Armor", slot: "armor", ch: 820, rarity: "mythic", image: 'assets/items/phantom_archer_armor.png', color: "#000080", desc: "Master rank armor that bends light slightly — Kai appears as a distortion rather than a person when wearing this at range.", stat: "DEF +80 | Light Bend | Location Confusion | Master Rank" },
            { id: "k8", name: "Star-Path Composite Bow", slot: "weapon", ch: 820, rarity: "mythic", image: 'assets/items/star_path_composite_bow.png', color: "#4682B4", desc: "Kai's Master rank weapon — a bow strung with condensed arrow aspect. The string appears as a line of starlight. Draws itself.", stat: "ATK +95 | Self-Draw | Range: 2000m | Aspect Amplified" },
        ],

        morgans: [
            { id: "m1", name: "Blood Faction Robes", slot: "armor", ch: 120, rarity: "uncommon", image: 'assets/items/blood_faction_robes.png', color: "#8B0000", desc: "The signature deep crimson robes of the Blood Faction — woven with blood-sealing thread that prevents external manipulation of the wearer's blood.", stat: "DEF +20 | Blood Seal: self | Anti-Blood: resist" },
            { id: "m2", name: "Sanguine Dagger", slot: "weapon", ch: 120, rarity: "rare", image: 'assets/items/sanguine_dagger.png', color: "#DC143C", desc: "Morgan's blade — forged with blood-iron alloy. Contact with blood (friend or enemy) triggers the blood manipulation aspect.", stat: "ATK +30 | Blood Trigger: on cut | Aspect Activation" },
            { id: "m3", name: "Bloodweave Gloves", slot: "offhand", ch: 120, rarity: "rare", image: 'assets/items/bloodweave_gloves.png', color: "#A00000", desc: "Thin gloves that allow Morgan to shape and project blood at range without physical contact — a signature Blood Faction technique.", stat: "Blood Range: 30m | Projection | No Contact Required" },
            { id: "m4", name: "Pallid Mask", slot: "accessory", ch: 130, rarity: "legendary", image: 'assets/items/pallid_mask.png', color: "#DC143C", desc: "A bone-white mask Morgan wears in high-stakes encounters — it conceals his Awakened aura, making his rank undetectable.", stat: "Aura Concealment | Rank Hidden | Intimidation: extreme" },
            { id: "m5", name: "Blood Ritual Tome", slot: "special", ch: 200, rarity: "legendary", image: 'assets/items/blood_ritual_tome.png', color: "#8B0000", desc: "A tome containing Blood Faction ritual techniques — amplification rituals that push power beyond normal rank limits at physical cost.", stat: "Ritual: Power x1.5 | Cost: HP 30% | Blood Beyond Rank" },
            { id: "m6", name: "Crimson War Plate", slot: "armor", ch: 280, rarity: "legendary", image: 'assets/items/crimson_war_plate.png', color: "#B22222", desc: "Armor assembled from nightmare creature bone plated with blood-iron. Morgan's personal combat gear for serious engagements.", stat: "DEF +60 | Blood Absorption | Self-Heal: 5% on kill" },
            { id: "m7", name: "Sovereign Blood Seal", slot: "special", ch: 1050, rarity: "mythic", image: 'assets/items/sovereign_blood_seal.png', color: "#4A0000", desc: "After Morgan's deepening Blood Faction allegiances — a seal that marks him as aligned with forces beyond the Great Clans. Its true purpose is unknown.", stat: "Unknown Power | Sovereign Link | Blood Domain: 500m" },
        ],

        jet: [
            { id: "j1", name: "Soul Reaper's Scythe", slot: "weapon", ch: 55, rarity: "legendary", image: 'assets/items/soul_reapers_scythe.png', color: "#4169E1", desc: "Jet's Aspect Legacy — a chilling mist that solidifies into a deadly scythe. The blade bypasses physical armor entirely, striking directly at the enemy's soul. One of the most feared weapons in the Awakened world.", stat: "ATK +85 | Soul Strike | Armor Bypass: 100% | Mist Form" },
            { id: "j2", name: "First Army Officer's Coat", slot: "armor", ch: 55, rarity: "legendary", image: 'assets/items/first_army_officers_coat.png', color: "#1C3A5E", desc: "Colonel Jet's military coat — reinforced with nightmare-grade thread. Carries the insignia of the First Awakened Irregular Company. Practical, efficient, and terrifying when stained.", stat: "DEF +70 | Military Grade | Rank: Colonel | Authority Aura" },
            { id: "j3", name: "Soul Essence Siphon", slot: "accessory", ch: 100, rarity: "mythic", image: 'assets/items/soul_essence_siphon.png', color: "#2C1654", desc: "Jet's Dormant Ability manifests as this ethereal siphon — it absorbs soul essence from kills. Critical for her survival, as her soul cannot generate essence on its own and constantly leaks it.", stat: "Essence Absorb: on kill | Soul Leak: compensated | Survival Req." },
            { id: "j4", name: "Ascended War Mantle", slot: "cloak", ch: 1355, rarity: "mythic", image: 'assets/items/ascended_war_mantle.png', color: "#000080", desc: "After joining the cohort at Fallen Grace, Jet's Ascended-rank aura manifests as a dark mantle of chilling mist. Nightmare creatures instinctively flee from the Soul Reaper's presence.", stat: "Ascended Aura | Fear Field: 50m | Mist Domain | Soul Perception" },
        ]
    },

    // ── WORLD MAP LOCATIONS ──────────────────────────────────────────────────
    worldLocations: [
        {
            id: "nightmare-realm",
            name: "The Nightmare Realm",
            type: "realm",
            x: 50, y: 28,
            color: "#C41E3A",
            icon: "🌑",
            rank: "All Ranks",
            desc: "A dark parallel world that overlaps with reality. Awakened enter it to fight and grow. The longer you survive, the stronger you become. The Nightmare Realm is the source of all nightmare creatures and the origin of Awakened power. Its geography shifts and warps, creating new zones of danger constantly.",
            characters: ["sunny", "nephis", "cassie", "effie", "kai"],
            chapters: "Ch. 1–1250",
            connections: ["first-nightmare-gate", "nightmare-incursion-zone", "sovereign-domain"]
        },
        {
            id: "first-nightmare-gate",
            name: "First Nightmare Gate",
            type: "dungeon",
            x: 30, y: 18,
            color: "#2DD4BF",
            icon: "🚪",
            rank: "Dormant → Awakened",
            desc: "The gateway through which newly awakened humans enter the Nightmare Realm for the first time. A 30-day survival trial awaits — those who survive earn their first rank. It was here that Sunny, Nephis, Cassie, Effie, and Kai first met and formed their uneasy alliance.",
            characters: ["sunny", "nephis", "cassie", "effie", "kai"],
            chapters: "Ch. 1–50",
            connections: ["nightmare-realm"]
        },
        {
            id: "tomb-of-ariel",
            name: "Tomb of Ariel",
            type: "dungeon",
            x: 72, y: 42,
            color: "#A855F7",
            icon: "⚰️",
            rank: "Transcendent Legacy",
            desc: "A legendary nightmare dungeon containing the soul legacy of Ariel — a Transcendent-rank being who chose to seal herself rather than Ascend. Three factions raced to claim its treasures. Nephis's flame turned cold-white here, and Sunny's echo army grew to 25. The Tomb closed permanently after the group escaped.",
            characters: ["sunny", "nephis", "cassie", "effie", "kai", "morgans"],
            chapters: "Ch. 200–400",
            connections: ["nightmare-realm", "memory-clan-stronghold"]
        },
        {
            id: "saint-gate",
            name: "Saint Gate",
            type: "zone",
            x: 55, y: 62,
            color: "#C41E3A",
            icon: "⚔️",
            rank: "Saint",
            desc: "The threshold zone where Awakened attempt to break through to Saint rank — a grueling process requiring sustained combat against Transcendent-level nightmare creatures. Sunny confronted Morgan here, revealing a portion of his shadow army. It is also where Sunny ultimately achieved Saint rank.",
            characters: ["sunny", "morgans"],
            chapters: "Ch. 1050, 1110–1150",
            connections: ["nightmare-realm", "blood-faction-sanctum"]
        },
        {
            id: "memory-clan-stronghold",
            name: "Memory Clan Stronghold",
            type: "city",
            x: 22, y: 45,
            color: "#FFD700",
            icon: "🏛️",
            rank: "Clan Territory",
            desc: "The ancestral seat of the Memory Clan — one of the most powerful Great Clans. Nephis's heritage flows from these halls. The clan elders here attempted to control Nephis's next moves after her flame aspect's abnormal growth. The Moonless Seal's origins trace back to a compact made here centuries ago.",
            characters: ["nephis"],
            chapters: "Ch. 85, 500, 700",
            connections: ["tomb-of-ariel", "arrow-clan-territory"]
        },
        {
            id: "arrow-clan-territory",
            name: "Arrow Clan Territory",
            type: "city",
            x: 15, y: 70,
            color: "#4169E1",
            icon: "🏹",
            rank: "Clan Territory",
            desc: "The domain of the Arrow Clan, known for their precision and intelligence networks. Kai was trained here, and here the clan's true agenda regarding the Moonless Seal was formed. The territory is sparse and fortified — built for observation rather than luxury.",
            characters: ["kai"],
            chapters: "Ch. 110, 165, 350, 680",
            connections: ["memory-clan-stronghold", "blood-faction-sanctum"]
        },
        {
            id: "blood-faction-sanctum",
            name: "Blood Faction Sanctum",
            type: "dungeon",
            x: 80, y: 72,
            color: "#8B0000",
            icon: "🩸",
            rank: "Master+",
            desc: "A hidden, ritualistic stronghold of the Blood Faction — not a clan but an extremist ideology using nightmare-derived blood rituals to enhance power beyond normal limits. Morgan operates from deep within. The sanctum is stained with permanent blood-seals and reeks of iron.",
            characters: ["morgans"],
            chapters: "Ch. 120, 190, 280, 1050",
            connections: ["saint-gate", "arrow-clan-territory"]
        },
        {
            id: "nightmare-incursion-zone",
            name: "Nightmare Incursion Zone",
            type: "zone",
            x: 40, y: 80,
            color: "#F59E0B",
            icon: "⚠️",
            rank: "All Ranks (Emergency)",
            desc: "Zones where the Nightmare Realm has merged with the real world. Not a permanent dungeon — these are active disaster areas that shift and expand. After chapter 490, nightmare incursions became global, forcing Awakened society onto an emergency footing. Cities are at risk.",
            characters: ["sunny", "nephis", "effie"],
            chapters: "Ch. 490+",
            connections: ["nightmare-realm", "last-nightmare-threshold"]
        },
        {
            id: "sovereign-domain",
            name: "The Sovereign's Domain",
            type: "realm",
            x: 65, y: 15,
            color: "#6366F1",
            icon: "👁️",
            rank: "Unknown (Above Saint)",
            desc: "A mysterious, hidden zone controlled by the Sovereign — a figure who operates above the Great Clans, deliberately engineering nightmare zone fluctuations. The domain's location is unknown; its influence is felt everywhere. A shadow sigil found here matches a pre-clan symbol potentially connected to Sunny's origin.",
            characters: ["sunny"],
            chapters: "Ch. 780, 1000, 1248",
            connections: ["nightmare-realm", "last-nightmare-threshold"]
        },
        {
            id: "last-nightmare-threshold",
            name: "The Last Nightmare Threshold",
            type: "realm",
            x: 50, y: 92,
            color: "#DC143C",
            icon: "💀",
            rank: "Transcendent+",
            desc: "The theoretical point where the Nightmare Realm and the real world fully merge — the 'Last Nightmare.' The Sovereign is implied to be working toward triggering this event. If it occurs, all boundaries between worlds collapse. Sunny heads into the future knowing this arc is approaching.",
            characters: ["sunny", "nephis"],
            chapters: "Ch. 1220, 1250",
            connections: ["nightmare-incursion-zone", "sovereign-domain"]
        },

        // ── PHASE 2: Ch. 1250–1800 Locations ────────────────────────────────
        {
            id: "nightmare-desert",
            name: "Nightmare Desert",
            type: "zone",
            x: 35, y: 35,
            color: "#D4A574",
            icon: "🏜️",
            rank: "Saint+",
            desc: "A vast expanse of white sands east of the Forgotten Shore, stretching along the Hollow Mountains. At night, two cursed armies clash in an eternal battle across its dunes. It was here, on the shell of a giant black turtle drifting through this desert, that Sunny and Nephis reunited after their separation — spending a month training, sparring, and uncovering deep mythological truths about the Seven Suns and the Tomb of Ariel.",
            characters: ["sunny", "nephis"],
            chapters: "Ch. 1251–1260",
            connections: ["nightmare-realm", "tomb-of-ariel"]
        },
        {
            id: "fallen-grace",
            name: "Fallen Grace",
            type: "city",
            x: 28, y: 58,
            color: "#E8B4B4",
            icon: "🏚️",
            rank: "Great River City",
            desc: "A city-ship flotilla on the Great River — one of the last human strongholds in the Tomb of Ariel. Buildings of white stone and pale wood with crimson accents, connected by rope bridges over wide canals. Scarlet fabric sails stretch between its taller structures. Once grand, it is now a wilting flower — faded sails, desolate streets, and abandoned buildings. The cohort regrouped here: Sunny, Nephis, Cassie, Jet, and Effie. Ruled by three sybils, with Dusk as the last.",
            characters: ["sunny", "nephis", "cassie", "effie"],
            chapters: "Ch. 1286–1389",
            connections: ["wind-flower-island", "nightmare-desert"]
        },
        {
            id: "wind-flower-island",
            name: "Wind Flower Island",
            type: "dungeon",
            x: 12, y: 38,
            color: "#22D3EE",
            icon: "🌸",
            rank: "Time-Locked Zone",
            desc: "A mysterious island on the Great River where time loops endlessly. Sunny experienced over sixty repetitions of the same day, using each loop to sharpen his Shadow Step and gather intelligence. Cassie gradually became aware of the loops. The island was originally known as Aletheia's Island, created by a Seeker. A Saint named Wind Flower is trapped here in eternal slumber due to a seed of corruption. The cohort broke free from the time loop and departed in Ch. 1480.",
            characters: ["sunny", "nephis", "cassie"],
            chapters: "Ch. 1398–1480",
            connections: ["fallen-grace", "great-river"]
        },
        {
            id: "great-river",
            name: "The Great River",
            type: "realm",
            x: 38, y: 50,
            color: "#0EA5E9",
            icon: "🌊",
            rank: "Outside of Time",
            desc: "An infinite river that flows from the future into the past, existing outside of time itself. Found within the Black Pyramid, connected to the blood of an Unholy Titan. It carries the cohort aboard the Chain Breaker toward the Estuary, where a dreadful secret was hidden by Ariel. Its waters are treacherous — massive vortexes and temporal anomalies make navigation near-impossible. The Great River is central to understanding the Forgotten God and the true nature of the Seven Suns.",
            characters: ["sunny", "nephis", "cassie", "effie"],
            chapters: "Ch. 1480–1590",
            connections: ["wind-flower-island", "verge", "estuary"]
        },
        {
            id: "verge",
            name: "Verge",
            type: "city",
            x: 58, y: 48,
            color: "#94A3B8",
            icon: "🗼",
            rank: "Ancient Seeker City",
            desc: "An ancient city built by Seekers near the beginning of time, intended as a staging ground to reach the Estuary. Verge sits at the edge of comprehension — a place where the rules of reality begin to unravel. The architecture is alien and impossibly old, predating the Great Clans by millennia. From here, Sunny ventured into the heart of the Estuary to confront the truth about the Forgotten God.",
            characters: ["sunny", "nephis", "cassie"],
            chapters: "Ch. 1530–1570",
            connections: ["great-river", "estuary"]
        },
        {
            id: "estuary",
            name: "The Estuary",
            type: "dungeon",
            x: 75, y: 55,
            color: "#7C3AED",
            icon: "🕳️",
            rank: "Origin Point",
            desc: "The mouth of the Great River — where the secret of the gods was buried by Ariel. Here it is revealed that there were not six but SEVEN gods: Sun God, War God, Storm God, Beast God, Heart God, Shadow God, and the Forgotten God. The other six imprisoned the Seventh to contain the Void, making him their collective Flaw. The daemons were born from his fractured soul. This revelation shattered Sunny's understanding of the world's true cosmology.",
            characters: ["sunny", "cassie"],
            chapters: "Ch. 1570–1579",
            connections: ["verge", "great-river"]
        },
        {
            id: "bastion",
            name: "Bastion",
            type: "city",
            x: 88, y: 40,
            color: "#A3E635",
            icon: "☕",
            rank: "Human World",
            desc: "After transcending the Nightmare Spell around Ch. 1600, Sunny exists outside of it — forgotten by everyone, including Nephis, Cassie, and Effie. His citizenship is revoked, his records erased. The world adjusted to his absence as if he never existed. Despite this profound isolation, Sunny continues to operate from Bastion, where he opens a café. He brushes shoulders with former cohort members who no longer remember him. Effie's son, Little Ling, lives nearby — a child born as a Saint with Transcendent-level power.",
            characters: ["sunny", "effie"],
            chapters: "Ch. 1600–1800",
            connections: ["nightmare-incursion-zone"]
        },
        {
            id: "forgotten-shore",
            name: "Forgotten Shore",
            type: "zone",
            x: 80, y: 70,
            color: "#2DD4BF",
            icon: "🌊",
            rank: "Sleeper → Awakened",
            desc: "A cursed, dried-up ocean of black sand. The Sun never truly rises here. Features the Dark City and the Crimson Spires. This is where Sunny spent his time as a Sleeper.",
            characters: ["sunny", "nephis", "cassie", "effie", "kai"],
            chapters: "Ch. 10-350",
            connections: ["nightmare-realm"]
        },
        {
            id: "broken-island",
            name: "Broken Island",
            type: "zone",
            x: 40, y: 55,
            color: "#6366F1",
            icon: "🏝️",
            rank: "Awakened → Master",
            desc: "Also known as the Chained Isles. A series of shattered islands floating in the sky, bound by massive chains. Contains various nightmarish entities and dimensional rifts.",
            characters: ["sunny", "cassie", "kai"],
            chapters: "Ch. 400-600",
            connections: ["nightmare-realm"]
        }
    ]
};

if (typeof module !== 'undefined') module.exports = RIFT_DATA;

