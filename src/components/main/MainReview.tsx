import React from 'react'
import Card from '../common/Card'
import PageLayout from '../common/ui/PageLayout'
import MainReviewCard from './MainReviewCard'

const MainReview = () => {
  return (
    <div className="py-2">
      <div className="flex justify-center items-center text-[24px] my-4 ">
        <span className="border-b-[6px] border-solid border-[#1B304A] font-[700] my-10 hover:cursor-pointer">
          Review
        </span>
      </div>
      <MainReviewCard />
    </div>
  )
}

export default MainReview
