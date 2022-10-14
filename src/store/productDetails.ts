import { atom } from 'recoil'

export interface ProductDetailsType {
  period: number
  colorCode?: string
  graphicDiameter?: number
  degree?: number
  productId: number
}

export const productDetailsState = atom<ProductDetailsType>({
  key: 'productDetailsState',
  default: {
    productId: 0,
    period: 0,
    colorCode: '',
    graphicDiameter: 0,
    degree: 0
  }
})
