import { AxiosResponse } from 'axios'
import { useQuery } from 'react-query'
import { axiosInstance } from '../../axiosinstance'
import { queryKeys } from './../../react-query/queryKeys'

interface ResponseType {
  productId: 'number'
  title: 'string'
  series: 'string'
  price: 'number'
  productImg: 'string[]'
  isLiked: 'boolean'
  discount: 'number'
  descriptionImg: 'string'
  details: {
    diameter: 'string'
    duration: 'string'
    moisture: 'string'
    ingredient: 'string'
    blockUV?: 'string' | null
    popular?: 'string' | null
    recommend?: 'string' | null
  }
}

const getProductsList = async (selectOption: string) => {
  const { data }: AxiosResponse<ResponseType[]> = await axiosInstance({
    url: `/product/${selectOption}`,
    headers: {
      ContentType: 'application/json'
    }
  })
  return data
}
export const useGetProductsList = (selectOption: string): ResponseType[] => {
  const fallback: [] = []
  const { data = fallback } = useQuery(queryKeys.product /* 키 바꿔야함 */, () =>
    getProductsList(selectOption)
  )
  return data
}
