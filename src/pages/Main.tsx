import React, { useEffect, useState } from 'react'
import Event from '../components/main/Event'
import Notice from '../components/main/Notice'
import Recommend from '../components/main/Recommend'
import Review from '../components/Review'
import Banner from './../components/Banner'
import ControlBar from './../components/ControlBar'
import Toast from '../components/common/toast/ToastItem'
import { NavLink, Outlet } from 'react-router-dom'
import CardContainer from '../components/main/CardContainer'
import AllProductList from '../components/main/productList/AllProductList'
import { NoticePageTitle } from '../constants/NoticeTitles'
import NoticePage from './NoticePage'

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
    <div className="container mx-auto ">
      {/* <div>
        <Toast type="success" message="성공하셨습니다!!!" position="bottom" timer={1500} />
        <Toast type="failed" message="실패하셨습니다!!!" position="top" timer={1500} />
      </div> */}

      <div className="pt-44">
        <Banner />
        <section className="flex justify-between">
          {/* 메인의 왼쪽 검색 필터 */}
          <div className="hidden lg:block xl:block w-[280px] mr-12">
            <ControlBar />
          </div>
          {/*메인에서 상품 리스트 */}
          <div className="w-full border-none rounded-md  shadow-[0_0_6px] shadow-gray-400/80">
            {/* <div className="container px-4  flex justify-center items-end"></div> */}
            <div className="md:flex md:justify-center w-full mx-auto">
              <AllProductList />
            </div>
          </div>
        </section>
        <div className="container border-none rounded-md  shadow-[0_0_6px] shadow-gray-400/80">
          <CardContainer data="new" />
        </div>
        {/* <Event />
        <Recommend />
        <Review /> */}
        <div className="container my-[100px] border-none rounded-md  shadow-[0_0_6px] shadow-gray-400/80">
          <NoticePage />
        </div>
      </div>
    </div>
  )
}

export default Main
