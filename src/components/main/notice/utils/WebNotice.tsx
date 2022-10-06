import React from 'react'
import { useNavigate } from 'react-router'
import Pagination from '../../common/Pagination'
import Search from '../../common/Search'
import ViewMoreBtn from '../../common/ViewMoreBtn'

function WebNotice() {
  const navigate = useNavigate()
  const id = 1
  return (
    <>
      <div className="pb-10 hidden xs:block">
        {/* 데이터 받아와서 map 돌릴 곳 */}
        <div className="flex items-center my-8 py-4 border-t-[1px] border-solid border-[#D3D3D3]">
          <div className="mx-14">필독</div>
          <div
            className="ml-[96px] hover:cursor-pointer hover:underline"
            onClick={() => navigate(`/notice/${id}`)}
          >
            내용에 대한 내용이 들어갈 것 들어갈 것
          </div>
        </div>
      </div>
    </>
  )
}

export default WebNotice
