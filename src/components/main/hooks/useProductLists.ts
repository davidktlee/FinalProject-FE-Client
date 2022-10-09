import axios, { AxiosResponse } from 'axios'
import { useQuery, useQueryClient } from 'react-query'
import { axiosInstance, getJWTToken } from '../../axiosinstance'
import { queryKeys } from './../../react-query/queryKeys'
import { ProductResponseType } from '../types/productTypes'
import { getStoredToken } from '../../local-storage/userStorage'

const token = getStoredToken()

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

const getProductRandom = async (memberId: number, productId: number) => {
  const {
    data: { data }
  } = await axiosInstance({
    method: 'GET',
    url: `/productDetails/forRandom?memberId=${memberId}&productId=${productId}`,
    headers: getJWTToken(token)
  })

  return data
}

export const useGetProductsList = (pageNo: number): ProductResponseType[] => {
  const fallback: [] = []
  const { data = fallback } = useQuery([queryKeys.product, pageNo], () => getProductsList(pageNo), {
    keepPreviousData: true,
    refetchOnWindowFocus: false
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

export const useGetProductRandom = (memberId: number, productId: number) => {
  const fallback: [] = []
  const { data = fallback } = useQuery(
    [queryKeys.product, 'random'],
    () => getProductRandom(memberId, productId),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false
    }
  )
  console.log(data)
  return data
}
