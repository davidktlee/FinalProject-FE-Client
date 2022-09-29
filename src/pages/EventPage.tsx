import { useNavigate } from 'react-router'
import PageLayout from '../components/common/ui/PageLayout'
import CardTemplate from './../components/common/ui/CardTemplate'
import { EventResponseType, useGetDetailEvent, useGetEvent } from '../components/main/hooks/useEventLists'
import { useEffect, useState } from 'react'
import Pagination from './../components/main/common/Pagination'
import Search from '../components/main/common/Search'

// 지울 것
const events = [
  {
    id: '1',
    mainImg:
      'https://user-images.githubusercontent.com/90392240/193076598-f4c40be6-215a-4c11-9cd4-30d15c7d830d.png',
    description: '이벤트 내용'
  },
  {
    id: '2',
    mainImg:
      'https://user-images.githubusercontent.com/90392240/193076604-8d324e4b-0519-4cc8-a8fa-9f538f398103.png',
    description: '이벤트 내용'
  },
  {
    id: '3',
    mainImg:
      'https://user-images.githubusercontent.com/90392240/193076590-2067de1e-7f25-4a52-a8e3-89c8051b14b6.png',
    description: '이벤트 내용'
  },
  {
    id: '4',
    mainImg:
      'https://user-images.githubusercontent.com/90392240/193076592-d71a3a5c-ab7d-4908-b2a8-2c3e497d5e07.png',
    description: '이벤트 내용'
  },
  {
    id: '5',
    mainImg:
      'https://user-images.githubusercontent.com/90392240/193076592-d71a3a5c-ab7d-4908-b2a8-2c3e497d5e07.png',
    description: '이벤트 내용'
  }
]

interface EventItem {
  id: string
  title?: string
  description?: string
  startTime?: string
  endTime?: string
  mainImg?: string
  descImg?: string[]
}

function EventPage() {
  const navigate = useNavigate()
  const [eventId, setEventId] = useState<string>('')
  const [currentPage, setCurrentPage] = useState(1)

  const onClickEvent = (id: string) => {
    setEventId(id)
    navigate(`/event/${id}`)
  }
  // console.log(eventId)
  // if (eventId) {
  //   const event = useGetDetailEvent(eventId)
  // }
  // const eventList = useGetEvent(currentPage)
  // console.log(eventList)

  useEffect(() => {
    setEventId('')
  }, [])
  return (
    <>
      <PageLayout layoutWidth="w-[90%]" innerTop="top-[40%]">
        <CardTemplate title="이벤트" isTitleVisible={true}>
          <div className=" grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-items-stretch  md:gap-8 md:px-12">
            {/* eventList.map */}
            {events.map((event: EventItem) => (
              <div
                key={event.id}
                className="w-full rounded-xl xs-max:h-[215px] flex flex-col items-center my-2 shadow-basic hover:cursor-pointer"
                onClick={() => onClickEvent(event.id)}
              >
                <img
                  className="w-full h-[145px] md:h-[226px] rounded-t-xl object-fit md:object-cover"
                  src={event.mainImg}
                  alt=""
                />
                <div className=" h-[95px] rounded-b-xl">
                  {/* 이벤트 내용 */}
                  {event.description}
                </div>
              </div>
            ))}
          </div>
          <div className="relative flex justify-center items-center">
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} allCount={50} />
            <Search />
          </div>
        </CardTemplate>
      </PageLayout>
    </>
  )
}

export default EventPage
