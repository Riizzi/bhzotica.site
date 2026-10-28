export const WA_NUMBER = '553133245968';
export const PHONE_DISPLAY = '(31) 3324-5968';
export const ADDRESS_L1 = 'Street Shopping Planalto';
export const ADDRESS_L2 = 'Av. Dr. Cristiano Guimarães, 1691 – Planalto';
export const ADDRESS_L3 = 'Belo Horizonte – MG, 31730-300';
export const MAPS_QUERY = 'BHZ Óptica, Av. Dr. Cristiano Guimarães, 1691 - Planalto, Belo Horizonte - MG, 31730-300';
export const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(MAPS_QUERY);
export const WAZE_URL = 'https://waze.com/ul?q=' + encodeURIComponent('Av. Dr. Cristiano Guimarães, 1691, Belo Horizonte') + '&navigate=yes';
export const MAPS_EMBED = 'https://maps.google.com/maps?q=' + encodeURIComponent(MAPS_QUERY) + '&z=16&output=embed';
export const wa = (msg = 'Olá! Vim pelo site e gostaria de fazer um orçamento.') =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
