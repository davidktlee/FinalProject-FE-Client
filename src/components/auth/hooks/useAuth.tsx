import axios, { AxiosResponse } from 'axios'
import { axiosInstance } from '../../axiosinstance'



enum RequestType {
  signUp = 'signup',
  signIn = 'signIn'
}

type UserResponse = { user: Record<string, string> }
type ErrorResponse = { message: string }
type AuthResponseType = UserResponse | ErrorResponse
interface userDataType {

}
interface RegisterType {
  name: string;
  address: string;
  basicAddress: string;
  detailAddress: string;
  phone: string;
  email:string;
  birthday:string;
  password:string;
  
}
export const useAuth = () => {
  const authServerCall = async (urlEndpoint: RequestType, userData:Partial<RegisterType>): Promise<void> => {
    try {
      
      if(urlEndpoint === RequestType.signIn){
        const { data, status }: AxiosResponse<AuthResponseType> = await axiosInstance({
          url: urlEndpoint,
          method: 'POST',
          data: userData,
          headers: { ContentType: 'application/json' }
        })
        if (status === 400) {
          const title = 'message' in data ? data.message : '인증되지 않았습니다.'
          // title 사용 로직 작성
          return
        }
        if ('user' in data && 'token' in data.user) {
          // userdata 사용 로직 작성
        }
      }
      if(urlEndpoint === RequestType.signUp){
        const {data,status}: AxiosResponse<AuthResponseType> = await axiosInstance({
          url: urlEndpoint,
          method: 'POST',
          data: userData,
          headers: {
            ContentType: 'application/json'
          }
        })
        if (status === 400) {
          const title = 'message' in data ? data.message : '인증되지 않았습니다.'
          // title 사용 로직 작성
          return
        }
        if ('user' in data && 'token' in data.user) {
          // userdata 사용 로직 작성
        }
      }
      
    } catch (errorResponse) {
      const title =
        axios.isAxiosError(errorResponse) && errorResponse?.response?.data
          ? errorResponse.response.data
          : '서버에서 에러가 발생했습니다.'
      // title 사용 로직 작성
    }
  }
  const signin = async (email: string, password: string) => {
    const userObj = {
      email,
      password
    }
    authServerCall(RequestType.signIn, userObj )
  }

  const signup = async (newUser: RegisterType) => {
    authServerCall(RequestType.signUp,newUser)
  }

  const signout = () => {}

  return {
    signin,
    signout,
    signup
  }
}
