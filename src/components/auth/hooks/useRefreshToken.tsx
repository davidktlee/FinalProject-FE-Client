
import { AxiosResponse } from 'axios'
import {  useMutation, useQuery, useQueryClient } from 'react-query'
import { axiosAuthInstance, axiosInstance,  getJWTToken, getNewJWTToken } from '../../axiosinstance'
import {  setStoredToken } from '../../local-storage/userStorage'
import { queryKeys } from '../../react-query/queryKeys'
import { Token } from '../types/userTypes'

import useToast from '../../common/toast/hooks/useToast'

const getNewToken = async (token: Token | null): Promise<Token | null> => {
  if(!token) return null
    const { expiresIn, accessTokenExpiredDate, refreshTokenExpiredDate } = token
    if (expiresIn + refreshTokenExpiredDate < Date.now()) {
      return null;
    }
    if (expiresIn + accessTokenExpiredDate - 600000 < Date.now()) {
      console.log('인터셉터 실행')
      const { data }: AxiosResponse<Token> = await axiosInstance.put('/member/newAccess',{},{
        headers: getNewJWTToken(token),
        withCredentials: false
      })
      setStoredToken(data)
      console.log('interceptors',data)
      return data
    }else{
      return token
    }
  }
 




export const useRefreshToken = () => {
  const queryClient = useQueryClient()
  const { fireToast } = useToast()
  const { mutate } = useMutation((token: Token) => getNewToken(token), {
    onSuccess: (data) => {
      if(!data) return;
      setStoredToken(data)
      
      queryClient.invalidateQueries([queryKeys.token])
    }
  })

  return mutate
}
