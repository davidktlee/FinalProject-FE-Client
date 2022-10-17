import { useMutation, useQueryClient } from 'react-query'
import { axiosInstance, getJWTToken } from '../../axiosinstance'
import useToast from '../../common/toast/hooks/useToast'
import { getStoredToken } from '../../local-storage/userStorage'
import { queryKeys } from '../../react-query/queryKeys'

const fetchDeleteCart = async (cartId: number) => {
  const token = getStoredToken()
  await axiosInstance.post(
    '/cart/delete',
    {
      cartId
    },
    {
      headers: getJWTToken(token)
    }
  )
}

const useDeleteCart = () => {
  const { fireToast } = useToast()
  const queryClient = useQueryClient()
  const {
    mutate: deleteCart,
    error,
    isLoading
  } = useMutation(fetchDeleteCart, {
    onSuccess: () => {
      fireToast({
        id: 'cartDeleteComplete',
        message: '삭제되었습니다.',
        position: 'bottom',
        timer: 2000,
        type: 'complete'
      })
    },
    onError: () => {
      fireToast({
        id: 'cartDeleteFailed',
        message: '상품 삭제에 실패하였습니다. 다시 시도해주세요.',
        position: 'bottom',
        timer: 2000,
        type: 'failed'
      })
    },
    onSettled: () => {
      queryClient.invalidateQueries(queryKeys.cart)
    }
  })

  return { deleteCart, error, isLoading }
}

export default useDeleteCart
