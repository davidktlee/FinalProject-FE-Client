export interface BoardMainList {
  boardId: number
  boardTitle: string
  boardType: number
  createdAt: string
}
export interface NoticeResponse {
  totalCount: number
  boardMainList: BoardMainList[]
}

export interface ReturnType {
  data: NoticeResponse | undefined
  isFetching: boolean
}

export interface NoticeDetailResponse {
  boardTitle: string
  createdAt: string
  description: string
}
