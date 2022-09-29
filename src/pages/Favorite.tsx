import React, { useState } from 'react'
import { useLocation, Outlet, Link } from 'react-router-dom'

const Favorite = () => {
  const location = useLocation()
  const [tabState, setTabState] = useState<boolean>(false)

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container pt-44 pb-10 mx-auto ">
          <div className="lg:w-full mx-auto flex flex-wrap py-8 drop-shadow-basic xs-max:w-[95%] ">
            <div className="bg-white w-full dorp-shadow-basic rounded-[5px] px-[40px] py-[20px] xs-max:px-[10px]">
              <div className="text-center mt-2 mb-6 font-bold">즐겨찾기</div>
              <nav className="flex justify-between xs-max:text-[12px]">
                <button
                  onClick={() => setTabState(true)}
                  className={`${
                    location.pathname === '/favorite/all' &&
                    'border-[#030303] border-b-[3px] boder-solid text-[#030303] '
                  } flex-1 text-gray-600 xs-max:px-2 py-4 px-6 block hover:text-[#030303] focus:outline-none border-[#1B304A] border-b-2 font-medium`}
                >
                  <Link to="all">
                    <span>전체</span>
                  </Link>
                </button>

                <button
                  onClick={() => setTabState(false)}
                  className={`${
                    location.pathname === '/favorite/oneday' &&
                    'border-[#030303] border-b-[3px] boder-solid text-[#030303]'
                  } flex-1 text-gray-600 xs-max:px-2 py-4 px-6 block hover:text-[#030303] focus:outline-none border-[#1B304A] border-b-2 font-medium`}
                >
                  <Link to="oneday">
                    <span>원데이</span>
                  </Link>
                </button>

                <button
                  onClick={() => setTabState(false)}
                  className={`${
                    location.pathname === '/favorite/monthly' &&
                    'border-[#030303] border-b-[3px] boder-solid text-[#030303]'
                  } flex-1 text-gray-600 xs-max:px-2 py-4 px-6 block hover:text-[#030303] focus:outline-none border-[#1B304A] border-b-2 font-medium`}
                >
                  <Link to="monthly">
                    <span>먼슬리</span>
                  </Link>
                </button>
              </nav>
              <div className="flex justify-between mt-6 xs-max:text-[14px]">
                <div>
                  <input type="checkbox" value="품절제외" id="isSale" />
                  <label className="ml-1" htmlFor="isSale">
                    품절제외
                  </label>
                </div>
                <div>
                  <button>최근 찜한 순</button>
                </div>
              </div>
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Favorite
