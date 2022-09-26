import { useEffect, useState } from 'react'
import Event from '../components/main/MainEvent'
import Recommend from '../components/main/Recommend'
import Banner from './../components/Banner'
import CardContainer from '../components/main/CardContainer'
import NoticePage from './NoticePage'
import MainReview from '../components/main/MainReview'
import FilterBar from '../components/main/filterbar/FilterBar'

import { useRefreshToken } from '../components/auth/hooks/useRefreshToken'
import { getStoredToken } from '../components/local-storage/userStorage'

import axios from 'axios'
import { queryKeys } from '../components/react-query/queryKeys'
import { useQuery } from 'react-query'

const Main = () => {
  const [selects, setSelects] = useState<string>('')
  const refreshToken = useRefreshToken()

  useEffect(() => {
    const token = getStoredToken()
    refreshToken(token)
    console.log('main interceptor')
  }, [])

  const getProduct = async () => {
    const res = await axios.get('https://633010e5591935f3c8893690.mockapi.io/lenssis/api/v1/products')
    return res.data
  }

  const { data: productLists } = useQuery([queryKeys.product], getProduct, {
    refetchOnWindowFocus: false
  })

  return (
    <div className="w-[90%] mx-auto ">
      <div className="pt-44 relative">
        <Banner />
        <section className="flex justify-between">
          {/* 메인의 왼쪽 검색 필터 */}
          <div className="hidden lg:block xl:block w-[280px] mr-12">
            <FilterBar />
          </div>
          {/*메인에서 상품 리스트 */}
          <div className="w-full mx-auto border-none rounded-md shadow-[0_0_6px] shadow-gray-400/80">
            {/* <div className="container px-4  flex justify-center items-end"></div> */}
            <CardContainer data="product" productLists={productLists} />
          </div>
        </section>
        <div className="w-full border-none rounded-md  shadow-[0_0_6px] shadow-gray-400/80">
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
