import { useQuery } from 'react-query'
import { axiosInstance } from '../../axiosinstance'
import { ProductDetailResponseType } from '../../main/types/productTypes'
import { queryKeys } from '../../react-query/queryKeys'
import { Pagination } from 'swiper'

// 제품 상세 API
const getProductDetails = async (memberId: number, productId: number) => {
  const { data } = await axiosInstance({
    method: 'POST',
    url: `/productDetails/main?productId=${productId}&memberId=${memberId}`
  })
  return data?.data
}

// 제품 상세 사용기간 선택 API
const getProductDetailsPeriod = async (period: number) => {
  const { data } = await axiosInstance({
    method: 'GET',
    url: `/productDetails/byPeriodOption?period=${period}`
  })
  console.log(data)
  return data
}

// 제품 상세 컬러 선택 API

const getProductDetailsColor = async (period: number, colorCode: string) => {
  const { data } = await axiosInstance({
    method: 'GET',
    url: `/productDetails/byColorCodeOption?period=${period}&colorCode=${colorCode}`
  })
  console.log(data)
  return data
}

// 제품 상세 그래픽 직경 선택 API
const getProductDetailsGraphicDiameter = async (
  period: number,
  colorCode: string,
  graphicDiameter: number
) => {
  const { data } = await axiosInstance({
    method: 'GET',
    url: `/productDetails/byGraphicOption?period=${period}&colorCode=${colorCode}&graphicDiameter=${graphicDiameter}`
  })
  console.log(data)
  return data
}

export const useProductDetails = (memberId: number, productId: number) => {
  const { data: productDetails } = useQuery(
    [queryKeys.productDetails, productId],
    () => getProductDetails(memberId, productId),
    {
      enabled: !!productId
    }
  )
  return productDetails
}
