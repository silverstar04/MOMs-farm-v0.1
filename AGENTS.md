# Mom's Farm Agent Notes

## Project

Mom's Farm is a static mobile-first HTML/CSS/JS game.

Root files:
- index.html
- style.css
- script.js
- firebase-ranking.js

No npm, no build step, no bundler, and no server-only code.

Keep all browser-facing paths relative to index.html.
Use paths like:
- ./style.css
- ./script.js
- ./assets/...

Do not use local absolute paths such as C:/Users/... in browser-facing code.

## User Preferences

Explain changes in Korean using simple, non-technical wording.
Preserve the existing game flow unless the user explicitly asks to change it.
Mobile UX is the priority.

## Coding Rules

Use CDN/module imports only when external browser libraries are needed.
Firebase errors must fail safely and never stop the game.
Do not revert unrelated user changes.
Avoid generated clutter, cache folders, backup files, or duplicate originals.
Use apply_patch for manual edits when possible.

## Save Data Compatibility

Every gameplay/system patch must consider existing localStorage save data.
Prefer backward-compatible migrations in sanitize/load functions instead of breaking old saves.
When removing or replacing an old stat/system, normalize old saved values safely during load.
Example: if old field upgrade types are removed, old saved yield/seed upgrade values should be reset or mapped intentionally.
If backward compatibility is not realistically possible, tell the user clearly that a new version/save upgrade is required before implementing.
Do not silently wipe saves unless the user explicitly approves it.

## Project Summary Maintenance

Keep `moms-farm-summary.md` updated when making major project changes.

Update it after large feature branches or meaningful gameplay/system changes, such as:
- new gameplay systems
- major balance changes
- new buildings, crops, animals, or products
- save data structure changes
- UI flow changes
- Firebase/ranking changes
- asset folder or naming convention changes

Do not update `moms-farm-summary.md` for tiny fixes, typos, minor CSS tweaks, or small bug fixes unless they affect project behavior.

When updating `moms-farm-summary.md`, keep it concise and useful for future ChatGPT/Codex sessions.
Prefer summarizing the current state over listing every commit.

## Current Game Data

Crops:
- wheat
- corn
- carrot
- tomato
- eggplant
- pimento

Animal products:
- egg
- milk

Processing products:
- flour
- cowFeed
- henFeed

Important:
The code uses henFeed for chicken feed, not chickenFeed.

Bakery/bread assets may exist, but do not activate bakery gameplay unless the user explicitly requests it.

## Assets

Use these folders:
- crops: assets/crops/
- plots: assets/plots/
- backgrounds/weather: assets/backgrounds/
- animals: assets/animals/
- animal products: assets/animal-products/
- processing products: assets/products/
- buildings: assets/buildings/
- openings/empty slots: assets/openings/
- audio: assets/audio/

Optimize images before committing.
Use simple lowercase English filenames when possible.

## Gameplay Rules

Sales should not give XP.
XP should be awarded for completed production-style actions such as harvest and product collection.
Planting, mass planting, field purchase, upgrades, building install, processing start, demolition, and sales should not give XP.

Market prices exist for sellable items.
Oversupply lowers prices after enough sales of an item.
Neighborhood news should use each item's min/max midpoint to decide whether it is currently popular.

## UI Rules

Prioritize mobile layout.
Bottom tabs should stay fixed at the bottom.
Farm inner menus should not cover or push the bottom tab buttons.
Sell all should ask for confirmation.

## Verification

After editing JavaScript, run:

node --check .\\script.js

Before deployment, verify index.html can load relative CSS, JS, audio, and asset paths from the repository root.
