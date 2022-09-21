import { AxiosResponse } from 'axios';
import { useQuery, useQueryClient } from 'react-query';
import { axiosInstance, getJWTToken } from '../../axiosinstance';
import { clearStoredUser, getStoredUser, setStoredUser } from '../../local-storage/userStorage';
import { queryKeys } from '../../react-query/queryKeys';
import { UserDataType } from '../types/userTypes';
import {queryClient} from '../../react-query/queryClient'


const getUser = async (user:UserDataType | null, signal:AbortSignal | undefined): Promise<UserDataType | null> => {
    if(!user) return null;
    const { data }: AxiosResponse<UserDataType> = await axiosInstance.get(
      `/member/newaccess`,{
        headers: getJWTToken(user),
        signal,
        withCredentials:false
      },
      
    );
      return data
  }

interface UseUser {
  user: UserDataType | null;
  updateUser: (user:UserDataType) => void;
  clearUser: () => void;
}

export const useUser = () : UseUser => {

  const queryclient = useQueryClient()
  // @ts-ignored
  const {data : user } = useQuery(queryKeys.user, ({signal}) => getUser(user,signal), {
    initialData: getStoredUser(),
    onSuccess: (received: UserDataType | null) => {
      if(!received) {
        clearStoredUser()
      }else {
        setStoredUser(received);
      }
    }
  })

  const updateUser = (newUser:UserDataType):void => {
    // get new token
    queryclient.setQueryData(queryKeys.user,newUser)
  }

  const clearUser = () => {
    queryClient.setQueryData(queryKeys.user, null);
  }

    return {
      user,
      updateUser,
      clearUser
    }
};

