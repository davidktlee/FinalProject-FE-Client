import React, { useRef } from 'react'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'

const ReviewBanner = () => {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  SwiperCore.use([Navigation])
  const settings = {
    spaceBetween: 20,
    navigation: {
      prevEl: prevRef.current,
      nextEl: nextRef.current
    },
    slidesPerView: 6,
    loop: true,
    autoplay: { delay: 2000, disableOnInteraction: true },
    watchOverflow: true
  }

  const reviewImgs = [
    'https://dummyimage.com/177.5x175/000/fff',
    'https://dummyimage.com/177.5x175/000/fff',
    'https://dummyimage.com/177.5x175/000/fff',
    'https://dummyimage.com/177.5x175/000/fff',
    'https://dummyimage.com/177.5x175/000/fff',
    'https://dummyimage.com/177.5x175/000/fff'
  ]

  return (
    <div className="py-10 relative border-solid border-[#1B304A] border-b-2">
      <button ref={prevRef} className="absolute top-[42%] left-[-36px] z-[9999999] hover:color-white">
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="17.5"
            cy="17.5"
            r="17.5"
            transform="rotate(-180 17.5 17.5)"
            fill="white"
            fillOpacity="0.5"
          />
          <path
            d="M22 25L13 17.5L22 10"
            stroke="#92C8ED"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 25L13 17.5L22 10"
            stroke="#ABC8DF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <Swiper {...settings}>
        <div className=" flex w-full justify-between ">
          {reviewImgs.map((img: string, index: number) => (
            <div key={index}>
              <SwiperSlide key={index}>
                <img src={img} />
              </SwiperSlide>
            </div>
          ))}
        </div>
      </Swiper>
      <button ref={nextRef} className="absolute top-[42%] right-[-36px] z-[9999999] hover:color-white">
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="17.5" cy="17.5" r="17.5" fill="white" fillOpacity="0.5" />
          <path
            d="M13 10L22 17.5L13 25"
            stroke="#92C8ED"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 10L22 17.5L13 25"
            stroke="#ABC8DF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}

export default ReviewBanner
