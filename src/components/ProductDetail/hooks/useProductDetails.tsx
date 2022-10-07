import { useQuery } from 'react-query'
import { axiosInstance } from '../../axiosinstance'
import { ProductDetailResponseType } from '../../main/types/productTypes'
import { queryKeys } from '../../react-query/queryKeys'
import { Pagination } from 'swiper'

const getProductDetails = async (memberId: number, productId: number) => {
  const { data } = await axiosInstance({
    method: 'POST',
    url: `/productDetails/main?productId=${productId}&memberId=${memberId}`
  })
  console.log(data)
  return data?.data
}

export const useProductDetails = (memberId: number, productId: number) => {
  const { data: productDetails } = useQuery(
    [queryKeys.productDetails],
    () => getProductDetails(memberId, productId),
    {
      refetchOnWindowFocus: false
    }
  )
  return productDetails
}
