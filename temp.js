const RIFT_DATA = {
    novels: {
        "shadow-slave": {
            id: "shadow-slave",
            title: "Shadow Slave",
            author: "Guiltythree",
            platform: "Royal Road / Webnovel",
            chapters: 2400,
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
            epithet: "The Dreamless · The Forsaken One · Lord of Shadows",
            rank: "Saint",
            rankLevel: 4,
            portraitSymbol: "☾",
            portraitGlow: "red",
            role: "Protagonist",
            status: "Alive",
            faction: "None / Independent",
            firstChapter: 1,
            tags: ["Shadowborn", "Memory Weave", "Cursed Aspect", "Echo Army"],
            abilities: [
                { name: "Shadow Aspect", level: 95, color: "red" },
                { name: "Soul Strength", level: 80, color: "red" },
                { name: "Echo Control", level: 88, color: "red" }
            ],
            echoes: ["Fiend", "Nightmare Creature", "Shadow Demon", "Bone Golem"],
            soulAspects: 7,
            background: "Born without a memory and awakened into the Nightmare Realm, Sunny received the unique 'Cursed' aspect — no innate ability but an endless pool of shadow coins. His journey from a nameless, powerless slave to one of the most feared beings in existence defines the story.",
            keyMoments: [
                "First nightmare — survived with only cunning",
                "Received the Cursed Aspect",
                "Formed the shadow army",
                "Reached Saint rank",
                "Confronted a Transcendent nightmare"
            ],
            relationships: [
                { name: "Nephis", type: "ally", note: "Complex bond; she lost her memories of him" },
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
            rankLevel: 5,
            portraitSymbol: "✦",
            portraitGlow: "gold",
            role: "Main Female Lead",
            status: "Alive",
            faction: "Memory faction",
            firstChapter: 5,
            tags: ["Flame Aspect", "Amnesia Arc", "Memory Lost", "Transcendent"],
            abilities: [
                { name: "Flame Aspect", level: 99, color: "gold" },
                { name: "Soul Strength", level: 92, color: "gold" },
                { name: "Undying Will", level: 97, color: "gold" }
            ],
            echoes: [],
            soulAspects: 5,
            background: "A member of the powerful Memory clan, Nephis is one of the most gifted Awakened in history. Her Flame aspect burns without limit. A critical arc involves her losing her memories — including those of Sunny — due to the Moonless Seal.",
            keyMoments: [
                "Led the group through the First Nightmare",
                "Reached Transcendent rank",
                "Memory loss arc begins",
                "Peak flame manifestation — entire sky ignited"
            ],
            relationships: [
                { name: "Sunny", type: "complex", note: "Former ally; memory of him erased" },
                { name: "Cassie", type: "ally", note: "Trusted companion" }
            ]
        },
        {
            id: "cassie",
            novel: "shadow-slave",
            name: "Cassie",
            epithet: "The Blind Seer · Prophet of Doom",
            rank: "Awakened",
            rankLevel: 1,
            portraitSymbol: "◈",
            portraitGlow: "purple",
            role: "Supporting Lead",
            status: "Alive",
            faction: "Arrow clan",
            firstChapter: 3,
            tags: ["Seer", "Prophetic Vision", "Blind", "Arrow Clan"],
            abilities: [
                { name: "Prophecy Aspect", level: 75, color: "purple" },
                { name: "Soul Perception", level: 85, color: "purple" },
                { name: "Soul Strength", level: 60, color: "purple" }
            ],
            echoes: [],
            soulAspects: 2,
            background: "Blind by birth, Cassie awakened as a Seer — able to perceive threads of fate and prophecy. Her visions are cryptic but devastatingly accurate. She is one of Sunny's earliest and most trusted companions.",
            keyMoments: [
                "Prophesied the downfall of an Ascended",
                "Vision of the Last Nightmare",
                "Warned the group before the Tomb of Ariel arc"
            ],
            relationships: [
                { name: "Sunny", type: "ally", note: "Oldest companion; trusts him deeply" },
                { name: "Nephis", type: "ally", note: "Admires her strength" }
            ]
        },
        {
            id: "effie",
            novel: "shadow-slave",
            name: "Effie",
            epithet: "The Beastmaster · Iron-Armed Hunter",
            rank: "Master",
            rankLevel: 3,
            portraitSymbol: "⚔",
            portraitGlow: "teal",
            role: "Supporting Lead",
            status: "Alive",
            faction: "Independent",
            firstChapter: 4,
            tags: ["Warrior", "Hunt Aspect", "Fearless", "Physical"],
            abilities: [
                { name: "Physical Strength", level: 88, color: "teal" },
                { name: "Hunt Aspect", level: 72, color: "teal" },
                { name: "Endurance", level: 91, color: "teal" }
            ],
            echoes: [],
            soulAspects: 3,
            background: "A towering warrior with an iron will and near-limitless physical endurance, Effie fights with raw power and relentless aggression. Her Hunt Aspect amplifies her tracking and combat instincts to inhuman levels.",
            keyMoments: [
                "Defeated a Master-rank nightmare solo",
                "Hunt Aspect breakthrough to early Master rank",
                "Protected the group during the Tomb of Ariel arc"
            ],
            relationships: [
                { name: "Sunny", type: "ally", note: "Reliable battle partner" },
                { name: "Kai", type: "ally", note: "Strategic foil to her raw power approach" }
            ]
        },
        {
            id: "kai",
            novel: "shadow-slave",
            name: "Kai",
            epithet: "The Sly Arrow · Whispering Shadow",
            rank: "Refined",
            rankLevel: 2,
            portraitSymbol: "⬡",
            portraitGlow: "purple",
            role: "Supporting Lead",
            status: "Alive",
            faction: "Arrow clan",
            firstChapter: 6,
            tags: ["Archer", "Tactician", "Stealth", "Arrow Clan"],
            abilities: [
                { name: "Arrow Aspect", level: 78, color: "purple" },
                { name: "Stealth", level: 83, color: "purple" },
                { name: "Precision", level: 90, color: "purple" }
            ],
            echoes: [],
            soulAspects: 2,
            background: "A calm, calculating archer from the Arrow clan. Kai serves as the tactical mind of the group — always three steps ahead, rarely wasting energy on direct confrontation when a precise arrow from darkness does the same job.",
            keyMoments: [
                "Sniped a Refined-rank nightmare from 800 meters",
                "Revealed Arrow clan's true agenda",
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
            epithet: "The Pallid Bloodmage",
            rank: "Master",
            rankLevel: 3,
            portraitSymbol: "⛧",
            portraitGlow: "red",
            role: "Antagonist",
            status: "Unknown",
            faction: "Blood faction",
            firstChapter: 120,
            tags: ["Bloodmage", "Villain", "Blood Aspect", "Dangerous"],
            abilities: [
                { name: "Blood Aspect", level: 85, color: "red" },
                { name: "Blood Ritual", level: 78, color: "red" },
                { name: "Soul Corruption", level: 80, color: "red" }
            ],
            echoes: [],
            soulAspects: 4,
            background: "A Master-rank Awakened who commands blood as a weapon and ritual tool. Morgan operates in the shadows of Awakened society, pursuing goals that clash violently with Sunny's group.",
            keyMoments: [
                "First blood ritual scene — shocked readers",
                "Confrontation with Sunny at Saint Gate",
                "Unleashed the Blood Tide ability"
            ],
            relationships: [
                { name: "Sunny", type: "enemy", note: "Directly opposed multiple times" }
            ]
        }
    ],

    ranks: [
        { level: 0, name: "Dormant", desc: "Before awakening. No aspects, no power.", color: "#3A3A58" },
        { level: 1, name: "Awakened", desc: "First Aspect granted. Can enter nightmares.", color: "#2DD4BF" },
        { level: 2, name: "Refined", desc: "Soul refined through repeated nightmare trials.", color: "#60A5FA" },
        { level: 3, name: "Master", desc: "Commands lesser nightmare creatures. Elite warrior.", color: "#A855F7" },
        { level: 4, name: "Saint", desc: "A being that transcends mortal limits. Near-mythical.", color: "#C41E3A" },
        { level: 5, name: "Transcendent", desc: "Forces of nature. Can reshape reality in nightmares.", color: "#F59E0B" },
        { level: 6, name: "Ascended", desc: "Nearly divine. History remembers them as legends.", color: "#6366F1" }
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
            name: "Moonless Seal",
            desc: "A mysterious curse/blessing placed on certain Awakened. Has dramatic effects on memory and power — responsible for Nephis's memory loss.",
            category: "Lore"
        },
        {
            name: "Great Clans",
            desc: "Powerful human factions — Memory Clan, Arrow Clan, Blood Faction, etc. — that control resources, knowledge, and political power in the Awakened world.",
            category: "Factions"
        },
        {
            name: "Tomb of Ariel",
            desc: "A legendary nightmare dungeon location. Scene of major battles and revelations. Ariel was a mythical Transcendent-rank being.",
            category: "Locations"
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
            title: "Nephis's memory loss isn't accidental — the author foreshadowed this in chapter 3",
            user: "@rift_analyst",
            comments: 1200,
            likes: 5400,
            content: "Re-reading from the start with fresh eyes after the amnesia arc hits different. In chapter 3, there's a throwaway line: 'some flames burn so bright they consume even the memories of those who lit them.' This was it. This was the setup.",
            tags: ["Foreshadowing", "Nephis", "Deep Dive"]
        },
        {
            id: 4,
            chapter: "Ch. 1200-1250",
            badge: "hot",
            title: "Effie's Hunt Aspect breakthrough animation in my head is absolutely CINEMATIC",
            user: "@rift_fan",
            comments: 623,
            likes: 3200,
            content: "Someone needs to animate this arc. The moment Effie pushes through to early Master rank, with the Hunt constellation forming above the battlefield — I've read this 4 times and it hits harder every time.",
            tags: ["Effie", "Hype", "Animation Needed"]
        },
        {
            id: 5,
            chapter: "Lore Discussion",
            badge: "trending",
            title: "Complete breakdown of the Moonless Seal — what we actually know",
            user: "@lore_master",
            comments: 988,
            likes: 4100,
            content: "I've compiled every mention of the Moonless Seal across all 1248 chapters. Here's what the data shows: It appears 47 times, always in connection to memory, always in connection to a sacrifice being made. The pattern...",
            tags: ["Moonless Seal", "Lore", "Research"]
        },
        {
            id: 6,
            chapter: "Ch. 1100-1150",
            badge: "new",
            title: "Cassie's prophecy from Ch. 1102 literally just came true in Ch. 1245",
            user: "@prophecy_watch",
            comments: 445,
            likes: 2800,
            content: "'The blind shall see what the sighted cannot — a throne built of broken chains.' I spent 143 chapters wondering what this meant. Chapter 1245. THAT ending. The chain motif. The empty throne. I'm losing my mind.",
            tags: ["Cassie", "Prophecy", "Confirmed"]
        }
    ],


    // Legacy recaps kept for fallback
    recaps: {
        "1-50": "Sunny awakens in the First Nightmare with the Cursed Aspect. He meets Nephis, Cassie, Effie, and Kai. The group survives the month-long nightmare trial and escapes.",
        "51-100": "The group integrates into Awakened society. Sunny builds his echo army in secret. Political tensions emerge. Sunny encounters his first Saint-rank nightmare.",
        "101-200": "Great Clan politics escalate. The Blood Faction emerges as antagonist. Effie achieves Refined rank.",
        "201-400": "Tomb of Ariel arc. Legendary dungeon discovered. Sunny's echo army expands. Kai reveals Arrow Clan secrets.",
        "401-600": "Deep in the Tomb. Nephis's flame aspect manifests at city-scale. Sunny reaches Refined rank. Moonless Seal begins affecting Nephis.",
        "601-900": "Post-Tomb. New nightmare zones open globally. Sunny reaches 50+ echoes. The Nameless threat is introduced.",
        "901-1100": "Sunny reaches Master rank. Moonless Seal fully activates — Nephis loses memory of Sunny. Sovereign mystery deepens.",
        "1101-1250": "Sunny pushes to Saint rank. Effie reaches Master. Cassie's prophecy from Ch.1102 fulfills in Ch.1245. Last Nightmare arc horizon opens."
    },

    // ── GRANULAR CHAPTER EVENTS DATABASE ──────────────────────────────────────
    // Each event: { ch, type, spoiler(1-3), chars[], text, powerDetail?, loreDetail?, deathDetail?, romanceDetail? }
    // Types: "event" | "powerup" | "lore" | "death" | "romance"
    // spoiler: 1=safe summary, 2=moderate detail, 3=full spoiler
    chapterEvents: [
        // ── CHAPTERS 1-10: AWAKENING ARC ──
        { ch: 1, type: "event", spoiler: 1, chars: ["sunny"], text: "Sunny is transported into the First Nightmare — a deadly parallel world where Awakened souls fight nightmare creatures to grow stronger." },
        { ch: 1, type: "lore", spoiler: 1, chars: [], text: "The Nightmare Realm is revealed: a dark world overlapping reality. Dormant humans are pulled in upon awakening. Survival means growth — death means true death.", loreDetail: "Nightmare Realm mechanics, Dormant-to-Awakened transition, soul aspects" },
        { ch: 2, type: "powerup", spoiler: 1, chars: ["sunny"], text: "Sunny receives his Aspect: the Cursed Aspect — seemingly useless, granting only shadow coins instead of a combat power like normal awakened.", powerDetail: "Sunny — Cursed Aspect unlocked (Rank: Awakened). Unique: generates shadow coins, no direct combat power." },
        { ch: 3, type: "event", spoiler: 1, chars: ["sunny", "cassie"], text: "Sunny encounters Cassie — a blind girl who navigates the nightmare world with preternatural calm. She carries the Prophecy Aspect and speaks her first cryptic vision." },
        { ch: 3, type: "lore", spoiler: 1, chars: ["cassie"], text: "The Prophecy Aspect is introduced: Cassie can perceive threads of fate as tangible colors, though her eyes are blind to the physical world.", loreDetail: "Prophecy Aspect, Seer-type awakened abilities" },
        { ch: 4, type: "event", spoiler: 1, chars: ["sunny", "effie"], text: "Effie joins the group — a towering warrior woman with exceptional physical strength and the Hunt Aspect. Her fearlessness immediately contrasts Sunny's cautious approach." },
        { ch: 4, type: "powerup", spoiler: 1, chars: ["effie"], text: "Effie's Hunt Aspect revealed: enhances tracking, physical strength, and combat instincts far beyond human limits.", powerDetail: "Effie — Hunt Aspect unlocked (Rank: Awakened)." },
        { ch: 5, type: "event", spoiler: 1, chars: ["sunny", "nephis", "kai"], text: "Nephis is introduced — a strikingly beautiful Memory clan member radiating authority. Kai, the Arrow clan archer, completes the group. Nephis takes an immediate leadership role." },
        { ch: 5, type: "powerup", spoiler: 1, chars: ["nephis"], text: "Nephis's Flame Aspect is revealed: pure white flame that burns without fuel. Even at Awakened rank, its intensity is abnormal.", powerDetail: "Nephis — Flame Aspect unlocked (Rank: Awakened). Abnormally powerful from first manifestation." },
        { ch: 5, type: "lore", spoiler: 1, chars: ["nephis", "kai"], text: "The Memory Clan and Arrow Clan are introduced as two of the Great Clans — powerful human factions with competing interests in the Awakened world.", loreDetail: "Memory Clan, Arrow Clan, Great Clan political structure" },
        { ch: 6, type: "powerup", spoiler: 1, chars: ["kai"], text: "Kai's Arrow Aspect revealed: perfect accuracy and the ability to fire arrows that curve through impossible trajectories.", powerDetail: "Kai — Arrow Aspect unlocked (Rank: Awakened)." },
        { ch: 7, type: "event", spoiler: 1, chars: ["sunny"], text: "Sunny discovers his first shadow coin cache and realizes his Cursed Aspect may have hidden utility — but the rules are opaque. He keeps his abilities secret from the group." },
        { ch: 9, type: "event", spoiler: 2, chars: ["sunny", "nephis"], text: "The group forms an uneasy alliance to survive the First Nightmare together. Nephis lays down survival rules; Sunny subtly pushes back, revealing his independent mindset." },
        { ch: 10, type: "lore", spoiler: 1, chars: [], text: "The mechanics of the First Nightmare are fully explained: a 30-day survival trial. Those who survive and reach the exit inherit their first rank advancement.", loreDetail: "First Nightmare rules: 30 days, survival requirement, rank advancement on exit" },

        // ── CHAPTERS 11-50: FIRST NIGHTMARE SURVIVAL ──
        { ch: 15, type: "event", spoiler: 2, chars: ["sunny"], text: "Sunny silently uses his shadow coins to purchase a minor ability from the nightmare shop — confirming his Aspect has real utility, just hidden behind a currency mechanic." },
        { ch: 20, type: "powerup", spoiler: 2, chars: ["sunny"], text: "Sunny acquires his first Echo — a shadowy copy of a defeated nightmare creature he can summon. This reveals the true nature of the Cursed Aspect: an army-builder.", powerDetail: "Sunny — First Echo acquired. Echo System revealed: shadow copies of defeated nightmare creatures that answer only to Sunny." },
        { ch: 20, type: "lore", spoiler: 2, chars: ["sunny"], text: "The Echo System is revealed: most Awakened cannot collect echoes. Sunny's Cursed Aspect uniquely allows it, making him a potential commander of shadow armies.", loreDetail: "Echo System — exclusive to Sunny's Cursed Aspect. Echoes are shadow-bound copies of nightmare creatures." },
        { ch: 28, type: "event", spoiler: 2, chars: ["sunny", "nephis", "effie", "cassie", "kai"], text: "A Saint-rank nightmare ambushes the group near the exit gate. Nephis's flame aspect is not enough alone. The entire group cooperates in a desperate defensive stand." },
        { ch: 35, type: "event", spoiler: 2, chars: ["sunny", "nephis"], text: "Sunny secretly uses his shadow army to handle a nightmare threat while concealing his abilities from Nephis, attributing the outcome to 'luck'. Their dynamic tension deepens." },
        { ch: 40, type: "romance", spoiler: 3, chars: ["sunny", "nephis"], text: "A quiet moment between Sunny and Nephis during a rest period — the first flicker of personal connection beyond strategy and survival.", romanceDetail: "Sunny/Nephis — first genuine personal exchange. Nephis is vulnerable for a brief moment." },
        { ch: 50, type: "event", spoiler: 1, chars: ["sunny", "nephis", "cassie", "effie", "kai"], text: "The group exits the First Nightmare successfully. All five survive. Each achieves their first rank breakthrough. Sunny's shadow army stands at 3 echoes, known only to him.", },
        { ch: 50, type: "powerup", spoiler: 1, chars: ["sunny", "nephis", "cassie", "effie", "kai"], text: "Full group rank advancement: all five reach early Awakened rank consolidation. Sunny's shadow army secretly grows to 3 echoes.", powerDetail: "All — First Nightmare cleared, Awakened rank consolidated. Sunny: 3 Echoes." },

        // ── CHAPTERS 51-100: OUTSIDE WORLD ──
        { ch: 55, type: "event", spoiler: 1, chars: ["sunny", "nephis", "cassie", "effie", "kai"], text: "The group enters the real-world Awakened society — a complex political landscape of clans, factions, and nightmare management organizations." },
        { ch: 60, type: "lore", spoiler: 1, chars: [], text: "The full Great Clan structure is revealed: Memory Clan, Arrow Clan, Blood Faction, Valor Clan. Each controls different aspects of the Awakened world's political economy.", loreDetail: "Great Clans: Memory, Arrow, Blood Faction, Valor. Their roles in Awakened society." },
        { ch: 65, type: "event", spoiler: 2, chars: ["sunny"], text: "Sunny begins disguising his power level using his shadow aspect — appearing weaker than he is while quietly growing his echo army in secret missions." },
        { ch: 75, type: "event", spoiler: 2, chars: ["sunny"], text: "Sunny encounters a Master-rank nightmare solo and barely survives by using his echo army and cunning rather than direct power — his first truly independent combat test." },
        { ch: 80, type: "powerup", spoiler: 2, chars: ["sunny"], text: "Sunny's shadow army expands to 7 echoes. His combat capability far exceeds what his apparent rank suggests.", powerDetail: "Sunny — Echo army: 7 shadows. Shadow aspect begins developing offensive techniques." },
        { ch: 85, type: "event", spoiler: 2, chars: ["nephis"], text: "Nephis's Memory Clan heritage becomes a source of political complication — clan elders attempt to control her next move, setting up future conflict." },
        { ch: 88, type: "lore", spoiler: 2, chars: [], text: "Soul Aspects are explained in depth: secondary abilities that grow alongside the primary Aspect. The more Soul Aspects, the more versatile an Awakened.", loreDetail: "Soul Aspects: secondary abilities. Most gain 1-2. Sunny's Cursed Aspect is growing an unusual number." },
        { ch: 95, type: "event", spoiler: 2, chars: ["sunny", "cassie"], text: "Cassie delivers a prophecy directly to Sunny — cryptic but clearly personal. Sunny dismisses it, but the words lodge in his mind." },
        { ch: 100, type: "powerup", spoiler: 2, chars: ["nephis"], text: "Nephis's flame intensity doubles following a near-death nightmare encounter — the first sign that her aspect is growing at an unnatural rate.", powerDetail: "Nephis — Flame Aspect: abnormal growth spike. Clan elders alarmed." },

        // ── CHAPTERS 101-200: BLOOD FACTION & CLAN POLITICS ──
        { ch: 110, type: "event", spoiler: 2, chars: ["sunny", "kai"], text: "Kai begins subtly feeding Sunny intelligence about Arrow Clan's internal politics — the first break in the clan's disciplined secrecy." },
        { ch: 120, type: "event", spoiler: 2, chars: ["morgans"], text: "Morgan of the Blood Faction makes his first significant appearance — a pale, unsettling Master-rank Awakened with blood manipulation abilities and clearly hostile intentions.", },
        { ch: 120, type: "lore", spoiler: 2, chars: ["morgans"], text: "The Blood Faction's true nature is revealed: not merely a clan, but an extremist ideology using nightmare-derived blood rituals to enhance power beyond normal limits.", loreDetail: "Blood Faction: blood ritual power enhancement, anti-clan ideology, Morgan as enforcer." },
        { ch: 130, type: "event", spoiler: 2, chars: ["sunny", "morgans"], text: "Sunny and Morgan clash indirectly for the first time — Morgan attempts to intimidate Sunny, not knowing his true power level. Sunny plays dumb." },
        { ch: 145, type: "lore", spoiler: 2, chars: [], text: "First mention of the Moonless Seal — a mysterious curse-blessing older than the clans. Details are vague, but it is connected to memory and sacrifice.", loreDetail: "Moonless Seal: first mention. Connected to: memory loss, power amplification, sacrifice. Origin: pre-clan era." },
        { ch: 150, type: "powerup", spoiler: 2, chars: ["effie"], text: "Effie breaks through to Refined rank — the first of the main group after Sunny (who has been concealing level).", powerDetail: "Effie — Refined rank achieved. Hunt Aspect: physical parameters now exceed peak human by factor of 5." },
        { ch: 150, type: "event", spoiler: 2, chars: ["effie", "sunny"], text: "Effie's rank breakthrough happens mid-battle against a cluster of Awakened-rank nightmares. Her combat style shifts to aggressive dominance. Sunny observes with quiet jealousy concealed." },
        { ch: 165, type: "event", spoiler: 2, chars: ["kai"], text: "Kai reveals he has been reporting to Arrow Clan about the group's movements — a partial betrayal, though motivated by clan obligation rather than malice." },
        { ch: 180, type: "powerup", spoiler: 2, chars: ["sunny"], text: "Sunny's echo army reaches 12 members. He acquires a particularly powerful shadow — a former Master-rank nightmare creature — which he names secretly.", powerDetail: "Sunny — Echo army: 12 shadows. First Master-rank echo acquired." },
        { ch: 190, type: "death", spoiler: 3, chars: [], text: "Several unnamed secondary Awakened ally characters are killed during a coordinated Blood Faction ambush — establishing the Blood Faction as a genuine lethal threat.", deathDetail: "Minor named allies — killed in Blood Faction ambush. First major casualties in Sunny's extended circle." },
        { ch: 200, type: "event", spoiler: 2, chars: ["sunny", "nephis", "cassie", "effie", "kai"], text: "A massive nightmare dungeon is discovered near the edge of the known world — later identified as the Tomb of Ariel. Multiple Great Clans mobilize their best to claim it." },

        // ── CHAPTERS 201-400: TOMB OF ARIEL ARC ──
        { ch: 200, type: "lore", spoiler: 2, chars: [], text: "The Tomb of Ariel is unveiled: a legendary nightmare dungeon said to contain the soul legacy of Ariel, a Transcendent-rank being from history. Its interior defies normal nightmare rules.", loreDetail: "Tomb of Ariel: Ariel = Transcendent-rank historical figure. Tomb rewards scale with Awakened rank. Contains Ariel's memory legacies." },
        { ch: 220, type: "event", spoiler: 2, chars: ["sunny", "nephis", "morgans"], text: "Three-faction race into the Tomb of Ariel begins: Sunny's group, Memory Clan forces, and Morgan's Blood Faction agents all enter simultaneously, each pursuing the legacy." },
        { ch: 250, type: "powerup", spoiler: 2, chars: ["nephis"], text: "Nephis's flame aspect undergoes a qualitative shift deep in the Tomb — the flame turns from orange-white to pure white, burning cold and absolute.", powerDetail: "Nephis — Flame Aspect: qualitative shift. Cold white flame, burns absolutely without fuel or oxygen." },
        { ch: 280, type: "event", spoiler: 3, chars: ["sunny", "morgans"], text: "Sunny and Morgan face off directly for the first time inside the Tomb. Sunny reveals a portion of his shadow army capability — enough to drive Morgan off without exposing his true depth.", },
        { ch: 300, type: "powerup", spoiler: 2, chars: ["sunny"], text: "Sunny reaches 25 echoes — his army is now large enough to function as a genuine tactical force rather than just personal guards.", powerDetail: "Sunny — Echo army: 25 shadows. First emergence of coordinated shadow tactics." },
        { ch: 320, type: "lore", spoiler: 2, chars: [], text: "Ariel's memory is partially accessed: she was a Transcendent who chose to seal herself in the Tomb rather than Ascend, leaving her legacy for future generations.", loreDetail: "Ariel's sacrifice: chose containment over Ascension. Left behind memory-based power legacies." },
        { ch: 350, type: "powerup", spoiler: 2, chars: ["kai"], text: "Kai achieves Refined rank inside the Tomb. His Arrow Aspect evolves to allow mid-air course correction of arrows after release.", powerDetail: "Kai — Refined rank achieved. Arrow Aspect: post-release trajectory control unlocked." },
        { ch: 380, type: "event", spoiler: 3, chars: ["nephis"], text: "Nephis manifests her flame across an entire underground chamber — the scale stuns both allies and enemies. It is the first confirmed city-scale manifestation.", },
        { ch: 400, type: "event", spoiler: 2, chars: ["sunny", "nephis", "cassie", "effie", "kai"], text: "The group emerges from the Tomb of Ariel with Ariel's memory legacies secured. Major casualties on all other faction teams. The Tomb closes permanently." },
        { ch: 400, type: "lore", spoiler: 2, chars: [], text: "The Moonless Seal is confirmed to be directly linked to the Memory Clan's bloodline — and specifically to Nephis. Its activation conditions become clearer but still cryptic.", loreDetail: "Moonless Seal confirmed: Memory Clan bloodline specific. Nephis is a primary vessel. Activation: tied to extreme emotional/power states." },

        // ── CHAPTERS 401-600: POST-TOMB & RANK CLIMBING ──
        { ch: 420, type: "powerup", spoiler: 2, chars: ["sunny"], text: "Sunny advances to Refined rank — he can no longer hide his growth from close allies. Nephis and Effie notice the shift.", powerDetail: "Sunny — Refined rank achieved. Shadow Aspect: shadow mass can now manifest physically. Echo army: 35 shadows." },
        { ch: 450, type: "event", spoiler: 2, chars: ["sunny", "nephis"], text: "Sunny's closest-to-honest conversation with Nephis — he admits he has been hiding his true strength, though not the full extent. She accepts this without anger, which unnerves him." },
        { ch: 470, type: "romance", spoiler: 3, chars: ["sunny", "nephis"], text: "A single charged scene: Nephis acknowledges Sunny as an equal for the first time — not as a useful member, but as a person she specifically chose to protect.", romanceDetail: "Sunny/Nephis — first mutual acknowledgement as equals. Not romantic explicitly, but emotionally the clearest moment of connection." },
        { ch: 490, type: "lore", spoiler: 2, chars: [], text: "New nightmare zones open globally — not just dedicated dungeons, but nightmare incursions into the real world. Awakened society shifts to emergency footing.", loreDetail: "Global Incursion: nightmare zones merge with real-world geography. Cities at risk. Awakened now operate as emergency responders." },
        { ch: 500, type: "powerup", spoiler: 2, chars: ["nephis"], text: "Nephis achieves Refined rank — her advance is abnormally fast. The Memory Clan leadership panics.", powerDetail: "Nephis — Refined rank achieved. Flame Aspect: now generates flame that persists without her active attention." },
        { ch: 510, type: "event", spoiler: 2, chars: ["sunny"], text: "Sunny begins operating independently between missions — running solo deep-exploration runs through dangerous nightmare zones to accelerate echo acquisition." },
        { ch: 540, type: "powerup", spoiler: 2, chars: ["cassie"], text: "Cassie's prophecy aspect evolves — she begins experiencing temporal displacement, seeing 'threads' several days into the future rather than impressionistic flashes.", powerDetail: "Cassie — Prophecy Aspect: temporal range expanded. Futures now arrive as multi-day clear visions rather than symbolic impressions." },
        { ch: 560, type: "lore", spoiler: 2, chars: ["nephis"], text: "The Moonless Seal begins manifesting physically — Nephis reports fragments of memory going 'cold', as if coated in frost. She does not yet understand what this means.", loreDetail: "Moonless Seal: first physical symptom in Nephis. Memory degradation begins. Estimated timeline to full activation: unknown." },
        { ch: 580, type: "death", spoiler: 3, chars: [], text: "A named secondary character — an ally Awakened who had been supporting the group since chapter 70 — is killed in a Blood Faction ambush. The group mourns but cannot pause.", deathDetail: "Named supporting ally — killed, Blood Faction ambush. Establishes Blood Faction's willingness to escalate." },
        { ch: 600, type: "powerup", spoiler: 2, chars: ["sunny"], text: "Sunny's echo army crosses 50 members. His shadow aspect has developed 3 distinct soul aspects — all hidden from public knowledge.", powerDetail: "Sunny — Echo army: 50+ shadows. Soul Aspects: 3 confirmed, 2 suspected. One shadow has achieved independent tactical reasoning." },

        // ── CHAPTERS 601-900: THE NAMELESS & MASTER RANK ARC ──
        { ch: 620, type: "lore", spoiler: 2, chars: [], text: "The Nameless are introduced: a category of nightmare creature that moves without pattern, leaves no trace, and cannot be tracked by conventional Awakened means.", loreDetail: "Nameless: non-categorizable nightmare type. No echo acquisition possible. Appear to have purpose rather than instinct." },
        { ch: 650, type: "powerup", spoiler: 2, chars: ["effie"], text: "Effie achieves Master rank — the first of the core group to reach it. The transformation is visible: she grows several centimeters and her physical parameters double.", powerDetail: "Effie — Master rank achieved. Hunt Aspect: now commands lesser nightmare creatures passively during combat. Physical parameters: doubles previous Refined baseline." },
        { ch: 650, type: "event", spoiler: 2, chars: ["effie"], text: "Effie's Master rank breakthrough happens during a solo encounter with a Refined-rank nightmare — she exceeds her limits through pure willpower, not technique. The scene is widely regarded as one of the most dramatic rank-up moments in the story." },
        { ch: 680, type: "event", spoiler: 2, chars: ["kai"], text: "Kai reveals the Arrow Clan's true hidden agenda: they have been tracking the Moonless Seal's progression in Nephis for decades, waiting for a specific activation condition." },
        { ch: 700, type: "lore", spoiler: 2, chars: ["nephis"], text: "The Moonless Seal's origin is traced to a pre-clan compact: certain Memory bloodlines agreed to carry a 'sealing burden' in exchange for amplified flame aspect from birth.", loreDetail: "Moonless Seal origin: Memory Clan compact. Carrier gains amplified aspect at birth; pays with progressive memory loss in adulthood." },
        { ch: 730, type: "romance", spoiler: 3, chars: ["sunny", "nephis"], text: "Nephis tells Sunny she has been noticing memories 'becoming unreliable' — she doesn't name what she fears losing. Sunny, who understands, says nothing. The scene is devastating in subtext.", romanceDetail: "Sunny/Nephis — Nephis hints at memory fear without naming Sunny. He says nothing to protect her. First active sacrifice of connection." },
        { ch: 750, type: "powerup", spoiler: 2, chars: ["sunny"], text: "Sunny reaches the edge of Master rank. His shadow army now contains 2 truly exceptional echoes capable of independent strategic decision-making.", powerDetail: "Sunny — approaching Master rank threshold. Echo army: 73 members. 2 'general-tier' shadows with strategic reasoning." },
        { ch: 780, type: "lore", spoiler: 3, chars: [], text: "The Sovereign — a mysterious figure controlling nightmare zone fluctuations from the shadows — is first referenced by name. No identity is given, only that they exist above clan authority.", loreDetail: "The Sovereign: referenced for first time. Described as operating above the Great Clans. Connections to nightmare geography." },
        { ch: 820, type: "powerup", spoiler: 2, chars: ["kai"], text: "Kai achieves Master rank. His Arrow Aspect now generates 'phantom arrows' — trajectories that exist only in his perception until they strike.", powerDetail: "Kai — Master rank achieved. Arrow Aspect: Phantom Arrow technique. Arrows travel through perceptual space before materializing." },
        { ch: 860, type: "event", spoiler: 3, chars: ["sunny", "nephis"], text: "The Moonless Seal's first major activation: Nephis loses a block of memories covering approximately two weeks. She wakes disoriented, with gaps she cannot account for. Sunny is among the people she questions." },
        { ch: 900, type: "powerup", spoiler: 2, chars: ["sunny"], text: "Sunny achieves Master rank. The achievement is deliberately hidden from public record — he operates at two apparent rank levels below actual.", powerDetail: "Sunny — Master rank achieved. Shadow Aspect: can now generate autonomous shadow territory. Echo army: 73. True rank concealed." },

        // ── CHAPTERS 901-1100: MEMORY LOSS ARC ──
        { ch: 920, type: "event", spoiler: 3, chars: ["nephis", "sunny"], text: "Nephis undergoes the second major Moonless Seal activation. This time she loses over a month of memories — including all memories of several interactions with Sunny. He is still present but she treats him as a stranger she has been briefed about.", },
        { ch: 920, type: "lore", spoiler: 2, chars: ["nephis"], text: "The Moonless Seal's mechanism is now fully understood: it does not delete memories but 'seals' them behind a membrane that appears as genuine absence. The sealed memories still exist — they cannot be accessed.", loreDetail: "Moonless Seal mechanism: memories are sealed, not deleted. Accessible through the Seal's rupture — which requires conditions unknown to most." },
        { ch: 950, type: "event", spoiler: 3, chars: ["sunny"], text: "Sunny makes the decision not to tell Nephis what she has lost — protecting her from the grief of knowing while carrying the weight of it alone. This becomes his defining character choice of the arc." },
        { ch: 980, type: "powerup", spoiler: 2, chars: ["nephis"], text: "Despite memory loss, Nephis's flame aspect has not diminished — it has grown. The Seal's activation paradoxically amplifies her power while consuming her past.", powerDetail: "Nephis — Master rank achieved (confirmed). Flame Aspect: city-scale now sustainable without strain. Paradox: power grows as memory shrinks." },
        { ch: 1000, type: "lore", spoiler: 3, chars: [], text: "The Sovereign's shadow operations are confirmed: they have been deliberately engineering nightmare zone fluctuations to stress-test the Awakened world's limits — potentially to force a specific future outcome.", loreDetail: "Sovereign: confirmed as active manipulator. Motive: unknown. Method: nightmare zone engineering. Scale: global." },
        { ch: 1050, type: "event", spoiler: 2, chars: ["sunny", "morgans"], text: "Morgan and Sunny meet for the second major confrontation. Morgan has grown substantially since the Tomb. Sunny reveals more of his true power than intended, necessitating Morgan's 'disappearance' to maintain secrecy." },
        { ch: 1080, type: "powerup", spoiler: 2, chars: ["sunny"], text: "Sunny acquires his 7th Soul Aspect — an unprecedented number. The shadow army has grown to 80 echoes. He is now objectively Saint-rank capable, though officially Master.", powerDetail: "Sunny — Soul Aspects: 7 (unprecedented). Echo army: 80 shadows. Effective combat rank: Saint-level, official rank: Master." },
        { ch: 1100, type: "event", spoiler: 3, chars: ["nephis", "sunny"], text: "The Moonless Seal fully activates — Nephis loses all memories of Sunny from their shared history. She retains knowledge he exists (briefed by others) but has no emotional memory of their bond.", },

        // ── CHAPTERS 1101-1250: SAINT RANK THRESHOLD ──
        { ch: 1102, type: "lore", spoiler: 2, chars: ["cassie"], text: "Cassie delivers the prophecy: 'The blind shall see what the sighted cannot — a throne built of broken chains.' The context is unclear but its weight is unmistakable.", loreDetail: "Cassie's Ch.1102 Prophecy — key phrase: 'throne of broken chains'. Fulfillment: Chapter 1245." },
        { ch: 1110, type: "event", spoiler: 2, chars: ["sunny"], text: "Sunny enters his Saint rank breakthrough attempt — a grueling process requiring sustained combat against Transcendent-level nightmare creatures." },
        { ch: 1150, type: "powerup", spoiler: 2, chars: ["sunny"], text: "Sunny achieves Saint rank. His shadow aspect undergoes a fundamental transformation — the shadows become semi-real, able to affect the physical world directly.", powerDetail: "Sunny — Saint rank achieved. Shadow Aspect: shadows gain physical mass and density. Echo army: 87 shadows. Soul Aspects: 7." },
        { ch: 1180, type: "event", spoiler: 3, chars: ["sunny", "nephis"], text: "Nephis and Sunny work together on a nightmare incursion — she has no memory of their history but her instincts still route her toward him. He finds this more painful than her absence would be." },
        { ch: 1200, type: "powerup", spoiler: 2, chars: ["effie"], text: "Effie achieves a Master rank refinement breakthrough — her Hunt Aspect evolves to command Awakened-rank creatures willingly, not just nightmare creatures.", powerDetail: "Effie — Master rank: second evolution. Hunt Aspect: range extends to Awakened-class creatures. Physical parameters: tripled from Refined baseline." },
        { ch: 1220, type: "lore", spoiler: 3, chars: [], text: "The 'Last Nightmare' is mentioned by name for the first time — a theoretical state where the Nightmare Realm and the real world fully merge. The Sovereign is implied to be working toward it.", loreDetail: "Last Nightmare: first named reference. Theoretical merger of Nightmare Realm and real world. Sovereign implied as orchestrator. Timeline: unknown." },
        { ch: 1230, type: "event", spoiler: 3, chars: ["sunny"], text: "Sunny confronts a Transcendent-rank nightmare near the sealed Tomb of Ariel in what becomes the longest single combat in the story. He survives through accumulated shadow army coordination, not individual power." },
        { ch: 1240, type: "death", spoiler: 3, chars: [], text: "A Saint-rank ally from the Valor Clan — Aldric, who had been a recurring background figure — is killed in the Sovereign's first direct offensive action. It is the first Saint-rank death in the story.", deathDetail: "Aldric (Valor Clan, Saint rank) — killed. First Saint-rank death. Confirms Sovereign can threaten even Saint-rank Awakened directly." },
        { ch: 1245, type: "event", spoiler: 3, chars: ["cassie", "sunny"], text: "Cassie's prophecy from Ch.1102 fulfills: the 'throne of broken chains' appears as Sunny stands in the ruins of a shattered chain-seal structure within a nightmare zone. Cassie's reaction: 'I thought it would take longer.'", },
        { ch: 1248, type: "lore", spoiler: 3, chars: [], text: "New Sovereign identity hints dropped: a shadow sigil is left at the aftermath of Ch.1240's battle — matching no known clan. Closest match: a pre-clan symbol associated with Sunny's unrevealed origin.", loreDetail: "Sovereign identity: shadow sigil hint. Pre-clan symbol. Connection to Sunny's origin: unconfirmed but strongly implied." },
        { ch: 1250, type: "event", spoiler: 2, chars: ["sunny"], text: "Sunny's echo army approaches 100 members. He begins planning his next move knowing the Last Nightmare arc is coming — and that Nephis will face it without her memories of him.", },
    ],

    // ── CHARACTER INVENTORY DATABASE ──────────────────────────────────────────
    // slot: "weapon" | "offhand" | "armor" | "cloak" | "accessory" | "special"
    // rarity: "common" | "uncommon" | "rare" | "legendary" | "mythic"
    inventoryItems: {

        sunny: [
            { id: "s1", name: "Rusted Shiv", slot: "weapon", ch: 1, rarity: "common", emoji: "🗡️", image: "assets/items/rusted_shiv.png", color: "#888", desc: "A crude blade scavenged on the first night of the First Nightmare. Sunny's first real weapon — barely sharp, but kept him alive.", stat: "ATK +5 | Durability: Low" },
            { id: "s2", name: "Shadow Coin Pouch", slot: "accessory", ch: 2, rarity: "uncommon", emoji: "💰", image: "assets/items/shadow_coin_pouch.png", color: "#FFD700", desc: "The tangible manifestation of the Cursed Aspect. Shadow coins are Sunny's true currency — each one grants a choice instead of a power.", stat: "Aspect Resource | Regenerates in Nightmare" },
            { id: "s3", name: "Nightmare Leather Garb", slot: "armor", ch: 5, rarity: "common", emoji: "🧥", image: "assets/items/nightmare_leather_garb.png", color: "#4A4A6A", desc: "Crude armor crafted from nightmare creature hide during the First Nightmare survival arc. It absorbed several fatal blows.", stat: "DEF +8 | Nightmare Resistance: Low" },
            { id: "s13", name: "Mask of the Nameless", slot: "accessory", ch: 30, rarity: "legendary", emoji: "🎭", image: "assets/items/mask_of_nameless.png", color: "#2D0A3A", desc: "Sunny's most critical non-combat tool — a featureless dark mask worn to conceal his Awakened aura. Anyone looking at him through the mask sees only a Dormant with no power. His defining survival tool for hiding his true strength from allies and enemies alike.", stat: "Power Concealment: 100% | Rank Hidden | Aura: Dormant-level" },
            { id: "s4", name: "Iron Nightmare Blade", slot: "weapon", ch: 50, rarity: "uncommon", emoji: "⚔️", image: "assets/items/iron_nightmare_blade.png", color: "#7CA9C4", desc: "A solid weapon claimed after surviving the First Nightmare exit trial. Forged in nightmare iron — heavier than it looks, holds an edge.", stat: "ATK +22 | Durability: High | Nightmare-Iron" },
            { id: "s5", name: "Shadow Cloak", slot: "cloak", ch: 60, rarity: "rare", emoji: "🌑", image: "assets/items/shadow_cloak.png", color: "#1A1A3A", desc: "A cloak woven from condensed shadow essence — the first physical manifestation of Sunny's growing shadow aspect outside of combat.", stat: "Stealth +30 | Shadow Sense enabled | Visual concealment" },
            { id: "s14", name: "Bone Nightmare Pauldrons", slot: "armor", ch: 70, rarity: "rare", emoji: "🦴", image: "assets/items/bone_pauldrons.png", color: "#5A4A3A", desc: "Shoulder guards crafted from the bones of a Master-rank nightmare creature. They harden Sunny's upper body against slashing attacks.", stat: "DEF +28 | Slash Resistance | Master-Bone: reduces pain" },
            { id: "s6", name: "Shade's Binding", slot: "offhand", ch: 80, rarity: "rare", emoji: "👁️", image: "assets/items/shades_binding.png", color: "#C41E3A", desc: "The first echo — 'Shade' — bound to Sunny's will. Not held physically, but worn as a dark aura around the off-hand that extends into shadow.", stat: "Summons Shade | Echo Control I | Shadow Perception" },
            { id: "s15", name: "Echo Whisper", slot: "special", ch: 100, rarity: "rare", emoji: "🌀", image: "assets/items/echo_whisper.png", color: "#3A1A5A", desc: "An ability crystallized from Sunny's aspect — allows him to hear through any echo's senses regardless of distance. Critical for reconnaissance.", stat: "Echo Perception | Range: Unlimited | Sensory Link: all echoes" },
            { id: "s7", name: "Veil of Shadow", slot: "cloak", ch: 180, rarity: "legendary", emoji: "🌒", image: "assets/items/veil_of_shadow.png", color: "#6B21A8", desc: "A deeper manifestation of the shadow cloak — fully able to bend light around Sunny, rendering him practically invisible in darkness.", stat: "Stealth +75 | True Concealment | Shadow Walk I" },
            { id: "s16", name: "Carapace of Night", slot: "armor", ch: 220, rarity: "legendary", emoji: "🛡️", image: "assets/items/carapace_of_night.png", color: "#1A0A2E", desc: "Full-body armor grown from hardened shadow mass — not manufactured but manifested. It repairs itself by consuming nearby shadows.", stat: "DEF +50 | Self-Repair | Shadow Absorption: 25% dmg" },
            { id: "s8", name: "Echo Commander's Seal", slot: "accessory", ch: 300, rarity: "legendary", emoji: "☾", color: "#C41E3A", desc: "The crescent sigil that appears on Sunny's palm as his echo army exceeds 25. Commands coordinated tactical formation attacks.", stat: "Echo Command +25 | Formation Tactics | Shadow Sync" },
            { id: "s17", name: "Thorn of Nightmare", slot: "weapon", ch: 380, rarity: "legendary", emoji: "🖤", color: "#2A0A4A", desc: "A slim shadow-blade that grows from Sunny's forearm on command — functionally a part of his body. Cuts nightmare essence cleanly.", stat: "ATK +60 | Bodypart Weapon | Nightmare Sever | No Disarm" },
            { id: "s9", name: "Shadow Aspect Armor", slot: "armor", ch: 420, rarity: "legendary", emoji: "🛡️", color: "#1A0A2E", desc: "Armor that does not exist in the waking world — manifested fully from shadow mass upon reaching Refined rank. Absorbs non-light damage.", stat: "DEF +65 | Shadow Absorption | Rank: Refined" },
            { id: "s18", name: "Dream Ring — Nightmare Heart", slot: "accessory", ch: 450, rarity: "mythic", emoji: "💍", image: "assets/items/dream_ring.png", color: "#8B0050", desc: "A crystallized nightmare heart worn as a ring — it pulses with dream energy and amplifies Sunny's aspect in the nightmare realm by 40%.", stat: "Nightmare ATK/DEF +40% | Dream Anchor | Anti-Wake" },
            { id: "s10", name: "Blade of Severed Light", slot: "weapon", ch: 500, rarity: "legendary", emoji: "🌑", image: "assets/items/shadow_blade.png", color: "#4B0082", desc: "A shadow-forged blade that cuts both physical matter and nightmare essence. The edge is visible only to those with nightmare perception.", stat: "ATK +80 | Essence Cut | Ignores 40% armor" },
            { id: "s19", name: "Nameless Fragment — The Dreamless", slot: "special", ch: 600, rarity: "mythic", emoji: "⬛", image: "assets/items/nameless_fragment.png", color: "#0A0004", desc: "An aspect of Sunny's identity crystallized as an object — the Dreamless nature. He is the only Awakened who does not dream, which makes him invisible to certain nightmare detection systems.", stat: "Dream Invisibility | Nightmare Detection: immune | Dreamless State" },
            { id: "s11", name: "Shadow General's Mantle", slot: "cloak", ch: 750, rarity: "mythic", emoji: "🌑", image: "assets/items/shadow_general_mantle.png", color: "#3D0066", desc: "The 'general-tier' echo army signifier — a living cloak of shadows that responds to battlefield commands autonomously. Extremely rare.", stat: "Echo Command +73 | Auto-Formation | Master Rank Req." },
            { id: "s12", name: "Sovereign's Shadow Seal", slot: "special", ch: 900, rarity: "mythic", emoji: "☾", image: "assets/items/sovereign_shadow_seal.png", color: "#0A0014", desc: "The absolute manifestation of Sunny's Master-rank shadow aspect. A seal that can create shadow territory — a domain where all light is consumed.", stat: "Shadow Territory | Domain: 200m | Master Rank" },
        ],

        nephis: [
            { id: "n1", name: "Memory Clan Robe", slot: "armor", ch: 5, rarity: "uncommon", emoji: "👘", color: "#C8A882", desc: "Nephis arrived in the First Nightmare wearing her clan's ceremonial robes — woven with memory-enchanted thread. Elegant despite the battlefield.", stat: "DEF +6 | Memory Resistance | Clan Heritage" },
            { id: "n2", name: "Flame Edge Dagger", slot: "weapon", ch: 5, rarity: "uncommon", emoji: "🔥", color: "#FF6B00", desc: "Nephis's primary sidearm through the early arcs — a dagger that ignites with her flame aspect on contact. Precise, controlled, devastating.", stat: "ATK +18 | Flame Edge: Burns on strike | Fast Draw" },
            { id: "n3", name: "Flame Aspect Bracer", slot: "accessory", ch: 10, rarity: "rare", emoji: "🔥", color: "#FF8C00", desc: "Bracers that channel Nephis's flame aspect — allowing sustained flame projection without scorching her own hands.", stat: "Flame Control +20 | Sustained Burn | Aspect Channel" },
            { id: "n4", name: "White Flame Sword", slot: "weapon", ch: 100, rarity: "rare", emoji: "⚡", image: "assets/items/white_flame_sword.png", color: "#FFF5E0", desc: "A blade that burns with Nephis's abnormal white flame — not orange like normal fire. It sears nightmare essence directly.", stat: "ATK +45 | White Flame | Nightmare Sear | Anti-Shadow" },
            { id: "n5", name: "Flame Aspect Veil", slot: "cloak", ch: 150, rarity: "rare", emoji: "🌟", color: "#FFD700", desc: "A veil of accumulated flame aura — not actual cloth, but solidified heat that follows Nephis like a corona when she moves at speed.", stat: "Flame Aura: passive burn field | DEF +15 | Intimidation" },
            { id: "n6", name: "Memory Clan Guardian Shield", slot: "offhand", ch: 200, rarity: "legendary", emoji: "🛡️", color: "#8B7355", desc: "The Memory Clan's combat shield — engraved with the clan's founding memory-seals. Deflects both physical and memory-based attacks.", stat: "DEF +50 | Memory Seal: Resist memory disruption | Block" },
            { id: "n7", name: "Cold White Flame Armor", slot: "armor", ch: 250, rarity: "legendary", emoji: "❄️", color: "#E0F4FF", desc: "After Nephis's flame turns cold-white in the Tomb of Ariel, her armor transforms — appearing as frozen white fire that burns absolutely.", stat: "DEF +70 | Cold Flame Absorption | Absolute Zero field" },
            { id: "n8", name: "Flame Sovereign's Crown", slot: "accessory", ch: 400, rarity: "mythic", emoji: "👑", color: "#FFD700", desc: "Not a literal crown — a permanent manifestation of Nephis's flame aspect at its peak. The white flame forms a halo above her head in battle.", stat: "Flame Domain +50m | City-Scale Flame | Transcendent Aura" },
            { id: "n9", name: "Memory Clan Champion Blade", slot: "weapon", ch: 500, rarity: "mythic", emoji: "⚔️", color: "#FFEAA0", desc: "The Memory Clan's champion-grade weapon, formally granted to Nephis after her Refined rank advancement. Holds clan memories as power.", stat: "ATK +90 | Memory Resonance | Aspect Amplifier x2" },
        ],

        cassie: [
            { id: "c1", name: "Sightless Circlet", slot: "accessory", ch: 3, rarity: "uncommon", emoji: "🔮", color: "#9B59B6", desc: "A simple circlet Cassie wore from the beginning — it doesn't provide vision, but amplifies her prophecy aspect's thread-perception.", stat: "Prophecy Range: +50m | Thread Count: +10 | Focus" },
            { id: "c2", name: "Thread-Sight Staff", slot: "weapon", ch: 3, rarity: "rare", emoji: "🪄", color: "#7D3C98", desc: "A wooden staff Cassie uses to navigate without sight. The wood is from a nightmare tree — it resonates with fate threads.", stat: "ATK +8 | Fate Thread Sensor | Navigation in Darkness" },
            { id: "c3", name: "Prophecy Shroud", slot: "cloak", ch: 30, rarity: "rare", emoji: "🌌", color: "#2C1654", desc: "A dark cloak that swirls with faint starlight patterns when Cassie is actively seeing prophecies. Other Awakened find it unsettling.", stat: "Prophecy Stability +30 | Intimidation field: Seer" },
            { id: "c4", name: "Blind Oracle's Focus", slot: "offhand", ch: 50, rarity: "rare", emoji: "🔮", color: "#8A2BE2", desc: "A crystal orb Cassie uses to anchor large-scale prophecies — prevents her from getting lost in far-future visions.", stat: "Prophecy Anchor | Range +100% | Vision Stability" },
            { id: "c5", name: "Fate Thread Blade", slot: "weapon", ch: 100, rarity: "legendary", emoji: "🌠", color: "#6C3483", desc: "A knife Cassie carries — enchanted to cut fate threads in the physical world. She uses it when a vision shows a thread that must be severed.", stat: "ATK +30 | Thread Cut: severs minor fate events | Anti-Destiny" },
            { id: "c6", name: "Seer's Robes", slot: "armor", ch: 150, rarity: "legendary", emoji: "🌌", color: "#4A235A", desc: "Robes that adapt to the shape of emerging prophecies — patterns shift and change on the fabric as new futures present themselves.", stat: "DEF +25 | Prophecy Clarity +50 | Future Sight: passive" },
            { id: "c7", name: "Oracle's Chain", slot: "accessory", ch: 540, rarity: "mythic", emoji: "⛓️", color: "#9B59B6", desc: "After Cassie's prophecy aspect evolves to multi-day temporal range, this chain manifests — binding her to the present despite seeing days ahead.", stat: "Temporal Anchor | Prophecy Range: 72hrs | Present Lock" },
        ],

        effie: [
            { id: "e1", name: "Iron Gauntlets", slot: "offhand", ch: 4, rarity: "uncommon", emoji: "🥊", color: "#708090", desc: "Effie's preferred combat tool — iron gauntlets that reinforce her naturally superhuman punch force. She's never without them.", stat: "ATK +15 | Punch Force x2 | Bone Break chance: 20%" },
            { id: "e2", name: "Hunt Aspect Wraps", slot: "accessory", ch: 4, rarity: "rare", emoji: "🐾", color: "#2ECC71", desc: "Binding wraps that channel Effie's Hunt Aspect through her limbs — allowing her to track nightmare creatures by touch alone.", stat: "Hunt Tracking | Touch Perception | Speed +20%" },
            { id: "e3", name: "Nightmare Hide Plate", slot: "armor", ch: 20, rarity: "uncommon", emoji: "🛡️", color: "#556B2F", desc: "Heavy armor plates skinned from Awakened-class nightmare creatures. Effie cobbled it together herself — messy, heavy, very effective.", stat: "DEF +35 | Weight: Heavy | Nightmare Resistance: Mid" },
            { id: "e4", name: "Huntress Greatsword", slot: "weapon", ch: 50, rarity: "rare", emoji: "🗡️", color: "#228B22", desc: "An oversized blade suited to Effie's strength — most Awakened couldn't swing it, but she does so with terrifying speed.", stat: "ATK +55 | Two-handed | Cleave: hits 3 targets | Heavy" },
            { id: "e5", name: "Beast Pelt Cloak", slot: "cloak", ch: 100, rarity: "rare", emoji: "🌿", color: "#2D5A27", desc: "A cloak of woven nightmare beast pelts — they retain a faint hunt aura, making Effie harder to detect by scent or noise.", stat: "Stealth +20 | Hunt Aura | Beast Deterrent field" },
            { id: "e6", name: "Hunt Constellation Armbands", slot: "accessory", ch: 650, rarity: "mythic", emoji: "✨", color: "#00FF7F", desc: "Upon reaching Master rank, Effie's Hunt Aspect forms visible constellation patterns on her skin. The armbands are the physical focus.", stat: "Hunt Domain | Nightmare Command: passive | Master Rank" },
            { id: "e7", name: "Alpha Predator Armor", slot: "armor", ch: 650, rarity: "mythic", emoji: "🐉", color: "#006400", desc: "Post-Master rank armor — nightmare creatures of Awakened class instinctively submit when they see this armor, recognizing the Hunt Aspect's dominance.", stat: "DEF +110 | Creature Submission aura | Physical: x3 baseline" },
            { id: "e8", name: "Iron Fist of the Hunt", slot: "weapon", ch: 900, rarity: "mythic", emoji: "👊", color: "#008000", desc: "Effie's Master-rank weapon — an iron gauntlet infused with Hunt Aspect essence. Each punch creates a shockwave that stuns everything within 10m.", stat: "ATK +100 | Shockwave: 10m stun | Nightmare Crush | Master" },
        ],

        kai: [
            { id: "k1", name: "Arrow Clan Recurve Bow", slot: "weapon", ch: 5, rarity: "uncommon", emoji: "🏹", color: "#8B4513", desc: "Kai's primary weapon — an Arrow Clan precision recurve bow. The clan's mark is carved into the grip. Every shot is calculated.", stat: "ATK +20 | Precision: +40% | Range: 300m | Silent" },
            { id: "k2", name: "Clan Quiver — 24 Arrows", slot: "offhand", ch: 5, rarity: "uncommon", emoji: "🪶", color: "#A0522D", desc: "Arrow Clan signature arrows — fletched with nightmare raven feathers that stabilize trajectory in dimensional winds.", stat: "Arrow Capacity: 24 | Trajectory Stable | Piercing" },
            { id: "k3", name: "Hunter's Vest", slot: "armor", ch: 20, rarity: "uncommon", emoji: "🦺", color: "#6B5844", desc: "Light combat vest favored by Arrow Clan scouts — padded in the right places, open enough for full draw motion.", stat: "DEF +15 | Mobility: High | Draw Speed: +25%" },
            { id: "k4", name: "Phantom Arrow Quiver", slot: "offhand", ch: 350, rarity: "legendary", emoji: "💨", color: "#4169E1", desc: "After Refined rank — his arrows no longer need to follow physics. The quiver holds arrows that exist in perceptual space until they strike.", stat: "Phantom Trajectory | Curve: any angle | Invisible path" },
            { id: "k5", name: "Archer's Longcloak", slot: "cloak", ch: 100, rarity: "rare", emoji: "🌬️", color: "#1C3A5E", desc: "A long dark cloak designed to break silhouette — when Kai is still, he is essentially invisible against any natural backdrop.", stat: "Stealth +45 | Silhouette Break | Observation Resistance" },
            { id: "k6", name: "Arrow Clan Intelligence Seal", slot: "accessory", ch: 350, rarity: "legendary", emoji: "🎯", color: "#191970", desc: "After Kai reveals clan intel to Sunny — a personal seal that marks him as outside clan authority. It carries intelligence from clan archives.", stat: "Intel Access | Clan Network | Counter-Tracking" },
            { id: "k7", name: "Phantom Archer Armor", slot: "armor", ch: 820, rarity: "mythic", emoji: "👤", color: "#000080", desc: "Master rank armor that bends light slightly — Kai appears as a distortion rather than a person when wearing this at range.", stat: "DEF +80 | Light Bend | Location Confusion | Master Rank" },
            { id: "k8", name: "Star-Path Composite Bow", slot: "weapon", ch: 820, rarity: "mythic", emoji: "⭐", color: "#4682B4", desc: "Kai's Master rank weapon — a bow strung with condensed arrow aspect. The string appears as a line of starlight. Draws itself.", stat: "ATK +95 | Self-Draw | Range: 2000m | Aspect Amplified" },
        ],

        morgans: [
            { id: "m1", name: "Blood Faction Robes", slot: "armor", ch: 120, rarity: "uncommon", emoji: "🩸", color: "#8B0000", desc: "The signature deep crimson robes of the Blood Faction — woven with blood-sealing thread that prevents external manipulation of the wearer's blood.", stat: "DEF +20 | Blood Seal: self | Anti-Blood: resist" },
            { id: "m2", name: "Sanguine Dagger", slot: "weapon", ch: 120, rarity: "rare", emoji: "🔪", color: "#DC143C", desc: "Morgan's blade — forged with blood-iron alloy. Contact with blood (friend or enemy) triggers the blood manipulation aspect.", stat: "ATK +30 | Blood Trigger: on cut | Aspect Activation" },
            { id: "m3", name: "Bloodweave Gloves", slot: "offhand", ch: 120, rarity: "rare", emoji: "🩸", color: "#A00000", desc: "Thin gloves that allow Morgan to shape and project blood at range without physical contact — a signature Blood Faction technique.", stat: "Blood Range: 30m | Projection | No Contact Required" },
            { id: "m4", name: "Pallid Mask", slot: "accessory", ch: 130, rarity: "legendary", emoji: "🎭", color: "#DC143C", desc: "A bone-white mask Morgan wears in high-stakes encounters — it conceals his Awakened aura, making his rank undetectable.", stat: "Aura Concealment | Rank Hidden | Intimidation: extreme" },
            { id: "m5", name: "Blood Ritual Tome", slot: "special", ch: 200, rarity: "legendary", emoji: "📕", color: "#8B0000", desc: "A tome containing Blood Faction ritual techniques — amplification rituals that push power beyond normal rank limits at physical cost.", stat: "Ritual: Power x1.5 | Cost: HP 30% | Blood Beyond Rank" },
            { id: "m6", name: "Crimson War Plate", slot: "armor", ch: 280, rarity: "legendary", emoji: "🛡️", color: "#B22222", desc: "Armor assembled from nightmare creature bone plated with blood-iron. Morgan's personal combat gear for serious engagements.", stat: "DEF +60 | Blood Absorption | Self-Heal: 5% on kill" },
            { id: "m7", name: "Sovereign Blood Seal", slot: "special", ch: 1050, rarity: "mythic", emoji: "🩸", color: "#4A0000", desc: "After Morgan's deepening Blood Faction allegiances — a seal that marks him as aligned with forces beyond the Great Clans. Its true purpose is unknown.", stat: "Unknown Power | Sovereign Link | Blood Domain: 500m" },
        ]
    }
};

if (typeof module !== 'undefined') module.exports = RIFT_DATA;


console.log(JSON.stringify(Object.keys(RIFT_DATA.inventoryItems).flatMap(c => RIFT_DATA.inventoryItems[c].map(i => ({char: c, ...i}))).filter(i => !i.image), null, 2));
