import { AxiosResponse } from 'axios';
import { useIsFetching, useQuery, useQueryClient } from 'react-query';
import { axiosInstance, getJWTToken } from '../../axiosinstance';
import { clearStoredToken, getStoredToken, setStoredToken } from '../../local-storage/userStorage';
import { queryKeys } from '../../react-query/queryKeys';
import { Token } from '../types/userTypes';
// import {queryClient} from '../../react-query/queryClient'

import { User, userState } from '../../../store/user';
import { useRecoilState } from 'recoil';
import { useState } from 'react';

// 토큰을 통해 유저 정보를 받아오는 getUser가 signIn보다 빠르게 진행되면서 생기는 문제같음..
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
    console.log('user있음');
    console.log(data);
      return data
  }

interface UseUser {
  user: User | null | undefined
  updateUser: (user:Token) => void;
  clearUser: () => void;
  isFetching: number;
}

export const useUser = () : UseUser => {
  const [currentUser,setCurrentUser] = useRecoilState(userState)
  const queryClient = useQueryClient()
  const token = getStoredToken()
  const isFetching = useIsFetching()
  const [userNumber,setUserNumber] = useState(0)
  const {data : user } = useQuery([queryKeys.user,token.expiresIn], () => getUser(token), {
    onSuccess: (received: User | null) => {
      if(received){
        setCurrentUser(received)
        return received
      }
    },
    onError: () => console.log('queryError'),
    
  }
  )

  const updateUser = (newToken:Token):void => {
    queryClient.invalidateQueries([queryKeys.user])
    queryClient.fetchQuery(queryKeys.token,() => getUser(newToken))
  }

  const clearUser = () => {
    queryClient.setQueryData(queryKeys.user, null);
    queryClient.removeQueries([queryKeys.user,queryKeys.token])
  }

    return {
      user,
      updateUser,
      clearUser,
      isFetching
    }
};

