import { useQuery } from 'react-query'
import { axiosInstance } from '../../axiosinstance'
import { ProductResponseType } from '../../main/types/productTypes'
import { queryKeys } from '../../react-query/queryKeys'

const getProductDetails = async (memberId: string, productId: string): Promise<ProductResponseType[]> => {
  const { data } = await axiosInstance.post(
    `/productDetails/main?productId=${productId}&memberId=${memberId}`
  )
  console.log(data)
  return data
}

// export const useProductDetails = () => {
//   const { data: productDetails } = useQuery([queryKeys.productDetails], getProductDetails, {
//     refetchOnWindowFocus: false
//   })
//   console.log(productDetails)
//   return productDetails
// }
