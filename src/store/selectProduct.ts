import { atom } from "recoil";
import { CartItemsType } from "../components/cart/hooks/useCart";

export const selectProduct = atom<CartItemsType[]>({
  key: 'selectProduct',
  default: []
})
