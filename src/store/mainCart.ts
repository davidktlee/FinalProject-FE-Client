import { atom } from 'recoil'
import { ProductDetailResponseType } from '../components/main/types/productTypes'

export const MainCartModalState = atom<boolean>({
  key: 'mainCartModalState',
  default: false
})

export const MainCartFavoriteId = atom<[] | number[]>({
  key: 'mainCartFavoriteId',
  default: []
})

export const ItemDetail = atom<ProductDetailResponseType>({
  key: 'itemDetail',
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
    subMainImageUrlList: []
  }
})
