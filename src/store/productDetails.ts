import { atom } from 'recoil'

export interface ProductDetails {
  period: number
  colorCode?: string
  graphicDiameter?: number
  degree?: number
}

export const productDetailsState = atom<ProductDetails>({
  key: 'productDetailsState',
  default: {
    period: 0,
    colorCode: '',
    graphicDiameter: 0,
    degree: 0
  }
})
