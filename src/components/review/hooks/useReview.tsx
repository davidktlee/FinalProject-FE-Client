import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useSetRecoilState } from 'recoil'
import { selectedNameState } from '../../../store/review'
import { axiosInstance, getJWTToken } from '../../axiosinstance'
import useToast from '../../common/toast/hooks/useToast'
import { getStoredToken } from '../../local-storage/userStorage'
import { ReviewInfo } from '../../main/types/reviewInfoTypes'
import { queryKeys } from '../../react-query/queryKeys'

const token = getStoredToken()

const getReviewItems = async () => {
  const data = await axiosInstance({
    url: '/reply/myReply',
    method: 'GET',
    headers: getJWTToken(token)
  })
  return data.data.data
}

const getAllReview = async (productId: number) => {
  const data = await axiosInstance({
    url: '/reply/inProductDetails',
    method: 'GET',
    params: {
      page: 1,
      productId: productId,
      size: 10
    }
  })
  return data
}

const getForProudctId = async () => {
  const data = await axiosInstance({
    url: '/reply/forProductId',
    method: 'GET'
  })
  return data
}

const addReviewItems = async (reviewInfo: ReviewInfo) => {
  const data = await axiosInstance({
    url: '/reply/add',
    method: 'POST',
    headers: getJWTToken(token),
    data: {
      content: reviewInfo.content,
      productDetailsId: reviewInfo.productDetailsId,
      memberId: reviewInfo.memberId,
      rating: reviewInfo.rating,
      replyImageUrl: reviewInfo.replyImageUrl,
      orderId: reviewInfo.orderId
    }
  })
  return data
}

const updateReviewItems = async (reviewInfo: ReviewInfo) => {
  const data = await axiosInstance({
    url: '/reply/update',
    method: 'PUT',
    headers: getJWTToken(token),
    data: {
      content: reviewInfo.content,
      rating: reviewInfo.rating,
      replyImageUrl: reviewInfo.replyImageUrl,
      replyId: reviewInfo.replyId
    }
  })
  console.log(data)
  return data
}

const getReviewByName = async (productName: string) => {
  const data = await axiosInstance({
    url: '/reply/replyListByName',
    method: 'GET',
    headers: getJWTToken(token),
    params: {
      page: 1,
      productName,
      size: 10
    }
  })
  return data
}

export const useReview = () => {
  const { data: reviewItems } = useQuery(queryKeys.review, () => getReviewItems(), {})
  return { reviewItems }
}

export const useGetAllreview = (productId: number) => {
  const { data: allReview } = useQuery(queryKeys.allReview, () => getAllReview(productId), {
    enabled: !!productId
  })
  return { allReview }
}

export const useGetReviewByName = () => {
  const setSelectedName = useSetRecoilState(selectedNameState)
  const { data: reviews, mutate: GetReviewByNameMutate } = useMutation(
    (productName: string) => getReviewByName(productName),
    {
      onSuccess: (reviews) => {
        setSelectedName(reviews.data.data)
        console.log('성공')
      },
      onError: (error) => {
        console.log('review를 불러오지 못했습니다!')
      }
    }
  )
  return { reviews, GetReviewByNameMutate }
}

export const useGetForProductId = () => {
  const { data: forProductId } = useQuery(queryKeys.forProductId, () => getForProudctId(), {
    refetchOnWindowFocus: false
  })
  return { forProductId }
}

export const useAddReview = () => {
  const queryClient = useQueryClient()
  const { fireToast } = useToast()
  const { mutate: addReviewMutate } = useMutation((reviewInfo: ReviewInfo) => addReviewItems(reviewInfo), {
    onError: () => {
      console.log('리뷰 등록 실패')
      fireToast({
        id: 'addReviewFailed',
        message: '리뷰 등록에 실패하였습니다.',
        type: 'failed',
        position: 'top',
        timer: 2000
      })
    },
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
    }
  })
  return addReviewMutate
}

export const useUpdateReview = () => {
  const queryClient = useQueryClient()
  const { fireToast } = useToast()
  const { mutate: updateReviewMutate } = useMutation((reviewInfo: ReviewInfo) => addReviewItems(reviewInfo), {
    onError: () => {
      console.log('리뷰 수정 실패')
      fireToast({
        id: 'updateReviewFailed',
        message: '리뷰 수정에 실패하였습니다.',
        type: 'failed',
        position: 'top',
        timer: 2000
      })
    },
    onSuccess: () => {
      console.log('리뷰 수정 성공')
      fireToast({
        id: 'updateReviewCompleted',
        message: '리뷰가 수정되었습니다.',
        type: 'complete',
        position: 'top',
        timer: 2000
      })
      queryClient.invalidateQueries(queryKeys.review)
    }
  })
  return updateReviewMutate
}
