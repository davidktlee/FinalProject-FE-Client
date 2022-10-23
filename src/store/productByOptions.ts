import { atom } from 'recoil'
import { CartItemsType } from '../components/cart/hooks/useCart'

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
  degreeAndStockList?: object[]
}

export interface FinalProduct {
  color: string
  detailsPrice: number
  discount: number
  imageUrlList: {
    imageType: number
    imageUrl: string
  }[]
  isFavorite: number
  productDetailsId: number
  productName: string
  // 바로구매시에만 필요한 값
  pcs: number
  degree?: number
  graphicDiameter?: number
  name?: string
  period?: number
  stock?: number
  colorCode?: string
  imageUrl?: string
  price?: number
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

export const finalProductState = atom<FinalProduct>({
  key: 'finalProduct',
  default: {
    color: '',
    detailsPrice: 0,
    discount: 0,
    imageUrlList: [],
    isFavorite: 0,
    productDetailsId: 0,
    productName: '',
    // 바로구매시에만 사용
    pcs: 1,
    colorCode: '',
    imageUrl: '',
    price: 0
    // degree: 0,
    // graphicDiameter: 0,
    // name: '',
    // period: 0,
    // stock: 0
  }
})
