import React from 'react'
import ProductNameSelect from '../../constants/ProductNameSelect.json'
import RevieItems from './RevieItems'

const ReviewContainer = () => {
  return (
    <div className="pt-10 pb-4">
      <div className="flex justify-between">
        <select name="상품명" id="">
          <option value="샌드플러스 그레이">샌드플러스그레이</option>
        </select>
        <p>60개의 리뷰</p>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="-m-4">
            <RevieItems />
            <RevieItems />
            <RevieItems />
            <RevieItems />
            <RevieItems />
            <RevieItems />
            <RevieItems />
            <RevieItems />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ReviewContainer
