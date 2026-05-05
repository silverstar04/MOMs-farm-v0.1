const text = {
 second: "\uCD08",
 minute: "\uBD84",
 plant: "\uC2EC\uAE30",
 harvest: "\uC218\uD655",
 emptyPlot: "\uBE44\uC5B4 \uC788\uC74C",
 chooseCrop: "\uC2EC\uC744 \uC791\uBB3C\uC744 \uACE0\uB974\uC138\uC694",
 noCrops: "\uD310\uB9E4\uD560 \uC791\uBB3C\uC774 \uC5C6\uC5B4\uC694",
 goldEarned: "\uACE8\uB4DC\uB97C \uBC8C\uC5C8\uC5B4\uC694",
 planted: "\uC744(\uB97C) \uC2EC\uC5C8\uC5B4\uC694",
 harvested: "\uC744(\uB97C) \uC218\uD655\uD588\uC5B4\uC694",
 growsIn: "\uC774(\uAC00) ",
 afterGrow: " \uB4A4\uC5D0 \uC790\uB77C\uC694",
 plot: "\uBC88 \uBC2D",
 growing: "\uC131\uC7A5 \uC911",
 remaining: "\uB0A8\uC74C",
 ready: "\uC218\uD655 \uAC00\uB2A5",
 growTime: "\uC131\uC7A5 \uC2DC\uAC04",
 afterHarvest: " \uD6C4 \uC218\uD655",
 sell: "\uD310\uB9E4",
 sellSelected: "\uC120\uD0DD \uD310\uB9E4",
 maxSell: "\uCD5C\uB300",
 sellAll: "\uBAA8\uB450 \uD314\uAE30",
 selectCropToSell: "\uD314 \uC791\uBB3C\uC744 \uC120\uD0DD\uD558\uC138\uC694",
 notEnoughGold: "\uACE8\uB4DC\uAC00 \uBD80\uC871\uD574\uC694",
 seedCost: "\uC528\uC557\uAC12",
 free: "\uBB34\uB8CC",
 maxUpgrade: "\uCD5C\uB300 \uB808\uBCA8",
 upgradeSpeed: "\uC131\uC7A5 \uB300\uAE30\uC2DC\uAC04 \uAC10\uC18C",
 upgradeYield: "\uC218\uD655\uB7C9 \uC99D\uAC00",
 upgradeSeed: "\uC528\uC557 \uAD6C\uB9E4 \uBE44\uC6A9 \uAC10\uC18C",
 speedLevel: "\uBC2D \uB808\uBCA8",
 yieldLevel: "\uC218\uD655\uB7C9",
 seedLevel: "\uC528\uC557\uD560\uC778",
 cost: "\uBE44\uC6A9",
 upgraded: "\uC5C5\uADF8\uB808\uC774\uB4DC\uD588\uC5B4\uC694",
 unlockCrop: "\uD0A4\uC6B8 \uD488\uBAA9 \uCD94\uAC00",
 unlockTomato: "\uD1A0\uB9C8\uD1A0 \uC528\uC557 \uCD94\uAC00",
 unlockEggplant: "\uAC00\uC9C0 \uC528\uC557 \uCD94\uAC00",
 unlockDone: "\uC774\uC81C \uC0C8 \uC791\uBB3C\uC744 \uC2EC\uC744 \uC218 \uC788\uC5B4\uC694",
 unlocked: "\uCD94\uAC00 \uC644\uB8CC",
 weather: "\uB0A0\uC528",
 sunny: "\uB9D1\uC74C",
 rainy: "\uBE44",
 cloudy: "\uD750\uB9BC",
 sunGood: "\uD587\uBE5B \uC88B\uC74C",
 sunLow: "\uD587\uBE5B \uBD80\uC871",
 waterGood: "\uBB3C \uB110\uB110",
 waterLow: "\uBB3C \uBD80\uC871",
 marketPrice: "\uC624\uB298 \uC2DC\uC138",
 oversupplyNews: "\uC5B4\uC81C \uB9CE\uC774 \uD314\uB824\uC11C \uC624\uB298\uC740 \uAC00\uACA9\uC774 \uC870\uAE08 \uB0B4\uB824\uAC14\uC5B4\uC694",
 likesSunny: "\uD587\uBE5B\uC744 \uC88B\uC544\uD574\uC694",
 likesRainy: "\uBE44\uB97C \uC88B\uC544\uD574\uC694",
 weatherBonus: "\uC2DC\uAC04 20% \uB2E8\uCD95",
 weatherPenalty: "\uC2DC\uAC04 25% \uC99D\uAC00",
 expGained: "\uACBD\uD5D8\uCE58",
 plotExpansion: "\uBC2D \uD655\uC7A5",
 plotAvailable: "\uAD6C\uB9E4 \uAC00\uB2A5",
 plotLocked: "\uB808\uBCA8\uC774 \uBD80\uC871\uD574\uC694",
 buyPlot: "\uBC2D \uAD6C\uB9E4",
 plantAll: "\uC804\uCCB4 \uC2EC\uAE30",
 levelUp: "\uB808\uBCA8\uC5C5!",
 tapToClose: "\uB204\uB974\uBA74 \uB2EB\uD600\uC694",
 install: "\uC124\uCE58",
 demolish: "\uCCA0\uAC70",
 confirm: "\uD655\uC778",
 cancel: "\uCDE8\uC18C",
 collect: "\uC218\uB839",
 processing: "\uAC00\uACF5 \uC911",
 repeat: "\uBC18\uBCF5",
 make: "\uB9CC\uB4E4\uAE30",
 need: "\uD544\uC694",
 time: "\uC2DC\uAC04",
 cancelProduction: "\uC0DD\uC0B0 \uCDE8\uC18C",
 feed: "\uC0AC\uB8CC \uC8FC\uAE30",
 remove: "\uC81C\uAC70",
};

const crops = [
 {
  id: "wheat",
  name: "\uBC00",
  image: "assets/crops/wheat.png",
  growSeconds: 10,
  baseHarvest: 4,
  sellPrice: 2,
  minPrice: 1,
  maxPrice: 4,
  seedCost: 0,
  preferredWeather: "sunny",
  marketSwing: 0.28,
  oversupplyBase: 32,
 },
 {
  id: "corn",
  name: "\uC625\uC218\uC218",
  image: "assets/crops/corn.png",
  growSeconds: 16,
  baseHarvest: 3,
  sellPrice: 4,
  minPrice: 2,
  maxPrice: 7,
  seedCost: 1,
  preferredWeather: "sunny",
  marketSwing: 0.32,
  oversupplyBase: 26,
 },
 {
  id: "carrot",
  name: "\uB2F9\uADFC",
  image: "assets/crops/carrot.png",
  growSeconds: 20,
  baseHarvest: 3,
  sellPrice: 6,
  minPrice: 3,
  maxPrice: 10,
  seedCost: 2,
  preferredWeather: "rainy",
  marketSwing: 0.34,
  oversupplyBase: 24,
 },
 {
  id: "tomato",
  name: "\uD1A0\uB9C8\uD1A0",
  image: "assets/crops/tomato.png",
  growSeconds: 30,
  baseHarvest: 2,
  sellPrice: 10,
  minPrice: 7,
  maxPrice: 16,
  seedCost: 4,
  preferredWeather: "sunny",
  marketSwing: 0.42,
  oversupplyBase: 16,
 },
 {
  id: "eggplant",
  name: "\uAC00\uC9C0",
  image: "assets/crops/eggplant.png",
  growSeconds: 42,
  baseHarvest: 1,
  sellPrice: 24,
  minPrice: 16,
  maxPrice: 36,
  seedCost: 6,
  preferredWeather: "rainy",
  marketSwing: 0.5,
  oversupplyBase: 9,
 },
 {
  id: "pimento",
  name: "\uD53C\uB9DD",
  image: "assets/crops/pimento.png",
  growSeconds: 54,
  baseHarvest: 1,
  sellPrice: 32,
  minPrice: 22,
  maxPrice: 50,
  seedCost: 9,
  preferredWeather: "sunny",
  marketSwing: 0.55,
  oversupplyBase: 7,
 },
];

const saveKey = "moms-farm-save-v1";
const backgroundMusicTracks = [
 "assets/audio/patchwork-harvest-1.mp3",
 "assets/audio/patchwork-harvest-2.mp3",
];
const maxPlotCount = 6;
const maxPlotUpgradeLevel = 5;
const startingPlotCount = 2;
const defaultUnlockedCropIds = ["wheat"];
const cropProgression = [
 { cropId: "wheat", unlockLevel: 1 },
 { cropId: "corn", unlockLevel: 2 },
 { cropId: "carrot", unlockLevel: 3 },
 { cropId: "tomato", unlockLevel: 9 },
 { cropId: "eggplant", unlockLevel: 11 },
 { cropId: "pimento", unlockLevel: 12 },
];
const products = [
 {
  id: "flour",
 name: "\uBC00\uAC00\uB8E8",
 image: "assets/products/flour.png",
 sellPrice: 10,
 minPrice: 8,
 maxPrice: 13,
 marketSwing: 0.12,
 oversupplyBase: 18,
},
{
 id: "cowFeed",
 name: "\uC18C \uC0AC\uB8CC",
 image: "assets/products/feedstuff_cow.png",
 sellPrice: 8,
 minPrice: 6,
 maxPrice: 10,
 marketSwing: 0.1,
 oversupplyBase: 22,
},
{
 id: "henFeed",
 name: "\uB2ED \uC0AC\uB8CC",
 image: "assets/products/feedstuff_hen.png",
 sellPrice: 9,
 minPrice: 7,
 maxPrice: 11,
 marketSwing: 0.1,
 oversupplyBase: 24,
},
{
 id: "egg",
 name: "\uB2EC\uAC40",
 image: "assets/animal-products/egg.png",
 sellPrice: 22,
 minPrice: 16,
 maxPrice: 30,
 marketSwing: 0.12,
 oversupplyBase: 12,
},
{
 id: "milk",
 name: "\uC6B0\uC720",
 image: "assets/animal-products/milk.png",
 sellPrice: 34,
 minPrice: 26,
 maxPrice: 46,
 marketSwing: 0.1,
 oversupplyBase: 8,
},
];
const animals = [
 {
  id: "hen",
  name: "\uB2ED",
  image: "assets/animals/hen.png",
  cost: 140,
  feedId: "henFeed",
  productId: "egg",
  productionSeconds: 28,
 },
 {
  id: "cow",
  name: "\uC18C",
  image: "assets/animals/cow.png",
  cost: 220,
  feedId: "cowFeed",
  productId: "milk",
  productionSeconds: 40,
 },
];
const processingBuildings = [
 {
  id: "windmill",
  name: "\uD48D\uCC28",
  image: "assets/buildings/windmill.png",
  cost: 120,
  recipeIds: ["flour"],
 },
 {
  id: "feedmill",
  name: "\uC0AC\uB8CC\uACF5\uC7A5",
  image: "assets/buildings/feedmill.png",
  cost: 160,
  recipeIds: ["cowFeed", "henFeed"],
 },
];
const processingRecipes = [
 {
  id: "flour",
  buildingId: "windmill",
  inputId: "wheat",
  inputQuantity: 2,
  outputId: "flour",
  outputQuantity: 1,
  seconds: 20,
 },
 {
  id: "cowFeed",
  buildingId: "feedmill",
  inputId: "wheat",
  inputQuantity: 2,
  outputId: "cowFeed",
  outputQuantity: 1,
  seconds: 24,
 },
 {
  id: "henFeed",
  buildingId: "feedmill",
  inputId: "corn",
  inputQuantity: 2,
  outputId: "henFeed",
  outputQuantity: 1,
  seconds: 24,
 },
];
const levelUnlocks = [
 ...cropProgression.map((cropStep) => ({
  level: cropStep.unlockLevel,
  type: "crop",
  cropId: cropStep.cropId,
 })),
 { level: 3, type: "plotPermit", count: 3 },
 { level: 4, type: "upgrade" },
 { level: 5, type: "weather" },
 { level: 6, type: "market" },
 { level: 7, type: "plotPermit", count: 4 },
 { level: 9, type: "plotPermit", count: 5 },
 { level: 10, type: "plantAll" },
 { level: 11, type: "plotPermit", count: 6 },
];
const plotExpansionCosts = {
 3: 45,
 4: 95,
 5: 160,
 6: 240,
};
const farmSectionLabels = {
 plots: {
  title: "\uBC2D",
  hint: "\uBE48 \uBC2D\uC744 \uB204\uB974\uBA74 \uC791\uBB3C\uC744 \uACE0\uB97C \uC218 \uC788\uC5B4\uC694",
 },
 animals: {
  title: "\uB3D9\uBB3C",
  hint: "",
 },
 processing: {
  title: "\uAC00\uACF5",
  hint: "",
 },
};
const placeUnlockLevels = {
 animals: [16, 18, 20, 22, 24, 26],
 processing: [12, 14, 16, 18, 20, 22],
};
const weatherTypes = [
 {
  id: "sunny",
  name: text.sunny,
  icon: "\u2600",
  sunLabel: text.sunGood,
  waterLabel: text.waterLow,
 },
 {
  id: "rainy",
  name: text.rainy,
  icon: "\u2614",
  sunLabel: text.sunLow,
  waterLabel: text.waterGood,
 },
 {
  id: "cloudy",
  name: text.cloudy,
  icon: "\u2601",
  sunLabel: "\uBCF4\uD1B5",
  waterLabel: "\uBCF4\uD1B5",
 },
];

