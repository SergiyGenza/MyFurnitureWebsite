export interface Product {
  key?: string;
  img: string;
  code: string;
  title: string;
  type: string;
  price: string;
  rate: number;
  description: any;
  sizes: Array<Size> | undefined;
  colors: Array<Color> | undefined;
  productDetails: any;
}

interface Size {
  s: string;
}

interface Color {
  c: string;
}

interface ProductDetails {
  general: Array<any>
  product: Array<any>
  dimensions: Array<any>
  warranty: Array<any>
}