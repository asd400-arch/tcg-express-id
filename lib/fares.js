// Fare system configuration (IDR - Indonesian Rupiah)
// Admin-configurable via /api/admin/settings key: "fare_table"

export const SIZE_TIERS = [
  { key: 'envelope', label: 'Amplop / Dokumen', baseFare: 80000, maxWeight: 1, icon: '✉️' },
  { key: 'small', label: 'Kecil (< 5kg)', baseFare: 150000, maxWeight: 5, icon: '📦' },
  { key: 'medium', label: 'Sedang (5–20kg)', baseFare: 300000, maxWeight: 20, icon: '📦' },
  { key: 'large', label: 'Besar (20–50kg)', baseFare: 600000, maxWeight: 50, icon: '🏋️' },
  { key: 'bulky', label: 'Sangat Besar (50kg+)', baseFare: 1200000, maxWeight: Infinity, icon: '🚛' },
];

export const WEIGHT_RANGES = [
  { key: '0-5', label: '~5kg', midWeight: 3, sizeTier: 'small' },
  { key: '5-10', label: '5~10kg', midWeight: 7.5, sizeTier: 'medium' },
  { key: '10-20', label: '10~20kg', midWeight: 15, sizeTier: 'medium' },
  { key: '20-40', label: '20~40kg', midWeight: 30, sizeTier: 'large' },
  { key: '40-70', label: '40~70kg', midWeight: 55, sizeTier: 'bulky' },
  { key: '70-100', label: '70~100kg', midWeight: 85, sizeTier: 'bulky' },
  { key: '100+', label: '100kg+', midWeight: 120, sizeTier: 'bulky' },
];

export const VOLUME_TIERS = [
  { maxVolume: 10000, sizeTier: 'small', label: 'Kecil' },
  { maxVolume: 50000, sizeTier: 'medium', label: 'Sedang' },
  { maxVolume: 200000, sizeTier: 'large', label: 'Besar' },
  { maxVolume: Infinity, sizeTier: 'bulky', label: 'XL' },
];

export const URGENCY_MULTIPLIERS = {
  standard: { label: 'Reguler', multiplier: 1.0, desc: 'Dalam 24 jam' },
  express: { label: 'Express', multiplier: 1.5, desc: 'Dalam 4 jam' },
  urgent: { label: 'Urgen', multiplier: 2.0, desc: 'Dalam 1 jam' },
};

export const ADDON_OPTIONS = [
  { key: 'extra_manpower', label: 'Tenaga Tambahan', price: 300000, unit: 'orang', icon: '👷', hasQty: true },
  { key: 'white_glove', label: 'Layanan White Glove', price: 500000, unit: 'flat', icon: '🧤', hasQty: false },
  { key: 'stairs', label: 'Biaya Tangga', price: 150000, unit: 'lantai', icon: '🪜', hasQty: true },
];

export const BASIC_EQUIPMENT = [
  { key: 'trolley', label: 'Troli', price: 0, icon: '🛒' },
  { key: 'wrapping', label: 'Pembungkus', price: 200000, icon: '📦' },
  { key: 'dismantlement', label: 'Pembongkaran', price: 200000, icon: '🔧' },
  { key: 'installation', label: 'Pemasangan', price: 200000, icon: '🔩' },
];

export const SPECIAL_EQUIPMENT = [
  { key: 'pallet_jack', label: 'Pallet Jack', icon: '🏗️' },
  { key: 'lift_truck', label: 'Lift Truck', icon: '🚛' },
  { key: 'crane', label: 'Crane', icon: '🏗️' },
  { key: 'other_request', label: 'Permintaan Lain', icon: '📝', hasComment: true },
];

