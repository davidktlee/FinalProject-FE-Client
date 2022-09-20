import React from 'react'
import { Navigate, useNavigate } from 'react-router'
import PageLayout from '../components/common/ui/PageLayout'

// 지울 것
const events = [
  { id: 1, img: '/assets/KakaoTalk_20220714_125021628.jpg', content: '이벤트 내용' },
  { id: 2, img: '/assets/KakaoTalk_20220714_125021628.jpg', content: '이벤트 내용' },
  { id: 3, img: '/assets/KakaoTalk_20220714_125021628.jpg', content: '이벤트 내용' },
  { id: 4, img: '/assets/KakaoTalk_20220714_125021628.jpg', content: '이벤트 내용' }
]

function EventPage() {
  const navigate = useNavigate()
  return (
    <>
      <PageLayout title="이벤트" layoutWidth="[90%]" isTitleVisible={true}>
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
        <div className="w-[90%] mx-auto my-8 flex justify-center items-center">
          <div className="flex justify-center">
            <span>pagination</span>
          </div>
          <div className="flex justify-end">
            <input
              className="justify-self-end p-2 border-[1px] border-solid border-[#A6A6A6] rounded-md"
              placeholder="Search"
            />
          </div>
        </div>
      </PageLayout>
    </>
  )
}

export default EventPage
