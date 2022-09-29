import React from 'react'

const MobileReviewCard = () => {
  return (
    <div className="w-[160px] h-[195px] p-[5px] drop-shadow-basic border-solid border-2 border-white rounded-[5px] bg-white">
      <div>
        <img
          width="154px"
          height="141px"
          className=" rounded rounded-t-[5px]"
          src="https://user-images.githubusercontent.com/90392240/191562901-054caaf5-0245-44fd-8715-848853dcca4e.png"
        />
      </div>
      <div className="p-[2px] h-[45px]">
        <p className="text-[13px] leading-4 font-bold">샌드 플러스 그레이 착용</p>
        <p className="text-[12px] leading-4 text-[#7F7F7F]">@velvet.ineffable</p>
        <p className="text-[14px] leading-4">★★★★★</p>
      </div>
    </div>
  )
}

export default MobileReviewCard
