<<<<<<< HEAD
import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { useReview } from '../../review/hooks/useReview'
=======
import { useRecoilValue } from 'recoil'
import { reviewState } from '../../../store/review'
>>>>>>> 05bede73c1cffc1489d755f4e642c13f36d5e9cc
import CardLayout from '../common/CardLayout'
import { reviewItemsType } from '../../review/types/reviewTypes'
import { ItemDetail } from '../../../store/mainCart'
import ReviewForm from '../../review/ReviewForm'
import { useUser } from '../../auth/hooks/useUser'

const MyReview = () => {
<<<<<<< HEAD
  const [isModal, setIsModal] = useState(false)
  const [updateItem, setUpdateItem] = useState<any>()
  const { reviewItems } = useReview()
  const [reviewHandleType, setReviewHandleType] = useState<'add' | 'update'>('add')
  const { user } = useUser()
  console.log(reviewItems)

  const reviewUpdateHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setReviewHandleType('update')
    setUpdateItem(
      reviewItems.filter((item: any) => item.productInfo[0]?.productId === Number(e.currentTarget.value))
    )
    setIsModal(true)
  }

=======
  const review = useRecoilValue(reviewState)
>>>>>>> 05bede73c1cffc1489d755f4e642c13f36d5e9cc
  return (
    <CardLayout title="리뷰 관리">
      <h4 className="py-2 border-b border-solid border-[#abc8df] text-[#1B304A] font-semibold">
        내 리뷰 ({reviewItems && reviewItems.length})
      </h4>
      {reviewItems &&
        reviewItems.map((item: reviewItemsType) => (
          <div className="flex flex-col" key={item.replyInfo.replyCreatedAt + item.replyInfo.replyId}>
            <div>
              <p className="flex gap-[2px] items-center font-semibold text-sm py-2">
                <span className="text-black ">작성일자</span>
                <span className="text-lenssisGray text-xs">{item.replyInfo.replyCreatedAt}</span>
                <span className="text-black ">주문번호</span>
                <span className="text-lenssisGray text-xs">{item.replyInfo.orderId}</span>
              </p>
            </div>
            <div className="flex gap-1 xs:gap-4">
              <img
                src={
                  item.replyInfo.replyImageUrl
                    ? item.replyInfo.replyImageUrl
                    : item.productInfo[0].produtImageUrl
                }
                width={100}
                height={100}
              />
              <div className="text-lenssisGray flex flex-col items-start justify-between gap-y-1 grow">
                <p className="font-semibold text-sm">{item.productInfo[0].productName}</p>
                <p className="font-bold text-lenssisDark text-base">{item.productInfo[0].color}</p>
                <p className="text-xs">
                  그래픽 직경: {item.productInfo[0].graphicDiameter}mm/도수: {item.productInfo[0].degree}{' '}
                  수량: {item.productInfo[0].pcs}
                </p>
                {/* <p className="text-xs font-semibold">{item.productInfo.}</p> 가격이 없습니다.. */}
              </div>
              <div className="flex flex-col items-center justify-center min-w-[90px] gap-y-2">
                <button
                  onClick={reviewUpdateHandler}
                  name={'update'}
                  value={item.productInfo[0].productId}
                  className="border border-solid border-lenssisStroke text-lenssisGray text-xs w-[70px] h-[25px] rounded-sm"
                >
                  수정하기
                </button>
                <button className="border border-solid border-lenssisStroke text-lenssisGray text-xs w-[70px] h-[25px] rounded-sm">
                  삭제하기
                </button>
              </div>
            </div>
            <div className="mt- border-b-[1px] border-solid border-lenssisStroke pb-2 mb-2">
              <p>★★★★★</p>
              <p className="font-base text-lenssisGray">{item.replyInfo.replyComment}</p>
            </div>
            {isModal && (
              <ReviewForm
                reviewHandleType={reviewHandleType}
                reviewItem={updateItem[0].productInfo}
                onClose={setIsModal}
                isModalOpen={isModal}
                orderId={updateItem?.replyInfo?.orderId}
                memberId={user?.memberId!}
              />
            )}
          </div>
        ))}
      {reviewItems && reviewItems.length === 0 && (
        <p className="flex justify-center items-center h-[200px] text-[#7a7a7a] border-b border-solid border-[#ABC8DF]">
          {reviewItems.length === 0 && '최근 작성한 리뷰가 없습니다'}
        </p>
      )}
    </CardLayout>
  )
}

export default MyReview
