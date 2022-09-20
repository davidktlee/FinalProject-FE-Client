import React from 'react'
import { useNavigate } from 'react-router'
// 필독에 대한 내용 데이터
function MustRead() {
  const navigate = useNavigate()
  const id = 1
  return (
    <div className="pb-10">
      {/* 데이터 받아와서 map 돌릴 곳 */}
      <div className="flex justify-center items-center my-8 py-4 border-t-2 border-solid">
        <div className="ml-14 ">필독</div>
        <div className="flex-1 ml-60 ">
          <span className="hover:cursor-pointer hover:underline" onClick={() => navigate(`/notice/${id}`)}>
            내용에 대한 내용이 들어갈 것 들어갈 것
          </span>
        </div>
        <div className="mr-12">조회수 245</div>
      </div>
      <div className="mt-16 flex justify-center">
        <span className="hover:cursor-pointer mx-4">
          <svg width="7" height="17" viewBox="0 0 7 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.99805 1L1.49919 8.5L5.99805 16" stroke="#6D6D6D" stroke-width="0.975844" />
          </svg>
        </span>
        <span className="hover:cursor-pointer mx-4">
          <svg width="7" height="17" viewBox="0 0 7 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.998047 16L5.4969 8.5L0.998047 1" stroke="#6D6D6D" stroke-width="0.975844" />
          </svg>
        </span>
      </div>
    </div>
  )
}

export default MustRead
