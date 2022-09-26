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
import MobileBoxLayout from '../components/main/filterbar/common/MobileBoxLayout'
import MobileFilter from '../components/main/filterbar/mobile/MobileFilter'
import { useRecoilState } from 'recoil'
import { filterState } from '../store/filterOpen'

const Main = () => {
  const [selects, setSelects] = useState<string>('')
  const refreshToken = useRefreshToken()

  const [filterOpen, setFilterOpen] = useRecoilState(filterState)

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
  console.log(productLists)
  return (
    <div className="w-[90%] mx-auto ">
      <div className="pt-44 relative">
        <Banner />
        <section className="flex justify-between">
          {/* 메인의 왼쪽 검색 필터 */}
          <div className="xs-max:hidden hidden lg:block xl:block w-[280px] mr-12">
            <FilterBar />
          </div>
          {filterOpen && (
            <div className="xs:hidden mobile-filter fixed top-[106px] z-10 w-full animate-drop">
              <MobileFilter />
            </div>
          )}
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