function createEmptyTile() {
 return {
  state: "empty",
  cropId: null,
  plantedAt: null,
  readyAt: null,
  yieldLevel: 1,
  speedLevel: 1,
  seedLevel: 1,
 };
}

function createEmptyProcessingSlot() {
 return {
  buildingId: null,
  recipeId: null,
  repeatCount: 1,
  totalSeconds: null,
  startedAt: null,
  readyAt: null,
 };
}

function createEmptyAnimalSlot() {
 return {
  animalId: null,
  feedQueue: 0,
  startedAt: null,
  readyAt: null,
 };
}

function getAllInventoryItems() {
 return [...crops, ...products];
}

function createEmptyInventory() {
 return getAllInventoryItems().reduce((items, item) => {
  items[item.id] = 0;
  return items;
 }, {});
}

function createNewGame() {
 return {
  gold: 0,
  player: {
   level: 1,
   exp: 0,
  },
  selectedTileIndex: null,
  selectedUpgradeTileIndex: null,
  selectedProcessingIndex: null,
  selectedAnimalIndex: null,
  plotsOwned: startingPlotCount,
  farmTiles: Array.from({ length: maxPlotCount }, createEmptyTile),
  animalSlots: Array.from({ length: maxPlotCount }, createEmptyAnimalSlot),
  processingSlots: Array.from({ length: maxPlotCount }, createEmptyProcessingSlot),
  inventory: createEmptyInventory(),
  upgrades: {
   unlockedCropIds: [...defaultUnlockedCropIds],
  },
  salesHistory: {},
  daily: createDailyState({}),
 };
}

function getTodayKey() {
 return getGameDayKey();
}

function getGameDayKey(date = new Date()) {
 const year = date.getFullYear();
 const month = String(date.getMonth() + 1).padStart(2, "0");
 const day = String(date.getDate()).padStart(2, "0");
 const slot = Math.floor(date.getHours() / 4) + 1;
 return `${year}-${month}-${day}-${slot}`;
}

function getDateKeyOffset(dateKey, offsetDays) {
 const parts = dateKey.split("-");
 const year = Number(parts[0]);
 const month = Number(parts[1]);
 const day = Number(parts[2]);
 const slot = Number(parts[3]) || 1;
 const date = new Date(year, month - 1, day, (slot - 1) * 4);
 date.setHours(date.getHours() + offsetDays * 4);
 return getGameDayKey(date);
}

function formatGameDayLabel(dateKey) {
 const parts = dateKey.split("-");
 const slot = Number(parts[3]) || 1;
 const startHour = (slot - 1) * 4;
 const endHour = slot * 4;
 return `${parts[1]}/${parts[2]} ${slot}\uBC88\uC9F8 \uB0A0 ${String(startHour).padStart(2, "0")}:00-${String(endHour).padStart(2, "0")}:00`;
}

function hashText(value) {
 let hash = 0;

 for (let i = 0; i < value.length; i += 1) {
  hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
 }

 return hash;
}

function seededNumber(seed, offset) {
 const value = Math.sin(seed + offset * 999) * 10000;
 return value - Math.floor(value);
}

function createDailyState(salesHistory) {
 const dateKey = getTodayKey();
 const seed = hashText(dateKey);
 const weather = weatherTypes[Math.floor(seededNumber(seed, 1) * weatherTypes.length)];
 const prices = {};
 const oversuppliedCropIds = [];
 const yesterdaySales = salesHistory?.[getDateKeyOffset(dateKey, -1)] || {};

 getAllInventoryItems().forEach((item, index) => {
  const basePrice = getDailyBasePrice(item, seededNumber(seed, index + 2));
  const saleCount = Number(yesterdaySales[item.id]) || 0;
  const discountRate = getOversupplyDiscountRate(item, saleCount);
  prices[item.id] = Math.max(item.minPrice, Math.round(basePrice * (1 - discountRate)));

  if (discountRate > 0) {
   oversuppliedCropIds.push(item.id);
  }
 });

 return {
  dateKey,
  weatherId: weather.id,
  prices,
  oversuppliedCropIds,
 };
}

function getDailyBasePrice(item, randomValue) {
 const swing = item.marketSwing ?? 0.2;
 const minPrice = Math.max(item.minPrice ?? 1, Math.round(item.sellPrice * (1 - swing)));
 const maxPrice = Math.min(item.maxPrice ?? Math.max(item.sellPrice, minPrice), Math.round(item.sellPrice * (1 + swing)));
 return minPrice + Math.round(randomValue * (maxPrice - minPrice));
}

function getOversupplyDiscountRate(item, saleCount) {
 const firstThreshold = getOversupplyThreshold(item, 1);
 const secondThreshold = getOversupplyThreshold(item, 2);

 if (saleCount >= secondThreshold) return 0.35;
 if (saleCount >= firstThreshold) return 0.18;
 return 0;
}

function getOversupplyThreshold(item, tier) {
 const baseThreshold = item.oversupplyBase ?? Math.max(8, Math.round(32 / (item.baseHarvest || 2)));
 return tier === 2 ? baseThreshold * 2 : baseThreshold;
}

function sanitizeSalesHistory(salesHistory) {
 const cleanHistory = {};

 if (!salesHistory || typeof salesHistory !== "object") {
  return cleanHistory;
 }

 Object.entries(salesHistory).forEach(([dateKey, sales]) => {
  if (!/^\d{4}-\d{2}-\d{2}-[1-6]$/.test(dateKey) || !sales || typeof sales !== "object") return;

  cleanHistory[dateKey] = {};
  getAllInventoryItems().forEach((item) => {
   const count = Math.floor(Number(sales[item.id]));
   cleanHistory[dateKey][item.id] = Number.isFinite(count) ? Math.max(0, count) : 0;
  });
 });

 return cleanHistory;
}

function sanitizeDaily(daily, salesHistory) {
 if (!daily || daily.dateKey !== getTodayKey()) {
  return createDailyState(salesHistory);
 }

 const weather = getWeather(daily.weatherId) || weatherTypes[0];
 const prices = {};
 const oversuppliedCropIds = Array.isArray(daily.oversuppliedCropIds)
  ? daily.oversuppliedCropIds.filter((itemId) => getInventoryItem(itemId))
  : [];

 getAllInventoryItems().forEach((item) => {
  const savedPrice = Number(daily.prices?.[item.id]);
  prices[item.id] = Number.isFinite(savedPrice)
   ? Math.min(item.maxPrice, Math.max(item.minPrice, Math.round(savedPrice)))
   : item.sellPrice;
 });

 return {
  dateKey: daily.dateKey,
  weatherId: weather.id,
  prices,
  oversuppliedCropIds,
 };
}

function sanitizePlayer(player) {
 const level = Math.floor(Number(player?.level));
 const exp = Math.floor(Number(player?.exp));

 return {
  level: Number.isFinite(level) ? Math.max(1, level) : 1,
  exp: Number.isFinite(exp) ? Math.max(0, exp) : 0,
 };
}

function sanitizePlotsOwned(value, level = 1) {
 const savedCount = Math.floor(Number(value));
 const legacyUnlockedCount = levelUnlocks.reduce((count, unlock) => {
  if (unlock.type === "plotPermit" && level >= unlock.level) {
   return Math.max(count, unlock.count);
  }

  return count;
 }, startingPlotCount);
 const fallback = Number.isFinite(savedCount) ? savedCount : legacyUnlockedCount;
 return Math.min(maxPlotCount, Math.max(startingPlotCount, fallback));
}

function sanitizeLevel(level) {
 const cleanLevel = Math.floor(Number(level));
 if (!Number.isFinite(cleanLevel)) return 1;
 return Math.min(3, Math.max(1, cleanLevel));
}

function sanitizePlotUpgradeLevel(level) {
 const cleanLevel = Math.floor(Number(level));
 if (!Number.isFinite(cleanLevel)) return 1;
 return Math.min(maxPlotUpgradeLevel, Math.max(1, cleanLevel));
}

function sanitizeTile(tile) {
 if (!tile || typeof tile !== "object") {
  return createEmptyTile();
 }

 const crop = getCrop(tile.cropId);
 const state = ["empty", "growing", "ready"].includes(tile.state) ? tile.state : "empty";
 const yieldLevel = 1;
 const speedLevel = sanitizePlotUpgradeLevel(tile.speedLevel);
 const seedLevel = 1;

 if (state === "empty" || !crop) {
  return {
   ...createEmptyTile(),
   yieldLevel,
   speedLevel,
   seedLevel,
  };
 }

 return {
  state,
  cropId: crop.id,
  plantedAt: Number.isFinite(tile.plantedAt) ? tile.plantedAt : null,
  readyAt: Number.isFinite(tile.readyAt) ? tile.readyAt : null,
  yieldLevel,
  speedLevel,
  seedLevel,
 };
}

function sanitizeProcessingSlot(slot) {
 if (!slot || typeof slot !== "object") {
  return createEmptyProcessingSlot();
 }

 const building = getProcessingBuilding(slot.buildingId);
 const recipe = getProcessingRecipe(slot.recipeId);

 if (!building) {
  return createEmptyProcessingSlot();
 }

 const repeatCount = sanitizeProcessingRepeatCount(slot.repeatCount);
 const startedAt = Number.isFinite(slot.startedAt) ? slot.startedAt : null;
 const readyAt = Number.isFinite(slot.readyAt) ? slot.readyAt : null;
 const savedTotalSeconds = Math.ceil(Number(slot.totalSeconds));
 const fallbackTotalSeconds = startedAt && readyAt ? Math.max(1, Math.ceil((readyAt - startedAt) / 1000)) : null;

 return {
  buildingId: building.id,
  recipeId: recipe && recipe.buildingId === building.id ? recipe.id : null,
  repeatCount,
  totalSeconds: Number.isFinite(savedTotalSeconds) && savedTotalSeconds > 0 ? savedTotalSeconds : fallbackTotalSeconds,
  startedAt,
  readyAt,
 };
}

function sanitizeProcessingRepeatCount(value) {
 const count = Math.floor(Number(value));
 if (!Number.isFinite(count)) return 1;
 return Math.min(10, Math.max(1, count));
}

function sanitizeAnimalSlot(slot) {
 if (!slot || typeof slot !== "object") {
  return createEmptyAnimalSlot();
 }

 const animal = getAnimal(slot.animalId);
 if (!animal) {
  return createEmptyAnimalSlot();
 }

 const feedQueue = Math.floor(Number(slot.feedQueue));
 return {
  animalId: animal.id,
  feedQueue: Number.isFinite(feedQueue) ? Math.max(0, feedQueue) : 0,
  startedAt: Number.isFinite(slot.startedAt) ? slot.startedAt : null,
  readyAt: Number.isFinite(slot.readyAt) ? slot.readyAt : null,
 };
}

function sanitizeInventory(inventory) {
 const cleanInventory = createEmptyInventory();

 getAllInventoryItems().forEach((item) => {
  const count = inventory && Number(inventory[item.id]);
  cleanInventory[item.id] = Number.isFinite(count) ? Math.max(0, Math.floor(count)) : 0;
 });

 return cleanInventory;
}

