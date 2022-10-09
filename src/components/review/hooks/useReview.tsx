import { useMutation, useQuery, useQueryClient } from 'react-query'
import { axiosInstance, getJWTToken } from '../../axiosinstance'
import useToast from '../../common/toast/hooks/useToast'
import { getStoredToken } from '../../local-storage/userStorage'
import { ReviewInfo } from '../../main/types/reviewInfoTypes'
import { queryKeys } from '../../react-query/queryKeys'

const token = getStoredToken()

const getReviewItems = async () => {
  const { data } = await axiosInstance.get('/reply/myReply')
  console.log(data)
  return data
}

const addReviewItems = async (reviewInfo: ReviewInfo) => {
  const data = await axiosInstance({
    url: '/reply/add',
    method: 'POST',
    headers: getJWTToken(token),
    data: {
      content: reviewInfo.content,
      productDetailsId: reviewInfo.productDetailsId | 12,
      memberId: reviewInfo.memberId || 39,
      rating: reviewInfo.rating,
      replyImageUrl: reviewInfo.replyImageUrl,
      orderId: reviewInfo.orderId || 1123123
    }
  })
  console.log(data)
  return data
}

export const useReview = () => {
  const { data: reviewItems } = useQuery(queryKeys.review, () => getReviewItems(), {})
  console.log(reviewItems)
  return { reviewItems }
}

export const useAddReview = () => {
  const queryClient = useQueryClient()
  const { fireToast } = useToast()
  const { mutate: addReviewMutate } = useMutation((reviewInfo: ReviewInfo) => addReviewItems(reviewInfo), {
    onSuccess: () => {
      console.log('리뷰 등록 성공')
      fireToast({
        id: 'addReviewCompleted',
        message: '리뷰가 등록되었습니다.',
        type: 'complete',
        position: 'top',
        timer: 2000
      })
      queryClient.invalidateQueries(queryKeys.review)
    },
    onError: () => {
      console.log('리뷰 등록 실패')
      fireToast({
        id: 'addReviewFailed',
        message: '리뷰 등록에 실패하였습니다.',
        type: 'failed',
        position: 'top',
        timer: 2000
      })
    }
  })
  return addReviewMutate
}
