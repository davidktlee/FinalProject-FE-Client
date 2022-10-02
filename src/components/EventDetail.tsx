import React from 'react'
import CardTemplate from './common/ui/CardTemplate'
import PageLayout from './common/ui/PageLayout'
import { useGetDetailEvent } from './main/hooks/useEventLists'
import { useNavigate } from 'react-router-dom'
const img =
  'https://user-images.githubusercontent.com/97086762/192783636-f77a8dd9-02b0-4044-a526-47fcd7a1353c.png'

function EventDetail() {
  // const detailEvent = useGetDetailEvent()
  const navigate = useNavigate()

  const clickEventBtn = () => {}
  return (
    <PageLayout layoutWidth="max-w-[1180px]" innerTop="top-[40%]">
      <CardTemplate title="이벤트" isTitleVisible={true}>
        <div className="w-[100%]">
          <div className="flex items-center py-4 border-t-[1px] border-solid">
            <div className="font-[500] ml-10 mr-28">제목</div>
            <div className="font-[500]">{/* {title} */} 가장 많이 묻는 질문 3위</div>
          </div>
          <div className="flex items-center py-4 border-t-[1px] border-b-[1px] border-solid">
            <div className="font-[500] ml-10 mr-24">작성자</div>
            <div className="font-[500]">{/* {author} */}렌시스 관리자</div>
          </div>
          <div className="flex justify-end items-center py-2">
            <span className="font-[500] mr-2">작성일</span>
            <span className="text-lenssisGray font-[500] mr-6">2022.09.17{/* date */}</span>
            <span className="font-[500] mr-2">조회수</span>
            <span className="text-lenssisGray font-[500]">245{/* clickCount */}</span>
          </div>
          <div className=" flex flex-col items-center my-8">
            <img src={img} alt="event-image" />
            <button
              className="my-8 w-[300px] h-[80px] text-[20px] text-[#fff] font-bold bg-lenssisSky rounded-md drop-shadow-basic"
              onClick={clickEventBtn}
            >
              쿠폰 발급받기
            </button>
          </div>
          <div className="border-b-[1px] border-solid pb-12"></div>
          <button
            className="w-[150px] h-[40px] my-4 font-[600] rounded-md border-none bg-[#1B304A] text-white"
            onClick={() => navigate(-1)}
          >
            목록
          </button>
        </div>
      </CardTemplate>
    </PageLayout>
  )
}

export default EventDetail
