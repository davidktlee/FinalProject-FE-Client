import React from 'react'

const MainReviewCard = () => {
  return (
    <div className=" p-[10px] rounded-xl shadow-[0_0_6px] shadow-gray-400/80">
      <div>
        <img
          className=" rounded rounded-t-[5px]"
          src="https://user-images.githubusercontent.com/90392240/191562901-054caaf5-0245-44fd-8715-848853dcca4e.png"
        />
      </div>
      <div className="p-2">
        <p>샌드 플러스 그레이 착용</p>
        <p className="text-[#7F7F7F]">@velvet.ineffable</p>
        <p>★★★★★</p>
      </div>
    </div>
  )
}

export default MainReviewCard
