import { Swiper, SwiperSlide } from 'swiper/react' // basic
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/css' //basic
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useEffect, useRef, useState } from 'react'

const imgs = [
  '/assets/KakaoTalk_20220714_125021628.jpg',
  '/assets/KakaoTalk_20220714_125021628.jpg',
  '/assets/KakaoTalk_20220714_125021628.jpg'
]

const Banner = () => {
  const [swiperSettings, setSwiperSettings] = useState<any>(null) // 타입 고쳐야함
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)
  SwiperCore.use([Navigation, Pagination])
  const settings = {
    spaceBetween: 50,
    // navigation: {
    //   prevEl: prevRef.current,
    //   nextEl: nextRef.current
    // },
    scrollbar: { draggable: true },
    pagination: { clickable: true },
    autoplay: { delay: 1000 },
    style: { width: '1180px', height: '400px', borderRadius: '20px' },
    slidesPerView: 1
  }
  useEffect(() => {
    if (!swiperSettings) {
      setSwiperSettings(settings)
    }
  }, [swiperSettings])

  return (
    <div className="w-full mx-auto">
      <button ref={prevRef}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 12C20 16.4183 16.4183 20 12 20V22C17.5228 22 22 17.5228 22 12H20ZM12 20C7.58172 20 4 16.4183 4 12H2C2 17.5228 6.47715 22 12 22V20ZM4 12C4 7.58172 7.58172 4 12 4V2C6.47715 2 2 6.47715 2 12H4ZM12 4C16.4183 4 20 7.58172 20 12H22C22 6.47715 17.5228 2 12 2V4Z"
            fill="#ABC8DF"
          />
          <path
            d="M13.2929 17.7071C13.6834 18.0976 14.3166 18.0976 14.7071 17.7071C15.0976 17.3166 15.0976 16.6834 14.7071 16.2929L13.2929 17.7071ZM9 12L8.29289 11.2929C7.90237 11.6834 7.90237 12.3166 8.29289 12.7071L9 12ZM14.7071 7.70711C15.0976 7.31658 15.0976 6.68342 14.7071 6.29289C14.3166 5.90237 13.6834 5.90237 13.2929 6.29289L14.7071 7.70711ZM14.7071 16.2929L9.70711 11.2929L8.29289 12.7071L13.2929 17.7071L14.7071 16.2929ZM9.70711 12.7071L14.7071 7.70711L13.2929 6.29289L8.29289 11.2929L9.70711 12.7071Z"
            fill="#ABC8DF"
          />
        </svg>
        {'<'}
      </button>
      <Swiper {...swiperSettings}>
        {imgs.map((img: string, index: number) => (
          <div>
            <SwiperSlide>
              <img src={img} alt="" width="1180" height="400" />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
      <button ref={nextRef}>{'>'}</button>
    </div>
  )
}

export default Banner

{
  /* {imgs.map((img: string, index: number) => (
      <SwiperSlide key={`${img}-${index}`}>{img}</SwiperSlide>
    ))} */
}