function sanitizeUnlockedCropIds(upgrades, farmTiles, inventory) {
 const unlockedIds = new Set(defaultUnlockedCropIds);
 const savedIds = upgrades?.unlockedCropIds;

 if (Array.isArray(savedIds)) {
  savedIds.forEach((cropId) => {
   if (getCrop(cropId)) unlockedIds.add(cropId);
  });
 }

 farmTiles.forEach((tile) => {
  if (tile.cropId && getCrop(tile.cropId)) unlockedIds.add(tile.cropId);
 });

 crops.forEach((crop) => {
  if (Number(inventory?.[crop.id]) > 0) unlockedIds.add(crop.id);
 });

 return [...unlockedIds];
}

function loadGame() {
 const newGame = createNewGame();
 const savedText = localStorage.getItem(saveKey);

 if (!savedText) {
  return newGame;
 }

 try {
  const savedGame = JSON.parse(savedText);
  const farmTiles = Array.from({ length: maxPlotCount }, (_, index) => sanitizeTile(savedGame.farmTiles?.[index]));
  const animalSlots = Array.from({ length: maxPlotCount }, (_, index) => sanitizeAnimalSlot(savedGame.animalSlots?.[index]));
  const processingSlots = Array.from({ length: maxPlotCount }, (_, index) => sanitizeProcessingSlot(savedGame.processingSlots?.[index]));
  const inventory = sanitizeInventory(savedGame.inventory);
  const salesHistory = sanitizeSalesHistory(savedGame.salesHistory);

  const player = sanitizePlayer(savedGame.player);

  return {
   gold: Number.isFinite(Number(savedGame.gold)) ? Math.max(0, Math.floor(Number(savedGame.gold))) : 0,
   player,
   selectedTileIndex: null,
   selectedUpgradeTileIndex: null,
   selectedProcessingIndex: null,
   selectedAnimalIndex: null,
   plotsOwned: sanitizePlotsOwned(savedGame.plotsOwned, player.level),
   farmTiles,
   animalSlots,
   processingSlots,
   inventory,
   upgrades: {
    unlockedCropIds: sanitizeUnlockedCropIds(savedGame.upgrades, farmTiles, inventory),
   },
   salesHistory,
   daily: sanitizeDaily(savedGame.daily, salesHistory),
  };
 } catch {
  localStorage.removeItem(saveKey);
  return newGame;
 }
}

function saveGame() {
 const saveData = {
  gold: game.gold,
  player: game.player,
  plotsOwned: game.plotsOwned,
  farmTiles: game.farmTiles,
  animalSlots: game.animalSlots,
  processingSlots: game.processingSlots,
  inventory: game.inventory,
  upgrades: game.upgrades,
  salesHistory: game.salesHistory,
  daily: game.daily,
 };

 localStorage.setItem(saveKey, JSON.stringify(saveData));
}

const game = loadGame();
const ui = {
 selectedSellCropId: null,
 sellQuantity: 1,
 processingRepeatCount: 1,
 holdTimer: null,
 holdRepeatTimer: null,
 holdRepeatCount: 0,
  highlightedUnlocks: new Set(),
  levelUpTimer: null,
 activeFarmSection: "plots",
 farmMenuOpen: false,
 confirmAction: null,
};

const farmGrid = document.querySelector("#farmGrid");
const plotExpansionPanel = document.querySelector("#plotExpansionPanel");
const animalGrid = document.querySelector("#animalGrid");
const processingGrid = document.querySelector("#processingGrid");
const farmSectionTitle = document.querySelector("#farmSectionTitle");
const farmSectionHint = document.querySelector("#farmSectionHint");
const inventoryGrid = document.querySelector("#inventoryGrid");
const sellPanel = document.querySelector("#sellPanel");
const newsCard = document.querySelector("#newsCard");
const newsToggleButton = document.querySelector("#newsToggleButton");
const todayText = document.querySelector("#todayText");
const weatherPanel = document.querySelector("#weatherPanel");
const newsList = document.querySelector("#newsList");
const upgradeGrid = document.querySelector("#upgradeGrid");
const unlockCropButton = document.querySelector("#unlockCropButton");
const upgradeSheet = document.querySelector("#upgradeSheet");
const upgradeOptions = document.querySelector("#upgradeOptions");
const buildingSheet = document.querySelector("#buildingSheet");
const buildingOptions = document.querySelector("#buildingOptions");
const animalSheet = document.querySelector("#animalSheet");
const animalOptions = document.querySelector("#animalOptions");
const processingSheet = document.querySelector("#processingSheet");
const processingOptions = document.querySelector("#processingOptions");
const confirmDialog = document.querySelector("#confirmDialog");
const confirmMessage = document.querySelector("#confirmMessage");
const confirmOkButton = document.querySelector("#confirmOkButton");
const confirmCancelButton = document.querySelector("#confirmCancelButton");
const goldText = document.querySelector("#gold");
const cropSheet = document.querySelector("#cropSheet");
const cropOptions = document.querySelector("#cropOptions");
const plantAllButton = document.querySelector("#plantAllButton");
const statusText = document.querySelector("#statusText");
const playerLevelText = document.querySelector("#playerLevelText");
const playerExpText = document.querySelector("#playerExpText");
const levelUpPopup = document.querySelector("#levelUpPopup");
const levelUpPopupButton = document.querySelector("#levelUpPopupButton");
const levelUpLevelText = document.querySelector("#levelUpLevelText");
const levelUpUnlockText = document.querySelector("#levelUpUnlockText");
const rankingButton = document.querySelector("#rankingButton");
const rankingPopup = document.querySelector("#rankingPopup");
const rankingCloseButton = document.querySelector("#rankingCloseButton");
const rankingStatusText = document.querySelector("#rankingStatusText");
const bottomNav = document.querySelector(".bottom-nav");
const navButtons = document.querySelectorAll("[data-tab]");
const farmSubNav = document.querySelector("#farmSubNav");
const farmSubButtons = document.querySelectorAll("[data-farm-section]");
const screens = {
  farm: document.querySelector("#farmScreen"),
  inventory: document.querySelector("#inventoryScreen"),
  upgrade: document.querySelector("#upgradeScreen"),
};
const farmViews = {
  plots: document.querySelector("#plotView"),
  animals: document.querySelector("#animalView"),
  processing: document.querySelector("#processingView"),
};

function getCrop(cropId) {
 return crops.find((crop) => crop.id === cropId);
}

function getProduct(productId) {
 return products.find((product) => product.id === productId);
}

function getInventoryItem(itemId) {
 return getCrop(itemId) || getProduct(itemId);
}

function getProcessingBuilding(buildingId) {
 return processingBuildings.find((building) => building.id === buildingId);
}

function getProcessingRecipe(recipeId) {
 return processingRecipes.find((recipe) => recipe.id === recipeId);
}

function getAnimal(animalId) {
 return animals.find((animal) => animal.id === animalId);
}

function getItemPrice(item) {
 return getMarketPrice(item);
}

function getLevelUnlockedCropIds() {
 return cropProgression
  .filter((cropStep) => game.player.level >= cropStep.unlockLevel)
  .map((cropStep) => cropStep.cropId);
}

function getUnlockedPlotCount() {
 return Math.min(maxPlotCount, Math.max(startingPlotCount, game.plotsOwned || startingPlotCount));
}

function getPermittedPlotCount() {
 return levelUnlocks.reduce((count, unlock) => {
  if (unlock.type === "plotPermit" && game.player.level >= unlock.level) {
   return Math.max(count, unlock.count);
  }

  return count;
 }, startingPlotCount);
}

function getNextPlotCount() {
 return Math.min(maxPlotCount, getUnlockedPlotCount() + 1);
}

function getNextPlotCost() {
 return plotExpansionCosts[getNextPlotCount()] ?? 0;
}

function canBuyPlot() {
 return getUnlockedPlotCount() < getPermittedPlotCount();
}

function isUpgradeSystemUnlocked() {
 return game.player.level >= 4;
}

function isWeatherSystemUnlocked() {
 return game.player.level >= 5;
}

function isMarketSystemUnlocked() {
 return game.player.level >= 6;
}

function isPlantAllUnlocked() {
 return game.player.level >= 10;
}

function getWeather(weatherId) {
 return weatherTypes.find((weather) => weather.id === weatherId);
}

function getTodayWeather() {
 return getWeather(game.daily.weatherId) || weatherTypes[0];
}

function getCropPrice(crop) {
 return getMarketPrice(crop);
}

function getMarketPrice(item) {
 if (!isMarketSystemUnlocked()) {
  return item.sellPrice;
 }

 return game.daily.prices[item.id] ?? item.sellPrice;
}

function getAverageMarketPrice(item) {
 return ((item.minPrice ?? item.sellPrice) + (item.maxPrice ?? item.sellPrice)) / 2;
}

function getHarvestAmount(crop, tile) {
 return crop.baseHarvest;
}

function getUnlockedCrops() {
 return getLevelUnlockedCropIds()
  .map((cropId) => getCrop(cropId))
  .filter(Boolean);
}

function formatDuration(totalSeconds) {
 const minutes = Math.floor(totalSeconds / 60);
 const seconds = totalSeconds % 60;
 if (minutes === 0) return `${seconds}${text.second}`;
 return `${minutes}${text.minute} ${seconds.toString().padStart(2, "0")}${text.second}`;
}

function cropImage(crop, className) {
 return `<img class="${className}" src="${crop.image}" alt="${crop.name}" loading="eager" decoding="async" />`;
}

function itemImage(item, className) {
 return `<img class="${className}" src="${item.image}" alt="${item.name}" loading="eager" decoding="async" />`;
}

function buildingImage(building, className) {
 return `<img class="${className}" src="${building.image}" alt="${building.name}" loading="eager" decoding="async" />`;
}

function preloadGameImages() {
 const imagePaths = new Set([
  ...crops.map((crop) => crop.image),
  ...products.map((product) => product.image),
  ...animals.map((animal) => animal.image),
  ...processingBuildings.map((building) => building.image),
  "assets/backgrounds/farm_background.png",
  "assets/backgrounds/sunnyfarm_background.png",
  "assets/backgrounds/rainyfarm_background.png",
  "assets/backgrounds/cloudyfarm_background.png",
  "assets/openings/opening_animal.png",
  "assets/openings/opening_building.png",
  "assets/plots/plot_lv1.png",
  "assets/plots/plot_lv2.png",
  "assets/plots/plot_lv3.png",
  "assets/plots/plot_lv4.png",
  "assets/plots/plot_lv5.png",
 ]);

 imagePaths.forEach((path) => {
  const image = new Image();
  image.decoding = "async";
  image.src = path;
 });
}

const backgroundMusic = new Audio();
backgroundMusic.preload = "auto";
backgroundMusic.volume = 0.42;

function getRandomMusicTrack() {
 return backgroundMusicTracks[Math.floor(Math.random() * backgroundMusicTracks.length)];
}

function playRandomBackgroundMusic() {
 backgroundMusic.src = getRandomMusicTrack();
 backgroundMusic.currentTime = 0;
 backgroundMusic.play().catch(() => {
  // Mobile browsers allow music only after a user gesture.
 });
}

function startBackgroundMusic() {
 if (!backgroundMusic.paused) return;
 playRandomBackgroundMusic();
}

function bindBackgroundMusicStart() {
 ["pointerdown", "touchstart", "click", "keydown"].forEach((eventName) => {
  window.addEventListener(eventName, startBackgroundMusic, { once: true, passive: true });
 });

 backgroundMusic.addEventListener("ended", playRandomBackgroundMusic);
}

function getRemainingSeconds(tile) {
 if (!tile.readyAt) return 0;
 return Math.max(0, Math.ceil((tile.readyAt - Date.now()) / 1000));
}

function getAdjustedGrowSeconds(crop, tile) {
 const speedRates = {
  1: 1,
  2: 0.9,
  3: 0.8,
  4: 0.7,
  5: 0.6,
 };

 return Math.max(1, Math.ceil(crop.growSeconds * speedRates[tile.speedLevel] * getWeatherTimeRate(crop)));
}

function getExpForCrop(crop) {
 return Math.max(1, Math.round(crop.growSeconds / 3));
}

function getExpForProcessing(recipe) {
 return Math.max(1, Math.round(recipe.seconds / 6));
}

