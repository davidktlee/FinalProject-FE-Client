export interface ReviewInfo {
  content: string
  memberId: number
  orderId: number
  productDetailsId: number
  rating: number
  replyImageUrl: string
  replyId?: number
}

export interface ReviewUpdateInfo {
  content: string
  imageUrl: string
  rating: number
  replyId: number
}
