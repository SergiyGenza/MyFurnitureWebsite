import { Product } from "./product.model";

export class CartItem {
  quantity!: number;
  product!: Product;
}

export interface CartItemForDelete {
  state: boolean;
  cartItem: CartItem;
}