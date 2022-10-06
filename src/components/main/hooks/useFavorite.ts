import { axiosInstance } from '../../axiosinstance'
import { getStoredToken } from '../../local-storage/userStorage'
import { getJWTToken } from '../../axiosinstance/index'
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
  await axiosInstance({
    url: '/favor/delete',
    method: 'POST',
    headers: getJWTToken(token),
    data: {
      productId: id
    }
  })
}
