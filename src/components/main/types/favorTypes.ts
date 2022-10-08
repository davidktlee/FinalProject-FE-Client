import { ColorAndImage } from './productTypes'
export interface FavorResponseType {
  colorAndImageInfo: ColorAndImage[]
  favorCreatedAt: string
  graphicDiameter: number[]
  period: number[]
  productInfo: {
    productId: number
    productName: string
    price: number
    discount: number
  }
}
