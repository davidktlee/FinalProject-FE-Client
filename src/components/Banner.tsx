import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react' // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'

import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import { useRef } from 'react'

const imgs = [
  '/assets/KakaoTalk_20220714_125021628.jpg',
  '/assets/KakaoTalk_20220714_125021628.jpg',
  '/assets/KakaoTalk_20220714_125021628.jpg'
]

// 달라질 부분
// absoluteTop, absoluteBtm, absoluteLeft, absoluteRight, slidesView, data
const Banner = () => {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  SwiperCore.use([Navigation, Pagination, Autoplay])
  const settings = {
    spaceBetween: 10,
    navigation: {
      prevEl: prevRef.current,
      nextEl: nextRef.current
    },
    scrollbar: { draggable: true },
    pagination: { clickable: true },
    slidesPerView: 1,
    loop: false,
    autoplay: { delay: 2000, disableOnInteraction: true },
    watchOverflow: true
  }

  return (
    <div className="container my-10 relative">
      <button ref={prevRef} className="absolute top-[45%] left-[30px] z-[2] hover:color-white">
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
      <Swiper {...settings} style={{ borderRadius: '25px', overflow: 'hidden' }}>
        {imgs.map((img: string, index: number) => (
          <div key={index}>
            <SwiperSlide key={index}>
              {/* key값 id 값 넣어주기 */}
              <img src={img} alt="" className="w-full h-[400px] object-cover " />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
      <button ref={nextRef} className="absolute top-[45%] right-[30px] z-[1] hover:color-white">
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

export default Banner

{
  /* {imgs.map((img: string, index: number) => (
      <SwiperSlide key={`${img}-${index}`}>{img}</SwiperSlide>
    ))} */
}
