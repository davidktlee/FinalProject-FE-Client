import { useEffect, useRef, useState } from 'react'
import Button from '../common/Button'
import ReactStars from 'react-rating-stars-component'
import { useAddReview, useUpdateReview } from './hooks/useReview'
import AWS from 'aws-sdk'
const { VITE_AWS_ACCESS_KEY_ID, VITE_SECRET_ACCESS_KEY } = import.meta.env
import { useResetRecoilState, useRecoilState } from 'recoil'
import { selectFileState, updateReviewState } from '../../store/reviewImage'

interface ReviewFormProps {
  onClose: Function
  isModalOpen: boolean
  reviewItem: any
  orderId: number
  memberId: number
  reviewHandleType: string
  reviewInfo?: ReviewInfo
}

interface ReviewInfo {
  orderId: number
  productDetailsId: number
  replyComment: string
  replyCreatedAt: string
  replyId: number
  replyImageUrl: string
  replyRating: number
}

const ReviewForm = ({
  onClose,
  isModalOpen,
  reviewItem,
  orderId,
  memberId,
  reviewHandleType,
  reviewInfo
}: ReviewFormProps) => {
  const [reviewText, setReviewText] = useState(reviewInfo?.replyComment)
  const [rating, setRating] = useState(reviewInfo ? reviewInfo.replyRating : 0)
  const [selectedFile, setSelectedFile] = useState<File | ''>()
  const imageRef = useRef<HTMLInputElement>(null)
  const updateReviewMutate = useUpdateReview()
  const addReviewMutate = useAddReview()
  const [oldReviewInfo, setOldReviewInfo] = useState<ReviewInfo>()
  const [updateReview, setUpdateReview] = useRecoilState(updateReviewState)
  const [selectFile, setSelectFile] = useRecoilState(selectFileState)
  const resetSelectFile = useResetRecoilState(updateReviewState)

  AWS.config.update({
    accessKeyId: VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: VITE_SECRET_ACCESS_KEY,
    region: 'ap-northeast-2'
  })

  useEffect(() => {
    if (reviewInfo) {
      setOldReviewInfo(reviewInfo)
      setReviewText(reviewInfo.replyComment)
      setRating(reviewInfo.replyRating)
    }
  }, [reviewInfo, selectedFile])

  if (!isModalOpen) return <></>

  const ratingChanged = (newRating: number) => {
    oldReviewInfo && setOldReviewInfo({ ...oldReviewInfo, replyRating: newRating })
    setRating(newRating)
  }

  const handleReviewText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(e.target.value)
  }

  const handleImageInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(() => e.target.files![0])
    const file = e.target.files?.[0]
    if (!file) return
    setSelectFile(file)
    const reader = new FileReader()
    reader.onloadend = () => {
      console.log('이미지 읽기 완료')
      setUpdateReview({ ...updateReview, replyImageUrl: reader.result as string })
    }
    reader.readAsDataURL(file as Blob)
  }

  const handleReviewSubmit = async () => {
    console.log('이미지 등록 시도')
    console.log(selectedFile)
    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: 'iko-amazon-s3',
        Key: reviewInfo
          ? `review/${orderId}-${reviewInfo?.productDetailsId}`
          : `review/${orderId}-${reviewItem[0]?.productDetailsId}`,
        Body: selectFile
      }
    })
    const promise = upload.promise()

    promise.then(
      function (data) {
        console.log('이미지 S3 업로드 성공', data)
      },
      function (err) {
        console.error('이미지 S3 업로드 실패', err.message)
      }
    )

    if (reviewHandleType === 'add') {
      addReviewMutate({
        orderId: orderId,
        memberId: memberId,
        productDetailsId: reviewItem[0].productDetailsId,
        rating: rating,
        content: reviewText!,
        replyImageUrl: `https://iko-amazon-s3.s3.ap-northeast-2.amazonaws.com/review/${orderId}-${reviewItem[0]?.productDetailsId}`
      })
    } else {
      updateReviewMutate({
        replyId: oldReviewInfo?.replyId!,
        rating: oldReviewInfo?.replyRating!,
        content: reviewText!,
        imageUrl: reviewInfo
          ? `https://iko-amazon-s3.s3.ap-northeast-2.amazonaws.com/review/${orderId}-${reviewInfo?.productDetailsId}`
          : `https://iko-amazon-s3.s3.ap-northeast-2.amazonaws.com/review/${orderId}-${reviewItem[0]?.productDetailsId}`
      })
    }

    setReviewText('')
    setRating(0)
    setSelectFile('')
    resetSelectFile()
    onClose()
  }

  return (
    <>
      {isModalOpen ? (
        <div>
          <div className="top-[10%] left-[27%] justify-center items-center flex overflow-y-auto fixed xs-max:top-[10%] xs-max:right-[49.3%] z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto">
              <div className="xs-max:w-[350px] xs-max:h-[600px] w-[700px] h-[500px] border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-center pt-[26px] ">
                  <h3 className="text-[22px] font-semibold">
                    {reviewHandleType === 'update' ? '리뷰수정' : '리뷰작성'}
                  </h3>
                </div>
                <div className=" pt-[10px] px-[20px]">
                  <div className="xs-max:gap-[10px] flex gap-[20px] border-solid border-lenssisStroke border-[1px] rounded-[5px]">
                    <div className="py-[15px] px-[14px] xs-max:p-2 ">
                      <label htmlFor="selectImage" className="relative cursor-pointer hover:contrast-[.6]">
                        <img
                          width={120}
                          height={120}
                          // '/assets/errorImage.png'
                          src={
                            updateReview.replyImageUrl ||
                            reviewInfo?.replyImageUrl! ||
                            reviewItem[0]?.productImageUrl ||
                            '/assets/errorImage.png'
                          }
                          alt="error-image"
                        />
                        {!updateReview.replyImageUrl ? (
                          <div className="text-[12px] opacity-0 hover:opacity-100 absolute inset-0 z-10 flex justify-center items-center text-white font-semibold">
                            <span className="text-white px-2 py-1 border-solid border-white border-[2px] rounded-[5px]">
                              사진 첨부하기
                            </span>
                          </div>
                        ) : (
                          <div className="text-[12px] opacity-0 hover:opacity-100 absolute inset-0 z-10 flex justify-center items-center text-white font-semibold">
                            <span className="text-white px-2 py-1 border-solid border-white border-[2px] rounded-[5px]">
                              사진 변경하기
                            </span>
                          </div>
                        )}
                      </label>
                      <input
                        ref={imageRef}
                        onChange={handleImageInput}
                        type="file"
                        name="image"
                        id="selectImage"
                        hidden={true}
                      />
                    </div>
                    <div className="flex flex-col py-[25px] justify-between xs-max:p-2">
                      <div className="xs-max:text-[12px] text-[14px]">{reviewItem[0]?.productName}</div>
                      <div className="">
                        <span className="xs-max:text-[10px] text-[12px] text-lenssisGray">
                          옵션 선택 - 그래픽 직경: {reviewItem[0]?.graphicDiameter}
                        </span>
                        <span className="xs-max:text-[10px] text-[12px] text-lenssisGray">
                          / 도수: {reviewItem[0]?.degree}
                        </span>
                        <span className="xs-max:text-[10px] text-[12px] text-lenssisGray">
                          / 수량: {reviewItem[0]?.pcs}개
                        </span>
                      </div>
                      <div className="xs-max:text-[10px] text-[12px] text-lenssisGray">
                        {reviewItem[0]?.price}円
                      </div>
                      <div className="xs-max:hidden flex gap-[2px]">
                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={24}
                          isHalf={true}
                          emptyIcon={<i className="far fa-star"></i>}
                          halfIcon={<i className="fa fa-star-half-alt"></i>}
                          fullIcon={<i className="fa fa-star"></i>}
                          color="#efefef"
                          activeColor="#ffd700"
                          value={rating}
                        />
                        <div className="ml-2 text-[14px] text-lenssisGray">
                          {((oldReviewInfo?.replyRating! || rating * 10) / 10) * 10}/
                          {(oldReviewInfo?.replyRating! || rating * 10) % 10 === 0 ? 5 : 5}
                        </div>
                      </div>
                      {/* 모바일 버전 별점 */}
                      <div className="xs:hidden flex gap-[2px]">
                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={18}
                          isHalf={true}
                          emptyIcon={<i className="far fa-star"></i>}
                          halfIcon={<i className="fa fa-star-half-alt"></i>}
                          fullIcon={<i className="fa fa-star"></i>}
                          color="#efefef"
                          activeColor="#ffd700"
                          value={rating}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-full mx-auto pb-[20px] px-[20px] pt-[15px]">
                  <textarea
                    placeholder="리뷰를 입력해 주세요. (최소 100자)"
                    value={reviewText}
                    onChange={(e) => handleReviewText(e)}
                    className="xs-max:w-[310px] xs-max:h-[260px] text-[14px] box-border px-[12px] py-[14px] w-[660px] h-[200px] outline-none resize-none rounded-[5px] border-solid border-[1px] border-lenssisStroke"
                  ></textarea>
                </div>
                <div className="xs:hidden flex items-center justify-center gap-[10px]">
                  {/* 모바일 버전 */}
                  <Button onClick={() => onClose()} bgColor="white" width="w-[120px]">
                    <span>취소</span>
                  </Button>
                  <Button onClick={handleReviewSubmit} bgColor="dark" width="w-[120px]">
                    <span>{reviewHandleType === 'update' ? '수정' : '저장'}</span>
                  </Button>
                </div>
                {/* 웹 버전 */}
                <div className="xs-max:hidden flex items-center justify-center gap-[10px]">
                  <Button onClick={() => onClose()} bgColor="white" width="w-[150px]">
                    <span>취소</span>
                  </Button>
                  <Button onClick={handleReviewSubmit} bgColor="dark" width="w-[150px]">
                    <span>{reviewHandleType === 'update' ? '수정' : '저장'}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
    </>
  )
}

export default ReviewForm
