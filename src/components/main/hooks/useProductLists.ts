import axios, { AxiosResponse } from 'axios'
import { useQuery, useQueryClient } from 'react-query'
import { axiosInstance } from '../../axiosinstance'
import { queryKeys } from './../../react-query/queryKeys'
import { ProductResponseType } from '../types/productTypes'

const getProductsList = async (pageNo: number): Promise<ProductResponseType[]> => {
  const {
    data: { data }
  } = await axiosInstance({
<<<<<<< HEAD
    url: `/main/product?page=${pageNo}&memberId=0&size=9`,
    // url: '/main/product?page=1&memberId=0&size=9',
=======
    url: `/product/main?page=${pageNo}`,
>>>>>>> 3f482fbdd3dad233b5d21df4ead3a726a781ad01
    headers: {
      ContentType: 'application/json'
    }
  })
  return data
}

export const useGetProductsList = (pageNo: number): ProductResponseType[] => {
  const fallback: [] = []
  const { data = fallback } = useQuery([queryKeys.product, pageNo], () => getProductsList(pageNo), {
    keepPreviousData: true,
    refetchOnWindowFocus: false
  })
  console.log(data)
  return data
}

export const usePrefetchProductLists = (currentPage: number, count: number): void => {
  const queryClient = useQueryClient()
  const maxPage = Math.floor(count / 10)
  if (maxPage > currentPage) {
    const nextPage = currentPage + 1
    queryClient.prefetchQuery([queryKeys.product, nextPage], () => getProductsList(nextPage))
  }
}
