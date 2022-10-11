import { AxiosResponse } from 'axios'
import { axiosInstance } from './../../axiosinstance/index'
import { useQuery } from 'react-query'
import { queryKeys } from '../../react-query/queryKeys'
import useToast from '../../common/toast/hooks/useToast'

export interface NoticeResponseType {
  id: string
  title: string
  type: string
  text?: string
  author?: string
  clickedCount?: number
}

const getAllNotice = async (): Promise<NoticeResponseType[]> => {
  const { data }: AxiosResponse<NoticeResponseType[]> = await axiosInstance({ url: '/notice' })
  return data
}

export const useGetAllNotice = () => {
  const { fireToast } = useToast()
  const fallback: [] = []
  const { data = fallback } = useQuery(queryKeys.allNotice, getAllNotice, {
    refetchOnWindowFocus: false,
    onError: () => {
      fireToast({
        id: 'getNotiveFailed',
        message: '공지사항을 가져오는데 실패했습니다. 다시 시도해주세요.',
        position: 'bottom',
        timer: 2000,
        type: 'failed'
      })
    }
  })
  return data
}
