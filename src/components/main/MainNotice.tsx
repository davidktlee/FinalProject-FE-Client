import React from 'react'
import { useNavigate } from 'react-router'
import NoticeTitle from './notice/NoticeTitle'
const MainNotice = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex justify-center items-center text-[24px]  ">
        <span
          onClick={() => navigate('/notice')}
          className="border-b-[6px] border-solid border-[#1B304A] my-10 hover:cursor-pointer"
        >
          공지사항
        </span>
      </div>
      <NoticeTitle />
    </>
  )
}

export default MainNotice
