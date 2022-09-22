import axios, { AxiosResponse } from 'axios'
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from '../../axiosinstance'
import useToast from '../../common/toast/hooks/useToast'
import { setStoredToken } from '../../local-storage/userStorage'

import { RegisterType, SigninType, Token } from '../types/userTypes'
import {  useUser } from './useUser'



type AuthEndpoint = 'member/login' | 'member/signup'

type ErrorResponse = { message: string }
type AuthResponseType = Token | ErrorResponse

interface UseAuth {
  signin: (user: SigninType) => Promise<void>,
  signup: (newUser: RegisterType) => Promise<void>
  signout:() => void
}

export const useAuth = ():UseAuth => {
  const { clearUser, updateUser } = useUser()
  const {fireToast} = useToast()
  const navigate = useNavigate()

  /** 회원가입 함수 */
  const authSignUp = async (urlEndpoint: AuthEndpoint, userData: RegisterType): Promise<void> => {
    try {
      const { data, status }: AxiosResponse<AuthResponseType> = await axiosInstance({
        url: urlEndpoint,
        method: 'POST',
        data: userData,
        headers: { "Content-Type":"application/json" },
        withCredentials:false
      })
      if (status >= 400) {
        const title = 'message' in data ? data.message : '회원가입에 실패하였습니다.'
        fireToast({
          id:'인증 실패',
          message:title,
          position:'bottom',
          timer:2000,
          type:'failed'
        })
        return
      }else{
        fireToast({
          id:'회원가입 성공',
          message:'가입하신 이메일로 로그인 해주세요!',
          position: 'bottom',
          timer:5000,
          type:'success'
        })
        navigate('/signin')
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

  /** 로그인 함수. localStorage에 토큰 전달 */
  const authSignin = async (urlEndpoint: AuthEndpoint, userData: SigninType): Promise<void> => {
    try {
      const { data, status }: AxiosResponse<AuthResponseType> = await axiosInstance({
        url: urlEndpoint,
        method: 'POST',
        data: userData,
        headers: {
          ContentType: 'application/json',
         },
        withCredentials:false
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
      if ('accessToken' in data) {
        // 토큰
        updateUser(data)
        setStoredToken(data)
        navigate('/')
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
