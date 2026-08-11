export interface Talles {
  id: string;
  nombre: string;
  medidas: {
    pechoCm: number;
    cinturaCm?: number;
    largoCm?: number;
  };
}

export const talles: Talles[] = [
  { id: 'XS', nombre: 'XS', medidas: { pechoCm: 82, cinturaCm: 66, largoCm: 62 } },
  { id: 'S', nombre: 'S', medidas: { pechoCm: 88, cinturaCm: 72, largoCm: 64 } },
  { id: 'M', nombre: 'M', medidas: { pechoCm: 96, cinturaCm: 78, largoCm: 66 } },
  { id: 'L', nombre: 'L', medidas: { pechoCm: 104, cinturaCm: 86, largoCm: 68 } },
  { id: 'XL', nombre: 'XL', medidas: { pechoCm: 112, cinturaCm: 94, largoCm: 70 } },
];

export default talles;
