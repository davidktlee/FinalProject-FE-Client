import { axiosInstance } from '../../axiosinstance'
import { getStoredToken } from '../../local-storage/userStorage'
import { getJWTToken } from '../../axiosinstance/index'
import { useQueryClient, useMutation, useQuery } from 'react-query'
import useToast from '../../common/toast/hooks/useToast'
import { FavorResponseType } from '../types/favorTypes'
import { queryKeys } from '../../react-query/queryKeys'

const token = getStoredToken()

// export const getFilterList = async () => {
//   const data = await axiosInstance({
//     url: '/product/filter/',
//     method: 'GET'
//     // headers: getJWTToken(token)
//   })
//   console.log(data)
//   return data
// }

// export const useGetFilterList = () => {
//   const data = useQuery(queryKeys.filterList, getFilterList, {
//     onSuccess: (data) => {
//       console.log('filter list를 성공적으로 불러왔습니다.')
//     },
//     onError: (err) => {
//       console.log(err)
//     }
//   })
//   return data
// }
