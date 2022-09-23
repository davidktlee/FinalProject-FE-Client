import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function MobileNotice() {
  const navigate = useNavigate()
  const id = 1

  const [isOpenSearch, setIsOpenSearch] = useState(false)
  const openSearchHandler = () => {
    setIsOpenSearch((prev) => (prev = true))
  }
  const closeSearchHandler = () => {
    setIsOpenSearch((prev) => (prev = false))
  }
  return (
    <>
      <div className="block xs:hidden pb-10">
        <div className="rounded-md items-center my-2 py-2 pl-4 shadow-[0_0_6px] shadow-gray-400/80">
          <div className="">
            <span className="hover:cursor-pointer hover:underline" onClick={() => navigate(`/notice/${id}`)}>
              내용에 용에 들어 달것
            </span>
          </div>
          <div className="flex">
            <div className="mr-4">작성자</div>
            <div className="">조회수 245</div>
          </div>
        </div>
        <div className="mt-16 flex justify-center items-center">
          <div className="flex-1 flex justify-center items-center ">
            <span className="hover:cursor-pointer mx-4">
              <svg width="7" height="17" viewBox="0 0 7 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.99805 1L1.49919 8.5L5.99805 16" stroke="#6D6D6D" strokeWidth="0.975844" />
              </svg>
            </span>
            <span>1 2 3 </span>
            <span className="hover:cursor-pointer mx-4">
              <svg width="7" height="17" viewBox="0 0 7 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.998047 16L5.4969 8.5L0.998047 1" stroke="#6D6D6D" strokeWidth="0.975844" />
              </svg>
            </span>
          </div>

          {isOpenSearch ? (
            <span className="relative animate-left" onClick={closeSearchHandler}>
              <input
                className="p-[4px] border-[1px] border-solid border-[#A6A6A6] rounded-md opacity relative"
                placeholder="Search"
              />
              <span className="absolute top-[2px] right-2">X</span>
            </span>
          ) : (
            <span className="absolute right-4" onClick={openSearchHandler}>
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.3998 16.1696C22.3998 19.6099 19.6109 22.3988 16.1706 22.3988C12.7303 22.3988 9.94141 19.6099 9.94141 16.1696C9.94141 12.7293 12.7303 9.94043 16.1706 9.94043C19.6109 9.94043 22.3998 12.7293 22.3998 16.1696Z"
                  stroke="#92C8ED"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25.8841 24.0598L22.3984 20.5742"
                  stroke="#92C8ED"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          )}
        </div>
      </div>
    </>
  )
}

export default MobileNotice
