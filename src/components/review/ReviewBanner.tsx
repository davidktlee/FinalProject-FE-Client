import React, { useEffect, useRef, useState } from 'react'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'

const ReviewBanner = () => {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)
  const [swiperSetting, setSwiperSetting] = useState<Swiper | null>(null)

  SwiperCore.use([Navigation]) // 모바일에서는 [Scrollbar] 추가
  useEffect(() => {
    if (!swiperSetting) {
      setSwiperSetting({
        spaceBetween: 20,
        navigation: {
          prevEl: prevRef.current,
          nextEl: nextRef.current
        },
        // scrollbar: { draggable: true },
        pagination: { clickable: true },
        slidesPerView: 6,
        loop: true,
        // autoplay: { delay: 2000, disableOnInteraction: true },
        watchOverflow: true,
        onBeforeInit: (swiper) => {
          if (typeof swiper.params.navigation !== 'boolean') {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }
          }
          swiper.navigation.update()
        }
      })
    }
  }, [swiperSetting])

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
      <button ref={prevRef} className="absolute top-[42%] left-[-36px] z-[9] hover:color-white">
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
      {swiperSetting && (
        <Swiper {...swiperSetting}>
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
      )}
      <button ref={nextRef} className="absolute top-[42%] right-[-36px] z-[9] hover:color-white">
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
