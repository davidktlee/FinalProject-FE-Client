import { AxiosResponse } from 'axios'
import { useQuery, useQueryClient } from 'react-query'
import { axiosInstance } from '../../axiosinstance'
import { queryKeys } from '../../react-query/queryKeys'

export interface EventDetailResponseType {
  eventTitle: number
  description: String
  startTime: Date
  endTime: Date
  imageUrl: String[]
}
export interface InEventMainList {
  eventId: number
  eventTitle: string
  imageUrl: string
}

export interface EventResponseType {
  data: {
    eventMainList: InEventMainList[]
    totalCount: number
  }
  status: number
  message: string
}

export const getEvents = async (): Promise<EventResponseType> => {
  const { data }: AxiosResponse<EventResponseType> = await axiosInstance({
    url: '/event/main',
    headers: {
      ContentType: 'application/json'
    }
  })

  return data
}
export const useGetEvent = () => {
  const { data } = useQuery([queryKeys.allEvent], () => getEvents(), {
    refetchOnWindowFocus: false,
    staleTime: 900000
  })
  return data
}
// export const prefetchEvent = () => {
//   const queryClient = useQueryClient()
//   const maxPage = Math.floor(count / 10)
// }

const detailEvent = async (id: number): Promise<EventDetailResponseType[]> => {
  const { data }: AxiosResponse<EventDetailResponseType[]> = await axiosInstance({
    url: `/event/details?eventId=${id}`
  })
  return data
}
export const useGetDetailEvent = (id: number): EventDetailResponseType[] => {
  const fallback: [] = []
  const { data = fallback } = useQuery([queryKeys.event, id], () => detailEvent(id), {
    refetchOnWindowFocus: false
  })
  return data
}
