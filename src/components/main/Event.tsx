import React from 'react'
import { useNavigate } from 'react-router'

const Event = () => {
  const navigate = useNavigate()
  return (
    <div className="py-2">
      <div className="flex justify-center items-center text-[24px] my-4  ">
        <span className="border-b-[6px] border-solid border-[#1B304A] font-[700] my-10 hover:cursor-pointer">
          Event
        </span>
      </div>
      <div className="w-[100px] h-[40px] my-[20px] mx-auto border-2 border-solid rounded-full flex justify-center items-center">
        <button onClick={() => navigate('/event')}>View More</button>
      </div>
    </div>
  )
}

export default Event