function getAdjustedProcessingSeconds(recipe) {
 return recipe.seconds;
}

function getProcessingRepeatCount(slot) {
 return sanitizeProcessingRepeatCount(slot?.repeatCount ?? ui.processingRepeatCount);
}

function getProcessingOutputQuantity(recipe, repeatCount) {
 return recipe.outputQuantity * repeatCount;
}

function getProcessingInputQuantity(recipe, repeatCount) {
 return recipe.inputQuantity * repeatCount;
}

function getProcessingTotalSeconds(recipe, repeatCount) {
 return getAdjustedProcessingSeconds(recipe) * repeatCount;
}

function getWeatherTimeRate(item) {
 if (!isWeatherSystemUnlocked()) return 1;
 if (game.daily.weatherId === "cloudy") return 1;
 if (!item?.preferredWeather) return 1;
 if (item.preferredWeather === game.daily.weatherId) return 0.8;
 return 1.25;
}

function getWeatherTimeLabel(item) {
 const rate = getWeatherTimeRate(item);
 if (rate < 1) return text.weatherBonus;
 if (rate > 1) return text.weatherPenalty;
 return "";
}

function grantPlayerExp(amount) {
 const levelUps = addPlayerExp(amount);
 handleLevelUps(levelUps);
 return amount;
}

function getExpToNextLevel(level) {
 const earlyRequirements = {
  1: 8,
  2: 12,
  3: 18,
  4: 26,
  5: 36,
 };

 return earlyRequirements[level] ?? 40 + (level - 5) * 12;
}

function addPlayerExp(amount) {
 game.player.exp += amount;
 const levelUps = [];

 while (game.player.exp >= getExpToNextLevel(game.player.level)) {
  game.player.exp -= getExpToNextLevel(game.player.level);
  game.player.level += 1;
  levelUps.push({
   level: game.player.level,
   messages: getLevelUnlockMessages(game.player.level),
  });
 }

 return levelUps;
}

function getLevelUnlockMessage(level) {
 return getLevelUnlockMessages(level).join(", ") || `Lv.${level}`;
}

function getLevelUnlockMessages(level) {
 return levelUnlocks
  .filter((unlock) => unlock.level === level)
  .map(getUnlockLabel);
}

function getUnlockLabel(unlock) {
 if (unlock.type === "crop") {
  const crop = getCrop(unlock.cropId);
  return crop ? `${crop.name} \uC528\uC557 \uC7A0\uAE08\uD574\uC81C` : "";
 }

 if (unlock.type === "plotPermit") {
  return `\uBC2D ${unlock.count}\uCE78\uAE4C\uC9C0 \uAD6C\uB9E4 \uAC00\uB2A5`;
 }

 if (unlock.type === "upgrade") return "\uBC2D \uC5C5\uADF8\uB808\uC774\uB4DC \uC7A0\uAE08\uD574\uC81C";
 if (unlock.type === "weather") return "TV \uB0A0\uC528 \uB274\uC2A4 \uC7A0\uAE08\uD574\uC81C";
 if (unlock.type === "market") return "\uC791\uBB3C \uC2DC\uC138 \uC7A0\uAE08\uD574\uC81C";
 if (unlock.type === "plantAll") return "\uC804\uCCB4 \uC2EC\uAE30 \uC7A0\uAE08\uD574\uC81C";

 return "";
}

function getSeedCost(crop, tile) {
 return crop.seedCost;
}

function getPlotLevel(tile) {
 return sanitizePlotUpgradeLevel(tile.speedLevel);
}

function getPlotImage(tile) {
 return `assets/plots/plot_lv${getPlotLevel(tile)}.png`;
}

function applyPlotImage(element, tile) {
 element.style.setProperty("--plot-image", `url("${getPlotImage(tile)}")`);
}

function updateTileState(tile) {
 if (tile.state === "growing" && getRemainingSeconds(tile) === 0) {
  tile.state = "ready";
  saveGame();
  return true;
 }

 return false;
}

function updateProcessingSlot(slot) {
 if (slot.buildingId && slot.recipeId && slot.readyAt && Date.now() >= slot.readyAt) {
  return true;
 }

 return false;
}

function updateAnimalSlot(slot) {
 const animal = getAnimal(slot.animalId);
 if (!animal || !slot.readyAt || Date.now() < slot.readyAt) return false;

 const completed = Math.max(1, Math.floor((Date.now() - slot.readyAt) / (animal.productionSeconds * 1000)) + 1);
 const produceCount = Math.min(slot.feedQueue, completed);
 if (produceCount <= 0) return false;

 game.inventory[animal.productId] = (game.inventory[animal.productId] || 0) + produceCount;
 slot.feedQueue -= produceCount;
 if (slot.feedQueue > 0) {
  slot.startedAt = Date.now();
  slot.readyAt = Date.now() + animal.productionSeconds * 1000;
 } else {
  slot.startedAt = null;
  slot.readyAt = null;
 }

 grantPlayerExp(produceCount * Math.max(1, Math.round(animal.productionSeconds / 10)));
 saveGame();
 return true;
}

function updateGameState() {
 game.salesHistory = sanitizeSalesHistory(game.salesHistory);
 const previousDateKey = game.daily?.dateKey;
 game.daily = sanitizeDaily(game.daily, game.salesHistory);

 let changed = previousDateKey !== game.daily.dateKey;
 game.farmTiles.forEach((tile) => {
  changed = updateTileState(tile) || changed;
 });
 game.animalSlots.forEach((slot) => {
  changed = updateAnimalSlot(slot) || changed;
 });
 game.processingSlots.forEach(updateProcessingSlot);
 return changed;
}

function render() {
 updateGameState();
 goldText.textContent = game.gold;
 playerLevelText.textContent = `Lv.${game.player.level}`;
 playerExpText.textContent = `${game.player.exp} / ${getExpToNextLevel(game.player.level)}`;
 applyWeatherBackground();
  renderNews();
  renderHighlights();
  renderFarmShell();
  renderPlotExpansion();
  renderFarm();
  renderFarmPlaces();
  renderInventory();
 renderUpgrades();
 renderUnlockCropButton();
}

function applyWeatherBackground() {
 document.body.classList.remove("weather-sunny", "weather-rainy", "weather-cloudy");
 document.body.classList.add(`weather-${isWeatherSystemUnlocked() ? getTodayWeather().id : "sunny"}`);
}

function renderHighlights() {
  document.querySelector('[data-tab="upgrade"]').classList.toggle("attention-glow", ui.highlightedUnlocks.has("upgrade"));
  newsToggleButton.classList.toggle("attention-glow", ui.highlightedUnlocks.has("weather") || ui.highlightedUnlocks.has("market"));
  plotExpansionPanel.classList.toggle("attention-glow", ui.highlightedUnlocks.has("plotPermit"));
  plantAllButton.classList.toggle("attention-glow", ui.highlightedUnlocks.has("plantAll"));
}

function renderFarmShell() {
 const section = farmSectionLabels[ui.activeFarmSection] || farmSectionLabels.plots;
 farmSectionTitle.textContent = section.title;
 farmSectionHint.textContent = section.hint;
 bottomNav.classList.toggle("farm-menu-open", ui.farmMenuOpen);
 farmSubNav.classList.toggle("open", ui.farmMenuOpen);

 farmSubButtons.forEach((button) => {
  button.classList.toggle("active", button.dataset.farmSection === ui.activeFarmSection);
 });

 Object.entries(farmViews).forEach(([sectionId, view]) => {
  view.classList.toggle("active", sectionId === ui.activeFarmSection);
 });
}

function renderPlotExpansion() {
  plotExpansionPanel.hidden = ui.activeFarmSection !== "plots";
  if (plotExpansionPanel.hidden) return;

  const ownedCount = getUnlockedPlotCount();
 const permittedCount = getPermittedPlotCount();
 const nextCount = getNextPlotCount();
 const nextCost = getNextPlotCost();
 const hasMorePlots = ownedCount < maxPlotCount;
 const isPermitted = canBuyPlot();

 if (!hasMorePlots && ownedCount >= maxPlotCount) {
  plotExpansionPanel.innerHTML = `
   <div>
    <strong>${text.plotExpansion}</strong>
    <span>${ownedCount}/${maxPlotCount} ${text.unlocked}</span>
   </div>
  `;
  return;
 }

 plotExpansionPanel.innerHTML = `
  <div>
   <strong>${text.plotExpansion}</strong>
      <span>${ownedCount}/${maxPlotCount} \uBCF4\uC720 · ${isPermitted ? text.plotAvailable : `Lv.${getNextPlotPermitLevel()} ${text.plotLocked}`}</span>
  </div>
  <button id="buyPlotButton" class="small-button" type="button" ${!isPermitted ? "disabled" : ""}>
   ${text.buyPlot} ${nextCount}\uCE78 ${nextCost}G
  </button>
 `;

 const buyButton = document.querySelector("#buyPlotButton");
 buyButton.disabled = !isPermitted || game.gold < nextCost;
 buyButton.addEventListener("click", buyPlotExpansion);
}

function getNextPlotPermitLevel() {
  const nextUnlock = levelUnlocks.find((unlock) => unlock.type === "plotPermit" && unlock.count > getPermittedPlotCount());
  return nextUnlock?.level ?? "-";
}

function getPlotPermitLevel(index) {
  if (index < startingPlotCount) return 1;
  const unlock = levelUnlocks.find((item) => item.type === "plotPermit" && item.count >= index + 1);
  return unlock?.level ?? 99;
}

function buyPlotExpansion() {
 if (!canBuyPlot()) {
  statusText.textContent = text.plotLocked;
  return;
 }

 const cost = getNextPlotCost();
 if (game.gold < cost) {
  statusText.textContent = text.notEnoughGold;
  return;
 }

 game.gold -= cost;
 game.plotsOwned = getNextPlotCount();
 ui.highlightedUnlocks.delete("plotPermit");
 statusText.textContent = `${text.plotExpansion} ${text.unlocked}`;
 saveGame();
 render();
}

function renderNews() {
 newsToggleButton.hidden = !isWeatherSystemUnlocked() && !isMarketSystemUnlocked();

 if (newsToggleButton.hidden) {
  newsCard.classList.remove("open");
  return;
 }

 const weather = getTodayWeather();
 const popularCrops = getPopularMarketCrops();
 const bonusCrops = crops.filter((crop) => crop.preferredWeather === weather.id);

 todayText.textContent = formatGameDayLabel(game.daily.dateKey);
 weatherPanel.innerHTML = `
  <div class="weather-main${isWeatherSystemUnlocked() ? "" : " locked-system"}">
   <span class="weather-icon">${weather.icon}</span>
   <div>
    <strong>${isWeatherSystemUnlocked() ? `${text.weather}: ${weather.name}` : "\uB0A0\uC528 \uC608\uBCF4 \uC900\uBE44 \uC911"}</strong>
    <span>${isWeatherSystemUnlocked() ? `${weather.sunLabel} / ${weather.waterLabel}` : "Lv.5\uBD80\uD130 \uC5F4\uB824\uC694"}</span>
   </div>
  </div>
  <div class="weather-market${isMarketSystemUnlocked() ? "" : " locked-system"}">
   <strong>${isMarketSystemUnlocked() ? text.marketPrice : "\uC7A5\uD130 \uC2DC\uC138 \uC900\uBE44 \uC911"}</strong>
   <span>${isMarketSystemUnlocked() ? getMarketSummaryText() : "Lv.6\uBD80\uD130 \uC5F4\uB824\uC694"}</span>
  </div>
 `;
 newsList.innerHTML = `
  ${isWeatherSystemUnlocked() ? `<p>${getWeatherNewsLine(weather, bonusCrops)}</p>` : ""}
  ${isMarketSystemUnlocked() ? `<p>${getPopularMarketNewsLine(popularCrops)}</p>${getOversupplyNewsLine()}` : ""}
 `;
}

function getMarketSummaryText() {
 return getAllInventoryItems().map((item) => `${item.name} ${getItemPrice(item)}G`).join(" · ");
}

function getPopularMarketCrops() {
 return crops.filter((crop) => getCropPrice(crop) > getAverageMarketPrice(crop));
}

