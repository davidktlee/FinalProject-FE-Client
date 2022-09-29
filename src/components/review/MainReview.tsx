import React from 'react'
import Card from '../common/Card'
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
      <div className="xs-max:hidden p-10 flex flex-wrap justify-center gap-6 max-w-[1280px] mx-auto">
        <MainReviewCard />
        <MainReviewCard />
        <MainReviewCard />
        <MainReviewCard />
        <MainReviewCard />
        <MainReviewCard />
        <MainReviewCard />
        <MainReviewCard />
      </div>
      <div className="xs:hidden py-6 flex flex-wrap justify-center gap-[4px] max-w-[1280px] mx-auto">
        <MobileReviewCard />
        <MobileReviewCard />
        <MobileReviewCard />
        <MobileReviewCard />
      </div>
      <div className="w-[100px] h-[40px] my-[20px] mx-auto border-[1px] border-solid rounded-full flex justify-center items-center">
        <span className="text-[#0B0954] font=[700]">View More</span>
      </div>
    </div>
  )
}

export default MainReview
