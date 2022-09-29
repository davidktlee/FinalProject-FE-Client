import { ProductResponseType } from '../hooks/useProductLists'

export interface CardPropsType {
  productId: string // 상품 id
  idx: number
  name: string // 상품 타이틀
  diameter: number
  series: string[] // 상품 시리즈
  details: {
    graphicDiameter: number[]
    price: number // 상품 가격
    discount: number // 할인률
    product_details_image_url: string[] // 상품 이미지
    color_code?: string[] // 색상 코드
  }
  isNew?: boolean // 새로운 상품 여부
}

export interface Item {
  productId: string // 상품 id
  name: string // 상품 타이틀
  diameter: number
  series?: string[] // 상품 시리즈
  details: {
    graphicDiameter: number[]
    price: number // 상품 가격
    discount: number // 할인률
    product_details_image_url: string[] // 상품 이미지
    color_code?: string[] // 색상 코드
  }
  isNew?: boolean // 새로운 상품 여부
}

export interface CardContainerPropsType {
  data: Data
  productLists: [] | ProductResponseType[]
  allProductCurrentPage?: number
  newProductCurrentPage?: number
  allProductCount?: number
  newProductCount?: number
}
type Data = 'Best' | 'New'