function getPopularMarketNewsLine(popularCrops) {
 if (popularCrops.length === 0) {
  return "\uC624\uB298\uC740 \uB18D\uC791\uBB3C \uAC00\uACA9\uC774 \uB300\uCCB4\uB85C \uD3C9\uC18C \uC218\uC900\uC774\uC5D0\uC694.";
 }

 return `${popularCrops.map((crop) => `${crop.name} ${getCropPrice(crop)}G`).join(", ")}\uC774(\uAC00) \uC7A5\uD130\uC5D0\uC11C \uD3C9\uC18C\uBCF4\uB2E4 \uC798 \uB098\uAC00\uC694.`;
}

function getWeatherNewsLine(weather, bonusCrops) {
 if (bonusCrops.length === 0) {
  return "\uC624\uB298\uC740 \uB0A0\uC528\uAC00 \uBB34\uB09C\uD574\uC11C \uBAA8\uB4E0 \uC791\uBB3C\uC774 \uD3C9\uC18C\uB300\uB85C \uC790\uB77C\uC694.";
 }

 return `\uC624\uB298 ${weather.name}\uC774\uB77C ${bonusCrops.map((crop) => crop.name).join(", ")}\uC774(\uAC00) \uC2E0\uB0AC\uC5B4\uC694. \uC790\uB77C\uB294 \uC2DC\uAC04\uC774 20% \uC904\uC5B4\uC694.`;
}

function getCropPreferenceText(crop) {
 const preference = crop.preferredWeather === "sunny" ? text.likesSunny : text.likesRainy;
 const weatherLabel = getWeatherTimeLabel(crop);
 return `${preference}${weatherLabel ? ` · ${weatherLabel}` : ""}`;
}

function getOversupplyNewsLine() {
 const oversuppliedItems = game.daily.oversuppliedCropIds
  .map((itemId) => getInventoryItem(itemId))
  .filter(Boolean);

 if (oversuppliedItems.length === 0) {
  return "";
 }

 return `<p>${oversuppliedItems.map((item) => `${item.name} ${getOversupplyThreshold(item, 1)}\uAC1C+`).join(", ")} ${text.oversupplyNews}</p>`;
}

function renderFarm() {
 farmGrid.innerHTML = "";

 game.farmTiles.slice(0, maxPlotCount).forEach((tile, index) => {
  const button = document.createElement("button");
  const crop = getCrop(tile.cropId);
  const remainingSeconds = getRemainingSeconds(tile);
  const isOwned = index < getUnlockedPlotCount();
  const permitLevel = getPlotPermitLevel(index);

  button.className = `farm-tile ${isOwned ? tile.state : "locked"}`;
  button.type = "button";
  button.dataset.tileIndex = String(index);
  applyPlotImage(button, tile);
  button.addEventListener("click", () => handleTileClick(index));

  if (!isOwned) {
   const isLevelLocked = game.player.level < permitLevel;
   button.innerHTML = `
    <span class="locked-label">${isLevelLocked ? `Lv.${permitLevel} \uC7A0\uAE08\uD574\uC81C` : text.buyPlot}</span>
    <span class="tile-label">${isLevelLocked ? text.plotLocked : text.plotAvailable}</span>
   `;
   button.setAttribute("aria-label", `${index + 1}${text.plot}, ${isLevelLocked ? `Lv.${permitLevel}` : text.buyPlot}`);
   farmGrid.appendChild(button);
   return;
  }

  if (tile.state === "empty") {
   button.innerHTML = `
    <span class="tile-icon">+</span>
    <span class="tile-multiplier">Lv.${tile.speedLevel}</span>
    <span class="tile-label">${text.plant}</span>
   `;
   button.setAttribute("aria-label", `${index + 1}${text.plot}, ${text.emptyPlot}`);
  }

  if (tile.state === "growing" && crop) {
   const growSeconds = getAdjustedGrowSeconds(crop, tile);
   const progress = 1 - remainingSeconds / growSeconds;
   button.style.setProperty("--progress", `${Math.max(0, Math.min(1, progress)) * 100}%`);
   button.innerHTML = `
    <span class="tile-multiplier">Lv.${tile.speedLevel}</span>
    ${cropImage(crop, "tile-crop-image")}
    <span class="tile-label" data-tile-label>${formatDuration(remainingSeconds)}</span>
   `;
   button.setAttribute("aria-label", `${index + 1}${text.plot}, ${crop.name} ${text.growing}, ${formatDuration(remainingSeconds)} ${text.remaining}`);
  }

  if (tile.state === "ready" && crop) {
   button.innerHTML = `
    <span class="tile-multiplier">Lv.${tile.speedLevel}</span>
    <span class="ready-bounce">${cropImage(crop, "tile-crop-image")}</span>
    <span class="tile-label" data-tile-label>${text.harvest}</span>
   `;
   button.setAttribute("aria-label", `${index + 1}${text.plot}, ${crop.name} ${text.ready}`);
  }

  farmGrid.appendChild(button);
 });
}

function renderFarmPlaces() {
 renderPlaceGrid(animalGrid, "animals");
 renderPlaceGrid(processingGrid, "processing");
}

function renderPlaceGrid(grid, sectionId) {
 grid.innerHTML = "";
 const unlockLevels = placeUnlockLevels[sectionId];

 Array.from({ length: maxPlotCount }).forEach((_, index) => {
  const level = unlockLevels[index];
  const isUnlocked = game.player.level >= level;
  const slot = sectionId === "processing" ? game.processingSlots[index] : sectionId === "animals" ? game.animalSlots[index] : null;
  const building = slot ? getProcessingBuilding(slot.buildingId) : null;
  const animal = slot ? getAnimal(slot.animalId) : null;
  const recipe = slot ? getProcessingRecipe(slot.recipeId) : null;
  const isReady = recipe && slot.readyAt && Date.now() >= slot.readyAt;
  const button = document.createElement("button");
  button.className = `farm-place-tile ${sectionId}${isUnlocked ? "" : " locked"}`;
  button.type = "button";
  button.dataset.placeSection = sectionId;
  button.dataset.placeIndex = String(index);

  if (sectionId === "animals" && isUnlocked) {
   if (animal) {
    const remaining = slot.readyAt ? formatDuration(getRemainingSeconds(slot)) : "";
    button.classList.add("installed");
    button.innerHTML = `
     <img class="place-building-image animal-image" src="${animal.image}" alt="${animal.name}" loading="eager" decoding="async" />
     <span data-place-label>${slot.readyAt ? remaining : animal.name}</span>
    `;
   } else {
    button.innerHTML = `<span>+ \uB3D9\uBB3C \uCD94\uAC00</span>`;
   }
  } else if (sectionId === "processing" && isUnlocked) {
   if (building) {
    button.classList.add("installed");
   button.innerHTML = `
     <img class="place-building-image" src="${building.image}" alt="${building.name}" loading="eager" decoding="async" />
     <span data-place-label>${isReady ? text.collect : recipe ? `${formatDuration(getRemainingSeconds(slot))} · x${getProcessingRepeatCount(slot)}` : building.name}</span>
    `;
   } else {
    button.innerHTML = `<span>+ ${text.install}</span>`;
   }
  } else {
   button.innerHTML = `${isUnlocked ? "" : `<span>Lv.${level} \uC7A0\uAE08\uD574\uC81C</span>`}`;
  }

  button.addEventListener("click", () => {
   if (!isUnlocked) {
    statusText.textContent = text.plotLocked;
    return;
   }

   if (sectionId === "animals") {
    handleAnimalSlotClick(index);
    return;
   }

   if (sectionId === "processing") {
    handleProcessingSlotClick(index);
    return;
   }

   statusText.textContent = "\uC900\uBE44\uB428";
  });
  grid.appendChild(button);
 });
}

function updateLiveTimers() {
 updateFarmTileTimers();
 updatePlaceTimers();
 updateOpenSheetTimers();
}

function updateFarmTileTimers() {
 game.farmTiles.slice(0, maxPlotCount).forEach((tile, index) => {
  const crop = getCrop(tile.cropId);
  const button = farmGrid.querySelector(`[data-tile-index="${index}"]`);
  if (!button || !crop || tile.state !== "growing") return;

  const remainingSeconds = getRemainingSeconds(tile);
  const growSeconds = getAdjustedGrowSeconds(crop, tile);
  const progress = 1 - remainingSeconds / growSeconds;
  const label = button.querySelector("[data-tile-label]");
  button.style.setProperty("--progress", `${Math.max(0, Math.min(1, progress)) * 100}%`);
  if (label) label.textContent = formatDuration(remainingSeconds);
  button.setAttribute("aria-label", `${index + 1}${text.plot}, ${crop.name} ${text.growing}, ${formatDuration(remainingSeconds)} ${text.remaining}`);
 });
}

function updatePlaceTimers() {
 updatePlaceTimerGrid(animalGrid, "animals");
 updatePlaceTimerGrid(processingGrid, "processing");
}

function updatePlaceTimerGrid(grid, sectionId) {
 const slots = sectionId === "processing" ? game.processingSlots : game.animalSlots;

 slots.slice(0, maxPlotCount).forEach((slot, index) => {
  const button = grid.querySelector(`[data-place-section="${sectionId}"][data-place-index="${index}"]`);
  const label = button?.querySelector("[data-place-label]");
  if (!button || !label) return;

  if (sectionId === "animals") {
   const animal = getAnimal(slot.animalId);
   if (!animal) return;
   label.textContent = slot.readyAt ? formatDuration(getRemainingSeconds(slot)) : animal.name;
   return;
  }

  const building = getProcessingBuilding(slot.buildingId);
  const recipe = getProcessingRecipe(slot.recipeId);
  if (!building) return;
  label.textContent = slot.readyAt && Date.now() >= slot.readyAt
   ? text.collect
   : recipe
    ? `${formatDuration(getRemainingSeconds(slot))} · x${getProcessingRepeatCount(slot)}`
    : building.name;
 });
}

function updateOpenSheetTimers() {
 if (animalSheet.classList.contains("open")) {
  renderAnimalWorkOptions();
 }

 if (processingSheet.classList.contains("open")) {
  renderProcessingWorkOptions();
 }
}

function tickGame() {
 if (updateGameState()) {
  render();
  return;
 }

 updateLiveTimers();
}

function handleProcessingSlotClick(index) {
 const slot = game.processingSlots[index];
 if (!slot.buildingId) {
  openBuildingSheet(index);
  return;
 }

 openProcessingSheet(index);
}

function handleAnimalSlotClick(index) {
 const slot = game.animalSlots[index];
 if (!slot.animalId) {
  openAnimalSheet(index);
  return;
 }

 openAnimalSheet(index);
}

function openAnimalSheet(index) {
 game.selectedAnimalIndex = index;
 animalSheet.classList.add("open");
 animalSheet.setAttribute("aria-hidden", "false");
 renderAnimalOptions();
}

function closeAnimalSheet() {
 animalSheet.classList.remove("open");
 animalSheet.setAttribute("aria-hidden", "true");
 game.selectedAnimalIndex = null;
}

function renderAnimalOptions() {
 const index = game.selectedAnimalIndex;
 const slot = game.animalSlots[index];
 animalOptions.innerHTML = "";

 if (!slot?.animalId) {
  animals.forEach((animal) => {
   const button = document.createElement("button");
   button.className = `crop-option${game.gold < animal.cost ? " unaffordable" : ""}`;
   button.type = "button";
   button.innerHTML = `
    <span class="crop-icon">${itemImage(animal, "crop-option-image")}</span>
    <span class="crop-text">
     <strong>${animal.name}</strong>
     <span>${text.cost} ${animal.cost}G</span>
    </span>
    <span class="crop-price">${text.install}</span>
   `;
   button.addEventListener("click", () => placeAnimal(animal.id));
   animalOptions.appendChild(button);
  });
  return;
 }

 const animal = getAnimal(slot.animalId);
 const feed = getProduct(animal.feedId);
 const product = getProduct(animal.productId);
 const progress = slot.readyAt ? Math.max(0, Math.min(100, Math.round((1 - getRemainingSeconds(slot) / animal.productionSeconds) * 100))) : 0;
 animalOptions.innerHTML = `
  <div class="processing-status">
   ${itemImage(animal, "sell-crop-image")}
   <div>
    <strong>${animal.name}</strong>
    <span>${feed.name} ${game.inventory[animal.feedId] || 0}\uAC1C · ${product.name}</span>
   </div>
  </div>
  <div class="animal-progress">
   <div class="animal-progress-bar" style="width: ${progress}%"></div>
  </div>
  <p class="empty-sell-text">${slot.readyAt ? `${progress}% · ${formatDuration(getRemainingSeconds(slot))}` : "\uC0AC\uB8CC\uB97C \uC8FC\uBA74 \uC0DD\uC0B0\uC774 \uC2DC\uC791\uB3FC\uC694"} · \uB0A8\uC740 \uC0AC\uB8CC ${slot.feedQueue}\uAC1C</p>
  <button id="feedAnimalButton" class="small-button" type="button">${text.feed}</button>
  <button id="removeAnimalButton" class="danger-subtle-button" type="button">${text.remove}</button>
 `;
 document.querySelector("#feedAnimalButton").addEventListener("click", feedAnimal);
 document.querySelector("#removeAnimalButton").addEventListener("click", requestRemoveAnimal);
}

