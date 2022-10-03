import React from 'react'

import RecommendBanner from './recommend/RecommendBanner'

const Recommend = () => {
  return (
    <div>
      <div className="flex justify-center items-center text-[24px]  ">
        <span className="px-2 h-[45px] border-b-[5px] border-solid border-[#1B304A] text-[18px] md:text-[24px] mt-[20px] mb-[40px] font-[600] hover:cursor-pointer">
          Recommend
        </span>
      </div>
      <RecommendBanner />
    </div>
  )
}

export default Recommend
