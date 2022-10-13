export interface BoardMainList {
  boardId: number
  boardTitle: string
  boardType: number
}
export interface NoticeResponse {
  totalCount: number
  boardMainList: BoardMainList[]
}

export interface ReturnType {
  data: NoticeResponse | undefined
  isFetching: boolean
}