function placeAnimal(animalId) {
 const index = game.selectedAnimalIndex;
 const animal = getAnimal(animalId);
 if (index === null || !animal) return;
 if (game.gold < animal.cost) {
  statusText.textContent = text.notEnoughGold;
  return;
 }
 game.gold -= animal.cost;
 game.animalSlots[index] = {
  ...createEmptyAnimalSlot(),
  animalId,
 };
 statusText.textContent = `${animal.name} ${text.install}`;
 saveGame();
 render();
 renderAnimalOptions();
}

function feedAnimal() {
 const index = game.selectedAnimalIndex;
 const slot = game.animalSlots[index];
 const animal = getAnimal(slot?.animalId);
 if (!animal) return;
 if ((game.inventory[animal.feedId] || 0) <= 0) {
  statusText.textContent = "\uC0AC\uB8CC\uAC00 \uBD80\uC871\uD574\uC694";
  return;
 }
 game.inventory[animal.feedId] -= 1;
 slot.feedQueue += 1;
 if (!slot.readyAt) {
  slot.startedAt = Date.now();
  slot.readyAt = Date.now() + animal.productionSeconds * 1000;
 }
 statusText.textContent = text.feed;
 saveGame();
 render();
 renderAnimalOptions();
}

function requestRemoveAnimal() {
 openConfirmDialog("\uC774 \uB3D9\uBB3C\uC744 \uC81C\uAC70\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?", removeAnimal);
}

function removeAnimal() {
 const index = game.selectedAnimalIndex;
 if (index === null) return;
 game.animalSlots[index] = createEmptyAnimalSlot();
 statusText.textContent = text.remove;
 closeAnimalSheet();
 saveGame();
 render();
}

function openBuildingSheet(index) {
 game.selectedProcessingIndex = index;
 buildingSheet.classList.add("open");
 buildingSheet.setAttribute("aria-hidden", "false");
 renderBuildingOptions();
}

function closeBuildingSheet() {
 buildingSheet.classList.remove("open");
 buildingSheet.setAttribute("aria-hidden", "true");
 game.selectedProcessingIndex = null;
}

function renderBuildingOptions() {
 buildingOptions.innerHTML = "";
 processingBuildings.forEach((building) => {
  const button = document.createElement("button");
  button.className = `crop-option${game.gold < building.cost ? " unaffordable" : ""}`;
  button.type = "button";
  button.innerHTML = `
   <span class="crop-icon">${buildingImage(building, "crop-option-image")}</span>
   <span class="crop-text">
    <strong>${building.name}</strong>
    <span>${text.cost} ${building.cost}G</span>
   </span>
   <span class="crop-price">${text.install}</span>
  `;
  button.addEventListener("click", () => installProcessingBuilding(building.id));
  buildingOptions.appendChild(button);
 });
}

function installProcessingBuilding(buildingId) {
 const index = game.selectedProcessingIndex;
 const building = getProcessingBuilding(buildingId);
 if (index === null || !building) return;

 if (game.gold < building.cost) {
  statusText.textContent = text.notEnoughGold;
  return;
 }

 game.gold -= building.cost;
 game.processingSlots[index] = {
  ...createEmptyProcessingSlot(),
  buildingId,
 };
 statusText.textContent = `${building.name} ${text.install}`;
 closeBuildingSheet();
 saveGame();
 render();
}

function openProcessingSheet(index) {
 game.selectedProcessingIndex = index;
 ui.processingRepeatCount = 1;
 processingSheet.classList.add("open");
 processingSheet.setAttribute("aria-hidden", "false");
 renderProcessingOptions();
}

function closeProcessingSheet() {
 processingSheet.classList.remove("open");
 processingSheet.setAttribute("aria-hidden", "true");
 game.selectedProcessingIndex = null;
 ui.processingRepeatCount = 1;
}

function renderProcessingOptions() {
 const index = game.selectedProcessingIndex;
 const slot = game.processingSlots[index];
 const building = getProcessingBuilding(slot?.buildingId);
 const recipe = getProcessingRecipe(slot?.recipeId);
 processingOptions.innerHTML = "";
 if (!building) return;

 if (recipe) {
  const product = getProduct(recipe.outputId);
  const repeatCount = getProcessingRepeatCount(slot);
  const outputQuantity = getProcessingOutputQuantity(recipe, repeatCount);
  const ready = Date.now() >= slot.readyAt;
  processingOptions.innerHTML = `
   <div class="processing-status">
    ${product ? itemImage(product, "sell-crop-image") : ""}
    <div>
     <strong>${product?.name || ""} x${outputQuantity}</strong>
     <span>${ready ? text.ready : `${product?.name || ""} x${outputQuantity} ${text.processing} · ${formatDuration(getRemainingSeconds(slot))}`}</span>
   </div>
   </div>
   <button id="collectProcessingButton" class="small-button" type="button" ${ready ? "" : "disabled"}>${product?.name || ""} x${outputQuantity} ${text.collect}</button>
   ${ready ? "" : `<button id="cancelProcessingButton" class="secondary-button" type="button">${text.cancelProduction}</button>`}
   <button id="demolishProcessingButton" class="danger-subtle-button" type="button">${text.demolish}</button>
  `;
  document.querySelector("#collectProcessingButton").addEventListener("click", collectProcessingProduct);
  document.querySelector("#cancelProcessingButton")?.addEventListener("click", requestCancelProcessingProduct);
  document.querySelector("#demolishProcessingButton").addEventListener("click", requestDemolishProcessingBuilding);
  return;
 }

 const repeatCount = sanitizeProcessingRepeatCount(ui.processingRepeatCount);
 processingOptions.innerHTML = `
  <div class="processing-repeat-control">
   <span>${text.repeat}</span>
   <div class="quantity-stepper">
    <button id="decreaseProcessingRepeat" type="button" aria-label="-">&lt;</button>
    <strong>${repeatCount}\uD68C</strong>
    <button id="increaseProcessingRepeat" type="button" aria-label="+">&gt;</button>
   </div>
  </div>
 `;

 document.querySelector("#decreaseProcessingRepeat").addEventListener("click", () => changeProcessingRepeatCount(-1));
 document.querySelector("#increaseProcessingRepeat").addEventListener("click", () => changeProcessingRepeatCount(1));

 building.recipeIds.forEach((recipeId) => {
  const itemRecipe = getProcessingRecipe(recipeId);
  const input = getInventoryItem(itemRecipe.inputId);
  const output = getProduct(itemRecipe.outputId);
  const inputQuantity = getProcessingInputQuantity(itemRecipe, repeatCount);
  const outputQuantity = getProcessingOutputQuantity(itemRecipe, repeatCount);
  const totalSeconds = getProcessingTotalSeconds(itemRecipe, repeatCount);
  const hasInput = (game.inventory[itemRecipe.inputId] || 0) >= inputQuantity;
  const button = document.createElement("button");
  button.className = `crop-option${hasInput ? "" : " unaffordable"}`;
  button.type = "button";
  button.innerHTML = `
   <span class="crop-icon">${itemImage(output, "crop-option-image")}</span>
   <span class="crop-text">
    <strong>${output.name} x${outputQuantity} ${text.make}</strong>
    <span>${text.need}: ${input.name} ${inputQuantity}\uAC1C</span>
    <span>${text.time}: ${formatDuration(totalSeconds)}</span>
   </span>
   <span class="crop-price">${text.processing}</span>
  `;
  button.addEventListener("click", () => startProcessingRecipe(itemRecipe.id));
  processingOptions.appendChild(button);
 });

 const demolishButton = document.createElement("button");
 demolishButton.className = "danger-subtle-button";
 demolishButton.type = "button";
 demolishButton.textContent = text.demolish;
 demolishButton.addEventListener("click", requestDemolishProcessingBuilding);
 processingOptions.appendChild(demolishButton);
}

function changeProcessingRepeatCount(amount) {
 ui.processingRepeatCount = Math.min(10, Math.max(1, sanitizeProcessingRepeatCount(ui.processingRepeatCount) + amount));
 renderProcessingOptions();
}

function startProcessingRecipe(recipeId) {
 const index = game.selectedProcessingIndex;
 const slot = game.processingSlots[index];
 const recipe = getProcessingRecipe(recipeId);
 if (index === null || !slot || !recipe) return;

 const repeatCount = sanitizeProcessingRepeatCount(ui.processingRepeatCount);
 const inputQuantity = getProcessingInputQuantity(recipe, repeatCount);
 const totalSeconds = getProcessingTotalSeconds(recipe, repeatCount);

 if ((game.inventory[recipe.inputId] || 0) < inputQuantity) {
  statusText.textContent = "\uC7AC\uB8CC\uAC00 \uBD80\uC871\uD574\uC694";
  return;
 }

 const now = Date.now();
 game.inventory[recipe.inputId] -= inputQuantity;
 game.processingSlots[index] = {
  ...slot,
  recipeId,
  repeatCount,
  totalSeconds,
  startedAt: now,
  readyAt: now + totalSeconds * 1000,
 };
 statusText.textContent = `${getProduct(recipe.outputId).name} x${getProcessingOutputQuantity(recipe, repeatCount)} ${text.processing}`;
 saveGame();
 render();
 renderProcessingOptions();
}

function collectProcessingProduct() {
 const index = game.selectedProcessingIndex;
 const slot = game.processingSlots[index];
 const recipe = getProcessingRecipe(slot?.recipeId);
 if (!recipe || Date.now() < slot.readyAt) return;

 const repeatCount = getProcessingRepeatCount(slot);
 const outputQuantity = getProcessingOutputQuantity(recipe, repeatCount);
 game.inventory[recipe.outputId] = (game.inventory[recipe.outputId] || 0) + outputQuantity;
 const expAmount = grantPlayerExp(getExpForProcessing(recipe) * repeatCount);
 game.processingSlots[index] = {
  ...slot,
  recipeId: null,
  repeatCount: 1,
  totalSeconds: null,
  startedAt: null,
  readyAt: null,
 };
 statusText.textContent = `${getProduct(recipe.outputId).name} ${outputQuantity}\uAC1C ${text.collect} · ${text.expGained} +${expAmount}`;
 saveGame();
 render();
 renderProcessingOptions();
}

function requestCancelProcessingProduct() {
 openConfirmDialog(
  "\uC0DD\uC0B0\uC744 \uCDE8\uC18C\uD558\uBA74 \uD22C\uC785\uD55C \uC7AC\uB8CC\uB294 \uC0AC\uB77C\uC838\uC694. \uC815\uB9D0 \uCDE8\uC18C\uD560\uAE4C\uC694?",
  cancelProcessingProduct,
 );
}

function cancelProcessingProduct() {
 const index = game.selectedProcessingIndex;
 const slot = game.processingSlots[index];
 if (index === null || !slot?.recipeId) return;

 game.processingSlots[index] = {
  ...slot,
  recipeId: null,
  repeatCount: 1,
  totalSeconds: null,
  startedAt: null,
  readyAt: null,
 };
 statusText.textContent = text.cancelProduction;
 saveGame();
 render();
 renderProcessingOptions();
}

function requestDemolishProcessingBuilding() {
 const index = game.selectedProcessingIndex;
 const slot = game.processingSlots[index];
 if (slot?.recipeId) {
  statusText.textContent = "\uAC00\uACF5 \uC911\uC778 \uC791\uC5C5\uC774 \uC788\uC5B4 \uCCA0\uAC70\uD560 \uC218 \uC5C6\uC5B4\uC694";
  return;
 }

 openConfirmDialog(
  "\uC815\uB9D0\uB85C \uC774 \uAC74\uBB3C\uC744 \uCCA0\uAC70\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",
  demolishProcessingBuilding,
 );
}

