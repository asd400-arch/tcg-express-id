export const LOCALES = {
  id: {
    currency: 'IDR',
    currencySymbol: 'Rp',
    phonePrefix: '+62',
    timezone: 'Asia/Jakarta',
    utcOffset: '+07:00',
    language: 'id',
    country: 'Indonesia',
    addressFormat: 'id',
    payment: ['gopay', 'ovo', 'dana', 'transfer'],
    areaLabel: 'Kelurahan / Kecamatan',
    mapCenter: { lat: -2.5, lng: 118.0 },
    mapZoom: 5,
  },
};

export const DEFAULT_LOCALE = 'id';

export function getLocaleConfig(locale) {
  return LOCALES[locale] ?? LOCALES[DEFAULT_LOCALE];
}

export function formatCurrency(amount, locale) {
  return 'Rp ' + Math.round(amount).toLocaleString('id-ID');
}

export function formatPhone(phone, locale) {
  const stripped = phone.replace(/^\+\d{1,3}/, '').replace(/^0/, '');
  return '+62' + stripped;
}
