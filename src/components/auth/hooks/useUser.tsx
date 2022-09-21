import { AxiosResponse } from 'axios';
import { useQuery, useQueryClient } from 'react-query';
import { axiosInstance, getJWTToken } from '../../axiosinstance';
import { clearStoredToken, getStoredToken, setStoredToken } from '../../local-storage/userStorage';
import { queryKeys } from '../../react-query/queryKeys';
import { Token } from '../types/userTypes';
// import {queryClient} from '../../react-query/queryClient'

import { User, userState } from '../../../store/user';


const getUser = async (token:Token | null): Promise<User | null> => {
    if(!token) {
      console.log('user없음')
      return null
    }
    const { data }: AxiosResponse<User> = await axiosInstance.get(
      '/member/info',{
        headers: getJWTToken(token),
        withCredentials:false
      },
    );
      return data
  }

interface UseUser {
  user: User | null | undefined
  updateUser: (user:Token) => void;
  clearUser: () => void;
}

export const useUser = () : UseUser => {
  
  const queryClient = useQueryClient()
  const token = getStoredToken()
  
  const {data : user } = useQuery(queryKeys.user, () => getUser(token), {
    onSuccess: (received: User | null) => {
      return received
    },
    onError: () => console.log('queryError')
  })

  const updateUser = (newToken:Token):void => {
    // get new token
    
    queryClient.fetchQuery(queryKeys.token,() => getUser(newToken))
  }

  const clearUser = () => {
    queryClient.setQueryData(queryKeys.user, null);
    queryClient.removeQueries([queryKeys.user,queryKeys.token])
  }

    return {
      user,
      updateUser,
      clearUser
    }
};

