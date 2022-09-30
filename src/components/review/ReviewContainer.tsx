import React from 'react'
import RevieItems from './ReviewItems'

const ReviewContainer = () => {
  return (
    <div className="pt-10 pb-4 xs-max:pt-4">
      <div className="flex flex-col">
        <p className="">60개의 리뷰</p>
        <div className="xs-max:hidden divider h-[1px] bg-[#dadada] my-1 w-full"></div>
      </div>
      <section className="text-gray-600 body-font bg-[]">
        <div className="container px-4 mx-auto flex-wrap">
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
