import axios, { AxiosRequestConfig } from "axios";
import {baseUrl} from './constants'

// user type 기재.
export const getJWTToken = (user:any): Record<string,string> => {
  return { 
    Authorization: `Bearer ${user.token}`
  };
}

const config: AxiosRequestConfig = { baseURL: baseUrl }

export const axiosInstance = axios.create(config);