export const DIMENSION_PRESETS = [
  { key: 'envelope', label: 'Amplop', icon: '✉️', l: 35, w: 25, h: 3, weightKey: '0-5' },
  { key: 'shoebox', label: 'Kotak Sepatu', icon: '👟', l: 35, w: 25, h: 15, weightKey: '0-5' },
  { key: 'small_box', label: 'Kardus Kecil', icon: '📦', l: 40, w: 30, h: 30, weightKey: '5-10' },
  { key: 'medium_box', label: 'Kardus Sedang', icon: '📦', l: 60, w: 40, h: 40, weightKey: '10-20' },
  { key: 'large_box', label: 'Kardus Besar', icon: '📦', l: 80, w: 60, h: 60, weightKey: '20-40' },
  { key: 'pallet', label: 'Palet', icon: '🏗️', l: 120, w: 100, h: 100, weightKey: '40-70' },
  { key: 'furniture', label: 'Furnitur', icon: '🛋️', l: 200, w: 100, h: 120, weightKey: '70-100' },
  { key: 'xl_cargo', label: 'Kargo XL', icon: '🚛', l: 300, w: 150, h: 150, weightKey: '100+' },
];

export function getVehicleModeIndex(key) {
  if (!key || key === 'any') return -1;
  return VEHICLE_MODES.findIndex(v => v.key === key);
}

// ── Vehicle Modes - IDR pricing ──
export const VEHICLE_MODES = [
  { key: 'motorcycle', label: 'Sepeda Motor', maxWeight: 8, maxL: 40, maxW: 30, maxH: 30, baseFare: 80000, icon: '🏍️' },
  { key: 'car', label: 'Mobil', maxWeight: 20, maxL: 70, maxW: 50, maxH: 50, baseFare: 150000, icon: '🚗' },
  { key: 'mpv', label: 'MPV', maxWeight: 50, maxL: 110, maxW: 80, maxH: 50, baseFare: 250000, icon: '🚙' },
  { key: 'van_1_7m', label: 'Van 1.7m', maxWeight: 400, maxL: 160, maxW: 120, maxH: 100, baseFare: 450000, icon: '🚐' },
  { key: 'van_2_4m', label: 'Van 2.4m', maxWeight: 800, maxL: 230, maxW: 120, maxH: 120, baseFare: 650000, icon: '🚐' },
  { key: 'lorry_10ft', label: 'Truk 10ft', maxWeight: 1200, maxL: 290, maxW: 140, maxH: 170, baseFare: 950000, icon: '🚚' },
  { key: 'lorry_14ft', label: 'Truk 14ft', maxWeight: 2000, maxL: 420, maxW: 170, maxH: 190, baseFare: 1400000, icon: '🚚' },
  { key: 'lorry_24ft', label: 'Truk 24ft', maxWeight: 4000, maxL: 720, maxW: 220, maxH: 220, baseFare: 2800000, icon: '🚛' },
  { key: 'trailer_20ft', label: 'Trailer 20ft', maxWeight: 10000, maxL: 600, maxW: 240, maxH: 260, baseFare: 1800000, icon: '🚛' },
  { key: 'trailer_40ft', label: 'Trailer 40ft', maxWeight: 20000, maxL: 1200, maxW: 240, maxH: 260, baseFare: 3500000, icon: '🚛' },
  { key: 'special', label: 'Khusus', maxWeight: Infinity, maxL: Infinity, maxW: Infinity, maxH: Infinity, baseFare: 0, icon: '🏗️' },
];

export const VALID_VEHICLE_KEYS = VEHICLE_MODES.map(v => v.key);

export function autoSelectVehicle(weightKg, lengthCm, widthCm, heightCm) {
  const w = parseFloat(weightKg) || 0;
  const l = parseFloat(lengthCm) || 0;
  const wi = parseFloat(widthCm) || 0;
  const h = parseFloat(heightCm) || 0;

  for (const mode of VEHICLE_MODES) {
    if (mode.key === 'special') continue;
    if (w <= mode.maxWeight && l <= mode.maxL && wi <= mode.maxW && h <= mode.maxH) {
      return mode.key;
    }
  }
  return 'special';
}

export function legacyVehicleLabel(key) {
  const map = {
    van: 'van_1_7m',
    truck: 'lorry_10ft',
    lorry: 'lorry_14ft',
  };
  const mapped = map[key] || key;
  const mode = VEHICLE_MODES.find(v => v.key === mapped);
  return mode ? mode.label : key;
}

