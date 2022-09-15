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
  oneDay: '#A4C8E1',
  monthly: '#A4C8E1'
}
interface ActionType {
  type: string
}
const reducer = (state: InitialState, action: ActionType) => {
  switch (action.type) {
    case 'all':
      return { ...state, all: '#1B304A', oneDay: '#A4C8E1', monthly: '#A4C8E1' }
    case 'oneDay':
      return { ...state, all: '#A4C8E1', oneDay: '#1B304A', monthly: '#A4C8E1' }
    case 'monthly':
      return { ...state, all: '#A4C8E1', oneDay: '#A4C8E1', monthly: '#1B304A' }
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
    <div className="flex flex-col items-center sm:w-[355px] md:w-[1180px] mx-auto">
      <div>
        <Toast type="success" message="성공하셨습니다!!!" position="bottom" timer={1500} />
        <Toast type="failed" message="실패하셨습니다!!!" position="top" timer={1500} />
      </div>
      <Banner />
      <div className="md:grid md:grid-cols-3 sm:grid sm:grid-cols-1">
        {/* 메인의 왼쪽 검색 필터 */}
        <span className="hidden md:block w-[280px]">
          <ControlBar />
        </span>
        {/*메인에서 상품 리스트 */}
        <div className="sm:col-span-3 md:col-span-2">
          <div className="border-b-2 border-solid border-[#A4C8E1] text-white">
            <button
              onClick={(e) => {
                dispatch({ type: 'all' })
                changeSelects(e)
              }}
              style={{ backgroundColor: state.all }}
              className="w-32 h-6 rounded-t-md border-none bg-cyan-100 mx-2  text-white"
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
              className="w-32 h-6 rounded-t-md border-none bg-cyan-100 mx-2 text-white"
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
              className="w-32 h-6 rounded-t-md border-none bg-cyan-100 mx-2 text-white"
              value="monthly"
            >
              Monthly
            </button>
          </div>
          <CardContainer />
        </div>
      </div>
      <Event />
      <Recommend />
      <Review />
      <Notice />
    </div>
  )
}

export default Main
