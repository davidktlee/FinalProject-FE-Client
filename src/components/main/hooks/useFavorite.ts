import { axiosInstance } from '../../axiosinstance'
import { getStoredToken } from '../../local-storage/userStorage'
import { getJWTToken } from '../../axiosinstance/index'
import { useMutation } from 'react-query'
import useToast from '../../common/toast/hooks/useToast'
const token = getStoredToken()

export const addFavorite = async (id: number) => {
  await axiosInstance({
    url: '/favor/add',
    method: 'POST',
    headers: getJWTToken(token),
    data: {
      productId: id
    }
  })
}

export const deleteFavorite = async (id: number) => {
  const res = await axiosInstance({
    url: '/favor/delete',
    method: 'POST',
    headers: getJWTToken(token),
    data: {
      productId: id
    }
  })
}

export const useDeleteFavorite = () => {
  const { fireToast } = useToast()
  const { mutate: deleteFavor } = useMutation(deleteFavorite, {
    onSuccess: () => {
      fireToast({
        id: 'favorDeleteComplete',
        message: '삭제되었습니다.',
        position: 'bottom',
        timer: 2000,
        type: 'complete'
      })
    },
    onError: () => {
      fireToast({
        id: 'favorDeleteFailed',
        message: '삭제에 실패하였습니다. 다시 시도해주세요.',
        position: 'bottom',
        timer: 2000,
        type: 'failed'
      })
    }
  })
  return deleteFavor
}
