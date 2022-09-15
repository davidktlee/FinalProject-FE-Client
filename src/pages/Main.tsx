import React, { useEffect, useReducer, useState } from 'react'
import Event from '../components/main/Event'
import Notice from '../components/main/Notice'
import Recommend from '../components/main/Recommend'
import Review from '../components/Review'
import Banner from './../components/Banner'
import ControlBar from './../components/ControlBar'
import CardContainer from './../components/main/CardContainer'
import Toast from '../components/common/Toast'

interface InitialState {
  all: string
  oneDay: string
  monthly: string
}
const initialState: InitialState = {
  all: '#1B304A',
  oneDay: '#9AD0F6',
  monthly: '#9AD0F6'
}
interface ActionType {
  type: string
}
const reducer = (state: InitialState, action: ActionType) => {
  switch (action.type) {
    case 'all':
      return { ...state, all: '#102B91', oneDay: '#9AD0F6', monthly: '#9AD0F6' }
    case 'oneDay':
      return { ...state, all: '#9AD0F6', oneDay: '#102B91', monthly: '#9AD0F6' }
    case 'monthly':
      return { ...state, all: '#9AD0F6', oneDay: '#9AD0F6', monthly: '#102B91' }
    default:
      return state
  }
}

const Main = () => {
  const [selects, setSelects] = useState<string>('')
  const [state, dispatch] = useReducer(reducer, initialState)
  const changeSelects = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setSelects(e.currentTarget.value)
  }

  // selects가 바뀔 때 마다 새로운 상품 리스트 불러오기
  useEffect(() => {
    // const {data: productLists} = useQuery(queryKey, queryFn, options)
  }, [selects])
  return (
    <div className="flex flex-col items-center sm:w-[355px] md:w-[1280px] mx-auto">
      {/* <div>
        <Toast type="success" message="성공하셨습니다!!!" position="bottom" timer={1500} />
        <Toast type="failed" message="실패하셨습니다!!!" position="top" timer={1500} />
      </div> */}
      <Banner />
      <section className="md:flex">
        {/* 메인의 왼쪽 검색 필터 */}
        <span className="hidden md:block w-[280px] ">
          <ControlBar />
        </span>
        {/*메인에서 상품 리스트 */}
        <div className="">
          <div className="border-b-2 border-solid border-[#A4C8E1] text-white">
            <button
              onClick={(e) => {
                dispatch({ type: 'all' })
                changeSelects(e)
              }}
              style={{ backgroundColor: state.all }}
              className="w-[150px] h-[40px] rounded-t-md border-none  mr-[10px]  text-white text-[18px]"
              value="all"
            >
              All
            </button>
            <button
              onClick={(e) => {
                dispatch({ type: 'oneDay' })
                changeSelects(e)
              }}
              style={{ backgroundColor: state.oneDay }}
              className="w-[150px] h-[40px] rounded-t-md border-none  mr-[10px]  text-white text-[18px]"
              value="oneDay"
            >
              One Day
            </button>
            <button
              onClick={(e) => {
                dispatch({ type: 'monthly' })
                changeSelects(e)
              }}
              style={{ backgroundColor: state.monthly }}
              className="w-[150px] h-[40px] rounded-t-md border-none  mr-[10px]  text-white text-[18px]"
              value="monthly"
            >
              Monthly
            </button>
          </div>
          <CardContainer />
          <CardContainer />
        </div>
      </section>
      <Event />
      <Recommend />
      <Review />
      <Notice />
    </div>
  )
}

export default Main
