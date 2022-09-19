import axios, { AxiosResponse } from 'axios'
import { axiosInstance } from '../../axiosinstance'
import useToast from '../../common/toast/hooks/useToast'

import { RegisterType, SigninType, UserDataType } from '../types/userTypes'
import {  useUser } from './useUser'



type AuthEndpoint = 'member/login' | 'member/signup'

type ErrorResponse = { message: string }
type AuthResponseType = UserDataType | ErrorResponse

interface UseAuth {
  signin: (user: SigninType) => Promise<void>,
  signup: (newUser: RegisterType) => Promise<void>
  signout:() => void
}

export const useAuth = ():UseAuth => {
  const { clearUser, updateUser } = useUser()
  const {fireToast} = useToast()

  const authSignUp = async (urlEndpoint: AuthEndpoint, userData: RegisterType): Promise<void> => {
    try {
      const { data, status }: AxiosResponse<AuthResponseType> = await axiosInstance({
        url: urlEndpoint,
        method: 'POST',
        data: userData,
        headers: { ContentType: 'application/json' }
      })
      if (status === 400) {
        const title = 'message' in data ? data.message : '인증되지 않았습니다.'
        fireToast({
          id:'인증 실패',
          message:title,
          position:'bottom',
          timer:2000,
          type:'failed'
        })
        return
      }

    } catch (errorResponse) {
      const title =
        axios.isAxiosError(errorResponse) && errorResponse?.message
          ? errorResponse.message
          : '서버에서 에러가 발생했습니다.'
      fireToast({
        id:'서버 에러',
        message: title,
        position: 'top',
        timer:2000,
        type:'failed'
      })
    }
  }

  const authSignin = async (urlEndpoint: AuthEndpoint, userData: SigninType): Promise<void> => {
    try {
      const { data, status }: AxiosResponse<AuthResponseType> = await axiosInstance({
        url: urlEndpoint,
        method: 'POST',
        data: userData,
        headers: { ContentType: 'application/json' }
      })
      if (status === 400) {
        const title = 'message' in data ? data.message : '인증되지 않았습니다.'
        fireToast({
          id:'인증 실패',
          message:title,
          position:'bottom',
          timer:2000,
          type:'failed'
        })
        return
      }
      if ('token' in data) {
        // 토큰
        updateUser(data)
      }
    } catch (errorResponse) {
      const title =
        axios.isAxiosError(errorResponse) && errorResponse?.message
          ? errorResponse.message
          : '서버에서 에러가 발생했습니다.'
      fireToast({
        id:'서버 에러',
        message: title,
        position: 'top',
        timer:2000,
        type:'failed'
      })
    }
  }


  const signup = async (newUser: RegisterType) => {
    authSignUp('member/signup', newUser)
  }

  const signin = async (user:SigninType) => {  
    authSignin('member/login', user)
  }

  const signout = () => {
    clearUser()
    fireToast({
      id:'logged out',
      message:'로그아웃 되었습니다!',
      position: 'bottom',
      timer: 2000,
      type: 'complete'
    })
  }

  return {
    signin,
    signout,
    signup
  }
}
