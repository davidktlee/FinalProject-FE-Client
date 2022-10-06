export interface ColorAndImage {
  colorCode: string
  imageUrl: string
}
export interface ProductResponseType {
  productId: number // 상품 id
  series: string // 상품 이름
  colorAndImage: ColorAndImage[] // 상품 이미지와 상품 색상
  graphicDiameter: number[] // 그래픽 직경
  price: number // 상품 가격
  discount: number // 할인률
}

export interface CardContainerPropsType {
  data: Data
  allProductCurrentPage?: number
  newProductCurrentPage?: number
  allProductCount?: number
  newProductCount?: number
}
type Data = 'Best' | 'New'
