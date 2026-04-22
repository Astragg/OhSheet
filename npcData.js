// ============================================
// D&D 5e SRD NPC Generator - Data
// ============================================

const NPC_DATA = {
    races: {
        human: { name: 'Human', abilityBonus: [1, 1, 1, 1, 1, 1] },
        elf: { name: 'Elf', abilityBonus: [0, 2, 0, 0, 1, 0] },
        dwarf: { name: 'Dwarf', abilityBonus: [0, 0, 2, 0, 1, 0] },
        halfling: { name: 'Halfling', abilityBonus: [0, 2, 0, 0, 0, 1] },
        dragonborn: { name: 'Dragonborn', abilityBonus: [2, 0, 0, 0, 0, 1] },
        gnome: { name: 'Gnome', abilityBonus: [0, 0, 0, 2, 0, 0] },
        'half-elf': { name: 'Half-Elf', abilityBonus: [0, 0, 0, 0, 0, 2], otherBonus: [1, 1] },
        'half-orc': { name: 'Half-Orc', abilityBonus: [2, 0, 1, -2, 0, -1] },
        tiefling: { name: 'Tiefling', abilityBonus: [0, 0, 0, 1, 0, 2] },
    },

    classes: {
        barbarian: {
            name: 'Barbarian',
            hpPerLevel: 12,
            baseAbilities: [15, 10, 14, 8, 11, 10],
            proficiencies: ['STR', 'CON'],
            primaryStat: 'STR'
        },
        bard: {
            name: 'Bard',
            hpPerLevel: 8,
            baseAbilities: [10, 14, 11, 12, 13, 15],
            proficiencies: ['DEX', 'CHA'],
            primaryStat: 'CHA',
            caster: true,
            castingStat: 'CHA'
        },
        cleric: {
            name: 'Cleric',
            hpPerLevel: 8,
            baseAbilities: [13, 10, 14, 12, 15, 11],
            proficiencies: ['WIS', 'STR'],
            primaryStat: 'WIS',
            caster: true,
            castingStat: 'WIS'
        },
        druid: {
            name: 'Druid',
            hpPerLevel: 8,
            baseAbilities: [10, 12, 13, 12, 15, 11],
            proficiencies: ['WIS', 'INT'],
            primaryStat: 'WIS',
            caster: true,
            castingStat: 'WIS'
        },
        fighter: {
            name: 'Fighter',
            hpPerLevel: 10,
            baseAbilities: [15, 13, 14, 10, 11, 10],
            proficiencies: ['STR', 'DEX'],
            primaryStat: 'STR'
        },
        monk: {
            name: 'Monk',
            hpPerLevel: 8,
            baseAbilities: [13, 15, 12, 11, 14, 10],
            proficiencies: ['DEX', 'WIS'],
            primaryStat: 'DEX'
        },
        paladin: {
            name: 'Paladin',
            hpPerLevel: 10,
            baseAbilities: [15, 11, 13, 10, 12, 14],
            proficiencies: ['STR', 'CHA'],
            primaryStat: 'STR',
            caster: true,
            castingStat: 'CHA'
        },
        ranger: {
            name: 'Ranger',
            hpPerLevel: 10,
            baseAbilities: [14, 15, 12, 11, 13, 10],
            proficiencies: ['DEX', 'WIS'],
            primaryStat: 'DEX',
            caster: true,
            castingStat: 'WIS'
        },
        rogue: {
            name: 'Rogue',
            hpPerLevel: 8,
            baseAbilities: [10, 16, 11, 13, 12, 12],
            proficiencies: ['DEX', 'INT'],
            primaryStat: 'DEX'
        },
        sorcerer: {
            name: 'Sorcerer',
            hpPerLevel: 6,
            baseAbilities: [10, 12, 13, 10, 11, 15],
            proficiencies: ['CHA', 'CON'],
            primaryStat: 'CHA',
            caster: true,
            castingStat: 'CHA'
        },
        warlock: {
            name: 'Warlock',
            hpPerLevel: 8,
            baseAbilities: [10, 12, 13, 12, 12, 15],
            proficiencies: ['CHA', 'INT'],
            primaryStat: 'CHA',
            caster: true,
            castingStat: 'CHA'
        },
        wizard: {
            name: 'Wizard',
            hpPerLevel: 6,
            baseAbilities: [10, 12, 13, 15, 13, 11],
            proficiencies: ['INT', 'WIS'],
            primaryStat: 'INT',
            caster: true,
            castingStat: 'INT'
        }
    },

    weapons: {
        melee: [
            { name: 'Longsword', dmg: '1d8', dmgType: 'slashing', bonus: 1, twohanded: false },
            { name: 'Greatsword', dmg: '2d6', dmgType: 'slashing', bonus: 2, twohanded: true },
            { name: 'Rapier', dmg: '1d8', dmgType: 'piercing', bonus: 1, finesse: true },
            { name: 'Shortsword', dmg: '1d6', dmgType: 'piercing', bonus: 1, finesse: true },
            { name: 'Battleaxe', dmg: '1d8', dmgType: 'slashing', bonus: 1, twohanded: false },
            { name: 'Greataxe', dmg: '1d12', dmgType: 'slashing', bonus: 2, twohanded: true },
            { name: 'Warhammer', dmg: '1d8', dmgType: 'bludgeoning', bonus: 1, twohanded: false },
            { name: 'War Pick', dmg: '1d8', dmgType: 'piercing', bonus: 1, twohanded: false },
            { name: 'Spear', dmg: '1d6', dmgType: 'piercing', bonus: 1, twohanded: false },
            { name: 'Pike', dmg: '1d10', dmgType: 'piercing', bonus: 1, twohanded: true },
            { name: 'Club', dmg: '1d4', dmgType: 'bludgeoning', bonus: 0, twohanded: false },
            { name: 'Dagger', dmg: '1d4', dmgType: 'piercing', bonus: 0, finesse: true },
        ],
        ranged: [
            { name: 'Longbow', dmg: '1d8', dmgType: 'piercing', bonus: 1, ammo: 'arrows' },
            { name: 'Shortbow', dmg: '1d6', dmgType: 'piercing', bonus: 1, ammo: 'arrows' },
            { name: 'Hand Crossbow', dmg: '1d6', dmgType: 'piercing', bonus: 1, ammo: 'bolts' },
            { name: 'Light Crossbow', dmg: '1d8', dmgType: 'piercing', bonus: 1, ammo: 'bolts' },
        ]
    },

    spells: {
        cantrip: [
            { name: 'Acid Splash', level: 0, castingStat: 'INT' },
            { name: 'Fire Bolt', level: 0, castingStat: 'INT' },
            { name: 'Light', level: 0, castingStat: 'INT' },
            { name: 'Mage Hand', level: 0, castingStat: 'INT' },
            { name: 'Prestidigitation', level: 0, castingStat: 'INT' },
            { name: 'Ray of Frost', level: 0, castingStat: 'INT' },
            { name: 'Shocking Grasp', level: 0, castingStat: 'INT' },
            { name: 'Sacred Flame', level: 0, castingStat: 'WIS' },
            { name: 'Guidance', level: 0, castingStat: 'WIS' },
            { name: 'Resistance', level: 0, castingStat: 'WIS' },
            { name: 'Thaumaturgy', level: 0, castingStat: 'WIS' },
            { name: 'Thorn Whip', level: 0, castingStat: 'WIS' },
            { name: 'Fire Bolt', level: 0, castingStat: 'CHA' },
            { name: 'Friends', level: 0, castingStat: 'CHA' },
            { name: 'Mage Hand', level: 0, castingStat: 'CHA' },
            { name: 'Message', level: 0, castingStat: 'CHA' },
            { name: 'Minor Illusion', level: 0, castingStat: 'CHA' },
            { name: 'Prestidigitation', level: 0, castingStat: 'CHA' },
        ],
        level1: [
            { name: 'Cure Wounds', level: 1, castingStat: 'WIS' },
            { name: 'Healing Word', level: 1, castingStat: 'WIS' },
            { name: 'Bless', level: 1, castingStat: 'WIS' },
            { name: 'Command', level: 1, castingStat: 'WIS' },
            { name: 'Detect Magic', level: 1, castingStat: 'WIS' },
            { name: 'Guiding Bolt', level: 1, castingStat: 'WIS' },
            { name: 'Identify', level: 1, castingStat: 'INT' },
            { name: 'Magic Missile', level: 1, castingStat: 'INT' },
            { name: 'Mage Armor', level: 1, castingStat: 'INT' },
            { name: 'Shield', level: 1, castingStat: 'INT' },
            { name: 'Burning Hands', level: 1, castingStat: 'INT' },
            { name: 'Fog Cloud', level: 1, castingStat: 'INT' },
            { name: 'Sleep', level: 1, castingStat: 'INT' },
            { name: 'Thunderwave', level: 1, castingStat: 'INT' },
            { name: 'Charm Person', level: 1, castingStat: 'CHA' },
            { name: 'Disguise Self', level: 1, castingStat: 'CHA' },
            { name: 'Feather Fall', level: 1, castingStat: 'DEX' },
            { name: 'Cure Wounds', level: 1, castingStat: 'WIS' },
        ],
        level2: [
            { name: 'Hold Person', level: 2, castingStat: 'WIS' },
            { name: 'Spiritual Weapon', level: 2, castingStat: 'WIS' },
            { name: 'Scorching Ray', level: 2, castingStat: 'INT' },
            { name: 'Invisibility', level: 2, castingStat: 'INT' },
            { name: 'Misty Step', level: 2, castingStat: 'INT' },
            { name: 'Blur', level: 2, castingStat: 'INT' },
            { name: 'Suggestion', level: 2, castingStat: 'CHA' },
            { name: 'Mirror Image', level: 2, castingStat: 'INT' },
            { name: 'Knock', level: 2, castingStat: 'INT' },
            { name: 'Phantasmal Force', level: 2, castingStat: 'INT' },
        ],
        level3: [
            { name: 'Fireball', level: 3, castingStat: 'INT' },
            { name: 'Lightning Bolt', level: 3, castingStat: 'INT' },
            { name: 'Counterspell', level: 3, castingStat: 'INT' },
            { name: 'Dispel Magic', level: 3, castingStat: 'WIS' },
            { name: 'Haste', level: 3, castingStat: 'INT' },
            { name: 'Magic Circle', level: 3, castingStat: 'WIS' },
            { name: 'Animate Dead', level: 3, castingStat: 'INT' },
            { name: 'Call Lightning', level: 3, castingStat: 'WIS' },
            { name: 'Hypnotic Pattern', level: 3, castingStat: 'INT' },
        ],
    },

    traits: [
        'Aggressive',
        'Cautious',
        'Cunning',
        'Disciplined',
        'Erratic',
        'Honorable',
        'Loyal',
        'Paranoid',
        'Proud',
        'Reckless',
        'Tactical',
        'Timid',
        'Vengeful',
        'Wise',
    ],

    names: {
        male: [
            'Aldric', 'Brennan', 'Cedric', 'Darius', 'Eamon',
            'Garrett', 'Henrik', 'Ivan', 'Jorvard', 'Kael',
            'Leoric', 'Morven', 'Nathaniel', 'Oswin', 'Percival',
            'Quinn', 'Roland', 'Silas', 'Theron', 'Ulrich'
        ],
        female: [
            'Adrienne', 'Brianna', 'Cassandra', 'Delilah', 'Elena',
            'Freya', 'Gwendolyn', 'Helena', 'Iris', 'Joanna',
            'Keira', 'Lydia', 'Magda', 'Nalya', 'Ophelia',
            'Piper', 'Rosalind', 'Sylvia', 'Talia', 'Ursula'
        ],
        surnames: [
            'Aldridge', 'Blackthorn', 'Caspian', 'Darkcrest', 'Emsworth',
            'Fireheart', 'Goldleaf', 'Hardwick', 'Ironside', 'Jasper',
            'Kingsley', 'Lockhart', 'Mara', 'Northridge', 'Orwell',
            'Parsons', 'Quinlan', 'Ravenswood', 'Stonewall', 'Thorne'
        ]
    }
};
