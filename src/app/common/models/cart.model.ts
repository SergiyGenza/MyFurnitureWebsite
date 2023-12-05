import { CartItem } from "./cartItem";

export class Cart {
  items: CartItem[] = [];
  totalPrice: number = 0;
  totalItems: number = 0;
}