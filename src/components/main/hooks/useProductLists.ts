import axios, { AxiosResponse } from 'axios'
import { useQuery, useQueryClient } from 'react-query'
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
  const res = await axiosInstance({
    url: `https://633010e5591935f3c8893690.mockapi.io/lenssis/api/v1/products?page=${pageNo}&limit=9`
  })
  // const { data }: AxiosResponse<ProductResponseType[]> = await axiosInstance({
  //   url: `/main/product?page=${pageNo}`,
  //   headers: {
  //     ContentType: 'application/json'
  //   }
  // })
  return res.data
}
export const useGetProductsList = (pageNo: number): ProductResponseType[] => {
  const fallback: [] = []
  const { data = fallback } = useQuery([queryKeys.product, pageNo], () => getProductsList(pageNo), {
    keepPreviousData: true
  })
  return data
}

export const usePrefetchProductLists = (currentPage: number, count: number): void => {
  const queryClient = useQueryClient()
  const maxPage = Math.floor(count / 10)
  console.log(maxPage)
  if (maxPage > currentPage) {
    const nextPage = currentPage + 1
    queryClient.prefetchQuery([queryKeys.product, nextPage], () => getProductsList(nextPage))
  }
}
