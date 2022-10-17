import { useRef, useState } from 'react'
import Button from '../common/Button'
import ReactStars from 'react-rating-stars-component'
import { useAddReview } from './hooks/useReview'
// import ReactS3Client from 'react-aws-s3-typescript'
import { s3Config } from './config/s3Config'

interface ReviewFormProps {
  onClose: Function
  isModalOpen: boolean
  reviewItem: any
  orderId: number
  memberId: number
}

const ReviewForm = ({ onClose, isModalOpen, reviewItem, orderId, memberId }: ReviewFormProps) => {
  const [reviewText, setReviewText] = useState('')
  const [rating, setRating] = useState(0)
  const [selectedFile, setSelectedFile] = useState<File | ''>()
  const [previewImage, setPreviewImage] = useState<string>()
  const imageRef = useRef<HTMLInputElement>(null)

  console.log(previewImage)
  console.log(reviewItem)
  const addReviewMutate = useAddReview()

  if (!isModalOpen) return <></>

  const ratingChanged = (newRating: number) => {
    setRating(newRating)
  }

  const handleReviewText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(e.target.value)
  }

  const handleImageInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) {
      setSelectedFile('')
    }
    setSelectedFile(file)
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreviewImage(reader.result as string)
    }
    reader.readAsDataURL(file as Blob)
  }

  const handleReviewSubmit = async () => {
    var { reactS3Client } = require('react-aws-s3-typescript')

    const result = await reactS3Client.uploadFile(
      selectedFile as File,
      `${reviewItem.orderId}-${reviewItem.productDetailsId}`
    )
    console.log(result)

    if (!selectedFile) return

    const reviewInfo = {
      content: reviewText,
      productDetailsId: reviewItem[0].productDetailsId,
      orderId,
      memberId,
      rating: rating,
      replyImageUrl: result.location
    }

    addReviewMutate(reviewInfo)

    setReviewText('')
    setRating(0)
    setSelectedFile(undefined)
    setPreviewImage(undefined)
    onClose()
  }

  return (
    <>
      {isModalOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="xs-max:w-[300px] xs-max:h-[600px] w-[900px] h-[700px] border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-center pt-[26px] ">
                  <h3 className="text-[22px] font-semibold">리뷰작성</h3>
                </div>
                <div className=" pt-[10px] px-[20px]">
                  <div className="xs-max:gap-[10px] flex gap-[20px] border-solid border-lenssisStroke border-[1px] rounded-[5px]">
                    <div className="py-[15px] px-[14px] ">
                      <label htmlFor="selectImage" className="relative cursor-pointer hover:contrast-[.6]">
                        <img
                          className=""
                          width={120}
                          height={120}
                          src={
                            previewImage
                              ? previewImage
                              : reviewItem[0].productImageUrl
                              ? reviewItem[0].productImageUrl
                              : '/assets/errorImage.png'
                          }
                        />
                        {!previewImage ? (
                          <div className="text-[12px] opacity-0 hover:opacity-100 absolute inset-0 z-10 flex justify-center items-center text-white font-semibold">
                            <span className="text-white px-2 py-1 border-solid border-white border-[2px] rounded-[5px]">
                              사진 첨부하기
                            </span>
                          </div>
                        ) : (
                          <div className="text-[12px] opacity-0 hover:opacity-100 absolute inset-0 z-10 flex justify-center items-center text-white font-semibold">
                            <span
                              onClick={() => setPreviewImage('')}
                              className="text-white px-2 py-1 border-solid border-white border-[2px] rounded-[5px]"
                            >
                              사진 변경하기
                            </span>
                          </div>
                        )}
                      </label>
                      <input
                        ref={imageRef}
                        onChange={(e) => handleImageInput(e)}
                        type="file"
                        name="image"
                        id="selectImage"
                        hidden={true}
                      />
                    </div>
                    <div className="flex flex-col py-[25px] justify-between">
                      <div className="xs-max:text-[12px] text-[14px]">{reviewItem[0]?.productName}</div>
                      <div>
                        <span className="xs-max:text-[10px] text-[12px] text-lenssisGray">
                          옵션 선택 - 그래픽 직경: {reviewItem[0]?.graphicDiameter}
                        </span>
                        <span className="xs-max:text-[10px] text-[12px] text-lenssisGray">
                          {' '}
                          / 도수: {reviewItem[0]?.degree}
                        </span>
                        <span className="xs-max:text-[10px] text-[12px] text-lenssisGray">
                          {' '}
                          / 수량: {reviewItem[0]?.pcs}개
                        </span>
                      </div>
                      <div className="xs-max:text-[10px] text-[12px] text-lenssisGray">
                        {reviewItem[0]?.price}円
                      </div>
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
                        />
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
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full mx-auto pb-[20px] px-[20px] pt-[15px]">
                  <textarea
                    placeholder="리뷰를 입력해 주세요. (최소 100자)"
                    value={reviewText}
                    onChange={(e) => handleReviewText(e)}
                    className="xs-max:w-[260px] xs-max:h-[260px] text-[14px] box-border px-[12px] py-[14px] w-[860px] h-[335px] outline-none resize-none rounded-[5px] border-solid border-[1px] border-lenssisStroke"
                  ></textarea>
                </div>

                <div className="xs:hidden flex items-center justify-center gap-[10px]">
                  <Button onClick={() => onClose()} bgColor="white" width="w-[120px]">
                    <span>취소</span>
                  </Button>
                  <Button onClick={() => handleReviewSubmit()} bgColor="dark" width="w-[120px]">
                    <span>저장</span>
                  </Button>
                </div>
                <div className="xs-max:hidden flex items-center justify-center gap-[10px]">
                  <Button onClick={() => onClose()} bgColor="white" width="w-[150px]">
                    <span>취소</span>
                  </Button>
                  <Button onClick={() => handleReviewSubmit()} bgColor="dark" width="w-[150px]">
                    <span>저장</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default ReviewForm
