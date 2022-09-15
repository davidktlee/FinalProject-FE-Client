import { AxiosResponse } from 'axios';
import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { axiosInstance, getJWTToken } from '../../axiosinstance';
import { clearStoredUser, getStoredUser, setStoredUser } from '../../local-storage/userStorage';
import { queryKeys } from '../../react-query/queryKeys';
import { UserDataType } from '../types/userTypes';






//유저 정보를 보내서 토큰을 추출한 뒤에 보내고 유저 정보를 가져오기 <GET 요청>
const fetchUser = async (user:UserDataType | null) => {
    if(!user) return;
    const { data }: AxiosResponse<{user: UserDataType}> = await axiosInstance.get(
      `/signin`,{
        headers: getJWTToken(user)
      }
    );
    
      return data.user
}

interface UseUser {
  // user: UserDataType | null;
  updateUser: (user:UserDataType) => void;
  clearUser: () => void;
}

export const useUser = () : UseUser => {
const queryClient = useQueryClient();
// const {data: user} = useQuery(queryKeys.user, () => fetchUser(user),
//   {
//     initialData:getStoredUser()
//   })

const updateUser = (newUser:UserDataType):void => {
  queryClient.setQueriesData(queryKeys.user, newUser)
}

const clearUser = () => {
  queryClient.setQueriesData(queryKeys.user, null);
}

  return {
    // user,
    updateUser,
    clearUser
  }
};

