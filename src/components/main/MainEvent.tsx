import React from 'react'
import { useNavigate } from 'react-router'
import ViewMoreBtn from './common/ViewMoreBtn'
import { InEventMainList, useGetEvent } from './hooks/useEventLists'

// 지울 것

const MainEvent = () => {
  const navigate = useNavigate()

  const eventList = useGetEvent()

  return (
    <div>
      <div className="flex justify-center text-[24px] ">
        <span className="px-2 h-[45px] border-b-[5px] border-solid border-[#1B304A] text-[18px] md:text-[24px] mt-[25px] mb-[50px] font-[600] hover:cursor-pointer">
          Event
        </span>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mx-2  md:gap-8 md:px-12">
        {eventList?.data?.eventMainList?.map((event: InEventMainList) => (
          <div
            key={event.eventId}
            className="w-full xs-max:h-[215px] rounded-xl flex flex-col items-center my-2 shadow-basic hover:cursor-pointer"
            onClick={() => navigate('/event')}
          >
            <img
              className="w-full h-[145px] md:h-[226px] rounded-t-xl object-fit md:object-cover"
              src={event.imageUrl}
              alt=""
            />
            <div className=" h-[95px] rounded-b-xl">
              {/* 이벤트 내용 */}
              {event.eventTitle}
            </div>
          </div>
        ))}
      </div>
      <ViewMoreBtn moveTo="/event" />
    </div>
  )
}

export default MainEvent
