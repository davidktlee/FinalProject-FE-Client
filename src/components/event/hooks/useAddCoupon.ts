import { useMutation } from 'react-query'
import useToast from '../../common/toast/hooks/useToast'
import { getStoredToken } from '../../local-storage/userStorage'
import { queryKeys } from '../../react-query/queryKeys'
import { axiosInstance, getJWTToken } from './../../axiosinstance/index'

const addCoupon = async (couponId: number) => {
  const token = getStoredToken()
  const res = await axiosInstance({
    url: '/coupon/add',
    headers: getJWTToken(token),
    data: {
      couponId
    }
  })

  return res
}

export const useAddCoupon = () => {
  const { fireToast } = useToast()
  const { mutate: addCouponMutate } = useMutation((couponId: number) => addCoupon(couponId), {
    onSuccess: () => {
      fireToast({
        id: 'addCouponSuccess',
        message: '쿠폰이 발급 되었습니다',
        position: 'bottom',
        timer: 2000,
        type: 'success'
      })
    },
    onError: () => {
      fireToast({
        id: 'addCouponFailed',
        message: '쿠폰 발급에 실패하였습니다. 다시 시도해주세요',
        position: 'bottom',
        timer: 2000,
        type: 'failed'
      })
    }
  })
  return addCouponMutate
}
