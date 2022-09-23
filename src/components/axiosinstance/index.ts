import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { RegisterType } from '../auth/types/userTypes'
import { Token } from '../auth/types/userTypes'

import { clearStoredToken, getStoredToken, setStoredToken } from '../local-storage/userStorage'
import { baseUrl } from './constants'

// user type 기재.
export const getJWTToken = (token: Token): Record<string, any> => {
  return {
    'X-ACCESS-TOKEN': token.accessToken
  }
}

export const getNewJWTToken = (token:Token): Record<string,any> => {
  return {
    'X-ACCESS-TOKEN': token.accessToken,
    'X-REFRESH-TOKEN': token.refreshToken
  }
}


const config: AxiosRequestConfig = { baseURL: baseUrl,withCredentials:false }

export const axiosInstance = axios.create(config)
export const axiosAuthInstance = axios.create(config)

axiosAuthInstance.interceptors.response.use( async (res) => {
  const token = getStoredToken()
  if(!token) return res;
  
  
  if('accessToken' in res.data){
    
    const { expiresIn, accessTokenExpiredDate, refreshTokenExpiredDate } = token
    if (expiresIn + refreshTokenExpiredDate < Date.now()) {
      
      return res;
    }
    if (expiresIn + accessTokenExpiredDate - 15000 < Date.now()) {
      console.log('인터셉터 실행')
      const { data }: AxiosResponse<Token> = await axiosInstance.put('/member/newAccess',{},{
        headers: getNewJWTToken(token),
        withCredentials: false
      })
      setStoredToken(data)
      console.log('interceptors',data)
    }
  }
  return res;
  },(err) => {return err})