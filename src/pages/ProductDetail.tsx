import React from 'react'

const ProductDetail = () => (
  <div>
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="w-[90%] container px-4 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-[45%] w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          />
          <div className="lg:w-[45%] w-full lg:pl-10 lg:py-2 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 mb-2">60개의 리뷰</h2>
            <div className="text-gray-900 text-3xl title-font font-medium mb-4 flex justify-between">
              <span>스텔라 그레이 원데이</span>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
            <div className="flex mb-4">
              <span className="flex items-center">
                아이브 장원영 Pick! 착용하는 순간부터 초롱초롱 사슴 눈망울!
              </span>
            </div>
            <p className="leading-relaxed">
              <div className="price">
                <p>2000엔</p>
                <span>1800엔</span>
                <span>(1000엔 할인)</span>
              </div>
              <div className="badge">원데이, 13.5mm, 수분70%, 실리콘</div>
              <div className="point flex">
                <p className="flex-1">포인트</p>
                <p>구매 금액의 1%</p>
              </div>
              <div className="card flex flex-1">
                <p className="flex-1">카드 혜택</p>
                <p>무이자 할부 카드 안내</p>
              </div>
              <div className="delivery flex flex-1">
                <p className="flex-1">배송 안내</p>
                <p className="flex-1">2,500원(50,000원 이상 구매 시 무료)</p>
              </div>
              <div className="degree"></div>
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5 justify-between">
              <div className="flex">
                <span className="mr-3">도수</span>
                {/* <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button> */}
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base pl-3 pr-10">
                    <option value="">選択してください</option>
                    <option value="0.00,0,376">0.00</option>
                    <option value="-0.5,0,301">-0.5</option>
                    <option value="-1,0,152">-1</option>
                    <option value="-1.25,0,93">-1.25</option>
                    <option value="-1.50,0,37">-1.50</option>
                    <option value="-1.75,0,18">-1.75</option>
                    <option value="-2.00,0,51">-2.00</option>
                    <option value="-2.25,0,39">-2.25</option>
                    <option value="-2.50,0,2">-2.50</option>
                    <option value="-2.75,0,-10">-2.75&nbsp;&nbsp;[品切れ]</option>
                    <option value="-3.00,0,-10">-3.00&nbsp;&nbsp;[品切れ]</option>
                    <option value="-3.25,0,26">-3.25</option>
                    <option value="-3.50,0,36">-3.50</option>
                    <option value="-3.75,0,-10">-3.75&nbsp;&nbsp;[品切れ]</option>
                    <option value="-4.00,0,20">-4.00</option>
                    <option value="-4.25,0,11">-4.25</option>
                    <option value="-4.50,0,95">-4.50</option>
                    <option value="-4.75,0,5">-4.75</option>
                    <option value="-5.00,0,71">-5.00</option>
                    <option value="-5.50,0,16">-5.50</option>
                    <option value="-6.00,0,59">-6.00</option>
                    <option value="-6.50,0,94">-6.50</option>
                    <option value="-7.00,0,44">-7.00</option>
                    <option value="-7.50,0,161">-7.50</option>
                    <option value="-8.00,0,32">-8.00</option>
                    <option value="-8.50,0,2">-8.50</option>
                    <option value="-9.00,0,10">-9.00</option>
                    <option value="-9.50,0,2">-9.50</option>
                    <option value="-10.00,0,1">-10.00</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="flex justify-between
            "
            >
              <span>총 상품 금액</span>
              <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
            </div>
            <div className="divder h-[2px] bg-slate-700 mb-4 mt-1"></div>
            <div className="flex gap-4">
              <button className="w-1/2 cursor-pointer bg-white text-blue-900 border-0 ring-1 ring-gray-300 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded">
                장바구니
              </button>
              <button className="w-1/2 cursor-pointer text-white bg-blue-800 border-0 ring-1 ring-gray-300 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded">
                바로구매
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default ProductDetail
