import React, { useState } from 'react'
import ProductDescription from './ProductDescription'
import ProductInquiry from './ProductInquiry'

const ProductAbout = () => {
  const [tabState, setTabState] = useState<boolean>(true)

  return (
    <section className="text-gray-600 body-font ">
      <div className="container px-5 py-10 mb-10 mx-auto drop-shadow-basic rounded-[10px] bg-white xs-max:w-[95%]">
        <div className="bg-white">
          <nav className="flex justify-between ">
            <button
              onClick={() => setTabState(true)}
              className={`${
                tabState && 'border-[#030303] border-b-4 text-[#030303] border-solid'
              } border-solid flex-1 text-gray-600 py-4 px-6 block hover:text-[#030303] focus:outline-none border-[#1B304A] border-b-2 font-medium`}
            >
              <span>상품 정보</span>
            </button>

            <button
              onClick={() => setTabState(false)}
              className={`${
                !tabState && 'border-[#030303] border-b-4 text-[#030303]'
              } flex-1 text-gray-600 py-4 px-6 block hover:text-[#030303] focus:outline-none border-[#1B304A] border-b-2 font-medium`}
            >
              <span>상품 문의</span>
            </button>
          </nav>
          {tabState ? <ProductDescription /> : <ProductInquiry />}
        </div>
      </div>
    </section>
  )
}

export default ProductAbout
