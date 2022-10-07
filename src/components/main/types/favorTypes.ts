import { ColorAndImage } from './productTypes'
export interface FavorResponseType {
  productInfo: {
    productId: number
    productName: string
    price: number
    discount: number
  }
  graphicDiameter: number[]
  ColorAndImage: ColorAndImage
}
