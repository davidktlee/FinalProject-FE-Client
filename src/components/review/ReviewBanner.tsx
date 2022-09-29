import React, { useEffect, useRef, useState } from 'react'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import leftArrow from '/assets/leftArrow.svg'
import rightArrow from '/assets/rightArrow.svg'

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
        // pagination: { clickable: true },
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
    <div className="py-6 relative">
      <button ref={prevRef} className="absolute top-[42%] left-[-20px] z-[9] hover:color-white">
        <img src={leftArrow} alt="" />
      </button>
      {swiperSetting && (
        <Swiper {...swiperSetting}>
          <div className=" flex w-full justify-between ">
            {reviewImgs.map((img: string, index: number) => (
              <div key={index}>
                <SwiperSlide key={index}>
                  <img src={img} className="rounded-[5px]" width={175} />
                </SwiperSlide>
              </div>
            ))}
          </div>
        </Swiper>
      )}
      <button ref={nextRef} className="absolute top-[42%] right-[-20px] z-[9] hover:color-white">
        <img src={rightArrow} alt="" />
      </button>
    </div>
  )
}

export default ReviewBanner
