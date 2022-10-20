import { atom } from 'recoil'

interface ReviewInfo {
  orderId: number
  productDetailsId: number
  replyComment: string
  replyCreatedAt: string
  replyId: number
  replyImageUrl: string
  replyRating: number
}

export const selectFileState = atom<File | ''>({
  key: 'selectedFile',
  default: ''
})

export const updateReviewState = atom<ReviewInfo>({
  key: 'updateReview',
  default: {
    orderId: 0,
    productDetailsId: 0,
    replyComment: '',
    replyCreatedAt: '',
    replyId: 0,
    replyImageUrl: '',
    replyRating: 0
  }
})
