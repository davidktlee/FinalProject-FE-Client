import React from 'react'

const ProductRecommend = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mb-10 mx-auto ring-2 ring-[#DADADA] rounded-2xl shadow-lg">
        <div className="flex justify-between px-10">
          <p className="font-bold text-lg text-black">이런 상품도 있어요!</p>
          <p>랜덤으로 상품 8개 보여주기</p>
        </div>
        <div className="divider h-[1px] mt-4 mb-8 bg-[#BCBCBC]"></div>
        <div className="flex flex-wrap -m-4 p-4">
          <div className="lg:w-1/4 md:w-1/2 p-2 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/420x260"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">$16.00</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-2 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/421x261"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
              <p className="mt-1">$21.15</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-2 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/422x262"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
              <p className="mt-1">$12.00</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-2 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/423x263"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
              <p className="mt-1">$18.40</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductRecommend
