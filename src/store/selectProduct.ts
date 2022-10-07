import { atom } from "recoil";
import { CartItemsType } from "../components/cart/hooks/useCart";

export const selectProduct = atom<CartItemsType[]>({
  key: 'selectProduct',
  default: []
})

export const totalPriceState = atom<number>({
  key:'totalPrice',
  default:0
})

export const shippingFeeState = atom<number>({
  key:'ShippingFeeState',
  default:500
})