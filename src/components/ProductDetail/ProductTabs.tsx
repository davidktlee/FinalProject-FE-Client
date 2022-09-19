import React, { useState } from 'react'
import ProductInfo from './ProductInfo'
import ProductInquiry from './ProductInquiry'

const ProductAbout = () => {
  const [tabState, setTabState] = useState<boolean>(false)

  const handleTab = () => {
    setTabState(!tabState)
  }

  return (
    // border-blue-500, text-blue-500
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mb-10 mx-auto ring-2 ring-[#DADADA] rounded-2xl shadow-lg">
        <div className="bg-white">
          <nav className="flex justify-between ">
            <button
              onClick={handleTab}
              className={`${
                tabState && 'border-[#030303] border-b-4 text-[#030303]'
              } flex-1 text-gray-600 py-4 px-6 block hover:text-[#030303] focus:outline-none border-[#1B304A] border-b-2 font-medium`}
            >
              <span>상품 정보</span>
            </button>

            <button
              onClick={handleTab}
              className={`${
                !tabState && 'border-[#030303] border-b-4 text-[#030303]'
              } flex-1 text-gray-600 py-4 px-6 block hover:text-[#030303] focus:outline-none border-[#1B304A] border-b-2 font-medium`}
            >
              <span>상품 문의</span>
            </button>
          </nav>
          {tabState ? <ProductInfo /> : <ProductInquiry />}
        </div>
      </div>
    </section>
  )
}

export default ProductAbout
