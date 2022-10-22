import { useMutation, useQuery } from 'react-query'
import { axiosInstance, getJWTToken } from '../../axiosinstance'
import { queryKeys } from '../../react-query/queryKeys'
import { getStoredToken } from '../../local-storage/userStorage'
import { ProductDetailsType } from '../../../store/productDetails'

const token = getStoredToken()

// 제품 상세 API
export const getProductDetails = async (memberId: number, productId: number) => {
  const data = await axiosInstance({
    method: 'POST',
    url: `/productDetails/main`,
    params: {
      productId,
      memberId: memberId ? memberId : 0
    },
    headers: getJWTToken(token)
  })
  return data?.data
}

// 제품 상세 사용기간 선택 API
const getProductDetailsPeriod = async (detailsState: ProductDetailsType) => {
  const { data } = await axiosInstance({
    method: 'GET',
    url: '/productDetails/byPeriodOption',
    params: {
      period: detailsState.period,
      productId: detailsState.productId
    },
    headers: token ? getJWTToken(token) : undefined
  })
  return data
}

// 제품 상세 컬러 선택 API
const getProductDetailsColor = async (periodAndColor: any) => {
  const { data } = await axiosInstance({
    method: 'GET',
    url: `/productDetails/byColorCodeOption?period=${periodAndColor.period}&colorCode=${periodAndColor.colorCode}`
  })

  return data
}

// 제품 상세 그래픽 직경 선택 API
const getProductDetailsGraphicDiameter = async (
  period: number,
  colorCode: string,
  graphicDiameter: number,
  degree: number,
  productId: number
) => {
  const { data } = await axiosInstance({
    method: 'POST',
    url: `/productDetails/byGraphicOption?colorCode=${colorCode}&graphicDiameter=${graphicDiameter}&period=${period}`,
    data: {
      period,
      colorCode,
      graphicDiameter,
      degree,
      productId
    }
  })
  return data
}

// 제품 상세 모두 선택 API
const getProductDetailsAll = async (
  period: number,
  colorCode: string,
  graphicDiameter: number,
  degree: number,
  productId: number,
  memberId: number
) => {
  const { data } = await axiosInstance({
    method: 'POST',
    url: `/productDetails/byDetailsOption?memberId=${memberId}`,
    data: {
      period,
      colorCode,
      graphicDiameter,
      degree,
      productId
    }
  })
  return data
}

// 제품 상세 쿼리
export const useProductDetails = (memberId: number, productId: number) => {
  const { data: productDetails } = useQuery(queryKeys.productDetails, () =>
    getProductDetails(memberId, productId)
  )
  return productDetails
}

// 제품 상세 사용기간 선택 쿼리
export const useDetailsPeriodMutate = () => {
  const { mutate: getPeriodMutate } = useMutation(
    (detailsState: ProductDetailsType) => getProductDetailsPeriod(detailsState),
    {
      onSuccess: ({ data }) => {
        console.log(data)
      },
      onError: (error) => {
        console.log(error)
      }
    }
  )
  return getPeriodMutate
}

// 제품 상세 컬러 선택 쿼리
export const useDetailsColorMutate = () => {
  const { mutate: getColorMutate } = useMutation(
    (periodAndColor: any) => getProductDetailsColor(periodAndColor),
    {
      onSuccess: ({ data }) => {
        console.log(data)
      },
      onError: (error) => {
        console.log(error)
      }
    }
  )
  return getColorMutate
}

// 제품 상세 그래픽 직경 선택 쿼리
export const useProductDetailsGraphicDiameter = (
  period: number,
  colorCode: string,
  graphicDiameter: number,
  degree: number,
  productId: number
) => {
  const { data: productDetailsGraphicDiameter } = useQuery(
    [queryKeys.productDetailsGraphic, period, colorCode, graphicDiameter, degree, productId],
    () => getProductDetailsGraphicDiameter(period, colorCode, graphicDiameter, degree, productId),
    {
      enabled: !!period && !!colorCode && !!graphicDiameter && !!degree && !!productId
    }
  )
  return productDetailsGraphicDiameter
}

// 제품 상세 모두 선택 쿼리
export const useProductDetailsAll = (
  period: number,
  colorCode: string,
  graphicDiameter: number,
  degree: number,
  productId: number,
  memberId: number
) => {
  const { data: productDetailsAll } = useQuery(
    [queryKeys.productDetailsAll, period, period, colorCode, graphicDiameter, degree, productId, memberId],
    () => getProductDetailsAll(period, colorCode, graphicDiameter, degree, productId, memberId),
    {
      enabled:
        !!period && !!period && !!colorCode && !!graphicDiameter && !!degree && !!productId && !!memberId
    }
  )
  return productDetailsAll
}
