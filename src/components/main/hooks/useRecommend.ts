import { AxiosResponse } from 'axios'
import { useQuery } from 'react-query'
import { axiosInstance } from '../../axiosinstance'
import useToast from '../../common/toast/hooks/useToast'
import { queryKeys } from '../../react-query/queryKeys'

export interface RecommendResponse {
  discount: number
  imageUrl: string
  name: string
  price: number
}

export const getRecommendProduct = async (): Promise<RecommendResponse[]> => {
  const res = await axiosInstance({ url: '/product/recommend' })
  return res.data.data
}

export const useGetRecommendProduct = () => {
  const { fireToast } = useToast()
  const fallback: [] = []
  const { data = fallback, isFetching } = useQuery(queryKeys.recommend, getRecommendProduct, {
    refetchOnWindowFocus: false,
    onError: () => {
      fireToast({
        id: 'recommendProductFailed',
        message: '추천 상품을 불러오는데 실패하였습니다. 다시 시도해주세요',
        position: 'bottom',
        timer: 2000,
        type: 'failed'
      })
    }
  })
  return { data, isFetching }
}
