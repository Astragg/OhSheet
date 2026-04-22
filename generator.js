// ============================================
// D&D 5e NPC Generator - Logic Engine
// ============================================

class NPCGenerator {
    constructor() {
        this.data = NPC_DATA;
    }

    // Random utilities
    random(max) {
        return Math.floor(Math.random() * max);
    }

    choose(array) {
        return array[this.random(array.length)];
    }

    roll(num = 1, sides = 6) {
        let total = 0;
        for (let i = 0; i < num; i++) {
            total += this.random(sides) + 1;
        }
        return total;
    }

    // Generate ability scores using 4d6 drop lowest
    generateAbilityScores() {
        const scores = [];
        for (let i = 0; i < 6; i++) {
            const rolls = [];
            for (let j = 0; j < 4; j++) {
                rolls.push(this.random(6) + 1);
            }
            rolls.sort((a, b) => a - b);
            scores.push(rolls.slice(1).reduce((a, b) => a + b, 0)); // Drop lowest
        }
        return scores;
    }

    // Apply race bonuses
    applyRaceBonus(scores, race) {
        const raceData = this.data.races[race];
        if (!raceData) return scores;
        
        const bonuses = raceData.abilityBonus;
        return scores.map((score, i) => score + bonuses[i]);
    }

    // Calculate modifiers from ability scores
    calculateMods(scores) {
        return scores.map(score => Math.floor((score - 10) / 2));
    }

