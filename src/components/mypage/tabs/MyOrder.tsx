import { useRecoilValue } from 'recoil'
import { productState } from '../../../store/product'
import ReviewForm from '../../review/ReviewForm'
import CardLayout from '../common/CardLayout'
import { useState } from 'react'

// 0 주문완료
// 1 배송준비중
// 2 출하 완료
// 3 배송 중
// 4 배송 완료

const MyOrder = () => {
  const [isModal, setIsModal] = useState(false)

  const onModalHandler = () => {
    console.log('모달 오픈!', isModal)
    setIsModal(!isModal)
  }
  const product = useRecoilValue(productState)
  if (!product) return <div>loading...</div>

  return (
    <CardLayout title="주문 내역">
      <ReviewForm onClose={onModalHandler} isModalOpen={isModal} />
      <h4 className="py-0 xs:py-2 border-b border-solid border-[#abc8df] text-[#5a5a5a] font-semibold">
        상품 정보
      </h4>

      <div>
        {product.map((item) => (
          <div className="flex flex-col hover:bg-slate-50" key={item.id}>
            <h4 className="py-2 text-[#5a5a5a] font-semibold flex justify-start items-center gap-4 text-xs xs:text-base">
              <p className="flex items-center gap-2">
                <span className="font-bold text-[#1b304a]">주문일자</span>
                <span className="text-[#7a7a7a]">{item.orderedAt}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-bold text-[#1b304a]">주문번호수</span>
                <span className="text-[#7a7a7a]">{item.orderNumber}</span>
              </p>
            </h4>

            <div className="flex justify-between items-center py-4 gap-1 xs:gap-4 border-b border-solid border-[#abc8df] text-xs xs:text-base">
              <div>
                <img width={100} height={100} src={item.imageURL} alt="눈알" />
              </div>

              <div className="grow">
                <p className="text-[#7a7a7a]">{item.lensTitle}</p>
                <p className="font-bold text-[#1b304a] py-1">{item.lensColor}</p>
                <div className="block xs:flex py-1 text-[#7a7a7a]">
                  <span>옵션 선택-</span>
                  {item.option.map((option) => (
                    <span key={item.lensTitle + option}>{option} /</span>
                  ))}
                </div>
                <p className="py-1 text-[#7a7a7a] font-semibold">{item.price}</p>
              </div>

              <div className="">
                <button
                  onClick={onModalHandler}
                  className="border border-solid border-[#d9d9d9] text-[#7a7a7a] h-[25px] w-[70px] xs:h-fit xs:w-fit xs:min-w-[105px] xs:py-1 xs:px-2  rounded-[3px]"
                >
                  <span className="">리뷰 작성하기</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardLayout>
  )
}

export default MyOrder
