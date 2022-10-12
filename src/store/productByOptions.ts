import { atom } from 'recoil'

export interface ProductByOptionsType {
  colorCodeList: string[]
  discount: number
  graphicDiameterList: number[]
  isFavorite: number
  mainImageUrl: string
  name: string
  periodList: number[]
  price: number
  productId: number
  series: string
  subMainImageUrlList: string[]
  degreeList: number[]
}

export const productByOptionsState = atom<ProductByOptionsType>({
  key: 'productByOptionsState',
  default: {
    colorCodeList: [],
    discount: 0,
    graphicDiameterList: [],
    isFavorite: 0,
    mainImageUrl: '',
    name: '',
    periodList: [],
    price: 0,
    productId: 0,
    series: '',
    subMainImageUrlList: [],
    degreeList: []
  }
})
