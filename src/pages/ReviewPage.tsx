import React from 'react'
import PageLayout from '../components/common/ui/PageLayout'
import ReviewMobileBanner from '../components/review/mobile/ReviewMobileBanner'
import ReviewBanner from '../components/review/ReviewBanner'
import ReviewContainer from '../components/review/ReviewContainer'

const ReviewPage = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="max-w-[1180px] container pt-44 pb-10 mx-auto ">
          <div className="lg:w-full mx-auto flex-col flex-wrap drop-shadow-basic rounded-[10px] p-8 xs-max:w-[95%] bg-white">
            <div className="text-center mt-2 mb-6 font-bold text-[20px]">리뷰</div>
            <select
              name="상품명"
              id=""
              className="border-solid border-[1px] border-r-0 border-lenssisStroke text-lenssisGray w-[245px] h-[40px] rounded-[5px] pl-[20px] appearance-none bg-[url('/assets/selectArrow.svg')] bg-no-repeat bg-right"
            >
              <option value="샌드플러스 그레이">샌드플러스그레이</option>
            </select>
            <div className="xs-max:hidden">
              <ReviewBanner />
            </div>
            <div className="xs:hidden">
              <ReviewMobileBanner />
            </div>
            <ReviewContainer />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ReviewPage