const LEGACY_VEHICLE_MAP = {
  van: 'van_1_7m',
  truck: 'lorry_10ft',
  lorry: 'lorry_14ft',
  '1.7m_van': 'van_1_7m',
  '2.4m_van': 'van_2_4m',
  '10ft_lorry': 'lorry_10ft',
  '14ft_lorry': 'lorry_14ft',
  '24ft_lorry': 'lorry_24ft',
  '20ft_trailer': 'trailer_20ft',
  '40ft_trailer': 'trailer_40ft',
  '20ft_lorry': 'trailer_20ft',
};

export function normalizeVehicleKey(key) {
  if (!key) return null;
  return LEGACY_VEHICLE_MAP[key] || key;
}

export function checkVehicleFit(driverVehicleKey, jobVehicleRequired) {
  if (!jobVehicleRequired || jobVehicleRequired === 'any') return { ok: true };
  if (!driverVehicleKey) return { ok: false, required: jobVehicleRequired, driverVehicle: 'none' };

  const driverKey = normalizeVehicleKey(driverVehicleKey);
  const jobKey = normalizeVehicleKey(jobVehicleRequired);

  const driverIdx = getVehicleModeIndex(driverKey);
  const jobIdx = getVehicleModeIndex(jobKey);

  if (driverIdx < 0 || jobIdx < 0) return { ok: true };
  if (driverIdx >= jobIdx) return { ok: true };

  const jobMode = VEHICLE_MODES[jobIdx];
  const driverMode = VEHICLE_MODES[driverIdx];
  return {
    ok: false,
    required: jobMode?.label || jobVehicleRequired,
    driverVehicle: driverMode?.label || driverVehicleKey,
  };
}

export const EV_EMISSION_FACTORS = {
  motorcycle: 0.08,
  car: 0.17,
  mpv: 0.21,
  van_1_7m: 0.27,
  van_2_4m: 0.27,
  lorry_10ft: 0.45,
  lorry_14ft: 0.62,
  lorry_24ft: 0.85,
  trailer_20ft: 1.10,
  trailer_40ft: 1.50,
};

export const EV_DISCOUNT_RATE = 0.08;

export function calculateCO2Saved(vehicleKey, distanceKm) {
  const factor = EV_EMISSION_FACTORS[vehicleKey];
  if (!factor || !distanceKm || distanceKm <= 0) return 0;
  return parseFloat((distanceKm * factor).toFixed(2));
}

export function calculateGreenPoints(co2SavedKg) {
  if (!co2SavedKg || co2SavedKg <= 0) return 0;
  return Math.round(co2SavedKg * 10);
}

export function calculateEvDiscount(baseFare) {
  if (!baseFare || baseFare <= 0) return 0;
  return Math.round(baseFare * EV_DISCOUNT_RATE);
}

export const COMMISSION_RATE = 0.15;
export const EV_COMMISSION_RATE = 0.10;

export function calculateDriverEarnings(fareAmount, isEvDriver = false) {
  const rate = isEvDriver ? EV_COMMISSION_RATE : COMMISSION_RATE;
  const commission = Math.round(fareAmount * rate);
  const earnings = fareAmount - commission;
  return { earnings, commission, commissionRate: rate, commissionPercent: Math.round(rate * 100) };
}

export const SAVE_MODE_WINDOWS = [
  { hours: 4, discount: 0.20, label: '4 Jam', desc: 'Hemat 20%' },
  { hours: 8, discount: 0.25, label: '8 Jam', desc: 'Hemat 25%' },
  { hours: 12, discount: 0.28, label: '12 Jam', desc: 'Hemat 28%' },
  { hours: 24, discount: 0.30, label: '24 Jam', desc: 'Hemat 30%' },
];

export const SAVE_MODE_GREEN_POINTS = 5;

export const DISTANCE_FREE_KM = 10;
export const DISTANCE_PER_KM = 15000;

export function getAutoManpower(weightKg) {
  const w = parseFloat(weightKg);
  if (!w || w <= 0) return 1;
  if (w <= 30) return 1;
  if (w <= 150) return 2;
  if (w <= 300) return 3;
  if (w <= 4000) return 4;
  return 5;
}