    // Generate complete NPC
    generate(options = {}) {
        // Select race
        const raceKey = options.race || this.choose(Object.keys(this.data.races));
        const race = this.data.races[raceKey];

        // Select class
        const classKey = options.class || this.choose(Object.keys(this.data.classes));
        const classData = this.data.classes[classKey];

        // Determine level
        let level = options.isBoss ? this.random(6) + 9 : this.random(8) + 1; // 9-15 for bosses, 1-8 for normal
        if (options.isBoss) level = Math.max(5, level);

        // Generate ability scores
        let abilityScores = this.generateAbilityScores();
        abilityScores = this.applyRaceBonus(abilityScores, raceKey);

        // Rearrange scores to fit class
        const scores = this.optimizeScores(abilityScores, classData);
        const mods = this.calculateMods(scores);

        // Calculate HP
        const hpPerLevel = classData.hpPerLevel;
        const hpRoll = this.roll(level, hpPerLevel) + (level * mods[2]); // CON mod for each level
        const hp = Math.max(1, hpRoll);
        const bossHp = options.isBoss ? Math.floor(hp * 1.5) : hp;

        // Calculate AC
        let ac = 10;
        if (classKey === 'rogue') ac = 12 + mods[1]; // DEX for rogue
        else if (classKey === 'monk') ac = 10 + mods[1] + mods[4]; // DEX + WIS
        else ac = 10 + mods[1]; // Default DEX

        // Proficiency bonus
        const profBonus = Math.ceil(level / 4) + 1;

        // Select weapons
        const weapons = this.selectWeapons(classKey, mods);

        // Select spells if caster
        const spells = classData.caster ? this.selectSpells(classData, level) : [];

        // Select traits
        const traits = [
            this.choose(this.data.traits),
            this.choose(this.data.traits)
        ];

        // Generate name
        const name = options.name || this.generateName();

        // Special abilities for bosses
        const specialAbilities = options.isBoss ? this.generateSpecialAbilities(classKey, level, mods) : [];

        // Legendary actions for bosses
        const legendaryActions = options.isBoss ? this.generateLegendaryActions(weapons[0], spells) : [];

        return {
            name,
            race: race.name,
            class: classData.name,
            level,
            hp: bossHp,
            ac,
            abilityScores: ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'].map((name, i) => ({
                name,
                score: scores[i],
                mod: mods[i]
            })),
            profBonus,
            weapons,
            spells,
            traits,
            isBoss: options.isBoss,
            specialAbilities,
            legendaryActions,
            role: options.role || this.generateRole(classKey)
        };
    }

    // Optimize ability scores for class
    optimizeScores(scores, classData) {
        const profs = classData.proficiencies;
        const abilityNames = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
        
        // Sort and assign highest to primary stat
        const sorted = [...scores].sort((a, b) => b - a);
        const assigned = new Array(6);
        
        // Assign highest to primary proficiency
        const primaryIdx = abilityNames.indexOf(profs[0]);
        assigned[primaryIdx] = sorted[0];
        
        // Assign next highest to secondary or CON
        const conIdx = 2;
        assigned[conIdx] = assigned[conIdx] || sorted[1];
        
        // Fill rest
        let scoreIdx = 0;
        for (let i = 0; i < 6; i++) {
            if (assigned[i] === undefined) {
                while (scoreIdx < sorted.length && sorted[scoreIdx] === assigned[primaryIdx]) scoreIdx++;
                assigned[i] = sorted[scoreIdx] || 10;
                scoreIdx++;
            }
        }
        
        return assigned;
    }

    // Select appropriate weapons
    selectWeapons(classKey, mods) {
        let weapons = [];
        
        switch(classKey) {
            case 'barbarian':
                weapons.push(this.data.weapons.melee[5]); // Greataxe
                break;
            case 'fighter':
                weapons.push(this.data.weapons.melee[0]); // Longsword
                weapons.push(this.data.weapons.ranged[0]); // Longbow
                break;
            case 'rogue':
                weapons.push(this.data.weapons.melee[3]); // Shortsword
                weapons.push(this.data.weapons.melee[11]); // Dagger
                break;
            case 'ranger':
                weapons.push(this.data.weapons.melee[0]); // Longsword
                weapons.push(this.data.weapons.ranged[0]); // Longbow
                break;
            case 'paladin':
                weapons.push(this.data.weapons.melee[0]); // Longsword
                break;
            case 'monk':
                weapons.push(this.data.weapons.melee[8]); // Spear
                break;
            case 'cleric':
                weapons.push(this.data.weapons.melee[7]); // War Pick
                break;
            case 'druid':
                weapons.push(this.data.weapons.melee[8]); // Spear
                break;
            case 'bard':
                weapons.push(this.data.weapons.melee[2]); // Rapier
                break;
            case 'warlock':
            case 'sorcerer':
            case 'wizard':
                weapons.push(this.data.weapons.melee[11]); // Dagger
                break;
            default:
                weapons.push(this.choose(this.data.weapons.melee));
        }
        
        return weapons;
    }

    // Select spells for casters
    selectSpells(classData, level) {
        const castingStat = classData.castingStat;
        const spells = [];

        // Always add cantrips
        const cantrips = this.data.spells.cantrip.filter(s => !spells.some(sp => sp.name === s.name));
        spells.push(this.choose(cantrips));
        spells.push(this.choose(cantrips));

        // Add leveled spells based on level
        if (level >= 1) {
            const lvl1 = this.data.spells.level1.filter(s => !spells.some(sp => sp.name === s.name));
            spells.push(this.choose(lvl1));
            spells.push(this.choose(lvl1));
        }
        if (level >= 3) {
            const lvl2 = this.data.spells.level2.filter(s => !spells.some(sp => sp.name === s.name));
            spells.push(this.choose(lvl2));
        }
        if (level >= 5) {
            const lvl3 = this.data.spells.level3.filter(s => !spells.some(sp => sp.name === s.name));
            spells.push(this.choose(lvl3));
        }

        return spells.slice(0, 6);
    }

    // Generate special abilities for bosses
    generateSpecialAbilities(classKey, level, mods) {
        const abilities = [];

        const specialAbilityTemplates = {
            barbarian: [
                'Reckless Attack - Attack with advantage; enemies attack with advantage against you',
                'Relentless - Can move up to half its speed when reduced to 0 HP'
            ],
            wizard: [
                'Legendary Resistance - Can add +4 to its saving throw against spells',
                'Spellcasting - Spell attack bonus is +' + (mods[3] + 2) + ', spell DC is ' + (8 + mods[3] + 2)
            ],
            fighter: [
                'Second Wind - Use bonus action to regain ' + (this.roll(1, 10) + 4) + ' HP',
                'Action Surge - Take an extra action on its turn'
            ],
            rogue: [
                'Sneak Attack - Deal extra ' + (2 + Math.ceil(level / 3)) + 'd6 damage when conditions met',
                'Cunning Action - Use bonus action to Disengage or Hide'
            ],
            paladin: [
                'Divine Smite - Can spend spell slot to deal extra 1d8 radiant damage',
                'Aura of Protection - Allies within 10 ft gain +' + Math.ceil(level / 5) + ' to saving throws'
            ]
        };

        if (specialAbilityTemplates[classKey]) {
            abilities.push(...specialAbilityTemplates[classKey].slice(0, 2));
        }

        return abilities;
    }

    // Generate legendary actions for bosses
    generateLegendaryActions(primaryWeapon, spells) {
        return [
            'Move - Move up to half its speed',
            'Attack - Make one attack with ' + primaryWeapon.name,
            spells.length > 0 ? 'Cast Spell (Costs 2) - Cast a cantrip or spell' : 'Second Weapon Attack (Costs 2) - Make another attack'
        ];
    }

    // Generate random name
    generateName() {
        const gender = this.random(2) === 0 ? 'male' : 'female';
        const firstName = this.choose(this.data.names[gender]);
        const surname = this.choose(this.data.names.surnames);
        return `${firstName} ${surname}`;
    }

    // Generate role description
    generateRole(classKey) {
        const roles = {
            barbarian: 'Fierce melee combatant with wild power',
            fighter: 'Disciplined warrior of skill and endurance',
            rogue: 'Cunning operator in shadows and secrets',
            ranger: 'Skilled tracker and sharp-eyed scout',
            paladin: 'Holy warrior bound by oath',
            monk: 'Disciplined martial artist of body and mind',
            cleric: 'Divine spellcaster and healer',
            druid: 'Guardian of nature and primal magic',
            bard: 'Charismatic performer and versatile caster',
            warlock: 'Eldritch pact maker with dark power',
            sorcerer: 'Wild spellcaster of innate magic',
            wizard: 'Scholarly master of arcane arts'
        };
        return roles[classKey] || 'Adventurer of unknown specialty';
    }
}

// Create global instance
const generator = new NPCGenerator();
