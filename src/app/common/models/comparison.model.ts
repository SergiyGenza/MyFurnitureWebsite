import { Product } from "./product.model";

export class Comparison {
  products: ComparisonItem[] = [];
  compareArr: Product[] = [];
}

export interface ComparisonItem {
  item: Product,
  compare: boolean,
}