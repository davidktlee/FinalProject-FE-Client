import React, { useEffect } from 'react'
import { useMutation } from 'react-query'
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil'
import { graphicDiameter, colors, series, features } from '../../../constants/filterData'
import { filteredProudcts, filterOptionState, FilterValue } from '../../../store/filterVallue'
import { useUser } from '../../auth/hooks/useUser'
import { axiosInstance } from '../../axiosinstance'
import BoxLayout from './common/BoxLayout'
import FilterButtons from './FilterButtons'
import Refresh from '/assets/Refresh.svg'

const FilterBar = () => {
  const { user } = useUser()
  const resetFilter = useResetRecoilState(filterOptionState)
  const resetFilteredProducts = useResetRecoilState(filteredProudcts)
  const [filter, setFilter] = useRecoilState(filterOptionState)
  const setFilteredProducts = useSetRecoilState(filteredProudcts)

  const requestFilterOptions = async (filter: FilterValue) => {
    const { data } = await axiosInstance({
      method: 'POST',
      url: '/product/byOption',
      params: user?.memberId ? { memberId: user.memberId } : { memberId: 0 },
      data: {
        colorCode: filter.colorState,
        feature: filter.featureState,
        graphicDiameter: filter.graphicDiameterState,
        period: filter.periodState,
        series: filter.seriesState
      }
    })
    return data
  }

  const { mutate: requstFilter } = useMutation((filter: FilterValue) => requestFilterOptions(filter), {
    mutationKey: 'filterOptions',
    onSuccess: ({ data }) => {
      setFilteredProducts(data)
    },
    onError: (error) => {
      console.log(error, '필터 에러 발생')
    }
  })

  const handleFilterValue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const name = e.currentTarget.name
    const value = e.currentTarget.value.split(',').map(Number)
    if (name === 'period') {
      // requstFilter(filter)
      if (filter.periodState[1] === Number(value)) {
        setFilter({
          ...filter,
          periodState: filter.periodState.filter((item) => item == Number(value))
        })
      }
      if (filter.periodState[0] === Number(value)) {
        setFilter({
          ...filter,
          periodState: filter.periodState.filter((item) => item == Number(value))
        })
      } else {
        console.log('상품 전체 클릭!')
        resetFilter()
        resetFilteredProducts()
        setFilter({
          ...filter,
          periodState: [...value].length === 2 ? [...value.map(Number)] : [Number(value)]
        })
      }
    }
  }
  const handleFilter = (filter: FilterValue) => {
    if (filter.periodState.length === 0) return
    requstFilter(filter)
  }

  useEffect(() => {
    handleFilter(filter)
  }, [filter])

  const refreshHandler = () => {
    resetFilter()
    resetFilteredProducts()
  }

  return (
    <div className="bg-[#fff] rounded-[10px] h-[1450px] w-[280px] px-[18px] py-[20px] shadow-basic">
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
              value={['1', '30']}
              className={`${
                filter.periodState.length === 0 || filter.periodState.length === 2
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
                value={30}
                className={`${
                  filter.periodState[0] === 30 ? 'bg-lenssisDark text-white border-lenssisDark' : ''
                } cursor-pointer flex-1 border-solid border-[#D3D3D3] border-[1px] rounded-[28px] text-center py-1`}
              >
                먼슬리
              </button>
              <button
                name="period"
                onClick={handleFilterValue}
                value={1}
                className={`${
                  filter.periodState[0] === 1 && filter.periodState.length === 1
                    ? 'bg-lenssisDark text-white border-lenssisDark'
                    : ''
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
