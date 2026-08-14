export interface Talles {
  id: string;
  nombre: string;
  medidas: {
    contornoCm: number;
    cinturaCm?: number;
    largoCm?: number;
    mangaCm?: number;
  };
}

export const talles: Talles[] = [
  { id: 'XS', nombre: 'XS', medidas: { contornoCm: 94, largoCm: 64, mangaCm: 31 } },
  { id: 'S', nombre: 'S', medidas: { contornoCm: 100, largoCm: 67, mangaCm: 32.5 } },
  { id: 'M', nombre: 'M', medidas: { contornoCm: 106, largoCm: 70, mangaCm: 34 } },
  { id: 'L', nombre: 'L', medidas: { contornoCm: 112, largoCm: 73, mangaCm: 35 } },
  { id: 'XL', nombre: 'XL', medidas: { contornoCm: 118, largoCm: 76, mangaCm: 37 } },
];

export default talles;
