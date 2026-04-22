# ✨ Arcane NPC Forge ✨
## Magical Futuristic D&D 5e NPC Generator

A stunning, ethereal web-based tool for Dungeon Masters to summon complete NPC stat blocks using SRD (free) D&D 5e content. Features a cosmic, glass-morphism aesthetic with fluid animations.

## 🌟 Features

- **Magical Futuristic UI**: Cosmic backdrop with aurora effects, neon accents, and glass-morphism panels
- **Quick Generation**: Create fully-formed NPCs in seconds
- **Customizable Creation**: Specify race, class, level, archetype, or let fate decide
- **JSON Export**: Download generated characters as portable JSON files
- **JSON Import**: Load previously saved characters
- **Print Support**: Print-optimized stat blocks
- **Boss Creation**: Generate enhanced enemies with special abilities & legendary actions
- **SRD Only**: All content is free-to-use D&D 5e SRD material
- **Zero Dependencies**: Pure vanilla JavaScript - no frameworks or libraries
- **Works Offline**: All processing happens in your browser

## 🎭 What You Get

Each NPC includes:
- Name, race, class, and level
- Armor Class & Hit Points
- All 6 ability scores with modifiers
- Combat-ready weapons and damage calculations
- Spells for spellcasting classes
- Two personality traits
- Boss enemies feature special abilities and 3 legendary actions

## 🚀 Quick Start

1. **Open** `index.html` in any modern web browser
2. **Configure** your NPC preferences (or leave blank for random)
3. **Click** "Forge Character"
4. **Manage** your character:
   - 💾 **Download** - Save as JSON file
   - 📁 **Load** - Import a previously saved JSON
   - 🖨️ **Print** - Print-friendly output

## ⚙️ Configuration Options

### Generation Parameters
- **Character Name**: Auto-generates if left blank
- **Race**: 9 core D&D races (or random)
- **Class**: 12 core D&D classes (or random)
- **Archetype**: 8 combat roles (Warrior, Duelist, Archer, Spellcaster, Healer, Rogue, Tank, Assassin)
- **Level**: 1-15 (or random)
- **Boss Mode**: Enhanced stats, special abilities, and legendary actions

## 🎨 Design Aesthetic

- **Color Palette**: Deep cosmic blues, cyan neon, magenta accents, purple glows
- **Typography**: Orbitron for headings (futuristic), Poppins for UI, JetBrains Mono for stat blocks
- **Effects**: 
  - Aurora animations
  - Glowing elements on interaction
  - Glass-morphism panels
  - Smooth gradient transitions
  - Cosmic starfield background
- **Responsiveness**: Fully mobile-friendly

## 📊 Supported Content

### Classes (12)
Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rogue, Sorcerer, Warlock, Wizard

### Races (9)
Human, Elf, Dwarf, Halfling, Dragonborn, Gnome, Half-Elf, Half-Orc, Tiefling

### Weapons
Multiple melee and ranged weapons with proper scaling

### Spells
Cantrips and 1st-3rd level SRD spells for casters

## 📁 File Structure

```
dnd-npc-generator/
├── index.html          # Main application (futuristic UI)
├── styles-magic.css    # Stunning cosmic styling
├── npcData.js         # SRD game data
├── generator.js       # Character generation engine
├── app-fixed.js       # UI logic with working export/print
├── README.md          # This file
└── CHANGELOG.md       # Version history
```

## 💾 JSON Export Format

Characters are saved as clean JSON:
```json
{
  "name": "Aldric Ironside",
  "race": "Human",
  "class": "Fighter",
  "level": 5,
  "hp": 47,
  "ac": 16,
  "abilityScores": [
    {"name": "STR", "score": 16, "mod": 3},
    ...
  ],
  "profBonus": 2,
  "weapons": [...],
  "spells": [...],
  "traits": ["Aggressive", "Disciplined"],
  "isBoss": false,
  "role": "Two-handed melee fighter"
}
```

## 🛠️ Customization

Easily modify:
- **Names**: Edit `npcData.js` → `names` object
- **Spells**: Add to `npcData.js` → `spells` arrays
- **Weapons**: Expand `npcData.js` → `weapons`
- **Archetypes**: Update `generator.js` → `getRoleDescription()`
- **Colors**: Adjust CSS variables in `styles-magic.css`

## 🌐 Browser Support

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📋 Requirements

- Modern web browser (ES6 support)
- No dependencies or frameworks
- No internet connection required (works fully offline)

## 🎮 Usage Tips

### For Game Masters
- Generate NPCs in real-time during session planning
- Save party members and recurring NPCs
- Print stat blocks for physical reference at the table
- Create boss encounters with enhanced abilities

### Best Practices
- Keep a library of saved NPCs (JSON files)
- Use custom names to match your campaign world
- Adjust levels to match party progression
- Boss mode works well for boss encounters and mini-bosses

## 🔮 Future Enhancements

Potential additions:
- Encounter builder and party generators
- Expanded spell lists (more SRD content)
- Loot table integration
- Campaign note organizer
- Character portrait support
- Multi-class NPCs
- Custom ability score modification

## 📜 License

This project uses only D&D 5e SRD content, which is freely available under the Open Game License (OGL). This is a personal tool for Dungeon Masters and is not affiliated with Wizards of the Coast.

---

**Created with ✨ for D&D lovers everywhere**

*"Every character has a story. We just make it faster to tell."*
