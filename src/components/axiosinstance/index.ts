import axios, { AxiosRequestConfig } from 'axios'
import { RegisterType } from '../auth/types/userTypes'
import { Token } from '../auth/types/userTypes'
import { baseUrl } from './constants'

// user type 기재.
export const getJWTToken = (token: Token): Record<string, any> => {
  return {
    'X-ACCESS-TOKEN': token.accessToken
  }
}

const config: AxiosRequestConfig = { baseURL: baseUrl,withCredentials:false }

export const axiosInstance = axios.create(config)
