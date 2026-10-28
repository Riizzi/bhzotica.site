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

export type PageKey = 'inicio' | 'colecao' | 'guia' | 'atendimento';
export const PAGES: { key: PageKey; href: string; label: string; icon: 'home' | 'glasses' | 'book' | 'store' }[] = [
  { key: 'inicio', href: '/', label: 'Início', icon: 'home' },
  { key: 'colecao', href: '/colecao', label: 'Coleção', icon: 'glasses' },
  { key: 'guia', href: '/guia', label: 'Guia', icon: 'book' },
  { key: 'atendimento', href: '/atendimento', label: 'Atendimento', icon: 'store' },
];

export const COLECAO = [
  { img: 'sol-2', brand: 'Ray-Ban', desc: 'Aviador metálico, lente G-15', alt: 'Óculos aviador Ray-Ban preto com lente G-15 sobre estojo de couro' },
  { img: 'sol-1', brand: 'Ray-Ban', desc: 'Quadrado fosco, lente degradê', alt: 'Óculos de sol Ray-Ban quadrado preto fosco com lente degradê' },
  { img: 'sol-4', brand: 'Ray-Ban', desc: 'Clássico, lente degradê', alt: 'Óculos de sol Ray-Ban preto com lente degradê e hastes metálicas' },
  { img: 'sol-3', brand: 'Ray-Ban', desc: 'Retangular, hastes em azul', alt: 'Óculos de sol Ray-Ban preto com hastes azuis' },
];
