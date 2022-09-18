import axios, { AxiosResponse } from 'axios'
import { axiosInstance } from '../../axiosinstance'
import useToast from '../../common/toast/hooks/useToast'
import { getRandomId } from '../../common/util/randomId'
import { RegisterType, UserDataType } from '../types/userTypes'
import {  useUser } from './useUser'

enum RequestType {
  signUp = 'signup',
  signIn = 'signIn'
}

type UserResponse = { user: UserDataType }
type ErrorResponse = { message: string }
type AuthResponseType = UserResponse | ErrorResponse


export const useAuth = () => {
  const { clearUser, updateUser } = useUser()

  const authServerCall = async (urlEndpoint: RequestType, userData: Partial<RegisterType>): Promise<void> => {
    try {
      const { data, status }: AxiosResponse<AuthResponseType> = await axiosInstance({
        url: urlEndpoint,
        method: 'POST',
        data: userData,
        headers: { ContentType: 'application/json' }
      })
      if (status === 400) {
        const title = 'message' in data ? data.message : '인증되지 않았습니다.'
        // 토스트 작성 필요
        return
      }
      if ('user' in data && 'token' in data.user) {
        // userdata 사용 로직 작성
        updateUser(data.user)
      }
    } catch (errorResponse) {
      const title =
        axios.isAxiosError(errorResponse) && errorResponse?.message
          ? errorResponse.message
          : '서버에서 에러가 발생했습니다.'
      // 토스트 작성 필요
      return
    }
  }
  const signin = async (email: string, password: string) => {
    const userObj = {
      email,
      password
    }
    authServerCall(RequestType.signIn, userObj)
  }

  const signup = async (newUser: RegisterType) => {
    authServerCall(RequestType.signUp, newUser)
  }

  const signout = () => {
    clearUser()
  }

  return {
    signin,
    signout,
    signup
  }
}
