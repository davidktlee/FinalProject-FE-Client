import axios, { AxiosRequestConfig } from "axios";
import { RegisterType } from "../auth/hooks/useAuth";
import { UserDataType } from "../auth/hooks/useUser";
import {baseUrl} from './constants'

// user type 기재.
export const getJWTToken = (user:UserDataType): Record<string,string> => {
  return { 
    Authorization: `Bearer ${user.token}`
  };
}

const config: AxiosRequestConfig = { baseURL: baseUrl }

export const axiosInstance = axios.create(config);

