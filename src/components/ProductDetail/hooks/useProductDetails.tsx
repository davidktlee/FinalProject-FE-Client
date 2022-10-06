import { useQuery } from 'react-query'
import { axiosInstance } from '../../axiosinstance'
import { queryKeys } from '../../react-query/queryKeys'

const getProductDetails = async () => {
  const { data } = await axiosInstance.post('/productDetails/main?productId=1&memberId=0')
  console.log(data)
  return data
}

export const useProductDetails = () => {
  const { data: productDetails } = useQuery([queryKeys.productDetails], getProductDetails, {
    refetchOnWindowFocus: false
  })
  console.log(productDetails)
  return productDetails
}
