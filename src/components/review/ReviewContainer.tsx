import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { selectedNameState } from '../../store/review'
import { useGetAllreview, useGetForProductId } from './hooks/useReview'
import RevieItems from './ReviewItems'

const ReviewContainer = () => {
  const reviewItems = useRecoilValue(selectedNameState)
  console.log(reviewItems)
  return (
    <div className="pt-10 pb-4 xs-max:pt-4">
      <div className="flex flex-col">
        <p className="">{reviewItems.length}개의 리뷰</p>
        <div className="divider h-[1px] bg-[#dadada] mt-4 mb-6 w-full xs-max:my-4"></div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-4 mx-auto flex-wrap">
          <div className="-m-4">
            {reviewItems.map((item) => (
              <RevieItems item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ReviewContainer
