export interface ColorAndImage {
  color: string
  colorCode: string
  imageUrl: string
}
export interface ProductResponseType {
  productId: number // 상품 id
  series: string // 상품 이름
  colorAndImage: ColorAndImage[] // 상품 이미지와 상품 색상
  colorAndImageInfo?: ColorAndImage[] // 상품 이미지와 상품 색상
  graphicDiameter: number[] // 그래픽 직경
  price: number // 상품 가격
  discount: number // 할인률
  isFavorite?: number
  totalCount: number
}

export interface ProductPropsType {
  productId: number // 상품 id
  series: string // 상품 이름
  colorAndImage: ColorAndImage[] // 상품 이미지와 상품 색상
  colorAndImageInfo?: ColorAndImage[] // 상품 이미지와 상품 색상
  graphicDiameter: number[] // 그래픽 직경
  price: number // 상품 가격
  discount: number // 할인률
  isFavorite?: number
}

export interface ProductDetailResponseType {
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
}

export interface CardContainerPropsType {
  data: Data
  allProductCurrentPage?: number
  newProductCurrentPage?: number
  allProductCount?: number
  newProductCount?: number
}
type Data = 'Best' | 'New'
