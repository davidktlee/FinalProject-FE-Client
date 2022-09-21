import React from 'react'

import RecommendBanner from './recommend/RecommendBanner'

const Recommend = () => {
  return (
    <div className="py-2">
      <div className="flex justify-center items-center text-[24px] my-4 ">
        <span className="border-b-[6px] border-solid border-[#1B304A] font-[700] my-10 hover:cursor-pointer">
          Recommend
        </span>
      </div>
      <RecommendBanner />
    </div>
  )
}

export default Recommend