export function getSizeTierFromVolume(l, w, h) {
  const length = parseFloat(l);
  const width = parseFloat(w);
  const height = parseFloat(h);
  if (!length || !width || !height) return null;
  const volume = length * width * height;
  const tier = VOLUME_TIERS.find(t => volume <= t.maxVolume);
  return tier ? tier.sizeTier : 'bulky';
}

export function getHigherSizeTier(tier1, tier2) {
  if (!tier1) return tier2;
  if (!tier2) return tier1;
  const order = ['envelope', 'small', 'medium', 'large', 'bulky'];
  return order.indexOf(tier1) >= order.indexOf(tier2) ? tier1 : tier2;
}

export function getSizeTierFromWeight(kg) {
  if (!kg || kg <= 0) return null;
  const w = parseFloat(kg);
  if (isNaN(w)) return null;
  if (w <= 1) return 'envelope';
  if (w <= 5) return 'small';
  if (w <= 20) return 'medium';
  if (w <= 50) return 'large';
  return 'bulky';
}

export function calculateFare({ sizeTier, vehicleMode, urgency = 'standard', addons = {}, distanceKm = 0, basicEquipment = [], basicEquipCount = 0, isEvSelected = false, saveModeDiscount = 0, zoneSurcharge = 0 }) {
  let baseFare;
  if (vehicleMode) {
    const vm = VEHICLE_MODES.find(v => v.key === vehicleMode);
    if (vm && vm.key !== 'special') baseFare = vm.baseFare;
  }
  const tier = SIZE_TIERS.find(t => t.key === sizeTier);
  const urg = URGENCY_MULTIPLIERS[urgency];
  if (baseFare == null) {
    if (!tier || !urg) return null;
    baseFare = tier.baseFare;
  }
  if (!urg) return null;
  const multiplier = urg.multiplier;
  const baseWithUrgency = Math.round(baseFare * multiplier);

  let addonTotal = 0;
  const addonLines = [];
  for (const opt of ADDON_OPTIONS) {
    const qty = addons[opt.key];
    if (qty && qty > 0) {
      const cost = opt.price * qty;
      addonTotal += cost;
      addonLines.push({ ...opt, qty, cost });
    }
  }

  let equipmentTotal = 0;
  if (basicEquipment.length > 0) {
    for (const eq of BASIC_EQUIPMENT) {
      if (basicEquipment.includes(eq.key)) {
        equipmentTotal += eq.price;
        addonLines.push({ key: eq.key, label: eq.price > 0 ? eq.label : `${eq.label} (Gratis)`, qty: 1, cost: eq.price, unit: 'item', price: eq.price });
      }
    }
  } else if (basicEquipCount > 0) {
    equipmentTotal = basicEquipCount * 200000;
    addonLines.push({ key: 'basic_equipment', label: 'Layanan Dasar', qty: basicEquipCount, cost: equipmentTotal, unit: 'item', price: 200000 });
  }

  let distSurcharge = 0;
  if (distanceKm > DISTANCE_FREE_KM) {
    distSurcharge = Math.round((distanceKm - DISTANCE_FREE_KM) * DISTANCE_PER_KM);
  }

  let evDiscount = 0;
  if (isEvSelected && baseFare > 0) {
    evDiscount = calculateEvDiscount(baseFare);
  }

  let saveModeAmount = 0;
  if (saveModeDiscount > 0) {
    saveModeAmount = Math.round((baseWithUrgency + addonTotal + equipmentTotal + distSurcharge) * saveModeDiscount);
  }

  const zs = Math.round(parseFloat(zoneSurcharge) || 0);
  const total = baseWithUrgency + addonTotal + equipmentTotal + distSurcharge + zs - evDiscount - saveModeAmount;
  return {
    baseFare,
    multiplier,
    baseWithUrgency,
    addonLines,
    addonTotal: addonTotal + equipmentTotal,
    distSurcharge,
    zoneSurcharge: zs,
    evDiscount,
    saveModeDiscount: saveModeAmount,
    total,
    budgetMin: Math.round(total * 0.8),
    budgetMax: Math.round(total * 1.5),
  };
}
