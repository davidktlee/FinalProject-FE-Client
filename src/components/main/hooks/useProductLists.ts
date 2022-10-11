import axios, { AxiosResponse } from 'axios'
import { useQuery, useQueryClient } from 'react-query'
import { axiosInstance } from '../../axiosinstance'
import { queryKeys } from './../../react-query/queryKeys'
import { ProductResponseType } from '../types/productTypes'
import useToast from '../../common/toast/hooks/useToast'

const getProductsList = async (pageNo: number): Promise<ProductResponseType[]> => {
  const {
    data: { data }
  } = await axiosInstance({
    url: `/product/main?page=${pageNo}&memberId=0&size=9`,
    headers: {
      ContentType: 'application/json'
    }
  })
  return data
}

export const useGetProductsList = (pageNo: number): ProductResponseType[] => {
  const { fireToast } = useToast()
  const fallback: [] = []
  const { data = fallback } = useQuery([queryKeys.product, pageNo], () => getProductsList(pageNo), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,

    onError: () => {
      fireToast({
        id: 'getProductFailed',
        message: '상품목록을 가져오는데 실패하였습니다. 다시 시도해주세요.',
        position: 'bottom',
        timer: 2000,
        type: 'failed'
      })
    }
  })
  return data
}

export const usePrefetchProductLists = (currentPage: number, count: number): void => {
  const queryClient = useQueryClient()
  const maxPage = Math.ceil(count / 10)
  if (maxPage > currentPage) {
    const nextPage = currentPage + 1
    queryClient.prefetchQuery([queryKeys.product, nextPage], () => getProductsList(nextPage))
  }
}