function demolishProcessingBuilding() {
 const index = game.selectedProcessingIndex;
 if (index === null) return;
 game.processingSlots[index] = createEmptyProcessingSlot();
 statusText.textContent = text.demolish;
 closeProcessingSheet();
 saveGame();
 render();
}

function openConfirmDialog(message, action) {
 ui.confirmAction = action;
 confirmMessage.textContent = message;
 confirmDialog.classList.add("open");
 confirmDialog.setAttribute("aria-hidden", "false");
}

function closeConfirmDialog() {
 confirmDialog.classList.remove("open");
 confirmDialog.setAttribute("aria-hidden", "true");
 ui.confirmAction = null;
}

function renderInventory() {
 inventoryGrid.innerHTML = "";

 const inventoryItems = [
  ...getUnlockedCrops(),
  ...products.filter((product) => game.inventory[product.id] > 0),
 ];

 inventoryItems.forEach((item) => {
  const count = game.inventory[item.id];
  const button = document.createElement("button");
  button.className = `inventory-slot${ui.selectedSellCropId === item.id ? " selected" : ""}`;
  button.type = "button";
  button.disabled = count <= 0;
  button.innerHTML = `
   ${itemImage(item, "inventory-crop-image")}
   <span class="item-count">${count}</span>
  `;
  button.addEventListener("click", () => selectSellCrop(item.id));
  inventoryGrid.appendChild(button);
 });

 renderSellPanel();
}

function renderSellPanel() {
 const item = getInventoryItem(ui.selectedSellCropId);

 if (!item || game.inventory[item.id] <= 0) {
  sellPanel.innerHTML = `
   <p class="empty-sell-text">${text.selectCropToSell}</p>
   <button id="sellAllButton" class="secondary-button sell-all-wide-button" type="button">${text.sellAll}</button>
  `;
  document.querySelector("#sellAllButton").addEventListener("click", sellAllCrops);
  return;
 }

 const maxQuantity = game.inventory[item.id];
 ui.sellQuantity = Math.min(Math.max(1, ui.sellQuantity), maxQuantity);
 const totalPrice = ui.sellQuantity * getItemPrice(item);

 sellPanel.innerHTML = `
  <div class="sell-info">
   ${itemImage(item, "sell-crop-image")}
   <div>
    <strong>${item.name}</strong>
    <span>${ui.sellQuantity} / ${maxQuantity}</span>
   </div>
  </div>
  <div class="quantity-stepper">
   <button id="decreaseSellQuantity" type="button" aria-label="-">-</button>
   <strong>${ui.sellQuantity}</strong>
   <button id="increaseSellQuantity" type="button" aria-label="+">+</button>
  </div>
  <div class="sell-actions">
   <button id="maxSellQuantityButton" class="secondary-button" type="button">${text.maxSell}</button>
   <button id="sellSelectedButton" class="small-button" type="button">${text.sell} ${totalPrice}G</button>
  </div>
 `;

 bindHoldStepper(document.querySelector("#decreaseSellQuantity"), -1);
 bindHoldStepper(document.querySelector("#increaseSellQuantity"), 1);
 document.querySelector("#maxSellQuantityButton").addEventListener("click", setMaxSellQuantity);
 document.querySelector("#sellSelectedButton").addEventListener("click", sellSelectedCrop);
}

function selectSellCrop(cropId) {
 if (game.inventory[cropId] <= 0) return;
 ui.selectedSellCropId = cropId;
 ui.sellQuantity = 1;
 renderInventory();
}

function changeSellQuantity(amount) {
 const cropId = ui.selectedSellCropId;
 const maxQuantity = game.inventory[cropId] || 0;
 ui.sellQuantity = Math.min(maxQuantity, Math.max(1, ui.sellQuantity + amount));
 renderSellPanel();
}

function setMaxSellQuantity() {
 const cropId = ui.selectedSellCropId;
 const maxQuantity = game.inventory[cropId] || 0;
 if (maxQuantity <= 0) return;

 ui.sellQuantity = maxQuantity;
 renderSellPanel();
}

function bindHoldStepper(button, amount) {
 button.addEventListener("click", () => changeSellQuantity(amount));

 button.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  startQuantityHold(amount);
 });

 button.addEventListener("pointerup", stopQuantityHold);
 button.addEventListener("pointercancel", stopQuantityHold);
 button.addEventListener("pointerleave", stopQuantityHold);
}

function startQuantityHold(amount) {
 stopQuantityHold();
 ui.holdRepeatCount = 0;
 window.addEventListener("pointerup", stopQuantityHold, { once: true });
 window.addEventListener("pointercancel", stopQuantityHold, { once: true });
 window.addEventListener("blur", stopQuantityHold, { once: true });

 ui.holdTimer = window.setTimeout(() => {
  repeatQuantityChange(amount);
 }, 360);
}

function repeatQuantityChange(amount) {
 changeSellQuantity(amount);
 ui.holdRepeatCount += 1;

 const delay = Math.max(45, 170 - ui.holdRepeatCount * 15);
 ui.holdRepeatTimer = window.setTimeout(() => repeatQuantityChange(amount), delay);
}

function stopQuantityHold() {
 window.clearTimeout(ui.holdTimer);
 window.clearTimeout(ui.holdRepeatTimer);
 ui.holdTimer = null;
 ui.holdRepeatTimer = null;
 ui.holdRepeatCount = 0;
}

function sellSelectedCrop() {
 const item = getInventoryItem(ui.selectedSellCropId);
 if (!item || game.inventory[item.id] <= 0) {
  statusText.textContent = text.noCrops;
  return;
 }

 const quantity = Math.min(ui.sellQuantity, game.inventory[item.id]);
 const income = quantity * getItemPrice(item);
 game.inventory[item.id] -= quantity;
 game.gold += income;
 recordItemSale(item.id, quantity);

 if (game.inventory[item.id] <= 0) {
  ui.selectedSellCropId = null;
  ui.sellQuantity = 1;
 }

 statusText.textContent = `${income}${text.goldEarned}`;
 saveGame();
 render();
}

function sellAllCrops() {
 openConfirmDialog("\uC815\uB9D0\uB85C \uBAA8\uB4E0 \uC544\uC774\uD15C\uC744 \uD310\uB9E4\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?", confirmSellAllCrops);
}

function confirmSellAllCrops() {
 const income = getAllInventoryItems().reduce((total, item) => total + game.inventory[item.id] * getItemPrice(item), 0);

 if (income <= 0) {
  statusText.textContent = text.noCrops;
  return;
 }

 getAllInventoryItems().forEach((item) => {
  recordItemSale(item.id, game.inventory[item.id]);
  game.inventory[item.id] = 0;
 });

 game.gold += income;
 ui.selectedSellCropId = null;
 ui.sellQuantity = 1;
 statusText.textContent = `${income}${text.goldEarned}`;
 saveGame();
 render();
}

function recordItemSale(itemId, quantity) {
 const cleanQuantity = Math.max(0, Math.floor(Number(quantity)));
 if (cleanQuantity <= 0) return;

 const dateKey = getTodayKey();

 if (!game.salesHistory[dateKey]) {
  game.salesHistory[dateKey] = createEmptyInventory();
 }

 game.salesHistory[dateKey][itemId] = (game.salesHistory[dateKey][itemId] || 0) + cleanQuantity;
 pruneSalesHistory();
}

function pruneSalesHistory() {
 const keepDates = new Set([
  getDateKeyOffset(getTodayKey(), -1),
  getTodayKey(),
 ]);

 Object.keys(game.salesHistory).forEach((dateKey) => {
  if (!keepDates.has(dateKey)) {
   delete game.salesHistory[dateKey];
  }
 });
}

function renderCropOptions() {
 cropOptions.innerHTML = "";
 plantAllButton.hidden = true;
 plantAllButton.textContent = text.plantAll;

 getUnlockedCrops().forEach((crop) => {
  const tile = game.farmTiles[game.selectedTileIndex] || createEmptyTile();
  const seedCost = getSeedCost(crop, tile);
  const emptyTiles = getEmptyOwnedTiles();
  const totalCost = emptyTiles.reduce((cost, item) => cost + getSeedCost(crop, item.tile), 0);
  const row = document.createElement("div");
  const button = document.createElement("button");
  row.className = "crop-option-row";
  button.className = "crop-option";
  button.type = "button";
  button.title = `${crop.name}: ${text.growTime} ${formatDuration(getAdjustedGrowSeconds(crop, tile))}`;
  button.innerHTML = `
   <span class="crop-icon">${cropImage(crop, "crop-option-image")}</span>
   <span class="crop-text">
    <strong>${crop.name}</strong>
    <span>${formatDuration(getAdjustedGrowSeconds(crop, tile))}${text.afterHarvest}</span>
    <span>${text.yieldLevel} ${getHarvestAmount(crop, tile)}\uAC1C</span>
    <span>${text.seedCost} ${seedCost === 0 ? text.free : `${seedCost}G`}</span>
    <span>${getCropPreferenceText(crop)}</span>
   </span>
   <span class="crop-price">${getCropPrice(crop)}G</span>
  `;
  button.addEventListener("click", () => plantCrop(crop.id));
  row.appendChild(button);

  if (isPlantAllUnlocked()) {
      const allButton = document.createElement("button");
      allButton.className = `plant-all-inline-button${ui.highlightedUnlocks.has("plantAll") ? " attention-glow" : ""}`;
   allButton.type = "button";
   allButton.disabled = emptyTiles.length === 0 || game.gold < totalCost;
   allButton.textContent = `${text.plantAll} ${emptyTiles.length}\uCE78`;
   allButton.addEventListener("click", () => plantAllCrops(crop.id));
   row.appendChild(allButton);
  }

  cropOptions.appendChild(row);
 });
}

function renderPlantAllButton(crop) {
 if (!isPlantAllUnlocked()) {
  plantAllButton.hidden = true;
  return;
 }

 const emptyTiles = getEmptyOwnedTiles();
 const totalCost = emptyTiles.reduce((cost, { tile }) => cost + getSeedCost(crop, tile), 0);
 plantAllButton.hidden = false;
 plantAllButton.disabled = emptyTiles.length === 0 || game.gold < totalCost;
 plantAllButton.textContent = `${text.plantAll} · ${emptyTiles.length}\uCE78 ${totalCost === 0 ? text.free : `${totalCost}G`}`;
}

function getEmptyOwnedTiles() {
 return game.farmTiles
  .slice(0, getUnlockedPlotCount())
  .map((tile, index) => ({ tile, index }))
  .filter(({ tile }) => tile.state === "empty");
}

function plantAllCrops(cropId) {
 if (!isPlantAllUnlocked()) return;

 const crop = getCrop(cropId);
 const emptyTiles = getEmptyOwnedTiles();
 const totalCost = emptyTiles.reduce((cost, { tile }) => cost + getSeedCost(crop, tile), 0);

 if (emptyTiles.length === 0) {
  statusText.textContent = "\uBE48 \uBC2D\uC774 \uC5C6\uC5B4\uC694";
  return;
 }

 if (game.gold < totalCost) {
  statusText.textContent = text.notEnoughGold;
  return;
 }

 const now = Date.now();
 game.gold -= totalCost;
 emptyTiles.forEach(({ tile, index }) => {
  game.farmTiles[index] = {
   ...tile,
   state: "growing",
   cropId,
   plantedAt: now,
   readyAt: now + getAdjustedGrowSeconds(crop, tile) * 1000,
  };
 });

 ui.highlightedUnlocks.delete("plantAll");
 statusText.textContent = `${crop.name} ${emptyTiles.length}\uCE78 ${text.planted}`;
 closeCropSheet();
 saveGame();
 render();
}

