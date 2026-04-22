// ============================================
// D&D 5e NPC Generator - Application
// ============================================

class NPCGeneratorApp {
    constructor() {
        this.form = document.getElementById('npcForm');
        this.outputDiv = document.getElementById('output');
        this.placeholderDiv = document.getElementById('placeholder');
        this.currentNPC = null;

        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();

        const options = {
            name: document.getElementById('name').value || null,
            race: document.getElementById('race').value || null,
            class: document.getElementById('class').value || null,
            role: document.getElementById('role').value || null,
            isBoss: document.getElementById('isBoss').checked
        };

        this.currentNPC = generator.generate(options);
        this.render();
    }

    render() {
        // Calculate ability score modifiers
        const abilityMods = this.currentNPC.abilityScores.map(a => a.mod);

        // Calculate various bonuses based on primary stat
        const primaryStatIdx = this.currentNPC.abilityScores.findIndex(a => a.name === ['STR', 'DEX', 'DEX', 'INT', 'WIS', 'CHA'][['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'].indexOf(this.getClassPrimaryStat())]);
        const primaryMod = abilityMods[primaryStatIdx] || abilityMods[0];
        const strMod = abilityMods[0];
        const dexMod = abilityMods[1];
        const wisMod = abilityMods[4];

        // Generate stat block HTML
        let html = `
            <div class="name">${this.currentNPC.name}</div>
            <div class="subtitle">${this.currentNPC.race} ${this.currentNPC.class}, Level ${this.currentNPC.level}</div>

            <h3>Essential Stats</h3>
            <div class="stat-row"><strong>AC:</strong> ${this.currentNPC.ac}</div>
            <div class="stat-row"><strong>HP:</strong> ${this.currentNPC.hp}</div>
            <div class="stat-row"><strong>Proficiency Bonus:</strong> +${this.currentNPC.profBonus}</div>
            <div class="stat-row"><strong>Speed:</strong> 30 ft.</div>

            <h3>Ability Scores</h3>
            <div class="abilities">
                ${this.currentNPC.abilityScores.map(a => `
                    <div class="ability">
                        <div class="ability-score">${a.score}</div>
                        <div class="ability-name">${a.name}</div>
                        <div class="ability-mod">${a.mod > 0 ? '+' + a.mod : a.mod}</div>
                    </div>
                `).join('')}
            </div>

            <h3>Traits</h3>
            <div class="traits">
                ${this.currentNPC.traits.map(t => `
                    <div class="trait">
                        <strong>Trait</strong>
                        ${t}
                    </div>
                `).join('')}
            </div>

            <h3>Combat</h3>
            <div class="stat-row"><strong>Melee Attack:</strong> ${this.currentNPC.weapons[0].name} +${primaryMod + this.currentNPC.profBonus} to hit, ${this.currentNPC.weapons[0].dmg} ${this.currentNPC.weapons[0].dmgType}</div>
            <div class="stat-row"><strong>Unarmed Strike:</strong> +${primaryMod + this.currentNPC.profBonus} to hit, 1d4 + ${primaryMod} bludgeoning</div>
            ${this.currentNPC.weapons[1] ? `<div class="stat-row"><strong>Secondary Weapon:</strong> ${this.currentNPC.weapons[1].name} +${primaryMod + this.currentNPC.profBonus} to hit, ${this.currentNPC.weapons[1].dmg} ${this.currentNPC.weapons[1].dmgType}</div>` : ''}

            ${this.currentNPC.spells.length > 0 ? `
                <h3>Spells</h3>
                <div class="stat-row"><strong>Spell Save DC:</strong> ${8 + this.getSpellMod(abilityMods)}</div>
                <div class="stat-row"><strong>Spell Attack:</strong> +${this.getSpellMod(abilityMods) + this.currentNPC.profBonus}</div>
                <ul class="spell-list">
                    ${this.currentNPC.spells.map(s => `<li>${s.name}</li>`).join('')}
                </ul>
            ` : ''}

            ${this.currentNPC.isBoss ? `
                <h3>Special Abilities</h3>
                <ul class="action-list">
                    ${this.currentNPC.specialAbilities.map(a => `<li><em>${a}</em></li>`).join('')}
                </ul>

                <h3>Legendary Actions (3/turn)</h3>
                <ul class="action-list">
                    ${this.currentNPC.legendaryActions.map(a => `<li><em>${a}</em></li>`).join('')}
                </ul>
            ` : ''}
        `;

        this.outputDiv.innerHTML = html;
        this.outputDiv.classList.remove('hidden');
        this.placeholderDiv.style.display = 'none';
    }

    getClassPrimaryStat() {
        const statMap = {
            'Barbarian': 'STR',
            'Bard': 'CHA',
            'Cleric': 'WIS',
            'Druid': 'WIS',
            'Fighter': 'STR',
            'Monk': 'DEX',
            'Paladin': 'STR',
            'Ranger': 'DEX',
            'Rogue': 'DEX',
            'Sorcerer': 'CHA',
            'Warlock': 'CHA',
            'Wizard': 'INT'
        };
        return statMap[this.currentNPC.class] || 'STR';
    }

    getSpellMod(abilityMods) {
        const classSpellStatMap = {
            'Cleric': 4, // WIS
            'Druid': 4, // WIS
            'Ranger': 4, // WIS
            'Bard': 5, // CHA
            'Sorcerer': 5, // CHA
            'Warlock': 5, // CHA
            'Wizard': 3, // INT
            'Paladin': 5 // CHA
        };
        const index = classSpellStatMap[this.currentNPC.class];
        return abilityMods[index] || 0;
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new NPCGeneratorApp();
});
