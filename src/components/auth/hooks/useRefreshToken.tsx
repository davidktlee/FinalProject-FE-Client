
import { AxiosResponse } from 'axios'
import {  useMutation, useQuery, useQueryClient } from 'react-query'
import { axiosInstance,  getJWTToken, getNewJWTToken } from '../../axiosinstance'
import {  setStoredToken } from '../../local-storage/userStorage'
import { queryKeys } from '../../react-query/queryKeys'
import { Token } from '../types/userTypes'

import useToast from '../../common/toast/hooks/useToast'

const getNewToken = async (token: Token | null): Promise<Token | null> => {
  const currentTime = Date.now();
  if (!token) return null
  console.log('리프레시 이전 토큰',token?.accessToken);
  
  // const { expiresIn, accessTokenExpiredDate, refreshTokenExpiredDate } = token  
    const { data }: AxiosResponse<any> = await axiosInstance.put('/member/newAccess',{},
    {
      headers: getNewJWTToken(token),
    })
    setStoredToken(data)
    console.log(data);
    return data
  }
    




export const useRefreshToken = () => {
  const queryClient = useQueryClient()
  const { fireToast } = useToast()
  const { mutate } = useMutation((token: Token) => getNewToken(token), {
    onSuccess: (data) => {
      if(!data) return;
      setStoredToken(data)
      console.log('onSuccess',data)
      queryClient.invalidateQueries([queryKeys.token])
    }
  })

  return mutate
}
