export interface Product {
  img: string;
  code: string;
  title: string;
  type: string;
  price: string;
  rate: number;
  description: string;
  sizes: Array<Size>;
  colors: Array<Color>;
}

export interface Size {
  s: string;
}

export interface Color {
  c: string;
}