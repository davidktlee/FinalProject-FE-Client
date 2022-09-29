import { AxiosResponse } from 'axios'
import { useQuery } from 'react-query'
import { axiosInstance } from '../../axiosinstance'
import { queryKeys } from './../../react-query/queryKeys'

export interface ProductResponseType {
  productId: string // 상품 id
  idx: number
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

const getProductsList = async (pageNo: number) => {
  const { data }: AxiosResponse<ProductResponseType[]> = await axiosInstance({
    url: `/main/product?page=${pageNo}`,
    headers: {
      ContentType: 'application/json'
    }
  })
  return data
}
export const useGetProductsList = (pageNo: number): ProductResponseType[] => {
  const fallback: [] = []
  const { data = fallback } = useQuery(queryKeys.product /* 키 바꿔야함 */, () => getProductsList(pageNo))
  return data
}
