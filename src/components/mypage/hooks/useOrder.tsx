import { useQuery } from 'react-query'
import { axiosInstance, getJWTToken } from '../../axiosinstance'
import { getStoredToken } from '../../local-storage/userStorage'

export const getOrder = async (email: string, memberId: number) => {
  const token = getStoredToken()
  const { data } = await axiosInstance({
    url: '/order/info',
    method: 'POST',
    headers: getJWTToken(token),
    data: {
      email,
      memberId
    }
  })
  return data.data
}

export const useOrderList = (email: string, memberId: number) => {
  const { data: orderList } = useQuery('orderList', () => getOrder(email, memberId), {
    enabled: !!email && !!memberId
  })
  return { orderList }
}
