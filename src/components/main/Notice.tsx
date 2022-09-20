import React from 'react'
import { useNavigate } from 'react-router'
import NoticeTitle from './notice/NoticeTitle'
const Notice = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="my-10 text-[24px] text-center">
        <span
          onClick={() => navigate('/notice')}
          className="border-b-[6px] border-solid border-[#1B304A] hover:cursor-pointer"
        >
          공지사항
        </span>
      </div>
      <div className="flex justify-center items-center w-full mx-auto border-b-2 border-solid ">
        <NoticeTitle />
      </div>
    </>
  )
}

export default Notice
