import React, { useEffect, useState } from 'react'
import Event from '../components/main/MainEvent'
import Recommend from '../components/main/Recommend'
import Review from '../components/Review'
import Banner from './../components/Banner'
import Toast from '../components/common/toast/ToastItem'
import CardContainer from '../components/main/CardContainer'
import AllProductList from '../components/main/productList/AllProductList'
import NoticePage from './NoticePage'
import MainReview from '../components/main/MainReview'
import FilterBar from '../components/main/filterbar/FilterBar'
import axios from 'axios'
import { queryKeys } from '../components/react-query/queryKeys'
import { useQuery } from 'react-query'

const Main = () => {
  const [selects, setSelects] = useState<string>('')
  const changeSelects = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setSelects(e.currentTarget.value)
  }
  const getProduct = async () => {
    const res = await axios.get('http://43.200.50.49:8080/product/allProduct')
    return res.data.data
  }
  // selects가 바뀔 때 마다 새로운 상품 리스트 불러오기
  const { data: productLists } = useQuery([queryKeys.product], getProduct)
  useEffect(() => {}, [])
  console.log(productLists)

  return (
    <div className="container mx-auto ">
      <div className="pt-44 relative">
        <Banner />
        <section className="flex justify-between">
          {/* 메인의 왼쪽 검색 필터 */}
          <div className="hidden lg:block xl:block w-[280px] mr-12">
            <FilterBar />
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
        <div className="container my-[35px] border-none rounded-md  shadow-[0_0_6px] shadow-gray-400/80">
          <Event />
        </div>
        <div className="container my-[35px] border-none rounded-md  shadow-[0_0_6px] shadow-gray-400/80">
          <Recommend />
        </div>
        <div className="container my-[35px] border-none rounded-md  shadow-[0_0_6px] shadow-gray-400/80">
          <MainReview />
        </div>
        <div className="container my-[100px] border-none rounded-md  shadow-[0_0_6px] shadow-gray-400/80">
          <NoticePage />
        </div>
      </div>
    </div>
  )
}

export default Main
