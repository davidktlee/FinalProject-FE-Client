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


// axiosRefreshInstance.interceptors.response.use( async (res) => {
//   const token = getStoredToken()
//   if(!token) return res;
//   console.log('getNewToken 실행')
//   console.log(res);
//   if('accessToken' in res.data){
//     const { expiresIn, accessTokenExpiredDate, refreshTokenExpiredDate } = token
//     if (expiresIn + refreshTokenExpiredDate < Date.now()) {
//       // clearStoredToken()
//       return res;
//     }
//     if (expiresIn + accessTokenExpiredDate < Date.now()) {
//       const { data }: AxiosResponse<Token> = await axiosInstance.put('/member/newAccess', {
//         headers: getNewJWTToken(token),
//         withCredentials: false
//       })
//       // setStoredToken(data)
//       console.log('interceptors',data)
//     }
//   }
//   return res;
//   },(err) => {return err})