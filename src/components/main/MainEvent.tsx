import React from 'react'
import { useNavigate } from 'react-router'

// 지울 것
const events = [
  { id: 1, img: '/assets/KakaoTalk_20220714_125021628.jpg', content: '이벤트 내용' },
  { id: 2, img: '/assets/KakaoTalk_20220714_125021628.jpg', content: '이벤트 내용' },
  { id: 3, img: '/assets/KakaoTalk_20220714_125021628.jpg', content: '이벤트 내용' },
  { id: 4, img: '/assets/KakaoTalk_20220714_125021628.jpg', content: '이벤트 내용' }
]

const MainEvent = () => {
  const navigate = useNavigate()

  return (
    <div className="py-2">
      <div className="flex justify-center items-center text-[24px] my-4 ">
        <span className="border-b-[6px] border-solid border-[#1B304A] font-[700] my-10 hover:cursor-pointer">
          Event
        </span>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-items-stretch gap-8 px-12">
        {events.map((event: any) => (
          <div
            key={event.id}
            className="w-full rounded-xl flex flex-col items-center my-2 shadow-[0_0_6px] shadow-gray-400/80 hover:cursor-pointer"
            onClick={() => navigate(`/event/${event.id}`)}
          >
            <img className="w-full h-[226px] rounded-t-xl object-cover" src={event.img} alt="" />
            <div className=" h-[95px]  rounded-b-xl">
              {/* 이벤트 내용 */}
              {event.content}
            </div>
          </div>
        ))}
      </div>
      <div className="w-[100px] h-[40px] my-[20px] mx-auto border-2 border-solid rounded-full flex justify-center items-center">
        <button className="text-[#0B0954] font=[700]" onClick={() => navigate('/event')}>
          View More
        </button>
      </div>
    </div>
  )
}

export default MainEvent
