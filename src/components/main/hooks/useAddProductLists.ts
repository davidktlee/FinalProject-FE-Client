import { axiosInstance } from '../../axiosinstance'
import { getStoredToken } from '../../local-storage/userStorage'
import { getJWTToken } from './../../axiosinstance/index'

const token = getStoredToken()
export const addCart = async (id: number) => {
  await axiosInstance({
    url: `/cart/add`,
    method: 'POST',
    headers: getJWTToken(token),
    data: {
      productDetailsId: id
    }
  })
}

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
