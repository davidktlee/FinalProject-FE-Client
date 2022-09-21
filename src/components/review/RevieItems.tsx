import React from 'react'

const RevieItems = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container py-4 mt-2 mx-auto ">
        <div className="lg:w-full flex-col flex-wrap ring-2 ring-[#DADADA] p-8 shadow-lg">
          <div className="w-full">
            <div className="flex-col">
              <div className="flex w-full justify-between">
                <div className="flex gap-2">
                  <div>★★★★★</div>
                  <div>아이디</div>
                </div>
                <div>2022.09.16</div>
              </div>
              <div className="w-full mt-4 flex justify-between gap-2">
                <div className="w-[90%]">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-1">샌드 플러스 그레이</h2>
                  <p className="leading-relaxed text-base flex-wrap">
                    컬러 렌즈를 처음 기로한 지 8년 정도 지났는데, 그 8년간 가장 마음에 들어서 재구매 하고
                    있습니다. 칙칙한 브라운 같은 회색 같은 절묘한 색상에 가장자리가 자연스러운 투명감을
                    줍니다. 자연스려운 색에도 익숙하고 피부톤이 밝은 사람에게도 어두운 헤어컬러의 사람에게도
                    추천합니다 ^-^
                  </p>
                </div>
                <div className="flex-shrink-0 my-auto">
                  <img
                    src="https://lenssis.jp/data/item/0134576790/67CA7YKk67iU656Z_1month_7IOB7IS4.jpg"
                    width="100"
                    height="100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RevieItems
