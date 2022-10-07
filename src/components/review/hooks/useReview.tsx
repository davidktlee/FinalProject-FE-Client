import { useQuery } from 'react-query'
import { axiosInstance } from '../../axiosinstance'
import { queryKeys } from '../../react-query/queryKeys'

const getReview = async () => {
  const res = await axiosInstance.get('/review')
}
