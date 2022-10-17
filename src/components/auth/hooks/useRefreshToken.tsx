import { AxiosResponse } from 'axios'
import { UseMutateFunction, useMutation, useQueryClient } from 'react-query'
import { axiosInstance, getNewJWTToken } from '../../axiosinstance'
import { clearStoredToken, setStoredToken } from '../../local-storage/userStorage'
import { queryKeys } from '../../react-query/queryKeys'
import { Token } from '../types/userTypes'

import useToast from '../../common/toast/hooks/useToast'

const getNewToken = async (token: Token | null): Promise<Token | null> => {
  console.log('getNewToken')
  if (!token) return null

  const { expiresIn, accessTokenExpiredDate, refreshTokenExpiredDate } = token
  if (expiresIn + refreshTokenExpiredDate < Date.now()) {
    clearStoredToken()
    return null
  }
  if (expiresIn + accessTokenExpiredDate - 600000 < Date.now()) {
    const { data }: AxiosResponse<Token> = await axiosInstance.put(
      '/member/newAccess',
      {},
      {
        headers: getNewJWTToken(token),
        withCredentials: false
      }
    )
    setStoredToken(data)
    return data
  } else {
    return token
  }
}

export const useRefreshToken = (): UseMutateFunction<Token | null, unknown, Token, unknown> => {
  const queryClient = useQueryClient()
  const { fireToast } = useToast()
  const { mutate } = useMutation((token: Token) => getNewToken(token), {
    onSuccess: (data) => {
      if (!data) return
      setStoredToken(data)
      queryClient.invalidateQueries([queryKeys.token])
    }
  })

  return mutate
}
