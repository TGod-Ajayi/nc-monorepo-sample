// Shared by apps/api and apps/web: one menu, one way to show a price.
export const MENU = [
  { item: 'Jollof rice', kobo: 350000 },
  { item: 'Suya (per stick)', kobo: 150000 },
  { item: 'Puff-puff (x6)', kobo: 80000 },
  { item: 'Zobo (50cl)', kobo: 60000 },
];

const naira = new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 });

/** 350000 kobo -> "₦3,500" */
export const formatNaira = (kobo) => naira.format(kobo / 100);

export const menuWithPrices = () => MENU.map((m) => ({ ...m, price: formatNaira(m.kobo) }));
