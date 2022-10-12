import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { EventSkeleton } from '../common/ui/Skeleton'
import ViewMoreBtn from '../main/common/ViewMoreBtn'
import { EventResponseType, InEventMainList, useGetEvent } from '../main/hooks/useEventLists'

// 지울 것

const MainEvent = () => {
  const navigate = useNavigate()
  // const [isLoading, setIsLoading] = useState(false)
  // const [eventList, setEventList] = useState<any>([])
  // const getEvent = async () => {
  //   const res = await axios.get('https://633010e5591935f3c8893690.mockapi.io/lenssis/api/v1/event')
  //   setEventList(res.data)
  //   setIsLoading(true)
  // }
  // useEffect(() => {
  //   getEvent()
  // }, [])
  const { data: eventList, isFetching } = useGetEvent()
  // console.log(eventList)

  return (
    <div>
      <div className="flex justify-center text-[24px] ">
        <span className="px-2 h-[45px] border-b-[5px] border-solid border-[#1B304A] text-[18px] md:text-[24px] mt-[25px] mb-[50px] font-[600] hover:cursor-pointer">
          Event
        </span>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mx-2  md:gap-8 md:px-12">
        {/* eventList[0]?.data?.eventMainList*/}
        {isFetching ? (
          <EventSkeleton count={4} />
        ) : (
          eventList?.data?.eventMainList.map((event: InEventMainList) => (
            <div
              key={event.eventId}
              className=" w-full h-[330px] xs-max:h-[215px] rounded-xl flex flex-col items-start my-2 shadow-basic hover:cursor-pointer"
              onClick={() => navigate('/event')}
            >
              <img
                className="w-full h-[145px] md:h-[226px] rounded-t-xl object-fit md:object-cover overflow-hidden"
                src={event.imageUrl}
                alt=""
              />
              <div className=" h-[95px] rounded-b-xl ml-4 mt-[16px] font-bold">
                {/* 이벤트 내용 */}
                {event.eventTitle}
              </div>
            </div>
          ))
        )}
      </div>
      <ViewMoreBtn moveTo="/event" />
    </div>
  )
}

export default MainEvent
