import axios, { AxiosResponse } from 'axios'
import { useQuery, useQueryClient } from 'react-query'
import { axiosInstance, getJWTToken } from '../../axiosinstance'
import { queryKeys } from './../../react-query/queryKeys'
import { ProductResponseType } from '../types/productTypes'
import { getStoredToken } from '../../local-storage/userStorage'
import { useUser } from '../../auth/hooks/useUser'
const token = getStoredToken()
import useToast from '../../common/toast/hooks/useToast'
import { useSetRecoilState } from 'recoil'
import { ProductCount } from '../../../store/product'

export const getProductsList = async (pageNo: number, memberId: number): Promise<ProductResponseType[]> => {
  const {
    data: { data }
  } = await axiosInstance({
    url: `/product/main?page=${pageNo}&memberId=${memberId}&size=9`,
    // url: 'https://633010e5591935f3c8893690.mockapi.io/lenssis/api/v1/products',
    headers: memberId === 0 ? undefined : getJWTToken(token)
  })
  return data
}

const getProductRandom = async (memberId: number, productId: number) => {
  const {
    data: { data }
  } = await axiosInstance({
    method: 'GET',
    url: `/productDetails/forRandom`,
    params: {
      memberId: memberId ? memberId : 0,
      productId
    },
    headers: getJWTToken(token)
  })

  return data
}

export const useGetProductsList = (pageNo: number, memberId: number) => {
  const { fireToast } = useToast()
  const fallback: [] = []
  const {
    data = fallback,
    isFetching,
    isLoading
  } = useQuery([queryKeys.product, pageNo, memberId], () => getProductsList(pageNo, memberId), {
    refetchOnWindowFocus: false,

    onError: (data) => {
      fireToast({
        id: 'getProductFailed',
        message: '상품목록을 가져오는데 실패하였습니다. 다시 시도해주세요.',
        position: 'bottom',
        timer: 2000,
        type: 'failed'
      })
      console.log(data)
    }
  })

  return { data, isFetching, isLoading }
}

export const usePrefetchProductLists = (currentPage: number, count: number, memberId: number) => {
  const queryClient = useQueryClient()
  const maxPage = Math.ceil(count / 10)
  if (maxPage > currentPage) {
    const nextPage = currentPage + 1
    queryClient.prefetchQuery([queryKeys.product, nextPage, memberId], () =>
      getProductsList(nextPage, memberId)
    )
  }
}

const getNewProduct = async (memberId: number) => {
  const {
    data: { data }
  } = await axiosInstance({
    url: `/product/newProduct?memberId=${memberId}`,
    // url: 'https://633010e5591935f3c8893690.mockapi.io/lenssis/api/v1/products',
    headers: memberId === 0 ? undefined : getJWTToken(token)
  })
  console.log(data)
  return data
}
export const useGetNewProduct = (memberId: number) => {
  const fallback: [] = []
  const { data = fallback, isFetching } = useQuery([queryKeys.newProduct], () => getNewProduct(memberId), {
    refetchOnWindowFocus: false
  })
  return { data, isFetching }
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
  return data
}
