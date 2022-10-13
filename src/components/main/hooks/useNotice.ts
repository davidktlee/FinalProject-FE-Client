import { AxiosResponse } from 'axios'
import { axiosInstance } from './../../axiosinstance/index'
import { useQuery, useQueryClient } from 'react-query'
import { queryKeys } from '../../react-query/queryKeys'
import useToast from '../../common/toast/hooks/useToast'
import { NoticeResponse, ReturnType } from '../types/noticeTypes'

const getAllNotice = async (type: number): Promise<NoticeResponse> => {
  const {
    data: { data }
  } = await axiosInstance({
    url: `/board/main?type=${type}`
  })
  return data
}

export const useGetAllNotice = (type: number): ReturnType => {
  const { fireToast } = useToast()
  const { data, isFetching } = useQuery(queryKeys.allNotice, () => getAllNotice(type), {
    refetchOnWindowFocus: false,
    onError: () => {
      fireToast({
        id: 'getNoticeFailed',
        message: '공지사항을 가져오는데 실패했습니다. 다시 시도해주세요.',
        position: 'bottom',
        timer: 2000,
        type: 'failed'
      })
    }
  })
  return { data, isFetching }
}

const getDetailNotice = async (id: number) => {
  const { data } = await axiosInstance({ url: `/board/details?boardId=${id}` })
  return data
}

export const useGetDetailNotice = (id: number) => {
  const { fireToast } = useToast()
  const { data, isFetching } = useQuery([queryKeys.noticeDetail, id], () => getDetailNotice(id), {
    refetchOnWindowFocus: false,
    onError: () => {
      fireToast({
        id: 'getNoticeDetailFailed',
        message: '공지사항을 가져오는데 실패했습니다. 다시 시도해주세요.',
        position: 'bottom',
        timer: 2000,
        type: 'failed'
      })
    }
  })
  return { data, isFetching }
}
