import { AxiosResponse } from 'axios';
import { useQuery, useQueryClient } from 'react-query';
import { axiosInstance, getJWTToken } from '../../axiosinstance';
import { clearStoredToken, getStoredToken, setStoredToken } from '../../local-storage/userStorage';
import { queryKeys } from '../../react-query/queryKeys';
import { UserDataType } from '../types/userTypes';
import {queryClient} from '../../react-query/queryClient'
import { useRecoilState, useRecoilValue } from 'recoil';
import { User, userState } from '../../../store/user';


const getUser = async (user:UserDataType | null, signal:AbortSignal | undefined): Promise<UserDataType | null> => {
    if(!user) return null;
    const { data }: AxiosResponse<UserDataType> = await axiosInstance.get(
      `/member/info`,{
        headers: getJWTToken(user),
        signal,
        withCredentials:false
      },
    );
      return data
  }

interface UseUser {
  
  updateUser: (user:UserDataType) => void;
  clearUser: () => void;
}

export const useUser = () : UseUser => {
  const [currentUser,setCurrentUser] = useRecoilState(userState)
  const queryclient = useQueryClient()
  // @ts-ignored
  const {data : user } = useQuery(queryKeys.user, ({signal}) => getUser(user,signal), {
    initialData: getStoredToken(),
    onSuccess: (received: User | null) => {
      if(!received) {
        clearStoredToken()
      }else {
        setCurrentUser(received)
      }
    }
  })

  const updateUser = (newUser:UserDataType):void => {
    // get new token
    queryclient.fetchQuery(queryKeys.user,({signal}) => getUser(newUser,signal))
  }

  const clearUser = () => {
    queryClient.setQueryData(queryKeys.user, null);
  }

    return {
      
      updateUser,
      clearUser
    }
};

