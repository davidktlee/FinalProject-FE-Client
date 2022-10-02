import React from 'react'
import Card from '../common/Card'
import ViewMoreBtn from '../main/common/ViewMoreBtn'
import MainReviewCard from './MainReviewCard'
import MobileReviewCard from './mobile/MobileReviewCard'

const MainReview = () => {
  return (
    <div className="py-2 bg-white rounded-[5px]">
      <div className="flex justify-center items-center text-[24px] my-4 ">
        <span className="border-b-[6px] border-solid border-[#0B0954] font-[700] hover:cursor-pointer">
          Review
        </span>
      </div>
      <div className="xs-max:hidden pt-10 flex flex-wrap justify-center gap-6 max-w-[1280px] mx-auto">
        <MainReviewCard />
        <MainReviewCard />
        <MainReviewCard />
        <MainReviewCard />
        <MainReviewCard />
        <MainReviewCard />
        <MainReviewCard />
        <MainReviewCard />
      </div>
      <div className="xs:hidden pt-6 flex flex-wrap justify-center gap-[8px] max-w-[1280px] mx-auto">
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
