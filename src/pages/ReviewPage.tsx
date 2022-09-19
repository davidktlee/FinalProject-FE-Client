import React from 'react'
import ReviewBanner from '../components/review/ReviewBanner'
import ReviewContainer from '../components/review/ReviewContainer'

const ReviewPage = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container pt-44 pb-10 mx-auto ">
          <div className="lg:w-full mx-auto flex-col flex-wrap ring-2 ring-[#DADADA] rounded-2xl p-8 shadow-lg ">
            <div className="text-center mt-2 mb-6 font-bold">리뷰</div>
            <ReviewBanner />
            <ReviewContainer />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ReviewPage
