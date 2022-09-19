import axios, { AxiosRequestConfig } from 'axios'
import { RegisterType } from '../auth/types/userTypes'
import { UserDataType } from '../auth/types/userTypes'
import { baseUrl } from './constants'

// user type 기재.
export const getJWTToken = (user: UserDataType): Record<string, any> => {
  return {
    Authorization: `Bearer ${user.token}`,
    withCredentials: false
  }
}

const config: AxiosRequestConfig = { baseURL: baseUrl,withCredentials:true }

export const axiosInstance = axios.create(config)
