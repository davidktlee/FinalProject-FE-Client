import axios from 'axios'
import React, { useEffect } from 'react'
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil'
import { graphicDiameter, colors, series, features } from '../../../constants/filterData'
import { filterState } from '../../../store/filterVallue'
import { axiosInstance } from '../../axiosinstance'
import { useGetProductsList } from '../hooks/useProductLists'
import BoxLayout from './common/BoxLayout'
import FilterButtons from './FilterButtons'
import Refresh from '/assets/Refresh.svg'

const FilterBar = () => {
  const resetFilter = useResetRecoilState(filterState)

  const [filter, setFilter] = useRecoilState(filterState)

  const handleFilterValue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const name = e.currentTarget.name
    const value = e.currentTarget.value
    if (name === 'period') {
      if (filter.periodState[0] === value) {
        setFilter({
          ...filter,
          periodState: filter.periodState.filter((item: string) => item !== value)
        })
      } else if (filter.periodState[0] !== value) {
        setFilter({
          ...filter,
          periodState: value ? [value] : []
        })
      } else {
        setFilter({
          ...filter,
          periodState: [...filter.periodState, value]
        })
      }
    }
    console.log(filter.periodState)
  }

  const refreshHandler = () => {
    resetFilter()
  }

  useEffect(() => {
    // requestFilter()
    // getProduct()
  }, [])

  return (
    <div className="bg-[#fff] rounded-[10px] h-[1180px] w-[280px] px-[18px] py-[20px] shadow-basic">
      <div className="filter-title">
        <div className="flex justify-between px-[15px] py-[20px]">
          <div className="font-extrabold text-[20px]">Filter</div>
          <img className="cursor-pointer" onClick={refreshHandler} src={Refresh} />
        </div>
      </div>
      <div>
        <BoxLayout title="사용기간">
          <div className="flex flex-col py-3 gap-2 text-lenssisDeepGray">
            <button
              name="period"
              onClick={handleFilterValue}
              // value=""
              className={`${
                filter.periodState.length === 0 || filter.periodState[0] === ''
                  ? 'bg-lenssisDark text-white border-lenssisDark'
                  : ''
              } border-solid border-[#D3D3D3] border-[1px] rounded-[28px] text-center py-1 `}
            >
              상품 전체
            </button>
            <div className="flex justify-between gap-2">
              <button
                name="period"
                onClick={handleFilterValue}
                value="monthly"
                className={`${
                  filter.periodState[0] === 'monthly' ? 'bg-lenssisDark text-white border-lenssisDark' : ''
                } cursor-pointer flex-1 border-solid border-[#D3D3D3] border-[1px] rounded-[28px] text-center py-1`}
              >
                먼슬리
              </button>
              <button
                name="period"
                onClick={handleFilterValue}
                value="oneDay"
                className={`${
                  filter.periodState[0] === 'oneDay' ? 'bg-lenssisDark text-white border-lenssisDark' : ''
                } cursor-pointer flex-1 border-solid border-[#D3D3D3] border-[1px] rounded-[28px] text-center py-1`}
              >
                원데이
              </button>
            </div>
          </div>
        </BoxLayout>
      </div>
      <div>
        <BoxLayout title="그래픽 직경">
          <FilterButtons
            contents={graphicDiameter}
            w={'w-[55px]'}
            h={'h-[30px]'}
            py={'py-[1px]'}
            px={'px-[14px]'}
          />
        </BoxLayout>
      </div>
      <div>
        <BoxLayout title="색상">
          <FilterButtons contents={colors} w={'w-[55px]'} h={'h-[30px]'} py={'py-[3px]'} px={'px-[14px]'} />
        </BoxLayout>
      </div>
      <div>
        <BoxLayout title="시리즈">
          <FilterButtons contents={series} w={'w-[110px]'} h={'h-[35px]'} py={'py-[3px]'} px={'px-[17px]'} />
        </BoxLayout>
      </div>
      <div>
        <BoxLayout title="특징">
          <FilterButtons
            contents={features}
            w={'w-[110px]'}
            h={'h-[35px]'}
            py={'py-[3px]'}
            px={'px-[17px]'}
          />
        </BoxLayout>
      </div>
    </div>
  )
}

export default FilterBar
