import { AxiosResponse } from 'axios'
import { useQuery, useQueryClient } from 'react-query'
import { axiosInstance, getJWTToken } from '../../axiosinstance'
import { getStoredToken } from '../../local-storage/userStorage'
import { queryKeys } from '../../react-query/queryKeys'
import { Token } from '../types/userTypes'

import { User, userState } from '../../../store/user'
import { useRecoilState } from 'recoil'

const getUser = async (token: Token | null): Promise<User | null> => {
  if (!token) return null

  const { data }: AxiosResponse<User> = await axiosInstance.get('/member/info', {
    headers: getJWTToken(token)
  })
  return data
}

interface UseUser {
  user: User | null | undefined
  updateUser: (user: Token) => void
  clearUser: () => void
  isLoading: boolean
}

export const useUser = (): UseUser => {
  const [currentUser, setCurrentUser] = useRecoilState(userState)
  const queryClient = useQueryClient()
  const token = getStoredToken()

  const {
    data: user,
    isLoading,
    isError
  } = useQuery([queryKeys.user], () => getUser(token), {
    onSuccess: (received: User | null) => {
      if (received) {
        setCurrentUser(received)
        return received
      } else {
      }
    },
    onError: () => console.log('queryError'),
    refetchOnWindowFocus: false
  })

  const updateUser = (newToken: Token): void => {
    queryClient.fetchQuery([queryKeys.user], () => getUser(newToken))
  }

  const clearUser = () => {
    queryClient.removeQueries([queryKeys.user, queryKeys.token])
  }

  return {
    user,
    updateUser,
    clearUser,
    isLoading
  }
}
