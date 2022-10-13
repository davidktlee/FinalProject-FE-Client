export interface EventDetailResponseType {
  eventTitle: number
  description: string
  startTime: string
  endTime: string
  imageUrl: string
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
export interface EventReturnType {
  data: EventResponseType | undefined
  isFetching: boolean
}
export interface EventDetailReturnType {
  data: EventDetailResponseType[] | undefined
  isFetching: boolean
}