function renderUpgrades() {
 upgradeGrid.innerHTML = "";
 screens.upgrade.hidden = !isUpgradeSystemUnlocked();
 document.querySelector('[data-tab="upgrade"]').hidden = !isUpgradeSystemUnlocked();
 bottomNav.style.gridTemplateColumns = isUpgradeSystemUnlocked() ? "repeat(3, 1fr)" : "repeat(2, 1fr)";

 if (!isUpgradeSystemUnlocked()) {
  if (screens.upgrade.classList.contains("active")) {
   switchTab("farm");
  }
  return;
 }

 game.farmTiles.slice(0, getUnlockedPlotCount()).forEach((tile, index) => {
  const button = document.createElement("button");
  button.className = "upgrade-plot-tile";
  button.type = "button";
  applyPlotImage(button, tile);
  button.innerHTML = `
   <span class="upgrade-plot-name">${index + 1}${text.plot}</span>
   <span>${text.speedLevel} Lv.${tile.speedLevel}</span>
  `;
  button.addEventListener("click", () => openUpgradeSheet(index));
  upgradeGrid.appendChild(button);
 });
}

function renderUnlockCropButton() {
 unlockCropButton.hidden = true;
}

function openUpgradeSheet(index) {
 game.selectedUpgradeTileIndex = index;
 upgradeSheet.classList.add("open");
 upgradeSheet.setAttribute("aria-hidden", "false");
 statusText.textContent = `${index + 1}${text.plot}`;
 renderUpgradeOptions();
}

function closeUpgradeSheet() {
 upgradeSheet.classList.remove("open");
 upgradeSheet.setAttribute("aria-hidden", "true");
 game.selectedUpgradeTileIndex = null;
}

function renderUpgradeOptions() {
 const index = game.selectedUpgradeTileIndex;
 const tile = game.farmTiles[index];
 upgradeOptions.innerHTML = "";

 getPlotUpgradeOptions(tile, index).forEach((upgrade) => {
  const button = document.createElement("button");
  button.className = `crop-option no-icon${!upgrade.isMax && game.gold < upgrade.cost ? " unaffordable" : ""}`;
  button.type = "button";
  button.title = upgrade.title;
  button.disabled = upgrade.isMax;
  button.innerHTML = `
   <span class="crop-text">
    <strong>${upgrade.title}</strong>
    <span>${upgrade.current} -> ${upgrade.next}</span>
   </span>
   <span class="crop-price">${upgrade.isMax ? text.maxUpgrade : `${upgrade.cost}G`}</span>
  `;
  button.addEventListener("click", () => buyTileUpgrade(upgrade.type));
  upgradeOptions.appendChild(button);
 });
}

function getPlotUpgradeOptions(tile, index) {
 return [
  {
   type: "speed",
   title: text.upgradeSpeed,
   current: `Lv.${tile.speedLevel} · ${getGrowSpeedReductionPercent(tile.speedLevel)}%`,
   next: tile.speedLevel >= maxPlotUpgradeLevel
    ? text.maxUpgrade
    : `Lv.${tile.speedLevel + 1} · ${getGrowSpeedReductionPercent(tile.speedLevel + 1)}%`,
   cost: getUpgradeCost("speed", tile.speedLevel, index),
   isMax: tile.speedLevel >= maxPlotUpgradeLevel,
  },
 ];
}

function getGrowSpeedReductionPercent(level) {
 const rates = {
  1: 0,
  2: 10,
  3: 20,
  4: 30,
  5: 40,
 };

 return rates[sanitizePlotUpgradeLevel(level)] ?? 0;
}

function getPlotUpgradeCostMultiplier(index) {
 const multipliers = [1, 1, 1.25, 1.5, 1.8, 2.15];
 return multipliers[index] ?? 2.15;
}

function getUpgradeCost(type, level, plotIndex = 0) {
 const costs = {
  speed: { 1: 20, 2: 60, 3: 120, 4: 220 },
 };

 const baseCost = costs[type]?.[level] ?? 0;
 return Math.ceil(baseCost * getPlotUpgradeCostMultiplier(plotIndex));
}

function buyTileUpgrade(type) {
 const index = game.selectedUpgradeTileIndex;
 const tile = game.farmTiles[index];
 const key = type === "speed" ? "speedLevel" : null;
 if (!key) return;
 const cost = getUpgradeCost(type, tile[key], index);

 if (tile[key] >= maxPlotUpgradeLevel) {
  statusText.textContent = text.maxUpgrade;
  return;
 }

 if (game.gold < cost) {
  statusText.textContent = text.notEnoughGold;
  return;
 }

 game.gold -= cost;
 tile[key] += 1;
 statusText.textContent = `${index + 1}${text.plot} ${text.upgraded}`;
 saveGame();
 render();
 renderUpgradeOptions();
}

function handleTileClick(index) {
 if (index >= getUnlockedPlotCount()) {
  const permitLevel = getPlotPermitLevel(index);
  statusText.textContent = game.player.level < permitLevel ? text.plotLocked : `${text.plotExpansion}\uC744 \uAD6C\uB9E4\uD574\uC8FC\uC138\uC694`;
  return;
 }

 const tile = game.farmTiles[index];
 updateTileState(tile);

 if (tile.state === "empty") {
  openCropSheet(index);
  return;
 }

 if (tile.state === "ready") {
  harvestCrop(index);
  return;
 }

 const crop = getCrop(tile.cropId);
 statusText.textContent = `${crop.name}${text.growsIn}${formatDuration(getRemainingSeconds(tile))}${text.afterGrow}`;
 render();
}

function openCropSheet(index) {
 game.selectedTileIndex = index;
 cropSheet.classList.add("open");
 cropSheet.setAttribute("aria-hidden", "false");
 statusText.textContent = `${index + 1}${text.plot}\uC5D0 ${text.chooseCrop}`;
 renderCropOptions();
}

function closeCropSheet() {
 cropSheet.classList.remove("open");
 cropSheet.setAttribute("aria-hidden", "true");
 game.selectedTileIndex = null;
}

function openRankingPopup() {
 if (!rankingPopup) return;
 rankingPopup.classList.add("open");
 rankingPopup.setAttribute("aria-hidden", "false");

 if (typeof window.refreshRankings === "function") {
  window.refreshRankings();
 } else if (rankingStatusText) {
  rankingStatusText.textContent = "\uB7AD\uD0B9\uC744 \uC900\uBE44\uD558\uB294 \uC911\uC774\uC5D0\uC694. Firebase \uC124\uC815\uC774\uB098 \uC778\uD130\uB137 \uC5F0\uACB0\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.";
 }
}

function closeRankingPopup() {
 if (!rankingPopup) return;
 rankingPopup.classList.remove("open");
 rankingPopup.setAttribute("aria-hidden", "true");
}

function plantCrop(cropId) {
 const index = game.selectedTileIndex;
 if (index === null) return;

 const crop = getCrop(cropId);
 const tile = game.farmTiles[index];
 const seedCost = getSeedCost(crop, tile);

 if (game.gold < seedCost) {
  statusText.textContent = text.notEnoughGold;
  return;
 }

 const now = Date.now();
 game.gold -= seedCost;
 game.farmTiles[index] = {
  ...tile,
  state: "growing",
  cropId,
  plantedAt: now,
  readyAt: now + getAdjustedGrowSeconds(crop, tile) * 1000,
 };
 statusText.textContent = `${crop.name}${text.planted}`;
 closeCropSheet();
 saveGame();
 render();
}

function harvestCrop(index) {
 const tile = game.farmTiles[index];
 const crop = getCrop(tile.cropId);
 if (!crop) return;

 const harvestAmount = getHarvestAmount(crop, tile);
 const expAmount = grantPlayerExp(getExpForCrop(crop));
 game.inventory[crop.id] += harvestAmount;
 game.farmTiles[index] = {
  ...tile,
  state: "empty",
  cropId: null,
  plantedAt: null,
  readyAt: null,
 };
 statusText.textContent = `${crop.name} ${harvestAmount}\uAC1C\uB97C \uC218\uD655\uD588\uC5B4\uC694 · ${text.expGained} +${expAmount}`;
 saveGame();
 render();
}

function handleLevelUps(levelUps) {
 if (!levelUps.length) return;

 levelUps.forEach(({ level }) => {
  levelUnlocks
   .filter((unlock) => unlock.level === level)
   .forEach(markUnlockHighlight);
 });

 const latestLevelUp = levelUps[levelUps.length - 1];
 showLevelUpPopup(latestLevelUp.level, latestLevelUp.messages);
}

function markUnlockHighlight(unlock) {
 if (unlock.type === "plotPermit") ui.highlightedUnlocks.add("plotPermit");
 if (unlock.type === "upgrade") ui.highlightedUnlocks.add("upgrade");
 if (unlock.type === "weather") ui.highlightedUnlocks.add("weather");
 if (unlock.type === "market") ui.highlightedUnlocks.add("market");
 if (unlock.type === "plantAll") ui.highlightedUnlocks.add("plantAll");
}

function showLevelUpPopup(level, messages) {
 window.clearTimeout(ui.levelUpTimer);
 levelUpLevelText.textContent = `Lv.${level}`;
 levelUpUnlockText.textContent = messages.length ? messages.join(" · ") : "\uC0C8 \uB808\uBCA8\uC5D0 \uB3C4\uB2EC\uD588\uC5B4\uC694";
 levelUpPopup.classList.add("open");
 levelUpPopup.setAttribute("aria-hidden", "false");
 ui.levelUpTimer = window.setTimeout(closeLevelUpPopup, 3200);
}

function closeLevelUpPopup() {
 levelUpPopup.classList.remove("open");
 levelUpPopup.setAttribute("aria-hidden", "true");
}

document.querySelectorAll("[data-close-sheet]").forEach((button) => {
 button.addEventListener("click", closeCropSheet);
});

document.querySelectorAll("[data-close-upgrade-sheet]").forEach((button) => {
 button.addEventListener("click", closeUpgradeSheet);
});

document.querySelectorAll("[data-close-building-sheet]").forEach((button) => {
 button.addEventListener("click", closeBuildingSheet);
});

document.querySelectorAll("[data-close-animal-sheet]").forEach((button) => {
 button.addEventListener("click", closeAnimalSheet);
});

document.querySelectorAll("[data-close-processing-sheet]").forEach((button) => {
 button.addEventListener("click", closeProcessingSheet);
});

confirmCancelButton.addEventListener("click", closeConfirmDialog);
confirmOkButton.addEventListener("click", () => {
 const action = ui.confirmAction;
 closeConfirmDialog();
 if (action) action();
});

function switchTab(activeTab) {
 if (activeTab === "upgrade") ui.highlightedUnlocks.delete("upgrade");
 ui.farmMenuOpen = false;

 navButtons.forEach((navButton) => {
  navButton.classList.toggle("active", navButton.dataset.tab === activeTab);
 });

 Object.entries(screens).forEach(([tab, screen]) => {
  screen.classList.toggle("active", tab === activeTab);
 });

 closeCropSheet();
 closeUpgradeSheet();
 closeAnimalSheet();
 closeBuildingSheet();
 closeProcessingSheet();
}

navButtons.forEach((button) => {
 button.addEventListener("click", () => {
  const activeTab = button.dataset.tab;

  if (activeTab === "farm") {
   const wasFarmActive = screens.farm.classList.contains("active");
   const shouldOpenMenu = !wasFarmActive || !ui.farmMenuOpen;
   switchTab("farm");
   ui.farmMenuOpen = shouldOpenMenu;
   renderFarmShell();
   return;
  }

  if (activeTab === "upgrade" && !isUpgradeSystemUnlocked()) {
   statusText.textContent = "Lv.4\uBD80\uD130 \uC5C5\uADF8\uB808\uC774\uB4DC\uAC00 \uC5F4\uB824\uC694";
   return;
  }

  switchTab(activeTab);
 });
});

farmSubButtons.forEach((button) => {
 button.addEventListener("click", () => {
  ui.activeFarmSection = button.dataset.farmSection;
  ui.farmMenuOpen = false;
  switchTab("farm");
  render();
 });
});

newsToggleButton.addEventListener("click", () => {
 ui.highlightedUnlocks.delete("weather");
 ui.highlightedUnlocks.delete("market");
 const isOpen = newsCard.classList.toggle("open");
 newsToggleButton.classList.toggle("active", isOpen);
 newsToggleButton.setAttribute("aria-expanded", String(isOpen));
});

preloadGameImages();
bindBackgroundMusicStart();
rankingButton?.addEventListener("click", openRankingPopup);
rankingCloseButton?.addEventListener("click", closeRankingPopup);
levelUpPopupButton.addEventListener("click", closeLevelUpPopup);

render();
setInterval(tickGame, 1000);

