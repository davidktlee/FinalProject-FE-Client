import React from 'react'
import { Navigate, useNavigate } from 'react-router'
import PageLayout from '../components/common/ui/PageLayout'
import CardTemplate from './../components/common/ui/CardTemplate'

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
      <PageLayout layoutWidth="[90%]" innerTop="top-[300px]">
        <CardTemplate title="이벤트" isTitleVisible={true}>
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
          <div className="mt-16 flex justify-center items-center">
            <div className="flex-1 flex justify-center items-center  ml-[250px]">
              <span className="hover:cursor-pointer mx-4">
                <svg width="7" height="17" viewBox="0 0 7 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.99805 1L1.49919 8.5L5.99805 16" stroke="#6D6D6D" strokeWidth="0.975844" />
                </svg>
              </span>
              <span>1 2 3 </span>
              <span className="hover:cursor-pointer mx-4">
                <svg width="7" height="17" viewBox="0 0 7 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.998047 16L5.4969 8.5L0.998047 1" stroke="#6D6D6D" strokeWidth="0.975844" />
                </svg>
              </span>
            </div>
            <input
              className="p-[4px] mr-[50px] border-[1px] border-solid border-[#A6A6A6] rounded-md "
              placeholder="Search"
            />
          </div>
        </CardTemplate>
      </PageLayout>
    </>
  )
}

export default EventPage
