# D&D 5e SRD NPC Generator

A web-based tool for Dungeon Masters to quickly generate complete, usable NPC stat blocks using only SRD (free) content from D&D 5e.

## Features

- **Quick Generation**: Generate a complete NPC stat block in seconds
- **Customizable**: Specify race, class, name, and role, or let it randomize
- **Boss NPCs**: Create tougher enemies with special abilities and legendary actions
- **SRD Only**: All content is based on official SRD material (free to use)
- **Print-Friendly**: Clean stat block format ready for your game table
- **Zero Setup**: Just open in a browser—no installation needed

## What You Get

Each generated NPC includes:
- Name, race, class, and level
- Hit points and armor class
- Full ability scores (STR, DEX, CON, INT, WIS, CHA) with modifiers
- Combat stats (attack bonuses, damage, unarmed strike)
- Weapons and combat options
- Spells (for casters)
- Personality traits
- Special abilities and legendary actions (for bosses)

## How to Use

1. Open `index.html` in a web browser
2. Fill in any NPC details you prefer:
   - **Name** (leave blank for a random name)
   - **Race** (choose or random)
   - **Class** (choose or random)
   - **Role** (optional description, e.g., "stealthy assassin")
   - **Boss NPC** (check for a tougher enemy with special abilities)
3. Click **Generate NPC**
4. Print, screenshot, or copy the stat block for your game

## Customization

You can easily customize:
- **Names** in `npcData.js` under `names`
- **Spells** in `npcData.js` under `spells` (add more SRD spells)
- **Weapons** in `npcData.js` under `weapons`
- **Traits** in `npcData.js` under `traits`
- **Styling** in `styles.css`

## Classes Supported

All 12 core D&D 5e classes:
- Barbarian, Bard, Cleric, Druid
- Fighter, Monk, Paladin, Ranger
- Rogue, Sorcerer, Warlock, Wizard

## Races Supported

All 9 core D&D 5e races:
- Human, Elf, Dwarf, Halfling, Dragonborn
- Gnome, Half-Elf, Half-Orc, Tiefling

## Technical Details

- **HTML/CSS/JavaScript**: Pure vanilla JS, no dependencies
- **Browser Compatible**: Works in all modern browsers
- **Responsive Design**: Mobile-friendly interface
- **Immersive Theme**: D&D-inspired tabletop aesthetics

## File Structure

```
dnd-npc-generator/
├── index.html       # Main HTML file
├── styles.css       # Styling (D&D theme)
├── npcData.js       # D&D data (classes, spells, weapons, etc.)
├── generator.js     # Core NPC generation logic
├── app.js          # UI and form handling
└── README.md       # This file
```

## Design Philosophy

- **Speed Over Perfection**: Generate NPCs fast enough for mid-session needs
- **SRD Only**: Never require paid content
- **DM-Friendly**: Output designed for quick reference during play
- **No Dependencies**: Works offline, no API calls, pure client-side

## Future Enhancements

Possible additions:
- Save/export NPCs to JSON
- Campaign notes and stat tracking
- Encounter builder
- More SRD spells and abilities
- Multi-class support
- Loot tables

## License

This project uses only SRD content from D&D 5e, which is free to use under the Open Game License. This tool is for personal use by Dungeon Masters.

---

**Created for D&D enthusiasts everywhere.** 🎲

*"A good NPC generator makes the game flow. A great one gets out of your way."*
