import React from 'react'
import { useNavigate } from 'react-router'
import ViewMoreBtn from './common/ViewMoreBtn'

// 지울 것
const events = [
  {
    id: '1',
    img: 'https://user-images.githubusercontent.com/90392240/193076598-f4c40be6-215a-4c11-9cd4-30d15c7d830d.png',
    description: '이벤트 내용'
  },
  {
    id: '2',
    img: 'https://user-images.githubusercontent.com/90392240/193076604-8d324e4b-0519-4cc8-a8fa-9f538f398103.png',
    description: '이벤트 내용'
  },
  {
    id: '3',
    img: 'https://user-images.githubusercontent.com/90392240/193076590-2067de1e-7f25-4a52-a8e3-89c8051b14b6.png',
    description: '이벤트 내용'
  },
  {
    id: '4',
    img: 'https://user-images.githubusercontent.com/90392240/193076592-d71a3a5c-ab7d-4908-b2a8-2c3e497d5e07.png',
    description: '이벤트 내용'
  }
]

const MainEvent = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div className="flex justify-center text-[24px] ">
        <span className="px-2 h-[45px] border-b-[5px] border-solid border-[#1B304A] text-[18px] md:text-[24px] mt-[25px] mb-[50px] font-[600] hover:cursor-pointer">
          Event
        </span>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mx-2  md:gap-8 md:px-12">
        {events.map((event: any) => (
          <div
            key={event.id}
            className="w-full xs-max:h-[215px] rounded-xl flex flex-col items-center my-2 shadow-basic hover:cursor-pointer"
            onClick={() => navigate('/event')}
          >
            <img
              className="w-full h-[145px] md:h-[226px] rounded-t-xl object-fit md:object-cover"
              src={event.img}
              alt=""
            />
            <div className=" h-[95px] rounded-b-xl">
              {/* 이벤트 내용 */}
              {event.description}
            </div>
          </div>
        ))}
      </div>
      <ViewMoreBtn moveTo="/event" />
    </div>
  )
}

export default MainEvent
