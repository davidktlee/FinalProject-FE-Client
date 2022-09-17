import React, { useEffect, useState } from 'react'
import Event from '../components/main/Event'
import Notice from '../components/main/Notice'
import Recommend from '../components/main/Recommend'
import Review from '../components/Review'
import Banner from './../components/Banner'
import ControlBar from './../components/ControlBar'
import Toast from '../components/common/Toast'
import { NavLink, Outlet } from 'react-router-dom'
import CardContainer from '../components/main/CardContainer'

const Main = () => {
  const [selects, setSelects] = useState<string>('')
  const changeSelects = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setSelects(e.currentTarget.value)
  }
  // selects가 바뀔 때 마다 새로운 상품 리스트 불러오기
  useEffect(() => {
    // const {data: productLists} = useQuery([queryKey,selects], queryFn, options)
  }, [selects])
  return (
    <div className="flex flex-col items-center sm:w-[355px] md:w-[1280px] mx-auto ">
      {/* <div>
        <Toast type="success" message="성공하셨습니다!!!" position="bottom" timer={1500} />
        <Toast type="failed" message="실패하셨습니다!!!" position="top" timer={1500} />
      </div> */}

      <div className="flex flex-col items-center sm:w-[355px] md:w-[1180px] mx-auto my-[80px] ">
        <section className="md:flex ">
          {/* 메인의 왼쪽 검색 필터 */}
          <span className="hidden xl:block w-[280px]">
            <ControlBar />
          </span>
          {/*메인에서 상품 리스트 */}
          <div className="border-2 border-solid border-[#9AD0F6] rounded-xl">
            <div className="md:w-[880px] border-b-2 border-solid flex justify-center items-end">
              <NavLink
                style={({ isActive }) => ({
                  borderBottom: isActive ? '3px solid #102B91' : 'none',
                  fontWeight: isActive ? '800' : 'normal'
                })}
                className="w-[120px] md:w-[220px] h-[44px] rounded-t-md border-none box-border text-black text-[20px] no-underline text-center flex justify-center items-center"
                to="/"
                state="all"
              >
                All
              </NavLink>
              <NavLink
                style={({ isActive }) => ({
                  borderBottom: isActive ? '3px solid #102B91' : 'none',
                  fontWeight: isActive ? '800' : 'normal'
                })}
                className="w-[120px] md:w-[220px] h-[44px] rounded-t-md border-none box-border text-black  text-[20px] no-underline text-center flex justify-center items-center"
                to="oneday"
                state="oneday"
              >
                One day
              </NavLink>
              <NavLink
                style={({ isActive }) => ({
                  borderBottom: isActive ? '3px solid #102B91' : 'none',
                  fontWeight: isActive ? '800' : 'normal'
                })}
                className="w-[120px] md:w-[220px] h-[44px] rounded-t-md border-none box-border text-black  text-[20px] no-underline text-center flex justify-center items-center"
                to="monthly"
                state="monthly"
              >
                Monthly
              </NavLink>
            </div>
            <div className="md:flex md:justify-center">
              <Outlet />
            </div>
          </div>
        </section>
        <Banner />
        <CardContainer />
        <Event />
        <Recommend />
        <Review />
        <Notice />
      </div>
    </div>
  )
}

export default Main
