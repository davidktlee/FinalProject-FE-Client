import React from 'react'
import Card from '../common/Card'
import ViewMoreBtn from '../main/common/ViewMoreBtn'
import MainReviewCard from './MainReviewCard'
import MobileReviewCard from './mobile/MobileReviewCard'

const MainReview = () => {
  return (
    <div className=" bg-white rounded-[5px]">
      <div className="flex justify-center items-center text-[24px]">
        <span className="px-2 border-b-[5px] h-[45px] border-solid border-[#0B0954] mt-[20px] mb-[50px] font-[700] hover:cursor-pointer xs-max:text-[18px] ">
          Review
        </span>
      </div>
      {/* 웹 */}
      <div className="xs-max:hidden flex flex-wrap justify-center gap-6 max-w-[1280px] mx-auto">
        <MainReviewCard />
        <MainReviewCard />
        <MainReviewCard />
        <MainReviewCard />
        <MainReviewCard />
        <MainReviewCard />
        <MainReviewCard />
        <MainReviewCard />
      </div>
      {/* 모바일 */}
      <div className="xs:hidden  flex flex-wrap justify-center gap-[8px] max-w-[1280px] mx-auto">
        <MobileReviewCard />
        <MobileReviewCard />
        <MobileReviewCard />
        <MobileReviewCard />
      </div>
      <ViewMoreBtn moveTo="/review" />
    </div>
  )
}

export default MainReview
