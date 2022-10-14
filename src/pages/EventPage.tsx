import { useNavigate } from 'react-router'
import PageLayout from '../components/common/ui/PageLayout'
import CardTemplate from './../components/common/ui/CardTemplate'
import { useGetEvent } from '../components/main/hooks/useEventLists'
import { useEffect, useState } from 'react'
import Pagination from './../components/main/common/Pagination'
import { useSetRecoilState } from 'recoil'
import { eventId } from '../store/event'
import { EventSkeleton } from '../components/common/ui/Skeleton'
import { InEventMainList } from '../components/main/types/eventTypes'

function EventPage() {
  const navigate = useNavigate()

  const [currentPage, setCurrentPage] = useState(1)
  const [currentPost, setCurrentPost] = useState<any>([])
  const indexOfLast = currentPage * 8
  const indexOfStart = indexOfLast - 8
  const [filteredItem, setFilteredItem] = useState<any>([])
  const setEventId = useSetRecoilState(eventId)

  const onClickEvent = (id: number) => {
    setEventId(id)
    navigate(`/event/${id}`, { state: id })
  }

  const { data: eventList, isFetching } = useGetEvent()
  console.log(eventList)
  useEffect(() => {
    if (eventList) {
      setCurrentPost(eventList?.data?.eventMainList.slice(indexOfStart, indexOfLast))
      setFilteredItem(eventList?.data?.eventMainList.filter((item: InEventMainList) => item.topFixed === 0))
    }
  }, [eventList, currentPage])
  console.log(filteredItem)
  return (
    <>
      <PageLayout layoutWidth="max-w-[1180px]" innerTop="top-[40%]">
        <CardTemplate title="이벤트" isTitleVisible={true}>
          <div className="text-center text-[24px] text-lenssisDark font-[600] mb-4">주목 이벤트</div>
          {filteredItem &&
            filteredItem.map((event: InEventMainList) => (
              <div
                key={event.eventId}
                className="w-[320px] md:w-[430px] mx-auto rounded-xl xs-max:h-[215px] flex flex-col my-2 shadow-basic hover:cursor-pointer"
                onClick={() => onClickEvent(event.eventId)}
              >
                <img
                  className="w-full h-[145px] md:h-[226px] rounded-t-xl object-fit md:object-cover"
                  src={event.imageUrl}
                  alt="イヴェントイメージ"
                />
                <div className=" h-[95px] rounded-b-xl ml-2">
                  {/* 이벤트 내용 */}
                  {event.eventTitle}
                </div>
              </div>
            ))}

          <div className="text-center text-[24px] text-lenssisDark font-[600] my-4">전체 이벤트</div>
          <div className=" grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-items-stretch xs-max:gap-y-[20px] md:gap-8 md:px-12">
            {isFetching ? (
              <EventSkeleton count={4} />
            ) : (
              <>
                {currentPost &&
                  currentPost.map((event: InEventMainList) => (
                    <div
                      key={event.eventId}
                      className="w-full rounded-xl xs-max:h-[215px] flex flex-col my-2 shadow-basic hover:cursor-pointer"
                      onClick={() => onClickEvent(event.eventId)}
                    >
                      <img
                        className="w-full h-[145px] md:h-[226px] rounded-t-xl object-fit md:object-cover"
                        src={event.imageUrl}
                        alt="イヴェントイメージ"
                      />
                      <div className=" h-[95px] rounded-b-xl ml-2">
                        {/* 이벤트 내용 */}
                        {event.eventTitle}
                      </div>
                    </div>
                  ))}
              </>
            )}
          </div>
          <div className="relative flex justify-center items-center">
            {eventList?.data?.totalCount && (
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                allCount={eventList.data.totalCount}
                divide={8}
              />
            )}
          </div>
        </CardTemplate>
      </PageLayout>
    </>
  )
}

export default EventPage
